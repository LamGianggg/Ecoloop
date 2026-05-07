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

        // ================= RECYCLABLE =================
        { name: "Chai thủy tinh", type: "recyclable", desc: "Rửa sạch trước khi tái chế.", main: ["chai thủy tinh", "chai kính"] },
        { name: "Lọ thủy tinh", type: "recyclable", desc: "Rửa sạch, tháo nắp.", main: ["lọ", "lọ thủy tinh"] },
        { name: "Hộp giấy carton", type: "recyclable", desc: "Giữ khô, ép gọn.", main: ["carton", "thùng giấy"] },
        { name: "Túi giấy", type: "recyclable", desc: "Không dính dầu mỡ.", main: ["túi giấy"] },
        { name: "Giấy báo", type: "recyclable", desc: "Giữ khô.", main: ["báo", "giấy báo"] },
        { name: "Giấy carton", type: "recyclable", desc: "Ép phẳng.", main: ["carton"] },
        { name: "Hộp sữa giấy", type: "recyclable", desc: "Rửa sạch, ép dẹt.", main: ["hộp sữa"] },
        { name: "Ống hút giấy", type: "recyclable", desc: "Có thể tái chế nếu sạch.", main: ["ống hút giấy"] },
        { name: "Nắp chai nhựa", type: "recyclable", desc: "Thu gom riêng.", main: ["nắp chai"] },
        { name: "Can nhựa", type: "recyclable", desc: "Rửa sạch.", main: ["can", "can nhựa"] },
        { name: "Bao bì nhựa cứng", type: "recyclable", desc: "Rửa sạch.", main: ["bao bì nhựa"] },
        { name: "Lon sữa", type: "recyclable", desc: "Ép dẹt.", main: ["lon sữa"] },
        { name: "Kim loại vụn", type: "recyclable", desc: "Thu gom riêng.", main: ["kim loại"] },
        { name: "Dây điện cũ", type: "recyclable", desc: "Tái chế kim loại.", main: ["dây điện"] },
        { name: "Vỏ hộp thiếc", type: "recyclable", desc: "Làm sạch.", main: ["thiếc"] },
        { name: "Vỏ lon bia", type: "recyclable", desc: "Rửa sạch, ép dẹt trước khi bỏ.", main: ["bia", "lon bia", "vỏ bia"] },
        { name: "Lon nước ngọt", type: "recyclable", desc: "Rửa sạch, ép dẹt.", main: ["lon nước", "nước ngọt", "lon"] },
        { name: "Chai nhựa", type: "recyclable", desc: "Rửa sạch, bỏ nắp, ép nhẹ.", main: ["chai nhựa", "chai nước", "chai", "nhựa"] },
        { name: "Vỏ hộp", type: "recyclable", desc: "Rửa sạch, cắt nắp, ép phẳng.", main: ["hộp"] },
        { name: "Giấy A4", type: "recyclable", desc: "Giấy sạch, bỏ vào thùng tái chế.", main: ["giấy a4", "a4", "giấy in"] },

        // ================= ORGANIC =================
        { name: "Vỏ táo", type: "organic", desc: "Có thể ủ phân.", main: ["táo", "vỏ táo"] },
        { name: "Vỏ dưa hấu", type: "organic", desc: "Ủ compost.", main: ["dưa hấu"] },
        { name: "Rau thừa", type: "organic", desc: "Phân hủy nhanh.", main: ["rau"] },
        { name: "Thức ăn thừa", type: "organic", desc: "Đậy kín.", main: ["thức ăn"] },
        { name: "Bã cà phê", type: "organic", desc: "Ủ phân tốt.", main: ["cà phê"] },
        { name: "Vỏ trứng", type: "organic", desc: "Giàu canxi.", main: ["trứng"] },
        { name: "Xương cá", type: "organic", desc: "Phân hủy chậm.", main: ["xương cá"] },
        { name: "Xương gà", type: "organic", desc: "Có thể ủ.", main: ["xương gà"] },
        { name: "Vỏ khoai", type: "organic", desc: "Ủ phân.", main: ["khoai"] },
        { name: "Cỏ cắt", type: "organic", desc: "Ủ compost.", main: ["cỏ"] },
        { name: "Hoa héo", type: "organic", desc: "Phân hủy tự nhiên.", main: ["hoa"] },
        { name: "Lá khô", type: "organic", desc: "Ủ phân.", main: ["lá khô"] },
        { name: "Vỏ xoài", type: "organic", desc: "Ủ phân.", main: ["xoài"] },
        { name: "Vỏ dứa", type: "organic", desc: "Ủ compost.", main: ["dứa"] },
        { name: "Vỏ chuối", type: "organic", desc: "Bỏ vào thùng hữu cơ để ủ phân.", main: ["chuối", "vỏ chuối"] },
        { name: "Vỏ cam", type: "organic", desc: "Bỏ vào thùng hữu cơ.", main: ["cam", "quýt", "vỏ cam"] },
        { name: "Cơm thừa", type: "organic", desc: "Đậy kín tránh ruồi.", main: ["cơm", "cơm thừa"] },
        { name: "Lá cây", type: "organic", desc: "Có thể ủ phân.", main: ["lá", "lá cây"] },

        // ================= RESIDUAL =================
        { name: "Bóng đèn LED", type: "residual", desc: "Không tái chế thường.", main: ["đèn led"] },
        { name: "Bóng đèn sợi đốt", type: "residual", desc: "Bỏ riêng.", main: ["đèn sợi đốt"] },
        { name: "Ống tiêm", type: "residual", desc: "Nguy hiểm sinh học.", main: ["ống tiêm"] },
        { name: "Bỉm", type: "residual", desc: "Không tái chế.", main: ["tã", "bỉm"] },
        { name: "Giấy vệ sinh", type: "residual", desc: "Không tái chế.", main: ["vệ sinh"] },
        { name: "Khăn giấy bẩn", type: "residual", desc: "Không tái chế.", main: ["khăn giấy"] },
        { name: "Vỏ snack", type: "residual", desc: "Nhựa nhiều lớp.", main: ["snack"] },
        { name: "Bao bì mì gói", type: "residual", desc: "Khó tái chế.", main: ["mì gói"] },
        { name: "Găng tay y tế", type: "residual", desc: "Nguy cơ sinh học.", main: ["găng tay"] },
        { name: "Bàn chải đánh răng", type: "residual", desc: "Nhựa hỗn hợp.", main: ["bàn chải"] },
        { name: "Đĩa CD", type: "residual", desc: "Khó tái chế.", main: ["cd"] },
        { name: "Pin sạc", type: "residual", desc: "Cần xử lý riêng.", main: ["pin sạc"] },
        { name: "Adapter hỏng", type: "residual", desc: "Rác điện tử.", main: ["adapter"] },
        { name: "Tai nghe hỏng", type: "residual", desc: "Rác điện tử.", main: ["tai nghe"] },
        { name: "Pin cũ", type: "residual", desc: "Chứa kim loại nặng, cần xử lý riêng.", main: ["pin", "pin cũ"] },
        { name: "Đèn huỳnh quang", type: "residual", desc: "Chứa thủy ngân.", main: ["đèn", "huỳnh quang"] },
        { name: "Khẩu trang", type: "residual", desc: "Có nguy cơ sinh học.", main: ["khẩu trang", "mặt nạ"] },
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

        Object.values(cards).forEach(card => {
            card.classList.remove('active');
        });

        Object.values(icons).forEach(icon => {

            icon.classList.remove(
                'active-recyclable',
                'active-organic',
                'active-residual',
                'bg-primary-container',
                'text-on-primary-container',
                'bg-tertiary-container',
                'text-on-tertiary-container',
                'bg-error-container',
                'text-on-error-container'
            );

            icon.classList.add(
                'bg-surface-container-highest',
                'text-outline'
            );
        });

        removeResult();
    }

    // ================= ACTIVE CARD =================
    function activateCard(category) {

        const card = cards[category];
        const icon = icons[category];

        if (!card || !icon) return;

        card.classList.add('active');

        if (category === 'recyclable') {

            icon.classList.add(
                'bg-primary-container',
                'text-on-primary-container',
                'active-recyclable'
            );

        } else if (category === 'organic') {

            icon.classList.add(
                'bg-tertiary-container',
                'text-on-tertiary-container',
                'active-organic'
            );

        } else {

            icon.classList.add(
                'bg-error-container',
                'text-on-error-container',
                'active-residual'
            );
        }
    }

    // ================= FIND ITEM =================
    function findWasteItem(input) {

        input = input.toLowerCase();

        for (let item of wasteData) {

            for (let keyword of item.main) {

                if (input.includes(keyword)) {
                    return item;
                }
            }
        }

        return null;
    }

    // ================= LABEL =================
    function getLabel(type) {

        if (type === 'recyclable') {
            return "Tái chế ♻️";
        }

        if (type === 'organic') {
            return "Hữu cơ 🌱";
        }

        return "Rác vô cơ ⚠️";
    }

    // ================= SHOW RESULT =================
    function showResult(item) {

        removeResult();

        const resultDiv = document.createElement('div');

        resultDiv.id = "result-box";

        resultDiv.className =
            "mt-10 p-6 rounded-xl bg-surface-container shadow-lg text-center animate-fadeIn";

        resultDiv.innerHTML = `
            <h3 class="text-2xl font-bold mb-2">
                ${item.name}
            </h3>

            <p class="text-on-surface-variant mb-2">
                ${item.desc}
            </p>

            <span class="font-semibold text-primary">
                Phân loại: ${getLabel(item.type)}
            </span>
        `;

        document.querySelector('section.relative')
            .appendChild(resultDiv);
    }

    // ================= INVALID RESULT =================
    // ================= INVALID RESULT =================
    function showInvalidResult(input) {

        removeResult();

        const resultDiv = document.createElement('div');

        resultDiv.id = "result-box";

        // UI đẹp hơn + dễ nhìn hơn
        resultDiv.className =
            "mt-10 p-6 rounded-2xl border border-red-300 bg-red-50 shadow-xl text-center animate-fadeIn";

        resultDiv.innerHTML = `
        <div class="flex flex-col items-center gap-3">

            <div class="text-5xl">
                ⚠️
            </div>

            <h3 class="text-2xl font-bold text-red-600">
                Không tìm thấy
            </h3>

            <p class="text-gray-700 text-lg">
                "${input}" không tồn tại trong hệ thống phân loại rác.
            </p>

        </div>
    `;

        document.querySelector('section.relative')
            .appendChild(resultDiv);
    }

    // ================= REMOVE RESULT =================
    function removeResult() {

        const old = document.getElementById('result-box');

        if (old) {
            old.remove();
        }
    }

    // ================= MAIN =================
    function classifyWaste() {

        const inputVal = searchInput.value.trim();

        // INPUT RỖNG
        if (!inputVal) {

            resetAll();

            showInvalidResult("Bạn chưa nhập dữ liệu");

            return;
        }

        const item = findWasteItem(inputVal);

        // TÌM THẤY
        if (item) {

            resetAll();

            activateCard(item.type);

            showResult(item);

            // SAVE SERVER
            fetch("http://localhost:3000/save", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    item: item.name,
                    category: item.type
                })

            })
                .then(res => res.text())
                .then(data => console.log("SERVER:", data))
                .catch(err => console.error("ERROR:", err));

        } else {

            resetAll();

            showInvalidResult(inputVal);
        }
    }

    // ================= EVENTS =================
    classifyBtn.addEventListener('click', classifyWaste);

    searchInput.addEventListener('keypress', function (e) {

        if (e.key === 'Enter') {
            classifyWaste();
        }
    });

    // QUICK SEARCH
    window.quickSearch = function (term) {

        searchInput.value = term;

        classifyWaste();
    };

    // INIT
    resetAll();
});

// ================= MOBILE MENU =================
const toggle = document.getElementById("menu-toggle");

const menu = document.getElementById("mobile-menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});