#!/bin/bash

# CoinAlarm 리포지토리들을 Fork하는 스크립트
# GitHub CLI가 필요합니다: brew install gh

echo "CoinAlarm 리포지토리들을 Fork합니다..."

repos=(
    "coinalarm-click/proxy-server"
    "coinalarm-click/eks-terraform"
    "coinalarm-click/helm"
    "coinalarm-click/gitops"
    "coinalarm-click/was"
    "coinalarm-click/pricewatcher-server"
    "coinalarm-click/price-workerserver"
    "coinalarm-click/front-end"
    "coinalarm-click/docker-compose"
    "coinalarm-click/auth-workerserver"
)

for repo in "${repos[@]}"; do
    echo "Forking $repo..."
    gh repo fork $repo --clone=false
    sleep 2  # API 제한을 피하기 위한 대기
done

echo "모든 리포지토리 Fork 완료!"
