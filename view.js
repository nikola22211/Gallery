class View {
  _modal = document.querySelector(`.modal`);

  closeModal() {
    this._modal.addEventListener(`click`, (e) => {
      if (e.target.closest(`.close-modal`)) {
        this._modal.classList.add(`hidden`);
      }
    });

    document.addEventListener(`keydown`, (e) => {
      if (e.key === `Escape` && !this._modal.classList.contains(`hidden`)) {
        this._modal.classList.add(`hidden`);
      }
    });
  }
}

export default View;
