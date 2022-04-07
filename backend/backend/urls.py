
# backend/urls.py

from django.contrib import admin
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
#from todo import views                            # add this
from django.contrib.auth import views
        
router = routers.DefaultRouter()                      # add this
#router.register(r'todos', views.TodoView, 'todo')     # add this
        
urlpatterns = [
    path('admin/', admin.site.urls),           
    path('api/', include(router.urls)),                # add this
    path('accounts/', include('django.contrib.auth.urls')),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
]

