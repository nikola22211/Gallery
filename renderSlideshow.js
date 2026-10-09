class RenderSlideshow {
  _parentElement = document.querySelector(`header`);
  _modal = document.querySelector(`.modal`);

  openSlideshow(handler, handler2) {
    this._parentElement.addEventListener(`click`, (e) => {
      const btnSlide = e.target.closest(`.slideshow`);
      if (!btnSlide) {
        return;
      }
      this._modal.classList.remove(`hidden`);
      console.log(btnSlide);
      const pic = handler();
      this.generateMarkup(pic);
      this.closeModal();
      this.nextPrevious(pic, handler2);
    });
  }

  generateMarkup(pic) {
    const markup = `<div class="slideshow-div"><button class="btn_pn btn-prev"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>
</button>
    <img class="img-slide" src="${pic.src}"/>
    <button class="btn_pn btn-next"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</button></div>`;

    this._modal.innerHTML = ``;
    this._modal.insertAdjacentHTML(`beforeend`, markup);
  }

  closeModal() {
    document.addEventListener(`keydown`, (e) => {
      if (e.key === `Escape` && !this._modal.classList.contains(`hidden`)) {
        this._modal.classList.add(`hidden`);
      }
    });
  }

  nextPrevious(pic, handler) {
    let picCurrent = pic;
    this._modal.addEventListener(`click`, (e) => {
      const btnGo = e.target.closest(`.btn_pn`);
      if (!btnGo) {
        return;
      }
      console.log(btnGo);
      picCurrent = handler(picCurrent, btnGo);
      this.generateMarkup(picCurrent);
    });
  }
}

export default new RenderSlideshow();
