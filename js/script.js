function switchLanguage() {
  const lang = document.getElementById('language-select').value;
  document.documentElement.lang = lang;

  const title = document.getElementById('site-title');
  const description = document.getElementById('site-description');
  const inputs = document.querySelectorAll('input[type="number"]');

  if (lang === 'en') {
    title.textContent = 'S69F Interactive';
    description.textContent = 'This site is hosted on GitHub Pages.';
    inputs.forEach(input => input.placeholder = 'Enter amount');
  } else {
    title.textContent = 'S69F Интерактив';
    description.textContent = 'Этот сайт размещен на GitHub Pages.';
    inputs.forEach(input => input.placeholder = 'Введите кол-во');
  }
}
