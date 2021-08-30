## Version
1. jdk - 14
2. node - 14

## 공통 세팅
1. Docker 설치
2. docker-compose 설치

# 백엔드
## 백엔드 실행 방법
```
cd backend; docker-compose up --build -d
```
## 주소
http//localhost:8080

## 만약 데이터 베이스 수정할 일이 생긴다면
```
cd backend/database; docker-compose up --build -d
```
위 명령어로 database만 따로 실행 후 build/lib 에 있는 jar 파일 밑에 있는 명령어로 실행
```
java -jar backend/build/lib/Cookking-0.0.1-SNAPSHOT.jar
```

이때 주의 할 점
```
docker ps -a
```
위 명령어 실행시 db container 가 존재 한다면 
```
docker rm -f db
```
위 명령어로 삭제 필요

## Profiles

만약 local에서 실행하면 profile 설정을 local 로 설정 

---
# 프론트
## 프론트 실행 방법

```
 cd front; npm i; npx pod-install; npx react-native link; npm start
 
 npm run ios 
 npm run android
```

