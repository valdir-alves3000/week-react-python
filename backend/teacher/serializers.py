from django.forms import ValidationError
from rest_framework import serializers

from teacher.models import Lesson, Teacher


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'


class CreateLessonSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    name = serializers.CharField(max_length=100)

    def validate_name(self, name):
        if len(name) < 3:
            raise ValidationError("Deve ter pelo menos três caracteres")
        return name


class LessonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lesson
        fields = '__all__'
