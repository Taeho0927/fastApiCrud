# 베이스 이미지 명시
FROM node:18-alpine
#컨테이너 실행전 명령어
WORKDIR /frontend
COPY . .
RUN npm install

COPY ./ /frontend
CMD [ "sudo", "npm run dev"]