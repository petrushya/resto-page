import { menuArticle } from './articles/menu.js';

export function menupage(){
  const main = document.createElement('main');
  const rubric = document.createElement('h1');
  const rubricPara = document.createElement('p');
  rubric.textContent = 'exclusive dishes'.toUpperCase();
  rubricPara.textContent = 'Unrivaled creations from our chef.';
  rubricPara.className = 'mainpara';
  main.appendChild(rubric);
  main.appendChild(rubricPara);
  for(let i = 0; i < menuArticle.length; i++){
    const article = document.createElement('article');
    for(let key of Object.keys(menuArticle[i])){
      switch(key){
      case 'name':
        const articleTitle = document.createElement('h2');
        articleTitle.textContent = menuArticle[i]['name'];
        article.appendChild(articleTitle);
        break;
      case 'img':
        const articleImg = document.createElement('img');
        articleImg.setAttribute('src', menuArticle[i]['img'][0]);
        articleImg.setAttribute('width', menuArticle[i]['img'][1]);
        articleImg.setAttribute('height', menuArticle[i]['img'][2]);
        article.appendChild(articleImg);
        break;
      case 'itemName':
        const itemTitle = document.createElement('h3');
        itemTitle.textContent = menuArticle[i]['itemName'];
        article.appendChild(itemTitle);
        break;
      case 'info':
        const order = document.createElement('ul');
        menuArticle[i]['info'].forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          order.appendChild(li);
        });
        article.appendChild(order);
        break;
      case 'price':
        const articlePara = document.createElement('p');
        const span = document.createElement('span');
        span.textContent = 'Price: ';
        articlePara.textContent = menuArticle[i]['price'];
        articlePara.prepend(span);
        article.appendChild(articlePara);
        break;
      };
    };
    main.appendChild(article);
  };
  return main;
}