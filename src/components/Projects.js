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
      id: 'autoalarm',
      title: 'CoinAlarm',
      subtitle: '오토에버 모빌리티 SW스쿨',
      description: '가상화폐 자동 알림 서비스',
      color: '#2563eb'
    },
    {
      id: 'ttoon',
      title: 'TTOON',
      subtitle: '졸업프로젝트',
      description: 'AI가 만들어주는 일기를 네컷 만화로 바꿔주는 웹서비스',
      technologies: ['AWS EC2', 'S3', 'REST API', 'React'],
      color: '#2563eb'
    },
    {
      id: 'dongne',
      title: '동네형',
      subtitle: 'UMC(전국 대학 연합 개발동아리)',
      description: '트레이너와 회원 간 PT 매칭 웹 서비스',
      technologies: ['REST API', 'React'],
      color: '#2563eb'
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
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-header">
                <div className="project-icon" style={{ backgroundColor: project.color }}>
                  {project.title.charAt(0)}
                </div>
                <div className="project-title-section">
                  <h3>{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              {project.technologies && (
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="project-footer">
                <span className="view-details">자세히 보기 →</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
