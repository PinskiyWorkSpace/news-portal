export const createElement = (data) => {
  const container = document.querySelector('.wrapper');

    const card = document.createElement('div');
    card.classList = 'card';

    const img = document.createElement('img');
    img.classList = 'card__image';
    img.src = data.urlToImage || '../../image/no_img.jpg';

    const link = document.createElement('a');
    link.href = data.url;

    const h2 = document.createElement('h3');
    h2.classList = 'card__title';
    h2.textContent = data.title;

    const text = document.createElement('p');
    text.classList = 'card__discription';
    text.textContent = data.description;

    const cardFooter = document.createElement('div');
    cardFooter.classList = 'card__footer';

    const cardDate = document.createElement('div');
    cardDate.classList = 'card__date';

    const dateMonths = document.createElement('span');
    dateMonths.classList = 'card__date-months';
    dateMonths.textContent = data.publishedAt;

    // const dateTime = document.createElement('span');
    // dateTime.classList = 'card__date-time';
    // dateTime.textContent = `${data}`;

    const cardAutor = document.createElement('div');
    cardAutor.classList = 'card__autor';
    cardAutor.textContent = data.author;

    container.append(card);
    card.append(img, link, text, cardFooter);
    link.append(h2);
    cardDate.append(dateMonths);
    cardFooter.append(cardDate, cardAutor);
    return card;
};
