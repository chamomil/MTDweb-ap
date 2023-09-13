from django.urls import path

from .views import MainPageTemplateView, PrivacyPolicyTemplateView, AboutUsTemplateView, FAQsTemplateView, \
    ContactsListView

urlpatterns = [
    path("", MainPageTemplateView.as_view(), name="main-page"),
    path("privacy-policy", PrivacyPolicyTemplateView.as_view(), name="privacy-policy"),
    path("about-us", AboutUsTemplateView.as_view(), name="about-us"),
    path("faqs", FAQsTemplateView.as_view(), name="faqs"),
    path("contacts", ContactsListView.as_view(), name="contacts")
]
