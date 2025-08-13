// 유명인 데이터베이스 (폴백용)
const celebrityDatabase = {
    '김연아': {
        name: '김연아',
        title: '피겨스케이팅 선수',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop&crop=face',
        tags: ['스포츠', '올림픽', '피겨'],
        basicInfo: {
            '출생': '1990년 9월 5일',
            '국적': '대한민국',
            '신장': '164cm',
            '주요종목': '피겨스케이팅'
        },
        achievements: [
            {
                title: '2010 밴쿠버 올림픽',
                description: '피겨스케이팅 여자 싱글 금메달'
            },
            {
                title: '2009 세계선수권대회',
                description: '여자 싱글 금메달'
            },
            {
                title: '2006 토리노 올림픽',
                description: '피겨스케이팅 여자 싱글 동메달'
            }
        ],
        quotes: [
            '꿈을 향해 나아가는 과정에서 실패는 당연한 것입니다.',
            '최선을 다해 노력하면 언젠가는 반드시 좋은 결과가 있을 것입니다.',
            '포기하지 마세요. 포기하는 순간 꿈은 끝납니다.'
        ]
    },
    '손흥민': {
        name: '손흥민',
        title: '축구선수',
        image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face',
        tags: ['스포츠', '축구', '프리미어리그'],
        basicInfo: {
            '출생': '1992년 7월 8일',
            '국적': '대한민국',
            '신장': '183cm',
            '포지션': '공격수',
            '소속팀': '토트넘 홋스퍼'
        },
        achievements: [
            {
                title: '2022 카타르 월드컵',
                description: '16강 진출, 2골 1도움'
            },
            {
                title: '프리미어리그',
                description: '2021-22 시즌 득점왕 (23골)'
            },
            {
                title: '아시아 최고 선수상',
                description: '2019, 2020, 2021, 2022년 수상'
            }
        ],
        quotes: [
            '축구는 팀 스포츠입니다. 개인의 성과보다 팀의 승리가 중요합니다.',
            '꿈을 향해 끊임없이 도전하세요.',
            '실패를 두려워하지 마세요. 실패에서 배우는 것이 가장 중요합니다.'
        ]
    },
    'BTS': {
        name: 'BTS (방탄소년단)',
        title: 'K-POP 그룹',
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=face',
        tags: ['음악', 'K-POP', '글로벌스타'],
        basicInfo: {
            '데뷔': '2013년 6월 13일',
            '소속사': '하이브',
            '멤버수': '7명',
            '장르': 'K-POP, 힙합, R&B'
        },
        achievements: [
            {
                title: '빌보드 200',
                description: '5곡 연속 1위 달성'
            },
            {
                title: '그래미 어워드',
                description: '2022년 베스트 팝 듀오/그룹 퍼포먼스 후보'
            },
            {
                title: 'UN 연설',
                description: '2021년 UN 총회에서 청년을 위한 연설'
            }
        ],
        quotes: [
            'Love yourself, speak yourself.',
            '꿈을 향해 나아가는 모든 사람들에게 화이팅!',
            '우리 함께 더 나은 세상을 만들어가요.'
        ]
    },
    '봉준호': {
        name: '봉준호',
        title: '영화감독',
        image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=400&fit=crop&crop=face',
        tags: ['영화', '감독', '아카데미상'],
        basicInfo: {
            '출생': '1969년 9월 14일',
            '국적': '대한민국',
            '직업': '영화감독, 시나리오 작가',
            '대표작': '기생충, 괴물, 설국열차'
        },
        achievements: [
            {
                title: '아카데미상',
                description: '2020년 기생충으로 최우수작품상 수상'
            },
            {
                title: '칸 영화제',
                description: '2019년 기생충으로 황금종려상 수상'
            },
            {
                title: '영국 아카데미상',
                description: '2020년 기생충으로 최우수작품상 수상'
            }
        ],
        quotes: [
            '영화는 거울과 같습니다. 사회를 비추는 거울이죠.',
            '작은 것에서 시작해서 큰 것을 만들어가는 것이 중요합니다.',
            '한국 영화의 가능성을 세계에 보여주고 싶었습니다.'
        ]
    },
    '김치': {
        name: '김치',
        title: '한국 전통 발효식품',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop',
        tags: ['음식', '한국', '발효식품'],
        basicInfo: {
            '기원': '삼국시대',
            '주재료': '배추, 고추가루, 마늘, 생강',
            '영양성분': '비타민, 미네랄, 유산균',
            '보관기간': '냉장고에서 3-6개월'
        },
        achievements: [
            {
                title: 'UNESCO 등재',
                description: '2013년 인류무형문화유산 등재'
            },
            {
                title: '세계 인지도',
                description: '한국 대표 음식으로 세계적 인지도 확보'
            },
            {
                title: '건강식품',
                description: '프로바이오틱스가 풍부한 건강식품'
            }
        ],
        quotes: [
            '김치는 한국인의 영혼입니다.',
            '세계 어디서든 한국을 대표하는 음식',
            '건강과 맛을 동시에 만족시키는 완벽한 음식'
        ]
    }
};

// OpenAI API 설정
const OPENAI_API_KEY = process.env.VITE_OPENAI_API_KEY || window.VITE_OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

// OpenAI API를 사용한 동적 유명인 정보 생성
async function generateCelebrityInfoWithAI(query) {
    console.log('AI API 호출 시도:', query);
    console.log('API 키 상태:', OPENAI_API_KEY ? '설정됨' : '설정되지 않음');
    
    if (!OPENAI_API_KEY || OPENAI_API_KEY === '{{VITE_OPENAI_API_KEY}}') {
        console.log('OpenAI API 키가 설정되지 않았습니다. 정적 데이터베이스를 사용합니다.');
        return null;
    }

    try {
        const prompt = `
        다음 유명인에 대한 상세한 정보를 JSON 형식으로 제공해주세요:
        이름: ${query}
        
        다음 형식으로 응답해주세요:
        {
            "name": "이름",
            "title": "직업/직함",
            "image": "https://images.unsplash.com/photo-...",
            "tags": ["태그1", "태그2", "태그3"],
            "basicInfo": {
                "출생": "출생 정보",
                "국적": "국적",
                "직업": "직업",
                "대표작": "대표작"
            },
            "achievements": [
                {
                    "title": "성과 제목",
                    "description": "성과 설명"
                }
            ],
            "quotes": [
                "명언1",
                "명언2",
                "명언3"
            ]
        }
        
        한국어로 응답하고, 실제 정보를 바탕으로 정확하게 작성해주세요.
        `;

        const response = await fetch(OPENAI_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: '당신은 한국의 유명인에 대한 정보를 제공하는 전문가입니다. 정확하고 상세한 정보를 제공해주세요.'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                max_tokens: 1000,
                temperature: 0.7
            })
        });

        if (!response.ok) {
            throw new Error(`OpenAI API 오류: ${response.status}`);
        }

        const data = await response.json();
        const content = data.choices[0].message.content;
        
        // JSON 파싱 시도
        try {
            const parsedData = JSON.parse(content);
            return parsedData;
        } catch (parseError) {
            console.error('JSON 파싱 오류:', parseError);
            // 파싱 실패 시 AI 응답을 텍스트로 반환
            return {
                name: query,
                title: 'AI 생성 정보',
                image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=400&fit=crop',
                tags: ['AI 생성'],
                basicInfo: {
                    'AI 응답': content.substring(0, 200) + '...'
                },
                achievements: [],
                quotes: []
            };
        }
    } catch (error) {
        console.error('OpenAI API 오류:', error);
        return null;
    }
}

// 인기 유명인 목록
const popularCelebrities = [
    '김연아', '손흥민', 'BTS', '봉준호', '김치'
];

// DOM 요소들
const celebrityInput = document.getElementById('celebrityInput');
const searchBtn = document.getElementById('searchBtn');
const suggestions = document.getElementById('suggestions');
const resultSection = document.getElementById('resultSection');
const loading = document.getElementById('loading');
const celebrityCard = document.getElementById('celebrityCard');
const errorMessage = document.getElementById('errorMessage');
const popularGrid = document.getElementById('popularGrid');

// 이벤트 리스너 등록
searchBtn.addEventListener('click', searchCelebrity);
celebrityInput.addEventListener('input', showSuggestions);
celebrityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchCelebrity();
    }
});

// 페이지 로드 시 인기 유명인 표시
document.addEventListener('DOMContentLoaded', () => {
    displayPopularCelebrities();
});

// 유명인 검색 함수 (AI 통합)
async function searchCelebrity() {
    const query = celebrityInput.value.trim();
    console.log('검색 시작:', query);
    
    if (!query) {
        console.log('검색어가 비어있습니다.');
        return;
    }

    // 검색 결과 섹션 표시
    resultSection.style.display = 'block';
    loading.style.display = 'block';
    celebrityCard.style.display = 'none';
    errorMessage.style.display = 'none';
    suggestions.style.display = 'none';

    try {
        console.log('AI/정적 데이터베이스에서 검색 중...');
        // AI API 또는 정적 데이터베이스에서 검색
        const celebrity = await findCelebrity(query);
        
        if (celebrity) {
            console.log('검색 결과 찾음:', celebrity.name);
            displayCelebrityInfo(celebrity);
        } else {
            console.log('검색 결과 없음');
            showErrorMessage();
        }
    } catch (error) {
        console.error('검색 오류:', error);
        showErrorMessage();
    } finally {
        loading.style.display = 'none';
    }
}

// 유명인 찾기 함수 (AI 우선, 폴백으로 정적 데이터)
async function findCelebrity(query) {
    // 1. 먼저 AI API로 정보 생성 시도
    const aiResult = await generateCelebrityInfoWithAI(query);
    if (aiResult) {
        return aiResult;
    }
    
    // 2. AI API 실패 시 정적 데이터베이스에서 검색
    // 정확한 이름 매칭
    if (celebrityDatabase[query]) {
        return celebrityDatabase[query];
    }
    
    // 부분 매칭 (한국어)
    for (const name in celebrityDatabase) {
        if (name.includes(query) || query.includes(name)) {
            return celebrityDatabase[name];
        }
    }
    
    // 영어 이름 매칭
    const englishNames = {
        'kim yuna': '김연아',
        'son heung min': '손흥민',
        'bts': 'BTS',
        'bangtan': 'BTS',
        'bong joon ho': '봉준호',
        'kimchi': '김치'
    };
    
    const englishQuery = query.toLowerCase();
    if (englishNames[englishQuery]) {
        return celebrityDatabase[englishNames[englishQuery]];
    }
    
    return null;
}

// 유명인 정보 표시 함수
function displayCelebrityInfo(celebrity) {
    // 기본 정보 설정
    document.getElementById('celebrityName').textContent = celebrity.name;
    document.getElementById('celebrityTitle').textContent = celebrity.title;
    document.getElementById('celebrityImage').src = celebrity.image;
    document.getElementById('celebrityImage').alt = `${celebrity.name} 이미지`;
    
    // 태그 설정
    const tagsContainer = document.getElementById('celebrityTags');
    tagsContainer.innerHTML = celebrity.tags.map(tag => 
        `<span class="tag">${tag}</span>`
    ).join('');
    
    // 기본 정보 설정
    const basicInfoContainer = document.getElementById('basicInfo');
    basicInfoContainer.innerHTML = Object.entries(celebrity.basicInfo).map(([key, value]) => 
        `<div class="info-item">
            <h4>${key}</h4>
            <p>${value}</p>
        </div>`
    ).join('');
    
    // 성과 설정
    const achievementsContainer = document.getElementById('achievements');
    achievementsContainer.innerHTML = celebrity.achievements.map(achievement => 
        `<div class="achievement-item">
            <h4>${achievement.title}</h4>
            <p>${achievement.description}</p>
        </div>`
    ).join('');
    
    // 명언 설정
    const quotesContainer = document.getElementById('quotes');
    quotesContainer.innerHTML = celebrity.quotes.map(quote => 
        `<div class="quote-item">
            <p>${quote}</p>
        </div>`
    ).join('');
    
    // 카드 표시
    celebrityCard.style.display = 'block';
}

// 에러 메시지 표시 함수
function showErrorMessage() {
    errorMessage.style.display = 'block';
}

// 제안사항 표시 함수
function showSuggestions() {
    const query = celebrityInput.value.trim();
    
    if (!query) {
        suggestions.style.display = 'none';
        return;
    }
    
    const matches = Object.keys(celebrityDatabase).filter(name => 
        name.toLowerCase().includes(query.toLowerCase())
    );
    
    if (matches.length > 0) {
        suggestions.innerHTML = matches.map(name => 
            `<div class="suggestion-item" onclick="selectSuggestion('${name}')">${name}</div>`
        ).join('');
        suggestions.style.display = 'block';
    } else {
        suggestions.style.display = 'none';
    }
}

// 제안사항 선택 함수
async function selectSuggestion(name) {
    celebrityInput.value = name;
    suggestions.style.display = 'none';
    await searchCelebrity();
}

// 인기 유명인 표시 함수
function displayPopularCelebrities() {
    popularGrid.innerHTML = popularCelebrities.map(name => {
        const celebrity = celebrityDatabase[name];
        return `
            <div class="popular-item" onclick="searchByName('${name}')">
                <img src="${celebrity.image}" alt="${celebrity.name}" onerror="this.src='https://via.placeholder.com/80x80/667eea/ffffff?text=${encodeURIComponent(celebrity.name.charAt(0))}'">
                <h4>${celebrity.name}</h4>
                <p>${celebrity.title}</p>
            </div>
        `;
    }).join('');
}

// 이름으로 검색 함수
async function searchByName(name) {
    celebrityInput.value = name;
    await searchCelebrity();
}

// 검색창 외부 클릭 시 제안사항 숨기기
document.addEventListener('click', (e) => {
    if (!celebrityInput.contains(e.target) && !suggestions.contains(e.target)) {
        suggestions.style.display = 'none';
    }
});

// 스크롤 시 헤더 그림자 효과
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.textShadow = '2px 2px 8px rgba(0,0,0,0.5)';
    } else {
        header.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
    }
});

// 검색 히스토리 저장 (로컬 스토리지)
function saveSearchHistory(query) {
    let history = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    if (!history.includes(query)) {
        history.unshift(query);
        history = history.slice(0, 10); // 최근 10개만 유지
        localStorage.setItem('searchHistory', JSON.stringify(history));
    }
}

// 검색 히스토리 로드
function loadSearchHistory() {
    return JSON.parse(localStorage.getItem('searchHistory') || '[]');
}

// 검색 시 히스토리 저장
const originalSearchCelebrity = searchCelebrity;
searchCelebrity = async function() {
    const query = celebrityInput.value.trim();
    if (query) {
        saveSearchHistory(query);
    }
    await originalSearchCelebrity();
};
