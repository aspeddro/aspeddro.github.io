(() => {
  const codeBlocks = document.querySelectorAll('div[class*="language-"]');
  codeBlocks !== null && [...codeBlocks].map((element) => {
    const langName = element.className.match(/\blang(?:uage)?-([\w-]+)\b/i);
    langName !== null && element.setAttribute('data-language', langName[1]);

    // Clipboard button
    if (navigator.clipboard) {
      const codeContent = element.querySelector('code');
      if (codeContent === null || codeContent.textContent === null) {
        return;
      }
      const buttonClip = document.createElement('button');
      buttonClip.setAttribute("type", "button");
      buttonClip.setAttribute("aria-label", "Copy to clipboard");
      buttonClip.textContent = "📋";
      element.appendChild(buttonClip);

      buttonClip.addEventListener('click', () => {
        navigator.clipboard.writeText(codeContent.textContent)
        .then(() => {
          buttonClip.classList.add('copy-sucess');
        })
        .catch(err => {
          console.log(err);
          buttonClip.classList.add('copy-error');
        });
        setTimeout(() => {
          buttonClip.className = "";
        }, 1000)
      });
    }
  });
  
  const postContent = document.querySelector(".post-content");
  postContent !== null && [...postContent.querySelectorAll("h1, h2, h3, h4, h5, h6")].map((element) => {
    const anchor = document.createElement("a");
    anchor.textContent = "#";
    anchor.setAttribute("href", "#" + element.getAttribute("id"));
    element.appendChild(anchor);
  });

})();