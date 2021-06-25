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
  
  const postContent = document.getElementsByClassName("post-content")[0];
  postContent !== undefined && postContent.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((element) => {
    const anchor = document.createElement("a");
    anchor.textContent = "#";
    anchor.setAttribute("href", "#" + element.getAttribute("id"));
    element.appendChild(anchor);
  });

  const hasLatex = (nodes) => {
    
    const containTex = nodes => 
      [...nodes].some(node => node.nodeName === "#text" && /(\$|\$$|\\\[|\\\]|\\\(|\\\))/gi.test(node.textContent));

    if ([...nodes].length === 0) {
      return false;
    }

    if (containTex(nodes)) {
      return true;
    }

    const parser = [...nodes]
      .map(node => [...node.childNodes])
      .flat(Infinity)
      .filter(node => node.nodeName !== "CODE" && node.nodeName !== "PRE");
    
      return hasLatex(parser);
  }

  if (postContent !== undefined && hasLatex(postContent.childNodes)) {
    import('./katex.js')
      .then(module => module.default(postContent))
      .catch(err => console.log(err));
  }

  postContent.querySelectorAll("p > img").forEach(p => p.parentElement.style.textAlign = "center");

})();