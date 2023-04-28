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
                <router-link to="/get-in-touch" class="nav-link">Get In Touch</router-link>
                <div class="search">
                    <button @click="toggleSearch"><i class="bi bi-search"></i></button>
                    <input v-if="isSearchExpanded" type="text" :class="{ 'search-expanded': isSearchExpanded }"
                        placeholder="Search" v-model="searchText" @keyup.enter="search" ref="searchInput" />
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
    background-color: white;
}

header {
    height: 3em;
    padding: 0.5em 0.5%;
    margin-bottom: 0.5em;
    border-bottom: 0.2em solid;
    border-image: linear-gradient(to right, rgb(91, 199, 204), rgb(9, 91, 119)) 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav {
    display: flex;
    gap: 3em;
    font-size: 1.2rem;
    text-decoration: rgb(25, 129, 129);
    align-items: center;
    flex-grow: 1;
}

.nav-link {
    text-decoration: none;
    font-family: monospace;
    font-weight: bold;
    color: rgb(13, 84, 84);
    cursor: pointer;
    text-align: center;
    padding: 0.5em;
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
    border-radius: 0.5em;
    transition: all 0.2s ease-in-out;
}

.search input.search-expanded {
    width: 200px;
    color: white;
}

.search button {
    background-color: white;
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