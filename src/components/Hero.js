import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div 
            className="profile-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="profile-left">
              <div className="profile-image">
                <div className="image-placeholder">
                  <div className="profile-icon">👨💻</div>
                  <p>프로필 사진</p>
                </div>
              </div>
            </div>
            
            <div className="profile-right">
              <div className="hero-greeting">
                안녕하세요, 저는
              </div>
              
              <h1 className="hero-name">
                클라우드 엔지니어를 희망하는<br />
                <span className="name-highlight">지윤석</span>입니다
              </h1>

              <div className="profile-info">
                <div className="info-item2">
                  <span className="info-label">전공</span>
                  <span className="info-value">컴퓨터공학과</span>
                </div>
                <div className="info-item2">
                  <span className="info-label">관심분야</span>
                  <span className="info-value">클라우드 인프라, DevOps, CI/CD</span>
                </div>
                <div className="info-item2">
                  <span className="info-label">취미</span>
                  <span className="info-value">축구, 농구, 작곡</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="education-section">
            <h2>학력 및 활동</h2>
            <div className="education-content">
              <div className="education-item">
                <h4>📚 학력</h4>
                <p><strong>홍익대학교 컴퓨터공학과 졸업</strong> (2019.03 ~ 2025.02)</p>
                <p><strong>육군 만기제대 (군사경찰)</strong> (2020.06 ~ 2021.12)</p>
              </div>

              <div className="education-item">
                <h4>📌 UMC (University MakeUs Challenge)</h4>
                <p><strong>프론트엔드 팀장</strong> (2023.09 ~ 2024.02)</p>
                <p>프론트엔드 팀장으로 실전 개발과 협업 역량 강화. 매주 제공되는 워크북을 기반으로 핵심 프론트엔드 개념을 학습하고, 팀원들에게 내용을 정리해 공유 및 멘토링 진행. 사이드 프로젝트를 주도적으로 수행하며 React 기반 프론트엔드 개발을 담당. AWS S3 + CloudFront를 이용한 정적 웹 사이트 배포 환경 구성 및 운영. GitHub 협업을 통해 코드 리뷰 및 버전 관리를 실전처럼 경험.</p>
              </div>

              <div className="education-item">
                <h4>🚗 현대오토에버 SW 모빌리티 스쿨</h4>
                <p><strong>클라우드 과정 1기</strong> (2024.08 ~ 2025.02)</p>
                <p>Docker, K8s 및 퍼블릭 클라우드, DevOps 교육과정을 이수. K8s + AWS EKS를 활용해 하이브리드 클라우드 아키텍처를 직접 기획·구현하고, 프론트엔드 및 인프라 구축을 담당함.</p>
              </div>
            </div>
          </div>

          <div className="hero-buttons">
            <button
              className="hero-btn primary"
              onClick={() => scrollToSection('projects')}
            >
              프로젝트 보기
            </button>
            <button
              className="hero-btn secondary"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
