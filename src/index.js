import "./style.css";
import dataList from "./articles/dataList.js";
import smile from "../images/simpsmile.svg";

const body = document.body;
const hWrapper = document.createElement("div");
const header = document.createElement("header");
const pagenav = document.createElement("nav");
const main = document.createElement("main");
const footer = document.createElement("footer");
const para = document.createElement("p");
const fWrapper = document.createElement("div");

const pageTitle = document.querySelector("head title");
pageTitle.textContent = `SPECIALS - TIM`;

const link = document.querySelector('link[rel="icon"]');
link.href = smile;

hWrapper.className = "wrapper first";
fWrapper.className = "wrapper";
main.id = "content";
para.innerHTML = "&trade; Mirage&Freak";

pagenav.id = "pagenav";
header.appendChild(pagenav);
hWrapper.appendChild(header);
footer.appendChild(para);
fWrapper.appendChild(footer);
body.appendChild(hWrapper);
body.appendChild(main);
body.appendChild(fWrapper);

dataList[0].forEach((item, itemIndex) => {
  const a = document.createElement("a");
  a.id = "a-" + dataList[item].id;
  a.href = "#" + dataList[item].id;
  a.className = "button";
  a.textContent = dataList[item].id;
  pagenav.append(a);
  const section = document.createElement("section");
  const title = document.createElement("h1");
  const para = document.createElement("p");
  section.id = dataList[item].id;
  title.textContent = dataList[item].title.toUpperCase();
  para.textContent = dataList[item].para;
  para.className = "mainpara";
  section.append(title);
  section.append(para);
  main.append(section);
  dataList[item].list.forEach((mark) => {
    const article = document.createElement("article");
    section.append(article);
    Object.keys(dataList[mark]).forEach((key) => {
      switch (key) {
        case "name":
          const title = document.createElement("h2");
          title.textContent = dataList[mark][key];
          article.append(title);
          break;
        case "img":
          const image = new Image();
          image.src =
            dataList[mark][key][0] == "smile" ? smile : dataList[mark][key][0];
          image.width = dataList[mark][key][1];
          image.height = dataList[mark][key][2];
          if (dataList[mark][key][0])
            image.alt = "Picture " + dataList[mark].name;
          article.append(image);
          break;
        case "itemName":
          const itemTitle = document.createElement("h3");
          itemTitle.textContent = dataList[mark][key];
          article.append(itemTitle);
          break;
        case "info":
          let order;
          itemIndex == 1
            ? (order ??= document.createElement("ol"))
            : (order ??= document.createElement("ul"));
          article.append(order);
          dataList[mark][key].forEach((text, infoIndex) => {
            const li = document.createElement("li");
            order.append(li);
            li.textContent = text;
            if (itemIndex == dataList[0].length - 1) {
              const span = document.createElement("span");
              !infoIndex
                ? (span.textContent = "Phones: ")
                : infoIndex == 1
                ? (span.textContent = "Email: ")
                : (span.textContent = "Socials: ");
              li.prepend(span);
            }
          });
          break;
        case "price":
          if (dataList[mark][key]) {
            const p = document.createElement("p");
            const span = document.createElement("span");
            p.textContent = dataList[mark][key];
            span.textContent = "Price: ";
            p.prepend(span);
            article.append(p);
          }
          break;
      }
    });
  });
});

const allA = Array.from(pagenav.children);
const sections = Array.from(main.children);
for (let i = 0; i < allA.length; i++) {
  allA[i].onclick = () => {
    pageTitle.textContent = `${allA[i].id.slice(2).toUpperCase()} - TIM`;
  };
}

window.addEventListener("scroll", () => {
  sections.forEach((item, index) => {
    if (sections[index + 1]) {
      item.offsetTop <= window.pageYOffset + sections[0].offsetTop &&
      window.pageYOffset + sections[0].offsetTop < sections[index + 1].offsetTop
        ? allA[index].className = "color"
        : allA[index].className = "";
    } else {
      item.offsetTop <= window.pageYOffset + sections[0].offsetTop
        ? allA[index].className = "color"
        : allA[index].className = "";
    }
  });
});
