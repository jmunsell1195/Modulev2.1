import pandas as pd
from django.contrib.auth.models import User


############################
# Run To Populate Database #
############################

# for i in range(99):
#     print(i)
#     new_user, created = User.objects.get_or_create(username="pilot"+str(i+1),email="pilot"+str(i+1)+'@purdue.edu')
#     new_user.set_password('Purdue!')
#     new_user.save()