from django.urls import path
from . views import Booklist
from django.views.generic import TemplateView

urlpatterns = [
    path('books/', Booklist.as_view(), name='book-list'),
    path('home/', TemplateView.as_view(template_name="index.html"), name="index"),
]

