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
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
            className="hero-resume"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="resume-section">
              <div className="resume-header">
                <div className="resume-icon">🎓</div>
                <h3>학력</h3>
              </div>
              <div className="resume-item">
                <div className="resume-content">
                  <div className="resume-title">홍익대학교 컴퓨터공학과</div>
                  <div className="resume-subtitle">학사 과정</div>
                </div>
                <div className="resume-period">2019.03 - 2025.02</div>
              </div>
            </div>
            
            <div className="resume-section">
              <div className="resume-header">
                <div className="resume-icon">🚀</div>
                <h3>활동</h3>
              </div>
              <div className="resume-items">
                <div className="resume-item">
                  <div className="resume-content">
                    <div className="resume-title">UMC 프론트엔드 팀장</div>
                    <div className="resume-subtitle">대학생 IT 연합동아리</div>
                  </div>
                  <div className="resume-period">2023.09 - 2024.02</div>
                </div>
                <div className="resume-item">
                  <div className="resume-content">
                    <div className="resume-title">현대오토에버 모빌리티 스쿨</div>
                    <div className="resume-subtitle">클라우드 과정</div>
                  </div>
                  <div className="resume-period">2024.08 - 2025.02</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
