import { renderNews, searchNews } from './render.js';

const form = document.querySelector('.form');
const input = document.querySelector('.header__search');
const latestNews = document.querySelector('.latest__news');
const newsSearch = document.querySelector('.news__search');
const select = document.querySelector('.select');

select.addEventListener('change', ({target}) => {
  const country = target.value;

  latestNews.textContent = '';
  newsSearch.textContent = '';
  renderNews(country, 8);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  latestNews.textContent = '';
  newsSearch.textContent = '';

  Promise.all([
    searchNews(input.value, 8),
    renderNews(select.value, 4),
  ]);

  input.value = '';
});




renderNews('ru', 8);

