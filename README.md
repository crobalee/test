# 🌟 유명인 소개 앱 (Celebrity Introduction App)

한국의 유명인들을 검색하고 상세한 정보를 제공하는 웹 애플리케이션입니다.

## ✨ 주요 기능

- **🔍 실시간 검색**: 유명인 이름으로 빠른 검색
- **📱 반응형 디자인**: 모바일과 데스크톱 모두 지원
- **🎯 자동완성**: 검색어 입력 시 제안사항 표시
- **📊 상세 정보**: 기본 정보, 주요 성과, 명언 등 제공
- **⭐ 인기 유명인**: 자주 검색되는 유명인 목록
- **💾 검색 히스토리**: 로컬 스토리지에 검색 기록 저장

## 🎭 포함된 유명인

- **김연아** - 피겨스케이팅 선수
- **손흥민** - 축구선수
- **BTS** - K-POP 그룹
- **봉준호** - 영화감독
- **김치** - 한국 전통 발효식품

## 🚀 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: CSS Grid, Flexbox, CSS Animations
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Noto Sans KR)
- **Deployment**: Vercel

## 📁 프로젝트 구조

```
celebrity-app/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 기능
├── package.json        # 프로젝트 설정
├── vercel.json         # Vercel 배포 설정
└── README.md           # 프로젝트 설명서
```

## 🛠️ 로컬 개발

1. 프로젝트 클론
```bash
git clone <your-repository-url>
cd celebrity-app
```

2. 로컬 서버 실행
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .

# 또는 간단히 index.html 파일을 브라우저에서 열기
```

3. 브라우저에서 `http://localhost:8000` 접속

## 🚀 Vercel 배포

### 1. GitHub에 코드 푸시

```bash
git init
git add .
git commit -m "Initial commit: Celebrity Introduction App"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Vercel 연결

1. [Vercel](https://vercel.com)에 로그인
2. "New Project" 클릭
3. GitHub 저장소 선택
4. 프로젝트 설정 확인 후 "Deploy" 클릭

### 3. 환경 변수 설정 (필요시)

Vercel 대시보드에서 환경 변수를 설정할 수 있습니다.

## 🎨 커스터마이징

### 새로운 유명인 추가

`script.js` 파일의 `celebrityDatabase` 객체에 새로운 유명인 정보를 추가하세요:

```javascript
'새로운유명인': {
    name: '새로운유명인',
    title: '직업',
    image: '이미지URL',
    tags: ['태그1', '태그2'],
    basicInfo: {
        '정보1': '값1',
        '정보2': '값2'
    },
    achievements: [
        {
            title: '성과 제목',
            description: '성과 설명'
        }
    ],
    quotes: [
        '명언1',
        '명언2'
    ]
}
```

### 스타일 수정

`styles.css` 파일에서 색상, 폰트, 레이아웃 등을 수정할 수 있습니다.

## 📱 반응형 디자인

- **Desktop**: 1200px 이상
- **Tablet**: 768px - 1199px
- **Mobile**: 767px 이하

## 🌐 브라우저 지원

- Chrome (최신 버전)
- Firefox (최신 버전)
- Safari (최신 버전)
- Edge (최신 버전)

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 질문이나 제안사항이 있으시면 이슈를 생성해 주세요.

---

**Made with ❤️ for Korean Culture Promotion**
