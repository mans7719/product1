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
        btn_submit: "보내기 ✨"
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
        contact_title: "🤝 Affiliate Inquiry",
        contact_subtitle: "Looking for partners to create delicious stories together!",
        label_name: "Name/Company",
        label_email: "Email Address",
        label_message: "Message",
        placeholder_name: "e.g., Bear Restaurant",
        placeholder_email: "example@mail.com",
        placeholder_message: "Please write your proposal here!",
        btn_submit: "Submit ✨"
    }
};

let currentLang = "ko"; // Default language
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
            <div class="card">
                <div class="header">
                    <div class="emoji">${this.recipe.emoji}</div>
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
            </div>
        `;
    }
}

// Recipe List Component
class RecipeList extends HTMLElement {
    connectedCallback() {
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

        // 제휴 문의 폼 업데이트
        document.getElementById('contact-title').textContent = t.contact_title;
        document.getElementById('contact-subtitle').textContent = t.contact_subtitle;
        document.getElementById('label-name').textContent = t.label_name;
        document.getElementById('label-email').textContent = t.label_email;
        document.getElementById('label-message').textContent = t.label_message;
        document.getElementById('btn-submit').textContent = t.btn_submit;

        // Placeholder 업데이트
        document.getElementById('name').placeholder = t.placeholder_name;
        document.getElementById('email').placeholder = t.placeholder_email;
        document.getElementById('message').placeholder = t.placeholder_message;

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
}

customElements.define('recipe-card', RecipeCard);
customElements.define('recipe-list', RecipeList);
