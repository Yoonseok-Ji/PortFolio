#!/bin/bash

echo "CoinAlarm 통합 리포지토리를 생성합니다..."

# 1. 새 디렉토리 생성
mkdir -p ~/CoinAlarm-Project
cd ~/CoinAlarm-Project

# 2. Git 초기화
git init
echo "# CoinAlarm - 가상화폐 알림 서비스

하이브리드 클라우드 기반 마이크로서비스 아키텍처로 구성된 가상화폐 알림 서비스입니다.

## 프로젝트 구조

- **frontend/**: React 기반 프론트엔드
- **backend/**: 마이크로서비스 백엔드 컴포넌트들
- **infrastructure/**: Kubernetes, Terraform, GitOps 설정

## 기술 스택

- Frontend: React, JavaScript
- Backend: Java, Node.js
- Infrastructure: Kubernetes, Docker, Terraform
- Cloud: AWS EKS
- Monitoring: Prometheus, Grafana
" > README.md

# 3. 디렉토리 구조 생성
mkdir -p frontend
mkdir -p backend/{proxy-server,was,pricewatcher,price-worker,auth-server}
mkdir -p infrastructure/{terraform,helm,gitops,docker}

echo "디렉토리 구조가 생성되었습니다!"
echo "이제 각 원본 리포지토리의 코드를 해당 폴더에 복사하세요."
