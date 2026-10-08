const cont1 = document.querySelector(`.cont1`);
const cont2 = document.querySelector(`.cont2`);
const cont3 = document.querySelector(`.cont3`);
const cont4 = document.querySelector(`.cont4`);

const containers = [cont1, cont2, cont3, cont4];

export const renderPaintings = function (paintings) {
  let br = 0;
  paintings.forEach((p, j) => {
    if (j % 4 === 0 && j !== 0) {
      br++;
    }
    let img = document.createElement(`img`);
    img.src = p.src;
    img.classList.add(`img`);
    img.classList.add(`img${j}`);
    containers[br].appendChild(img);
  });
};
