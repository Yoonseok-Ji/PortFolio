import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skillsData = [
    {
      icon: '☁️',
      title: 'AWS',
      description: [
        'EC2, S3, RDS, VPC, CloudWatch 등 주요 서비스를 활용해 인프라를 직접 구성할 수 있으며, 퍼블릭 서브넷과 프라이빗 서브넷을 구분한 보안 설계 및 EC2 기반 웹 서버 구축 경험이 있습니다.',
        'CloudWatch를 활용한 시스템 모니터링 및 로그 수집 설정이 가능합니다.'
      ]
    },
    {
      icon: '🐳',
      title: 'Docker',
      description: [
        '애플리케이션을 Docker로 컨테이너화하고, docker-compose를 사용해 멀티 컨테이너 환경을 구축할 수 있습니다.',
        'docker swarm을 이용해 간단한 클러스터 환경을 구성해본 경험이 있으며, .yaml 파일을 직접 작성하고 해석할 수 있습니다.'
      ]
    },
    {
      icon: '☸️',
      title: 'Kubernetes',
      description: [
        'Deployment, Service, ConfigMap, Ingress 등의 리소스를 YAML로 작성하고 적용할 수 있습니다.',
        '또한, 노드 상태 확인, 롤링 업데이트, 수동 배포 등 운영 명령어에도 익숙합니다.'
      ]
    },
    {
      icon: '📊',
      title: 'Prometheus / Grafana',
      description: [
        'Prometheus Exporter를 활용해 Kubernetes, Node, Docker 컨테이너 등에서 메트릭 데이터를 수집하고, prometheus.yml 설정을 수정하여 다양한 타겟을 수집 대상으로 추가한 경험이 있습니다.',
        'Grafana에서는 Prometheus와 연동하여 대시보드를 구성하고, CPU 사용률, 메모리, 네트워크 등 주요 지표를 시각화할 수 있습니다.'
      ]
    },
    {
      icon: '🗂️',
      title: 'Git / GitHub',
      description: [
        'Git을 사용하여 프로젝트를 관리할 수 있으며, GitLab/GitHub를 활용한 협업에 익숙합니다.'
      ]
    },
    {
      icon: '🐧',
      title: 'Linux',
      description: [
        '기본 쉘 문법을 이해하고 있으며 실무에서 자주 사용하는 명령어를 활용할 수 있습니다.'
      ]
    },
    {
      icon: '🚀',
      title: 'CI/CD',
      description: [
        'GitHub Actions와 Jenkins를 사용해 테스트, 빌드, 배포가 자동으로 이뤄지도록 워크플로우를 구성할 수 있습니다.'
      ]
    },
    {
      icon: '🌐',
      title: 'HAProxy',
      description: [
        'HAProxy와 Keepalived를 이용한 이중화 구성 경험이 있으며, 실제로 로드밸런서 구성을 통해 고가용성(HA) 환경을 구축한 실습 경험이 있습니다.',
        'haproxy.cfg 설정 파일을 직접 수정하여 round-robin 로드밸런싱 알고리즘을 적용해본 경험이 있습니다.'
      ]
    }
  ];

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
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-title">{skill.title}</h3>
              </div>
              <div className="skill-description">
                {skill.description.map((desc, descIndex) => (
                  <p key={descIndex}>{desc}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
