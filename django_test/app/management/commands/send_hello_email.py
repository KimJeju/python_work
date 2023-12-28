from typing import List

from django.conf import settings
from django.core.exceptions import ValidationError
from django.core.mail import send_mail
from django.core.management import BaseCommand, CommandError
from django.core.validators import validate_email


class Command(BaseCommand):
    def add_arguments(self, parse):
        parse.add_argument("receiver", narge="+", type=str, help="hwi9367@naver.com")

    def handle(self, *args, **options):
        subject = "장고 이메일 발송"
        content = "테스트 입니다."
        sender_email = settings.DEFAULT_FROM_EMAIL
        receiver_email_list: List[str] = options["receiver"]

        try:
            for email in receiver_email_list:
                validate_email(email)
        except ValidationError as e:
            raise CommandError(e.message)

        send_mail(
            subject,
            content,
            sender_email,
            receiver_email_list,
            fail_silently=False,
        )
