import * as model from "./model.js";
import { renderPaintings } from "./renderPaintingsView.js";
import renderOnePainting from "./renderOnePainting.js";
import renderSlideshow from "./renderSlideshow.js";

const controlOnePainting = function (img) {
  const pic = model.paintings.find((el) => el.num === +img.dataset.num);
  return pic;
};

const controlSlideshow = function () {
  const pic = model.paintings.find((el) => el.num === 1);
  console.log(pic);
  return pic;
};

const controlNextPrevious = function (pic, btnGo) {
  if (btnGo.classList.contains(`btn-prev`)) {
    if (pic.num === 1) {
      return pic;
    }
    return model.paintings.find((el) => el.num === pic.num - 1);
  }
  if (btnGo.classList.contains(`btn-next`)) {
    if (pic.num === 16) {
      return pic;
    }
    return model.paintings.find((el) => el.num === pic.num + 1);
  }
};

const init = function () {
  renderPaintings(model.paintings);
  renderOnePainting.renderOne(controlOnePainting);
  renderSlideshow.openSlideshow(controlSlideshow, controlNextPrevious);
};
init();
