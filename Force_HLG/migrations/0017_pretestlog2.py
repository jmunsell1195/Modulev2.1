# Generated by Django 3.2.8 on 2021-12-17 18:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Force_HLG', '0016_auto_20211217_1350'),
    ]

    operations = [
        migrations.CreateModel(
            name='pretestLog2',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event', models.CharField(max_length=25)),
                ('user', models.CharField(blank=True, max_length=25)),
                ('timeStamp', models.CharField(max_length=100)),
                ('clickX', models.CharField(blank=True, max_length=25)),
                ('clickY', models.CharField(blank=True, max_length=25)),
            ],
        ),
    ]
