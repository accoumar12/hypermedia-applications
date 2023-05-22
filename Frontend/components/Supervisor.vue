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
    <NuxtLink class="link" :to="link">
        <div class="hover-content2">
            <p><span class="subtitle">Supervisor: {{ name }}</span></p>
        </div>
    </NuxtLink>
                    
</template>

<script setup>
    const props = defineProps(['link', 'name']) 
</script>

<style>
.link{
    text-decoration: none;
}

.subtitle {
    text-decoration: none;
}

.hover-content2 {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: black;
    text-decoration: none;
}

.hover-content p {
    margin: 0;
    color: black;
    margin-top: 2%;
    text-decoration: none;
}

</style>