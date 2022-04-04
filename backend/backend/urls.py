
# backend/urls.py

from django.contrib import admin
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from todo import views                                # add this
from . import views                                  #unsure ???
from users.views import RegisterViewSet, LoginViewSet

router = routers.DefaultRouter()                      # add this
router.register(r'todos', views.TodoView, 'todo')     # add this
router.register(r'Register', RegisterViewSet)
router.register(r'Login', LoginViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),           
    path('api/', include(router.urls))                # add this
    path('', include(router.urls)),
    path('', include('users.urls')),
    path('', views.register_create, name='register_list'),
    path('', views.login_create, name='login_list'),
]