import pandas as pd
from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.contrib.auth.views import LoginView
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages


def loginUser(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request,'Username is not correct')
    
        user = authenticate(request,username = username, password = password)

        if user is not None:
            login(request,user)
            return redirect('/Force/')
        else: 
            messages.error(request,'Password is incorrect')
    
    return render(request,'Login/Login.html')

def logoutUser(request):
    logout(request)
    return render(request,'Login/Logout.html')