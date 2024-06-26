from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from .models import Question

# Create your views here.

def index(request):
    q_list = Question.objects.order_by('-created_at')
    context = {'question_list':q_list}
    return render(request, 'pybo/question_list.html', context)


def detail(request, question_id):
    # q_detail = Question.objects.get(id=question_id)
    q_detail = get_object_or_404(Question, pk=question_id)
    context = {'question':q_detail}
    return render(request, 'pybo/question_detail.html', context)


def answer_create(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    question.answer_set.create(content=request.POST.get('content'), created_at=timezone.now())
    return redirect('pybo:detail', question_id=question.id)