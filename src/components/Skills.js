import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillsData = useMemo(() => ({
    topSkills: [
      { name: 'React', icon: '⚛️', category: 'Frontend' },
      { name: 'JavaScript', icon: '🟨', category: 'Frontend' }
    ],
    bottomSkills: [
      { name: 'Docker', icon: '🐳', category: 'DevOps' },
      { name: 'Kubernetes', icon: '☸️', category: 'DevOps' },
      { name: 'Jenkins', icon: '🔧', category: 'DevOps' },
      { name: 'AWS', icon: '☁️', category: 'Cloud' },
      { name: 'MySQL', icon: '🗄️', category: 'Database' }
    ]
  }), []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }), []);

  const SkillItem = React.memo(({ skill, variants }) => (
    <motion.div
      className="skill-item"
      variants={variants}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-info">
        <div className="skill-name">{skill.name}</div>
        <div className="skill-category">{skill.category}</div>
      </div>
    </motion.div>
  ));

  return (
    <section id="skills" className="skills">
      <motion.div
        ref={ref}
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          Skills
        </motion.h2>

        <div className="skills-content">
          <motion.div className="skills-row top-row" variants={itemVariants}>
            {skillsData.topSkills.map((skill) => (
              <SkillItem key={skill.name} skill={skill} variants={itemVariants} />
            ))}
          </motion.div>

          <motion.div className="skills-row bottom-row" variants={itemVariants}>
            {skillsData.bottomSkills.map((skill) => (
              <SkillItem key={skill.name} skill={skill} variants={itemVariants} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(Skills);
