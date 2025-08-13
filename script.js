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
    }
};

// 인기 유명인 목록
const popularCelebrities = ['김연아', '손흥민', 'BTS'];

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM 로드 완료 - 앱 초기화 시작');
    
    // DOM 요소들 가져오기
    const searchBtn = document.getElementById('searchBtn');
    const celebrityInput = document.getElementById('celebrityInput');
    const resultSection = document.getElementById('resultSection');
    const loading = document.getElementById('loading');
    const celebrityCard = document.getElementById('celebrityCard');
    const errorMessage = document.getElementById('errorMessage');
    const popularGrid = document.getElementById('popularGrid');
    
    console.log('DOM 요소 상태:', {
        searchBtn: !!searchBtn,
        celebrityInput: !!celebrityInput,
        resultSection: !!resultSection,
        loading: !!loading,
        celebrityCard: !!celebrityCard,
        errorMessage: !!errorMessage,
        popularGrid: !!popularGrid
    });
    
    // 검색 버튼 이벤트 리스너
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            console.log('검색 버튼 클릭됨!');
            searchCelebrity();
        });
        console.log('검색 버튼 이벤트 리스너 등록 완료');
    } else {
        console.error('검색 버튼을 찾을 수 없습니다!');
    }
    
    // 검색창 Enter 키 이벤트
    if (celebrityInput) {
        celebrityInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                console.log('Enter 키 입력됨!');
                searchCelebrity();
            }
        });
        console.log('검색창 Enter 키 이벤트 등록 완료');
    }
    
    // 인기 유명인 표시
    if (popularGrid) {
        displayPopularCelebrities();
    }
    
    console.log('앱 초기화 완료');
});

// 테스트 검색 함수
function testSearch() {
    console.log('테스트 검색 시작');
    const input = document.getElementById('celebrityInput');
    if (input) {
        input.value = '김연아';
        searchCelebrity();
    } else {
        console.error('celebrityInput 요소를 찾을 수 없음');
        alert('검색창을 찾을 수 없습니다!');
    }
}

// 유명인 검색 함수
function searchCelebrity() {
    console.log('검색 함수 실행 시작');
    
    const celebrityInput = document.getElementById('celebrityInput');
    const resultSection = document.getElementById('resultSection');
    const loading = document.getElementById('loading');
    const celebrityCard = document.getElementById('celebrityCard');
    const errorMessage = document.getElementById('errorMessage');
    
    if (!celebrityInput || !resultSection || !loading || !celebrityCard || !errorMessage) {
        console.error('필요한 DOM 요소를 찾을 수 없습니다');
        alert('페이지 로딩에 문제가 있습니다. 새로고침해주세요.');
        return;
    }
    
    const query = celebrityInput.value.trim();
    console.log('검색어:', query);
    
    if (!query) {
        alert('검색어를 입력해주세요!');
        return;
    }
    
    // 검색 결과 섹션 표시
    resultSection.style.display = 'block';
    loading.style.display = 'block';
    celebrityCard.style.display = 'none';
    errorMessage.style.display = 'none';
    
    // 정적 데이터베이스에서 검색
    const celebrity = findCelebrity(query);
    
    if (celebrity) {
        console.log('검색 결과 찾음:', celebrity.name);
        displayCelebrityInfo(celebrity);
    } else {
        console.log('검색 결과 없음');
        showErrorMessage();
    }
    
    loading.style.display = 'none';
}

// 유명인 찾기 함수
function findCelebrity(query) {
    // 정확한 이름 매칭
    if (celebrityDatabase[query]) {
        return celebrityDatabase[query];
    }
    
    // 부분 매칭
    for (const name in celebrityDatabase) {
        if (name.toLowerCase().includes(query.toLowerCase()) || 
            query.toLowerCase().includes(name.toLowerCase())) {
            return celebrityDatabase[name];
        }
    }
    
    return null;
}

// 유명인 정보 표시 함수
function displayCelebrityInfo(celebrity) {
    console.log('유명인 정보 표시 시작:', celebrity.name);
    
    const celebrityCard = document.getElementById('celebrityCard');
    if (!celebrityCard) {
        console.error('celebrityCard 요소를 찾을 수 없습니다');
        return;
    }
    
    // 기본 정보 설정
    const nameElement = document.getElementById('celebrityName');
    const titleElement = document.getElementById('celebrityTitle');
    const imageElement = document.getElementById('celebrityImage');
    const tagsContainer = document.getElementById('celebrityTags');
    const basicInfoContainer = document.getElementById('basicInfo');
    const achievementsContainer = document.getElementById('achievements');
    const quotesContainer = document.getElementById('quotes');
    
    if (nameElement) nameElement.textContent = celebrity.name;
    if (titleElement) titleElement.textContent = celebrity.title;
    if (imageElement) {
        imageElement.src = celebrity.image;
        imageElement.alt = `${celebrity.name} 이미지`;
    }
    
    // 태그 설정
    if (tagsContainer) {
        tagsContainer.innerHTML = celebrity.tags.map(tag => 
            `<span class="tag">${tag}</span>`
        ).join('');
    }
    
    // 기본 정보 설정
    if (basicInfoContainer) {
        basicInfoContainer.innerHTML = Object.entries(celebrity.basicInfo).map(([key, value]) => 
            `<div class="info-item">
                <h4>${key}</h4>
                <p>${value}</p>
            </div>`
        ).join('');
    }
    
    // 성과 설정
    if (achievementsContainer) {
        achievementsContainer.innerHTML = celebrity.achievements.map(achievement => 
            `<div class="achievement-item">
                <h4>${achievement.title}</h4>
                <p>${achievement.description}</p>
            </div>`
        ).join('');
    }
    
    // 명언 설정
    if (quotesContainer) {
        quotesContainer.innerHTML = celebrity.quotes.map(quote => 
            `<div class="quote-item">
                <p>${quote}</p>
            </div>`
        ).join('');
    }
    
    // 카드 표시
    celebrityCard.style.display = 'block';
    console.log('유명인 정보 표시 완료');
}

// 에러 메시지 표시 함수
function showErrorMessage() {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.style.display = 'block';
    }
}

// 인기 유명인 표시 함수
function displayPopularCelebrities() {
    const popularGrid = document.getElementById('popularGrid');
    if (!popularGrid) {
        console.error('popularGrid 요소를 찾을 수 없습니다');
        return;
    }
    
    popularGrid.innerHTML = popularCelebrities.map(name => {
        const celebrity = celebrityDatabase[name];
        return `
            <div class="popular-item" onclick="searchByName('${name}')" style="cursor: pointer;">
                <img src="${celebrity.image}" alt="${celebrity.name}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover;">
                <h4>${celebrity.name}</h4>
                <p>${celebrity.title}</p>
            </div>
        `;
    }).join('');
}

// 이름으로 검색 함수
function searchByName(name) {
    console.log('이름으로 검색:', name);
    const input = document.getElementById('celebrityInput');
    if (input) {
        input.value = name;
        searchCelebrity();
    }
}

console.log('script.js 로드 완료');
