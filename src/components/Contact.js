import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 실제 폼 제출 로직을 여기에 구현
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 1000);
  };

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

  const contactInfo = [
    {
      icon: '📧',
      title: '이메일',
      value: 'yoonseok0107@naver.com',
      link: 'mailto:yoonseok0107@naver.com'
    },
    {
      icon: '📱',
      title: '전화번호',
      value: '010-2376-4140',
      link: 'tel:01023764140'
    },
    {
      icon: '📍',
      title: '위치',
      value: '경기도 안양시',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'LinkedIn 프로필',
      link: 'https://www.linkedin.com/in/%EC%9C%A4%EC%84%9D-%EC%A7%80-902024300/'
    }
  ];

  return (
    <section id="contact" className="section contact">
      <motion.div
        ref={ref}
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="section-title" variants={itemVariants}>
          연락하기
        </motion.h2>

        <motion.div className="contact-intro" variants={itemVariants}>
          <p>
            새로운 프로젝트나 협업 기회에 대해 이야기하고 싶으시다면 언제든 연락주세요. 
            <span className="blue-accent"> 24시간 내</span>에 답변드리겠습니다.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div className="contact-info" variants={itemVariants}>
            <h3>연락 정보</h3>
            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="contact-item card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    <p>{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="social-links"
              variants={itemVariants}
            >
              <h4>소셜 미디어 & 블로그</h4>
              <div className="social-icons">
                <motion.a
                  href="https://github.com/dbstjrgudsla"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/%EC%9C%A4%EC%84%9D-%EC%A7%80-902024300/"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href="https://velog.io/@dbstjrgudsla/posts"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Velog
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="contact-form-container" variants={itemVariants}>
            <div className="card">
              <h3>메시지 보내기</h3>
              
              {submitStatus === 'success' && (
                <motion.div
                  className="success-message"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.
                </motion.div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">이름 *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="홍길동"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">이메일 *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">제목 *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="프로젝트 문의"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">메시지 *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="프로젝트에 대한 자세한 내용을 알려주세요..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className={`btn submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  {isSubmitting ? '전송 중...' : '메시지 보내기'}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
