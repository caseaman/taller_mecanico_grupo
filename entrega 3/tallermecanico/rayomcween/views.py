#rayomcween/views.py
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.contrib.auth import authenticate, login , logout
from .models import Servicio, Carrito
from .forms import ServicioForm

def index(request):
    return render(request, 'index.html')

def contactanos(request):
    servicios = Servicio.objects.all()  
    context = {
        'servicios': servicios,  
    }
    return render(request, 'contactanos.html', context)

def agenda(request):
    return render(request, 'agenda.html')

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            messages.error(request, 'Usuario o contraseña incorrectos.')
    return render(request, 'login.html')

def servicios(request):
    return render(request, 'servicios.html')

def menu(request):
    return render(request, 'menu.html')

def about(request):
    return render(request, 'about.html')

def tienda(request):
    servicios = Servicio.objects.all()
    return render(request, 'tienda.html', {'servicios': servicios})

def agregar_servicio(request):
    if request.method == 'POST':
        form = ServicioForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('tienda')
    else:
        form = ServicioForm()
    return render(request, 'agregar_servicio.html', {'form': form})

def actualizar_servicio(request, id):
    servicio = get_object_or_404(Servicio, id=id)
    if request.method == 'POST':
        form = ServicioForm(request.POST, instance=servicio)
        if form.is_valid():
            form.save()
            return redirect('tienda')
    else:
        form = ServicioForm(instance=servicio)
    return render(request, 'actualizar_servicio.html', {'form': form})

def eliminar_servicio(request, id):
    servicio = get_object_or_404(Servicio, id=id)
    if request.method == 'POST':
        servicio.delete()
        return redirect('tienda')
    return render(request, 'eliminar_servicio.html', {'servicio': servicio})


def agregar_al_carrito(request, servicio_id):
    servicio = get_object_or_404(Servicio, id=servicio_id)
    carrito, created = Carrito.objects.get_or_create(servicio=servicio)
    
    if created:
        carrito.cantidad = 1  # Establece la cantidad inicial a 1
    else:
        carrito.cantidad += 1  # Incrementa la cantidad si ya existe en el carrito
    
    carrito.save()  # Guarda la instancia del carrito
    return redirect('compras')  # Redirige a la página de compras
    
def mostrar_carrito(request):
    carrito = Carrito.objects.all()
    servicios = Servicio.objects.all()
    return render(request, 'compras.html', {'carrito': carrito, 'servicios': servicios})

def actualizar_carrito(request, carrito_id):
    carrito_item = get_object_or_404(Carrito, id=carrito_id)
    
    if request.method == 'POST':
        cantidad = int(request.POST.get('cantidad'))
        if cantidad > 0:
            carrito_item.cantidad = cantidad
            carrito_item.save()
        else:
            carrito_item.delete()  # Eliminar el item si la cantidad es cero
    
    return redirect('mostrar_carrito')

def eliminar_del_carrito(request, carrito_id):
    carrito = get_object_or_404(Carrito, id=carrito_id)
    carrito.delete()
    return redirect('mostrar_carrito')

def agenda(request):
    servicios = Servicio.objects.all()
    return render(request, 'agenda.html', {'servicios': servicios})

def contactanos(request):
    servicios = Servicio.objects.all()  # Asumiendo que `Servicio` es tu modelo
    context = {
        'servicios': servicios,
    }
    return render(request, 'contactanos.html', context)

def logout_view(request):
    logout(request)
    return redirect('index')
