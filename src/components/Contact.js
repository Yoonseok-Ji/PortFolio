import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'yoonseok0107@naver.com',
      link: 'mailto:yoonseok0107@naver.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '010-2376-4140',
      link: 'tel:01023764140'
    },
    {
      icon: '📍',
      title: 'Location',
      value: '경기도 안양시',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/dbstjrgudsla',
      icon: '💻'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/%EC%9C%A4%EC%84%9D-%EC%A7%80-902024300/',
      icon: '💼'
    },
    {
      name: 'Velog',
      url: 'https://velog.io/@dbstjrgudsla/posts',
      icon: '📝'
    }
  ];

  return (
    <section id="contact" className="contact">
      <motion.div
        ref={ref}
        className="contact-container"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Contact</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>연락처 정보</h3>
            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="social-links">
            <h3>소셜 링크</h3>
            <div className="social-items">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="social-icon">{social.icon}</div>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
