import {
  fetchRequest
} from './request.js';
import {
  createElement
} from './create.js';


export const renderNews = (country, count) => {
  fetchRequest(`https://newsapi.org/v2/top-headlines?country=${country}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': '5a3af443472b4993888af53dd0549ec3'
      },
    })
    .then(data => {
      const latestNews = document.querySelector('.latest__news');
      const wrapper = document.createElement('div');
      wrapper.classList = 'wrapper';

      const title = document.createElement('h2');
      title.style.marginBottom = '60px';
      title.textContent = 'Свежие новости';

      latestNews.prepend(title, wrapper);

      data.articles.slice(0, count).forEach(elem => {
        createElement(elem);
      });
    });
};


export const searchNews = (phrase, count) => {

  fetchRequest(`https://newsapi.org/v2/everything?q=${phrase}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': '5a3af443472b4993888af53dd0549ec3'
      },
    })
    .then(data => {
      const newsSearch = document.querySelector('.news__search');
      const wrapper = document.createElement('div');
      wrapper.classList = 'wrapper';

      const title = document.createElement('h2');
      title.style.marginBottom = '60px';
      title.textContent = `По вашему запросу “${phrase}” найдено ${data.totalResults} результатов`;

      newsSearch.prepend(title, wrapper);

      data.articles.slice(0, count).forEach(elem => {
        createElement(elem);
      });
    });
};
