const tabs = {
  tab1: [], // "Все"
  tab2: {
    title: "Люди",
    items: [
      { name: "Зомбированный", code: "ZMB", price: 100 },
      { name: "Сталкер", code: "STL", price: 200 },
      { name: "Бандит", code: "BND", price: 150 },
      { name: "Ренегат", code: "RNG", price: 300 },
      { name: "ЧН", code: "CHN", price: 250 },
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

function copyCode(code) {
  navigator.clipboard.writeText(code);
  alert(`Код "${code}" скопирован в буфер обмена!`);
}

function calculateSum(input) {
  const row = input.closest("tr");
  const price = parseInt(row.querySelector(".price-column").textContent.replace(/\D/g, ""));
  
  // Ограничение количества
  let quantity = parseInt(input.value) || 0;
  quantity = Math.max(quantity, 0);
  input.value = quantity;

  // Ограничение суммы
  let sum = price * quantity;
  sum = Math.min(sum, 100000);
  sum = Math.max(sum, 0);

  const sumElement = row.querySelector(".sum-container span");
  sumElement.textContent = sum.toLocaleString() + " ₽";
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
        sectionTitle.innerHTML = `<td colspan="5" class="tab-separator">${tabs[key].title}</td>`;
        tableBody.appendChild(sectionTitle);

        tabs[key].items.forEach((item) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>
              ${item.name}
              <span class="item-code">[${item.code}]</span>
              <button class="copy-btn" onclick="copyCode('${item.code}')">Копировать</button>
            </td>
            <td class="price-column">${item.price} ₽</td>
            <td><input type="number" placeholder="0" min="0"></td>
            <td>
              <div class="sum-container">
                <span>0 ₽</span>
              </div>
            </td>
            <td></td>
          `;
          const input = row.querySelector("input");
          input.addEventListener("input", () => calculateSum(input));
          tableBody.appendChild(row);
        });

        if (key !== Object.keys(tabs)[Object.keys(tabs).length - 1]) {
          const divider = document.createElement("tr");
          divider.innerHTML = `<td colspan="5" class="section-divider"></td>`;
          tableBody.appendChild(divider);
        }
      }
    });
  } else {
    const separatorRow = document.createElement("tr");
    separatorRow.innerHTML = `<td colspan="5" class="tab-separator">${tabs[tab].title}</td>`;
    tableBody.appendChild(separatorRow);

    tabs[tab].items.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>
          ${item.name}
          <span class="item-code">[${item.code}]</span>
          <button class="copy-btn" onclick="copyCode('${item.code}')">Копировать</button>
        </td>
        <td class="price-column">${item.price} ₽</td>
        <td><input type="number" placeholder="0" min="0"></td>
        <td>
          <div class="sum-container">
            <span>0 ₽</span>
          </div>
        </td>
        <td></td>
      `;
      const input = row.querySelector("input");
      input.addEventListener("input", () => calculateSum(input));
      tableBody.appendChild(row);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  switchTab("tab2"); // Начальная вкладка "Люди"
});
