function CarouselMain({ target, initialState }) {
  const carouselMain = document.createElement('div');
  carouselMain.classList.add('flex-grow-1');
  target.appendChild(carouselMain);

  this.state = initialState;

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    const item = initialState;

    carouselMain.innerHTML = `
      <a href="${item.link}" class="carousel__primary--link position-relative d-block h-100 overflow-hidden">
        <img src="${item.img}" alt="${item.alt}" class="carousel__primary--image h-100" />
        <div class="carousel__primary--text">
          <p class="carousel__primary--subtitle">${item.description}</p>
          <h2 class="carousel__primary--title">${item.title} 자세히 보기 </h2>
        </div>
      </a>
    `;
  };

  this.render();
}

export default CarouselMain;
