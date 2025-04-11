const tabs = {
  tab1: [ // "Все"
    // Вкладка "Все" не будет отображать свои слоты
  ],
  tab2: [ // "Люди"
    { name: "Зомбированный", price: "Цена 1" },
    { name: "Сталкер", price: "Цена 2" },
    { name: "Бандит", price: "Цена 3" },
    { name: "Ренегат", price: "Цена 4" },
    { name: "ЧН", price: "Цена 5" },
    { name: "Долг", price: "Цена 6" },
    { name: "Свобода", price: "Цена 7" },
    { name: "Военный", price: "Цена 8" },
    { name: "Наемник", price: "Цена 9" },
    { name: "Монолит", price: "Цена 10" },
    { name: "Грех", price: "Цена 11" },
    { name: "ИИГ", price: "Цена 12" },
  ],
  tab3: [ // "Мутанты"
    { name: "Собака", price: "Цена 1" },
    { name: "Псевдособака", price: "Цена 2" },
    { name: "Полтергейст", price: "Цена 3" },
    { name: "Бюрер", price: "Цена 4" },
    { name: "Пси-собака", price: "Цена 5" },
    { name: "Кровосос", price: "Цена 6" },
    { name: "Химера", price: "Цена 7" },
    { name: "Контролер", price: "Цена 8" },
    { name: "Псевдогигант", price: "Цена 9" },
    { name: "Библиотекарь", price: "Цена 10" },
  ],
  tab4: [ // "Хорошие события"
    { name: "[ВКД]", price: "Цена 1" },
    { name: "[СТЙ]", price: "Цена 2" },
    { name: "[ХИЛ]", price: "Цена 3" },
  ],
  tab5: [ // "Нейтральные события"
    { name: "Событие 1", price: "Цена 1" },
    { name: "Событие 2", price: "Цена 2" },
    { name: "Событие 3", price: "Цена 3" },
    { name: "Событие 4", price: "Цена 4" },
    { name: "Событие 5", price: "Цена 5" },
    { name: "Событие 6", price: "Цена 6" },
    { name: "Событие 7", price: "Цена 7" },
    { name: "Событие 8", price: "Цена 8" },
    { name: "Событие 9", price: "Цена 9" },
    { name: "Событие 10", price: "Цена 10" },
  ],
  tab6: [ // "Плохие события"
    { name: "Событие 1", price: "Цена 1" },
    { name: "Событие 2", price: "Цена 2" },
    { name: "Событие 3", price: "Цена 3" },
    { name: "Событие 4", price: "Цена 4" },
    { name: "Событие 5", price: "Цена 5" },
    { name: "Событие 6", price: "Цена 6" },
    { name: "Событие 7", price: "Цена 7" },
    { name: "Событие 8", price: "Цена 8" },
    { name: "Событие 9", price: "Цена 9" },
    { name: "Событие 10", price: "Цена 10" },
  ],
};

function switchTab(tab) {
  const tableBody = document.getElementById("table-body");
  const tabButtons = document.querySelectorAll(".tab-button");

  // Удаляем подсветку с всех вкладок
  tabButtons.forEach(button => button.classList.remove("active"));

  // Добавляем подсветку на текущую вкладку
  const activeButton = document.querySelector(`.tab-button[data-tab="${tab}"]`);
  activeButton.classList.add("active");

  tableBody.innerHTML = "";

  // Добавляем текстовый разделитель для вкладки
  const tabName = activeButton.textContent;
  const separatorRow = document.createElement("tr");
  separatorRow.innerHTML = `<td colspan="4" class="tab-separator">${tabName}</td>`;
  tableBody.appendChild(separatorRow);

  const selectedTab = tabs[tab] || [];
  selectedTab.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td class="price-column">${item.price}</td>
      <td><input type="number" placeholder="Введите кол-во" min="0"></td>
      <td><input type="number" placeholder="Сумма" min="0" readonly></td>
    `;
    tableBody.appendChild(row);
  });

  // Для вкладки "Все" отображаем все вкладки
  if (tab === "tab1") {
    Object.keys(tabs).forEach(key => {
      if (key !== "tab1") {
        const sectionTitle = document.createElement("tr");
        sectionTitle.innerHTML = `<td colspan="4" class="tab-separator">${key.replace("tab", "")}</td>`;
        tableBody.appendChild(sectionTitle);

        tabs[key].forEach(item => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${item.name}</td>
            <td class="price-column">${item.price}</td>
            <td><input type="number" placeholder="Введите кол-во" min="0"></td>
            <td><input type="number" placeholder="Сумма" min="0" readonly></td>
          `;
          tableBody.appendChild(row);
        });
      }
    });
  }
}

// Инициализация вкладки по умолчанию
document.addEventListener("DOMContentLoaded", () => {
  switchTab("tab2"); // Сразу отображаем вкладку "Люди" по умолчанию
});
