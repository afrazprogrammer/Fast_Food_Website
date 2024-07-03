from django.shortcuts import render, HttpResponse

# Create your views here.

def landing(request):
    return render(request, 'landing.html')


def menu(request):
    return HttpResponse("This is Menu Page")