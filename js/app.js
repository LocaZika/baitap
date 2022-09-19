const container = document.getElementById("container");
const aTag = document.getElementsByTagName("a");
for (let i = 0, childLength = container.children.length; i < childLength; i++) {
  ((index) => {
    container.children[i].onclick = () => {
      let link = aTag[index].getAttribute("href");
      let title = aTag[index].textContent;
      let newTab = window.open(link, "_blank");
      newTab.addEventListener("load", () => {
        newTab.document.title = title;
      });
    };
  })(i);
}
