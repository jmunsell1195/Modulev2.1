from django import forms
from .models import *

class pretestForm(forms.ModelForm):
    class Meta:
        model = pretestEdu
        fields = ('choice','pageState')
    choice_field = [('1',''),
    ('2',''),
    ('3',''),('4','')]
    choice = forms.CharField(widget=forms.RadioSelect(choices=choice_field,attrs={'style':"width:1.2rem; height:1.2rem"}))

class pretestLogForm(forms.ModelForm):
        class Meta:
            model = pretestLog
            fields = ('pageState','event','timeStamp')

class pretestMouseForm(forms.ModelForm):
        class Meta:
            model = pretestMouseEvent
            fields = ('pageState','event','timeStamp','mouseX','mouseY','clickedITMtl','clickedITMbr','keyPressed')

class vectorLogForm(forms.ModelForm):
        class Meta:
            model = vectorsLog
            fields = ('pageState','event','timeStamp')

class vectorForm(forms.ModelForm):
    class Meta:
        model = vectorsEdu
        fields = ('choice','pageState')
    choice_field = [('1',''),
    ('2',''),
    ('3',''),('4','')]
    choice = forms.CharField(widget=forms.RadioSelect(choices=choice_field,attrs={'style':"width:1.2rem; height:1.2rem"}))

class vectorLogForm(forms.ModelForm):
        class Meta:
            model = vectorsLog
            fields = ('user','pageState','event','videoNumber','videoTime','timeStamp','Wandering')

class vectorMouseForm(forms.ModelForm):
        class Meta:
            model = vectorsMouseEvent
            fields = ('user','pageState','event','timeStamp','videoNumber','videoTime','mouseX','mouseY','clickedITMtl','clickedITMbr','keyPressed')

class forceForm(forms.ModelForm):
    class Meta:
        model = forceEdu
        fields = ('choice','pageState')
    choice_field = [('1',''),
    ('2',''),
    ('3',''),('4','')]
    choice = forms.CharField(widget=forms.RadioSelect(choices=choice_field,attrs={'style':"width:1.2rem; height:1.2rem"}))

class forceLogForm(forms.ModelForm):
        class Meta:
            model = forceLog
            fields = ('user','pageState','event','videoNumber','timeStamp','videoTime','Wandering')

class forceMouseForm(forms.ModelForm):
        class Meta:
            model = forceMouseEvent
            fields = ('user','pageState','event','timeStamp','videoNumber','videoTime','mouseX','mouseY','clickedITMtl','clickedITMbr','keyPressed')


class posttestForm(forms.ModelForm):
    class Meta:
        model = posttestEdu
        fields = ('choice','pageState')
    choice_field = [('1',''),
    ('2',''),
    ('3',''),('4','')]
    choice = forms.CharField(widget=forms.RadioSelect(choices=choice_field,attrs={'style':"width:1.2rem; height:1.2rem"}))

class posttestLogForm(forms.ModelForm):
        class Meta:
            model = posttestLog
            fields = ('pageState','event','timeStamp')

class posttestMouseForm(forms.ModelForm):
        class Meta:
            model = posttestMouseEvent
            fields = ('pageState','event','timeStamp','mouseX','mouseY','clickedITMtl','clickedITMbr','keyPressed')





