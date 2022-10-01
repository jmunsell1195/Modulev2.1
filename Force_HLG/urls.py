from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.info,name='force'),
    path('warmup/',views.pretest),
    path('vectors/',views.vectors),
    path('Forces/',views.forces),
    path('Post/',views.posttest),
    path('Complete/',views.complete),
]