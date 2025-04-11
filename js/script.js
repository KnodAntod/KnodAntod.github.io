function updateValue(id) {
  const input = document.getElementById(id);
  console.log(`Value for ${id}:`, input.value);
}

function switchTab(tabId) {
  console.log(`Switched to: ${tabId}`);
}

function switchLanguage() {
  const lang = document.getElementById("language-switcher").value;
  document.documentElement.lang = lang;

  const elements = document.querySelectorAll("[data-ru]");
  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  const pageTitle = document.getElementById("page-title");
  pageTitle.textContent = lang === "ru" ? "S69F Интерактив" : "S69F Interactive";

  const amountHeader = document.getElementById("amount-header");
  amountHeader.textContent = lang === "ru" ? "Сумма" : "Amount";

  const inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach(input => {
    input.placeholder = lang === "ru" ? "Введите кол-во" : "Enter amount";
  });
}

// Установка языка по умолчанию при загрузке
document.addEventListener("DOMContentLoaded", () => {
  switchLanguage();
});
