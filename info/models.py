from django.db import models


class Worker(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    job_role = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=12)
    email_address = models.EmailField()
    photo = models.ImageField(upload_to="static/staff", default="static/logos/cinema_logo.png")

    def __str__(self):
        return self.last_name


class MapData(models.Model):
    date = models.DateField('date_add')
    key = models.CharField(max_length=255)

    def __str__(self):
        return self.date
