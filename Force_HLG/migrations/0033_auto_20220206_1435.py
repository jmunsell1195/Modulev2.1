# Generated by Django 3.2.8 on 2022-02-06 19:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Force_HLG', '0032_auto_20220206_1404'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vectorsmouseevent',
            name='timeStamp',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='vectorsmouseevent',
            name='user',
            field=models.CharField(max_length=25),
        ),
    ]
