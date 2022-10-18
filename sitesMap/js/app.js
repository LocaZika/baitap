import htmlTag from "./module/htmlTag.mjs";
import navigator from "./module/navigator.mjs";
import header from "./module/header.mjs";
const root = async (...elementModule) => {
  const body = document.querySelector("body");
  const root = await htmlTag.divTag("root", "container", ...elementModule);
  body.appendChild(root);
};
root(navigator, header);
