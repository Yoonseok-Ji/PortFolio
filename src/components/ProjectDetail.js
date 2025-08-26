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
        description: 'AWS EKS와 온프레미스 Kubernetes를 결합한 하이브리드 클라우드 아키텍처로 구성. 마이크로서비스 패턴을 적용하여 10개의 독립적인 서비스로 분리하고, GitOps 방식의 자동 배포 파이프라인을 구축했습니다.',
        details: [
          'Frontend: React 기반 실시간 대시보드',
          'Proxy Server: Node.js WebSocket 서버 (업비트 API 연동)',
          'Backend Services: Spring Boot 기반 마이크로서비스',
          'Infrastructure: AWS EKS + 온프레미스 Kubernetes',
          'Monitoring: Prometheus + Grafana',
          'Load Balancer: HAProxy (Active-Active 구성)'
        ]
      },
      serviceFlow: {
        title: '서비스 플로우',
        steps: [
          '사용자가 React 대시보드에 접속하여 실시간 코인 시세 확인',
          'WebSocket을 통해 프록시 서버와 실시간 연결 수립',
          '프록시 서버가 업비트 API로부터 실시간 가격 데이터 수신',
          'Price Worker가 가격 데이터를 처리하고 알림 조건 확인',
          '조건 만족 시 Alarm Server를 통해 사용자에게 실시간 알림 발송',
          'HAProxy를 통한 로드밸런싱으로 고가용성 보장'
        ]
      },
      myRole: {
        title: '나의 역할',
        details: [
          {
            category: '🏗️ 인프라 구축 및 운영',
            tasks: [
              'AWS EKS 클러스터 구축 및 온프레미스 Kubernetes와의 하이브리드 환경 설계',
              'Terraform을 이용한 Infrastructure as Code (IaC) 구현',
              'GitOps 방식의 ArgoCD 기반 자동 배포 파이프라인 구축',
              'HAProxy를 이용한 Active-Active 로드밸런서 구성으로 고가용성 달성'
            ]
          },
          {
            category: '📊 모니터링 시스템 구축',
            tasks: [
              'Prometheus + Grafana를 이용한 종합 모니터링 시스템 구축',
              '직접 PromQL 쿼리를 작성하여 CPU, 메모리, 네트워크, 애플리케이션 메트릭 수집',
              'Kubernetes 클러스터, Node, Pod 상태 모니터링 대시보드 구성',
              'Alert Manager를 통한 장애 상황 자동 알림 시스템 구현'
            ]
          },
          {
            category: '💻 프론트엔드 개발',
            tasks: [
              'React 기반 실시간 코인 시세 대시보드 개발',
              'WebSocket을 이용한 실시간 데이터 업데이트 구현',
              '사용자 인증 시스템 및 개인화된 알림 설정 UI 개발',
              '반응형 웹 디자인으로 모바일 최적화'
            ]
          },
          {
            category: '🔗 프록시 서버 개발',
            tasks: [
              'Node.js 기반 WebSocket 프록시 서버 개발',
              '업비트 API와의 실시간 연동으로 코인 시세 데이터 수집',
              'WebSocket 연결 관리 및 클라이언트별 데이터 브로드캐스팅',
              'API 레이트 리미팅 및 에러 핸들링 구현'
            ]
          }
        ]
      },
      troubleShooting: {
        title: '트러블 슈팅',
        cases: [
          {
            problem: 'SSL 인증서 관련 문제',
            background: 'HTTPS 환경에서 WebSocket 연결 시 SSL 인증서 불일치로 인한 연결 실패 발생',
            solution: 'Let\'s Encrypt를 이용한 무료 SSL 인증서 발급 및 자동 갱신 설정, Ingress Controller에 TLS 설정 적용',
            comparison: '이전: HTTP 환경에서만 동작 → 이후: HTTPS 환경에서 안전한 WebSocket 연결 지원',
            learning: 'HTTPS 환경에서의 WebSocket 보안 연결 구성 방법과 SSL 인증서 관리의 중요성을 학습'
          },
          {
            problem: 'ArgoCD 배포 오류 문제',
            background: 'GitOps 파이프라인에서 YAML 파일 구문 오류 및 리소스 충돌로 인한 배포 실패',
            solution: 'Helm Chart를 이용한 템플릿화, YAML 린터 도구 적용, 단계별 배포 전략 수립',
            comparison: '이전: 수동 kubectl 배포로 인한 휴먼 에러 → 이후: 자동화된 GitOps 파이프라인으로 안정적 배포',
            learning: 'GitOps의 장점과 YAML 관리의 중요성, Helm을 통한 Kubernetes 애플리케이션 패키징 방법 습득'
          },
          {
            problem: '제한된 포트 환경에서의 서비스 노출 문제',
            background: '학원 데이터센터 환경에서 외부 접근 가능한 포트가 10개로 제한되어 다수의 마이크로서비스 노출에 어려움',
            solution: 'Ingress Controller를 이용한 단일 진입점 구성, 경로 기반 라우팅으로 여러 서비스를 하나의 포트로 통합',
            comparison: '이전: 각 서비스마다 별도 포트 필요 → 이후: 단일 포트(80/443)로 모든 서비스 접근 가능',
            learning: 'Ingress Controller의 활용법과 네트워크 제약 환경에서의 아키텍처 설계 능력 향상'
          },
          {
            problem: '리소스 부족으로 인한 Pod 스케줄링 실패',
            background: '온프레미스 환경의 제한된 리소스로 인해 모든 Pod가 정상적으로 스케줄링되지 않는 문제',
            solution: 'Resource Requests/Limits 최적화, HPA(Horizontal Pod Autoscaler) 설정, 우선순위 기반 Pod 스케줄링 적용',
            comparison: '이전: 리소스 과할당으로 인한 불안정한 서비스 → 이후: 효율적인 리소스 관리로 안정적인 서비스 운영',
            learning: 'Kubernetes 리소스 관리의 중요성과 제한된 환경에서의 최적화 기법 습득'
          }
        ]
      },
      demoUrl: 'https://coinalarm.click',
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
            
            {/* 프로젝트 기본 정보를 hero 섹션에 포함 */}
            <div className="project-basic-info">
              <div className="info-row">
                <div className="info-item">
                  <strong>인원:</strong> {project.projectInfo.members}
                </div>
                <div className="info-item">
                  <strong>개발기간:</strong> {project.projectInfo.duration}
                </div>
              </div>
              {project.projectInfo.theme && (
                <div className="info-item theme">
                  <strong>주제:</strong> {project.projectInfo.theme}
                </div>
              )}
              {project.demoUrl && (
                <div className="demo-link">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="demo-btn">
                    🌐 coinalarm.click
                  </a>
                </div>
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
                    <span>{project.demoUrl ? project.demoUrl.replace('https://', '') : project.title.toLowerCase() + '.com'}</span>
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
                  <ul className="architecture-details">
                    {project.architecture.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
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

                {/* 서비스 플로우 */}
                <section className="project-section full-width">
                  <h2>{project.serviceFlow.title}</h2>
                  <ol className="service-flow-steps">
                    {project.serviceFlow.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                  {serviceFlowImage && (
                    <div className="image-container">
                      <img 
                        src={serviceFlowImage} 
                        alt="서비스 플로우" 
                        className="section-image"
                      />
                    </div>
                  )}
                </section>

                {/* 나의 역할 */}
                <section className="project-section full-width">
                  <h2>{project.myRole.title}</h2>
                  {project.myRole.details.map((roleCategory, index) => (
                    <div key={index} className="role-category">
                      <h3>{roleCategory.category}</h3>
                      <ul className="role-tasks">
                        {roleCategory.tasks.map((task, taskIndex) => (
                          <li key={taskIndex}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </section>

                {/* 트러블 슈팅 */}
                <section className="project-section full-width">
                  <h2>{project.troubleShooting.title}</h2>
                  {project.troubleShooting.cases.map((troubleCase, index) => (
                    <div key={index} className="trouble-case">
                      <h3>{troubleCase.problem}</h3>
                      <div className="trouble-details">
                        <div className="trouble-item">
                          <strong>문제 배경:</strong>
                          <p>{troubleCase.background}</p>
                        </div>
                        <div className="trouble-item">
                          <strong>해결 방법:</strong>
                          <p>{troubleCase.solution}</p>
                        </div>
                        <div className="trouble-item">
                          <strong>이전과 비교:</strong>
                          <p>{troubleCase.comparison}</p>
                        </div>
                        <div className="trouble-item">
                          <strong>해당 경험을 통해 알게된 점:</strong>
                          <p>{troubleCase.learning}</p>
                        </div>
                      </div>
                    </div>
                  ))}
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
