<!--
    Page with the list of all the location.
    As described in the Card component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <div class="containeri">
            <div class="image-containeri">
                <div class="image-wrapperi">
                    <img src="~/assets/img/logoinv.png" style="width: 100%;height: 100%;">
                </div>

            </div>
            <div class="text-containeri">
                <h1>Investing in the most promising startups with the potential to change the
                    world! </h1>
            </div>
            <div class="text-containeri2">
                <p>
                    We have a track record of identifying and nurtuing some of the most innovative and dynamic
                    startups in the world!
                </p>
            </div>
        </div>
        <div class="row4">
            <div class="column41">
                <div class="area-icons">
                    <img src="~/assets/img/technology.png" alt="Tech">
                </div>
                <div class="counter" data-target="100"></div>
                <a class="learn-more" href="/technology.vue#projects">
                    Technology Investments
                </a>

                <div class="link-text">
                    <a><router-link to="/technology">
                            <h1 class="learn-more" style="color:#033f52">LEARN MORE</h1>
                        </router-link></a>
                </div>
            </div>


            <div class=" column4">
                <div class="area-icons">
                    <img src="~/assets/img/health.png" alt="Healthcare">
                </div>
                <div class="counter" data-target="250"></div>
                <p>Healthcare Investments</p>

                <div class="link-text">
                    <a><router-link to="/healthcare">
                            <h1 class="learn-more" style="color:#033f52">LEARN MORE</h1>
                        </router-link></a>
                </div>
            </div>


            <div class="column4">
                <div class="area-icons">
                    <img src="~/assets/img/customer.png" alt="Goods">
                </div>
                <div class="counter" data-target="120"></div>
                <p>Consumer Goods Investments</p>

                <div class="link-text">
                    <a><router-link to="/consumer">
                            <h1 class="learn-more" style="color:#033f52">LEARN MORE</h1>
                        </router-link></a>
                </div>
            </div>

            <div class="column4">
                <div class="area-icons">
                    <img src="~/assets/img/sustainable.png" alt="Sustainability">
                </div>
                <div class="counter" data-target="270"></div>
                <p>Sustainability Investments</p>

                <div class="link-text">
                    <a><router-link to="/sustainability">
                            <h1 class="learn-more" style="color:#033f52">LEARN MORE</h1>
                        </router-link></a>
                </div>
            </div>
        </div>

        <!--<div id="card-container">
            <Card v-for="location of locations" :title="location.name" :subtitle="location.city"
                :link="'/locations/' + location.id" />
        </div>-->
    </main>
</template>

<script>
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: dogs } = await useFetch(useRuntimeConfig().public.serverURL + '/companies')
/*
    In order to implement a filter, we use the computed property.
    This allows to have a cached value that contains the filtered list.
    Instead of using the normal list for the cards, we used the computed property directly.
*/
const areas = ref("");

const filtered = computed(() => {
    // Checking for values where the full list is provided
    if ((role.areas == 0 || areas.value == ""))
        return dogs.value

    const arr = []


    // Filtering the list
    for (let dog of dogs.value) {
        if (dog.areas == areas.value) {
            arr.push(dog)
        }/*
        else if (dog.role.toLowerCase().includes(role.value.toLowerCase()))
            arr.push(dog)*/
    }

    // Returning the filtered list
    return arr

})
function getButtonString(a) {
    const arr = []
    var button = a; // replace "myButton" with the ID of your button
    for (let dog of dogs.value) {
        if (dog.name.includes(name.value) && dog.areas == a)
            arr.push(dog)
    }
    return arr;
}

export default {
    mounted() {
        const counters = document.querySelectorAll('.counter');
        const delay = 500;

        // define a function to check if an element is in view
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
                // only animate counters that are in view
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
                    setTimeout(() => {
                        requestAnimationFrame(step);
                    }, index * delay);

                } else {
                    counter.textContent = '0+';

                }
            });
        };

        // run the animation once when the page loads
        animateCounters();

        // run the animation again when the user scrolls
        window.addEventListener('scroll', animateCounters);
    },
    methods: {
        navigateToProjects() {
            this.$router.push({ name: 'technology', hash: '#projects' });
        },
    },

};
//import { pbkdf2 } from 'crypto';

/*
    The defineNuxtComponent gets us access to the asyncData property.
    This is the first function that is called by nuxt when the page is called.
    We can use this to pre-load the data to make it available to the user.
*/
/*export default defineNuxtComponent({
    async asyncData() {
        // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
        const locations = await $fetch(useRuntimeConfig().public.serverURL + '/locations')

        return {
            locations
        }
    }
})*/
</script>
<style>
.containeri {
    background-color: #033f52;
    padding-top: 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.image-containeri {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    align-items: stretch;
    max-width: 100%;
}

.image-wrapperi {
    border-radius: 100%;
    border: 3px solid #fff;
    overflow: hidden;
    padding-top: 100%;
    position: relative;
    width: 20rem;
    height: 0.9rem;
    margin: 0 auto;
}

.image-wrapperi img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: auto;
    object-fit: cover;
}

.text-containeri {
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-containeri2 {
    display: flex;
    justify-content: center;
    align-items: center;
}

.text-containeri2 p {
    width: 30%;
    font-size: 1.2rem;
    font-family: monospace;
    text-align: center;
    color: white;
}


.text-containeri h1 {
    font-size: 1.3rem;
    font-family: monospace;
    margin-bottom: 0.5 rem;
    color: rgb(242, 249, 246);
}

.column4 {

    position: relative;
    background-size: 100%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-left: 1px solid black;

}

.column4::before {
    background: url('assets/img/areas.png') center center no-repeat;
    content: "";
    position: absolute;
    background-size: 100%;
    width: 90%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    background-color: rgba(255, 255, 255, 0.8);

    opacity: 0.07;


}

.column41 {

    position: relative;
    background-size: 100%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}


.counter {
    font-size: 3rem;
    font-weight: bolder;
    color: #033f52;
}

.column41::before {
    background: url('assets/img/areas.png') center center no-repeat;
    content: "";
    position: absolute;
    background-size: 100%;
    width: 90%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    background-color: rgba(255, 255, 255, 0.8);

    opacity: 0.07;

}

.row4 {
    width: 100%;
    height: 25rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
    padding-bottom: 2%;
}



.area-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 0;
    padding-bottom: 40%;
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


.learn-more {
    text-decoration-color: #033f52;
    font-family: monospace;
    font-weight: bold;
    font-size: large;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position: relative;
    padding-top: 10%;
    position: left;
}

.team-members-grid2 {
    background-color: rgb(171, 250, 250);
    background-position-x: center;
    opacity: 100%;
    position: relative;
    width: 100%;
}

section {
    display: block;
}

.grid-container2 {
    position: relative;
    padding-right: 30px;
    padding-left: 30px;
    max-width: 90rem;
    margin-left: 10%;
    margin-right: auto;
}

.filter-container2 {
    padding-top: 2%;
}


.grid-x2 {
    padding-top: 2%;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    text-transform: uppercase;
}

.filter-container2 .filter-title2 {
    color: #0e6b74;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 4px;
    line-height: 27px;
    font-family: monospace;
    text-transform: uppercase;
    margin-bottom: 20px;
}

.grid-x2>.shrink {
    width: auto;
}

.cell2.shrink {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}

.cell2 {
    width: 100%;
    margin-right: 40%;
}

.filter-container2 .dropdown-grid-filter-container2 .dropdown-grid-filter2 label {
    font-size: 1.3rem;
    line-height: 1.1;
    font-family: monospace;
    color: #0e6b74;
    font-weight: 500;
    display: block;
    position: relative;

    margin-right: 40px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-bottom: 2px;
}

label>[type=checkbox],
label>[type=radio] {
    margin-right: 2rem;
    -webkit-text-fill-color: #0e6b74;
    margin: 1rem 1rem 0.2rem 0;
}
</style>
