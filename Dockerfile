# 베이스 이미지 명시
FROM python:3.11-alpine

#컨테이너 실행전 명령어
WORKDIR /fastapi
ADD . /fastapi
RUN pip install --no-cache-dir --upgrade -r /fastapi/requirements.txt

#COPY ./ /code/app
CMD [ "uvicorn", "app.main:app", "--reload", "--host", "0.0.0.0" ]