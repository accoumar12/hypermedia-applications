<!--
    Contact Page
-->
<head>

</head>

<template>
  <main id="contact">
    <section class="co-section">
      <div class="co-container">
        <div class="header-center">
          <h2> Join VenTour!</h2>
        </div>
      </div>
    </section>
    <div class="button-container-co" style="position: relative; top: 0; z-index: 1;">
      <button class="section-button-co" :class="{ active: activeSection === 1 }" @click="activeSection = 1">
        <br>
        New Company
      </button>
      <button class="section-button-co" :class="{ active: activeSection === 2 }" @click="activeSection = 2">
        <br>
        Open Positions
      </button>
    </div>
    <div class="description-container-co" v-if="activeSection === 1">
      <h1>Do you have a company in the field of: </h1>
      <div class="job-boards-company-grid">
        <router-link to="/healthcare">
          <div class="job-boards-company-item">
            <img class="job-boards-company-logo" alt="Personio logo"
              src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?w=826&t=st=1684688733~exp=1684689333~hmac=e2274bf2ff9039e3bec16c71647d0e149af066fb21aa3e84011cea30dcc2d821"
              width="240" height="160">

            <h2 class="job-boards-company-name">
              Healthcare
            </h2>
            <div class="job-boards-company-link">
            </div>
          </div>
        </router-link>
        <router-link to="/technology">
          <div class="job-boards-company-item">
            <img class="job-boards-company-logo" alt="Personio logo"
              src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=826&t=st=1684688628~exp=1684689228~hmac=9ee5d32fec913dab6323d9796c550d1106c27e8f15aa3744659eb846175cb796"
              width="240" height="160">

            <h2 class="job-boards-company-name">
              Technology
            </h2>
            <div class="job-boards-company-link">
            </div>
          </div>
        </router-link>
        <router-link to="/consumer">
          <div class="job-boards-company-item">
            <img class="job-boards-company-logo" alt="Personio logo"
              src="https://img.freepik.com/free-vector/grocery-shopping-concept-illustration_114360-8991.jpg?w=826&t=st=1684688644~exp=1684689244~hmac=872efd172603cca9271028aef17524056d90ff660a4d461401126314c605b3e7"
              width="240" height="160">
            <h2 class="job-boards-company-name">
              Consumer goods
            </h2>
            <div class="job-boards-company-link">
            </div>
          </div>
        </router-link>
        <router-link to="/sustainability">
          <div class="job-boards-company-item">
            <img class="job-boards-company-logo" alt="Personio logo"
              src="https://img.freepik.com/free-vector/palm-tree-concept-illustration_114360-9480.jpg?w=826&t=st=1684688781~exp=1684689381~hmac=da1284ec9192e47ae74a52c8dd503363c02b544475ec133edd23169b8e37e795"
              width="240" height="160">

            <h2 class="job-boards-company-name">
              Sustainability
            </h2>
            <div class="job-boards-company-link">
            </div>
          </div>
        </router-link>
      </div>
      <form>
        <div class="space">
          <h1>
            Join us
          </h1>
          <div class="contact-us">

            <label for="customerName">NAME<em>&#x2a;</em></label><input id="customerName" name="customerName" required=""
              type="text" /><label for="customerEmail">EMAIL <em>&#x2a;</em></label><input id="customerEmail"
              name="customerEmail" required="" type="email" /><label for="customerPhone">PHONE</label><input
              id="customerPhone" name="customerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" /><label
              for="country">COUNTRY<em>&#x2a;</em></label>
            <div class="mt-2">
              <select id="country" name="country" autocomplete="country-name" class="block" style="height: 36px;">
                <option>Albania</option>
                <option>China</option>
                <option>France</option>
                <option>Japan</option>
                <option>Italy</option>
                <option>Switzerland</option>
                <option>Spain</option>
                <option>Other</option>
              </select>
            </div>
            <label for=" customerNote">ABOUT <em>&#x2a;</em><span>&nbsp;&nbsp;&nbsp;&nbsp;Write about your company
                (name,goal)
              </span></label><textarea id="customerNote" name="customerNote" required="" rows="4"></textarea>
            <label for="file-upload"
              class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
              CV <em>&#x2a;</em><span>&nbsp;&nbsp;&nbsp;&nbsp;Upload file
              </span>
              <input id="file-upload" name="file-upload" type="file" class="sr-only" />
            </label>

            <button id="customerOrder">SUBMIT</button>

          </div>
        </div>
      </form>
    </div>
    <div class="description-container-co" v-else-if="activeSection === 2">
      <h1>Do you have knowledge in Frontend Technologies: </h1>
      <div class="job-boards-company-grid">
        <div class="job-boards-company-item">
          <img class="job-boards-company-logo" alt="Personio logo"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" width="200" height="160">
          <a href="https://vuejs.org/" target="_blank">
            <h2 class="job-boards-company-name">
              Vue.js
            </h2>
          </a>
          <div class="job-boards-company-link">
          </div>
        </div>
        <div class="job-boards-company-item">
          <img class="job-boards-company-logo" alt="Personio logo"
            src="https://png.pngitem.com/pimgs/s/206-2069813_file-css-and-html-css-logo-svg-hd.png" width="240"
            height="160">
          <a href="https://www.w3schools.com/html/" target="_blank">
            <h2 class="job-boards-company-name">
              HTML
            </h2>
          </a>
          <div class="job-boards-company-link">
          </div>
        </div>
        <div class="job-boards-company-item">
          <img class="job-boards-company-logo" alt="Personio logo"
            src="https://png.pngitem.com/pimgs/s/206-2069813_file-css-and-html-css-logo-svg-hd.png" width="240"
            height="160">
          <a href="https://www.w3schools.com/css/" target="_blank">
            <h2 class="job-boards-company-name">
              CSS
            </h2>
          </a>
          <div class="job-boards-company-link">
          </div>
        </div>
        <div class="job-boards-company-item">
          <img class="job-boards-company-logo" alt="Personio logo"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png" width="240"
            height="160">
          <a href="https://www.w3schools.com/js/default.asp" target="_blank">
            <h2 class="job-boards-company-name">
              JavaScript
            </h2>
          </a>
          <div class="job-boards-company-link">
          </div>
        </div>

      </div>
      <form>
        <div class="space">
          <h1>
            Join us
          </h1>
          <div class="contact-us">

            <label for="customerName">NAME<em>&#x2a;</em></label><input id="customerName" name="customerName" required=""
              type="text" /><label for="customerEmail">EMAIL <em>&#x2a;</em></label><input id="customerEmail"
              name="customerEmail" required="" type="email" /><label for="customerPhone">PHONE</label><input
              id="customerPhone" name="customerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" /><label
              for="country">COUNTRY<em>&#x2a;</em></label>
            <div class="mt-2">
              <select id="country" name="country" autocomplete="country-name" class="block" style="height: 36px;">
                <option>Albania</option>
                <option>China</option>
                <option>France</option>
                <option>Japan</option>
                <option>Italy</option>
                <option>Switzerland</option>
                <option>Spain</option>
                <option>Other</option>
              </select>
            </div>
            <label for=" customerNote">ABOUT <em>&#x2a;</em><span>&nbsp;&nbsp;&nbsp;&nbsp;Write about you
                (goals,expectations)
              </span></label><textarea id="customerNote" name="customerNote" required="" rows="4"></textarea>
            <label for="file-upload"
              class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
              CV <em>&#x2a;</em><span>&nbsp;&nbsp;&nbsp;&nbsp;Upload file
              </span>
              <input id="file-upload" name="file-upload" type="file" class="sr-only" />
            </label>

            <button id="customerOrder">SUBMIT</button>

          </div>
        </div>
      </form>
    </div>

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
const { data: person } = await useFetch(useRuntimeConfig().public.serverURL + '/people/' + id)

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
    { text: person.award1 },
    { text: person.award2 },
    { text: person.award3 },
    { text: person.award4 }
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
.contact-us {
  background: rgb(212, 208, 208);
  padding: 70px 100px;
  border-top: 10px solid var(--varyDarkBlue);
}

label,
input,
select,
textarea {
  display: block;
  width: 100%;
  font-size: 12pt;
  line-height: 24pt;
  font-family: sans-serif;
}

textarea {
  margin-bottom: 3%;
}

label {
  text-align: left;
}

select,
input {
  margin-bottom: 24pt;

}

span {
  font-size: 8pt;
}

em {
  color: #f45702;
  font-weight: bold;
}

input,
select,
textarea {
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background: #f1f1f1;
  padding-left: 5px;
  outline: none;
}

select:focus,
input:focus,
textarea:focus {
  border: 1px solid #6bd4b1;
}

textarea {
  resize: none;
}

#customerOrder {
  display: block;
  float: right;
  line-height: 24pt;
  margin-top: 5%;
  padding: 0px 20px;
  border: none;
  background: var(--varyDarkBlue);
  color: white;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  border-bottom: 2px solid transparent;
  outline: none;
}

#customerOrder:hover {
  background: inherit;
  color: var(--varyDarkBlue);
  border-bottom: 2px solid var(--varyDarkBlue);
}

::selection {
  background: #ffc7b8;
}

select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus,
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus {
  border: 1px solid #6bd4b1;
  -webkit-text-fill-color: #2A293E;
  -webkit-box-shadow: 0 0 0px 1000px #f8f4e5 inset;
  transition: background-color 5000s ease-in-out 0s;
}

.space {
  text-align: center;
}

#contact {
  background-image: url('assets/img/19449741.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

form {
  width: 60%;
  margin-bottom: 5%;
}

textarea {
  width: 99%;
  min-height: 5.1em;
  resize: vertical;
}

select,
input {
  width: 60%;
}

.mt-2 {
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

  select {
    width: 100%;
  }

  form {
    width: 90%;
    min-width: 400px;
  }
}

.co-section {
  background-image: url('assets/img/joinus.jpg');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 40%;
  padding-top: 10%;
}

.co-container {
  max-width: 450px;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.header-center {
  background-color: white;
  color: black;
  margin-top: 10%;
  text-align: center !important;
  margin-bottom: 3rem !important;
  position: relative;
  width: 100%;
  font-size: 60px;
  font-weight: 400;
  font-family: sans-serif;

  mix-blend-mode: screen;
}

.text-center {
  text-align: center;
  position: absolute;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.section-button-co {

  padding-bottom: 2.5%;
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 20px;
  font-family: sans-serif;
  color: black;
  font-size: 20px;
}

.section-button-co.active {
  font-family: sans-serif;
  font-size: 20px;
  color: black;
  font-weight: bold;
  background-color: rgb(212, 208, 208);
  border-radius: 10%;
}

.button-container-co {
  margin-top: 5%;
  position: fixed;
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
  font-family: sans-serif;
  color: black;
}

.description-container-co {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  text-align: justify;
  font-family: sans-serif;
  font-size: 18px;
}

.job-boards-company-grid {
  font-family: sans-serif;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  text-align: justify;
}

.job-boards-company-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  text-align: justify;
}

.job-boards-company-name {
  font-size: 18px;
}

@media (min-width: 720px) {
  .job-boards-company-item {
    margin-bottom: 0;
  }

  .job-boards-company-item {
    margin-bottom: 16px;
    padding: 24px 24px 32px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: var(--border-md);
  }
}
</style>