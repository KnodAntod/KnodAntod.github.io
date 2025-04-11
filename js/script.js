// Функция для переключения вкладок
function switchTab(tabName) {
  // Скрыть все строки таблицы по умолчанию
  let rows = document.querySelectorAll('.data-table tbody tr');
  rows.forEach(row => {
    row.style.display = 'none';
  });

  // Показать строки для выбранной вкладки
  switch (tabName) {
    case 'tab1': // Все
      showAllSlots();
      break;
    case 'tab2': // Люди
      updateTableForPeople();
      break;
    case 'tab3': // Мутанты
      updateTableForMutants();
      break;
    case 'tab4': // Хорошие события
      updateTableForGoodEvents();
      break;
    case 'tab5': // Нейтральные события
      updateTableForNeutralEvents();
      break;
    case 'tab6': // Плохие события
      updateTableForBadEvents();
      break;
  }
}

// Показать все слоты
function showAllSlots() {
  let rows = document.querySelectorAll('.data-table tbody tr');
  rows.forEach(row => {
    row.style.display = '';
  });
}

// Обновление таблицы для "Люди"
function updateTableForPeople() {
  updateValues("Люди", 1000);
}

// Обновление таблицы для "Мутанты"
function updateTableForMutants() {
  updateValues("Мутанты", 2000);
}

// Обновление таблицы для "Хорошие события"
function updateTableForGoodEvents() {
  updateValues("Хорошие события", 3000);
}

// Обновление таблицы для "Нейтральные события"
function updateTableForNeutralEvents() {
  updateValues("Нейтральные события", 4000);
}

// Обновление таблицы для "Плохие события"
function updateTableForBadEvents() {
  updateValues("Плохие события", 5000);
}

// Обновление значений в таблице
function updateValues(prefix, value) {
  for (let i = 1; i <= 10; i++) {
    let slotId = 'slot' + i;
    let element = document.getElementById(slotId);
    if (element) {
      element.value = ""; // Убираем изначальные значения
    }
  }
}

// Функция для обновления значения на основе ввода пользователя
function updateValue(slotId) {
  let valueElement = document.getElementById(slotId);
  let value = valueElement.value;
  // Преобразуем в число и обновляем, если число отрицательное, то устанавливаем 0
  value = parseInt(value) || 0;
  if (value < 0) value = 0;
  valueElement.value = value;  // Обновляем поле с числом
}

// Инициализация вкладки по умолчанию
switchTab('tab1');
