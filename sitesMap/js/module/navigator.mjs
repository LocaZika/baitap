import htmlTag from "./htmlTag.mjs";
/*===Logo===*/
const logo = htmlTag.aTag("#", "site maps");
/*===Login===*/
const login = () => {
  const signIn = htmlTag.aTag("#", "login");
  const siginUp = htmlTag.aTag("#", "sign up");
  const login = htmlTag.divTag("", "login", signIn, siginUp);
  return login;
};
/*===Navigator Container===*/
const navigator = htmlTag.divTag("navigator", "container center", logo, login());
/*===Navbar===*/
const navbarLoad = async () => {
  const getFile = await fetch("./db/navigator.json");
  const getData = await getFile.json();
  const navbar = htmlTag.ulCreater("navbar", getData);
  navigator.append(navbar);
};
/*===Import Data To Navigator===*/
navbarLoad();
export default navigator;
