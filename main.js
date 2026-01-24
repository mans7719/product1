// 풍성해진 귀여운 요리 데이터
const allRecipes = [
    // Morning (아침)
    { id: 101, type: "morning", title: "곰돌이 오므라이스", emoji: "🐻", desc: "계란 이불을 덮은 잠자는 곰돌이", time: "30분", level: "⭐⭐", ingredients: ["계란 2개", "밥 1공기", "다진 야채", "케첩", "김"] },
    { id: 102, type: "morning", title: "스마일 샌드위치", emoji: "🥪", desc: "햄과 치즈로 만든 웃는 얼굴", time: "10분", level: "⭐", ingredients: ["식빵 2장", "슬라이스 햄", "치즈", "딸기잼", "마요네즈"] },
    { id: 103, type: "morning", title: "구름 팬케이크", emoji: "🥞", desc: "폭신폭신 구름 같은 수플레", time: "40분", level: "⭐⭐⭐", ingredients: ["계란 2개", "설탕 2스푼", "밀가루", "우유", "버터"] },
    { id: 104, type: "morning", title: "토끼 베이글", emoji: "🥯", desc: "크림치즈 바른 토끼 얼굴 베이글", time: "15분", level: "⭐", ingredients: ["베이글", "크림치즈", "블루베리(눈)", "아몬드(귀)"] },
    { id: 105, type: "morning", title: "병아리 삶은 계란", emoji: "🐣", desc: "검은깨 눈을 가진 귀여운 병아리", time: "15분", level: "⭐", ingredients: ["계란", "검은깨", "당근(부리)"] },
    { id: 106, type: "morning", title: "요거트 파르페", emoji: "🍨", desc: "과일이 듬뿍 들어간 상큼한 아침", time: "10분", level: "⭐", ingredients: ["요거트", "그래놀라", "제철 과일", "꿀"] },

    // Lunch (점심)
    { id: 201, type: "lunch", title: "토끼 카레", emoji: "🐰", desc: "당근을 좋아하는 토끼 밥", time: "45분", level: "⭐⭐", ingredients: ["고형 카레", "감자", "당근", "양파", "밥", "김"] },
    { id: 202, type: "lunch", title: "하트 볶음밥", emoji: "💖", desc: "사랑이 가득 담긴 김치볶음밥", time: "20분", level: "⭐", ingredients: ["신김치", "밥 1공기", "참치/햄", "계란", "참기름"] },
    { id: 203, type: "lunch", title: "문어 소세지 도시락", emoji: "🐙", desc: "다리가 8개인 귀여운 문어 소세지", time: "30분", level: "⭐", ingredients: ["비엔나 소세지", "밥", "계란말이", "브로콜리"] },
    { id: 204, type: "lunch", title: "고양이 주먹밥", emoji: "🐱", desc: "참치마요가 들어간 냥냥 주먹밥", time: "25분", level: "⭐", ingredients: ["밥", "참치마요", "김", "슬라이스 치즈"] },
    { id: 205, type: "lunch", title: "달팽이 김밥", emoji: "🐌", desc: "동글동글 말린 꼬마 김밥", time: "50분", level: "⭐⭐⭐", ingredients: ["김", "밥", "슬라이스 햄", "치즈", "시금치"] },
    { id: 206, type: "lunch", title: "병아리 파스타", emoji: "🍝", desc: "옥수수 크림으로 만든 노란 파스타", time: "35분", level: "⭐⭐", ingredients: ["파스타면", "옥수수 스프", "우유", "양파", "베이컨"] },

    // Dinner (저녁)
    { id: 301, type: "dinner", title: "곰돌이 함박스테이크", emoji: "🍖", desc: "육즙 가득 든든한 저녁 식사", time: "60분", level: "⭐⭐⭐", ingredients: ["다진 소고기", "양파", "빵가루", "스테이크 소스"] },
    { id: 302, type: "dinner", title: "꽃게 소세지 볶음", emoji: "🦀", desc: "매콤달콤한 소세지 야채 볶음", time: "30분", level: "⭐⭐", ingredients: ["비엔나 소세지", "파프리카", "양파", "케첩", "고추장"] },
    { id: 303, type: "dinner", title: "별님 피자", emoji: "🍕", desc: "또띠아로 만든 바삭한 별 피자", time: "25분", level: "⭐⭐", ingredients: ["또띠아", "토마토 소스", "피자 치즈", "페퍼로니"] },
    { id: 304, type: "dinner", title: "잠자는 곰돌이 카레", emoji: "🍛", desc: "따뜻한 이불을 덮은 곰돌이", time: "50분", level: "⭐⭐", ingredients: ["카레", "감자", "고기", "당근", "밥"] },
    { id: 305, type: "dinner", title: "공룡 치킨 너겟", emoji: "🦕", desc: "용가리 치킨과 감자 튀김", time: "20분", level: "⭐", ingredients: ["치킨 너겟", "감자 튀김", "머스타드 소스", "샐러드"] },
    { id: 306, type: "dinner", title: "따뜻한 스프와 빵", emoji: "🍲", desc: "하루를 마무리하는 따뜻한 스프", time: "40분", level: "⭐⭐", ingredients: ["양송이 버섯", "우유", "생크림", "바게트"] }
];

// Utility: Shuffle Array and Pick N items
function getRandomRecipes(type, count = 5) {
    let filtered = allRecipes;
    if (type && type !== 'all') {
        filtered = allRecipes.filter(r => r.type === type);
    }
    
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Recipe Card Component (기존 유지)
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

        const ingredientList = this.recipe.ingredients
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
                .badge {
                    font-size: 0.9rem;
                    padding: 2px 8px;
                    border-radius: 8px;
                    background: #FFF3E0;
                    color: #FF9800;
                    margin-left: 10px;
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
                            ${this.recipe.title} 
                            <span class="arrow">▼</span>
                        </h2>
                        <p>${this.recipe.desc}</p>
                        <div class="meta">
                            <span>⏳ ${this.recipe.time}</span>
                            <span>${this.recipe.level}</span>
                        </div>
                    </div>
                </div>
                
                <div class="ingredients-container">
                    <div class="ingredients-title">🧺 준비물</div>
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
        this.renderRecipes('all'); // 초기값: 전체 랜덤
        
        // 버튼 이벤트 리스너 등록
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                // 버튼 스타일 업데이트
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                // 레시피 갱신
                const type = e.target.dataset.type;
                this.renderRecipes(type);
            });
        });
    }

    renderRecipes(type) {
        // 기존 내용 지우기
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