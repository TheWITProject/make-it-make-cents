from django.contrib import admin
from .models import user
from .models import Question
from .models import Choice
from .models import Persona
from .models import AssessmentResult

admin.site.register(user)
admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(Persona)
admin.site.register(AssessmentResult)