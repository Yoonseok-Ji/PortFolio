# 개발자 포트폴리오

React 기반의 반응형 포트폴리오 웹사이트입니다. 파란색 포인트 컬러와 부드러운 애니메이션이 특징입니다.

## 🚀 주요 기능

- **반응형 디자인**: 모든 디바이스에서 최적화된 사용자 경험
- **부드러운 애니메이션**: Framer Motion을 활용한 인터랙티브 애니메이션
- **파란색 포인트**: 브랜드 컬러를 활용한 일관된 디자인
- **섹션별 구성**: Hero, About, Skills, Projects, Contact 섹션
- **스크롤 애니메이션**: 스크롤에 따른 요소별 애니메이션
- **프로젝트 필터링**: 카테고리별 프로젝트 필터 기능

## 🛠️ 기술 스택

- **Frontend**: React 18
- **애니메이션**: Framer Motion
- **스타일링**: CSS3 (Grid, Flexbox)
- **빌드 도구**: Create React App
- **기타**: React Intersection Observer

## 📦 설치 및 실행

1. 의존성 설치:
```bash
cd portfolio
npm install
```

2. 개발 서버 실행:
```bash
npm start
```

3. 빌드:
```bash
npm run build
```

## 📁 프로젝트 구조

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js & Header.css
│   │   ├── Hero.js & Hero.css
│   │   ├── About.js & About.css
│   │   ├── Skills.js & Skills.css
│   │   ├── Projects.js & Projects.css
│   │   └── Contact.js & Contact.css
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## 🎨 디자인 특징

- **컬러 팔레트**: 
  - 주요 색상: #3498db (파란색)
  - 보조 색상: #2980b9 (진한 파란색)
  - 텍스트: #2c3e50 (다크 그레이)
  - 배경: #f8f9fa (라이트 그레이)

- **타이포그래피**: Inter 폰트 사용
- **애니메이션**: 부드러운 페이드인, 슬라이드, 호버 효과

## 📱 반응형 브레이크포인트

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: ~479px

## 🔧 커스터마이징

1. **개인 정보 수정**: 각 컴포넌트의 텍스트 내용을 수정하세요
2. **프로젝트 추가**: `Projects.js`의 projects 배열에 새 프로젝트를 추가하세요
3. **스킬 수정**: `Skills.js`의 skills 배열을 수정하세요
4. **연락처 정보**: `Contact.js`의 contactInfo 배열을 수정하세요
5. **색상 변경**: CSS 파일의 색상 값을 수정하세요

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 자유롭게 사용하실 수 있습니다.

## 🤝 기여

버그 리포트나 기능 제안은 언제든 환영합니다!
