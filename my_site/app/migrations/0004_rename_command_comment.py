# Generated by Django 4.2.9 on 2024-01-19 13:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_command_tag_post_tag_set'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Command',
            new_name='Comment',
        ),
    ]
