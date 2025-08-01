import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: '동네형',
      description: '트레이너와 회원 간 PT 매칭 웹 서비스',
      technologies: ['React', 'Node.js', 'MySQL', 'AWS'],
      image: '/api/placeholder/400/250',
      demoUrl: '#',
      githubUrl: '#',
      blogUrl: 'https://velog.io/@dbstjrgudsla/posts'
    },
    {
      id: 2,
      title: 'TTOON',
      description: 'AI가 만들어주는 일기를 네컷 만화로 바꿔주는 웹서비스',
      technologies: ['React', 'Python', 'FastAPI', 'OpenAI API'],
      image: '/api/placeholder/400/250',
      demoUrl: '#',
      githubUrl: '#',
      blogUrl: 'https://velog.io/@dbstjrgudsla/posts'
    },
    {
      id: 3,
      title: 'AutoAlarm',
      description: '가상화폐 자동 알림 서비스',
      technologies: ['Python', 'Docker', 'Kubernetes', 'Jenkins'],
      image: '/api/placeholder/400/250',
      demoUrl: '#',
      githubUrl: '#',
      blogUrl: 'https://velog.io/@dbstjrgudsla/posts'
    }
  ];

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

  const handleProjectClick = (project) => {
    // 프로젝트 상세 페이지로 리다이렉트 (추후 구현)
    console.log('프로젝트 클릭:', project.title);
  };

  return (
    <section id="projects" className="section projects">
      <motion.div
        ref={ref}
        className="projects-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          프로젝트
        </motion.h2>

        <motion.div className="projects-intro" variants={itemVariants}>
          <p>
            다양한 기술을 활용하여 완성한 프로젝트들입니다. 
            각 프로젝트를 클릭하면 상세 정보를 확인할 수 있습니다.
          </p>
        </motion.div>

        <motion.div className="projects-grid" variants={containerVariants}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span>{project.title}</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <motion.a
                      href={project.demoUrl}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>데모</span>
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>코드</span>
                    </motion.a>
                    <motion.a
                      href={project.blogUrl}
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>블로그</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="blog-section" variants={itemVariants}>
          <h3>더 자세한 내용이 궁금하다면?</h3>
          <motion.a
            href="https://velog.io/@dbstjrgudsla/posts"
            className="blog-link btn"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            블로그 방문하기
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
