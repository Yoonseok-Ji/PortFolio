import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section about">
      <motion.div
        ref={ref}
        className="about-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div className="about-text" variants={itemVariants}>
            <div className="card">
              <h3>안녕하세요, 지윤석입니다. 👋</h3>
              <p>
                프론트엔드 개발자로 시작해 클라우드와 DevOps에 매력을 느껴 성장 중인 개발자입니다.
              </p>
              <p>
                새로운 기술을 배우고 적용하는 것을 즐기며, 더 나은 품질과 효율을 위해 끊임없이 고민합니다.
              </p>
              <p>
                주변 분위기를 좋게 만들고, 팀이 진짜 원하는 게 무엇인지 파악해 함께 만들어가는 걸 좋아합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
