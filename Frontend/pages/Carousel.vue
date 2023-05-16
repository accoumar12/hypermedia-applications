<template>
  <main id="back-c">
    <div class="carousel-container" @wheel="handleMouseScroll">
      <div class="carousel">
        <div class="inner" ref="inner" :style="innerStyles">
          <div class="card" v-for="(card, index) in  cards " :key="index">
            <div class="card-content">
              <img class="img" :src="card.image" />
              <div class="text-container">
                <hr>
                <div class="card-info">
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
import backgroundUrl from "~/assets/img/card1.png";
export default {
  data() {
    return {
      cards: [
        {
          image: 'https://images.unsplash.com/photo-1652109629663-1fbc7b2ff7e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
          title: 'Card 1 Title',
          text: 'Card 1 Text'
        },
        {
          image: 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          title: 'Card 2 Title',
          text: 'Card 2 Text'
        },
        {
          image: 'https://www.whoateallthepies.tv/wp-content/gallery/signing-on-photos/pa-2469860.jpg',
          title: 'Card 3 Title',
          text: 'Card 3 Text'
        },
        {
          image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          title: 'Card 4 Title',
          text: 'Card 4Text'
        },
        {
          image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
          title: 'Card 4 Title',
          text: 'Card 4Text'
        },
        {
          image: 'https://media.istockphoto.com/id/530686057/photo/portrait-of-young-man-holding-trophy-standing-in-conference-room-smiling-to-applauding-audience.jpg?b=1&s=170667a&w=0&k=20&c=of1xAxrNRRRN6p1V7cRhBiTW0O-lIEQxhCDOGwJu0L4=',
          title: 'Card 4 Title',
          text: 'Card 4Text'
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
      if (this.transitioning) return

      this.transitioning = true

      this.moveLeft()

      this.afterTransition(() => {
        const card = this.cards.shift()
        this.cards.push(card)
        this.resetTranslate()
        this.transitioning = false
      })
    },

    prev() {
      if (this.transitioning) return

      this.transitioning = true

      this.moveRight()

      this.afterTransition(() => {
        const card = this.cards.pop()
        this.cards.unshift(card)
        this.resetTranslate()
        this.transitioning = false
      })
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
  background-size: cover;
  background-repeat: no-repeat;


}

#back-c::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('assets/img/Background_Abstract.jpg');
  opacity: 0.1;
  z-index: -1;
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

.container-history .content-h {
  position: relative;
  top: 80%;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;

}


.carousel-container {
  width: 80%;
  padding-top: 2.5%;
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
  white-space: nowrap;
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
  position: relative;
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
}

.text-container {
  position: absolute;
  bottom: 5%;
  left: 15%;
  background-color: rgba(233, 228, 228, 0.5);
  padding: 2%;
  border-radius: 4px;
}

.card-info {
  color: white;
}

.card-title {
  font-size:
    24px;
  margin: 0 0 10px;
  color: #110404;
}

.card-text {
  font-size: 16px;
  margin: 0;
  color: #fff;
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
