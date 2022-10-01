from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
import Force_HLG.models as HLG
from django.shortcuts import HttpResponse
from django.contrib.auth.decorators import login_required

############# HLG Pre ###############################

@api_view(['GET'])
def HLGpreAns(request):
    resp = HLG.pretestEdu.objects.all()
    serializer = HLG_pretest_answer(resp,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def HLGprePage(request):
    resp = HLG.pretestLog.objects.all()
    serializer = HLG_pretest_page(resp,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def HLGpreMouse(request):
    resp = HLG.pretestMouseEvent.objects.all()
    serializer = HLG_pretest_mouse(resp,many=True)
    return Response(serializer.data)

############## HLG Vectors ###############################

@api_view(['GET'])
def HLGvecAns(request):
    resp = HLG.vectorsEdu.objects.all()
    serializer = HLG_vectors_answer(resp,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def HLGvecPage(request):
    resp = HLG.vectorsLog.objects.all()
    serializer = HLG_vectors_page(resp,many=True)
    return Response(serializer.data)

@api_view(['get'])
def HLGvecMouse(request):
    resp = HLG.vectorsMouseEvent.objects.all()
    serializer = HLG_vectors_mouse(resp,many=True)
    return Response(serializer.data)

########### HLG Forces #####################################

@api_view(['get'])
def HLGforceAns(request):
    resp = HLG.forceEdu.objects.all()
    serializer = HLG_force_answer(resp,many=True)
    return Response(serializer.data)

@api_view(['get'])
def HLGforcePage(request):
    resp = HLG.forceLog.objects.all()
    serializer = HLG_force_page(resp,many=True)
    return Response(serializer.data)

@api_view(['get'])
def HLGforceMouse(request):
    resp = HLG.forceMouseEvent.objects.all()
    serializer = HLG_force_mouse(resp,many=True)
    return Response(serializer.data)

########### HLG Post ##########################################

@api_view(['get'])
def HLGpostAns(request):
    resp = HLG.posttestEdu.objects.all()
    serializer = HLG_Post_Answer(resp,many=True)
    return Response(serializer.data)

@api_view(['get'])
def HLGpostPage(request):
    resp = HLG.posttestLog.objects.all()
    serializer = HLG_force_page(resp,many=True)
    return Response(serializer.data)

@api_view(['get'])
def HLGpostMouse(request):
    resp = HLG.posttestMouseEvent.objects.all()
    serializer = HLG_force_mouse(resp,many=True)
    return Response(serializer.data)









