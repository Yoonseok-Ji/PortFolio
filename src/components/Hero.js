import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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
                👋 안녕하세요, 클라우드 엔지니어 <span className="name-highlight">지윤석</span>입니다.
              </div>
              
              <div className="hero-description">
                <p>새로운 것을 배우는 데 두려움이 없고,<br />
                빠르게 변화하는 기술 환경 속에서 성장하는 것을 즐깁니다.<br />
                사람들과 함께 소통하고 협업하며, 긍정적인 에너지를 나누는 것을 좋아합니다.🌱</p>
                
                <p>☁️ 인프라와 클라우드를 중심으로 꾸준히 실습하며 성장 중입니다.<br />
                Docker, Kubernetes, AWS를 중심으로 다양한 실습을 진행하고,<br />
                직접 문제를 해결하며 몸에 익히는 과정을 즐깁니다.<br />
                이 과정에서 경험한 것들을 블로그에 기록하며 공유하고 있습니다.</p>
                
                <p>🔍 문제를 깊이 파고들고, 더 나은 구조를 고민합니다.<br />
                단순히 되는 것보다 '왜 되는지'를 이해하고,<br />
                지속 가능하고 안정적인 인프라를 만드는 것을 목표로 하고 있습니다.</p>
              </div>
            </div>
          </motion.div>

          {/* About Me 섹션 통합 */}
          <motion.div
            ref={ref}
            className="about-section"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="characteristics">
              <div className="char-grid">
                <div className="char-item">
                  <div className="char-icon">🚀</div>
                  <div className="char-text">
                    <h4>바로 행동하는 실행형</h4>
                    <p>계획보다 실행을 우선시하며, 작은 것부터 직접 해보는 것을 선호합니다. 시행착오를 통한 학습을 중요하게 생각합니다.</p>
                  </div>
                </div>
                <div className="char-item">
                  <div className="char-icon">🔄</div>
                  <div className="char-text">
                    <h4>변화에 유연한 적응력</h4>
                    <p>새로운 환경과 예상치 못한 상황에 빠르게 적응하며, 기존 방식에 얽매이지 않고 더 나은 방법을 모색합니다.</p>
                  </div>
                </div>
                <div className="char-item">
                  <div className="char-icon">😊</div>
                  <div className="char-text">
                    <h4>문제 속에서도 웃는 긍정 마인드</h4>
                    <p>어려운 상황에서도 해결책을 찾는 데 집중하며, 긍정적인 태도로 팀 분위기를 밝게 만들어갑니다.</p>
                  </div>
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
                    <h4>💼 활동</h4>
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
