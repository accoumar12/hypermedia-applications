<!--
    Card to display information in the list page.
    This component could be achieved with the SmallCard component by using a <slot> to insert the div with the image. The solution used here allows for better control of the layout.
    Since the information shown can be categorized into title and subtitle, it was preferred to use only one component for both dogs and location.

    PROPS:
    - title: main information to display
    - subtitle: second information to display
    - link: link to the page description
-->
<template>     

    <div class="row">
        <div class="image-container">
            <span class="subtitle">
                <img class="img" :src = "image" />

                <!--<img class="img" src='~/assets/img/People/P01.png' />-->

                <h2>{{ title }}</h2>

                <div class="clickable-image-container">
                    <NuxtLink :to="link">
                        <div class="hover-content">

                            <img class="img" :src = "image" />
                            <h3><span class="subtitle">{{ title }}</span></h3>
                            <p><span class="subtitle">{{ subtitle }}</span></p>
                            <p>Health</p>

                        </div>
                    </NuxtLink>
                </div>
            </span>
        
        </div>

        
    </div>
</template>

<script setup>
const props = defineProps(['image','title', 'subtitle', 'link'])
</script>

<style>
.img {
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
    margin: auto;
}

/*
.card {
    
    display: flex;              QUESTO è QUELLO DOVE CI SONO LE CARTE 
    flex-flow: column;
    padding: 20px;              DELLE PERSONE
    border: 2px solid black; QUELLO SOTTO è IL MODELLO DI NIKY GIUSTO?
    border-radius: 20px;
    width: fit-content;
    height: fit-content;
}
*/

.title {
    font-size: 2em;
    font-weight: bold;
}


.image-container {
    position: relative;
    justify-content: center;
    display: inline-block;
    text-align: center;
    border-color: none;
    border-style: none;
    margin-left: 8vw;
    margin-bottom: 5%;
}

.image-container img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    width: 80%;
}

.image-container h2 {
    margin-top: 20px;
    margin-bottom: 0;
}

.image-container:hover img {
    opacity: 0;
}

.image-container:hover h2 {
    opacity: 0;
}

.clickable-image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #77c7ac;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-style: solid;
    border-radius: 20%;
    border-color: #77c7ac;
}

.clickable-image-container img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.clickable-image-container:hover {
    opacity: 1;
}

.clickable-image-container:hover img {
    opacity: 1;
    height: auto;
}

.image-container:hover .clickable-image-container {
    opacity: 1;
}

.hover-content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
}

.hover-content p {
    margin: 0;
    color: #fff;
    margin-top: 2%;
}

.hover-content img {
    display: block;
    margin-top: 50;
    max-width: 50%;
    height: auto;
}

</style>