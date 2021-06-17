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

  Prism.plugins.toolbar.registerButton('Language', (env) => {
    const span = document.createElement("span");
    span.textContent = env.language;
    return span;
  });

  if (navigator.clipboard) {
    Prism.plugins.toolbar.registerButton('Copy', (env) => {
      const copyButton = document.createElement('button');
      copyButton.setAttribute("type", "button");
      copyButton.setAttribute("aria-label", "Copy");
      copyButton.textContent = "📋";

      copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(env.code)
        .then(() => {
          copyButton.classList.add('copy-sucess');
        })
        .catch(err => {
          console.log(err);
          copyButton.classList.add('copy-error');
        });
        setTimeout(() => {
          copyButton.className = "";
        }, 1000)
      });

      return copyButton;
    });
  }

})();