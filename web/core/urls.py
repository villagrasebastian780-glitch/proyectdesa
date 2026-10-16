from django.urls import path
from .views import cel, home, lap, login_view, logout_view, tablets

urlpatterns = [
    path('', home, name='home'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('cel.html', cel, name='cel'),
    path('lap.html', lap, name='lap'),
    path('tablets.html', tablets, name='tablets'),
]