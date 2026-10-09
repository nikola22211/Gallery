class RenderSlideshow {
  _parentElement = document.querySelector(`header`);
  _modal = document.querySelector(`.modal`);
  _picCurrent;
  _handler;

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

      this._picCurrent = pic;
      this._handler = handler2;
    });
    this.nextPrevious();
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
  nextPrevious() {
    this._modal.addEventListener(`click`, (e) => {
      const btnGo = e.target.closest(`.btn_pn`);

      if (!btnGo) {
        return;
      }
      const pic = this._handler(this._picCurrent, btnGo);
      if (!pic) {
        return;
      }
      this._picCurrent = pic;
      this.generateMarkup(this._picCurrent);
    });
  }
}

export default new RenderSlideshow();
