import katex from 'katex';
import renderMathInElement from "katex/dist/contrib/auto-render.js";


function initkatex(element) {
  renderMathInElement(element, {
    delimiters: [
      {left: "$$", right: "$$", display: true},
      {left: "$", right: "$", display: false},
      {left: "\\(", right: "\\)", display: false},
      {left: "\\[", right: "\\]", display: true}
    ]
  });
}

export default initkatex;