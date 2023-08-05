# NestJs Boilerplate

## Description

SIFFER의 백엔드 스택이 NestJs인 만큼 NestJs를 사용한 Boilerplate를 만들어봤습니다.
Docker를 사용해 개발환경을 구축하고, Swagger를 사용해 API 문서를 만들어봤습니다.
나아가 Docker를 사용해 배포환경을 구축해보고, CI/CD를 구축해보는 것을 목표로 합니다.

Todo CRUD가 예제로 들어있습니다.

## P.S.

swagger 세팅을 해두어서 ApiProperty를 사용하지 않아도 Swagger 문서에 표시됩니다.

## Features

- [x] NestJs
- [x] TypeORM
- [x] Swagger
- [] File Upload
- [] Docker
- [] CI/CD

## Caution

- Production 환경에서는 .env 파일을 .gitignore에 추가해주세요.
- 현재 연결된 DB는 테스트용 TODO를 위한 개인 DB입니다. 자유롭게 사용하셔도 됩니다만, 추후 새 DB를 연결해주세요.
