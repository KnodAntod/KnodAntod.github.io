// Функция для переключения вкладок
function switchTab(tabId) {
  const tabs = document.querySelectorAll('.table-section');
  const buttons = document.querySelectorAll('.tab-button');

  // Скрываем все вкладки
  tabs.forEach(tab => tab.classList.remove('active'));

  // Делаем активной нужную вкладку
  document.getElementById(tabId).classList.add('active');

  // Меняем активную кнопку вкладки
  buttons.forEach(button => button.classList.remove('active'));
  document.querySelector(`[onclick="switchTab('${tabId}')"]`).classList.add('active');
}

// Функция для обновления значения в таблице
function updateValue(id) {
  const value = document.getElementById(id).value;
  console.log(`Updated value for ${id}: ${value}`);
}

// Функция для смены языка
function changeLanguage() {
  const language = document.getElementById('language-select').value;

  // Логика смены языка (можно расширить, подключив библиотеку для локализации или вручную менять тексты)
  if (language === 'ru') {
    document.getElementById('title').textContent = 'S69F Интерактив';
    document.getElementById('description').textContent = 'Этот сайт размещен с помощью GitHub Pages.';
    
    // Перевод вкладок на русский
    document.querySelectorAll('.tab-button')[0].textContent = 'Все';
    document.querySelectorAll('.tab-button')[1].textContent = 'Люди';
    document.querySelectorAll('.tab-button')[2].textContent = 'Мутанты';
    document.querySelectorAll('.tab-button')[3].textContent = 'Хорошие события';
    document.querySelectorAll('.tab-button')[4].textContent = 'Нейтральные события';
    document.querySelectorAll('.tab-button')[5].textContent = 'Плохие события';
  } else if (language === 'en') {
    document.getElementById('title').textContent = 'S69F Interactive';
    document.getElementById('description').textContent = 'This website is hosted using GitHub Pages.';
    
    // Перевод вкладок на английский
    document.querySelectorAll('.tab-button')[0].textContent = 'All';
    document.querySelectorAll('.tab-button')[1].textContent = 'People';
    document.querySelectorAll('.tab-button')[2].textContent = 'Mutants';
    document.querySelectorAll('.tab-button')[3].textContent = 'Good Events';
    document.querySelectorAll('.tab-button')[4].textContent = 'Neutral Events';
    document.querySelectorAll('.tab-button')[5].textContent = 'Bad Events';
  }
}

// Функция для изменения текста в таблицах при переключении вкладок
function changeTableContent(tabId) {
  switchTab(tabId);
  if (tabId === 'tab1') {
    // Все
    document.getElementById('table-body').innerHTML = '';  // Для "Все" таблица будет пустой
  } else if (tabId === 'tab2') {
    // Люди
    document.getElementById('table-body-people').innerHTML = `
      <tr><td>Зомбированный</td><td><input type="number" id="people1" placeholder="Введите кол-во" onchange="updateValue('people1')" min="0"></td><td><input type="number" id="price1" placeholder="Цена" min="0" style="width: 40px;"></td></tr>
      <tr><td>Сталкер</td><td><input type="number" id="people2" placeholder="Введите кол-во" onchange="updateValue('people2')" min="0"></td><td><input type="number" id="price2" placeholder="Цена" min="0" style="width: 40px;"></td></tr>
      <tr><td>Бандит</td><td><input type="number" id="people3" placeholder="Введите кол-во" onchange="updateValue('people3')" min="0"></td><td><input type="number" id="price3" placeholder="Цена" min="0" style="width: 40px;"></td></tr>
      <!-- Добавьте остальные элементы... -->
    `;
  } else if (tabId === 'tab3') {
    // Мутанты
    document.getElementById('table-body-mutants').innerHTML = `
      <tr><td>Собака</td><td><input type="number" id="mutant1" placeholder="Введите кол-во" onchange="updateValue('mutant1')" min="0"></td><td><input type="number" id="price1" placeholder="Цена" min="0" style="width: 40px;"></td></tr>
      <tr><td>Псевдособака</td><td><input type="number" id="mutant2" placeholder="Введите кол-во" onchange="updateValue('mutant2')" min="0"></td><td><input type="number" id="price2" placeholder="Цена" min="0" style="width: 40px;"></td></tr>
      <!-- Добавьте остальные элементы... -->
    `;
  } else if (tabId === 'tab4') {
    // Хорошие события
    document.getElementById('table-body-good-events').innerHTML = `
      <tr><td>[ВКД]</td><td><input type="number" id="event1" placeholder="Введите кол-во" onchange="updateValue('event1')" min="0"></td><td><input type="number" id="price1" placeholder="Цена" min="0" style="width: 40px;"></td></tr>
      <!-- Добавьте остальные элементы... -->
    `;
  }
}

// Инициализация таблицы по умолчанию
window.onload = function() {
  changeTableContent('tab1');
  changeLanguage();
}
