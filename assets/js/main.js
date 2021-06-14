// (function () {
  // Array.from(document.querySelectorAll('code[class*="language-"]'))
  // .map((element) => {
  //   console.log(element);
  //   const lang_name = element.className.match("-\\w+")[0].replace("-", "").toUpperCase();
  //   const parent = element.parentElement.parentElement.parentElement;
  //   parent.setAttribute("language", lang_name);
  // });
// })();

window.addEventListener('DOMContentLoaded', () => {
  Array.from(document.querySelectorAll('code[class*="language-"]'))
  .map((element) => {
    const lang_name = element.className.match("-\\w+")[0].replace("-", "").toUpperCase();
    const parent = element.parentElement.parentElement.parentElement;
    parent.setAttribute("language", lang_name);
  });
});