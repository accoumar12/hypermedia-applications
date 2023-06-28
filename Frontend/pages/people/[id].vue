<!--
    Page description for a single person.
    As described in the SmallCard component, the same component was used for both Person and Location since they have the same structure.
-->
<template>
    <main id="back">
        <div class="info-group">
            <div class="arrow">
                <router-link to="/people"><img src="~/assets/img/left-arrows.png"></router-link>
            </div>
            <h1 class="name">{{ person.name }}</h1>
            <div id="data-container">
                <p class="role">{{ person.role }}</p>
                <p class="team">{{ person.team }}</p>
            </div>
            <hr />
            <div class="social-icons">
                <img src="~/assets/img/facebook.png" alt="Facebook" />
                <img src="~/assets/img/linkedin.png" alt="LinkedIn" />
                <img src="~/assets/img/email.png" alt="Email" />
            </div>
            <div v-if="!isMobile">
                <desktop>
                    <div class="row-section">
                        <div class="column-b">
                            <img id="main-img2" :src="person.image" />
                        </div>
                        <div class="column2">
                            <div class="button-container" style="position: relative; top: 0; z-index: 1;">
                                <button class="section-button" :class="{ active: activeSection === 1 }"
                                    @click="activeSection = 1">
                                    <br>
                                    BIO
                                </button>
                                <button class="section-button" :class="{ active: activeSection === 2 }"
                                    @click="activeSection = 2">
                                    <br>
                                    AWARDS
                                </button>
                                <button class="section-button" :class="{ active: activeSection === 3 }"
                                    @click="activeSection = 3">
                                    <br>
                                    CV
                                </button>
                            </div>

                            <div class="description-container1">
                                <div v-if="activeSection === 1">
                                    <p2 class="description">{{ person.description }}</p2>
                                    <p2 class="description">{{ person.description2 }}</p2>
                                </div>

                                <div v-else-if="activeSection === 2">
                                    <p2 class="description">
                                        At VenTour Capital, we believe in celebrating the outstanding contributions and
                                        achievements of our exceptional team members. Our dedicated professionals
                                        continually strive for excellence and consistently go above and beyond to achieve
                                        remarkable results. In acknowledgment of unwavering commitment, {{ person.name }}
                                        received the following awards:
                                        <ul class="award-list">
                                            <li>{{ person.award1 }}</li>
                                            <br>
                                            <li v-if="person.award2 != ''">{{ person.award2 }}</li>
                                            <br>
                                            <li v-if="person.award3 != ''">{{ person.award3 }}</li>
                                            <br>
                                            <li v-if="person.award4 != ''">{{ person.award4 }}</li>
                                        </ul>
                                    </p2>
                                </div>

                                <div v-else-if="activeSection === 3">
                                    <p2 class="description">{{ person.cv }}</p2>
                                </div>

                            </div>
                        </div>
                    </div>
                </desktop>
            </div>
            <div v-else>
                <mobile>
                    <div class="column">
                        <div class="column">
                            <img id="main-img2" :src="person.image" />
                        </div>
                        <div class="column2">
                            <div class="description-containera2">
                                <div class="button-container2" style="position: relative; top: 0; z-index: 1;">
                                    <button class="section-button" :class="{ active: activeSection === 1 }"
                                        @click="activeSection = 1">
                                        <br>
                                        BIO
                                    </button>
                                    <button class="section-button" :class="{ active: activeSection === 2 }"
                                        @click="activeSection = 2">
                                        <br>
                                        AWARDS
                                    </button>
                                    <button class="section-button" :class="{ active: activeSection === 3 }"
                                    @click="activeSection = 3">
                                    <br>
                                    CV
                                </button>
                                </div>

                                <div class="description-container2" v-if="activeSection === 1">
                                    <p2 class="description2">{{ person.description }}</p2>
                                    <p2 class="description2">{{ person.description2 }}</p2>
                                </div>

                                <div class="description-container2" v-else-if="activeSection === 2">
                                    <p3 class="description2">
                                        <ul>
                                            <li>{{ person.award1 }}</li>
                                            <br>
                                            <li v-if="person.award2 != ''">{{ person.award2 }}</li>
                                            <br>
                                            <li v-if="person.award3 != ''">{{ person.award3 }}</li>
                                            <br>
                                            <li v-if="person.award4 != ''">{{ person.award4 }}</li>
                                        </ul>
                                        <!--
                                <ul id="AwardList"></ul>
                                -->
                                    </p3>
                                </div>
                                <div class="description-container2" v-else-if="activeSection === 3">
                                    <p2 class="description2">{{ person.cv }}</p2>
                                </div>
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
                    <p>COMPANIES IN SUPERVISION:</p>
                </div>
            </div>
            <div v-if="!isMobile">
                <desktop>
                    <div class="row-section2">
                        <Cardsection v-for="company of filtered" :subtitle="company.ceo" :area="company.areas"
                            :image="company.image" :link="'/companies/' + company.id" />
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
    </main>


    <!--<SmallCard :title="person.company.name" :subtitle="person.company.area" :link="'/companies/' + person.company.id" />-->
    <!--
            <div class="column3">
                <img src="image1.jpg" alt="Image 1">
                <p>Text for image 1</p>
            </div>
            <div class="column3">
                <img src="image2.jpg" alt="Image 2">
                <p>Text for image 2</p>
            </div>
            <div class="column3">
                <img src="image3.jpg" alt="Image 3">
                <p>Text for image 3</p>
            </div>
</div>-->
</template>
        <!--
            v-html allows us to change the structure of a HTML element.
            It used because of the 'newLineOnFullStop' function that returns a string with the <br> tags.
            This function is a composable that is available anywhere, without requiring to be imported.
        -->  
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
    },
    async asyncData() {
        // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
        const route = useRoute()
        const companies = await $fetch(useRuntimeConfig().public.serverURL + '/companies' + route.params.id)
        return {
            companies
        }
    },
    mounted() {
        this.isMobile = this.detectMobile();
        document.addEventListener("click", (event) => {
            if (!event.target.closest(".search")) {
                this.isSearchExpanded = false;
            }
        });
    },
})
</script>

<script setup>

const route = useRoute()
const id = route.params.id
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: person } = await useFetch(useRuntimeConfig().public.serverURL + '/people/' + id)

const { data: companies } = await useFetch(useRuntimeConfig().public.serverURL + '/companies')
/*
    In order to implement a filter, we use the computed property.
    This allows to have a cached value that contains the filtered list.
    Instead of using the normal list for the cards, we used the computed property directly.
*/

const filtered = computed(() => {
    const arrTot = []
    // Checking for values where the full list is provided
    for (let company of companies.value) {
        console.log(id + company.companyId)
        if (company.companyId == id) {
            console.log(company)
            arrTot.push(company)
        }
    }
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


.social-icons {
    display: flex;
    justify-content: center;
    margin-top: 2%;
    gap: 12%;
}

.social-icons img {
    width: 30px;
    height: 30px;
    padding: auto;
    cursor: pointer;
}

.arrow {
    width: 16%;
    height: 15%;
    padding-top: 6%;
    justify-content: left;
    padding-right: 70%;
}

.arrow img {
    max-width: 12%;
    max-height: 12%;
    position: relative;
    animation: blink 4s infinite;
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

.name {
    font-size: 30px;
    font-weight: bold;
}

#data-container {
    margin-top: 10px;
    font-size: 18px;
}

.role {
    margin-top: 1%;
}

.team {
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
    margin-top: 30px;
    padding-bottom: 2%;
}

.column-b {
    flex-basis: 30%;
    padding-left: 8%;
}

.column2 {
    flex-basis: 50%;
    padding-right: 4%;
}

#main-img2 {
    padding-right: 10%;
    width: 300px;
    height: 40%;
}

.button-container {
    position: fixed;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 2%;
    font-family: sans-serif;
    color: #033f52;
}

.section-button {
    padding-bottom: 2.5%;
    border: none;
    background: none;
    cursor: pointer;
    margin-right: 20px;
    font-family: monospace;
    color: #033f52;
    font-size: 1rem;
}

.section-button.active {
    font-family: monospace;
    font-size: 1rem;
    color: #033f52;
    font-weight: bold;
    background-color: rgb(212, 208, 208);
    border-radius: 10%;
}

.award-list {
    width: 197%;
    padding-left: 26%;
}

.row-section2 {
    display: flex;
    align-items: center;
    margin-top: 30px;
    margin-left: -12%;
    padding-bottom: 2%;
}



.column2Card {
    margin-top: 30px;
    align-items: center;
    margin-bottom: 30px;
}

.column.p2 {
    position: absolute;
}



.description-container1 {
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2%;
    align-items: center;
    text-align: justify;
    padding-right: 23%;
}

.description-container1 p2 {
    height: 20%;
    padding-left: 2%;
    font-size: 15pt;
    width: 40%;
    font-family: sans-serif;
    font-size: 1.1rem;
}


.description-containera2 p2 {
    height: 20%;
    padding-left: -10%;
    width: 90%;
    font-family: sans-serif;
    font-size: 1.0rem;
}

.description-containera p3 {
    height: 20%;
    padding-left: 70%;
    font-size: 15pt;
    width: 150%;
    font-family: sans-serif;
    font-size: 1.1rem;
}

.description-containera2 p3 {
    height: 20%;
    padding-left: 70%;
    font-size: 15pt;
    width: 150%;
    font-family: sans-serif;
    font-size: 1.0rem;
}

.row2 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
    padding-bottom: 2%;
}

.text-center {
    text-align: center;
    position: absolute;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

.column3 {
    flex-basis: 20%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-left: 1px solid black;
}

.column3:first-child {
    border-left: none;
}

.column3 p {
    font-size: 16px;
}

#description {
    padding: 0 20px 0 20px;
    font-size: 15pt;
}


.button-container2 {
    position: absolute;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 2%;
    margin-left: 7%;
    font-family: monospace;
    color: #033f52;
}
</style>