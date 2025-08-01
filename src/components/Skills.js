import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 80, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    { name: 'Node.js', level: 75, category: 'Backend' },
    { name: 'Express', level: 70, category: 'Backend' },
    { name: 'MongoDB', level: 65, category: 'Database' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'AWS', level: 60, category: 'Cloud' },
    { name: 'Docker', level: 55, category: 'DevOps' }
  ];

  const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'Cloud', 'DevOps'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  };

  return (
    <section id="skills" className="section skills">
      <motion.div
        ref={ref}
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          기술 스택
        </motion.h2>

        <div className="skills-content">
          <motion.div className="skills-intro" variants={itemVariants}>
            <div className="card">
              <h3>전문 기술</h3>
              <p>
                다양한 기술 스택을 활용하여 <span className="blue-accent">풀스택 개발</span>을 수행합니다. 
                프론트엔드부터 백엔드, 데이터베이스, 클라우드까지 
                전체적인 웹 애플리케이션 개발 프로세스를 이해하고 있습니다.
              </p>
            </div>
          </motion.div>

          <div className="skills-grid">
            {categories.map((category, categoryIndex) => (
              <motion.div
                key={category}
                className="skill-category card"
                variants={itemVariants}
                custom={categoryIndex}
              >
                <h4 className="category-title">
                  <span className="blue-accent">{category}</span>
                </h4>
                <div className="category-skills">
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="skill-item"
                        variants={itemVariants}
                        custom={skillIndex}
                      >
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div
                            className="skill-progress"
                            variants={progressVariants}
                            custom={skill.level}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                          />
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="skills-additional" variants={itemVariants}>
            <h3>추가 역량</h3>
            <div className="additional-skills">
              <motion.div
                className="additional-skill card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="skill-icon">🎨</div>
                <h4>UI/UX 디자인</h4>
                <p>사용자 친화적인 인터페이스 설계</p>
              </motion.div>

              <motion.div
                className="additional-skill card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="skill-icon">📱</div>
                <h4>반응형 웹</h4>
                <p>모든 디바이스에 최적화된 웹사이트</p>
              </motion.div>

              <motion.div
                className="additional-skill card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="skill-icon">⚡</div>
                <h4>성능 최적화</h4>
                <p>빠르고 효율적인 웹 애플리케이션</p>
              </motion.div>

              <motion.div
                className="additional-skill card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="skill-icon">🔧</div>
                <h4>문제 해결</h4>
                <p>복잡한 기술적 문제 분석 및 해결</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
