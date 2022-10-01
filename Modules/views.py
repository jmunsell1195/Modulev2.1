from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.views import LoginView
from django.contrib.sessions.models import Session
import random

cnt ={'c1':0,'c0':0}
def even_dist(cnt):
    if cnt['c1'] > cnt['c0']:
        cnt['c0'] += 1
        return 0
    elif cnt['c1'] < cnt['c0']:
        cnt['c1'] += 1
        return 1
    else:
        x = random.randint(0,1)
        if x == 0:
            cnt['c0'] += 1
            return 0
        else:
            cnt['c1'] += 1
            return 1

def Energy_Classify(request):
    if even_dist(cnt) == 1:
        return redirect('Energy_HLG/')
    else:
        return redirect('Energy_LLG')

def Forces_Classify(request):
        return redirect('Force_HLG/')


def SHO_Classify(request):
    if even_dist(cnt) == 1:
        return redirect('SHO_HLG/')
    else:
        return redirect('SHO_LLG/')

def Main(request):
    return render(request,'Modules/main.html')

def landing(request):
    return redirect('Auth/login/')