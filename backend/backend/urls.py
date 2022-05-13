
# backend/urls.py

from django.contrib import admin
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
#from todo import views                            # add this
from django.contrib.auth import views
from users import views
        
router = routers.DefaultRouter()                      # add this
router.register(r'users', views.usersViewSet)
#router.register(r'Question', views.Question)
router.register(r'Choice', views.ChoiceViewSet)     # add this
        
urlpatterns = [
    path('admin/', admin.site.urls),           
    path('api/', include(router.urls)),                # add this
    path ('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('accounts/', include('django.contrib.auth.urls')),
    path('api/Question/' , views.Question.as_view(), name="Questions"),

]

