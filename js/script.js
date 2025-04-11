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

function switchLanguage(lang) {
  const pageDescription = document.getElementById('page-description');
  if (lang === 'ru') {
    pageDescription.textContent = 'Этот сайт размещен на GitHub Pages.';
  } else if (lang === 'en') {
    pageDescription.textContent = 'This site is hosted with GitHub Pages.';
  }
}
