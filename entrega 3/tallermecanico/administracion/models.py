# administracion/models.py
from django.db import models

class Genero(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Alumno(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    edad = models.IntegerField()
    genero = models.ForeignKey(Genero, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"


