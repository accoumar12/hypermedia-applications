<template>
  <div class="carousel-container">

    <div class="carousel">
      <div class="inner" ref="inner" :style="innerStyles">
        <div class="card" v-for="(card, index) in  cards " :key="index"
          :style="{ backgroundImage: `url(${backgroundUrl})` }">
          <div class="card-content">
            <img class="img" :src="card.image" />
            <h2 class="card-title">{{ card.title }}</h2>
            <p class="card-text">{{ card.text }}</p>
          </div>
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
</template>

<script>
import backgroundUrl from "~/assets/img/card1.png";
export default {
  data() {
    return {
      cards: [
        {
          image: 'https://images.unsplash.com/photo-1652109629663-1fbc7b2ff7e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80',
          title: 'Card 2 Title',
          text: 'Card 1 Text'
        },
        {
          image: 'https://images.unsplash.com/photo-1683971745402-62952a6b8677?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
          title: 'Card 2 Title',
          text: 'Card 2 Text'
        },
        {
          image: '',
          title: 'Card 3 Title',
          text: 'Card 3 Text'
        }
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
.card-content img {
  top: 0;
  left: 0;
  width: 70px;
  height: 30px;
  object-fit: cover;
}

.carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
}

.left-arrow-container {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4%;
  z-index: 1;
  padding-left: 45%;
  padding-bottom: 1%;
}

.right-arrow-container {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4%;
  z-index: 1;
  padding-right: 45%;
  padding-bottom: 1%;
}

.left-arrow,
.right-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left-arrow img,
.right-arrow img {
  position: relative;
  width: 5%;
  height: 5%;
}

.carousel {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
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
  display: inline-flex;
  color: white;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 80% 100%;
}

.card img {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .content {
  position: absolute;
  bottom: 0;
  left: 0;
}

.card .content .hr {
  width: 20%;
}

.card h2 {
  margin: 0;
  font-size: 24px;
  color: #110404;
}

.card p {
  margin: 10px 0 0;
  font-size: 16px;
  color: #fff;
}
</style>
