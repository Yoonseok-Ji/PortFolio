#!/bin/bash

# CoinAlarm 리포지토리들을 클론하고 새 리포지토리로 마이그레이션하는 스크립트

echo "CoinAlarm 리포지토리들을 마이그레이션합니다..."

# 임시 디렉토리 생성
mkdir -p ~/coinalarm-migration
cd ~/coinalarm-migration

repos=(
    "proxy-server"
    "eks-terraform"
    "helm"
    "gitops"
    "was"
    "pricewatcher-server"
    "price-workerserver"
    "front-end"
    "docker-compose"
    "auth-workerserver"
)

for repo in "${repos[@]}"; do
    echo "Processing $repo..."
    
    # 1. 원본 리포지토리 클론
    git clone https://github.com/coinalarm-click/$repo.git
    cd $repo
    
    # 2. 원격 저장소 URL 변경
    git remote set-url origin https://github.com/Yoonseok-Ji/coinalarm-$repo.git
    
    # 3. GitHub에서 새 리포지토리 생성 (GitHub CLI 필요)
    gh repo create Yoonseok-Ji/coinalarm-$repo --public --description "CoinAlarm 프로젝트 - $repo 컴포넌트"
    
    # 4. 새 리포지토리에 푸시
    git push -u origin main 2>/dev/null || git push -u origin master 2>/dev/null || git push -u origin dev
    
    cd ..
    echo "$repo 마이그레이션 완료!"
done

echo "모든 리포지토리 마이그레이션 완료!"
echo "생성된 리포지토리들:"
for repo in "${repos[@]}"; do
    echo "  - https://github.com/Yoonseok-Ji/coinalarm-$repo"
done
