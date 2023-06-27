<template>
    <p>
    	<NuxtLink :to="link" class="nav-link">
    		{{ name }}
    	</NuxtLink>
    </p>
</template>

<script setup>
    const props = defineProps(['name', 'link']);
</script>

<style>
	.nav-link {
    text-decoration: none;
    font-family: monospace;
    font-weight: bold;
    color: rgb(46, 194, 194);
    cursor: pointer;
    text-align: center;
    padding: 0.8em;
    --b: 0.1em;
    font-size: 16px;
    /* the thickness of the line */
    --c: #268fb2;
    /* the color */

    color: #0000;
    padding-block: var(--b);
    background:
        linear-gradient(var(--c) 50%, #06393e 0) 0% calc(100% - var(--_p, 0%))/100% 200%,
        linear-gradient(var(--c) 0 0) 0% var(--_p, 0%)/var(--_p, 0%) var(--b) no-repeat;
    -webkit-background-clip: text, padding-box;
    background-clip: text, padding-box;
    transition: .1s var(--_s, 0s) linear, background-size .1s calc(.3s - var(--_s, 0s));
}

.nav-link:hover {
    --_p: 100%;
    --_s: .3s;
}

</style>