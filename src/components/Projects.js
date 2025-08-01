import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const navigate = useNavigate();

  const projects = [
    {
      id: 'dongne',
      title: '동네형',
      description: '트레이너와 회원 간 PT 매칭 웹 서비스',
      technologies: ['React', 'Node.js', 'MySQL', 'AWS'],
      color: '#3b82f6'
    },
    {
      id: 'ttoon',
      title: 'TTOON',
      description: 'AI가 만들어주는 일기를 네컷 만화로 바꿔주는 웹서비스',
      technologies: ['React', 'Python', 'FastAPI', 'OpenAI API'],
      color: '#10b981'
    },
    {
      id: 'autoalarm',
      title: 'AutoAlarm',
      description: '가상화폐 자동 알림 서비스',
      technologies: ['Python', 'Docker', 'Kubernetes', 'Jenkins'],
      color: '#f59e0b'
    }
  ];

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="projects">
      <motion.div
        ref={ref}
        className="projects-container"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Projects</h2>

        <motion.div 
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-header" style={{ borderTopColor: project.color }}>
                <div className="project-icon" style={{ backgroundColor: project.color }}>
                  {project.title.charAt(0)}
                </div>
                <h3>{project.title}</h3>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag" style={{ backgroundColor: project.color }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <span className="view-details">자세히 보기 →</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="blog-section"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>더 자세한 개발 과정이 궁금하다면?</p>
          <a
            href="https://velog.io/@dbstjrgudsla/posts"
            className="blog-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            블로그 방문하기
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
