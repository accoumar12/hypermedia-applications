<!--
    Header of the page
-->
<template>
    <div class="header-container">
        <header>
            <h4><router-link to="/"><img class="logo" src="~/assets/img/logo-witho-bck-slog.png"></router-link></h4>
            <nav>
                <span>
                    <p><router-link to="/History" class="nav-link">About Us</router-link></p>
                </span>
                <router-link to="/people" class="nav-link">Our Team</router-link>
                <div class="dropdown">
                    <div class="dropdown-toggle">
                        <router-link to="/companies" class="nav-link">Investments</router-link>
                    </div>
                    <div class="dropdown-menu">
                        <p>
                            <router-link to="/companies" class="nav-link">Areas</router-link>
                        </p>
                        <div class="sub-menu">
                            <p><router-link to="/technology" class="nav-link">Technology</router-link></p>
                            <p><router-link to="/healthcare" class="nav-link">Healthcare</router-link></p>
                            <p><router-link to="/consumer" class="nav-link">Consumer Goods</router-link></p>
                            <p><router-link to="/sustainability" class="nav-link">Sustainability</router-link></p>
                        </div>
                    </div>
                </div>
                <router-link to="/contact" class="nav-link">Get In Touch</router-link>
                <div class="search">
                    <input v-if="isSearchExpanded" type="text" :class="{ 'search-expanded': isSearchExpanded }"
                        placeholder="Search" v-model="searchText" @keyup.enter="search" ref="searchInput" />
                    <button @click="toggleSearch"><img src="~/assets/img/magnifying-glass.png" alt="search-icon"
                            style="color: #2479a3;"></button>
                    <!--
                    <ul>
                      <li v-for="result in searchResults" :key="result.text">
                        <a :href="result.link">{{ result.text }}</a>
                      </li>
                    </ul>
                -->
                </div>
            </nav>
        </header>
    </div>
</template>
<script>
const searchText = ref("");
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
            const arrTot = []
            const pages = [
                { text: 'Page 1', link: '/page1' },
                { text: 'Page 2', link: '/page2' },
                { text: 'Page 3', link: '/page3' },
                // ... more pages
            ];
            const searchTerm = searchText.value.toLowerCase();
            // handle search functionality here
            console.log('Searching for: ', this.searchText);

            for (const page of pages) {
                if (page.text.toLowerCase().includes(searchTerm)) {
                    arrTot.push(page)
                    //this.searchResults.push(page);
                }
            }
            return arrTot;
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
.header-container {
    display: flex;
    justify-content: right;
}

* {
    box-sizing: border-box;
}

header {
    position: fixed;
    width: 100%;
    height: 4rem;
    padding: 1vw 1%;
    margin-bottom: 0.7em;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 999;
}

.h4 {
    padding-left: 50%;
}

nav {
    padding-left: 10%;
    display: flex;
    gap: 3%;
    font-size: 1rem;
    text-decoration: #033f52;
    align-items: center;
    font-weight: bold;
    flex-grow: 1;
    width: 100%;

}

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

.dropdown {
    position: relative;
    display: inline-block;
}


.dropdown-toggle {
    display: flex;
    align-items: center;
}

.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 5%;
    min-width: 160px;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px;
    z-index: 1;
}

.dropdown:hover .dropdown-menu {
    display: block;
}


.sub-menu {
    display: none;
    position: absolute;
    top: 0%;
    left: 60%;
    min-width: 160px;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px;
    z-index: 1;
}

.dropdown:hover .sub-menu {
    display: none;
}

.dropdown-menu:hover .sub-menu {
    display: block;
}

.nav-link:hover {
    --_p: 100%;
    --_s: .3s;
}

.logo {
    max-width: 25%;
    max-height: 25%;
    height: auto;
    width: auto;
    margin: auto;
    padding-left: 5%;
}


.search {
    display: flex;
    align-items: center;
    text-decoration-color: white;
    border-radius: 5px;
    padding: 5px;
    background-color: transparent;
}

.search input[type="text"] {
    border: none;
    outline: none;
    text-decoration-color: #033f52;
    font-size: 1rem;
    padding: 0.5em;
    width: 0;
    border-radius: 1em;
    transition: all 0.2s ease-in-out;
    background-color: transparent;
}

.search input.search-expanded {
    width: 200px;
    background-color: transparent;
    color: rgb(25, 129, 129);
    border-radius: 1em;
}

.search button {
    background-color: none;
    border-radius: 50%;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.search button img {
    height: 12px;
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