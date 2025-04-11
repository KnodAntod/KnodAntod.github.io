const tabs = {
  tab1: [], // "Все"
  tab2: {
    title: "Люди",
    items: [
      { name: "Зомбированный", price: 100 },
      { name: "Сталкер", price: 200 },
      { name: "Бандит", price: 150 },
      { name: "Ренегат", price: 300 },
      { name: "ЧН", price: 250 },
      { name: "Долг", price: 180 },
      { name: "Свобода", price: 220 },
      { name: "Военный", price: 400 },
      { name: "Наемник", price: 350 },
      { name: "Монолит", price: 500 },
      { name: "Грех", price: 450 },
      { name: "ИИГ", price: 600 },
    ],
  },
  tab3: {
    title: "Мутанты",
    items: [
      { name: "Собака", price: 100 },
      { name: "Псевдособака", price: 200 },
      { name: "Полтергейст", price: 300 },
      { name: "Бюрер", price: 400 },
      { name: "Пси-собака", price: 500 },
      { name: "Кровосос", price: 600 },
      { name: "Химера", price: 700 },
      { name: "Контролер", price: 800 },
      { name: "Псевдогигант", price: 900 },
      { name: "Библиотекарь", price: 1000 },
    ],
  },
  tab4: {
    title: "Хорошие события",
    items: [
      { name: "[ВКД]", price: 50 },
      { name: "[СТЙ]", price: 75 },
      { name: "[ХИЛ]", price: 100 },
    ],
  },
  tab5: {
    title: "Нейтральные события",
    items: Array.from({ length: 10 }, (_, i) => ({
      name: `Событие ${i + 1}`,
      price: (i + 1) * 50,
    })),
  },
  tab6: {
    title: "Плохие события",
    items: Array.from({ length: 10 }, (_, i) => ({
      name: `Событие ${i + 1}`,
      price: (i + 1) * 75,
    })),
  },
};

function calculateSum(input) {
  const row = input.closest("tr");
  const priceText = row.querySelector(".price-column").textContent;
  const price = parseInt(priceText.replace("Цена: ", "").replace(" ₽", ""));
  const quantity = parseInt(input.value) || 0;
  const sumInput = row.querySelector("td:last-child input");
  sumInput.value = price * quantity;
}

function switchTab(tab) {
  const tableBody = document.getElementById("table-body");
  const tabButtons = document.querySelectorAll(".tab-button");

  tabButtons.forEach((button) => button.classList.remove("active"));
  const activeButton = document.querySelector(`.tab-button[data-tab="${tab}"]`);
  activeButton.classList.add("active");

  tableBody.innerHTML = "";

  if (tab === "tab1") {
    Object.keys(tabs).forEach((key) => {
      if (key !== "tab1") {
        const sectionTitle = document.createElement("tr");
        sectionTitle.innerHTML = `<td colspan="4" class="tab-separator">${tabs[key].title}</td>`;
        tableBody.appendChild(sectionTitle);

        tabs[key].items.forEach((item) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${item.name}</td>
            <td class="price-column">Цена: ${item.price} ₽</td>
            <td><input type="number" placeholder="Введите кол-во" min="0"></td>
            <td>
              <div class="sum-container">
                <input type="number" placeholder="Сумма" min="0" readonly>
                <span class="currency">₽</span>
              </div>
            </td>
          `;
          const input = row.querySelector("input[type='number']");
          input.addEventListener("input", () => calculateSum(input));
          tableBody.appendChild(row);
        });
      }
    });
  } else {
    const separatorRow = document.createElement("tr");
    separatorRow.innerHTML = `<td colspan="4" class="tab-separator">${tabs[tab].title}</td>`;
    tableBody.appendChild(separatorRow);

    tabs[tab].items.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td class="price-column">Цена: ${item.price} ₽</td>
        <td><input type="number" placeholder="Введите кол-во" min="0"></td>
        <td>
          <div class="sum-container">
            <input type="number" placeholder="Сумма" min="0" readonly>
            <span class="currency">₽</span>
          </div>
        </td>
      `;
      const input = row.querySelector("input[type='number']");
      input.addEventListener("input", () => calculateSum(input));
      tableBody.appendChild(row);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  switchTab("tab1"); // По умолчанию открывается "Все"
});
