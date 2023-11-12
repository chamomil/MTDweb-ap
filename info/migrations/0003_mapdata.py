# Generated by Django 4.2.5 on 2023-11-11 16:53

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("info", "0002_worker_photo"),
    ]

    operations = [
        migrations.CreateModel(
            name="MapData",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("date", models.DateField()),
                ("key", models.CharField(max_length=255)),
            ],
        ),
    ]
