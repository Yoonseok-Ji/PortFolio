import React from 'react';

function SimpleApp() {
  return (
    <div style={{ 
      padding: '2rem', 
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ color: '#3b82f6', marginBottom: '1rem' }}>
        지윤석 포트폴리오
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
        신입 클라우드 엔지니어
      </p>
      <div style={{ 
        background: '#f8fafc', 
        padding: '2rem', 
        borderRadius: '12px',
        maxWidth: '600px'
      }}>
        <h2>연락처</h2>
        <p>📧 yoonseok0107@naver.com</p>
        <p>📱 010-2376-4140</p>
        <p>📍 경기도 안양시</p>
      </div>
    </div>
  );
}

export default SimpleApp;
