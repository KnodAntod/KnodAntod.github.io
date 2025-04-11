const tabs = {
  tab1: [],
  tab2: {
    title: "Люди",
    items: [
      { name: "Зомбированный", code: "ZMB", price: 100 },
      { name: "Сталкер", code: "STL", price: 200 },
      { name: "Бандит", code: "BND", price: 150 },
      { name: "Ренегат", code: "RNG", price: 300 },
      { name: "Чистое небо", code: "CHN", price: 250 },
      { name: "Долг", code: "DLG", price: 180 },
      { name: "Свобода", code: "SVB", price: 220 },
      { name: "Военный", code: "VNY", price: 400 },
      { name: "Наемник", code: "NEM", price: 350 },
      { name: "Монолит", code: "MNT", price: 500 },
      { name: "Грех", code: "GRH", price: 450 },
      { name: "ИИГ", code: "IIG", price: 600 },
    ],
  },
  tab3: {
    title: "Мутанты",
    items: [
      { name: "Собака", code: "DOG", price: 100 },
      { name: "Псевдособака", code: "PDG", price: 200 },
      { name: "Полтергейст", code: "PLT", price: 300 },
      { name: "Бюрер", code: "BRR", price: 400 },
      { name: "Пси-собака", code: "PSD", price: 500 },
      { name: "Кровосос", code: "KRS", price: 600 },
      { name: "Химера", code: "HMR", price: 700 },
      { name: "Контролер", code: "KTR", price: 800 },
      { name: "Псевдогигант", code: "PGT", price: 900 },
      { name: "Библиотекарь", code: "BLB", price: 1000 },
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

let currentSortOrder = 'asc';
let isCopyLocked = false;

function sortItemsByPrice(items, order) {
  return [...items].sort((a, b) => 
    order === 'asc' ? a.price - b.price : b.price - a.price
  );
}

function updatePriceHeader() {
  const header = document.querySelector('.price-header');
  header.setAttribute('data-order', currentSortOrder);
}

async function copyCode(code, btn) {
  if (isCopyLocked) return;
  
  try {
    await navigator.clipboard.writeText(code);
    const originalText = btn.textContent;
    btn.textContent = "Скопировано!";
    isCopyLocked = true;

    const handler = () => {
      btn.textContent = originalText;
      isCopyLocked = false;
      btn.removeEventListener('mouseleave', handler);
    };
    
    btn.addEventListener('mouseleave', handler);
  } catch (err) {
    console.error('Ошибка копирования:', err);
  }
}

function calculateSum(input) {
  const row = input.closest("tr");
  const price = parseInt(row.querySelector(".price-column").textContent.replace(/\D/g, ""));
  
  let quantity = parseInt(input.value) || 0;
  quantity = Math.max(Math.min(quantity, 1000), 0);
  input.value = quantity;

  let sum = price * quantity;
  sum = Math.min(sum, 1000000);
  sum = Math.max(sum, 0);

  const sumElement = row.querySelector(".sum-container span");
  sumElement.textContent = sum.toLocaleString() + " ₽";
}

function createTableRow(item) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      ${item.name}
      <span class="item-code">[${item.code}]</span>
      <button class="copy-btn" 
              onclick="copyCode('${item.code}', this)"
              ${isCopyLocked ? 'disabled' : ''}>
        Копировать
      </button>
    </td>
    <td class="price-column">${item.price} ₽</td>
    <td><input type="number" placeholder="0" min="0" max="1000"></td>
    <td>
      <div class="sum-container">
        <span>0 ₽</span>
      </div>
    </td>
    <td>
      <a href="https://www.donationalerts.com/r/sanchez69fullyoutube" target="_blank" class="payment-btn">
        <img src="assets/img/DA.png" alt="DonationAlerts">
      </a>
      <a href="https://new.donatepay.ru/@Sanchez69full" target="_blank" class="payment-btn">
        <img src="assets/img/DP.ico" alt="DonatePay">
      </a>
    </td>
  `;
  const input = row.querySelector("input");
  input.addEventListener("input", () => calculateSum(input));
  return row;
}

function renderTable(items, isAllTab = false) {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  if (isAllTab) {
    const groupedItems = {};
    
    Object.keys(tabs).forEach(key => {
      if (key !== 'tab1') {
        groupedItems[key] = items.filter(item => 
          tabs[key].items.some(origItem => origItem.code === item.code)
        );
      }
    });

    Object.entries(groupedItems).forEach(([key, items], index) => {
      const sectionTitle = document.createElement("tr");
      sectionTitle.innerHTML = `<td colspan="5" class="tab-separator">${tabs[key].title}</td>`;
      tableBody.appendChild(sectionTitle);

      items.forEach(item => {
        tableBody.appendChild(createTableRow(item));
      });
      
      if (index !== Object.keys(groupedItems).length - 1) {
        const divider = document.createElement("tr");
        divider.innerHTML = `<td colspan="5" class="section-divider"></td>`;
        tableBody.appendChild(divider);
      }
    });
  } else {
    const activeTab = document.querySelector('.tab-button.active').dataset.tab;
    const separatorRow = document.createElement("tr");
    separatorRow.innerHTML = `<td colspan="5" class="tab-separator">${tabs[activeTab].title}</td>`;
    tableBody.appendChild(separatorRow);

    items.forEach(item => {
      tableBody.appendChild(createTableRow(item));
    });
  }
}

function handlePriceSort() {
  currentSortOrder = currentSortOrder === 'asc' ? 'desc' : 'asc';
  updatePriceHeader();
  
  const activeTab = document.querySelector('.tab-button.active').dataset.tab;
  
  if (activeTab === 'tab1') {
    const allItems = [];
    Object.values(tabs).forEach(tab => {
      if (tab.items) allItems.push(...tab.items);
    });
    const sorted = sortItemsByPrice(allItems, currentSortOrder);
    renderTable(sorted, true);
  } else {
    const sorted = sortItemsByPrice(tabs[activeTab].items, currentSortOrder);
    renderTable(sorted);
  }
}

function switchTab(tab) {
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => button.classList.remove("active"));
  const activeButton = document.querySelector(`.tab-button[data-tab="${tab}"]`);
  activeButton.classList.add("active");

  if (tab === "tab1") {
    const allItems = [];
    Object.values(tabs).forEach(tab => {
      if (tab.items) allItems.push(...tab.items);
    });
    renderTable(sortItemsByPrice(allItems, currentSortOrder), true);
  } else {
    renderTable(sortItemsByPrice(tabs[tab].items, currentSortOrder));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('.price-header').addEventListener('click', handlePriceSort);
  updatePriceHeader();
  switchTab("tab2");
});
