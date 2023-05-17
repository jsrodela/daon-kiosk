from django.urls import path
from kiosk import views

urlpatterns = [
  path('', views.index)
]
