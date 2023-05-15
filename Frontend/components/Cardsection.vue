<template>
    <div class="row-c">
        <div class="image-container-section">
            <img class="img" :src="image" />
            <NuxtLink :to="link">
                <p><span class="subtitle2">CEO: {{ subtitle }}</span></p>
                <p><span class="subtitle2">Area: {{ area }}</span></p>
            </NuxtLink>
        </div>
    </div>
</template>
    
<script setup>
const props = defineProps(['image', 'title', 'subtitle', 'link', 'area']);
</script>
    
<style>
.row-section2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10%;
    align-items: center;
    height: 20%;
    width: 70%;
    padding-bottom: 3%;
}

.row-c {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 2%;
    margin-left: 2%;
    margin-top: 2%;
    height: 60%;
    gap: 10%;
}

.img {
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
    margin: auto;
}



.h3 {
    text-decoration: none;
}

.image-container-section {
    position: relative;
    width: 280px;
    height: 180px;
    background-color: white;
    border-style: solid;
    border-radius: 0%;
    border-color: transparent;
    transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

}

.image-container-section:hover {
    background-color: #94d5db;
    border-color: #94d5db;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.image-container-section a {
    text-decoration: none;
}

.image-container-section img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: 40%;
    transition: opacity 0.3s ease-in-out;
}

.image-container-section:hover img {
    opacity: 1;
    height: 40%;
}

.subtitle2 {

    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: #333;
    font-size: 1rem;
}
</style>