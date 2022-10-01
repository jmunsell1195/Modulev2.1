from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.landing),
    path('admin/', admin.site.urls),
    path('main/',views.Main,name='main'),
    path('Auth/',include('Login.urls')),
    # Module_Classify is a function that evenly participates participants to different conditions HLG/LLG
    # for each module (Force, Energy, Simple Harmonic Oscillator (SHO))
    path('Energy/',views.Energy_Classify,name="energy"),
    path('Force/',views.Forces_Classify,name="force"),
    path('SHM/',views.SHO_Classify,name="shm"),
    # Serves as the entry point to the different modules (HLG/LLG)
    path('Force/Force_HLG/',include('Force_HLG.urls')),
    path('api/',include('api.urls'))
]
