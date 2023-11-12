from django.views.generic import TemplateView, ListView
from django.views import View
from django.shortcuts import render

from articles.models import Article
from .models import Worker
from .forms import DataForm


class MainPageTemplateView(TemplateView):
    template_name = "main-page.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["last_article"] = Article.objects.order_by("-created_at").first()
        return context


class PrivacyPolicyTemplateView(TemplateView):
    template_name = "privacy-policy.html"


class AboutUsTemplateView(TemplateView):
    template_name = "about-us.html"


class FAQsTemplateView(TemplateView):
    template_name = "faqs.html"


class ContactsListView(ListView):
    template_name = "contacts.html"
    model = Worker


class VacanciesTemplateView(TemplateView):
    template_name = "vacancies.html"


class CouponsTemplateView(TemplateView):
    template_name = "coupons.html"


class AdditionalTemplateView(View):
    template_name = "additional.html"

    def get(self, request):
        form = DataForm()
        return render(request, self.template_name, {'form': form})

    def post(self, request):
        form = DataForm(request.POST)
        if form.is_valid():
            form.save()
        else:
            print(form.errors)
        return render(request, self.template_name, {'form': form})
