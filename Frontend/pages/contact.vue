<!--
    Contact Page
-->
<head>

</head>

<template>
    <main>
        <main>
            <p>
                This are our contacts:
                <ul>
                    <li>E-mail: mail@shelter.it</li>
                    <li>Tel: 053684864351</li>
                </ul>
            </p>
            <div class="column2">
                    <div class="description-containera">
                        <h2> Do you want to join us?</h2>
                        <div class="button-container" style="position: relative; top: 0; z-index: 1;">
                            <button class="section-button" :class="{ active: activeSection === 1 }" @click="activeSection = 1">
                                <br>
                                New Company
                            </button>
                            <button class="section-button" :class="{ active: activeSection === 2 }" @click="activeSection = 2">
                                <br>
                                Open Position
                            </button>
                        </div>

                        <div class="description-container" v-if="activeSection === 1">
                            <h1>Do you have a company which works in:  </h1>
                            <div class="job-boards-company-grid">
                                <div class="job-boards-company-item">
                                    <img class="job-boards-company-logo" alt="Personio logo" src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?w=826&t=st=1684688733~exp=1684689333~hmac=e2274bf2ff9039e3bec16c71647d0e149af066fb21aa3e84011cea30dcc2d821" width="240" height="160">
                                
                                <h2 class="job-boards-company-name">
                                    Healthcare?
                                </h2>
                                <div class="job-boards-company-link">
                                    <a href="#"> 
                                        Join us
                                    </a>
                                </div>
                                </div>

                            
                            
                                <div class="job-boards-company-item">
                                    <img class="job-boards-company-logo" alt="Personio logo" src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=826&t=st=1684688628~exp=1684689228~hmac=9ee5d32fec913dab6323d9796c550d1106c27e8f15aa3744659eb846175cb796" width="240" height="160">
                                
                                <h2 class="job-boards-company-name">
                                    Technology?
                                </h2>
                                <div class="job-boards-company-link">
                                    <a href="#"> 
                                        Join us
                                    </a>
                                </div>
                                </div>
                            
                            
                                <div class="job-boards-company-item">
                                    <img class="job-boards-company-logo" alt="Personio logo" src="https://img.freepik.com/free-vector/grocery-shopping-concept-illustration_114360-8991.jpg?w=826&t=st=1684688644~exp=1684689244~hmac=872efd172603cca9271028aef17524056d90ff660a4d461401126314c605b3e7" width="240" height="160">
                                
                                <h2 class="job-boards-company-name">
                                    Consumer goods?
                                </h2>
                                <div class="job-boards-company-link">
                                    <a href="#"> 
                                        Join us
                                    </a>
                                </div>
                                </div>

                            
                            
                                <div class="job-boards-company-item">
                                    <img class="job-boards-company-logo" alt="Personio logo" src="https://img.freepik.com/free-vector/palm-tree-concept-illustration_114360-9480.jpg?w=826&t=st=1684688781~exp=1684689381~hmac=da1284ec9192e47ae74a52c8dd503363c02b544475ec133edd23169b8e37e795" width="240" height="160">
                                
                                <h2 class="job-boards-company-name">
                                    Sustainability?
                                </h2>
                                <div class="job-boards-company-link">
                                    <a href="#"> 
                                        Join us
                                    </a>
                                </div>
                                </div>

                            </div>
                            
                        </div>

                        <div class="description-container" v-else-if="activeSection === 2">
                        <div class="job-list">    
                            <div class="job-list-job-details">
                                <div class="job-list-job-details">
                                    <h2 class="job-list-job-title"> 
                                        Frontend Developer
                                    </h2>
                                    <div class="job-list-job-skills">
                                        <span class="job-list-job-skill job-list-job-skill-clickable">
                                            <a href="https://vuejs.org/">Vue.js</a>      
                                        </span>
                                        <span class="job-list-job-skill job-list-job-skill-clickable">
                                            <a href="https://nodejs.org/en">Node.js</a>      
                                        </span>
                                        <span class="job-list-job-skill job-list-job-skill-clickable">
                                            <a href="https://www.w3schools.com/html/">HTML</a>                  
                                        </span>
                                        <span class="job-list-job-skill job-list-job-skill-clickable">
                                            <a href="https://www.w3schools.com/css/">CSS</a>                 
                                        </span>
                                        <span class="job-list-job-skill job-list-job-skill-clickable">
                                            <a href="https://www.w3schools.com/js/default.asp"> JavaScript 
                                            </a>               
                                        </span>
                                        <span class="job-list-job-skill job-list-job-skill-clickable">
                                            <a href="https://bootstrap-vue.org/"> BootstrapVue 
                                            </a>                 
                                        </span>
                                    </div>
                                    <span class="job-list-company-meta-item">
                                        Milan, IT
                                    </span>
                                    <div class="job-list-badges">
                                        <div class="job-list-badge job-list-badge-remote">
                                            <img class="ikona" src="~/assets/img/home-icon.png">
                                            <!-- <b-icon-house-door></b-icon-house-door> House icon not working-->
                                            
                                        <span class="job-list-badge-text">Work remotely</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            <form>
                <div>
                    <label for = "name">Name & Surname</label>
                    <input type = "text" id = "name" placeholder = "Name & Surname">
                </div>
                <div>
                    <label for = "mail">E-mail</label>
                    <input type = "email" id = "mail" placeholder = "E-mail">
                </div>
                <div id = "message-div">
                    <label for = "message">Message</label>
                    <textarea id = "message" placeholder = "Write your message here"></textarea>  
                </div>
                <button>Send Message</button>
            </form>
        </main>
    </main>
</template>
<script>
export default defineNuxtComponent({
        data() {
            return {
                activeSection: 1,
            };
        },
        async asyncData() {
            // useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
            const route = useRoute()
            const companies = await $fetch(useRuntimeConfig().public.serverURL + '/companies' + route.params.id)
            return {
                companies
            }
        }
})
</script>

<script setup>

const route = useRoute()
const id = route.params.id
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: dog } = await useFetch(useRuntimeConfig().public.serverURL + '/dogs/' + id)

const { data: companies } = await useFetch(useRuntimeConfig().public.serverURL + '/companies')
/*
    In order to implement a filter, we use the computed property.
    This allows to have a cached value that contains the filtered list.
    Instead of using the normal list for the cards, we used the computed property directly.
*/
//const role = ref("");
const areas = ref("");

const filtered = computed(() => {
    const arrTot = []
    // Checking for values where the full list is provided
    for (let company of companies.value) {
        if ((areas.value == 0 || areas.value == "") & (company.companyId == id)) {
            console.log(company)
            arrTot.push(company)
        }
    }
    return arrTot

    const arr = []


    // Filtering the list
    for (let company of companies.value) {
        if (company.areas == areas.value) {
            arr.push(company)
        }/*
        else if (company.areas.toLowerCase().includes(areas.value.toLowerCase()))
            arr.push(company)*/
    }

    // Returning the filtered list
    return arr

})

/*
  var items = [
    { text: dog.award1 },
    { text: dog.award2 },
    { text: dog.award3 },
    { text: dog.award4 }
  ];

  for (var i = 0; i < items.length; i++) {
    if (items[i].text !== '') {
      var listItem = document.createElement('li');
      listItem.textContent = items[i].text;
      document.getElementById('myList').appendChild(listItem);
    }
  }
*/

</script>

<style>
    main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    }

    form {
        width: 600px;
        display: flex;
        flex-direction: column;
        padding: 15px;
        border: 2px rgb(255, 102, 0) dashed;
        border-radius: 5px;
        row-gap: 20px;
    }

    form div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    textarea {
        width: 99%;
        min-height: 5.1em;
        resize: vertical;
    }

    input {
        width: 60%;
    }

    label {
        font-size: 13pt;
        font-weight: bold;
    }

    #message-div {
        flex-direction: column;
    }

    @media screen and (max-width: 650px) {
        form div {
            flex-direction: column;
        }

        input {
            width: 100%;
        }
        
        form {
            width: 90%;
            min-width: 400px;
        }
    }
.description-containera {
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2%;
    align-items: center;
    text-align: justify;
    padding-right: 20%;
}

.description-containera p2 {
    height: 20%;
    padding-left: -10%;
    font-size: 15pt;
    width: 90%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.1rem;
}
.description-containera p3 {
    height: 20%;
    padding-left: 70%;
    font-size: 15pt;
    width: 150%;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 1.1rem;
}

.row2 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;
    padding-bottom: 2%;
}

.text-center {
    text-align: center;
    position: absolute;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

.column3 {
    flex-basis: 20%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-left: 1px solid black;
}

.column3:first-child {
    border-left: none;
}

.column3 p {
    font-size: 16px;
}

#description {
    padding: 0 20px 0 20px;
    font-size: 15pt;
}

.section-button {
    padding-bottom: 2.5%;
    border: none;
    background: none;
    cursor: pointer;
    margin-right: 20px;
    font-family: monospace;
    color: #033f52;
    font-size: 1rem;
}

.section-button.active {
    font-family: monospace;
    font-size: 1rem;
    color: #033f52;
    font-weight: bold;
    background-color: rgb(212, 208, 208);
    border-radius: 10%;
}

.button-container {
    position: fixed;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 2%;
    font-family: monospace;
    color: #033f52;
}

.column {
    flex-basis: 50%;
    padding-left: 2%;
}

.column2 {
    flex-basis: 50%;
    padding-right: 4%;

}

.column.p2 {
    position: absolute;
}

#main-img {
    width: 60%;
    height: 40%;
    padding-left: 10%;
    display: initial;
    /*
    height: auto;
    padding-left: 10%;
    */
}

button2 {
    background-color: black;
    color: white;
    padding: 10px;
    border: none;
    margin-top: 10px;
}

button2:hover {
    cursor: pointer;
}

.description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    text-align: justify;
}
.job-boards-company-grid{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    text-align: justify;   
}
.job-boards-company-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    text-align: justify;      
}

.description-container p2 {
    margin-bottom: 10px;
    font-size: 15pt;
    width: 80%;
    font-family: PT sans-serif;
    font-size: 1.1rem;
}
.description-container p3 {
    margin-bottom: 8px;
    font-size: 15pt;
    width: 100%;
    font-family: PT sans-serif;
    font-size: 1.1rem;
}

@media (min-width: 720px)
.job-boards-company-item {
  margin-bottom: 0;
}
.job-boards-company-item {
  margin-bottom: 16px;
  padding: 24px 24px 32px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: var(--border-md);
}
.job-list {
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: var(--border-md);
}
.job-list-job {
  font-size: 14px;
  padding: 24px;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  line-height: 1.5;
}
.job-list-job-title {
  font-weight: bold;
  margin-bottom: 8px;
  word-break: break-word;
}
.job-list-job-skill {
  font-size: 13px;
  border: 1px solid #C5CDD1;
  border-radius: var(--border-small);
  display: inline-block;
  padding: 2px 12px;
  line-height: 18px;
  margin-right: 4px;
  margin-bottom: 4px;
}
.job-list-job-skill-clickable {
  cursor: pointer;
}

.job-list-badges {
  margin-top: 16px;
}

.ikona {
  float: left;
  max-width: 5%;
  max-height: 5%;
}

</style>