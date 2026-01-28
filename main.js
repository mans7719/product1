// 다국어 지원을 위한 레시피 데이터
const allRecipes = [
    // Morning (아침)
    { 
        id: 101, type: "morning", emoji: "🐻", 
        title: "곰돌이 오므라이스", title_en: "Bear Omurice",
        desc: "계란 이불을 덮은 잠자는 곰돌이", desc_en: "Sleeping bear covered with egg blanket",
        time: "30분", time_en: "30min", level: "⭐⭐", 
        ingredients: ["계란 2개", "밥 1공기", "다진 야채", "케첩", "김"],
        ingredients_en: ["2 Eggs", "1 Bowl of Rice", "Chopped Veggies", "Ketchup", "Seaweed"]
    },
    { 
        id: 102, type: "morning", emoji: "🥪", 
        title: "스마일 샌드위치", title_en: "Smile Sandwich",
        desc: "햄과 치즈로 만든 웃는 얼굴", desc_en: "Smiling face made with ham & cheese",
        time: "10분", time_en: "10min", level: "⭐", 
        ingredients: ["식빵 2장", "슬라이스 햄", "치즈", "딸기잼", "마요네즈"],
        ingredients_en: ["2 Bread Slices", "Ham Slice", "Cheese", "Strawberry Jam", "Mayonnaise"]
    },
    { 
        id: 103, type: "morning", emoji: "🥞", 
        title: "구름 팬케이크", title_en: "Cloud Pancake",
        desc: "폭신폭신 구름 같은 수플레", desc_en: "Fluffy souffle like a cloud",
        time: "40분", time_en: "40min", level: "⭐⭐⭐", 
        ingredients: ["계란 2개", "설탕 2스푼", "밀가루", "우유", "버터"],
        ingredients_en: ["2 Eggs", "2 Spoon Sugar", "Flour", "Milk", "Butter"]
    },
    { 
        id: 104, type: "morning", emoji: "🥯", 
        title: "토끼 베이글", title_en: "Bunny Bagel",
        desc: "크림치즈 바른 토끼 얼굴 베이글", desc_en: "Bunny face bagel with cream cheese",
        time: "15분", time_en: "15min", level: "⭐", 
        ingredients: ["베이글", "크림치즈", "블루베리(눈)", "아몬드(귀)"],
        ingredients_en: ["Bagel", "Cream Cheese", "Blueberries (Eyes)", "Almonds (Ears)"]
    },
    { 
        id: 105, type: "morning", emoji: "🐣", 
        title: "병아리 삶은 계란", title_en: "Chick Boiled Egg",
        desc: "검은깨 눈을 가진 귀여운 병아리", desc_en: "Cute chick with sesame eyes",
        time: "15분", time_en: "15min", level: "⭐", 
        ingredients: ["계란", "검은깨", "당근(부리)"],
        ingredients_en: ["Egg", "Black Sesame", "Carrot (Beak)"]
    },
    { 
        id: 106, type: "morning", emoji: "🍨", 
        title: "요거트 파르페", title_en: "Yogurt Parfait",
        desc: "과일이 듬뿍 들어간 상큼한 아침", desc_en: "Fresh morning with fruits",
        time: "10분", time_en: "10min", level: "⭐", 
        ingredients: ["요거트", "그래놀라", "제철 과일", "꿀"],
        ingredients_en: ["Yogurt", "Granola", "Seasonal Fruits", "Honey"]
    },

    // Lunch (점심)
    { 
        id: 201, type: "lunch", emoji: "🐰", 
        title: "토끼 카레", title_en: "Bunny Curry",
        desc: "당근을 좋아하는 토끼 밥", desc_en: "Rabbit rice loving carrots",
        time: "45분", time_en: "45min", level: "⭐⭐", 
        ingredients: ["고형 카레", "감자", "당근", "양파", "밥", "김"],
        ingredients_en: ["Curry Roux", "Potato", "Carrot", "Onion", "Rice", "Seaweed"]
    },
    { 
        id: 202, type: "lunch", emoji: "💖", 
        title: "하트 볶음밥", title_en: "Heart Fried Rice",
        desc: "사랑이 가득 담긴 김치볶음밥", desc_en: "Kimchi fried rice full of love",
        time: "20분", time_en: "20min", level: "⭐", 
        ingredients: ["신김치", "밥 1공기", "참치/햄", "계란", "참기름"],
        ingredients_en: ["Kimchi", "1 Bowl of Rice", "Tuna/Ham", "Egg", "Sesame Oil"]
    },
    { 
        id: 203, type: "lunch", emoji: "🐙", 
        title: "문어 소세지 도시락", title_en: "Octopus Sausage Box",
        desc: "다리가 8개인 귀여운 문어 소세지", desc_en: "Cute octopus sausage with 8 legs",
        time: "30분", time_en: "30min", level: "⭐", 
        ingredients: ["비엔나 소세지", "밥", "계란말이", "브로콜리"],
        ingredients_en: ["Vienna Sausage", "Rice", "Rolled Omelet", "Broccoli"]
    },
    { 
        id: 204, type: "lunch", emoji: "🐱", 
        title: "고양이 주먹밥", title_en: "Cat Rice Ball",
        desc: "참치마요가 들어간 냥냥 주먹밥", desc_en: "Meow rice ball with tuna mayo",
        time: "25분", time_en: "25min", level: "⭐", 
        ingredients: ["밥", "참치마요", "김", "슬라이스 치즈"],
        ingredients_en: ["Rice", "Tuna Mayo", "Seaweed", "Sliced Cheese"]
    },
    { 
        id: 205, type: "lunch", emoji: "🐌", 
        title: "달팽이 김밥", title_en: "Snail Kimbap",
        desc: "동글동글 말린 꼬마 김밥", desc_en: "Round rolled mini kimbap",
        time: "50분", time_en: "50min", level: "⭐⭐⭐", 
        ingredients: ["김", "밥", "슬라이스 햄", "치즈", "시금치"],
        ingredients_en: ["Seaweed", "Rice", "Ham Slice", "Cheese", "Spinach"]
    },
    { 
        id: 206, type: "lunch", emoji: "🍝", 
        title: "병아리 파스타", title_en: "Chick Pasta",
        desc: "옥수수 크림으로 만든 노란 파스타", desc_en: "Yellow pasta with corn cream",
        time: "35분", time_en: "35min", level: "⭐⭐", 
        ingredients: ["파스타면", "옥수수 스프", "우유", "양파", "베이컨"],
        ingredients_en: ["Pasta Noodles", "Corn Soup", "Milk", "Onion", "Bacon"]
    },

    // Dinner (저녁)
    { 
        id: 301, type: "dinner", emoji: "🍖", 
        title: "곰돌이 함박스테이크", title_en: "Bear Hamburger Steak",
        desc: "육즙 가득 든든한 저녁 식사", desc_en: "Juicy and hearty dinner",
        time: "60분", time_en: "60min", level: "⭐⭐⭐", 
        ingredients: ["다진 소고기", "양파", "빵가루", "스테이크 소스"],
        ingredients_en: ["Minced Beef", "Onion", "Breadcrumbs", "Steak Sauce"]
    },
    { 
        id: 302, type: "dinner", emoji: "🦀", 
        title: "꽃게 소세지 볶음", title_en: "Crab Sausage Stir-fry",
        desc: "매콤달콤한 소세지 야채 볶음", desc_en: "Sweet & spicy sausage stir-fry",
        time: "30분", time_en: "30min", level: "⭐⭐", 
        ingredients: ["비엔나 소세지", "파프리카", "양파", "케첩", "고추장"],
        ingredients_en: ["Vienna Sausage", "Paprika", "Onion", "Ketchup", "Gochujang"]
    },
    { 
        id: 303, type: "dinner", emoji: "🍕", 
        title: "별님 피자", title_en: "Star Pizza",
        desc: "또띠아로 만든 바삭한 별 피자", desc_en: "Crispy star pizza made with tortilla",
        time: "25분", time_en: "25min", level: "⭐⭐", 
        ingredients: ["또띠아", "토마토 소스", "피자 치즈", "페퍼로니"],
        ingredients_en: ["Tortilla", "Tomato Sauce", "Pizza Cheese", "Pepperoni"]
    },
    { 
        id: 304, type: "dinner", emoji: "🍛", 
        title: "잠자는 곰돌이 카레", title_en: "Sleeping Bear Curry",
        desc: "따뜻한 이불을 덮은 곰돌이", desc_en: "Bear covered with warm blanket",
        time: "50분", time_en: "50min", level: "⭐⭐", 
        ingredients: ["카레", "감자", "고기", "당근", "밥"],
        ingredients_en: ["Curry", "Potato", "Meat", "Carrot", "Rice"]
    },
    { 
        id: 305, type: "dinner", emoji: "🦕", 
        title: "공룡 치킨 너겟", title_en: "Dino Chicken Nuggets",
        desc: "용가리 치킨과 감자 튀김", desc_en: "Dino nuggets and french fries",
        time: "20분", time_en: "20min", level: "⭐", 
        ingredients: ["치킨 너겟", "감자 튀김", "머스타드 소스", "샐러드"],
        ingredients_en: ["Chicken Nuggets", "French Fries", "Mustard Sauce", "Salad"]
    },
    { 
        id: 306, type: "dinner", emoji: "🍲", 
        title: "따뜻한 스프와 빵", title_en: "Warm Soup & Bread",
        desc: "하루를 마무리하는 따뜻한 스프", desc_en: "Warm soup to end the day",
        time: "40분", time_en: "40min", level: "⭐⭐", 
        ingredients: ["양송이 버섯", "우유", "생크림", "바게트"],
        ingredients_en: ["Button Mushroom", "Milk", "Heavy Cream", "Baguette"]
    }
];

// UI Translations
const translations = {
    ko: {
        title: "🍽️ 오늘 뭐 먹지?",
        subtitle: "기분 좋아지는 귀여운 레시피 5가지",
        btn_all: "✨ 전체",
        btn_morning: "☀️ 아침",
        btn_lunch: "🍱 점심",
        btn_dinner: "🌙 저녁",
        footer: "Made with 💖 & 🍭",
        lang_btn: "🇺🇸 English",
        ingredients_label: "🧺 준비물",
        contact_title: "🤝 제휴 문의",
        contact_subtitle: "함께 맛있는 이야기를 만들어갈 파트너를 찾아요!",
        label_name: "성함/업체명",
        label_email: "이메일 주소",
        label_message: "문의 내용",
        placeholder_name: "예: 곰돌이 식당",
        placeholder_email: "example@mail.com",
        placeholder_message: "제휴 제안 내용을 적어주세요!",
        btn_submit: "보내기 ✨",
        info_title_1: "🍱 왜 귀여운 밥상이 좋을까요?",
        info_p_1: "음식의 맛도 중요하지만, <strong>시각적인 즐거움</strong>은 식사 시간을 더욱 행복하게 만들어줍니다. 특히 '캐릭터 도시락'이나 예쁜 플레이팅은 편식하는 아이들에게도 효과적이며, 지친 하루를 보내는 어른들에게도 작은 위로가 됩니다.",
        info_title_2: "🥕 건강하고 신선한 재료",
        info_p_2: "귀여움뿐만 아니라 영양 균형도 놓치지 않습니다. 제철 과일과 채소를 활용한 레시피로 비타민을 채우고, 자극적이지 않은 조리법으로 건강한 한 끼를 제안합니다.",
        link_about: "소개 (About)",
        link_privacy: "개인정보처리방침 (Privacy)",
        comment_title: "💬 방명록",
        comment_subtitle: "맛있는 레시피 후기를 남겨주세요!",
        placeholder_comment_name: "닉네임",
        placeholder_comment_text: "내용을 입력해주세요...",
        btn_comment: "등록하기 ✨"
    },
    en: {
        title: "🍽️ What to Eat?",
        subtitle: "5 Cute Recipes to Brighten Your Day",
        btn_all: "✨ All",
        btn_morning: "☀️ Morning",
        btn_lunch: "🍱 Lunch",
        btn_dinner: "🌙 Dinner",
        footer: "Made with 💖 & 🍭",
        lang_btn: "🇰🇷 한국어",
        ingredients_label: "🧺 Ingredients",
        info_title_1: "🍱 Why Cute Meals?",
        info_p_1: "Taste is important, but <strong>visual joy</strong> makes mealtime even happier. Especially 'Character Bentos' or pretty plating are effective for picky eaters and provide small comfort to adults after a long day.",
        info_title_2: "🥕 Healthy & Fresh Ingredients",
        info_p_2: "We don't miss nutritional balance for cuteness. We suggest healthy meals with seasonal fruits and vegetables, using non-stimulating cooking methods.",
        link_about: "About Us",
        link_privacy: "Privacy Policy",
        comment_title: "💬 Guestbook",
        comment_subtitle: "Leave a review of your yummy recipe!",
        placeholder_comment_name: "Nickname",
        placeholder_comment_text: "Write your comment here...",
        btn_comment: "Post ✨"
    }
};

let currentLang = localStorage.getItem('lang') || "ko"; // Load language preference
let currentFilter = "all"; // Current filter state

// Utility: Shuffle Array and Pick N items
function getRandomRecipes(type, count = 5) {
    let filtered = allRecipes;
    if (type && type !== 'all') {
        filtered = allRecipes.filter(r => r.type === type);
    }
    
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Recipe Card Component
class RecipeCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.expanded = false;
    }

    set data(recipe) {
        this.recipe = recipe;
        this.render();
    }

    connectedCallback() {
        this.addEventListener('click', () => {
            this.toggleExpanded();
        });
    }

    toggleExpanded() {
        this.expanded = !this.expanded;
        const card = this.shadowRoot.querySelector('.card');
        const ingredients = this.shadowRoot.querySelector('.ingredients-container');
        
        if (this.expanded) {
            card.classList.add('expanded');
            ingredients.style.maxHeight = ingredients.scrollHeight + "px";
            ingredients.style.marginTop = "20px";
            ingredients.style.opacity = "1";
        } else {
            card.classList.remove('expanded');
            ingredients.style.maxHeight = "0";
            ingredients.style.marginTop = "0";
            ingredients.style.opacity = "0";
        }
    }

    render() {
        if (!this.recipe) return;

        // 언어에 맞는 데이터 선택
        const title = currentLang === 'ko' ? this.recipe.title : this.recipe.title_en;
        const desc = currentLang === 'ko' ? this.recipe.desc : this.recipe.desc_en;
        const time = currentLang === 'ko' ? this.recipe.time : this.recipe.time_en;
        const ingredients = currentLang === 'ko' ? this.recipe.ingredients : this.recipe.ingredients_en;
        const ingredientsLabel = translations[currentLang].ingredients_label;

        const ingredientList = ingredients
            .map(ing => `<li>🥕 ${ing}</li>`)
            .join('');

        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    background: white;
                    border-radius: 20px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    box-shadow: 0 8px 24px rgba(149, 157, 165, 0.1);
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    cursor: pointer;
                    border: 2px solid transparent;
                    overflow: hidden;
                    position: relative;
                }
                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 30px rgba(255, 183, 178, 0.4);
                    border-color: #FFB7B2;
                }
                .card.expanded {
                    transform: scale(1.02);
                    box-shadow: 0 15px 40px rgba(255, 183, 178, 0.5);
                    border-color: #FFB7B2;
                    background-color: #FFFDF5;
                }
                .header {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    width: 100%;
                }
                .emoji {
                    font-size: 3.5rem;
                    background: #FFFDF5;
                    min-width: 80px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    border: 2px dashed #FFDAC1;
                }
                .info {
                    flex: 1;
                }
                h2 {
                    margin: 0 0 5px 0;
                    font-size: 1.6rem;
                    color: #6D4C41;
                    font-family: 'Gamja Flower', cursive;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
                .arrow {
                    font-size: 1.2rem;
                    color: #FFB7B2;
                    transition: transform 0.3s;
                }
                .card.expanded .arrow {
                    transform: rotate(180deg);
                }
                p {
                    margin: 0;
                    color: #8D6E63;
                    font-size: 1.1rem;
                    font-family: 'Gamja Flower', cursive;
                }
                .meta {
                    display: flex;
                    gap: 15px;
                    margin-top: 8px;
                    font-size: 1rem;
                    color: #FF8A80;
                }
                /* Ingredients Section */
                .ingredients-container {
                    max-height: 0;
                    overflow: hidden;
                    transition: all 0.4s ease;
                    opacity: 0;
                    margin-top: 0;
                    border-top: 2px dashed #FFDAC1;
                }
                .ingredients-title {
                    margin: 15px 0 10px 0;
                    font-size: 1.2rem;
                    color: #6D4C41;
                    font-weight: bold;
                }
                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 8px;
                }
                li {
                    font-size: 1.1rem;
                    color: #795548;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
            </style>
            <article class="card">
                <div class="header">
                    <div class="emoji" role="img" aria-label="${title}">${this.recipe.emoji}</div>
                    <div class="info">
                        <h2>
                            ${title} 
                            <span class="arrow">▼</span>
                        </h2>
                        <p>${desc}</p>
                        <div class="meta">
                            <span>⏳ ${time}</span>
                            <span>${this.recipe.level}</span>
                        </div>
                    </div>
                </div>
                
                <div class="ingredients-container">
                    <div class="ingredients-title">${ingredientsLabel}</div>
                    <ul>
                        ${ingredientList}
                    </ul>
                </div>
            </article>
        `;
    }
}

// Recipe List Component
class RecipeList extends HTMLElement {
    connectedCallback() {
        this.updateLanguage(); // Apply language on connect
        this.renderRecipes('all');
        
        // 필터 버튼 이벤트
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                currentFilter = e.target.dataset.type;
                this.renderRecipes(currentFilter);
            });
        });

        // 언어 전환 버튼 이벤트
        const langBtn = document.getElementById('lang-toggle');
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ko' ? 'en' : 'ko';
            localStorage.setItem('lang', currentLang); // Persist preference
            this.updateLanguage();
            this.renderRecipes(currentFilter); // 현재 필터 상태 유지하며 다시 그리기
        });
    }

    updateLanguage() {
        const t = translations[currentLang];
        
        // 정적 텍스트 업데이트
        document.getElementById('app-title').textContent = t.title;
        document.getElementById('app-subtitle').textContent = t.subtitle;
        document.getElementById('btn-all').textContent = t.btn_all;
        document.getElementById('btn-morning').textContent = t.btn_morning;
        document.getElementById('btn-lunch').textContent = t.btn_lunch;
        document.getElementById('btn-dinner').textContent = t.btn_dinner;
        document.getElementById('footer-text').textContent = t.footer;
        document.getElementById('lang-toggle').textContent = t.lang_btn;

        // 정보 섹션 업데이트
        if (document.getElementById('info-title-1')) {
            document.getElementById('info-title-1').textContent = t.info_title_1;
            document.getElementById('info-p-1').innerHTML = t.info_p_1;
            document.getElementById('info-title-2').textContent = t.info_title_2;
            document.getElementById('info-p-2').innerHTML = t.info_p_2;
        }

        // 푸터 링크 업데이트
        if (document.getElementById('link-about')) {
            document.getElementById('link-about').textContent = t.link_about;
            document.getElementById('link-privacy').textContent = t.link_privacy;
        }

        // 방명록(댓글) 업데이트
        if (document.getElementById('comment-title')) {
            document.getElementById('comment-title').textContent = t.comment_title;
            document.getElementById('comment-subtitle').textContent = t.comment_subtitle;
            document.getElementById('comment-name').placeholder = t.placeholder_comment_name;
            document.getElementById('comment-text').placeholder = t.placeholder_comment_text;
            document.getElementById('btn-comment').textContent = t.btn_comment;
        }

        // HTML 태그의 lang 속성 변경 (웹 접근성)
        document.documentElement.lang = currentLang;
    }

    renderRecipes(type) {
        this.innerHTML = '';
        const selectedRecipes = getRandomRecipes(type);

        selectedRecipes.forEach((recipe, index) => {
            const card = document.createElement('recipe-card');
            card.data = recipe;
            card.style.opacity = '0';
            card.style.animation = `pop 0.5s ease forwards ${index * 0.1}s`;
            this.appendChild(card);
        });
    }

    // 댓글 시스템 로직
    loadComments() {
        const commentList = document.getElementById('comment-list');
        if (!commentList) return;

        const comments = JSON.parse(localStorage.getItem('guestbook_comments')) || [];
        commentList.innerHTML = ''; // 초기화

        // 최신순으로 정렬
        comments.reverse().forEach(comment => {
            const div = document.createElement('div');
            div.className = 'comment-item';
            div.innerHTML = `
                <div class="comment-header">
                    <span class="comment-author">${comment.name}</span>
                    <span class="comment-date">${comment.date}</span>
                </div>
                <div class="comment-body">${comment.text}</div>
            `;
            commentList.appendChild(div);
        });
    }

    saveComment(name, text) {
        const comments = JSON.parse(localStorage.getItem('guestbook_comments')) || [];
        const newComment = {
            name: name,
            text: text,
            date: new Date().toLocaleDateString()
        };
        comments.push(newComment);
        localStorage.setItem('guestbook_comments', JSON.stringify(comments));
        this.loadComments(); // 목록 갱신
    }
}

// 댓글 폼 이벤트 리스너 등록 (DOM 로드 후)
document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        // 초기 댓글 로드 (RecipeList 인스턴스가 없을 수도 있으므로 수동 호출 혹은 전역 함수로 분리 가능하나, 
        // 여기서는 RecipeList가 연결될 때 호출되도록 하거나 별도로 처리)
        // 편의상 RecipeList의 메서드를 재사용하기보다 간단히 여기서 처리하거나,
        // RecipeList가 main logic을 주관하므로 해당 클래스 안에서 처리하는 것이 좋음.
        // 하지만 connectedCallback은 커스텀 엘리먼트가 붙을 때 실행됨.
        
        // 간단한 구현을 위해 여기서는 직접 로직 수행
        loadCommentsGlobal();

        commentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = document.getElementById('comment-name');
            const textInput = document.getElementById('comment-text');
            
            if (nameInput.value && textInput.value) {
                saveCommentGlobal(nameInput.value, textInput.value);
                nameInput.value = '';
                textInput.value = '';
                alert("소중한 후기 감사합니다! 💖");
            }
        });
    }
});

// 전역 헬퍼 함수 (간단한 구현을 위해)
function loadCommentsGlobal() {
    const commentList = document.getElementById('comment-list');
    if (!commentList) return;

    const comments = JSON.parse(localStorage.getItem('guestbook_comments')) || [];
    commentList.innerHTML = '';

    comments.reverse().forEach(comment => {
        const div = document.createElement('div');
        div.className = 'comment-item';
        div.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">Bear Chef 🐻</span> <!-- 예시로 고정하거나 저장된 이름 사용 -->
                <span class="comment-author" style="color:#6D4C41;">${comment.name}</span>
                <span class="comment-date" style="font-weight:normal; color:#FF8A80;">${comment.date}</span>
            </div>
            <div class="comment-body">${comment.text}</div>
        `;
        // 디자인 수정: 헤더 구조
        div.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">🥕 ${comment.name}</span>
                <span class="comment-date">${comment.date}</span>
            </div>
            <div class="comment-body">${comment.text}</div>
        `;
        commentList.appendChild(div);
    });
}

function saveCommentGlobal(name, text) {
    const comments = JSON.parse(localStorage.getItem('guestbook_comments')) || [];
    const newComment = {
        name: name,
        text: text,
        date: new Date().toLocaleDateString()
    };
    comments.push(newComment);
    localStorage.setItem('guestbook_comments', JSON.stringify(comments));
    loadCommentsGlobal();
}

customElements.define('recipe-card', RecipeCard);
customElements.define('recipe-list', RecipeList);
