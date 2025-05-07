const POPUP_TIMEOUT = 5000;
const MAX_QUANTITY = 1000;
const MAX_SPECIAL_QUANTITY = 10000;
const MAX_TIMER_MINUTES = 60;
const MAX_TIMER_SECONDS = 59;
const MAX_TOTAL_SECONDS = MAX_TIMER_MINUTES * 60;

const tabs = {
  tab1: [],
  tab2: {
    title: "Люди",
    items: [
      { name: "Зомбированный", code: "[ЗОМ]", price: 23 },
      { name: "Сталкер", code: "[СТА]", price: 29 },
      { name: "Бандит", code: "[БАН]", price: 29 },
      { name: "Ренегат", code: "[РНГ]", price: 30 },
      { name: "Чистое небо", code: "[ВЧН]", price: 33 },
      { name: "Долг", code: "[ДЛГ]", price: 40 },
      { name: "Свобода", code: "[СВО]", price: 40 },
      { name: "Военный", code: "[ВОЯ]", price: 45 },
      { name: "Наемник", code: "[МЕР]", price: 54 },
      { name: "Монолит", code: "[МОН]", price: 65 },
      { name: "Грех", code: "[ГРХ]", price: 70 },
      { name: "ИИГ", code: "[ИИГ]", price: 77 },
    ],
  },
  tab3: {
    title: "Мутанты",
    items: [
      { name: "Собака", code: "[СОБ]", price: 15 },
      { name: "Псевдособака", code: "[ПСЕ]", price: 47 },
      { name: "Бюрер", code: "[БЮР]", price: 101 },
      { name: "Пси-собака", code: "[ПСИ]", price: 121 },
      { name: "Кровосос", code: "[КРС]", price: 125 },
      { name: "Химера", code: "[ХИМ]", price: 199 },
      { name: "Полтергейст", code: "[ПЛТ]", price: 200 },
      { name: "Псевдогигант", code: "[ПСГ]", price: 404 },
      { name: "Библиотекарь", code: "[БИБ]", price: 500 },
      { name: "Контролер", code: "[КНТ]", price: 666 },
    ],
  },
  tab4: {
    title: "Хорошие события",
    items: [
      { 
        name: "Выдать деньги", 
        code: "[ВКД]", 
        special: true,
        hidePrice: true,
        minInput: 1
      },
      { name: "Выдать тайник", code: "[СТЙ]", price: 24 },
      { name: `<span style=\"color:#add8e6\">«Зелье исцеления»</span>`, code: "[ХИЛ]", price: 49, tooltip: "Выдать «Зелье исцеления» которое полностью восстанавливает здоровье" },
    ],
  },
  tab5: {
    title: "Нейтральные события",
    items: [
      { name: "Замена патронов", code: "[ЗПП]", price: 2 },
      { name: "Выдать/Забрать случайный предмет", code: "[РАВН]", price: 18, tooltip: "Выдать или забрать случайный предмет (кроме оружия и брони)" },
      { name: "Замена медикаментов", code: "[ЗММ]", price: 31, tooltip: "Замена медикамента на другой случайный" },
      { name: "Смена имени персонажа", code: "[НИК]", price: 45, tooltip: "Смена имени персонажа на то, которое вы указали при оплате" },
      { name: "Смена погоды на случайную", code: "[СРВ]", price: 50 },
      { name: `Заменяет оружие врагов на случайные <span style=\"color:#add8e6\">«Пистолеты»</span>`, code: "[СВП]", price: 200, tooltip: "В пределах текущей локации заменяет оружие врагов на случайные «Пистолеты»" },
      { name: `Заменяет оружие врагов на случайные <span style=\"color:#add8e6\">«ПП»</span>`, code: "[СВПП]", price: 250, tooltip: "В пределах текущей локации заменяет оружие врагов на случайные «ПП»" },
      { name: `Заменяет оружие врагов на случайные <span style=\"color:#add8e6\">«Дробовики»</span>`, code: "[СВД]", price: 300, tooltip: "В пределах текущей локации заменяет оружие врагов на случайные «Дробовики»" },
      { name: `Заменяет оружие врагов на случайные <span style=\"color:#add8e6\">«Автоматы»</span>`, code: "[СВА]", price: 350, tooltip: "В пределах текущей локации заменяет оружие врагов на случайные «Автоматы»" },
      { name: `Заменяет оружие врагов на случайные <span style=\"color:#add8e6\">«Снайперки»</span>`, code: "[СВС]", price: 400, tooltip: "В пределах текущей локации заменяет оружие врагов на случайные «Снайперки»" },
      { name: `Заменяет оружие врагов на случайные <span style=\"color:#add8e6\">«Пулемёты»</span>`, code: "[СВПЛ]", price: 750, tooltip: "В пределах текущей локации заменяет оружие врагов на случайные «Пулемёты»" },
      { name: `Заменяет оружие врагов на случайные <span style=\"color:#add8e6\">«Гранатомёты»</span>`, code: "[СВГР]", price: 1000, tooltip: "В пределах текущей локации заменяет оружие врагов на случайные «Гранатомёты»" },
      { name: "Замена всего инвентаря", code: "[ЗВИ]", price: 1777, tooltip: "Замена всего инвентаря на аналогичные предметы" },
    ],
  },
  tab6: {
    title: "Плохие события",
    items: [
      { 
        name: "Забрать деньги", 
        code: "[ЗКД]", 
        special: true,
        hidePrice: true,
        minInput: 1
      },
      { name: "Сброс прогресса", code: "[КЛИ]", price: 5555, tooltip: "Потеря всех вещей, денег и репутации" },
    ],
  },
  tab7: {
    title: "Функции с таймером",
    items: [
      { name: "Инвертированное управление", code: "[ИНВ]", price: 1.6 },
      { name: `<span style=\"color:#add8e6\">«Пьяная камера»</span>`, code: "[ПЬК]", price: 2.3, tooltip: "Эффект «Пьяная камера»" },
      { name: "Блокировка UI", code: "[ЗИВ]", price: 2.4, tooltip: "Блокирует доступ к инвентарю и КПК" },
      { name: "Бесконечные патроны", code: "[БКП]", price: 3 },
      { name: "Бессмертие", code: "[ГДМ]", price: 3.8 }
    ]
  }
};

let activeRow = null;
let popupTimer = null;
let sharedPopup = null;

function debounce(func, timeout = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

function createSharedPopup() {
  const popup = document.createElement("div");
  popup.className = "payment-popup";
  popup.innerHTML = `
    <div class="sum-popup">0 ₽</div>
    <div class="payment-divider"></div>
    <div class="payment-buttons-popup">
      <a href="https:
         target="_blank" class="payment-btn">
        <img src="assets/img/DA.ico" alt="DA">
      </a>
      <a href="https:
         target="_blank" class="payment-btn">
        <img src="assets/img/DP.ico" alt="DP">
      </a>
    </div>
  `;
  document.body.appendChild(popup);
  return popup;
}

function updatePopupPosition() {
  if (!sharedPopup || !activeRow) return;

  const rowRect = activeRow.getBoundingClientRect();
  const popupRect = sharedPopup.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const scrollY = window.scrollY;

  let topPosition = rowRect.top + scrollY + rowRect.height / 2;
  const spaceBelow = viewportHeight - (rowRect.bottom - scrollY);
  
  if (spaceBelow < popupRect.height + 15) {
    topPosition = rowRect.top + scrollY - popupRect.height / 2;
  }

  let leftPosition = rowRect.right + 15;
  if (leftPosition + popupRect.width > document.documentElement.clientWidth - 15) {
    leftPosition = rowRect.left - popupRect.width - 15;
  }

  sharedPopup.style.top = `${Math.max(15, Math.min(topPosition, scrollY + viewportHeight - popupRect.height - 15))}px`;
  sharedPopup.style.left = `${leftPosition}px`;
}

function startPopupTimer() {
  clearTimeout(popupTimer);
  popupTimer = setTimeout(() => {
    if (!sharedPopup.matches(':hover')) {
      sharedPopup.classList.remove('active');
    }
  }, POPUP_TIMEOUT);
}

function validateTime(input) {
  const isMinute = input.classList.contains('timer-minute');
  const row = input.closest('tr');
  const minutesInput = row.querySelector('.timer-minute');
  const secondsInput = row.querySelector('.timer-second');
  
  // Получаем текущие значения
  let minutes = parseInt(minutesInput.value) || 0;
  let seconds = parseInt(secondsInput.value) || 0;
  
  // Валидация ввода
  let value = parseInt(input.value) || 0;
  value = Math.min(value, isMinute ? MAX_TIMER_MINUTES : MAX_TIMER_SECONDS);
  value = Math.max(value, 0);
  
  // Обновляем значение
  input.value = value > 0 ? value.toString().padStart(2, '0') : '';
  input.setAttribute('placeholder', isMinute ? 'ММ' : 'СС');

  // Обработка минут
  if (isMinute) {
    // Удаляем подсветку у секунд если минуты не в капе
    if (value < MAX_TIMER_MINUTES) {
      secondsInput.classList.remove('input-max');
      // Если секунды были 00 - очищаем
      if (secondsInput.value === '00') {
        secondsInput.value = '';
        secondsInput.setAttribute('placeholder', 'СС');
      }
    }
    
    // Обновляем подсветку минут
    minutesInput.classList.toggle('input-max', value >= MAX_TIMER_MINUTES);
  }

  // Обработка секунд (только если минуты не в капе)
  if (!isMinute && minutes < MAX_TIMER_MINUTES) {
    secondsInput.classList.toggle('input-max', value >= MAX_TIMER_SECONDS);
  }

  // Принудительная установка 00 секунд при 60 минутах
  if (minutes >= MAX_TIMER_MINUTES) {
    secondsInput.value = '00';
    secondsInput.classList.add('input-max');
    minutesInput.classList.add('input-max');
  }

  calculateSum(input);
}

function enforceMaxTotalTime(input) {
  const row = input.closest('tr');
  const minutesInput = row.querySelector('.timer-minute');
  const secondsInput = row.querySelector('.timer-second');
  
  let minutes = parseInt(minutesInput.value) || 0;
  let seconds = parseInt(secondsInput.value) || 0;
  const total = minutes * 60 + seconds;

  
  if (total > MAX_TOTAL_SECONDS) {
    if (minutes >= MAX_TIMER_MINUTES) {
      minutesInput.value = MAX_TIMER_MINUTES.toString().padStart(2, '0');
      secondsInput.value = '00';
      minutesInput.classList.add('input-max');
      secondsInput.classList.add('input-max');
    } else {
      const allowedSeconds = MAX_TOTAL_SECONDS - (minutes * 60);
      seconds = Math.min(seconds, allowedSeconds);
      secondsInput.value = seconds.toString().padStart(2, '0');
      secondsInput.classList.toggle('input-max', seconds >= allowedSeconds);
    }
  }
}

function createTableRow(item, isTimerTab = false) {
  const row = document.createElement("tr");
  if (item.special) row.classList.add('special-price');

  const priceDisplay = item.hidePrice ? '--' : item.price;

  if (isTimerTab) {
    row.innerHTML = `
      <td class="col-name"${item.tooltip ? ` title="${item.tooltip}"` : ``}>
        <div class="copy-container">
          <span>${item.name}</span>
          <span class="item-code">${item.code}</span>
          <button class="copy-btn" onclick="copyCode('${item.code}', this)">
            <img src="assets/img/icon_copy.svg" alt="Копировать">
          </button>
        </div>
      </td>
      <td class="col-narrow price-column" data-price="${item.price || 0}">${priceDisplay}</td>
      <td class="col-narrow">
        <div class="input-control timer-control">
          <input type="number" min="0" max="${MAX_TIMER_MINUTES}" placeholder="ММ" 
                 class="timer-minute" oninput="validateTime(this)">
          <span>: </span>
          <input type="number" min="0" max="${MAX_TIMER_SECONDS}" placeholder="СС"
                 class="timer-second" oninput="validateTime(this)">
        </div>
      </td>
    `;
  } else {
    row.innerHTML = `
      <td class="col-name"${item.tooltip ? ` title="${item.tooltip}"` : ``}>
        <div class="copy-container">
          <span>${item.name}</span>
          <span class="item-code">${item.code}</span>
          <button class="copy-btn" onclick="copyCode('${item.code}', this)">
            <img src="assets/img/icon_copy.svg" alt="Копировать">
          </button>
        </div>
      </td>
      <td class="col-narrow price-column" 
          data-price="${item.price || 0}" 
          data-divisor="${item.divisor || 1}">${priceDisplay}</td>
      <td class="col-narrow">
        <div class="input-control">
          <button class="btn-decrease" onclick="adjustQuantity(this, -1)">-</button>
          <input type="number" placeholder="--" min="0"
                 max="${item.special ? MAX_SPECIAL_QUANTITY : MAX_QUANTITY}"
                 oninput="handleInput(this)"
                 onchange="calculateSum(this)">
          <button class="btn-increase" onclick="adjustQuantity(this, 1)">+</button>
        </div>
      </td>
    `;
  }

  return row;
}

function handleInput(input) {
  const row = input.closest('tr');
  const itemCode = row.querySelector('.item-code').textContent;
  const isSpecialPrice = row.classList.contains('special-price');
  const isZKDorVKD = itemCode === '[ЗКД]' || itemCode === '[ВКД]';
  const maxValue = isSpecialPrice ? MAX_SPECIAL_QUANTITY : MAX_QUANTITY;
  
  
  let value = input.value.replace(/[^0-9]/g, '');
  const numericValue = value !== '' ? parseInt(value) : 0;
  
  
  if ((isZKDorVKD || isSpecialPrice) && numericValue < 1 && value !== '') {
    input.value = 1;
    calculateSum(input);
    return;
  }
  
  
  if (value !== '') {
    value = Math.min(numericValue, maxValue);
    input.value = value;
    input.classList.toggle('input-max', value >= maxValue);
  } else {
    input.classList.remove('input-max');
  }
  
  
  if (value === '' || numericValue <= 0) {
    input.value = '';
    input.setAttribute('placeholder', '--');
  }
  
  calculateSum(input);
}

function calculateSum(input) {
  const row = input?.closest("tr") || activeRow;
  if (!row || !sharedPopup) return;

  const priceCell = row.querySelector(".price-column");
  const price = parseFloat(priceCell?.dataset.price) || 0;
  const code = row.querySelector('.item-code')?.textContent || '';
  
  let sum = 0;
  const isTimerTab = row.querySelector('.timer-control');
  const isZKDorVKD = code === '[ЗКД]' || code === '[ВКД]';

  if (isTimerTab) {
    const minutes = parseInt(row.querySelector('.timer-minute')?.value || 0);
    const seconds = parseInt(row.querySelector('.timer-second')?.value || 0);
    const totalSeconds = Math.min(minutes * 60 + seconds, MAX_TOTAL_SECONDS);
    sum = Math.round(price * totalSeconds * 10) / 10; 
  } 
  else if (isZKDorVKD) {
    const quantity = parseInt(input?.value) || 0;
    sum = 100 * quantity;
  }
  else {
    const quantity = parseInt(input?.value) || 0;
    sum = price * quantity;
  }

  
  let displaySum;
  if (isTimerTab) {
    displaySum = sum % 1 === 0 ? sum.toFixed(0) : sum.toFixed(1);
  } else {
    displaySum = Math.round(sum).toString();
  }

  sharedPopup.querySelector('.sum-popup').textContent = `${displaySum} ₽`;
  sharedPopup.classList.toggle('active', sum > 0);
  updatePopupPosition();
}

function adjustQuantity(btn, delta) {
  const input = btn.parentNode.querySelector('input');
  const row = input.closest('tr');
  const maxValue = row.classList.contains('special-price') ? MAX_SPECIAL_QUANTITY : MAX_QUANTITY;
  const isZKDorVKD = row.querySelector('.item-code').textContent === '[ЗКД]' || 
                     row.querySelector('.item-code').textContent === '[ВКД]';
  const step = isZKDorVKD ? 10 : 1;
  let currentValue = parseInt(input.value) || 0;
  let newValue = currentValue + delta * step;
  
  if (isZKDorVKD) {
    if (delta < 0 && newValue < 1) {
      input.value = '';
      input.setAttribute('placeholder', '--');
      calculateSum(input);
      return;
    }
    newValue = Math.max(1, Math.min(newValue, MAX_SPECIAL_QUANTITY));
  } else if (row.classList.contains('special-price')) {
    if (newValue < 1) {
      input.value = '';
      input.setAttribute('placeholder', '--');
      calculateSum(input);
      return;
    }
  } else {
    newValue = Math.max(0, Math.min(newValue, MAX_QUANTITY));
  }
  
  input.value = newValue > 0 ? newValue : '';
  input.setAttribute('placeholder', newValue === 0 ? '--' : '');
  
  
  if (newValue >= maxValue) {
    input.classList.add('input-max');
  } else {
    input.classList.remove('input-max');
  }
  
  calculateSum(input);
}

async function copyCode(code, btn) {
  if (!btn) return;
  
  try {
    await navigator.clipboard.writeText(code);
    const icon = btn.querySelector('img');
    if (!icon) return;
    
    const originalSrc = icon.src;
    icon.src = originalSrc.includes('icon_copy.svg') 
      ? 'assets/img/icon_copy_plus.svg'
      : originalSrc;
      
    setTimeout(() => {
      if (icon) icon.src = 'assets/img/icon_copy.svg';
    }, 1000);
  } catch (err) {
    console.error("Ошибка копирования:", err);
  }
}

function renderTable(items, isAllTab = false, isTimerTab = false) {
  const tableBody = document.getElementById("table-body");
  if (!tableBody) {
    console.error("Элемент table-body не найден");
    return;
  }
  tableBody.innerHTML = "";

  const sortedItems = [...items].sort((a, b) => (a.price || 0) - (b.price || 0));

  if (isAllTab) {
    Object.values(tabs).forEach(tab => {
      if (!tab.items) return;
      const groupRow = document.createElement("tr");
      groupRow.innerHTML = `<td colspan="3"><div class="group-label">${tab.title}</div></td>`;
      tableBody.appendChild(groupRow);
      const sortedTabItems = [...tab.items].sort((a, b) => (a.price || 0) - (b.price || 0));
      sortedTabItems.forEach(item => tableBody.appendChild(createTableRow(item)));
    });
  } else {
    sortedItems.forEach(item => tableBody.appendChild(createTableRow(item, isTimerTab)));
  }
}

function switchTab(tab) {
  document.querySelectorAll('.tab-button').forEach(btn => 
    btn.classList.remove('active'));
  document.querySelector(`.tab-button[data-tab="${tab}"]`)
    .classList.add('active');

  const columnTitle = document.getElementById('column-title');
  columnTitle.textContent = tab === 'tab7' ? 'Таймер' : 'Количество';
    
  if(tab === 'tab7') {
    renderTable(tabs[tab].items, false, true);
  } else if(tab === 'tab1') {
    renderTable(Object.values(tabs).flatMap(t => t.items || []), true);
  } else {
    renderTable(tabs[tab].items);
  }
}

window.addEventListener('scroll', debounce(updatePopupPosition));
window.addEventListener('resize', debounce(updatePopupPosition));

document.addEventListener("DOMContentLoaded", () => {
  sharedPopup = createSharedPopup();
  
  const tableBody = document.getElementById("table-body");
  
  tableBody.addEventListener('mouseover', (e) => {
    const row = e.target.closest('tr');
    if (!row || row === activeRow) return;
    
    activeRow = row;
    updatePopupPosition();
    const input = row.querySelector('input');
    calculateSum(input);
    startPopupTimer();
  });

  tableBody.addEventListener('mouseleave', () => {
    startPopupTimer();
  });

  sharedPopup.addEventListener('mouseenter', () => clearTimeout(popupTimer));
  sharedPopup.addEventListener('mouseleave', startPopupTimer);

  
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.dataset.tab;
      switchTab(tabId);
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
    });
  });

  switchTab("tab2");
});
