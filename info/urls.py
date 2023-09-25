from django.urls import path

from .views import MainPageTemplateView, PrivacyPolicyTemplateView, AboutUsTemplateView, FAQsTemplateView, \
    ContactsListView, VacanciesTemplateView, CouponsTemplateView, AdditionalTemplateView

urlpatterns = [
    path("", MainPageTemplateView.as_view(), name="main-page"),
    path("privacy-policy", PrivacyPolicyTemplateView.as_view(), name="privacy-policy"),
    path("about-us", AboutUsTemplateView.as_view(), name="about-us"),
    path("faqs", FAQsTemplateView.as_view(), name="faqs"),
    path("contacts", ContactsListView.as_view(), name="contacts"),
    path("vacancies", VacanciesTemplateView.as_view(), name="vacancies"),
    path("coupons", CouponsTemplateView.as_view(), name="coupons"),
    path("additional", AdditionalTemplateView.as_view(), name="additional"),
]
