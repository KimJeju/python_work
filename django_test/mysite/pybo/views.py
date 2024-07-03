from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponseNotAllowed
from django.utils import timezone
from .models import Question
from .forms import QuestionForm, AnswerForm

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
    """
    pybo 답변등록
    """
    question = get_object_or_404(Question, pk=question_id)
    if request.method == "POST":
        form = AnswerForm(request.POST)
        if form.is_valid():
            answer = form.save(commit=False)
            answer.create_date = timezone.now()
            answer.question = question
            answer.save()
            return redirect('pybo:detail', question_id=question.id)
    else:
        return HttpResponseNotAllowed('Only POST is possible.')
    context = {'question': question, 'form': form}
    return render(request, 'pybo/question_detail.html', context)

def question_create(request):
    if request.method == 'POST':
        form = QuestionForm(request.POST)
        if form.is_valid():
            question = form.save(commit=False)
            question.created_at = timezone.now()
            question.save()
            return redirect('pybo:index')
    else:
        form = QuestionForm()
        context = {'form':form}
        return render(request, 'pybo/question_form.html',context,)