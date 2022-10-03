import htmlTag from "./htmlTag.mjs";
const navArray = ["home", "services", "about me", "contact"];
/*===BRANCH===*/
const logo = htmlTag.aTag("#", "zika");
const brand = htmlTag.divTag("", "brand", logo);
/*===TOGGLE===*/
const toggle = htmlTag.divTag("", "toggle", "");
/*===MENU===*/
const ul = htmlTag.ulTag("menu");
const liCreater = (liArray) => {
  let i = 0;
  for (const item of liArray) {
    const li = htmlTag.liTag();
    li.style = `--i: ${i};`;
    let a = htmlTag.aTag("#", item);
    li.appendChild(a);
    ul.appendChild(li);
    i++;
  }
};
liCreater(navArray);
/*===NAVBAR===*/
const navbar = htmlTag.navTag("navbar", toggle, ul);
/*===HEADER===*/
const header = htmlTag.headerTag("container", brand, navbar);

export default header;
