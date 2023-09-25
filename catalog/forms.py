from django import forms


class ReserveTicketForm(forms.Form):
    session_id = forms.IntegerField(min_value=1)


class ConfirmTicketForm(forms.Form):
    payment_id = forms.IntegerField(min_value=1)
