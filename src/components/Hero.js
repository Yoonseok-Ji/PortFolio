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
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-content">
                  <h4>홍익대학교 컴퓨터공학과 졸업</h4>
                  <div className="timeline-period">2019.03 ~ 2025.02</div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-content">
                  <h4>육군 만기제대 (군사경찰)</h4>
                  <div className="timeline-period">2020.06 ~ 2021.12</div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-content">
                  <h4>UMC(개발연합동아리) 프론트엔드 팀장</h4>
                  <div className="timeline-period">2023.09 ~ 2024.02</div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-content">
                  <h4>현대 오토에버 모빌리티 SW스쿨 클라우드 과정 1기 수료</h4>
                  <div className="timeline-period">2024.08 ~ 2025.02</div>
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
