<!--
    Page description for a single Area.
    As described in the SmallCard component, the same component was used for both Area and Location since they have the same structure.
-->
<template>
    <div>
    <head>
      <meta name="description" content="Explore the area of investment of VenTour. Learn about the focus, potential investments, and success stories within this area of expertise, including the company involved.">
    </head>
    <main id="back">
        <div class="info-group">

            <div class="arrow">
                <div class="arrow-left">
                    <NuxtLink :to="area.id === 1 ? '/companies' : '/areas/' + (area.id - 1)" class="nav-link2">
                        <img class="area-arrow" src="~/assets/img/left-arrows.png" alt="Left Arrow">
                    </NuxtLink>
                </div>
                <h1 class="name">{{ area.name }}</h1>
                <div class="arrow-right">
                    <NuxtLink :to="area.id === 4 ? '/companies' : '/areas/' + (area.id + 1)" class="nav-link2">
                        <img class="area-arrow" src="~/assets/img/right-arrows.png" alt="right Arrow">
                    </NuxtLink>
                </div>
            </div>
            <hr />
            <div v-if="!isMobile">
                <desktop>
                    <div class="row-section">
                        <div class="column-c">
                            <img id="main-img-area" :src="area.image" alt="Area Image"/>
                        </div>
                        <div class="column2-c">
                            <div class="description-container">
                                <p class="description">{{ area.description }}</p>
                                <p class="description2">{{ area.description2 }}</p>
                            </div>
                        </div>
                    </div>
                </desktop>
            </div>

            <div v-else>
                <mobile>
                    <div class="column-section">
                        <div class="column-c">
                            <img id="main-img3" :src="area.image" alt="Area Image"/>
                        </div>
                        <div class="column2-c">
                            <div class="description-container2">
                                <p class="description">{{ area.description }}</p>
                                <p class="description2">{{ area.description2 }}</p>
                            </div>
                        </div>
                    </div>

                </mobile>
            </div>

            <hr />
        </div>
        <div v-if="filtered.length > 0">
            <div class="row-section">
                <div class="text-center">
                    <p>COMPANIES IN THIS AREA:</p>
                </div>
            </div>
            <div v-if="!isMobile">
                <desktop>
                    <div class="row-section3">
                        <div class="carousel-area" ref="carousel">
                            <div class="slides">
                                <CarouselCompany v-for="company of filtered" :subtitle="company.ceo" :area="company.areas"
                                    :image="company.image" :link="'/companies/' + company.id" />
                            </div>
                        </div>
                        <div class="nav-buttons">
                            <div class="nav-button-wrapper">
                                <button class="nav-button left" @click="scrollLeft">&#8249;</button>
                            </div>
                            <div class="nav-button-wrapper">
                                <button class="nav-button right" @click="scrollRight">&#8250;</button>
                            </div>
                        </div>
                    </div>
                </desktop>
            </div>
            <div v-else>
                <mobile>
                    <div class="column2Card">
                        <Cardsection v-for="company of filtered" :subtitle="company.ceo" :area="company.areas"
                            :image="company.image" :link="'/companies/' + company.id" />
                    </div>
                </mobile>
            </div>
        </div>
        <div class="col3topAreas">
                <router-link to="/companies" class="nav-link-end">
                    <a class="card13Areastop">
                        <div class="go-cornertop">
                        </div>
                        <h3>CHECK ALL AREAS</h3>
                    </a>
                </router-link>
        </div>
    </main>
</div>
</template>
     

<script>

export default defineNuxtComponent({
    data() {
        return {
            activeSection: 1,
            isMobile: false,
        };
    },

    methods: {
        detectMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );
        },
        scrollLeft() {
            const carousel = this.$refs.carousel;
            carousel.scrollBy({
                left: -carousel.offsetWidth,
                behavior: 'smooth'
            });
        },

        scrollRight() {
            const carousel = this.$refs.carousel;
            carousel.scrollBy({
                left: carousel.offsetWidth,
                behavior: 'smooth'
            });
        }
    },

    mounted() {
        this.isMobile = this.detectMobile();
    },
});


</script>
<script setup>

const route = useRoute()
const id = route.params.id
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: companies } = await useFetch(useRuntimeConfig().public.serverURL + '/companies')
const { data: area } = await useFetch(useRuntimeConfig().public.serverURL + '/areas/' + id)
/*
    In order to implement a filter, we use the computed property.
    This allows to have a cached value that contains the filtered list.
    Instead of using the normal list for the cards, we used the computed property directly.
*/

const filtered = computed(() => {
    const arrTot = []
    // Checking for values where the part of the company name is provided
    console.log(area.value.name)
    for (let company of companies.value) {
        if (company.ceo != undefined) { // First 8 of the db are supervisors' name
            if (company.areas == area.value.name) { // All companies
                //console.log(company) // Only for debug
                arrTot.push(company)
            }
        }
    }
    console.log("My life is here:", arrTot)
    return arrTot

})


</script>

<style>
#back {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('assets/img/19449741.jpg');
    background-position-x: center;
}

.nav-link2 {
    text-decoration: none;
    font-family: monospace;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    padding: 0.8em;
    font-size: 16px;
}

.arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2%;
}

.arrow-left,
.arrow-right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
}

.arrow img {
    max-width: 8%;
    max-height: 12%;
    position: relative;
    animation: blink 4s infinite;
}

.name {
    flex: 1;
    margin: 0;
}


.name {
    font-family: sans-serif;
    font-size: 40px;
    font-weight: bold;
}

@media (max-width: 600px) {
    .arrow {
        height: 80%;
        margin-top: 20%;
        margin-right: 0px;
    }

    .arrow-left,
    .arrow-right {
        width: 90%;
    }

    .arrow img {
        max-width: 20%;
        max-height: 80%;
    }

    .name {
        text-align: center;
        font-size: 32px;
    }
}

@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}

.info-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}


#data-container-c {
    margin-top: 10px;
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
}

.areas {
    margin-top: 1%;
}

.ceo {
    margin-top: 2%;
}

hr {
    width: 70%;
    border: 1px solid black;
    margin: 20px 0;
}

.row-section {
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel-area {
    padding-left: 18%;
    padding-right: 25%;
    width: 40%;
    overflow: hidden;
    position: relative;
}

.slides {
    display: flex;
    gap: 2%;
    scroll-behavior: smooth;
}

.nav-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}

.nav-button-wrapper {
    display: flex;
    align-items: center;
    margin: 0 5px;
}

.nav-button {
    background-color: transparent;
    border: none;
    font-size: 50px;
    color: #000;
    cursor: pointer;
    padding: 5px 10px;
}

.nav-button:hover {
    color: #1d587c;
}

.left {
    transform: rotate(0deg);
}

.right {
    transform: rotate(0);
}

.column-c {
    flex-basis: 500px;
}

.column2-c {
    flex-basis: 500px;
}

.column.p2 {
    position: absolute;
}

.column-section {
    flex-direction: column;
}

#main-img-area {
    width: 80%;
    height: 40%;
}

#main-img3 {
    width: 300px;
    height: 40%;
}

.description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-right: 25px;
    text-align: justify;
    font-family: PT sans-serif;
}

.description-container2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    text-align: justify;
    font-family: sans-serif;
    font-size: 13pt;
}

.description {
    font-size: 18px;
    padding-right: 25px;
}

.description2 {
    font-size: 18px;
    padding-right: 25px;
}

.description-container2 {
    height: 20%;
    padding-left: 7%;
    width: 90%;
    font-family: sans-serif;
    font-size: 1.0rem;
}

.official-link {
    text-align: left;
}

.link {
    text-decoration: underline;
    cursor: pointer;
    color: rgb(19, 112, 112);
}

.link:hover {
    color: blue;
}

.supervisor {
    position: relative;
    text-align: center;
    color: black;
    text-decoration: none;
}

.text-center {
    font-size: 20px;
    font-family: sans-serif;
    font-weight: bold;
}

.row-section3 {
    overflow: hidden;
    gap: 3%;
    align-items: center;
    width: 100%;
    padding-bottom: 3%;
}

@media (max-width: 300px) {

    .arrow-left {
        position: absolute;
        left: -212px;
    }

    .arrow-right {
        position: absolute;
        right: -212px;
    }

    .arrow img {
        max-width: 80%;
        max-height: 80%;
    }

    .name {
        font-size: 20px;
    }

    .carousel {
        padding: 0 3%;
        width: 94%;
    }

    #main-img-area,
    #main-img3 {
        width: 100%;
        height: auto;
    }

    .description-container2 {
        font-size: 14px;
    }

    .nav-buttons {
        margin-top: 3px;
    }

    .nav-button {
        font-size: 24px;
    }

    .row-section3 {
        gap: 1%;
        padding-bottom: 1%;
    }
}

@media (max-width: 768px) {
    .nav-link2 {
        font-size: 1rem;
        padding: 0.3em;
    }
}

.col3topAreas {
    max-width: 100%;
    margin: 2%;
    justify-content: center;
}

.col3topAreas h3 {
    color: #262626;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 4px;
}

.card13Areastop {
    top: -36%;
    left: 0%;
    display: block;
    position: relative;
    width: 100%;
    font-size: 18px;
    background-color: #f2f8f9;
    border-radius: 10px;
    padding: 20px 20px;
    text-decoration: none;
    z-index: 5;
    overflow: hidden;
}

.card13Areastop:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 60% 50%;
    transition: transform 0.25s ease-out;
}

.card13Areastop:hover:before {
    transform: scale(21);
}

.card13Areastop:hover h3 {
    transition: all 0.3s ease-out;
    color: #ffffff;
}

@media (max-width: 600px) {
    .card13Areastop {
        margin: 1%;
        width: 75%;
    }

    .card13Areastop {
        font-size: 16px;
        padding: 15px 15px;
        top: 0%;
        left: 5%;
    }

    .card13Areastop:before {
        top: -6px;
        right: -6px;
        height: 12px;
        width: 12px;
    }

    .card13Areastop:hover:before {
        transform: scale(4);
    }
}
</style>