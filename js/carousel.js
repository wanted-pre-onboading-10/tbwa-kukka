import CarouselMain from './carousel-primary.js';
import CarouselSecondary from './carousel-secondary.js';
import { carouselItems } from '../data/carousel-items.js';

function Carousel({ target }) {
  const carousel = document.createElement('div');
  carousel.classList.add(
    'carousel--section',
    'd-flex',
    'flex-column',
    'flex-xl-row',
  );
  target.appendChild(carousel);

  this.state = carouselItems;

  this.setState = nextState => {
    this.state = nextState;
    this.render();
  };

  this.handleRightClick = () => {
    const current = [
      { ...this.state[0] },
      { ...this.state[1] },
      { ...this.state[2] },
    ];
    const next = [...current.slice(1), current[0]];
    this.setState(next);
  };

  this.handleLeftClick = () => {
    const current = [
      { ...this.state[0] },
      { ...this.state[1] },
      { ...this.state[2] },
    ];
    current.unshift(current.pop());
    this.setState(current);
  };

  const rightBtn = document.querySelector('.carousel--button.right');
  const leftBtn = document.querySelector('.carousel--button.left');

  rightBtn.addEventListener('click', this.handleRightClick);
  leftBtn.addEventListener('click', this.handleLeftClick);

  this.render = () => {
    carousel.innerHTML = `
      <div class="carousel__section--primary d-flex position-relative w-100"></div>
      <div class="carousel__section--secondary d-flex flex-column justify-content-between w-100"></div>
    `;

    new CarouselMain({
      target: document.querySelector('.carousel__section--primary'),
      initialState: this.state[0],
    });

    new CarouselSecondary({
      target: document.querySelector('.carousel__section--secondary'),
      initialState: this.state[1],
    });

    new CarouselSecondary({
      target: document.querySelector('.carousel__section--secondary'),
      initialState: this.state[2],
    });
  };

  this.render();
}

export default Carousel;
