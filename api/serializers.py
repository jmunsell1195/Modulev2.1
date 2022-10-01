from rest_framework import serializers
import Force_HLG.models as HLG



############################# HLG ############################################

######### HLG preTest #################################

class HLG_pretest_answer(serializers.ModelSerializer):
    class Meta:
        model = HLG.pretestEdu
        fields = "__all__"

class HLG_pretest_mouse(serializers.ModelSerializer):
    class Meta:
        model = HLG.pretestMouseEvent
        fields = "__all__"

class HLG_pretest_page(serializers.ModelSerializer):
    class Meta:
        model = HLG.pretestLog
        fields = '__all__'

######### HLG Vectors #####################################

class HLG_vectors_answer(serializers.ModelSerializer):
    class Meta:
        model = HLG.vectorsEdu
        fields = "__all__"

class HLG_vectors_page(serializers.ModelSerializer):
    class Meta:
        model = HLG.vectorsLog
        fields = "__all__"

class HLG_vectors_mouse(serializers.ModelSerializer):
    class Meta: 
        model = HLG.vectorsMouseEvent
        fields = "__all__"

########## HLG Forces ######################################

class HLG_force_answer(serializers.ModelSerializer):
    class Meta:
        model = HLG.forceEdu
        fields = "__all__"

class HLG_force_page(serializers.ModelSerializer):
    class Meta:
        model = HLG.forceLog
        fields = "__all__"

class HLG_force_mouse(serializers.ModelSerializer):
    class Meta:
        model = HLG.forceMouseEvent
        fields = "__all__"

####### HLG PostTest ###########################################

class HLG_Post_Answer(serializers.ModelSerializer):
    class Meta:
        model = HLG.posttestEdu
        fields = "__all__"

class HLG_Post_Page(serializers.ModelSerializer):
    class Meta:
        model = HLG.posttestLog
        fields = "__all__"

class HLG_Post_Mouse(serializers.ModelSerializer):
    class Meta:
        model = HLG.posttestMouseEvent
        fields = "__all__"

################################### LLG ##############################################################
