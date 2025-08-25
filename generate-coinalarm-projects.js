// CoinAlarm 리포지토리들을 포트폴리오 프로젝트로 변환
const coinAlarmRepos = [
  {
    name: 'proxy-server',
    description: 'Upbit Socket Stream용 프록시 서버',
    language: 'JavaScript',
    category: 'Backend'
  },
  {
    name: 'eks-terraform',
    description: 'EKS Jenkins 설정 파이프라인용 Terraform',
    language: 'HCL',
    category: 'Infrastructure'
  },
  {
    name: 'helm',
    description: 'GitOps Helm 저장소',
    language: 'YAML',
    category: 'DevOps'
  },
  {
    name: 'gitops',
    description: 'GitOps 저장소',
    language: 'YAML',
    category: 'DevOps'
  },
  {
    name: 'was',
    description: '웹 애플리케이션 서버',
    language: 'Java',
    category: 'Backend'
  },
  {
    name: 'pricewatcher-server',
    description: '가격 모니터링 서버',
    language: 'JavaScript',
    category: 'Backend'
  },
  {
    name: 'price-workerserver',
    description: '가격 워커 서버',
    language: 'Java',
    category: 'Backend'
  },
  {
    name: 'front-end',
    description: 'CoinAlarm 프론트엔드',
    language: 'JavaScript',
    category: 'Frontend'
  },
  {
    name: 'docker-compose',
    description: 'Docker Compose 설정',
    language: 'Docker',
    category: 'DevOps'
  },
  {
    name: 'auth-workerserver',
    description: '인증 워커 서버',
    language: 'Java',
    category: 'Backend'
  }
];

// 포트폴리오 프로젝트 데이터 생성
const coinAlarmProject = {
  id: 'coinalarm-microservices',
  title: 'CoinAlarm 마이크로서비스 아키텍처',
  subtitle: '오토에버 모빌리티 SW스쿨',
  description: '하이브리드 클라우드 기반 가상화폐 알림 서비스 - 마이크로서비스 아키텍처',
  technologies: ['Kubernetes', 'Docker', 'Terraform', 'GitOps', 'Java', 'JavaScript'],
  repositories: coinAlarmRepos,
  githubOrg: 'https://github.com/coinalarm-click',
  color: '#2563eb',
  projectInfo: {
    name: 'CoinAlarm 마이크로서비스',
    duration: '2개월',
    members: '2명 (인프라 1명, 프론트엔드 1명)',
    platform: '마이크로서비스 아키텍처'
  },
  coreFeatures: [
    '마이크로서비스 아키텍처로 서비스 분리',
    'Kubernetes 기반 컨테이너 오케스트레이션',
    'GitOps를 통한 자동화된 배포 파이프라인',
    'Terraform을 이용한 인프라 코드화',
    '실시간 가격 모니터링 및 알림 시스템'
  ],
  architecture: 'React Frontend - Proxy Server - Price Watcher - Worker Servers - WAS - Kubernetes - GitOps - Terraform Infrastructure',
  serviceFlow: '사용자 요청 → 프론트엔드 → 프록시 서버 → 가격 모니터링 → 워커 서버들 → 알림 발송',
  myRole: [
    'Kubernetes 클러스터 설계 및 구축',
    'Terraform을 이용한 AWS EKS 인프라 구축',
    'GitOps 파이프라인 구축 (Helm + ArgoCD)',
    'Docker 컨테이너화 및 마이크로서비스 분리',
    'React 프론트엔드 개발 및 배포'
  ]
};

console.log('=== CoinAlarm 마이크로서비스 프로젝트 데이터 ===');
console.log(JSON.stringify(coinAlarmProject, null, 2));

console.log('\n=== 리포지토리별 분류 ===');
const categories = {};
coinAlarmRepos.forEach(repo => {
  if (!categories[repo.category]) {
    categories[repo.category] = [];
  }
  categories[repo.category].push(repo);
});

Object.keys(categories).forEach(category => {
  console.log(`\n${category}:`);
  categories[category].forEach(repo => {
    console.log(`  - ${repo.name}: ${repo.description} (${repo.language})`);
  });
});
