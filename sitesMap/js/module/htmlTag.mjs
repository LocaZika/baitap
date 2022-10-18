"use strict";
const tag = (element) => document.createElement(element);
const navTag = (className, ...childElement) => {
  const nav = tag("nav");
  className == "" || className == null ? nav.removeAttribute("class") : (nav.className = className);
  nav.append(...childElement);
  return nav;
};
const divTag = (id, className, ...childElement) => {
  const div = tag("div");
  id == null || id == "" ? div.removeAttribute("id") : (div.id = id);
  className == null || className == "" ? div.removeAttribute("class") : (div.className = className);
  childElement == null || childElement == "" ? div.append("") : div.append(...childElement);
  return div;
};
const ulCreater = (classUl, objectLi) => {
  const ul = tag("ul");
  classUl == "" || classUl == null ? ul.removeAttribute("class") : (ul.className = classUl);
  for (const key in objectLi) {
    if (Object.hasOwnProperty.call(objectLi, key)) {
      const obj = objectLi[key];
      const li = tag("li");
      const a = tag("a");
      a.href = obj.href;
      a.innerText = obj.name;
      li.appendChild(a);
      ul.appendChild(li);
    }
  }
  return ul;
};
const ulTag = (className) => {
  const ul = tag("ul");
  className == "" || className == null ? ul.removeAttribute("class") : (ul.className = className);
  return ul;
};
const liTag = (...childElement) => {
  const li = tag("li");
  childElement == "" || childElement == null ? li.append(null) : li.append(childElement);
  return li;
};
const aTag = (href, childElement) => {
  const a = tag("a");
  a.href = href;
  childElement == null || childElement == "" ? a.appendChild("") : a.append(childElement);
  return a;
};
const sectionTag = (className) => {
  const section = tag("section");
  className == "" || className == null
    ? section.removeAttribute("class")
    : (section.className = className);
  return ul;
};
const pTag = (className, text) => {
  const p = tag("p");
  className == "" || className == null ? p.removeAttribute("class") : (p.className = className);
  p.innerText = text;
  return p;
};
const spanTag = (className) => {
  const span = tag("span");
  className == "" || className == null
    ? span.removeAttribute("class")
    : (span.className = className);
  return span;
};
const headerTag = (className, ...childElement) => {
  const header = tag("header");
  className == "" || className == null
    ? header.removeAttribute("class")
    : (header.className = className);
  header.append(...childElement);
  return header;
};
const mainTag = (className, ...childElement) => {
  const main = tag("main");
  className == "" || className == null
    ? main.removeAttribute("class")
    : (main.className = className);
  childElement == null || childElement == "" ? main.appendChild("") : main.append(...childElement);
  return main;
};
const footerTag = (className, ...childElement) => {
  const footer = tag("footer");
  className == "" || className == null
    ? footer.removeAttribute("class")
    : (footer.className = className);
  childElement == null || childElement == ""
    ? footer.appendChild("")
    : footer.append(...childElement);
  return footer;
};
const imgTag = (id, className, src, alt) => {
  const img = tag("img");
  id == null || id == "" ? img.removeAttribute("id") : (img.id = id);
  className == null || className == "" ? img.removeAttribute("class") : (img.className = className);
  img.src = src;
  img.alt = alt;
  return img;
};
const inputTag = (type, id) => {
  const input = tag("input");
  input.type = type;
  input.id = id;
  return input;
};
const hTag = (headingNumber, text) => {
  const h = tag(`h${headingNumber}`);
  h.innerText = text;
  return h;
};
export default {
  hTag,
  ulCreater,
  tag,
  navTag,
  divTag,
  aTag,
  ulTag,
  liTag,
  imgTag,
  sectionTag,
  pTag,
  spanTag,
  headerTag,
  mainTag,
  footerTag,
  inputTag,
};
