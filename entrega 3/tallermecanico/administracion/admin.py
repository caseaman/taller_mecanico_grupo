# administracion/admin.py
from django.contrib import admin
from .models import Alumno, Genero

admin.site.register(Alumno)
admin.site.register(Genero)
