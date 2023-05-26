<!--
    Header of the page
-->
<template>
    <div>
    <div v-if="!isMobile">
    <desktop> 
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
    </desktop>
    </div>
    <div v-else>
    <mobile>
        <div class="navbar">
        <header>
            <a class="navbar-item">
                <router-link to="/"><img src="~/assets/img/logo-witho-bck-slog.png" alt="Vue.js Examples" width="40" height="40"></router-link>

            </a>
            <div id="navbarBurger" class="navbar-burger burger is-active" data-target="navMenuIndex">
                <span></span>
                <span></span>
                <span></span>
            </div>
            
        </header>    
    </div>
      </mobile>
  </div>
  </div>

</template>
<script>

const searchText = ref("");
export default {
    data() {
        return {
            isMobile: false,
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
        detectMobile() {
          return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        },
        
    },
    mounted() {
        this.isMobile = this.detectMobile();
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
.navbar-brand, .navbar-tabs {
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  min-height: 3.25rem;
}

.navbar-item {
  font-size: 15px;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.navbar-burger {
  cursor: pointer;
  display: block;
  height: 60px;
  position: relative;
  width: 4.25rem;
  right: 10px;
  margin-left: auto;
}



.navbar-burger.is-active span:nth-child(1) {
  -webkit-transform: translateY(5px) rotate(45deg);
  transform: translateY(5px) rotate(45deg);
}
.navbar-burger span:nth-child(1) {
  top: calc(50% - 6px);
}
.navbar-burger span {
  background-color: currentColor;
  display: block;
  height: 1px;
  left: calc(50% - 8px);
  position: absolute;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transition-duration: 86ms;
  transition-duration: 86ms;
  -webkit-transition-property: background-color,opacity,-webkit-transform;
  transition-property: background-color,opacity,-webkit-transform;
  transition-property: background-color,opacity,transform;
  transition-property: background-color,opacity,transform,-webkit-transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  width: 16px;
}

.navbar-menu.is-active {
  display: block;
}

@media screen and (max-width: 1023px)
.navbar-menu {
  background-color: #fff;
  -webkit-box-shadow: 0 8px 16px rgba(10,10,10,.1);
  box-shadow: 0 8px 16px rgba(10,10,10,.1);
  padding: .5rem 0;
}
.navbar-menu {
  display: none;
}


.navbar-item.has-dropdown {

    padding: 0;

}
.navbar-item {

    font-size: 15px;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;

}
.navbar-item, .navbar-link {

    color: #4a4a4a;
    display: block;
    line-height: 1.5;
    padding: .5rem .6rem;
    position: relative;

}

</style>