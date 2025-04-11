const translations = {
  ru: {
    title: 'S69F Интерактив',
    subtitle: 'Этот сайт размещён на GitHub Pages.',
    nameHeader: 'Имя/Название',
    amountHeader: 'Сумма',
    placeholder: 'Введите кол-во',
    tabs: ['Все', 'Люди', 'Мутанты', 'Хорошие события', 'Нейтральные события', 'Плохие события']
  },
  en: {
    title: 'S69F Interactive',
    subtitle: 'This site is hosted with GitHub Pages.',
    nameHeader: 'Name/Title',
    amountHeader: 'Amount',
    placeholder: 'Enter amount',
    tabs: ['All', 'Humans', 'Mutants', 'Good Events', 'Neutral Events', 'Bad Events']
  }
};

function createTableRows() {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = `Slot ${i}`;

    const valueCell = document.createElement('td');
    const input = document.createElement('input');
    input.type = 'number';
    input.id = `slot${i}`;
    input.placeholder = translations[currentLang].placeholder;
    input.min = 0;
    input.onchange = () => updateValue(input.id);
    valueCell.appendChild(input);

    row.appendChild(nameCell);
    row.appendChild(valueCell);
    tbody.appendChild(row);
  }
}

function updateValue(id) {
  const value = document.getElementById(id).value;
  console.log(`Value for ${id}: ${value}`);
}

let currentLang = 'ru';

function changeLanguage() {
  const select = document.getElementById('languageSelect');
  currentLang = select.value;
  const t = translations[currentLang];

  document.getElementById('mainTitle').textContent = t.title;
  document.getElementById('subtitle').textContent = t.subtitle;
  document.getElementById('nameHeader').textContent = t.nameHeader;
  document.getElementById('amountHeader').textContent = t.amountHeader;

  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach((btn, idx) => btn.textContent = t.tabs[idx]);

  createTableRows();
}

function switchTab(tabId) {
  console.log(`Switched to tab: ${tabId}`);
}

window.onload = () => {
  changeLanguage();
};
