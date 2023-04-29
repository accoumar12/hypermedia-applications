<!--
    Page with the list of all the dogs.
    As described in the Card component, the same component was used for both Dog and Location since they have the same structure.
-->
<template>
    <main>
        <!--
            Form used to filter the list by age.
        -->
        <div class = "form-container">
            <label for = "age-filter">Role filter</label>
            <input id = "age-filter" type = 'text' placeholder = "Role filter" v-model = "role">
        </div>
        <h1>Teams</h1>
          <div>
            <button id = "button-filter" class = "btn" @click="getButtonString('Africa Team')">Africa Team</button>
            <button id = "button-filter" class = "btn" @click="getButtonString('America Team')">America Team</button>
            <button id = "button-filter" class = "btn" @click="getButtonString('Asia Team')">Asia Team</button>
            <button id = "button-filter" class = "btn" @click="getButtonString('Europe Team')">Europe Team</button>
            <button id = "button-filter" class = "btn" @click="getButtonString('Oceania Team')">Oceania Team</button>
            <ul>
                <li v-for="team in filteredTeams" :key="dog.team">{{ dog.team }}</li>
            </ul>
        </div>
        <div id = "card-container">
            <Card v-for = "dog of filtered" :image = "dog.image" :title = "dog.name" :subtitle = "dog.role" :link = "'/dogs/' + dog.id" />
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
    const role = ref(0);

    const filtered = computed(() => {
        // Checking for values where the full list is provided
        if(role.value == 0 || role.value == "")
            return dogs.value

        const arr = []


        // Filtering the list
        for(let dog of dogs.value) {
            if(dog.role.toLowerCase().includes(role.value.toLowerCase()))
                arr.push(dog)
        }

        // Returning the filtered list
        return arr
    })
    function getButtonString(a) {
        const arr = []
        var button = a; // replace "myButton" with the ID of your button
        for(let dog of dogs.value) {
            if(dog.role.includes(role.value) && dog.team == a)
                arr.push(dog)
        }
        return arr;
    }  
</script>

<style>
    #card-container
    {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-content: flex-start;
        gap: 20px;
    }

    main
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        gap: 10px;
    }

    .form-container {
        width: 90%;
        border-radius: 10px;
        border: 2px solid brown;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-content: flex-start;
        gap: 20px;

        background-color: burlywood;
        padding: 20px;
    }

    .btn {
        border: none;
        outline: none;
        padding: 12px 16px;
        background-color: #f1f1f1;
        cursor: pointer;
    }

    .btn:hover {
        background-color: #ddd;
    }

    .btn.active {
        background-color: #666;
        color: white;
}

</style>