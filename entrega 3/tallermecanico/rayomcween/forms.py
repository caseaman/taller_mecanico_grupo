# rayomcween/forms.py
from django import forms
from .models import Servicio, Carrito

class ServicioForm(forms.ModelForm):
    class Meta:
        model = Servicio
        fields = '__all__'

class CarritoForm(forms.ModelForm):
    class Meta:
        model = Carrito
        fields = '__all__'
