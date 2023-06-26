<template>
    <div class="column41">
        <div class="area-icons">
            <img class="img" :src="logo" alt="AreaLogo"/>
        </div>
        <div class="counter" :data-target="data_target"></div>
        <div class="link-text">
            <a class="learn-more">
                <NuxtLink :to="link">
                    <h1 style="color:#033f52">{{ name }} Investments →</h1>
                </NuxtLink>
            </a>
        </div>
         <label :for="name">
            <input type="radio" :id="name" :value="name" name="Investments-categories" :checked="isSelectedArea(name)" @change="selectArea(name)">
            <h1 class="learn-more" style="color:#033f52">SELECT & CHECK COMPANIES</h1>
            <span class="checkmark"></span>
        </label>
    </div>
</template>

<script>
export default {
    emits: ['update:areas'],
    methods: {
        isSelectedArea(areaName) {
          return this.value === areaName;
        },
        selectArea(areaName) {
          this.$emit('update:areas', areaName);
        },
      },
    mounted() {
        const counters = document.querySelectorAll('.counter');
        const delay = 500;

        const isInView = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        const animateCounters = () => {
            counters.forEach((counter, index) => {
                if (isInView(counter)) {
                    const target = +counter.dataset.target;
                    const start = performance.now();
                    const duration = 2000;

                    const step = (timestamp) => {
                        const elapsed = timestamp - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const value = Math.floor(progress * target);
                        counter.textContent = `${value}+`;
                        if (progress < 1) {
                            requestAnimationFrame(step);
                        }
                    };

                    requestAnimationFrame(step);
                } else {
                    counter.textContent = '0+';
                }
            });
        };

        const handleScroll = () => {
            animateCounters();
            window.removeEventListener('scroll', handleScroll);
        };
        window.addEventListener('scroll', handleScroll);
    },
};

</script>
    
<script setup>
const props = defineProps(['logo', 'name', 'data_target', 'link', 'value',]);
</script>
    
<style>

.counter {
    font-size: 3rem;
    font-weight: bolder;
    color: #033f52;
}

.column41 {
    padding-top: 2%;
    position: relative;
    background-size: 80%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: right;
}
/* Or we can use:
.column4 {
    position: relative;
    background-size: 80%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: right;
}

.column4::before {
    background: url('assets/img/areas.png') center center no-repeat;
    content: "";
    position: absolute;
    background-size: 80%;
    width: 90%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    opacity: 0.17;
}

.column4 p {
    font-size: 1.5rem;
    font-weight: bold;
}
*/

.row-section2 {
    display: flex;
    flex-direction: row;
    gap: 10%;
    align-items: center;
    height: 20%;
    width: 70%;
    padding-bottom: 3%;
}
/* And + */

.column41::before {
    background: url('assets/img/areas.png') center center no-repeat;
    content: "";
    position: absolute;
    background-size: 80%;
    width: 90%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    background-color: rgba(255, 255, 255, 0.8);
    opacity: 0.07;
}

.area-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 0;
    padding-bottom: 50%;
    position: relative;
}

.area-icons img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.column4 p {
    font-size: 1.5rem;
    font-weight: bold;
}

.column41 p {
    font-size: 1.5rem;
    font-weight: bold;

}

.link-text {
    text-align: center;
    text-decoration: underline;
}

.learn-more {
    text-decoration: none;
    font-size: 16px;
    text-decoration-color: #033f52;
    font-family: sans-serif;
    font-size: large;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position: relative;
    position: left;
}

.learn-more-2 {
    margin-left: 16%;
    text-decoration: none;
    font-size: 16px;
    text-decoration-color: #033f52;
    font-family: sans-serif;
    font-size: large;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position: relative;
    z-index: 4;

}

.learn-more a {
    text-decoration: none;
    font-size: 10px;
}

label>[type=checkbox],
label>[type=radio] {
    margin-right: 2rem;
    -webkit-text-fill-color: #0e6b74;
    margin: 1rem 1rem 0.2rem 0;
    position: absolute;
}

</style>