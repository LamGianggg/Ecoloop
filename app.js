function toggleContent() {
    const content = document.getElementById("fullContent");
    const btn = document.getElementById("toggleBtn");

    content.classList.toggle("hidden");

    if (content.classList.contains("hidden")) {
        btn.innerText = "Xem thêm ↓";
    } else {
        btn.innerText = "Thu gọn ↑";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('waste-search');
    const classifyBtn = document.getElementById('classify-btn');

    // ================= DATA =================
    const wasteData = [
        // Recyclable
        { name: "Vỏ lon bia", type: "recyclable", desc: "Rửa sạch, ép dẹt trước khi bỏ.", main: ["bia", "lon bia", "vỏ bia"] },
        { name: "Lon nước ngọt", type: "recyclable", desc: "Rửa sạch, ép dẹt.", main: ["lon nước", "nước ngọt", "lon"] },
        { name: "Chai nhựa", type: "recyclable", desc: "Rửa sạch, bỏ nắp, ép nhẹ.", main: ["chai nhựa", "chai nước", "chai", "nhựa"] },
        { name: "Vỏ hộp sữa", type: "recyclable", desc: "Rửa sạch, cắt nắp, ép phẳng.", main: ["hộp sữa", "sữa"] },
        { name: "Giấy A4", type: "recyclable", desc: "Giấy sạch, bỏ vào thùng tái chế.", main: ["giấy a4", "a4", "giấy in", "giấy"] },

        // Organic
        { name: "Vỏ chuối", type: "organic", desc: "Bỏ vào thùng hữu cơ để ủ phân.", main: ["chuối", "vỏ chuối"] },
        { name: "Vỏ cam", type: "organic", desc: "Bỏ vào thùng hữu cơ.", main: ["cam", "quýt", "vỏ cam"] },
        { name: "Cơm thừa", type: "organic", desc: "Đậy kín tránh ruồi.", main: ["cơm", "cơm thừa"] },
        { name: "Lá cây", type: "organic", desc: "Có thể ủ phân.", main: ["lá", "lá cây"] },

        // Residual
        { name: "Pin cũ", type: "residual", desc: "Chứa kim loại nặng, cần xử lý riêng.", main: ["pin", "pin cũ"] },
        { name: "Đèn huỳnh quang", type: "residual", desc: "Chứa thủy ngân.", main: ["đèn", "huỳnh quang"] },
        { name: "Khẩu trang", type: "residual", desc: "Có nguy cơ sinh học.", main: ["khẩu trang", "mặt nạ"] }
    ];

    // ================= DOM =================
    const cards = {
        recyclable: document.getElementById('recyclable-card'),
        organic: document.getElementById('organic-card'),
        residual: document.getElementById('residual-card')
    };

    const icons = {
        recyclable: document.getElementById('recyclable-icon'),
        organic: document.getElementById('organic-icon'),
        residual: document.getElementById('residual-icon')
    };

    // ================= RESET =================
    function resetAll() {
        Object.values(cards).forEach(card => card.classList.remove('active'));

        Object.values(icons).forEach(icon => {
            icon.classList.remove(
                'active-recyclable', 'active-organic', 'active-residual',
                'bg-primary-container', 'text-on-primary-container',
                'bg-tertiary-container', 'text-on-tertiary-container',
                'bg-error-container', 'text-on-error-container'
            );
            icon.classList.add('bg-surface-container-highest', 'text-outline');
        });

        removeResult();
    }

    // ================= ACTIVATE =================
    function activateCard(category) {
        const card = cards[category];
        const icon = icons[category];

        if (!card || !icon) return;

        card.classList.add('active');

        if (category === 'recyclable') {
            icon.classList.add('bg-primary-container', 'text-on-primary-container', 'active-recyclable');
        } else if (category === 'organic') {
            icon.classList.add('bg-tertiary-container', 'text-on-tertiary-container', 'active-organic');
        } else {
            icon.classList.add('bg-error-container', 'text-on-error-container', 'active-residual');
        }
    }

    // ================= SEARCH LOGIC =================
    function findWasteItem(input) {
        input = input.toLowerCase();

        let bestMatch = null;

        for (let item of wasteData) {
            for (let keyword of item.main) {
                if (input.includes(keyword)) {
                    bestMatch = item;
                    break;
                }
            }
            if (bestMatch) break;
        }

        return bestMatch;
    }

    // ================= RESULT UI =================
    function showResult(item) {
        removeResult();

        const resultDiv = document.createElement('div');
        resultDiv.id = "result-box";
        resultDiv.className = "mt-10 p-6 rounded-xl bg-surface-container shadow-lg text-center animate-fadeIn";

        resultDiv.innerHTML = `
            <h3 class="text-2xl font-bold mb-2">${item.name}</h3>
            <p class="text-on-surface-variant mb-2">${item.desc}</p>
            <span class="font-semibold text-primary">Phân loại: ${getLabel(item.type)}</span>
        `;

        document.querySelector('section.relative').appendChild(resultDiv);
    }

    function removeResult() {
        const old = document.getElementById('result-box');
        if (old) old.remove();
    }

    function getLabel(type) {
        if (type === 'recyclable') return "Tái chế ♻️";
        if (type === 'organic') return "Hữu cơ 🌱";
        return "Rác vô cơ ⚠️";
    }

    // ================= MAIN =================
    function classifyWaste() {
        const inputVal = searchInput.value.trim();

        if (!inputVal) {
            resetAll();
            return;
        }

        const item = findWasteItem(inputVal);

        if (item) {
            resetAll();
            activateCard(item.type);
            showResult(item);
        } else {
            resetAll();
        }
    }

    // ================= EVENTS =================
    classifyBtn.addEventListener('click', classifyWaste);

    searchInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') classifyWaste();
    });

    window.quickSearch = function (term) {
        searchInput.value = term;
        classifyWaste();
    };

    // INIT
    resetAll();
});