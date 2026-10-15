from unittest.mock import patch

from django.contrib.auth.models import User
from django.test import TestCase
from django.urls import reverse


class LoginAndCatalogTests(TestCase):
    def test_login_page_renders(self):
        response = self.client.get(reverse('login'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Iniciar sesión')

    def test_login_with_default_credentials_redirects_home(self):
        User.objects.create_user(username='admin', password='admin123')
        response = self.client.post(reverse('login'), {'username': 'admin', 'password': 'admin123'})
        self.assertRedirects(response, reverse('home'))
        self.assertTrue(response.wsgi_request.user.is_authenticated)

    @patch('core.views.requests.get')
    def test_home_displays_products_from_api(self, mock_get):
        class MockResponse:
            def raise_for_status(self):
                return None

            def json(self):
                return [
                    {'name': 'iPhone 13', 'description': '128 GB', 'price': '799.00'}
                ]

        mock_get.return_value = MockResponse()
        user = User.objects.create_user(username='tester', password='secret123')
        self.client.force_login(user)

        response = self.client.get(reverse('home'))

        self.assertContains(response, 'iPhone 13')
        self.assertContains(response, '$799.00')
