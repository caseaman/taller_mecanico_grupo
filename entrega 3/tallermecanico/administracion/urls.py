# administracion/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('add/', views.agregar_alumno, name='alumnosAdd'),
    path('edit/<int:pk>/', views.editar_alumno, name='alumnosEdit'),
    path('delete/<int:pk>/', views.eliminar_alumno, name='alumnosDelete'),
    path('list/', views.listado_alumnos, name='crud'),
    path('tienda/', views.tienda, name='tienda'),
    path('agregar_servicio/', views.agregar_servicio, name='agregar_servicio'),
    path('actualizar_servicio/<int:id>/', views.actualizar_servicio, name='actualizar_servicio'),
    path('eliminar_servicio/<int:id>/', views.eliminar_servicio, name='eliminar_servicio'),
    path('agregar_al_carrito/<int:servicio_id>/', views.agregar_al_carrito, name='agregar_al_carrito'),
    path('compras/', views.mostrar_carrito, name='compras'),
    path('actualizar_carrito/<int:carrito_id>/', views.actualizar_carrito, name='actualizar_carrito'),
    path('logout/', views.logout_view, name='logout'),

]
