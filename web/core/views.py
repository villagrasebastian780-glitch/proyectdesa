import requests
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import redirect, render


API_URLS = ['http://api:3000/api/catalogo', 'http://localhost:3000/api/catalogo']


def get_catalog_data():
    for api_url in API_URLS:
        try:
            response = requests.get(api_url, timeout=5)
            response.raise_for_status()
            return response.json()
        except requests.RequestException:
            continue
    return []


def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username', '').strip()
        password = request.POST.get('password', '').strip()
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
    return render(request, 'login.html', {'error': 'Credenciales inválidas'})


@login_required(login_url='login')
def home(request):
    data = get_catalog_data()
    return render(request, 'index.html', {'data': data})


def logout_view(request):
    logout(request)
    return redirect('login')
