from django.contrib import admin
from django.urls import path, include
from . import views

app_name = 'Login'
urlpatterns = [
    path('login/', views.loginUser, name='login'),
    path('logout/',views.logoutUser,name="logout"),
]