<!--
    This small component has been made to show the specific area for each company or Person.
-->
<template>
    <NuxtLink class="link" :to="link">
        <div class="hover-content2">
            <p><span class="subtitle">Area of investment: {{ name }}</span></p>
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