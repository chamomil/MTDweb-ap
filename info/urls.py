from django.urls import path

from .views import MainPageTemplateView, PrivacyPolicyTemplateView

urlpatterns = [
    path("", MainPageTemplateView.as_view(), name="main-page"),
    path("privacy-policy", PrivacyPolicyTemplateView.as_view(), name="privacy-policy"),
]
