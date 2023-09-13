from django.db import models
from django.urls import reverse
from django.utils import timezone


class Article(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    article_image = models.ImageField(upload_to="static/articles", default="static/logos/cinema_logo.png")

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("article-details", args=[str(self.id)])
