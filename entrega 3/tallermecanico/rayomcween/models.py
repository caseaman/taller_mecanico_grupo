# rayomcween/models.py
from django.db import models

class Servicio(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.nombre

class Carrito(models.Model):
    servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField(default=1)  # Añadir valor por defecto

    def __str__(self):
        return f"{self.cantidad} x {self.servicio.nombre}"


