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
                <router-link to="/"><img src="~/assets/img/logo-witho-bck-slog.png" width="50" height="50"></router-link>
            </a>
                <div id="sidemenu" class="sidemenu">
                <button class="sidemenu__btn" @click="navOpen = !navOpen" :class="{ active: navOpen }">
                      <span class="top"></span>
                      <span class="mid"></span>
                      <span class="bottom"></span>
                </button>
                <transition name="translateX">
                  <nav class="sidemenu__nav" v-show="navOpen">
                    <div class="sidemenu__wrapper">
                      <ul class="sidemenu__list">
                        <span>
                            <p><router-link to="/History" class="nav-link">About Us</router-link></p>
                        </span>
                        <p> <router-link to="/people" class="nav-link">Our Team</router-link></p>
                        
                            <div class="dropdown">
                                <div class="dropdown-toggle">
                                    <p><router-link to="/companies" class="nav-link">Investments</router-link></p>
                                    <div id="sidemenu" class="sidemenu2">
                                        <button class="sidemenu__btn" @click="navOpen2 = !navOpen2" :class="{ active: navOpen2 }">
                                              <span class="top"></span>
                                              <span class="mid"></span>
                                              <span class="bottom"></span>
                                        </button>
                                        <transition name="translateX">
                                          <nav class="sidemenu__nav2" v-show="navOpen2">
                                            <div class="sidemenu__wrapper">
                                              <ul class="sidemenu__list2">
                                <!--<p> <router-link to="/companies" class="nav-link">Areas</router-link> </p>
                            <div class="sub-menu">-->
                                <p><router-link to="/technology" class="nav-link">Technology</router-link></p>
                                <p><router-link to="/healthcare" class="nav-link">Healthcare</router-link></p>
                                <p><router-link to="/consumer" class="nav-link">Consumer Goods</router-link></p>
                                <p><router-link to="/sustainability" class="nav-link">Sustainability</router-link></p>
<!--                        </div>-->
                                              </ul>
                                            </div>
                                          </nav>
                                      </transition>
                                    </div>
                                </div>
                                
                </div>
                
                <p><router-link to="/contact" class="nav-link">Get In Touch</router-link></p>
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
                      </ul>
                    </div>
                  </nav>
                </transition>
              </div>
        </header>    
        </div>
    </mobile>
    </div>
</div>
</template>

<script>

//import { reactive } from 'vue';

const searchText = ref("");
export default {

    data() {
        return {
            isMobile: false,
            navOpen: false,
            navOpen2: false,
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
.navbar{
    position: relative;
}

.navbar-item{
    left: 10px;
    position: fixed;
}

.sidemenu{
    right: 10px;
    position: fixed;
}
.sidemenu2{
    right: 10px;
    position: fixed;
}


.sidemenu__nav {
    width: 100%;
    height: auto;
    background: rgba(255, 255, 255, 0.9);
    position: fixed;
    top: 4rem;
    left: 0;
    z-index: 25;
    box-shadow: 2px 0 3px$grey-6;
    overflow-y: scroll;
  }
.sidemenu__nav2 {
    width: 100%;
    height: auto;
    padding-right: 10px;
    background: rgba(255, 255, 255, 0.9);
    position: relative;
    top: 8rem;
    left: 0;
    z-index: 25;
    box-shadow: 2px 0 3px$grey-6;
    overflow-y: scroll;
  }

.sidemenu__btn {
    align-items: left;
    display: block;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0);
    border: none;
    position: relative;
    cursor: pointer;
    outline: none;
}

.sidemenu__btn span {
      display: block;
      width: 20px;
      height: 3px;
      margin: auto;
      background: #033f52;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: all 0.4s ease;
    }
.sidemenu__btn span.top{
    transform: translateY(-8px);
}
.sidemenu__btn span.bottom {
        transform: translateY(8px);
}

.sidemenu__btn.active .top {
        transform: rotate(-45deg);
      }
.sidemenu__btn.active .mid {
        transform: translateX(-20px) rotate(360deg);
        opacity: 0;
      }
.sidemenu__btn.active .bottom {
        transform: rotate(45deg);
      }

    
.sidemenu__wrapper {
    padding-top: 10px;
  }
    
.sidemenu__list {
    padding-top: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
.sidemenu__list2 {
    left: -20px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
.sidemenu__item a {
      text-decoration: none;
      line-height: 5px;
      font-size: 10px;
      padding: 5px;
      display: block;
      color: black;
      transition: 0.4s ease;
  }
.sidemenu__item a:hover {
        background: lightgrey;
        color: dimgrey;
      }


.translateX-enter {
  transform: translateX(20px);
  transform: translateY(20px);
  opacity: 0;
}

.translateX-enter-active,
.translateX-leave-active {
  transform-origin: top left 0;
  transition: 0.2s ease;
}

.translateX-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>