from django.db import models

class pretestEdu(models.Model):
    pageState = models.CharField(max_length=200,blank=True)
    timeStamp = models.CharField(max_length=100,blank=True)
    user = models.CharField(max_length=25,blank=True)
    question = models.CharField(max_length=25,blank=True)
    choice = models.CharField(max_length=25)


class pretestLog(models.Model):
    pageState = models.CharField(max_length=200,blank=True)
    event = models.CharField(max_length=100)
    user = models.CharField(max_length=25)
    videoNumber = models.CharField(max_length=25,blank=True)
    videoTime = models.CharField(max_length=25,blank=True)
    timeStamp = models.CharField(max_length=100)
    Wandering = models.CharField(max_length=25,blank=True)

class pretestMouseEvent(models.Model):
    pageState = models.CharField(max_length=200,blank=True)
    event = models.CharField(max_length=100)
    user = models.CharField(max_length=25)
    timeStamp = models.CharField(max_length=100)
    mouseX = models.CharField(max_length=25,blank=True)
    mouseY = models.CharField(max_length=25,blank=True)
    clickedITMtl = models.CharField(max_length=25,blank=True)
    clickedITMbr = models.CharField(max_length=25,blank=True)
    keyPressed = models.CharField(max_length=25,blank=True)

class vectorsEdu(models.Model):
    pageState = models.CharField(max_length=200,blank=True)
    event = models.CharField(max_length=100,blank=True)
    timeStamp = models.CharField(max_length=100,blank=True)
    user = models.CharField(max_length=25,blank=True)
    question = models.CharField(max_length=25,blank=True)
    choice = models.CharField(max_length=25)
    
class vectorsLog(models.Model):
    pageState = models.CharField(max_length=200,blank=True)
    event = models.CharField(max_length=100)
    user = models.CharField(max_length=25)
    videoNumber = models.CharField(max_length=25,blank=True)
    videoTime = models.CharField(max_length=25,blank=True)
    timeStamp = models.CharField(max_length=100)
    Wandering = models.CharField(max_length=25,blank=True)


class vectorsMouseEvent(models.Model):
    pageState = models.CharField(max_length=200,blank=True)
    event = models.CharField(max_length=100)
    user = models.CharField(max_length=25)
    timeStamp = models.CharField(max_length=100,blank=True)
    mouseX = models.CharField(max_length=25,blank=True)
    mouseY = models.CharField(max_length=25,blank=True)
    videoNumber = models.CharField(max_length=25,blank=True)
    videoTime = models.CharField(max_length=25,blank=True)
    clickedITMtl = models.CharField(max_length=25,blank=True)
    clickedITMbr = models.CharField(max_length=25,blank=True)
    keyPressed = models.CharField(max_length=25,blank=True)

class forceEdu(models.Model):
    pageState = models.CharField(max_length=200,blank=True)
    event = models.CharField(max_length=100,blank=True)
    timeStamp = models.CharField(max_length=100,blank=True)
    user = models.CharField(max_length=25,blank=True)
    question = models.CharField(max_length=25,blank=True)
    choice = models.CharField(max_length=25)
    
class forceLog(models.Model):
    pageState = models.CharField(max_length=200,blank=True)
    event = models.CharField(max_length=100)
    user = models.CharField(max_length=25,blank=True)
    videoNumber = models.CharField(max_length=25,blank=True)
    videoTime = models.CharField(max_length=25,blank=True)
    timeStamp = models.CharField(max_length=100)
    Wandering = models.CharField(max_length=25,blank=True)

class forceMouseEvent(models.Model):
    pageState = models.CharField(max_length=200,blank=True)
    event = models.CharField(max_length=100)
    user = models.CharField(max_length=25,blank=True)
    timeStamp = models.CharField(max_length=100)
    mouseX = models.CharField(max_length=25,blank=True)
    mouseY = models.CharField(max_length=25,blank=True)
    videoNumber = models.CharField(max_length=25,blank=True)
    videoTime = models.CharField(max_length=25,blank=True)
    clickedITMtl = models.CharField(max_length=25,blank=True)
    clickedITMbr = models.CharField(max_length=25,blank=True)
    keyPressed = models.CharField(max_length=25,blank=True)

class posttestEdu(models.Model):
    pageState = models.CharField(max_length=200,blank=True)
    timeStamp = models.CharField(max_length=100,blank=True)
    user = models.CharField(max_length=25,blank=True)
    question = models.CharField(max_length=25,blank=True)
    choice = models.CharField(max_length=25)


class posttestLog(models.Model):
    pageState = models.CharField(max_length = 200,blank=True)
    event = models.CharField(max_length=100)
    user = models.CharField(max_length=25,blank=True)
    timeStamp = models.CharField(max_length=100)
    clickX = models.CharField(max_length=25,blank=True)
    clickY = models.CharField(max_length=25,blank=True)

class posttestMouseEvent(models.Model):
    pageState = models.CharField(max_length=200,blank=True)
    event = models.CharField(max_length=100)
    user = models.CharField(max_length=25,blank=True)
    timeStamp = models.CharField(max_length=100)
    mouseX = models.CharField(max_length=25,blank=True)
    mouseY = models.CharField(max_length=25,blank=True)
    clickedITMtl = models.CharField(max_length=25,blank=True)
    clickedITMbr = models.CharField(max_length=25,blank=True)
    keyPressed = models.CharField(max_length=25,blank=True)

