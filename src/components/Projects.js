import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce 플랫폼',
      description: 'React와 Node.js를 사용한 풀스택 쇼핑몰 웹사이트',
      category: 'Web App',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '/api/placeholder/400/250',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: '날씨 앱',
      description: '실시간 날씨 정보를 제공하는 반응형 웹 애플리케이션',
      category: 'Web App',
      technologies: ['React', 'API Integration', 'CSS3'],
      image: '/api/placeholder/400/250',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: '포트폴리오 웹사이트',
      description: '개인 포트폴리오를 위한 반응형 웹사이트',
      category: 'Website',
      technologies: ['React', 'Framer Motion', 'CSS3'],
      image: '/api/placeholder/400/250',
      demoUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: '태스크 매니저',
      description: '팀 협업을 위한 프로젝트 관리 도구',
      category: 'Web App',
      technologies: ['React', 'Firebase', 'Material-UI'],
      image: '/api/placeholder/400/250',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: '블로그 플랫폼',
      description: 'CMS 기능이 포함된 개인 블로그 시스템',
      category: 'Website',
      technologies: ['Next.js', 'Strapi', 'PostgreSQL'],
      image: '/api/placeholder/400/250',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: '모바일 앱 UI',
      description: '모바일 앱을 위한 UI/UX 디자인 및 프로토타입',
      category: 'Design',
      technologies: ['Figma', 'React Native', 'UI/UX'],
      image: '/api/placeholder/400/250',
      demoUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const categories = ['All', 'Web App', 'Website', 'Design'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
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
            각 프로젝트는 <span className="blue-accent">사용자 경험</span>과 
            <span className="blue-accent"> 기술적 완성도</span>를 모두 고려하여 개발되었습니다.
          </p>
        </motion.div>

        <motion.div className="project-filters" variants={itemVariants}>
          {categories.map(category => (
            <motion.button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card card ${project.featured ? 'featured' : ''}`}
                variants={itemVariants}
                layout
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <span>Featured</span>
                  </div>
                )}
                
                <div className="project-image">
                  <div className="image-placeholder">
                    <span>프로젝트 이미지</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.demoUrl}
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span>데모</span>
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span>코드</span>
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <div className="project-category">
                    <span className="blue-accent">{project.category}</span>
                  </div>
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
        </AnimatePresence>

        <motion.div className="projects-cta" variants={itemVariants}>
          <p>더 많은 프로젝트가 궁금하신가요?</p>
          <motion.a
            href="#contact"
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            연락하기
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
