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
        <div class="intro">
            <h1>Meet Our Team</h1>

            <div class="team-info">
                <p>Our team is made up of experienced and driven individuals who are passionate about identifying and
                    supporting
                    the next generation of disruptors.</p>
                <p> Together, our team has a proven track record of identifying and investing in startups that have gone on
                    to
                    become industry leaders.</p>
            </div>
        </div>
        <div class="form-container">
            <label for="age-filter">Age filter</label><input id="age-filter" type='text' placeholder="Age filter"
                v-model="age">
        </div>

        <div id="card-container">
            <Card v-for="dog of filtered" :key="dog.id" :title="dog.name" :subtitle="dog.breed" :link="'/dogs/' + dog.id" />
        </div>
    </main>
</template>
  
<script setup>
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
    margin-left: 10%;
    justify-content: center;
}

.intro {
    font-family: monospace;
    font-size: 1.5rem;
    color: #77c7ac;
    position: relative;
    margin-top: 6%;
    margin-left: 10%;
    margin-right: 50%;
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

.form-container input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
    box-shadow: 0 0 2px 2px #e8e8e8;
    margin-bottom: 20px;
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