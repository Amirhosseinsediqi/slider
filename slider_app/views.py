from django.shortcuts import render

def home(request):
    return render(request, 'slider_app/index.html')
