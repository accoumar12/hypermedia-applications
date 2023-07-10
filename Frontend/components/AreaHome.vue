<template>
    <div class="column">
        <NuxtLink :to="link" class="area-router">
            <div class="card-area">
                <div class="icon">
                </div>
                <h3>{{ name }}</h3>
                <p>
                    {{ p1 }}
                    <span class="highlight">
                        {{ ph }}
                    </span>
                    {{ p2 }}
                </p>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps(['name', 'p1', 'ph', 'p2', 'link']);
</script>

<style >
/*Section areas*/
.row-areas {
    margin-bottom: 2%;
    margin-left: 5%;
    margin-top: 2%;
    display: flex;
    flex-wrap: wrap;
}

.row h1 {
    width: 100%;
    text-align: center;
    font-size: 3.75em;
    margin: 0.6em 0;
    font-weight: 600;
    color: #070024;
}

.column {
    padding: 1em;
}

.card-area {
    font-family: sans-serif;
    padding: 3.1em 1.25em;
    text-align: center;
    background: linear-gradient(0deg, rgb(15, 108, 126) 10px, transparent 10px);
    background-repeat: no-repeat;
    background-position: 0 0.62em;
    box-shadow: 0 0 2.5em rgba(0, 0, 0, 0.15);
    border-radius: 0.5em;
    transition: 0.5s;
    cursor: pointer;
    height: 75%
}

.area-router {
    text-decoration: none;
}

.card-area .icon {
    object-fit: contain;
    background-image: url('assets/img/area.png');
    background-size: cover;
    font-size: 2.5em;
    height: 2em;
    width: 2em;
    margin: auto;
    background-color: rgb(15, 108, 126);
    display: grid;
    place-items: center;
    border-radius: 50%;
    color: #ffffff;
}

.icon:before {
    position: absolute;
    content: "";
    height: 1.5em;
    width: 1.5em;
    border: 0.12em solid rgb(15, 108, 126);
    border-radius: 50%;
    transition: 0.5s;
}

span.highlight {
    font-size: 16px;
    background-color: #d9f3f3;
}

.card-area h3 {
    font-size: 18px;
    margin: 1em 0 1.4em 0;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: #070024;
    text-transform: uppercase;
}

.card-area p {
    font-size: 16px;
    line-height: 1.5em;
    color: #625a71;
}

.card-area:hover {
    background-position: 0;
}

.card-area:hover .icon:before {
    height: 2.25em;
    width: 2.25em;
}

@media screen and (min-width: 992px) {

    .card-area {
        padding: 2em 2em;
    }

    .column {
        flex: 0 0 33.33%;
        max-width: 22.33%;
        padding: 0 1em;
    }
}
</style>