class RenderOnePainting {
  _parentEl = document.querySelector(`.container`);

  renderOne(handler) {
    this._parentEl.addEventListener(`click`, function (e) {
      const img = e.target.closest(`.img`);
      if (!img) {
        return;
      }
      console.log(`Obelezena je slika`);
      handler(img);
    });
  }
}

export default new RenderOnePainting();
