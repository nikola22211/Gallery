import * as model from "./model.js";
import { renderPaintings } from "./renderPaintingsView.js";
import renderOnePainting from "./renderOnePainting.js";

const controlOnePainting = function (img) {
  const pic = model.paintings.find((el) => el.num === +img.dataset.num);
  console.log(pic);
  return pic;
};

const init = function () {
  renderPaintings(model.paintings);
  renderOnePainting.renderOne(controlOnePainting);
  renderOnePainting.closeModal();
};
init();
