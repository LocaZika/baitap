import htmlTag from "./htmlTag.mjs";
/*===Intro===*/
const header = htmlTag.headerTag("container", "");
const data = async () => {
  const getFile = await fetch("./db/header.json");
  const getData = await getFile.json();
  const title = htmlTag.hTag(1, getData.content.title);
  const content = htmlTag.pTag("", getData.content.text);
  const linkBox = htmlTag.divTag("", "link-box");
  for (const key in getData.links) {
    if (Object.hasOwnProperty.call(getData.links, key)) {
      const links = getData.links[key];
      const link = htmlTag.aTag(links.href, links.text);
      linkBox.appendChild(link);
    }
  }
  header.append(title, content, linkBox);
  header.style.background = `#f4f4f4 url(./img/${getData.backgroundImg}) center/cover no-repeat `;
};
data();
export default header;
