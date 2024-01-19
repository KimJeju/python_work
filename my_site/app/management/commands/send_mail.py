from typing import List

from django.conf import settings
from django.core.mail import send_mail
from django.core.management import BaseCommand, CommandError
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.template.loader import render_to_string


class Command(BaseCommand):
    def add_arguments(self, parser):
        parser.add_argument("receiver", nargs="+", type=str, help=">dz!®–|!õ—")
    def handle(self, *args, **options):
        subject = render_to_string("app/email_subject.txt")
        content = render_to_string("app/email_content.txt")
        sender_email = settings.DEFAULT_FROM_EMAIL
        receiver_email_list: List[str] = options['receiver']

        try:
            for email in receiver_email_list:
                validate_email(email)
        except ValidationError as e:
            raise CommandError(e)

        send_mail(
            subject,
            content,
            sender_email,
            receiver_email_list,
            fail_silently=False
        )


