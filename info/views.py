from django.views.generic import TemplateView, ListView
from django.views import View

from articles.models import Article
from .models import Worker


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


class AdditionalTemplateView(TemplateView):
    template_name = "additional.html"
