<template>
  <main>
    <div id="carousel-container" @wheel="handleMouseScroll">
      <div class="carousel">
        <div class="inner" ref="inner" :style="innerStyles">
          <div class="card" v-for="(card, index) in  cards " :key="index">
            <div class="card-content">
              <img class="img" :src="card.image" />
              <div class="text-container2">
                <div class="card-info" v-if="index === currentCardIndex">
                  <h2 class="card-title">{{ card.title }}</h2>
                  <p class="card-text">{{ card.text }}</p>
                </div>
              </div>
              <div class="arrow-c">
                <div class="left-arrow-container">
                  <img class="left-arrow" @click="prev" src="~/assets/img/left-arrows.png" />
                </div>
                <div class="right-arrow-container">
                  <img class="right-arrow" @click="next" src="~/assets/img/right-arrows.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </main>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: 'https://images.unsplash.com/photo-1652109629663-1fbc7b2ff7e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
          title: 'VenTour: A Century of Pioneering Investments',
          text: 'Everything started in 1907 and none of us knew that be would witness the birth of VenTour, a trailblazing venture capital company that has shaped industries and empowered entrepreneurs for over a hundred years.'
        },
        {
          image: 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          title: "Forging a Legacy: VenTour's Early Years of Innovation",
          text: "The relentless determination and tireless efforts marked VenTour's formative years, as visionary founders and dedicated teams worked tirelessly to lay the foundation for a venture capital empire. It took us years and years of hardworking hours and study to rise up till here.",
        },
        {
          image: 'https://media.wnyc.org/i/800/0/c/85/1/47244u.jpg',
          title: "Sealing the Future: VenTour's Inaugural Contract",
          text: 'Now we look back in 1920, at the historic moment of the pioneers of VenTour gather to sign their first groundbreaking contract, igniting a new era of investment and setting the stage for unprecedented growth.'
        },
        {
          image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          title: "Fueling Ambition: VenTour's Journey Driven by Passion",
          text: "The driving force behind VenTour's remarkable journey is our unwavering passion for innovation and bold investments, which  propels us to new heights in the ever-evolving landscape of venture capital."
        },
        {
          image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          title: "The Power of Collaboration: VenTour's Collective Vision",
          text: "Through years we have experienced  the energy and collective wisdom of VenTour's dedicated team as they gather for a transformative meeting, strategizing and shaping the future of investments with their diverse expertise and shared commitment."
        },
        {
          image: 'https://media.istockphoto.com/id/530686057/photo/portrait-of-young-man-holding-trophy-standing-in-conference-room-smiling-to-applauding-audience.jpg?b=1&s=170667a&w=0&k=20&c=of1xAxrNRRRN6p1V7cRhBiTW0O-lIEQxhCDOGwJu0L4=',
          title: "Excellence Recognized:Best Company of the Year",
          text: 'Witness a moment of well-deserved celebration as a proud member of VenTour holds the prestigious award for "Best Company of the Year 2023", a testament to their relentless pursuit of excellence in the realm of venture capital.'
        },
      ],
      innerStyles: {},
      step: '',
      transitioning: false,
      currentCardIndex: 0,
    }
  },

  mounted() {
    this.setStep()
    this.resetTranslate()
  },

  methods: {
    sendEmail() {
      // Send the email
      const email = 'ventourteam@gmail.com';
      const subject = 'General information [Insert Topic]';
      const body = 'Hello, I have some questions about [continue].';

      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    },
    handleMouseScroll(event) {
      const deltaX = event.deltaX
      if (deltaX > 0) {
        this.next()
      } else if (deltaX < 0) {
        this.prev()
      }
    },
    setStep() {
      const innerWidth = this.$refs.inner.scrollWidth
      const totalCards = this.cards.length
      this.step = `0%`
    },

    next() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveLeft();

      this.afterTransition(() => {
        const card = this.cards.shift();
        this.cards.push(card);
        this.resetTranslate();
        this.transitioning = false;
      });

      // Update the current card index
      this.currentCardIndex = (this.currentCardIndex) % this.cards.length;
      // Hide the text of the previous card
      this.cards[this.currentCardIndex].showText = true;
    },

    prev() {
      if (this.transitioning) return;

      this.transitioning = true;

      this.moveRight();

      this.afterTransition(() => {
        const card = this.cards.pop();
        this.cards.unshift(card);
        this.resetTranslate();
        this.transitioning = false;
      });

      // Update the current card index
      this.currentCardIndex = (this.currentCardIndex + this.cards.length) % this.cards.length;

      // Hide the text of the previous card
      this.cards[this.currentCardIndex].showText = true;
    },

    moveLeft() {
      this.innerStyles = {
        transform: `translateX(-${this.step})
                    translateX(-${this.step})`
      }
    },

    moveRight() {
      this.innerStyles = {
        transform: `translateX(${this.step})
                    translateX(-${this.step})`
      }
    },

    afterTransition(callback) {
      const listener = () => {
        callback()
        this.$refs.inner.removeEventListener('transitionend', listener)
      }
      this.$refs.inner.addEventListener('transitionend', listener)
    },

    resetTranslate() {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(-${this.step})`
      }
    }
  }

}
</script>

<style>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}


.container-a {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5%;
}

.container-a h3 {
  color: #262626;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}

.container-a p {
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  color: #666666;
}

p.small {
  font-size: 14px;
}

.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #00838d;
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}




.row3-container {
  padding-left: 75%;
  padding-bottom: 2%;
}



.col3 h3 {
  color: #262626;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}




.text-container-h {
  width: 600px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

}

.big-text {
  background-color: white;
  color: black;
  font-size: 60px;
  font-weight: bold;
  margin: 0 auto;
  padding: 10px;
  width: 28%;
  text-align: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: screen;
}

.small-text {
  font-weight: bold;
  text-align: center;
  font-size: 24px;
  font-family: sans-serif;

}

.arrow-c {
  position: absolute;
  bottom: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0;
  z-index: 1;
}

.arrow-c::before {
  content: "";
  display: block;
  padding-top: 50%;
}


#carousel-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.carousel {
  width: 80% !important;
  overflow: hidden;
  display: flex;
  justify-content: left;
  height: 100%;
}

.inner {
  width: 100%;
  transition: transform 0.1s;
}

.card {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  align-items: left;
  justify-content: left;
  flex-grow: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 80% 100%;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}

.card-content img {
  width: 75%;
  height: 100% !important;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
}

.text-container2 {
  width: 70%;
  position: relative;
  bottom: 27%;
  height: 15%;
  text-align: justify;
  padding: 2%;
  background-color: rgba(233, 228, 228, 0.5);
}

.card-info {
  text-align: justify;
  font-family: sans-serif;
}

.card-title {
  font-size: 24px;
  max-width: 70%;
  margin: 0 0 10px;
  color: #110404;
}

.card-text {
  font-size: 18px;
  margin: 0;
  max-width: 80%;
  color: #110404;
  text-align: justify;
}

.left-arrow-container,
.right-arrow-container {
  position: absolute;
  top: 50%;
  width: 50px;
  height: 40px;
  transform: translateY(-50%);
  cursor: pointer;
}

.left-arrow-container {
  left: calc(10% - 50px);
}

.right-arrow-container {
  right: calc(10% - 50px);
}

.left-arrow img,
.right-arrow img {
  height: auto;
  max-width: 100%;
}

:root {
  --red: hsl(0, 78%, 62%);
  --cyan: hsl(180, 62%, 55%);
  --orange: hsl(34, 97%, 64%);
  --blue: hsl(212, 86%, 64%);
  --varyDarkBlue: hsl(234, 12%, 34%);
  --grayishBlue: hsl(228, 5%, 60%);
  --veryLightGray: hsl(0, 3%, 66%);
  --weight1: 200;
  --weight2: 400;
  --weight3: 600;
}

body {
  font-size: 16px;
  font-family: sans-serif;
  background-color: var(--veryLightGray);
}

/* Media Query for tablets */
@media screen and (max-width: 1024px) {
  .card-content {
    padding: 15px;
  }

  .card-content img {
    width: 100%;
  }

  .text-container2 {
    width: 80%;
    bottom: 20%;
    padding: 2%;
  }

  .card-title {
    font-size: 18px;
    max-width: 90%;
  }

  .card-text {
    font-size: 16px;
    max-width: 90%;
  }

  .left-arrow-container,
  .right-arrow-container {
    width: 40px;
    height: 30px;
  }
}

/* Media Query for mobile devices */
@media screen and (max-width: 768px) {
  .card-content {
    padding: 10px;
    height: 120%;
  }

  .card-content img {
    height: 100%;
    height: fit-content;
  }

  .text-container2 {
    width: 90%;
    height: fit-content;
    bottom: 35%;
    padding: 1%;
  }

  .card-title {
    font-size: 18px;
    max-width: 100%;
  }

  .card-text {
    font-size: 14px;
    max-width: 100%;
  }

  .left-arrow-container,
  .right-arrow-container {
    width: 30px;
    height: 20px;
    top: -150px;
  }
}

@media (max-width: 320px) {

  /* Styles for iPhone 5/SE and similar devices */
  #carousel-container {
    width: 100%;
    height: auto;
    padding: 20px;
  }

  .carousel {
    width: 100%;
    height: auto;
  }

  .card-title {
    font-size: 1rem;
  }

  .card-text {
    font-size: 0.7rem;
  }

  .text-container2 {
    width: 70%;
    position: relative;
    bottom: 27%;
    height: 15%;
    padding: 2%;
    background-color: rgba(233, 228, 228, 0.5);
  }
}
</style>
