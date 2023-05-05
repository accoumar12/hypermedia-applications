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
                <p>We provide to our portfolio companies: support, guidance, and resources, to help them succeed.
                    We have a track record of identifying and nurtuing some of the most innovative and dynamic
                    startups in the world!
                </p>
            </div>
        </div>
        <!--<div id="card-container">
            <Card v-for="location of locations" :title="location.name" :subtitle="location.city"
                :link="'/locations/' + location.id" />
        </div>-->
    </main>
</template>

<script>
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
    color: rgb(121, 189, 166);
}
</style>
