# Generated by Django 3.2.8 on 2022-02-04 18:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Force_HLG', '0028_auto_20220204_1344'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='forcelog',
            name='clickX',
        ),
        migrations.RemoveField(
            model_name='forcelog',
            name='clickY',
        ),
        migrations.RemoveField(
            model_name='forcemouseevent',
            name='clickX',
        ),
        migrations.RemoveField(
            model_name='forcemouseevent',
            name='clickY',
        ),
        migrations.RemoveField(
            model_name='posttestmouseevent',
            name='clickX',
        ),
        migrations.RemoveField(
            model_name='posttestmouseevent',
            name='clickY',
        ),
        migrations.RemoveField(
            model_name='pretestmouseevent',
            name='clickX',
        ),
        migrations.RemoveField(
            model_name='pretestmouseevent',
            name='clickY',
        ),
        migrations.RemoveField(
            model_name='vectorslog',
            name='clickX',
        ),
        migrations.RemoveField(
            model_name='vectorslog',
            name='clickY',
        ),
        migrations.RemoveField(
            model_name='vectorsmouseevent',
            name='clickX',
        ),
        migrations.RemoveField(
            model_name='vectorsmouseevent',
            name='clickY',
        ),
    ]