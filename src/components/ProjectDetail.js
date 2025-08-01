import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

// 미디어 파일 import
import coinAlarmImage from '../pictures/coinalarm.png';
import ttoonVideo from '../video/ttoon_video.mov';

// 추가 이미지들 (파일이 없을 경우를 대비해 try-catch 또는 조건부 처리)
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
      description: '지역 기반 퍼스널 트레이닝 매칭 플랫폼으로, 트레이너와 회원을 연결하는 웹 서비스입니다.',
      technologies: ['React', 'JavaScript', 'Rest API'],
      features: [
        '지역 기반 트레이너 검색',
        '실시간 채팅 시스템',
        '예약 및 결제 시스템',
        '리뷰 및 평점 시스템'
      ],
      architecture: '프론트엔드(React) - JavaScript - REST API - 백엔드 서버',
      myRole: [
        'React 프론트엔드 개발',
        'JavaScript 인터랙션 구현',
        'REST API 설계 및 연동'
      ],
      color: '#10b981'
    },
    'ttoon': {
      title: 'TTOON',
      subtitle: 'AI가 만들어주는 일기를 네컷 만화로 바꿔주는 웹서비스',
      description: '사용자의 일기를 AI가 분석하여 네컷 만화로 변환해주는 창의적인 웹 서비스입니다.',
      technologies: ['React', 'AWS', 'RestApi', 'Jenkins'],
      features: [
        'AI 기반 일기 분석',
        '네컷 만화 자동 생성',
        '감정 분석 및 시각화',
        '만화 스타일 커스터마이징'
      ],
      architecture: '프론트엔드(React) - REST API - AWS 클라우드 - Jenkins CI/CD - AI 이미지 생성',
      myRole: [
        'React 프론트엔드 개발',
        'REST API 설계 및 구현',
        'AWS 인프라 구축 및 배포',
        'Jenkins CI/CD 파이프라인 구축'
      ],
      color: '#f59e0b'
    },
    'autoalarm': {
      title: 'CoinAlarm',
      subtitle: '가상화폐 자동 알림 서비스',
      description: '가상화폐 가격 변동을 모니터링하고 사용자 설정에 따라 자동으로 알림을 보내는 서비스입니다.',
      technologies: ['K8s', 'AWS', 'Jenkins', 'React'],
      projectInfo: {
        name: 'CoinAlarm',
        duration: '2개월',
        members: '2명',
        myRole: '가상화 세팅 및 K8s 구축, 프론트엔드 개발 및 모니터링 시스템 구축(Prometheus, Grafana)'
      },
      features: [
        'VMware로 가상화 한 후 K8s로 컨테이너 오케스트레이션 구축',
        '프론트엔드 개발',
        '모니터링 시스템 구축',
        '특정시간대 알림, 실시간 시세 등 다양한 기능별 알림',
        '전화번호 인증으로 SMS 알림'
      ],
      coreFeatures: [
        '특정시간대 알림',
        '실시간 시세 등 다양한 기능별 알림',
        '전화번호 인증으로 SMS 알림'
      ],
      architecture: 'React 프론트엔드 - Python 백엔드 - Kubernetes 오케스트레이션 - Jenkins CI/CD - AWS 클라우드 - Prometheus/Grafana 모니터링',
      myRole: [
        'VMware 가상화 환경 구축',
        'Kubernetes 클러스터 구축 및 관리',
        'React 프론트엔드 개발',
        'Prometheus, Grafana 모니터링 시스템 구축',
        'Jenkins CI/CD 파이프라인 구축'
      ],
      color: '#3b82f6'
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
        <>
          <img 
            src={coinAlarmImage}
            alt="CoinAlarm 스크린샷"
            className={`project-screenshot ${mediaLoaded ? 'loaded' : ''}`}
            onLoad={handleMediaLoad}
            onError={handleMediaError}
            loading="lazy"
          />
          {(mediaError || !mediaLoaded) && (
            <div className="media-placeholder">
              <div className="placeholder-content">
                <h3>🪙 CoinAlarm</h3>
                <p>가상화폐 알림 서비스</p>
                <small>실시간 가격 모니터링 대시보드</small>
              </div>
            </div>
          )}
        </>
      );
    }
    
    // TTOON에는 비디오 표시 (ttoon_video.mov)
    if (projectId === 'ttoon') {
      return (
        <>
          <video 
            src={ttoonVideo}
            alt="TTOON 데모 비디오"
            className={`project-video ${mediaLoaded ? 'loaded' : ''}`}
            controls
            muted
            preload="metadata"
            onLoadedData={handleMediaLoad}
            onError={handleMediaError}
          />
          {(mediaError || !mediaLoaded) && (
            <div className="media-placeholder">
              <div className="placeholder-content">
                <h3>🎨 TTOON</h3>
                <p>AI 네컷 만화 생성기</p>
                <small>일기를 만화로 변환하는 데모</small>
              </div>
            </div>
          )}
        </>
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
      <motion.div 
        className="project-detail-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button onClick={() => navigate('/')} className="back-btn">
          ← 돌아가기
        </button>

        <div className="project-hero">
          <div className="project-info">
            <motion.h1 
              className="project-title"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {project.title}
            </motion.h1>
            <motion.p 
              className="project-subtitle"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {project.subtitle}
            </motion.p>
            <motion.p 
              className="project-description"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {project.description}
            </motion.p>
          </div>

          <motion.div 
            className="imac-mockup"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
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
          </motion.div>
        </div>

        <div className="project-content">
          <div className="content-grid">
            {/* CoinAlarm 프로젝트 정보 섹션 */}
            {projectId === 'autoalarm' && (
              <motion.section 
                className="project-section full-width"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <h2>프로젝트 정보</h2>
                <div className="project-info-grid">
                  <div className="info-item">
                    <strong>프로젝트명:</strong> {project.projectInfo?.name}
                  </div>
                  <div className="info-item">
                    <strong>개발 기간:</strong> {project.projectInfo?.duration}
                  </div>
                  <div className="info-item">
                    <strong>참여 인원:</strong> {project.projectInfo?.members}
                  </div>
                  <div className="info-item full-width">
                    <strong>나의 역할:</strong> {project.projectInfo?.myRole}
                  </div>
                </div>
              </motion.section>
            )}

            {/* 핵심 기능 섹션 (CoinAlarm만) */}
            {projectId === 'autoalarm' && (
              <motion.section 
                className="project-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <h2>핵심 기능 소개</h2>
                <ul className="features-list">
                  {project.coreFeatures?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </motion.section>
            )}

            {/* K8s 섹션 (CoinAlarm만) */}
            {projectId === 'autoalarm' && (
              <motion.section 
                className="project-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <h2>Kubernetes</h2>
                <div className="image-container">
                  {k8sImage ? (
                    <img 
                      src={k8sImage} 
                      alt="Kubernetes 구조도" 
                      className="section-image"
                    />
                  ) : (
                    <div className="image-placeholder">
                      <p>Kubernetes 구조도</p>
                    </div>
                  )}
                </div>
              </motion.section>
            )}

            <motion.section 
              className="project-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: projectId === 'autoalarm' ? 0.8 : 0.5 }}
            >
              <h2>주요 기능</h2>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </motion.section>

            <motion.section 
              className="project-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: projectId === 'autoalarm' ? 0.9 : 0.6 }}
            >
              <h2>사용 기술</h2>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag" style={{ backgroundColor: project.color }}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.section>

            {/* 아키텍처 섹션 */}
            <motion.section 
              className="project-section full-width"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: projectId === 'autoalarm' ? 1.0 : 0.7 }}
            >
              <h2>시스템 아키텍처</h2>
              {projectId === 'autoalarm' ? (
                <div className="image-container">
                  {architectureImage ? (
                    <img 
                      src={architectureImage} 
                      alt="시스템 아키텍처" 
                      className="section-image"
                    />
                  ) : (
                    <div className="architecture" style={{ borderColor: project.color }}>
                      <p>{project.architecture}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="architecture" style={{ borderColor: project.color }}>
                  <p>{project.architecture}</p>
                </div>
              )}
            </motion.section>

            {/* 서비스 플로우 섹션 (CoinAlarm만) */}
            {projectId === 'autoalarm' && (
              <motion.section 
                className="project-section full-width"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.1 }}
              >
                <h2>서비스 플로우</h2>
                <div className="image-container">
                  {serviceFlowImage ? (
                    <img 
                      src={serviceFlowImage} 
                      alt="서비스 플로우" 
                      className="section-image"
                    />
                  ) : (
                    <div className="image-placeholder">
                      <p>서비스 플로우 다이어그램</p>
                    </div>
                  )}
                </div>
              </motion.section>
            )}

            <motion.section 
              className="project-section full-width"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: projectId === 'autoalarm' ? 1.2 : 0.8 }}
            >
              <h2>담당 역할</h2>
              <ul className="role-list">
                {project.myRole.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </motion.section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
