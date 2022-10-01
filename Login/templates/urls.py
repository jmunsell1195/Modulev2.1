from django.contrib import admin
from django.urls import path, include
from django.contrib.auth.views import LoginView
from .views import Login

app_name = 'Login'
urlpatterns = [
    path('', MyLogin.as_view(template_name = 'Login/Login.html'), name='Login'),
]