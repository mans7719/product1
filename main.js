// 귀여운 요리 데이터
const recipes = [
    {
        id: 1,
        title: "곰돌이 오므라이스",
        emoji: "🐻",
        desc: "계란 이불을 덮은 잠자는 곰돌이",
        time: "30분",
        level: "⭐⭐"
    },
    {
        id: 2,
        title: "스마일 샌드위치",
        emoji: "🥪",
        desc: "햄과 치즈로 만든 웃는 얼굴",
        time: "10분",
        level: "⭐"
    },
    {
        id: 3,
        title: "구름 팬케이크",
        emoji: "🥞",
        desc: "폭신폭신 구름 같은 수플레",
        time: "40분",
        level: "⭐⭐⭐"
    },
    {
        id: 4,
        title: "토끼 카레",
        emoji: "🐰",
        desc: "당근을 좋아하는 토끼 밥",
        time: "45분",
        level: "⭐⭐"
    },
    {
        id: 5,
        title: "하트 볶음밥",
        emoji: "💖",
        desc: "사랑이 가득 담긴 김치볶음밥",
        time: "20분",
        level: "⭐"
    }
];

// Recipe Card Component
class RecipeCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set data(recipe) {
        this.render(recipe);
    }

    render(recipe) {
        this.shadowRoot.innerHTML = `
            <style>
                .card {
                    background: white;
                    border-radius: 20px;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    box-shadow: 0 8px 24px rgba(149, 157, 165, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                    border: 2px solid transparent;
                }
                .card:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 12px 30px rgba(255, 183, 178, 0.4);
                    border-color: #FFB7B2;
                }
                .emoji {
                    font-size: 4rem;
                    background: #FFFDF5;
                    width: 80px;
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                }
                .info {
                    flex: 1;
                }
                h2 {
                    margin: 0 0 5px 0;
                    font-size: 1.8rem;
                    color: #6D4C41;
                    font-family: 'Gamja Flower', cursive;
                }
                p {
                    margin: 0;
                    color: #8D6E63;
                    font-size: 1.2rem;
                    font-family: 'Gamja Flower', cursive;
                }
                .meta {
                    display: flex;
                    gap: 15px;
                    margin-top: 10px;
                    font-size: 1rem;
                    color: #FF8A80;
                }
                .badge {
                    background: #E2F0CB;
                    padding: 2px 10px;
                    border-radius: 10px;
                    color: #558B2F;
                }
            </style>
            <div class="card">
                <div class="emoji">${recipe.emoji}</div>
                <div class="info">
                    <h2>${recipe.title}</h2>
                    <p>${recipe.desc}</p>
                    <div class="meta">
                        <span>⏳ ${recipe.time}</span>
                        <span>${recipe.level}</span>
                    </div>
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