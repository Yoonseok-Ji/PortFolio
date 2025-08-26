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
        '<strong>EC2, S3, RDS, VPC, CloudWatch</strong> 등 주요 서비스를 활용해 인프라를 직접 구성',
        '<strong>퍼블릭 서브넷과 프라이빗 서브넷</strong>을 구분한 보안 설계 및 <strong>EC2 기반 웹 서버</strong> 구축 경험',
        '<strong>CloudWatch</strong>를 활용한 시스템 모니터링 및 로그 수집 설정'
      ]
    },
    {
      icon: '🐳',
      title: 'Docker',
      description: [
        '애플리케이션을 <strong>Docker로 컨테이너화</strong>하고, <strong>docker-compose</strong>를 사용해 멀티 컨테이너 환경 구축',
        '<strong>docker swarm</strong>을 이용해 간단한 클러스터 환경 구성 경험',
        '<strong>.yaml 파일</strong>을 직접 작성하고 해석 가능'
      ]
    },
    {
      icon: '☸️',
      title: 'Kubernetes',
      description: [
        '<strong>Deployment, Service, ConfigMap, Ingress</strong> 등의 리소스를 <strong>YAML</strong>로 작성하고 적용',
        '<strong>노드 상태 확인, 롤링 업데이트, 수동 배포</strong> 등 운영 명령어에 익숙'
      ]
    },
    {
      icon: '📊',
      title: 'Prometheus / Grafana',
      description: [
        '<strong>Prometheus Exporter</strong>를 활용해 Kubernetes, Node, Docker 컨테이너 등에서 <strong>메트릭 데이터 수집</strong>',
        '<strong>prometheus.yml 설정</strong>을 수정하여 다양한 타겟을 수집 대상으로 추가',
        '<strong>Grafana</strong>에서 Prometheus와 연동하여 <strong>대시보드 구성</strong>',
        '<strong>CPU 사용률, 메모리, 네트워크</strong> 등 주요 지표 시각화'
      ]
    },
    {
      icon: '🗂️',
      title: 'Git / GitHub',
      description: [
        '<strong>Git</strong>을 사용하여 프로젝트 관리',
        '<strong>GitLab/GitHub</strong>를 활용한 협업에 익숙'
      ]
    },
    {
      icon: '🐧',
      title: 'Linux',
      description: [
        '기본 <strong>쉘 문법</strong> 이해',
        '실무에서 자주 사용하는 <strong>명령어</strong> 활용'
      ]
    },
    {
      icon: '🚀',
      title: 'CI/CD',
      description: [
        '<strong>GitHub Actions와 Jenkins</strong>를 사용해 테스트, 빌드, 배포가 자동으로 이뤄지도록 <strong>워크플로우 구성</strong>'
      ]
    },
    {
      icon: '🌐',
      title: 'HAProxy',
      description: [
        '<strong>HAProxy와 Keepalived</strong>를 이용한 <strong>이중화 구성</strong> 경험',
        '<strong>로드밸런서 구성</strong>을 통해 <strong>고가용성(HA) 환경</strong> 구축 실습',
        '<strong>haproxy.cfg 설정 파일</strong>을 직접 수정하여 <strong>round-robin 로드밸런싱</strong> 알고리즘 적용'
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-content">
          {skillsData.map((skill, index) => (
            <div key={skill.title} className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">{skill.icon}</span>
                <h3 className="skill-title">{skill.title}</h3>
              </div>
              <ul className="skill-description">
                {skill.description.map((desc, descIndex) => (
                  <li key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
