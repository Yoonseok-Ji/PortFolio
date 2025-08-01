import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projectsData = {
    'dongne': {
      title: '동네형',
      subtitle: '트레이너와 회원 간 PT 매칭 웹 서비스',
      description: '지역 기반 퍼스널 트레이닝 매칭 플랫폼으로, 트레이너와 회원을 연결하는 웹 서비스입니다.',
      technologies: ['React', 'Node.js', 'MySQL', 'AWS'],
      features: [
        '지역 기반 트레이너 검색',
        '실시간 채팅 시스템',
        '예약 및 결제 시스템',
        '리뷰 및 평점 시스템'
      ],
      architecture: '프론트엔드(React) - 백엔드(Node.js) - 데이터베이스(MySQL) - 클라우드(AWS)',
      myRole: [
        '프론트엔드 개발 및 UI/UX 디자인',
        'REST API 설계 및 구현',
        'AWS 인프라 구축 및 배포'
      ],
      screenshots: [
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
        '/api/placeholder/800/500'
      ]
    },
    'ttoon': {
      title: 'TTOON',
      subtitle: 'AI가 만들어주는 일기를 네컷 만화로 바꿔주는 웹서비스',
      description: '사용자의 일기를 AI가 분석하여 네컷 만화로 변환해주는 창의적인 웹 서비스입니다.',
      technologies: ['React', 'Python', 'FastAPI', 'OpenAI API'],
      features: [
        'AI 기반 일기 분석',
        '네컷 만화 자동 생성',
        '감정 분석 및 시각화',
        '만화 스타일 커스터마이징'
      ],
      architecture: '프론트엔드(React) - AI 서버(Python/FastAPI) - OpenAI API - 이미지 생성',
      myRole: [
        'AI 모델 연동 및 API 개발',
        '프론트엔드 인터페이스 구현',
        '이미지 처리 및 최적화'
      ],
      screenshots: [
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
        '/api/placeholder/800/500'
      ]
    },
    'autoalarm': {
      title: 'AutoAlarm',
      subtitle: '가상화폐 자동 알림 서비스',
      description: '가상화폐 가격 변동을 모니터링하고 사용자 설정에 따라 자동으로 알림을 보내는 서비스입니다.',
      technologies: ['Python', 'Docker', 'Kubernetes', 'Jenkins'],
      features: [
        '실시간 가격 모니터링',
        '사용자 맞춤 알림 설정',
        '다양한 알림 채널 지원',
        '가격 변동 분석 및 예측'
      ],
      architecture: 'Python 서버 - Docker 컨테이너 - Kubernetes 오케스트레이션 - Jenkins CI/CD',
      myRole: [
        'Python 백엔드 서버 개발',
        'Docker 컨테이너화',
        'Kubernetes 배포 및 관리',
        'Jenkins CI/CD 파이프라인 구축'
      ],
      screenshots: [
        '/api/placeholder/800/500',
        '/api/placeholder/800/500',
        '/api/placeholder/800/500'
      ]
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

  return (
    <div className="project-detail">
      <motion.div 
        className="project-detail-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <button onClick={() => navigate('/')} className="back-btn">
          ← 돌아가기
        </button>

        <div className="project-header">
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>

        <div className="project-content">
          <section className="project-section">
            <h2>프로젝트 소개</h2>
            <p>{project.description}</p>
          </section>

          <section className="project-section">
            <h2>주요 기능</h2>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <section className="project-section">
            <h2>사용 기술</h2>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </section>

          <section className="project-section">
            <h2>시스템 아키텍처</h2>
            <div className="architecture">
              <p>{project.architecture}</p>
            </div>
          </section>

          <section className="project-section">
            <h2>담당 역할</h2>
            <ul className="role-list">
              {project.myRole.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </section>

          <section className="project-section">
            <h2>스크린샷</h2>
            <div className="screenshots">
              {project.screenshots.map((screenshot, index) => (
                <div key={index} className="screenshot">
                  <div className="screenshot-placeholder">
                    스크린샷 {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
