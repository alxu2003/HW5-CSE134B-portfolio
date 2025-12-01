import { projectCardCSS } from "./project-card-css.js";
class projectCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
      console.log("project-card connected");
        const style = document.createElement('style');
        style.textContent = projectCardCSS();

        const anchorURL = this.getAttribute('anchor-url') || '';
        const picSrc = this.getAttribute('pic-src') !== "undefined" ? this.getAttribute('pic-src') : 'undefined';
        const picAlt = this.getAttribute('pic-alt') !== "undefined" ? this.getAttribute('pic-alt') : 'A picture of a UX design project';
        const heading = this.getAttribute('heading') !== "undefined" ? this.getAttribute('heading') : 'No heading provided';
        const keywords = this.getAttribute('keywords') !== "undefined" ? this.getAttribute('keywords') : 'undefined';
        const caption = this.getAttribute('caption') !== "undefined" ? this.getAttribute('caption') : 'No details provided.';;

        const keywordSpans = keywords !== 'undefined' 
            ? keywords.split(',').map(kw => `<span>${kw.trim()}</span>`).join('')
            : '<span>No keywords</span>';
        
        this.innerHTML = `
            <a href= ${anchorURL}>
              <article>
                <picture>
                    <source media="(max-width: 768px)" srcset="${picSrc}-0.5x.png">
                    <source media="(min-width: 769px) and (max-width: 1024px)" srcset="${picSrc}-0.75x.png">
                    <source media="(min-width: 1025px)" srcset="${picSrc}-2x.png">
                    <img src="${picSrc}-2x.png" alt="${picAlt}" width="400" >
                </picture>
                <hgroup>
                  <h2>${heading}</h2>
                  <h3>${keywordSpans}</h3>
                  <p>${caption}</p>
                </hgroup>
              </article>
            </a>
        `;
        this.prepend(style);
    }
}

customElements.define('project-card', projectCard);