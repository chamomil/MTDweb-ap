from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.shortcuts import redirect, render
from django.urls import reverse, reverse_lazy
from django.views.generic import FormView

from authentication.forms import RegisterForm


class SignInFormView(FormView):
    form_class = AuthenticationForm
    success_url = reverse_lazy("main-page")
    template_name = "login.html"

    def form_valid(self, form):
        self.user = form.get_user()
        login(self.request, self.user)
        return super(SignInFormView, self).form_valid(form)


class LogoutFormView(FormView):
    def get(self, request, *args, **kwargs):
        logout(request)
        return redirect(reverse("main-page"))


def sign_up(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect(reverse("main-page"))
    else:
        form = RegisterForm()

    return render(request, "sign_up.html", {"form": form})
