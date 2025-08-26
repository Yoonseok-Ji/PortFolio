import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

// 미디어 파일 import
import coinAlarmImage from '../pictures/coinalarm.png';
import ttoonVideo from '../video/ttoon_video.mov';

// CoinAlarm 프로젝트 이미지들
let architectureImage, serviceFlowImage;
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
      subtitle: '실시간 코인 예약알림 서비스',
      projectInfo: {
        name: 'CoinAlarm',
        duration: '2개월 (2025.01 ~ 2025.02)',
        members: '2명',
        theme: '하이브리드 클라우드를 이용한 메시지 이중화'
      },
      architecture: {
        title: '아키텍처',
        description: 'AWS EKS와 온프레미스 Kubernetes를 결합한 하이브리드 클라우드 아키텍처로 구성하여 알림 서버의 이중화를 구현했습니다. 가격 감지 서버(Proxy Server)는 업비트 API와 WebSocket으로 실시간 연동하며, Spring Boot 기반 Backend 서비스들이 MariaDB와 Redis를 활용해 회원 관리 및 데이터 캐싱을 처리합니다. Prometheus와 Grafana를 통한 모니터링 시스템과 HAProxy 로드밸런서로 고가용성을 보장합니다.'
      },
      myRole: {
        title: '나의 역할',
        details: [
          '온프레미스 Kubernetes 클러스터 구축 및 AWS EKS와의 하이브리드 클라우드 설계',
          'Prometheus + Grafana 모니터링 시스템 구축 및 PromQL 쿼리 작성',
          'HAProxy를 이용한 Active-Active 로드밸런서 구성으로 고가용성 달성',
          'GitOps 방식의 ArgoCD 기반 자동 배포 파이프라인 구축',
          'React 기반 실시간 코인 시세 대시보드 개발',
          'Node.js WebSocket 프록시 서버 개발 및 업비트 API 연동'
        ]
      },
      troubleShooting: {
        title: '트러블 슈팅',
        cases: [
          {
            title: '1. SSL 인증서 관련 문제',
            content: '문제배경: HTTPS 환경에서 WebSocket 연결 시 SSL 인증서 불일치로 인한 연결 실패 발생. 해결방법: Let\'s Encrypt를 이용한 무료 SSL 인증서 발급 및 자동 갱신 설정, Ingress Controller에 TLS 설정 적용. 이전과 비교: HTTP 환경에서만 동작 → HTTPS 환경에서 안전한 WebSocket 연결 지원. 학습내용: HTTPS 환경에서의 WebSocket 보안 연결 구성 방법과 SSL 인증서 관리의 중요성 학습'
          },
          {
            title: '2. ArgoCD 배포 오류 문제', 
            content: '문제배경: GitOps 파이프라인에서 YAML 파일 구문 오류 및 리소스 충돌로 인한 배포 실패. 해결방법: Helm Chart를 이용한 템플릿화, YAML 린터 도구 적용, 단계별 배포 전략 수립. 이전과 비교: 수동 kubectl 배포로 인한 휴먼 에러 → 자동화된 GitOps 파이프라인으로 안정적 배포. 학습내용: GitOps의 장점과 YAML 관리의 중요성, Helm을 통한 Kubernetes 애플리케이션 패키징 방법 습득'
          },
          {
            title: '3. 제한된 포트 환경 문제',
            content: '문제배경: 학원 데이터센터 환경에서 외부 접근 가능한 포트가 10개로 제한되어 다수의 마이크로서비스 노출에 어려움. 해결방법: Ingress Controller를 이용한 단일 진입점 구성, 경로 기반 라우팅으로 여러 서비스를 하나의 포트로 통합. 이전과 비교: 각 서비스마다 별도 포트 필요 → 단일 포트(80/443)로 모든 서비스 접근 가능. 학습내용: Ingress Controller의 활용법과 네트워크 제약 환경에서의 아키텍처 설계 능력 향상'
          },
          {
            title: '4. 리소스 부족 Pod 스케줄링 실패',
            content: '문제배경: 온프레미스 환경의 제한된 리소스로 인해 모든 Pod가 정상적으로 스케줄링되지 않는 문제. 해결방법: Resource Requests/Limits 최적화, HPA(Horizontal Pod Autoscaler) 설정, 우선순위 기반 Pod 스케줄링 적용. 이전과 비교: 리소스 과할당으로 인한 불안정한 서비스 → 효율적인 리소스 관리로 안정적인 서비스 운영. 학습내용: Kubernetes 리소스 관리의 중요성과 제한된 환경에서의 최적화 기법 습득'
          }
        ]
      },
      githubUrl: 'https://github.com/Yoonseok-Ji/CoinAlarm-Autoever_School_Project',
      technologies: ['AWS EKS', 'Kubernetes', 'Prometheus', 'Grafana'],
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
            
            {/* 프로젝트 기본 정보 추가 */}
            <div className="project-basic-info">
              <div className="info-item">
                <strong>인원:</strong> 2명
              </div>
              <div className="info-item">
                <strong>개발기간:</strong> 2024.12 ~ 2025.02
              </div>
              <div className="info-item">
                <strong>주제:</strong> 하이브리드 클라우드를 이용한 메시지 발송 이중화
              </div>
              
              {/* GitHub 링크 */}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                  GitHub Repository
                </a>
              )}
            </div>
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
            {/* CoinAlarm 프로젝트의 새로운 구조 */}
            {projectId === 'autoalarm' && (
              <>
                {/* 아키텍처 */}
                <section className="project-section full-width">
                  <h2>{project.architecture.title}</h2>
                  <p className="section-description">{project.architecture.description}</p>
                  {architectureImage && (
                    <div className="image-container">
                      <img 
                        src={architectureImage} 
                        alt="시스템 아키텍처" 
                        className="section-image"
                      />
                    </div>
                  )}
                </section>

                {/* 나의 역할 */}
                <section className="project-section full-width">
                  <h2>{project.myRole.title}</h2>
                  <ul className="simple-role-list">
                    {project.myRole.details.map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                  </ul>
                </section>

                {/* 트러블 슈팅 */}
                <section className="project-section full-width">
                  <h2>{project.troubleShooting.title}</h2>
                  <div className="simple-trouble-list">
                    {project.troubleShooting.cases.map((troubleCase, index) => (
                      <div key={index} className="simple-trouble-item">
                        <h4>{troubleCase.title}</h4>
                        <p>{troubleCase.content}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            )}

            {/* 다른 프로젝트들의 기존 구조 유지 */}
            {projectId !== 'autoalarm' && (
              <>
                {/* 핵심 기능 */}
                {project.coreFeatures && (
                  <section className="project-section">
                    <h2>핵심 기능</h2>
                    <ul className="features-list">
                      {project.coreFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* 아키텍처 */}
                <section className="project-section full-width">
                  <h2>아키텍처</h2>
                  <div className="architecture">
                    <p>{project.architecture}</p>
                  </div>
                </section>

                {/* 서비스 플로우 */}
                <section className="project-section full-width">
                  <h2>서비스 플로우</h2>
                  <div className="service-flow">
                    <p>{project.serviceFlow}</p>
                  </div>
                </section>

                {/* 나의 역할 */}
                {project.myRole && (
                  <section className="project-section full-width">
                    <h2>나의 역할</h2>
                    <ul className="role-list">
                      {project.myRole.map((role, index) => (
                        <li key={index}>{role}</li>
                      ))}
                    </ul>
                  </section>
                )}
              </>
            )}

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

            {/* 사용 기술 */}
            {project.technologies && (
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
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
