function switchTab(tabId) {
  // Скрыть все вкладки
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.style.display = 'none');

  // Показать выбранную вкладку
  const selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.style.display = 'block';
  }
}

function updateValue(slotId) {
  const slotValue = document.getElementById(slotId).value;
  console.log('Value for ' + slotId + ': ' + slotValue);
}

function switchLanguage() {
  const selectedLang = document.getElementById('language-select').value;
  const pageDescription = document.getElementById('page-description');
  const tabButtons = document.querySelectorAll('.tab-button');
  const donateButtons = document.querySelectorAll('.donate-button');

  if (selectedLang === 'ru') {
    pageDescription.textContent = 'Этот сайт размещен на GitHub Pages.';
    tabButtons.forEach(button => {
      button.textContent = button.textContent === "All" ? "Все" : button.textContent;
    });
    donateButtons.forEach(button => {
      button.textContent = 'Пожертвовать';
    });
  } else if (selectedLang === 'en') {
    pageDescription.textContent = 'This site is hosted with GitHub Pages.';
    tabButtons.forEach(button => {
      button.textContent = button.textContent === "Все" ? "All" : button.textContent;
    });
    donateButtons.forEach(button => {
      button.textContent = 'Donate';
    });
  }
}
