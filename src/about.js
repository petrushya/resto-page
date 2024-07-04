import { aboutArticle } from './articles/about.js';

export function aboutpage(){
  const main = document.createElement('main');
  const rubric = document.createElement('h1');
  const rubricPara = document.createElement('p');
  rubric.textContent = 'tiny island of mirages'.toUpperCase();
  rubricPara.textContent = 'For more information use our details.';
  rubricPara.className = 'mainpara';
  main.appendChild(rubric);
  main.appendChild(rubricPara);
  for(let i = 0; i < aboutArticle.length; i++){
    const article = document.createElement('article');
    for(let key of Object.keys(aboutArticle[i])){
      switch(key){
      case 'name':
        const articleTitle = document.createElement('h2');
        articleTitle.textContent = aboutArticle[i]['name'];
        article.appendChild(articleTitle);
        break;
      case 'img':
        const articleImg = document.createElement('img');
        articleImg.setAttribute('src', aboutArticle[i]['img'][0]);
        articleImg.setAttribute('width', aboutArticle[i]['img'][1]);
        articleImg.setAttribute('height', aboutArticle[i]['img'][2]);
        article.appendChild(articleImg);
        break;
      case 'itemName':
        const itemTitle = document.createElement('h3');
        itemTitle.textContent = aboutArticle[i]['itemName'];
        article.appendChild(itemTitle);
        break;
      case 'info':
        const order = document.createElement('ul');
        for(let j = 0; j < aboutArticle[i]['info'].length; j++){
          const li = document.createElement('li');
          const span = document.createElement('span');
          if(j === 0) {
            span.textContent = 'Fone Numbers: ';
            li.textContent = aboutArticle[i]['info'][0];
            li.prepend(span);
          };
          if(j === 1) {
            span.textContent = 'E-mail: ';
            li.textContent = aboutArticle[i]['info'][1];
            li.prepend(span);
          };
          if(j === 2) {
            span.textContent = 'Our social: ';
            li.textContent = aboutArticle[i]['info'][2]
            li.prepend(span);
          };
          order.appendChild(li);
        };
        article.appendChild(order);
        break;
      case 'price':
        const articlePara = document.createElement('p');
        const span = document.createElement('span');
        span.textContent = 'Price: ';
        articlePara.textContent = aboutArticle[i]['price'];
        articlePara.prepend(span);
        article.appendChild(articlePara);
        break;
      };
    };
    main.appendChild(article);
  };
  return main;
}