<!--
    Page description for a single dog.
    As described in the SmallCard component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main id="back">
        <div class="info-group">
            <div class="arrow">
                <router-link to="/companies"><img src="~/assets/img/left-arrows.png"></router-link>
            </div>
            <h1 class="name">{{ company.name }}</h1>
            <div id="data-container">
                <p class="areas">{{ company.areas }}</p>
                <p class="ceo">{{ company.ceo }}</p>
            </div>
            <hr />
            <div class="social-icons">
                <img src="~/assets/img/facebook.png" alt="Facebook" />
                <img src="~/assets/img/linkedin.png" alt="LinkedIn" />
                <img src="~/assets/img/email.png" alt="Email" />
            </div>
            <div class="row-section">
                <div class="column">
                    <img id="main-img" :src="company.image" />
                </div>
                <div class="column2">
                    <div class="description-container">
                        <p class="description">{{ company.description }}</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    </main>


    <!--<SmallCard :title="dog.company.name" :subtitle="dog.company.area" :link="'/companies/' + dog.company.id" />-->
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
        <!--
        <p id="description" v-html="newLineOnFullStop(dog.description)"></p>
        <SmallCard :title="dog.location.name" :subtitle="dog.location.city" :link="'/locations/' + dog.location.id" />
        -->
  
<script>
export default defineNuxtComponent({
    data() {
        return {
            activeSection: 1,
        };
    },
    /*async asyncData() {
        //const route = useRoute()
        const companies = await $fetch(useRuntimeConfig().public.serverURL + '/companies')

        return {
            companies
        }
    }*/
})


</script>
<script setup>

const route = useRoute()
const id = route.params.id
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: company } = await useFetch(useRuntimeConfig().public.serverURL + '/companies/' + id)
/*
    In order to implement a filter, we use the computed property.
    This allows to have a cached value that contains the filtered list.
    Instead of using the normal list for the cards, we used the computed property directly.
*/


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
    margin-top: 30px;
    padding-bottom: 2%;
}



.column {
    flex-basis: 50%;
    padding-left: 2%;
}

.column2 {
    flex-basis: 50%;
    padding-right: 4%;

}

.column.p2 {
    position: absolute;
}

#main-img {
    width: 60%;
    height: 40%;
    padding-left: 10%;

}

button2 {
    background-color: black;
    color: white;
    padding: 10px;
    border: none;
    margin-top: 10px;
}

button2:hover {
    cursor: pointer;
}

.description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    text-align: justify;
}

.description-container p2 {
    margin-bottom: 10px;
    font-size: 15pt;
    width: 80%;
    font-family: PT sans-serif;
    font-size: 1.1rem;
}

.row6 {
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

.column3 img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
}

.column3 p {
    font-size: 16px;
}

#description {
    padding: 0 20px 0 20px;
    font-size: 15pt;
}
</style>