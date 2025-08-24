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
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
