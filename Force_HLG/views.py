from django.shortcuts import render
from django.http import HttpResponse

from Force_HLG.form import forceForm, forceLogForm, forceMouseForm
from .form import *
import pandas as pd

# Create your views here.
def info(request):
    return render(request,'Force_HLG/details.html')

# View for pretest
def pretest(request):
    if request.method == "POST":
        if request.headers['event'] == 'submission':
            form = pretestForm(request.POST)
            if form.is_valid():
                form = form.save(commit=False)
                form.user = request.user
                form.question = request.headers['question']
                form.timeStamp = request.headers['timeStamp']
                form.pageState = request.headers['pageState']
                form.save()
                return HttpResponse('There was a problem')
            else: 
                print(form.errors)
        elif request.headers['event'] == 'page':
            form = pretestLogForm(request.POST)
            if form.is_valid():
                form = form.save(commit=False)
                form.user = request.user
                form.save()
                print(request.user)
                print('log form saved')
                return HttpResponse('yay')
        elif request.headers['event'] == 'mouse':
            print('mouse')
            form = pretestMouseForm(request.POST)
            if form.is_valid():
                form = form.save(commit=False)
                form.user = request.user
                form.save()
                return HttpResponse('There was a problem')
            
    else:
        form_list = [pretestForm() for i in range(10)]
        form_label_list = ['form'+str(i+1) for i in range(10)]
        forms = dict(zip(form_label_list,form_list))
        forms['log'] = pretestLogForm()
        forms['mouse'] = pretestMouseForm()
        forms['mouse2'] = pretestMouseForm()
        return render(request,'Force_HLG/pretest.html',{'forms':forms})


# View for vectors
def vectors(request):
    if request.method == "POST":
        usr = request.user
        if request.headers['event'] == 'submission':
            form = vectorForm(request.POST)
            if form.is_valid():
                form = form.save(commit=False)
                form.user = request.user
                form.pageState = 'Question'
                form.event = 'submission'
                form.question = 'q1'
                form.timeStamp = request.headers['datetime']
                form.save()
                return HttpResponse('yay')
        elif request.headers['event'] == 'page':
            form = vectorLogForm(request.POST)
            if form.is_valid():
                form.save()
                return HttpResponse('yay')
        else:
            form = vectorMouseForm(request.POST)
            if form.is_valid():
                form.save()
                return HttpResponse('yay')
            else:
                print(form.errors)
    else:    
        form = vectorForm()
        log = vectorLogForm()
        log2 = vectorLogForm()
        mouse = vectorMouseForm()
        context = {'form':form,'log':log,'log2':log2,'mouse':mouse,'user':request.user}
        return render(request,'Force_HLG/vectors.html',{"context":context})

# View for forces
def forces(request):
    if request.method == "POST":
        print('post')
        if request.headers['event'] == 'submission':
            form = forceForm(request.POST)
            if form.is_valid():
                form = form.save(commit=False)
                form.user = request.user
                form.pageState = 'Question'
                form.event = 'submission'
                form.question = 'q1'
                form.timeStamp = request.headers['datetime']
                form.save()
                print("choice_form_saved")
                return HttpResponse('yay')
        elif request.headers['event'] == 'page':
            form = forceLogForm(request.POST)
            if form.is_valid():
                form.save(commit=False)
                form.user = request.user
                form.save()
                print(request.user)
                print('log form saved')
                return HttpResponse('yay')
        else:
            form = forceMouseForm(request.POST)
            if form.is_valid():
                form.save(commit=False)
                form.user = request.user
                form.save()
                return HttpResponse('yay')
            else:
                print(form.errors)
    
    else:
        form = forceForm()
        log = forceLogForm()
        log2 = forceLogForm()
        mouse = forceMouseForm()
        context = {'form':form,'log':log,'mouse':mouse,'log2':log2,'user':request.user}
        return render(request,'Force_HLG/n2.html',{'context':context})

# View for pretest
def posttest(request):
    if request.method == "POST":
        if request.headers['event'] == 'submission':
            form = posttestForm(request.POST)
            if form.is_valid():
                form = form.save(commit=False)
                form.user = request.user
                form.question = request.headers['question']
                form.timeStamp = request.headers['timeStamp']
                form.pageState = request.headers['pageState']
                form.save()
                return HttpResponse('There was a problem')
            else: 
                print(form.errors)
        elif request.headers['event'] == 'page':
            form = posttestLogForm(request.POST)
            if form.is_valid():
                form = form.save(commit=False)
                form.user = request.user
                print(request.user)
                form.save()
                
                print('log form saved')
                return HttpResponse('yay')
        elif request.headers['event'] == 'mouse':
            print('mouse')
            form = posttestMouseForm(request.POST)
            if form.is_valid():
                form = form.save(commit=False)
                form.user = request.user
                form.save()
                print('mouse form saved')
                return HttpResponse('There was a problem')

    else:
        form_list = [posttestForm() for i in range(10)]
        form_label_list = ['form'+str(i+1) for i in range(10)]
        forms = dict(zip(form_label_list,form_list))
        forms['log'] = posttestLogForm()
        forms['mouse'] = posttestMouseForm()
        forms['mouse2'] = posttestMouseForm()
        return render(request,'Force_HLG/postTest.html',{'forms':forms})

def complete(request):
    return render(request,'Force_HLG/complete.html')
