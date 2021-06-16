(() => {
  const post_content = document.querySelector(".post-content")
  
  if (post_content === null) {
    return;
  }

  Array.from(post_content.querySelectorAll("h1, h2, h3, h4, h5, h6")).map((element) => {
    const anchor = document.createElement("a");
    anchor.textContent = "#";
    anchor.setAttribute("href", "#" + element.getAttribute("id"));
    element.appendChild(anchor);
  });

})();

window.addEventListener('DOMContentLoaded', () => {
  Array.from(document.querySelectorAll('code[class*="language-"]'))
  .map((element) => {
    const lang_name = element.className.match("-\\w+")[0].replace("-", "").toUpperCase();
    const parent = element.parentElement.parentElement.parentElement;
    parent.setAttribute("language", lang_name);
  });
});