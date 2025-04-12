const tabs = {
  tab2: {
    items: [
      { name: "Зомбированный", code: "ZMB", price: 23 },
      { name: "Сталкер", code: "STL", price: 29 },
      { name: "Бандит", code: "BND", price: 29 },
      { name: "Ренегат", code: "RNG", price: 30 }
    ]
  },
  tab3: {
    items: [
      { name: "Собака", code: "DOG", price: 15 },
      { name: "Кровосос", code: "KRS", price: 125 }
    ]
  },
  tab4: {
    items: [
      { name: "[ВКД]", code: "VKD", price: 50 },
      { name: "[ХИЛ]", code: "HIL", price: 100 }
    ]
  },
  tab5: {
    items: Array.from({ length: 3 }, (_, i) => ({
      name: `Событие ${i + 1}`,
      code: `NE${i + 1}`,
      price: (i + 1) * 50
    }))
  },
  tab6: {
    items: Array.from({ length: 3 }, (_, i) => ({
      name: `Событие ${i + 1}`,
      code: `PE${i + 1}`,
      price: (i + 1) * 75
    }))
  }
};

function switchTab(tabId) {
  document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.tab-button[data-tab="${tabId}"]`).classList.add("active");

  const container = document.getElementById("table-container");
  container.classList.remove("fade-in");
  void container.offsetWidth;
  container.classList.add("fade-in");

  renderTable(tabs[tabId].items);
}

function renderTable(items) {
  const tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  items.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>
        <div class="copy-container">
          <span>${item.name}</span>
          <span class="item-code">[${item.code}]</span>
          <button class="copy-btn" onclick="copyCode('${item.code}', this)">
            <img src="assets/img/icon_copy.svg" alt="copy" />
          </button>
        </div>
      </td>
      <td>${item.price} ₽</td>
      <td>
        <input type="number"
               class="qty-input"
               min="0"
               max="1000"
               value="0"
               oninput="calculateSum(this, ${item.price})"
               style="width:60px; text-align:center; background:#2b2b2b; color:#fff; border:1px solid #555; border-radius:4px;" />
      </td>
      <td class="sum-cell">0 ₽</td>
      <td>—</td>
    `;
    tbody.appendChild(row);
  });
}

function calculateSum(input, price) {
  let qty = parseInt(input.value) || 0;
  qty = Math.max(0, Math.min(qty, 1000));
  input.value = qty;

  const row = input.closest("tr");
  const sumCell = row.querySelector(".sum-cell");
  sumCell.textContent = (qty * price).toLocaleString() + " ₽";
}

function copyCode(code, btn) {
  navigator.clipboard.writeText(code).then(() => {
    const img = btn.querySelector("img");
    img.src = "assets/img/icon_copy_plus.svg";
    setTimeout(() => {
      img.src = "assets/img/icon_copy.svg";
    }, 1000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  switchTab("tab2");
});
