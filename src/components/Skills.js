import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillsData = {
    frontend: [
      { name: 'React', icon: '⚛️' },
      { name: 'JavaScript', icon: '🟨' },
      { name: 'HTML/CSS', icon: '🌐' }
    ],
    backend: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'MySQL', icon: '🗄️' },
      { name: 'REST API', icon: '🔗' }
    ],
    devops: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
      { name: 'Jenkins', icon: '🔧' }
    ]
  };

  return (
    <section id="skills" className="skills">
      <motion.div
        ref={ref}
        className="skills-container"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Skills</h2>

        <div className="skills-content">
          <div className="skills-category">
            <h3>Frontend</h3>
            <div className="skills-grid">
              {skillsData.frontend.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Backend</h3>
            <div className="skills-grid">
              {skillsData.backend.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>DevOps & Cloud</h3>
            <div className="skills-grid">
              {skillsData.devops.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
