<!--
    Header of the page
-->
<template>
    <div>
        <header>
            <h1><router-link to="/"><img class="logo" src="~/assets/img/logo-witho-bck-slog.png"></router-link></h1>
            <nav>
                <router-link to="/about-us" class="nav-link">About Us</router-link>
                <router-link to="/dogs" class="nav-link">Our Team</router-link>
                <router-link to="/investments" class="nav-link">Investments</router-link>
                <router-link to="/news" class="nav-link">News</router-link>
                <router-link to="/contact" class="nav-link">Get In Touch</router-link>
                <div class="search">
                    <button @click="toggleSearch"><i class="fas fa-search" style="color: #2479a3;"></i></button>
                    <input v-if="isSearchExpanded" type="text" :class="{ 'search-expanded': isSearchExpanded }"
                        placeholder="Search" v-model="searchText" @keyup.enter="search" ref="searchInput" />
                    <font-awesome-icon :icon="['fas', 'robot']" />
                </div>
            </nav>
        </header>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isSearchExpanded: false,
            searchText: '',
        };
    },
    methods: {
        toggleSearch(event) {
            event.stopPropagation();
            if (this.isSearchExpanded) {
                this.isSearchExpanded = false;
            } else {
                this.isSearchExpanded = true;
                this.$nextTick(() => this.$refs.searchInput.focus());
            }
        },
        search() {
            // handle search functionality here
            console.log('Searching for: ', this.searchText);
        },
    },
    mounted() {
        document.addEventListener("click", (event) => {
            if (!event.target.closest(".search")) {
                this.isSearchExpanded = false;
            }
        });
    },
};
</script>

<style scoped>
header {

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    z-index: 1000;
}

header {
    height: 3em;
    padding: 0.5em 0.5%;
    margin-bottom: 0.5em;
    border-bottom: 0.2em solid;
    border-image: linear-gradient(to right, rgb(25, 147, 153), rgb(4, 48, 61)) 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav {
    display: flex;
    gap: 3em;
    font-size: 1rem;
    text-decoration: rgb(25, 129, 129);
    align-items: center;
    font-weight: bold;
    flex-grow: 1;

}

.nav-link {
    text-decoration: none;
    font-family: monospace;
    font-weight: bold;
    color: rgb(46, 194, 194);
    cursor: pointer;
    text-align: center;
    padding: 0.4em;
    --b: 0.1em;
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

.logo {
    vertical-align: middle;
    max-width: 16%;
    max-height: 25%;
    height: auto;
    width: auto;
    margin: auto;
    padding-left: 5%;
}


.search {
    display: flex;
    align-items: center;
    background-color: #337ab7;
    text-decoration-color: white;
    border-radius: 5px;
    padding: 5px;
}

.search input[type="text"] {
    border: none;
    outline: none;
    background-color: #337ab7;
    text-decoration-color: white;
    font-size: 1rem;
    padding: 0.5em;
    width: 0;
    border-radius: 1em;
    transition: all 0.2s ease-in-out;
}

.search input.search-expanded {
    width: 200px;
    color: white;
    border-radius: 1em;
}

.search button {
    background-color: rgb(141, 1, 1);
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.5em;
}



/* responsive styles */
@media (max-width: 768px) {
    .nav-link {
        font-size: 1rem;
        padding: 0.3em;
    }

    .logo {
        max-width: 30%;
        max-height: 20%;
    }
}
</style>