from django.urls import path

from .views import MainPageTemplateView, PrivacyPolicyTemplateView, AboutUsTemplateView

urlpatterns = [
    path("", MainPageTemplateView.as_view(), name="main-page"),
    path("privacy-policy", PrivacyPolicyTemplateView.as_view(), name="privacy-policy"),
    path("about-us", AboutUsTemplateView.as_view(), name="about-us"),
]
