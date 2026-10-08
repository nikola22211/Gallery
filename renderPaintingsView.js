const cont1 = document.querySelector(`.cont1`);
const cont2 = document.querySelector(`.cont2`);
const cont3 = document.querySelector(`.cont3`);
const cont4 = document.querySelector(`.cont4`);

const containers = [cont1, cont2, cont3, cont4];

export const renderPaintings = function (paintings) {
  let markup = ``;
  let br = 0;
  paintings.forEach((p, j) => {
    if (j % 4 === 0 && j !== 0) {
      br++;
      markup = ``;
    }
    markup = `<img class="img img${j}" src=${p.src} />`;
    containers[br].insertAdjacentHTML(`beforeend`, markup);
  });
};
