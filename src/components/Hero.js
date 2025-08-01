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
            지윤석입니다
          </motion.h1>
          
          <motion.div
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            신입 클라우드 엔지니어
          </motion.div>

          <motion.div 
            className="hero-resume"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="resume-item">
              <div className="resume-category">학력</div>
              <div className="resume-detail">
                <span className="resume-title">홍익대학교 컴퓨터공학과</span>
                <span className="resume-period">2019.03 - 2025.02</span>
              </div>
            </div>
            
            <div className="resume-item">
              <div className="resume-category">활동</div>
              <div className="resume-details">
                <div className="resume-detail">
                  <span className="resume-title">UMC 프론트엔드 팀장</span>
                  <span className="resume-period">2023.09 - 2024.02</span>
                </div>
                <div className="resume-detail">
                  <span className="resume-title">현대오토에버 모빌리티 스쿨 클라우드 과정</span>
                  <span className="resume-period">2024.08 - 2025.02</span>
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
