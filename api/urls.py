from django.urls import path,include
from . import views


urlpatterns = [
########### HLG ##################################
    path('HLG/pre/Ans/',views.HLGpreAns),
    path('HLG/pre/Page/',views.HLGprePage),
    path('HLG/pre/Mouse/',views.HLGpreMouse),
    path('HLG/vec/Ans/',views.HLGvecAns),
    path('HLG/vec/Page/',views.HLGvecPage),
    path('HLG/vec/Mouse/',views.HLGvecMouse),
    path('HLG/forces/Ans/',views.HLGforceAns),
    path('HLG/forces/Page/',views.HLGforcePage),
    path('HLG/forces/Mouse/',views.HLGforceMouse),
    path('HLG/post/Ans/',views.HLGpostAns),
    path('HLG/post/Page/',views.HLGpostPage),
    path('HLG/post/Mouse/',views.HLGpostMouse),]

