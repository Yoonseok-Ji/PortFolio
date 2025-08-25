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
            <h2>학력 및 이력</h2>
            <div className="education-content">
              <div className="education-grid">
                <div className="education-card">
                  <div className="card-header">
                    <h4>🎓 학력</h4>
                  </div>
                  <div className="card-content">
                    <div className="education-item">
                      <strong>홍익대학교 컴퓨터공학과 졸업</strong>
                      <span className="period">(2019.03 ~ 2025.02)</span>
                    </div>
                    <div className="education-item">
                      <strong>육군 만기제대 (군사경찰)</strong>
                      <span className="period">(2020.06 ~ 2021.12)</span>
                    </div>
                  </div>
                </div>

                <div className="education-card">
                  <div className="card-header">
                    <h4>💼 경력 및 활동</h4>
                  </div>
                  <div className="card-content">
                    <div className="experience-item">
                      <div className="exp-title">UMC(전국 대학연합 개발 동아리)</div>
                      <div className="exp-role">프론트엔드 팀장 (2023.09 ~ 2024.03)</div>
                      <ul className="exp-details">
                        <li>매주 워크북 기반 프론트엔드 개념 학습 및 팀원 멘토링</li>
                        <li>React 기반 사이드 프로젝트 주도적 수행</li>
                        <li>AWS S3 + CloudFront 배포 환경 구성 및 운영</li>
                        <li>GitHub 협업을 통한 코드 리뷰 및 버전 관리</li>
                      </ul>
                    </div>

                    <div className="experience-item">
                      <div className="exp-title">현대오토에버 모빌리티 SW 스쿨 클라우드 과정</div>
                      <div className="exp-role">클라우드 엔지니어 과정 수료 (2024.08 ~ 2025.02)</div>
                      <ul className="exp-details">
                        <li>Docker, K8s 및 퍼블릭 클라우드, DevOps 교육과정 이수</li>
                        <li>K8s + AWS EKS 하이브리드 클라우드 아키텍처 기획·구현</li>
                        <li>프론트엔드 및 인프라 구축 담당</li>
                      </ul>
                    </div>
                  </div>
                </div>
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
