from django.urls import path

from . import views

urlpatterns = [
    path("sign-up/", views.sign_up, name="sign_up"),
    path("login/", views.SignInFormView.as_view(), name="login"),
    path("logout/", views.LogoutFormView.as_view(), name="logout"),
]
