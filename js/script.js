const tabs = {
  tab1: [],
  tab2: {
    title: "Люди",
    items: [
      { name: "Зомбированный", code: "ZMB", price: 23 },
      { name: "Сталкер", code: "STL", price: 29 },
      { name: "Бандит", code: "BND", price: 29 },
      { name: "Ренегат", code: "RNG", price: 30 },
      { name: "Чистое небо", code: "CHN", price: 33 },
      { name: "Долг", code: "DLG", price: 40 },
      { name: "Свобода", code: "SVB", price: 40 },
      { name: "Военный", code: "VNY", price: 45 },
      { name: "Наемник", code: "NEM", price: 54 },
      { name: "Монолит", code: "MNT", price: 65 },
      { name: "Грех", code: "GRH", price: 70 },
      { name: "ИИГ", code: "IIG", price: 77 },
    ],
  },
  tab3: {
    title: "Мутанты",
    items: [
      { name: "Собака", code: "DOG", price: 15 },
      { name: "Псевдособака", code: "PDG", price: 47 },
      { name: "Полтергейст", code: "PLT", price: 200 },
      { name: "Бюрер", code: "BRR", price: 101 },
      { name: "Пси-собака", code: "PSD", price: 121 },
      { name: "Кровосос", code: "KRS", price: 125 },
      { name: "Химера", code: "HMR", price: 199 },
      { name: "Контролер", code: "KTR", price: 666 },
      { name: "Псевдогигант", code: "PGT", price: 404 },
      { name: "Библиотекарь", code: "BLB", price: 500 },
    ],
  },
  tab4: {
    title: "Хорошие события",
    items: [
      { name: "[ВКД]", code: "VKD", price: 50 },
      { name: "[СТЙ]", code: "STY", price: 75 },
      { name: "[ХИЛ]", code: "HIL", price: 100 },
    ],
  },
  tab5: {
    title: "Нейтральные события",
    items: Array.from({ length: 10 }, (_, i) => ({
      name: `Событие ${i + 1}`,
      code: `NE${i + 1}`,
      price: (i + 1) * 50,
    })),
  },
  tab6: {
    title: "Плохие события",
    items: Array.from({ length: 10 }, (_, i) => ({
      name: `Событие ${i + 1}`,
      code: `PE${i + 1}`,
      price: (i + 1) * 75,
    })),
  },
};

function createTableRow(item) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <div class="copy-container">
        <span>${item.name}</span>
        <span class="item-code">[${item.code}]</span>
        <button class="copy-btn" onclick="copyCode('${item.code}', this)">
          <img src="assets/img/icon_copy.svg" alt="Копировать">
        </button>
      </div>
    </td>
    <td class="price-column">${item.price}</td>
    <td>
      <div class="quantity-control">
        <button class="quantity-btn" onclick="adjustQuantity(this, -1)">-</button>
        <input type="number" class="quantity-input" value="0" min="0" max="1000"
               oninput="this.value = this.value.replace(/[^0-9]/g, ''); if (this.value > 1000) this.value = 1000;"
               onchange="calculateSum(this)">
        <button class="quantity-btn" onclick="adjustQuantity(this, 1)">+</button>
      </div>
    </td>
    <td><div class="sum-container"><span>0</span></div></td>
    <td>
      <div style="display: flex; justify-content: center;">
        <a href="https://www.donationalerts.com/r/sanchez69fullyoutube" target="_blank" class="payment-btn">
          <img src="assets/img/DA.ico" alt="DA">
        </a>
        <a href="https://new.donatepay.ru/@Sanchez69full" target="_blank" class="payment-btn">
          <img src="assets/img/DP.ico" alt="DP">
        </a>
      </div>
    </td>
  `;
  return row;
}

function calculateSum(input) {
  const row = input.closest("tr");
  const price = parseInt(row.querySelector(".price-column").textContent.replace(/\D/g, ""));
  const quantity = Math.min(Math.max(parseInt(input.value) || 0, 0), 1000);
  input.value = quantity;
  const sum = Math.min(price * quantity, 1_000_000);
  row.querySelector(".sum-container span").textContent = sum.toLocaleString();
}

function adjustQuantity(btn, delta) {
  const input = btn.parentNode.querySelector('.quantity-input');
  input.value = Math.max((parseInt(input.value) || 0) + delta, 0);
  calculateSum(input);
}

async function copyCode(code, btn) {
  try {
    await navigator.clipboard.writeText(code);
    const icon = btn.querySelector('img');
    icon.src = 'assets/img/icon_copy_plus.svg';
    setTimeout(() => (icon.src = 'assets/img/icon_copy.svg'), 1000);
  } catch (err) {
    console.error("Ошибка копирования:", err);
  }
}

function renderTable(items, isAllTab = false) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  if (isAllTab) {
    Object.entries(tabs).forEach(([key, tab]) => {
      if (key === "tab1" || !tab.items) return;

      const groupRow = document.createElement("tr");
      const cell = document.createElement("td");
      cell.colSpan = 5;
      cell.innerHTML = `<div class="group-label">${tab.title}</div>`;
      groupRow.appendChild(cell);
      tableBody.appendChild(groupRow);

      tab.items.forEach(item => tableBody.appendChild(createTableRow(item)));
    });
  } else {
    items.forEach(item => tableBody.appendChild(createTableRow(item)));
  }
}

function switchTab(tab) {
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.tab-button[data-tab="${tab}"]`).classList.add("active");

  if (tab === "tab1") {
    const allItems = Object.values(tabs)
      .filter(t => t.items)
      .flatMap(t => t.items);
    renderTable(allItems, true);
  } else {
    renderTable(tabs[tab].items);
  }
}

document.addEventListener("DOMContentLoaded", () => switchTab("tab2"));
