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
    const divHelper = helperFun(p, j);

    containers[br].appendChild(divHelper);
  });
};

const helperFun = function (p, j) {
  const divHelper = document.createElement(`div`);
  const pPainter = document.createElement(`p`);
  const pName = document.createElement(`p`);

  divHelper.classList.add(`div-pic`);
  divHelper.classList.add(`div-pic--${j}`);
  divHelper.dataset.num = j + 1;

  pPainter.textContent = p.painter;
  pName.textContent = p.name;

  pPainter.classList.add(`painter`);
  pName.classList.add(`name`);

  const img = document.createElement(`img`);
  img.src = p.src;
  img.classList.add(`img`);
  img.classList.add(`img${j}`);

  divHelper.appendChild(img);
  divHelper.appendChild(pName);
  divHelper.appendChild(pPainter);

  return divHelper;
};
