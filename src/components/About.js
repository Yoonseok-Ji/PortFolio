import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="about">
      <motion.div
        ref={ref}
        className="about-container"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>안녕하세요, 지윤석입니다.</h3>
            <div className="about-description">
              <p>
                프론트엔드 개발자로 시작해 클라우드와 DevOps에 매력을 느껴 성장 중인 개발자입니다. 
                새로운 기술을 배우고 적용하는 것을 즐기며, 더 나은 품질과 효율을 위해 끊임없이 고민합니다. 
                주변 분위기를 좋게 만들고, 팀이 진짜 원하는 게 무엇인지 파악해 함께 만들어가는 걸 좋아합니다.
              </p>
            </div>
            
            <div className="characteristics">
              <div className="char-grid">
                <div className="char-item">
                  <div className="char-icon">💻</div>
                  <div className="char-text">
                    <h4>지속적인 학습</h4>
                    <p>새로운 기술과 트렌드를 빠르게 습득하고 프로젝트에 적용합니다.</p>
                  </div>
                </div>
                <div className="char-item">
                  <div className="char-icon">🚀</div>
                  <div className="char-text">
                    <h4>문제 해결 능력</h4>
                    <p>복잡한 기술적 문제를 체계적으로 분석하고 효율적인 솔루션을 찾습니다.</p>
                  </div>
                </div>
                <div className="char-item">
                  <div className="char-icon">🤝</div>
                  <div className="char-text">
                    <h4>팀워크와 소통</h4>
                    <p>팀원들과의 원활한 소통을 통해 프로젝트 목표를 달성합니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
