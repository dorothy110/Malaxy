from django.urls import path
from coreapi.views import *
from coreapi.views import dev

urlpatterns = [
    path('helloworld/', HelloWorldView.as_view()),
    path('examplemessage/', ExampleMessageView.as_view()),
    path('breadth/', BreadthView.as_view()),
    path('gened/', GenEdView.as_view()),
    path('level/', LevelView.as_view()),
    path('major/', MajorView.as_view()),
    path('coursesearch/', CourseSearchView.as_view()),
    path('course/', CourseDescriptionView.as_view()),
    path('professorlist/', ProfessorListView.as_view()),
    path('grades/', GradesView.as_view()),

    path('dev/course/', dev.CourseView.as_view()),
    path('dev/courselevel/', dev.CourseLevelView.as_view()),
    path('dev/breadth/', dev.BreadthView.as_view()),
    path('dev/breadthbridge/', dev.BreadthBridgeView.as_view()),
    path('dev/gened/', dev.GenEdView.as_view()),
    path('dev/genedbridge/', dev.GenEdBridgeView.as_view()),
    path('dev/major/', dev.MajorView.as_view()),
    path('dev/enroll/', dev.EnrollView.as_view()),
    path('dev/grades/', dev.GradesView.as_view()),
    path('dev/professor/', dev.ProfessorView.as_view()),
    path('dev/section/', dev.SectionView.as_view()),
]