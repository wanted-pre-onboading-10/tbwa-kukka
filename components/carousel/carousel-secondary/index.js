function CarouselSecondary({ target, initialState }) {
  const carouselSecondary = document.createElement('div');
  carouselSecondary.classList.add('d-flex', 'carousel--secondary');
  target.appendChild(carouselSecondary);

  this.state = initialState;

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const item = initialState;

    carouselSecondary.innerHTML = `
      <a href="${item.link}" class="carousel__secondary--link">
        <img src="${item.img}" alt="${
      item.alt
    }" class="carousel__secondary--image" />
      </a>
      <div class="carousel__secondary--text flex-grow-1 d-flex flex-column">
        <a href="${
          item.link
        }" class="carousel__secondary--title mb-1 d-flex flex-column flex-md-row">
          <span>${item.title}</span>
          <span>(${item.start} ~ ${item.end})</span>
        </a>
        <p class="carousel__secondary--price mb-2">${item.price}</p>
        <ul class="carousel__secondary--tags d-flex flex-wrap">
          ${item.tags.reduce((result, current) => {
            return (
              result +
              `<li class="carousel__secondary--tag ${current.className}">${current.name}</li>`
            );
          }, ``)}
        </ul>
      </div>
    `;
  };

  this.render();
}

export default CarouselSecondary;
