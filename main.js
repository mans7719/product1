// 귀여운 요리 데이터와 재료
const recipes = [
    {
        id: 1,
        title: "곰돌이 오므라이스",
        emoji: "🐻",
        desc: "계란 이불을 덮은 잠자는 곰돌이",
        time: "30분",
        level: "⭐⭐",
        ingredients: ["계란 2개", "밥 1공기", "다진 야채", "케첩", "김(눈코입용)"]
    },
    {
        id: 2,
        title: "스마일 샌드위치",
        emoji: "🥪",
        desc: "햄과 치즈로 만든 웃는 얼굴",
        time: "10분",
        level: "⭐",
        ingredients: ["식빵 2장", "슬라이스 햄", "치즈", "딸기잼", "마요네즈"]
    },
    {
        id: 3,
        title: "구름 팬케이크",
        emoji: "🥞",
        desc: "폭신폭신 구름 같은 수플레",
        time: "40분",
        level: "⭐⭐⭐",
        ingredients: ["계란 2개", "설탕 2스푼", "밀가루 30g", "우유 20ml", "버터"]
    },
    {
        id: 4,
        title: "토끼 카레",
        emoji: "🐰",
        desc: "당근을 좋아하는 토끼 밥",
        time: "45분",
        level: "⭐⭐",
        ingredients: ["고형 카레", "감자", "당근", "양파", "밥", "김"]
    },
    {
        id: 5,
        title: "하트 볶음밥",
        emoji: "💖",
        desc: "사랑이 가득 담긴 김치볶음밥",
        time: "20분",
        level: "⭐",
        ingredients: ["신김치", "밥 1공기", "참치/햄", "계란", "참기름"]
    }
];

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
            // 자연스러운 높이 확장을 위해 max-height 조정
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
                    grid-template-columns: 1fr 1fr; /* 2열 배치 */
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
        recipes.forEach((recipe, index) => {
            const card = document.createElement('recipe-card');
            card.data = recipe;
            // 순차적으로 나타나는 애니메이션 효과
            card.style.opacity = '0';
            card.style.animation = `pop 0.5s ease forwards ${index * 0.1}s`;
            this.appendChild(card);
        });
    }
}

customElements.define('recipe-card', RecipeCard);
customElements.define('recipe-list', RecipeList);
