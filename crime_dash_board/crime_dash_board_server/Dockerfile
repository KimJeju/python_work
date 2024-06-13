FROM python:3.12.2

RUN pip install fastapi 'uvicorn[all]'

COPY . /src
WORKDIR /src

RUN pip install -r requirements.txt

EXPOSE 8892

CMD  python main.py