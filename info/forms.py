from django import forms
from .models import MapData


class DataForm(forms.ModelForm):
    class Meta:
        model = MapData
        fields = ['date', 'key']
