# Generated by Django 3.2.8 on 2022-02-04 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Force_HLG', '0025_auto_20220203_2258'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Force',
            new_name='forceEdu',
        ),
        migrations.RenameModel(
            old_name='posttest',
            new_name='posttestEdu',
        ),
        migrations.RenameModel(
            old_name='pretest',
            new_name='pretestEdu',
        ),
        migrations.RenameModel(
            old_name='Vectors',
            new_name='vectorsEdu',
        ),
        migrations.DeleteModel(
            name='posttestLog2',
        ),
        migrations.DeleteModel(
            name='pretestLog2',
        ),
        migrations.RemoveField(
            model_name='forcelog',
            name='keyPresses',
        ),
        migrations.RemoveField(
            model_name='vectorslog',
            name='keyPressed',
        ),
        migrations.AddField(
            model_name='forcemouseevent',
            name='keyPressed',
            field=models.CharField(blank=True, max_length=25),
        ),
        migrations.AddField(
            model_name='posttestlog',
            name='clickX',
            field=models.CharField(blank=True, max_length=25),
        ),
        migrations.AddField(
            model_name='posttestlog',
            name='clickY',
            field=models.CharField(blank=True, max_length=25),
        ),
        migrations.AddField(
            model_name='posttestmouseevent',
            name='keyPressed',
            field=models.CharField(blank=True, max_length=25),
        ),
        migrations.AddField(
            model_name='pretestlog',
            name='clickX',
            field=models.CharField(blank=True, max_length=25),
        ),
        migrations.AddField(
            model_name='pretestlog',
            name='clickY',
            field=models.CharField(blank=True, max_length=25),
        ),
        migrations.AddField(
            model_name='vectorsmouseevent',
            name='keyPressed',
            field=models.CharField(blank=True, max_length=25),
        ),
    ]
