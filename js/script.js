const translations = {
  ru: {
    title: "S69F Интерактив",
    subtitle: "Этот сайт размещён через GitHub Pages.",
    value: "Сумма",
    placeholder: "Введите кол-во",
    tabs: ["Все", "Люди", "Мутанты", "Хорошие события", "Нейтральные события", "Плохие события"]
  },
  en: {
    title: "S69F Interactive",
    subtitle: "This site is hosted with GitHub Pages.",
    value: "Amount",
    placeholder: "Enter value",
    tabs: ["All", "People", "Mutants", "Good Events", "Neutral Events", "Bad Events"]
  }
};

const tabKeys = ["all", "people", "mutants", "good", "neutral", "bad"];
const tableContainer = document.getElementById("tables-container");
let currentLanguage = "ru";

// Создание таблиц
function createTables() {
  tableContainer.innerHTML = "";

  tabKeys.forEach((key, index) => {
    const section = document.createElement("div");
    section.classList.add("table-section");
    section.id = `section-${key}`;

    const table = document.createElement("table");
    table.className = "data-table";

    const thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>${translations[currentLanguage].tabs[index] === "Все" ? "Имя/Название" : "Имя/Название"}</th>
        <th id="value-header">${translations[currentLanguage].value}</th>
      </tr>
    `;

    const tbody = document.createElement("tbody");
    for (let i = 1; i <= 10; i++) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>Slot ${i}</td>
        <td>
          <input type="number"
            placeholder="${translations[currentLanguage].placeholder}"
            min="0"
            style="width: 100px; padding: 5px; background-color: #555; color: white; border: 1px solid #666; border-radius: 5px; text-align: center; margin-right: 20px; -moz-appearance: textfield; -webkit-appearance: none;">
        </td>
      `;
      tbody.appendChild(tr);
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    section.appendChild(table);
    tableContainer.appendChild(section);
  });
}

// Переключение таба
function switchTab(tabKey) {
  const sections = document.querySelectorAll(".table-section");
  sections.forEach(section => {
    section.classList.remove("active");
  });

  if (tabKey === "all") {
    sections.forEach(section => {
      section.classList.add("active");
    });
  } else {
    const section = document.getElementById(`section-${tabKey}`);
    if (section) section.classList.add("active");
  }
}

// Смена языка
function changeLanguage() {
  const select = document.getElementById("language-select");
  currentLanguage = select.value;

  document.documentElement.lang = currentLanguage;
  document.getElementById("site-title").textContent = translations[currentLanguage].title;
  document.getElementById("site-subtitle").textContent = translations[currentLanguage].subtitle;

  createTables();
  switchTab("all"); // Показываем все при смене языка
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
  createTables();
  switchTab("all");
});
