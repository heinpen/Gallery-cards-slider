class GalleryCardsSlider {
  constructor(config) {
    this.activeCardIndex = config.activeCardIndex ?? 0;
    this.transition = config.transition ?? "flex 500ms ease-in-out";
    this.#init();
  }

  #init() {
    this.#getAllCards();
    this.#addListener();
  }

  #getAllCards() {
    this.cards = document.querySelectorAll('.card');
    this.cards.forEach((card, index) => {
      if(this.activeCardIndex === index) card.classList.add('card_active');
      card.dataset.index = index;
      // Add transition to each card.
      // Wrap it in setTimeout to remove transition
      // during setting the first card_active.
      setTimeout(() => {
        this.#addTransition(card)
      }, 0)

    })
  }

  #addListener() {
    const container = document.querySelector('#container');
    container.addEventListener('click', (e) => {
      if(!e.target.classList.contains('card_active') && e.target.classList.contains('card')) {
        const index = Number(e.target.dataset.index);
        this.#changeActiveCard(index)
      }
    })
  }

  #changeActiveCard(newIndex) {
    // Remove active status from previous card.
    this.cards[this.activeCardIndex].classList.remove('card_active');
    // Set active status to new card.
    this.cards[newIndex].classList.add('card_active');
    // Save new index.
    this.activeCardIndex = newIndex;
  }

  #addTransition(card) {
    card.style.transition = this.transition;
  }
}

const config = {
  activeCardIndex: 0,
  transition: "flex 500ms ease-in-out"
}

new GalleryCardsSlider(config)

