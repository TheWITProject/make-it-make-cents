from django.contrib import admin
from .models import user
from .models import Question
from .models import Choice

admin.site.register(user)
admin.site.register(Question)
admin.site.register(Choice)

