from django.urls import path
from manager import views

urlpatterns = [
  path('', views.index)
]
