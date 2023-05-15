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
                <img class="img" :src="image" />

                <!--<img class="img" src='~/assets/img/People/P01.png' />-->


                <div class="clickable-image-container2">
                    <NuxtLink :to="link">
                        <div class="hover-content2">

                            <img class="img" :src="image" />
                            <h3><span class="subtitle">{{ title }}</span></h3>
                            <p><span class="subtitle">{{ subtitle }}</span></p>
                            <p><span class="subtitle">{{ area }}</span></p>

                        </div>
                    </NuxtLink>
                </div>
            </span>

        </div>


    </div>
</template>

<script setup>
const props = defineProps(['image', 'title', 'subtitle', 'link', 'area']) 
</script>

<style>
.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 70px;
    height: 60%;
}

.img {
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
    margin: auto;
}

.title {
    padding-top: 6%;
    padding-left: 45%;
    position: relative;
    font-size: 2rem;
    font-weight: bold;
    font-family: monospace;
}

.subtitle {
    text-decoration: none;
}

.h3 {
    text-decoration: none;
}

.image-container {
    position: relative;
    justify-content: center;
    display: inline-block;
    text-align: center;
    border-color: none;
    border-style: none;
    margin-left: 5rem;
    margin-bottom: 0%;
}

.image-container img {
    display: block;
    margin: 0 auto;
    max-width: 95%;
    height: 50%;
    width: 80%;
}

.image-container h2 {
    margin-top: 20px;
    margin-bottom: 0;
    text-decoration: none;
}

.image-container:hover img {
    opacity: 0;
}

.image-container:hover h2 {
    opacity: 0;
}

.clickable-image-container2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #94d5db;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-style: solid;
    border-radius: 20%;
    border-color: #94d5db;
}

.clickable-image-container2 a {
    text-decoration: none;
}

.clickable-image-container2 img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.clickable-image-container2:hover {
    opacity: 1;
}

.clickable-image-container2:hover img {
    opacity: 1;
    height: auto;
}

.image-container:hover .clickable-image-container2 {
    opacity: 1;
}

.hover-content2 {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    text-decoration: none;
}

.hover-content2 p {
    margin: 0;
    color: black;
    margin-top: 2%;
    text-decoration: none;
}

.hover-content2 img {
    display: block;
    margin-top: 50;
    max-width: 50%;
    height: auto;
}
</style>