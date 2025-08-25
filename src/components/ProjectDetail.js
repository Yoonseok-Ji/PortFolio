import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

// 미디어 파일 import
import coinAlarmImage from '../pictures/coinalarm.png';
import ttoonVideo from '../video/ttoon_video.mov';

// CoinAlarm 프로젝트 이미지들
let k8sImage, architectureImage, serviceFlowImage;
try {
  k8sImage = require('../pictures/k8s.png');
} catch (e) {
  k8sImage = null;
}
try {
  architectureImage = require('../pictures/architecture.png');
} catch (e) {
  architectureImage = null;
}
try {
  serviceFlowImage = require('../pictures/service_flow.png');
} catch (e) {
  serviceFlowImage = null;
}

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [mediaLoaded, setMediaLoaded] = useState(false);
  const [mediaError, setMediaError] = useState(false);

  // 페이지 로드 시 스크롤을 맨 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMediaLoad = useCallback(() => {
    setMediaLoaded(true);
  }, []);

  const handleMediaError = useCallback(() => {
    setMediaError(true);
  }, []);

  const projectsData = {
    'dongne': {
      title: '동네형',
      subtitle: '트레이너와 회원 간 PT 매칭 웹 서비스',
      projectInfo: {
        name: '동네형',
        duration: '3개월',
        members: '5명 (프론트엔드 3명, 백엔드 2명)',
        platform: '웹 서비스'
      },
      coreFeatures: [
        '지역 기반 트레이너 검색 및 필터링',
        '실시간 채팅 시스템으로 트레이너-회원 소통',
        '예약 및 결제 시스템 통합',
        '리뷰 및 평점 시스템으로 신뢰도 향상'
      ],
      architecture: 'React 프론트엔드 - REST API - Node.js 백엔드 - MySQL 데이터베이스',
      serviceFlow: '회원가입/로그인 → 지역 설정 → 트레이너 검색 → 프로필 확인 → 채팅 상담 → 예약 및 결제 → PT 진행 → 리뷰 작성',
      myRole: [
        'React 컴포넌트 설계 및 개발 (검색, 필터링, 프로필 페이지)',
        'REST API 설계 및 프론트엔드-백엔드 연동',
        '반응형 웹 디자인 구현 (모바일 최적화)',
        'Git을 통한 팀 협업 및 코드 리뷰 진행'
      ],
      technologies: ['REST API', 'React'],
      color: '#2563eb'
    },
    'ttoon': {
      title: 'TTOON',
      subtitle: 'AI가 만들어주는 일기를 네컷 만화로 바꿔주는 웹서비스',
      projectInfo: {
        name: 'TTOON',
        duration: '4개월',
        members: '4명 (프론트엔드 2명, 백엔드 1명, AI 1명)',
        platform: '웹 서비스'
      },
      coreFeatures: [
        'AI 기반 일기 텍스트 분석 및 감정 인식',
        '네컷 만화 자동 생성 및 스타일 커스터마이징',
        '감정 분석 결과 시각화 대시보드',
        '만화 저장 및 공유 기능'
      ],
      architecture: 'React 프론트엔드 - REST API - AWS Lambda - AI 이미지 생성 모델 - AWS S3 스토리지',
      serviceFlow: '일기 작성 → AI 텍스트 분석 → 감정 및 키워드 추출 → 네컷 만화 생성 → 스타일 선택 → 결과 확인 → 저장/공유',
      myRole: [
        'React 기반 프론트엔드 전체 개발 (UI/UX 설계 포함)',
        'REST API 설계 및 백엔드와의 데이터 통신 구현',
        'AWS S3를 활용한 이미지 업로드 및 관리 시스템 구축',
        'AWS EC2를 이용한 서버 배포 및 운영'
      ],
      technologies: ['AWS EC2', 'S3', 'REST API', 'React'],
      color: '#2563eb'
    },
    'autoalarm': {
      title: 'CoinAlarm',
      subtitle: '하이브리드 클라우드를 이용한 메시지 이중화',
      projectInfo: {
        name: 'CoinAlarm',
        duration: '6개월 (2024.08 ~ 2025.02)',
        members: '2명',
        platform: '웹 서비스 + 실시간 알림'
      },
      coreFeatures: [
        '실시간 가상화폐 시세 모니터링 및 WebSocket 기반 실시간 업데이트',
        '마이크로서비스 아키텍처로 구성된 10개 서비스 (Frontend, WAS, Proxy, Worker 등)',
        'Terraform을 이용한 AWS EKS 인프라 코드화 (IaC)',
        'GitOps 방식의 자동 배포 파이프라인',
        '실시간 모니터링 및 알림',
        '사용자 인증 시스템 및 개인화된 알림 설정'
      ],
      architecture: 'React Frontend → Proxy Server → WAS (Spring Boot) → Worker Services → AWS EKS → Monitoring Stack',
      serviceFlow: '사용자 접속 → React 대시보드 → WebSocket 실시간 연결 → 프록시 서버 → 업비트 API 연동 → 가격 데이터 처리 → 알림 조건 확인 → 실시간 알림 발송',
      myRole: [
        '🖥️ React 기반 프론트엔드 개발 (실시간 차트, 대시보드, 사용자 인증)',
        '🔗 Node.js 프록시 서버 개발 (WebSocket, 업비트 API 연동)',
        '📊 실시간 모니터링 시스템 구축 및 알림 설정',
        '🚀 GitOps 기반 배포 파이프라인 구축',
        '🏗️ Terraform을 이용한 AWS EKS 인프라 자동화',
        '🐳 Docker 컨테이너화 및 이미지 관리'
      ],
      technologies: ['AWS EKS', 'K8s', 'Prometheus&Grafana', 'React'],
      githubUrl: 'https://github.com/Yoonseok-Ji/CoinAlarm-Autoever_School_Project',
      achievements: [
        '운영 경험을 통한 프로덕션 서비스 구축 노하우 습득',
        '10개 마이크로서비스로 구성된 복합 시스템 설계 및 구현',
        'WebSocket을 통한 실시간 데이터 처리 (지연시간 < 100ms)',
        'Active-Active 구조로 고가용성 달성',
        '실시간 모니터링으로 99.9% 서비스 가용성 달성'
      ],
      color: '#2563eb'
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <h1>프로젝트를 찾을 수 없습니다.</h1>
          <button onClick={() => navigate('/')} className="back-btn">
            홈으로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  const renderMedia = () => {
    // CoinAlarm에는 이미지 표시 (coinalarm.png)
    if (projectId === 'autoalarm') {
      return (
        <div className="media-container">
          <img 
            src={coinAlarmImage}
            alt="CoinAlarm 스크린샷"
            className="project-screenshot"
            onLoad={handleMediaLoad}
            onError={handleMediaError}
            loading="eager"
          />
          {(!mediaLoaded && !mediaError) && (
            <div className="media-placeholder">
              <div className="placeholder-content">
                <h3>🪙 CoinAlarm</h3>
                <p>가상화폐 알림 서비스</p>
                <small>이미지 로딩 중...</small>
              </div>
            </div>
          )}
          {mediaError && (
            <div className="media-placeholder">
              <div className="placeholder-content">
                <h3>🪙 CoinAlarm</h3>
                <p>가상화폐 알림 서비스</p>
                <small>실시간 가격 모니터링 대시보드</small>
              </div>
            </div>
          )}
        </div>
      );
    }
    
    // TTOON에는 비디오 표시 (ttoon_video.mov)
    if (projectId === 'ttoon') {
      return (
        <div className="media-container">
          <video 
            src={ttoonVideo}
            alt="TTOON 데모 비디오"
            className="project-video"
            controls
            muted
            preload="metadata"
            onLoadedData={handleMediaLoad}
            onError={handleMediaError}
          />
          {(!mediaLoaded && !mediaError) && (
            <div className="media-placeholder">
              <div className="placeholder-content">
                <h3>🎨 TTOON</h3>
                <p>AI 네컷 만화 생성기</p>
                <small>비디오 로딩 중...</small>
              </div>
            </div>
          )}
          {mediaError && (
            <div className="media-placeholder">
              <div className="placeholder-content">
                <h3>🎨 TTOON</h3>
                <p>AI 네컷 만화 생성기</p>
                <small>일기를 만화로 변환하는 데모</small>
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="media-placeholder">
        <div className="placeholder-content">
          <h3>💻 {project.title}</h3>
          <p>{project.subtitle}</p>
          <small>프로젝트 미리보기</small>
        </div>
      </div>
    );
  };

  return (
    <div className="project-detail">
      <div className="project-detail-container">
        <button onClick={() => navigate('/')} className="back-btn">
          ← 돌아가기
        </button>

        <div className="project-hero">
          <div className="project-info">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>

          <div className="imac-mockup">
            <div className="imac-screen">
              <div className="screen-content">
                <div className="browser-bar">
                  <div className="browser-buttons">
                    <span className="btn-close"></span>
                    <span className="btn-minimize"></span>
                    <span className="btn-maximize"></span>
                  </div>
                  <div className="address-bar">
                    <span>{project.title.toLowerCase()}.com</span>
                  </div>
                </div>
                <div className="website-preview">
                  {renderMedia()}
                </div>
              </div>
            </div>
            <div className="imac-stand"></div>
            <div className="imac-base"></div>
          </div>
        </div>

        <div className="project-content">
          <div className="content-grid">
            {/* 프로젝트 정보 */}
            <section className="project-section">
              <h2>프로젝트 정보</h2>
              <div className="project-info-grid">
                <div className="info-item">
                  <strong>프로젝트명:</strong> {project.projectInfo.name}
                </div>
                <div className="info-item">
                  <strong>개발 기간:</strong> {project.projectInfo.duration}
                </div>
                <div className="info-item">
                  <strong>참여 인원:</strong> {project.projectInfo.members}
                </div>
                <div className="info-item">
                  <strong>플랫폼:</strong> {project.projectInfo.platform}
                </div>
              </div>
            </section>

            {/* 핵심 기능 */}
            <section className="project-section">
              <h2>핵심 기능</h2>
              <ul className="features-list">
                {project.coreFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>

            {/* CoinAlarm 전용 K8s 섹션 */}
            {projectId === 'autoalarm' && (
              <section className="project-section">
                <h2>Kubernetes 구조</h2>
                <div className="image-container">
                  {k8sImage ? (
                    <img 
                      src={k8sImage} 
                      alt="Kubernetes 구조도" 
                      className="section-image"
                    />
                  ) : (
                    <div className="image-placeholder">
                      <p>Kubernetes 클러스터 구조도</p>
                      <small>마스터/워커 노드 구성 및 Pod 배치</small>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 아키텍처 */}
            <section className="project-section full-width">
              <h2>아키텍처</h2>
              {projectId === 'autoalarm' && architectureImage ? (
                <div className="image-container">
                  <img 
                    src={architectureImage} 
                    alt="시스템 아키텍처" 
                    className="section-image"
                  />
                </div>
              ) : (
                <div className="architecture">
                  <p>{project.architecture}</p>
                </div>
              )}
            </section>

            {/* CoinAlarm 전용 서비스 플로우 섹션 */}
            {projectId === 'autoalarm' && (
              <section className="project-section full-width">
                <h2>서비스 플로우</h2>
                <div className="image-container">
                  {serviceFlowImage ? (
                    <img 
                      src={serviceFlowImage} 
                      alt="서비스 플로우" 
                      className="section-image"
                    />
                  ) : (
                    <div className="service-flow">
                      <p>{project.serviceFlow}</p>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* 다른 프로젝트의 서비스 플로우 */}
            {projectId !== 'autoalarm' && (
              <section className="project-section full-width">
                <h2>서비스 플로우</h2>
                <div className="service-flow">
                  <p>{project.serviceFlow}</p>
                </div>
              </section>
            )}

            {/* GitHub 리포지토리 섹션 (CoinAlarm만) */}
            {projectId === 'autoalarm' && project.githubUrl && (
              <section className="project-section full-width">
                <h2>GitHub 리포지토리</h2>
                <div className="github-section">
                  <div className="github-repo">
                    <h4>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        CoinAlarm-Autoever_School_Project
                      </a>
                    </h4>
                    <p>마이크로서비스 아키텍처로 통합된 전체 프로젝트 코드</p>
                    <div className="repo-stats">
                      <span className="stat">📁 107개 파일</span>
                      <span className="stat">📝 23,764줄 코드</span>
                      <span className="stat">🏗️ 10개 마이크로서비스</span>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* 주요 성과 (CoinAlarm만) */}
            {projectId === 'autoalarm' && project.achievements && (
              <section className="project-section">
                <h2>주요 성과</h2>
                <ul className="achievements-list">
                  {project.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* 나의 역할 */}
            <section className="project-section full-width">
              <h2>나의 역할</h2>
              <ul className="role-list">
                {project.myRole.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </section>

            {/* 사용 기술 */}
            <section className="project-section">
              <h2>사용 기술</h2>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
