from django.contrib.auth.decorators import login_required
from django.http import HttpRequest, HttpResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.views.generic import CreateView

from app.forms import PostForm
from app.models import Post


# Create your views here.
@login_required
def index(request : HttpRequest) -> HttpResponse:
    qs = Post.objects.all()
    return render(request, "app/index.html",{
        "post_list":qs
    })

def post_detail(requset : HttpRequest, pk : int) ->  HttpResponse:
        post = get_object_or_404(Post, pk=pk)
        return render(requset, "app/post_detail.html",{
            "post":post
        })


post_new = CreateView.as_view(model = Post, form_class = PostForm, success_url="/app/")