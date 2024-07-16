# tallermecanico/urls.py
from django.contrib import admin
from django.urls import path
from rayomcween import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('contactanos/', views.contactanos, name='contactanos'),
    path('agenda/', views.agenda, name='agenda'),
    path('login/', views.login_view, name='login'),
    path('servicios/', views.servicios, name='servicios'),
    path('menu/', views.menu, name='menu'),
    path('about/', views.about, name='about'),
    path('tienda/', views.tienda, name='tienda'),
    path('agregar_servicio/', views.agregar_servicio, name='agregar_servicio'),
    path('actualizar_servicio/<int:id>/', views.actualizar_servicio, name='actualizar_servicio'),
    path('eliminar_servicio/<int:id>/', views.eliminar_servicio, name='eliminar_servicio'),
    path('agregar_al_carrito/<int:servicio_id>/', views.agregar_al_carrito, name='agregar_al_carrito'),
    path('compras/', views.mostrar_carrito, name='compras'),  # Añadir esta línea
    path('actualizar_carrito/<int:carrito_id>/', views.actualizar_carrito, name='actualizar_carrito'),
    path('eliminar_del_carrito/<int:carrito_id>/', views.eliminar_del_carrito, name='eliminar_del_carrito'),
    path('mostrar_carrito/', views.mostrar_carrito, name='mostrar_carrito'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    
]
