# Nodejs server study

### 스터디 진행 순서

- [x] (1주차)서버의 구조 학습
- [x] (2주차)Restful API design, Json Response design
- [ ] (3주차)Test Driven Development(ft. jest and supertest) 
- [ ] (4주차)Deployment(Docker, AWS EB)

### 스터디 과제

- [x] (2주차 까지) User, Book 모델을 만들고 CRUD 메서드 만들기
  - controllers, routes, service, models 사용!
- [ ] (3주차 까지) [JSON API](https://jsonapi.org/) 를 활용하여 Response를 만들어보기
- [ ] (4주차 까지) 미공개

### 스터디 목표

**책 대여-반납 시스템** 구현!

express 로 정돈된 코드로 작성하기!

서비스 특징
- 사용자가 있다.
- 관리자가 있다.
- 책이 있다.
- 관리자는 사용자를 차단, 승인 할 수 있다.
- 승인된 사용자는 책을 대여 할 수 있다.
- 차단된 또는 대기중인 사용자는 책을 대여할 수 없다.


##### 스터디 진행 슬라이드
아래의 구조는 MVC 패턴을 가진 서버의 구조이다. 내부 구조 중 필요한 구조를 만들어서 사용한다.
server-structure
![server-structure-2](./assets/server-structure/2.jpeg)
![server-structure-4](./assets/server-structure/4.jpeg)
![server-structure-5](./assets/server-structure/5.jpeg)
  

##### 내부 주요 디렉토리 정리(브랜치 feature/todo 를 확인!)

파일 확인 순서
1. index.js
2. app.js
3. routes
4. middlewares
5. controllers
6. services
7. models, database

```
src
 |- controllers: 경로별로 어떤 로직을 호출해야할지 결정!
 |- database: 데이터베이스 접근 관련 코드
      |- connector.js: 데이터베이스 연결 구현
      |- repositories: models에 정의된 모델로 데이터베이스에 접근 하는 로직
 |- middlewares: 미들웨어 정의
 |- models: 데이터베이스에 접근
 |- routes: 경로-컨트롤러 대응, 경로별 미들웨어 설정
 |- services: 실제 비즈니스 로직을 구현
 |- app.js: express 어플리케이션 생성
 |- index.js: 어플리케이션 호출 로직

```


##### 테스트를 해보자

1. jest와 supertest를 이욯해서 요청-응답 테스트하기
2. VSCode의 디버깅 툴을 사용하여 오류 발생시 BP(break point)를 걸어서 디버깅하기

```
$ npm install --save-dev jest supertest
$ jest
```

아래의 코드를 .vscode/launch.json 에 붙여넣는다.
출처 [https://github.com/microsoft/vscode-recipes/tree/master/debugging-jest-tests](https://github.com/microsoft/vscode-recipes/tree/master/debugging-jest-tests)
```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Jest All",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": ["--runInBand"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true,
      "windows": {
        "program": "${workspaceFolder}/node_modules/jest/bin/jest",
      }
    }, {
      "type": "node",
      "request": "launch",
      "name": "Jest Current File",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": [
        "${fileDirname}/${fileBasenameNoExtension}",
        "--config",
        "jest.config.js"
      ],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true,
      "windows": {
        "program": "${workspaceFolder}/node_modules/jest/bin/jest",
      }
    }
  ]
}
```
