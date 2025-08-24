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
    frontend: ['React', 'JavaScript'],
    devops: ['AWS', 'Docker', 'K8s', 'Jenkins', 'Jira', 'Prometheus', 'Grafana']
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
            <h3>FRONTEND</h3>
            <div className="skills-list">
              {skillsData.frontend.map((skill, index) => (
                <span key={skill} className="skill-item">
                  {skill}
                  {index < skillsData.frontend.length - 1 && <span className="separator">•</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>DEVOPS</h3>
            <div className="skills-list">
              {skillsData.devops.map((skill, index) => (
                <span key={skill} className="skill-item">
                  {skill}
                  {index < skillsData.devops.length - 1 && <span className="separator">•</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
