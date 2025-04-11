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
    document.getElementById('table-body').innerHTML = `
      <tr><td>Зомбированный</td><td><input type="number" id="people1" placeholder="Введите кол-во" onchange="updateValue('people1')" min="0"></td></tr>
      <tr><td>Сталкер</td><td><input type="number" id="people2" placeholder="Введите кол-во" onchange="updateValue('people2')" min="0"></td></tr>
      <tr><td>Бандит</td><td><input type="number" id="people3" placeholder="Введите кол-во" onchange="updateValue('people3')" min="0"></td></tr>
      <tr><td>Ренегат</td><td><input type="number" id="people4" placeholder="Введите кол-во" onchange="updateValue('people4')" min="0"></td></tr>
      <tr><td>ЧН</td><td><input type="number" id="people5" placeholder="Введите кол-во" onchange="updateValue('people5')" min="0"></td></tr>
      <tr><td>Долг</td><td><input type="number" id="people6" placeholder="Введите кол-во" onchange="updateValue('people6')" min="0"></td></tr>
      <tr><td>Свобода</td><td><input type="number" id="people7" placeholder="Введите кол-во" onchange="updateValue('people7')" min="0"></td></tr>
      <tr><td>Военный</td><td><input type="number" id="people8" placeholder="Введите кол-во" onchange="updateValue('people8')" min="0"></td></tr>
      <tr><td>Наемник</td><td><input type="number" id="people9" placeholder="Введите кол-во" onchange="updateValue('people9')" min="0"></td></tr>
      <tr><td>Монолит</td><td><input type="number" id="people10" placeholder="Введите кол-во" onchange="updateValue('people10')" min="0"></td></tr>
      <tr><td>Грех</td><td><input type="number" id="people11" placeholder="Введите кол-во" onchange="updateValue('people11')" min="0"></td></tr>
      <tr><td>ИИГ</td><td><input type="number" id="people12" placeholder="Введите кол-во" onchange="updateValue('people12')" min="0"></td></tr>
    `;
  } else if (tabId === 'tab2') {
    // Люди
    document.getElementById('table-body-people').innerHTML = `
      <tr><td>Зомбированный</td><td><input type="number" id="people1" placeholder="Введите кол-во" onchange="updateValue('people1')" min="0"></td></tr>
      <tr><td>Сталкер</td><td><input type="number" id="people2" placeholder="Введите кол-во" onchange="updateValue('people2')" min="0"></td></tr>
      <tr><td>Бандит</td><td><input type="number" id="people3" placeholder="Введите кол-во" onchange="updateValue('people3')" min="0"></td></tr>
      <tr><td>Ренегат</td><td><input type="number" id="people4" placeholder="Введите кол-во" onchange="updateValue('people4')" min="0"></td></tr>
      <tr><td>ЧН</td><td><input type="number" id="people5" placeholder="Введите кол-во" onchange="updateValue('people5')" min="0"></td></tr>
      <tr><td>Долг</td><td><input type="number" id="people6" placeholder="Введите кол-во" onchange="updateValue('people6')" min="0"></td></tr>
      <tr><td>Свобода</td><td><input type="number" id="people7" placeholder="Введите кол-во" onchange="updateValue('people7')" min="0"></td></tr>
      <tr><td>Военный</td><td><input type="number" id="people8" placeholder="Введите кол-во" onchange="updateValue('people8')" min="0"></td></tr>
      <tr><td>Наемник</td><td><input type="number" id="people9" placeholder="Введите кол-во" onchange="updateValue('people9')" min="0"></td></tr>
      <tr><td>Монолит</td><td><input type="number" id="people10" placeholder="Введите кол-во" onchange="updateValue('people10')" min="0"></td></tr>
      <tr><td>Грех</td><td><input type="number" id="people11" placeholder="Введите кол-во" onchange="updateValue('people11')" min="0"></td></tr>
      <tr><td>ИИГ</td><td><input type="number" id="people12" placeholder="Введите кол-во" onchange="updateValue('people12')" min="0"></td></tr>
    `;
  } else if (tabId === 'tab3') {
    // Мутанты
    document.getElementById('table-body-mutants').innerHTML = `
      <tr><td>Собака</td><td><input type="number" id="mutant1" placeholder="Введите кол-во" onchange="updateValue('mutant1')" min="0"></td></tr>
      <tr><td>Псевдособака</td><td><input type="number" id="mutant2" placeholder="Введите кол-во" onchange="updateValue('mutant2')" min="0"></td></tr>
      <tr><td>Полтергейст</td><td><input type="number" id="mutant3" placeholder="Введите кол-во" onchange="updateValue('mutant3')" min="0"></td></tr>
      <tr><td>Бюрер</td><td><input type="number" id="mutant4" placeholder="Введите кол-во" onchange="updateValue('mutant4')" min="0"></td></tr>
      <tr><td>Пси-собака</td><td><input type="number" id="mutant5
