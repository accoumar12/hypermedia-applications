<!--
    Page with the list of all the dogs.
    As described in the Card component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <!--
        Form used to filter the list by age.
      -->
        <div class="breadcrumbs">
            <nav>
                <ul class="nav-breadcrumbs">
                    <li><router-link to="/">Home</router-link></li> /
                    <li><router-link to="/dogs"> Our Team</router-link></li>
                </ul>
            </nav>
        </div>
        <div class="row d-flex align-items-stretch">
            <div class="col-sm-6 d-flex align-items-center justify-content-center">
                <div class="intro">
                    <h1>Meet Our Team</h1>
                </div>
                <div class="team-info">
                    <p>Our team is made up of experienced and driven individuals who are passionate about identifying and
                        supporting the next generation of disruptors.</p>
                    <p>Together, our team has a proven track record of identifying and investing in startups that have gone
                        on to become industry leaders.</p>
                </div>
            </div>
            <div class="background col-sm-6 d-flex align-items-center justify-content-center align-self-stretch">
                <div class="col-6 d-flex align-items-center justify-content-center align-self-stretch w-100">
                    <div class="row">
                        <div class="col-md-6">

                            <img src="~/assets/img/airport.png" style="max-width: 92%; height: 50%;">

                        </div>
                        <div class="col-md-6">

                            <p id="text-container">We are here to fly with you to GROWTH!</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="team-members-grid">
            <div class="grid-container">
                <div class="filter-container team">

                    <div class="grid-x">

                        <div class="cell small-12 filter-title">Filter By</div>
                        <div class="dropdown-grid-filter-container">
                            <div class="dropdown-grid-filter grid-x align-middle">

                                <label for="all-team">
                                    ALL
                                    <input type="radio" id="all-team" value="" name="team-categories" checked>
                                    <span class="checkmark"></span>
                                </label>


                                <label for="investment-team">
                                    MANAGMENT<input type="radio" id="investment-team" value="investment-team"
                                        name="team-categories">
                                    <span class="checkmark"></span>
                                </label>


                                <label for="investor-relations">
                                    INVESTMENT <input type="radio" id="investor-relations" value="investor-relations"
                                        name="team-categories">
                                    <span class="checkmark"></span>
                                </label>


                                <label for="finance-operations">
                                    OPS &amp;FINANCE <input type="radio" id="finance-operations" value="finance-operations"
                                        name="team-categories">
                                    <span class="checkmark"></span>
                                </label>

                                <label for="finance-operations">
                                    ADVISORING BOARD <input type="radio" id="finance-operations" value="finance-operations"
                                        name="team-categories">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        <div class = "form-container">
                            <label for = "age-filter">Role filter</label>
                            <input id = "age-filter" type = 'text' placeholder = "Role filter" v-model = "role">
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id = "card-container">
                <Card v-for = "dog of filtered" :image = "dog.image" :title = "dog.name" :subtitle = "dog.role" :link = "'/dogs/' + dog.id" />
            </div>
            <div class="row">
                <div class="image-container">
                    <img src="~/assets/img/People/P01.png" />
                    <h2>John Doe</h2>
                    <div class="clickable-image-container">
                        <a href="#">
                            <div class="hover-content">
                                <img src="~/assets/img/People/P01.png" />
                                <h3>John Doe</h3>
                                <p>CEO and Founder</p>
                                <p>Health</p>

                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!--
        <section class="pt-3 pb-4" id="count-stats">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
                        <div class="row">
                            <div class="col-md-4 position-relative">
                                <DefaultCounterCard color="success" title="Coded Elements" description="From buttons, to inputs, navbars, alerts or cards, you are
                  covered" :count="70" suffix="+" :duration="3000" divider="vertical" />
                            </div>
                            <div class="col-md-4 position-relative">
                                <DefaultCounterCard color="success" title="Design Blocks" description="Mix the sections, change the colors and unleash your
                  creativity" :count="15" suffix="+" :duration="3000" divider="vertical" />
                            </div>
                            <div class="col-md-4">
                                <DefaultCounterCard color="success" title="Pages" description="Save 3-4 weeks of work when you use our pre-made pages for
                  your website" :count="4" :duration="3000" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
-->
        
    </main>
</template>
  
<script setup>
//import countercard from "~/components/countercard.vue";
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: dogs } = await useFetch(useRuntimeConfig().public.serverURL + '/dogs')

/*
    In order to implement a filter, we use the computed property.
    This allows to have a cached value that contains the filtered list.
    Instead of using the normal list for the cards, we used the computed property directly.
*/
const age = ref(0);

const filtered = computed(() => {
    // Checking for values where the full list is provided
    if (age.value == 0 || age.value == "")
        return dogs.value

    const arr = []

    // Filtering the list
    for (let dog of dogs.value) {
        if (dog.age < age.value)
            arr.push(dog)
    }

    // Returning the filtered list
    return arr
})


</script>

<style scoped>
#card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.breadcrumbs {
    position: relative;
    padding-right: 80%;
    margin-top: 2%;
}

.image-container {
    position: relative;
    display: inline-block;
    text-align: center;
    border-color: none;
    border-style: none;
    margin-left: 8vw;
    margin-bottom: 5%;
}

.image-container img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    width: 80%;
}

.image-container h2 {
    margin-top: 20px;
    margin-bottom: 0;
}

.image-container:hover img {
    opacity: 0;
}

.image-container:hover h2 {
    opacity: 0;
}

.clickable-image-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #77c7ac;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-style: solid;
    border-radius: 20%;
    border-color: #77c7ac;
}

.clickable-image-container img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.clickable-image-container:hover {
    opacity: 1;
}

.clickable-image-container:hover img {
    opacity: 1;
}

.image-container:hover .clickable-image-container {
    opacity: 1;
}

.hover-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
}

.hover-content p {
    margin: 0;
    color: #fff;
    margin-top: 2%;
}

.hover-content img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
}

.nav-breadcrumbs {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.nav-breadcrumbs li {
    margin-right: 40px;
}

.nav-breadcrumbs li:last-child {
    font-weight: bold;
}

.nav-breadcrumbs a {
    text-decoration: none;
    color: #0e6b74;
    font-weight: bold;
}

.nav-breadcrumbs a:hover {
    text-decoration: underline;
}

h1 {
    display: inline-block;
    vertical-align: middle;
}

.intro {
    font-family: monospace;
    font-size: 1.5rem;
    color: #77c7ac;
    position: relative;
    margin-top: 6%;
    margin-left: 10%;
    margin-right: 10%;
}

.team-info {
    font-family: monospace;
    font-size: 1.5rem;
    color: #77c7ac;
    position: relative;
    margin-top: 0.5%;
    margin-right: 25%;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

.row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    height: 60%;
    box-shadow: 0px 10px 10px -10px rgba(163, 198, 206, 0.75);
}

.background {
    background-color: #0e6b74;
    position: relative;
    margin-top: 4%;
}

.gif-container {
    position: relative;
    justify-content: flex-start;




}

.gif-container img {

    background-color: none;
    color: #0e6b74;
    position: left;
    margin-top: 30%;
    margin-bottom: 20%;

}

#text-container {
    position: right;
    transform: translateY(-50%);
    font-family: monospace;
    font-size: 2rem;
    color: #77c7ac;
    justify-content: center;
    padding-left: 20%;
}

.col-sm-6 {
    width: 50%;
    padding-left: 10%;

}

.text-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #5ac6cf;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
}

.text-container p {
    font-family: monospace;
    font-size: 1.2rem;
    color: #77c7ac;
    margin: 0;
}

.form-container {
    width: 90%;
    border-radius: 10px;
    border: 2px solid brown;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 20px;
    margin: 20px auto;
}

.form-container label {
    font-weight: bold;
    margin-bottom: 10px;
}



.team-members-grid {
    position: relative;
    width: 100%;
}

section {
    display: block;
    background-color: #68c0c8;
}

.grid-container {
    position: relative;
    padding-right: 30px;
    padding-left: 30px;
    max-width: 90rem;
    margin-left: auto;
    margin-right: auto;
}

.filter-container {
    padding-top: 8%;
}


.grid-x {
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
}

.filter-container .filter-title {
    color: #0e6b74;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 4px;
    line-height: 27px;
    font-family: monospace;
    text-transform: uppercase;
    margin-bottom: 20px;
}

.grid-x>.shrink {
    width: auto;
}

.cell.shrink {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}

.cell {
    width: 100%;
    margin-right: 40%;
}

.filter-container .dropdown-grid-filter-container .dropdown-grid-filter label {
    font-size: 1.3rem;
    line-height: 1.1;
    font-family: monospace;
    color: #0e6b74;
    font-weight: 500;
    display: block;
    position: relative;

    margin-right: 40px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-bottom: 2px;
}

label>[type=checkbox],
label>[type=radio] {
    margin-right: 2rem;
    -webkit-text-fill-color: #0e6b74;
    margin: 1rem 1rem 0.2rem 0;
}


/* Responsive styles */
@media screen and (max-width: 768px) {
    .nav-breadcrumbs {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .nav-breadcrumbs li {
        list-style-type: none;
        margin-right: 10px;
    }

    .nav-link {
        color: blue;
        display: inline-block;
        margin-right: 0;
        margin-bottom: 10px;
        text-decoration: none;
        border-bottom: 2px solid transparent;
    }

    .nav-link:hover {
        border-bottom: 2px solid blue;
    }
}

/* For larger screens */
@media screen and (min-width: 769px) {
    .nav-breadcrumbs {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .nav-breadcrumbs li {
        list-style-type: none;
        margin-right: 0;
    }

    .nav-link {
        color: blue;
        display: inline-block;
        margin-right: 0;
        margin-bottom: 10px;
        text-decoration: none;
        border-bottom: 2px solid transparent;
    }

    .nav-link:hover {
        border-bottom: 2px solid blue;
    }
}
</style>