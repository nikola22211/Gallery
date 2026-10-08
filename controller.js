import * as model from "./model.js";
import { renderPaintings } from "./renderPaintingsView.js";
import renderOnePainting from "./renderOnePainting.js";

const controlOnePainting = function (img) {};

const init = function () {
  renderPaintings(model.paintings);
  renderOnePainting.renderOne(controlOnePainting);
};
init();
