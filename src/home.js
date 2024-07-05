import { homeArticle } from './articles/home.js';

export function homepage(){
  const main = document.createElement('main');
  const rubric = document.createElement('h1');
  const rubricPara = document.createElement('p');
  rubric.textContent = 'our daily offers'.toUpperCase();
  rubricPara.textContent = 'New masterpieces from our chef.';
  rubricPara.className = 'mainpara';
  main.appendChild(rubric);
  main.appendChild(rubricPara);
  for(let i = 0; i < homeArticle.length; i++){
    const article = document.createElement('article');
    for(let key of Object.keys(homeArticle[i])){
      switch(key){
      case 'name':
        const articleTitle = document.createElement('h2');
        articleTitle.textContent = homeArticle[i]['name'];
        article.appendChild(articleTitle);
        break;
      case 'img':
        const articleImg = document.createElement('img');
        articleImg.src = homeArticle[i]['img'][0];
        articleImg.setAttribute('width', homeArticle[i]['img'][1]);
        articleImg.setAttribute('height', homeArticle[i]['img'][2]);
        article.appendChild(articleImg);
        break;
      case 'itemName':
        const itemTitle = document.createElement('h3');
        itemTitle.textContent = homeArticle[i]['itemName'];
        article.appendChild(itemTitle);
        break;
      case 'info':
        const order = document.createElement('ol');
        homeArticle[i]['info'].forEach(item => {
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
        articlePara.textContent = homeArticle[i]['price'];
        articlePara.prepend(span);
        article.appendChild(articlePara);
        break;
      };
    };
    main.appendChild(article);
  };
  return main;
}