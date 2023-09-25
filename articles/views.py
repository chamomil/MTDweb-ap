from django.views.generic import ListView, DetailView

from .models import Article


class ArticlesListView(ListView):
    model = Article
    template_name = "article-list.html"


class ArticleDetailView(DetailView):
    model = Article
    template_name = "article-details.html"
