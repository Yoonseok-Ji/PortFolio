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
          {/* 프로필 섹션 */}
          <motion.div 
            className="profile-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-left">
              <div className="profile-image">
                <div className="image-placeholder">
                  <div className="profile-icon">👨‍💻</div>
                  <p>프로필 사진</p>
                </div>
              </div>
            </div>
            
            <div className="profile-right">
              <motion.div 
                className="hero-greeting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                안녕하세요, 저는
              </motion.div>
              
              <motion.h1
                className="hero-name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                클라우드 엔지니어를 희망하는<br />
                <span className="highlight">지윤석</span>입니다
              </motion.h1>

              <motion.div 
                className="profile-info"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="info-item">
                  <span className="info-label">학력</span>
                  <span className="info-value">홍익대학교 컴퓨터공학과</span>
                </div>
                <div className="info-item">
                  <span className="info-label">취미</span>
                  <span className="info-value">축구, 농구, 작곡</span>
                </div>
              </motion.div>

              <motion.div 
                className="characteristics"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h3>특징</h3>
                <div className="char-items">
                  <div className="char-item">
                    <div className="char-icon">💻</div>
                    <div className="char-text">
                      <h4>Frontend to Cloud</h4>
                      <p>웹 개발부터 클라우드까지</p>
                    </div>
                  </div>
                  <div className="char-item">
                    <div className="char-icon">🚀</div>
                    <div className="char-text">
                      <h4>Continuous Learning</h4>
                      <p>끊임없는 학습과 성장</p>
                    </div>
                  </div>
                  <div className="char-item">
                    <div className="char-icon">🤝</div>
                    <div className="char-text">
                      <h4>Team Collaboration</h4>
                      <p>팀워크와 소통 중시</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* 타임라인 섹션 */}
          <motion.div 
            className="timeline-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2>학력 및 활동</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">2019.03</div>
                <div className="timeline-content">
                  <h4>홍익대학교 컴퓨터공학과 입학</h4>
                  <p>학사 과정 시작</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">2023.09</div>
                <div className="timeline-content">
                  <h4>UMC 프론트엔드 팀장</h4>
                  <p>대학생 IT 연합동아리 활동</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">2024.02</div>
                <div className="timeline-content">
                  <h4>UMC 활동 완료</h4>
                  <p>프론트엔드 팀장 역할 수행</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">2024.08</div>
                <div className="timeline-content">
                  <h4>현대오토에버 모빌리티 스쿨</h4>
                  <p>클라우드 과정 시작</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-date">2025.02</div>
                <div className="timeline-content">
                  <h4>졸업 예정</h4>
                  <p>학사 과정 완료 및 클라우드 과정 수료</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
