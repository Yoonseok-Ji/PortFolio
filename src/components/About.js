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
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>안녕하세요, 지윤석입니다.</h3>
            <p>
              프론트엔드 개발자로 시작해 클라우드와 DevOps에 매력을 느껴 성장 중인 개발자입니다.
            </p>
            <p>
              새로운 기술을 배우고 적용하는 것을 즐기며, 더 나은 품질과 효율을 위해 끊임없이 고민합니다.
            </p>
            <p>
              주변 분위기를 좋게 만들고, 팀이 진짜 원하는 게 무엇인지 파악해 함께 만들어가는 걸 좋아합니다.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
