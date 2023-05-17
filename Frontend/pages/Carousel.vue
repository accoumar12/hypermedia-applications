<template>
  <main id="back-c">
    <div class="background-section">
      <div class="overlay"></div>
      <div class="text-container-h">
        <h1 class="big-text">About VenTour</h1>
        <p class="small-text">We are a leading venture capital firm driving innovation and empowering startups to reach
          their full potential.</p>
      </div>
    </div>
    <div class="carousel-container" @wheel="handleMouseScroll">
      <div class="carousel">
        <div class="inner" ref="inner" :style="innerStyles">
          <div class="card" v-for="(card, index) in  cards " :key="index">
            <div class="card-content">
              <img class="img" :src="card.image" />
              <div class="text-container2">
                <hr>
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
    <div class="header">
      <h1 class="first-h1">We work with a plan! </h1>
      <h1>Our investment Approach</h1>
      <p>We are focused on four key factors that help us identify promising startups or better say... We make EVERYTHING
        promising!</p>
    </div>
    <div class="row1-container">
      <div class="box box-down cyan">
        <h2>Growing Markets</h2>
        <p>We look for startups that are addressing large and growing markets with significant untapped potential. We
          assess the size of the market, the competitive landscape, and the potential for disruption.</p>
        <img class="ikona" src="~/assets/img/market-analysis.png">
      </div>
      <div class="box red">
        <h2>Team Experience</h2>
        <p>We believe that the founding team is critical to the success of any startup. We evaulate the team's experience,
          skills, and track record to ensure that they have the expertise and leadership necessary to execute on their
          vision. </p>
        <img class="ikona" src="~/assets/img/teamexp.png">
      </div>
      <div class="box box-down blue">
        <h2>Startup Products</h2>
        <p>We evaluate the startup's product or technology to ensure that it has a strong competitive advantage and
          addresses a real customer need. We assess the potential for scalability and the potential for further innovation
          and development.</p>
        <img class="ikona" src="https://assets.codepen.io/2301174/icon-calculator.svg">
      </div>
    </div>
    <div class="row2-container">
      <div class="box orange">
        <h2>Customer Needs</h2>
        <p>We focus on analyzing the alignment with market demand and customer needs. We assess the clarity and
          feasibility of the company's objectives, ensuring that they are relevant and time-bound.
          We evaluate the strategic plans, including actions and milestones outlined to achieve the specific objectives.
        </p>
        <img class="ikona" src="~/assets/img/customer-need.png">
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
          title: 'Ventour: A Century of Pioneering Investments',
          text: 'Everything started in 1907 and none of us knew that be would witness the birth of VenTour, a trailblazing venture capital company that has shaped industries and empowered entrepreneurs for over a hundred years.'
        },
        {
          image: 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          title: "Forging a Legacy: VenTour's Early Years of Innovation",
          text: "The relentless determination and tireless efforts marked VenTour's formative years, as visionary founders and dedicated teams worked tirelessly to lay the foundation for a venture capital empire. It took us years and year of hardworking hours and study to rise up till here.",
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
          title: "Excellence Recognized: VenTour's Triumph as Best Company of the Year",
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
#back-c {
  width: 100%;
  background-image: url('assets/img/Background_Abstract.jpg');
  background-size: contain;
  height: 100%;
  background-repeat: no-repeat;
  position: relative;
  z-index: 1;
  overflow: hidden;

}


.background-section {
  position: relative;
  height: 500px;
  background-size: cover;
  background-position: center;
  z-index: 2;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}

.text-container-h {
  width: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

.big-text {
  text-decoration-color: #0e6b74;
  text-align: center;
  font-size: 85px;
  font-family: monospace;
  font-weight: bold;
  margin-bottom: 20px;
}

.small-text {
  text-align: center;
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;

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


.carousel-container {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 700px;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.carousel {
  width: 100%;
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
  color: white;
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
  position: absolute;
  bottom: 5%;
  left: 15%;
  text-align: justify;
  padding: 2%;
  border-radius: 4px;
}

.card-info {
  text-align: justify;
  font-family: PT sans-serif;
}

.card-title {
  background-color: rgba(233, 228, 228);
  font-size:
    24px;
  max-width: 70%;
  margin: 0 0 10px;
  color: #110404;
}

.card-text {
  background-color: rgb(7, 119, 167);
  font-size: 18px;
  margin: 0;
  max-width: 60%;
  color: #fff;
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
  --veryLightGray: hsl(0, 4%, 75%);
  --weight1: 200;
  --weight2: 400;
  --weight3: 600;
}

body {
  font-size: 15px;
  font-family: monospace;
  background-color: var(--veryLightGray);
}

.attribution {
  font-size: 11px;
  text-align: center;
}

.attribution a {
  color: hsl(228, 45%, 44%);
}

.first-h1:first-of-type {
  font-size: 1rem;
  font-weight: var(--weight3);
  text-decoration-color: aqua;

}

.header.h1:last-of-type {
  color: var(--varyDarkBlue);
}

@media (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
  }
}

.header {
  text-align: center;
  line-height: 0.8;
  margin-bottom: 50px;
  margin-top: 5%;
}

.header p {
  margin: 0 auto;
  line-height: 2;
  color: var(--grayishBlue);
}


.box p {
  color: var(--grayishBlue);
}

.box {
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px var(--grayishBlue);
  padding: 30px;
  margin: 20px;
}

.box .ikona {
  float: right;
  max-width: 25%;
  max-height: 100%;
}

@media (max-width: 450px) {
  .box {
    height: 200px;
  }
}

@media (max-width: 950px) and (min-width: 450px) {
  .box {
    text-align: center;
    height: 180px;
  }
}

.cyan {
  border-top: 3px solid var(--cyan);
}

.red {
  border-top: 3px solid var(--red);
}

.blue {
  border-top: 3px solid var(--blue);
}

.orange {
  border-top: 3px solid var(--orange);
}

h2 {
  color: var(--varyDarkBlue);
  font-weight: var(--weight3);
}


@media (min-width: 950px) {
  .row1-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row2-container {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box-down {
    position: relative;
    top: 150px;
  }

  .box {
    width: 20%;

  }

  .header p {
    width: 30%;
  }

}

/* Media Queries */

@media (max-width: 768px) {
  .carousel-container {
    width: 90%;
  }

  .left-arrow-container,
  .right-arrow-container {
    width: 40px;
    height: 30px;
  }

  .left-arrow-container {
    left: 50px;
  }

  .right-arrow-container {
    right: 50px;
  }
}

@media (max-width: 768px) {
  .carousel-container {
    width: 90%;
  }

  .left-arrow-container,
  .right-arrow-container {
    width: 40px;

    height: 30px;
  }

  .left-arrow-container {
    left: 5%;
  }

  .right-arrow-container {
    right: 5%;
  }
}

@media (max-width: 480px) {
  .carousel-container {
    width: 95%;
    padding-top: 1%;
    height: 500px;
  }

  .left-arrow-container,
  .right-arrow-container {
    width: 30px;
    height: 20px;
  }

  .left-arrow-container {
    left: 2%;
  }

  .right-arrow-container {
    right: 2%;
  }
}
</style>
