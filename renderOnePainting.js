import View from "./view.js";

class RenderOnePainting extends View {
  _parentEl = document.querySelector(`.container`);

  renderOne(handler) {
    this._parentEl.addEventListener(`click`, (e) => {
      const img = e.target.closest(`.div-pic`);
      if (!img) {
        return;
      }
      this._modal.classList.remove(`hidden`);
      console.log(img);
      const pic = handler(img);

      this.generateMarkup(pic);
    });
  }

  generateMarkup(pic) {
    const markup = `
     <button class="close-modal">&times;</button>
     <span class="year-desc">${pic.year}</span>
    <img class="one-painting" src="${pic.src}"/>
    <div class="contHelper">
    <h1 class="title">${pic.name}</h1>
    <h3 class="author">${pic.painter}</h3>
    <p class="painting-desc">Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, sed do eiusmod tempor 
     incididunt ut labore et dolore magna aliqua. Ut enim 
     ad minim veniam, quis nostrud exercitation ullamco laboris 
     nisi ut aliquip ex ea commodo consequat. Duis aute irure 
     dolor in reprehenderit in voluptate velit esse cillum 
     dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
     cupidatat non proident, sunt in culpa qui officia deserun
      mollit anim id est laborum.</p></div>`;
    this._modal.innerHTML = ``;
    this._modal.insertAdjacentHTML(`beforeend`, markup);
  }
}

export default new RenderOnePainting();
