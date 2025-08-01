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
              <h3>안녕하세요! 👋</h3>
              <p>
                저는 사용자 중심의 웹 애플리케이션을 개발하는 것을 좋아하는 개발자입니다. 
                새로운 기술을 배우고 적용하는 것에 열정을 가지고 있으며, 
                항상 더 나은 사용자 경험을 제공하기 위해 노력합니다.
              </p>
              <p>
                <span className="blue-accent">React</span>, <span className="blue-accent">JavaScript</span>, 
                <span className="blue-accent"> Node.js</span> 등의 기술을 주로 사용하며, 
                깔끔하고 유지보수가 쉬운 코드를 작성하는 것을 중요하게 생각합니다.
              </p>
              <p>
                팀워크를 중시하며, 동료들과의 협업을 통해 더 나은 결과물을 만들어내는 것을 즐깁니다.
              </p>
            </div>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            <div className="stats-grid">
              <motion.div
                className="stat-item card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number blue-accent">3+</div>
                <div className="stat-label">년 경험</div>
              </motion.div>

              <motion.div
                className="stat-item card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number blue-accent">15+</div>
                <div className="stat-label">완료 프로젝트</div>
              </motion.div>

              <motion.div
                className="stat-item card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number blue-accent">10+</div>
                <div className="stat-label">사용 기술</div>
              </motion.div>

              <motion.div
                className="stat-item card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="stat-number blue-accent">100%</div>
                <div className="stat-label">열정</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div className="about-values" variants={itemVariants}>
          <h3>핵심 가치</h3>
          <div className="values-grid">
            <motion.div
              className="value-item card"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="value-icon">🎯</div>
              <h4>사용자 중심</h4>
              <p>사용자의 니즈를 파악하고 최적의 경험을 제공합니다.</p>
            </motion.div>

            <motion.div
              className="value-item card"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="value-icon">💡</div>
              <h4>혁신적 사고</h4>
              <p>창의적인 아이디어로 문제를 해결합니다.</p>
            </motion.div>

            <motion.div
              className="value-item card"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="value-icon">🚀</div>
              <h4>지속적 성장</h4>
              <p>새로운 기술을 학습하고 발전시킵니다.</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
