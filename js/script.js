// Функция для переключения вкладок
function switchTab(tabName) {
  // Скрыть все табы
  let tabs = document.querySelectorAll('.data-table tbody');
  tabs.forEach(tab => {
    tab.style.display = 'none';
  });

  // Показать нужную вкладку
  let selectedTab = document.getElementById(tabName);
  if (selectedTab) {
    selectedTab.style.display = 'table-row-group';
  }

  // Изменение значений в таблице (например, для вкладки UBNC)
  if (tabName === 'tab1') {
    updateValues('UBNC', 2500);
  }
}

// Функция для обновления значений в таблице
function updateValues(prefix, value) {
  for (let i = 1; i <= 10; i++) {
    let slotId = 'slot' + i;
    let element = document.getElementById(slotId);
    if (element) {
      element.innerText = `${prefix} ${value + i * 10}`;
    }
  }
}

// Инициализация вкладки по умолчанию
switchTab('tab1');
