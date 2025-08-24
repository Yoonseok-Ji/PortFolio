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
    intermediate: [
      { name: 'React', category: 'Frontend' },
      { name: 'JavaScript', category: 'Frontend' },
      { name: 'AWS', category: 'DevOps' },
      { name: 'Docker', category: 'DevOps' }
    ],
    beginner: [
      { name: 'K8s', category: 'DevOps' },
      { name: 'Jenkins', category: 'DevOps' },
      { name: 'Jira', category: 'DevOps' },
      { name: 'Prometheus', category: 'DevOps' },
      { name: 'Grafana', category: 'DevOps' }
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
          <div className="skills-level">
            <div className="level-header">
              <h3>중급</h3>
              <span className="level-indicator intermediate"></span>
            </div>
            <div className="skills-grid">
              {skillsData.intermediate.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-category">{skill.category}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-level">
            <div className="level-header">
              <h3>초급</h3>
              <span className="level-indicator beginner"></span>
            </div>
            <div className="skills-grid">
              {skillsData.beginner.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-category">{skill.category}</span>
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
