<!--
    Page with the list of all the people.
    As described in the Card component, the same component was used for both Person and Location since they have the same structure.
-->
<template>
    <main>
        <section class="container custom-container">
            <div>
                <div class="row0">
                    <a href="#team-members-grid">
                        <h1 class="ourt-intro">Meet Our Team</h1>
                    </a>
                </div>
            </div>
        </section>
        <section id="team-members-grid">
            <section class="department-section">
                <div class="row">
                    <div class="card1o">
                        <h3>MANAGEMENT DEPARTMENT</h3>
                        <p class="small-a">They develop and implement strategic plans, set organizational goals, and
                            provide
                            leadership to drive the company's growth and success.</p>
                    </div>
                    <div class="card1o">
                        <h3>INVESTMENT DEPARTMENT</h3>
                        <p class="small-a">They conduct thorough research, assess risk factors, and make informed
                            investment decisions
                            to optimize the company's financial performance.</p>
                    </div>
                    <div class="card1o">
                        <h3>OPS & FINANCE DEPARTMENT</h3>
                        <p class="small-a">They monitor cash flow, manage resources, and implement cost-saving measures
                            while maintaining
                            quality standards to support the company's overall objectives.</p>
                    </div>
                    <div class="card1o">
                        <h3>ADVISORING DEPARTMENT</h3>
                        <p class="small-a">They offer valuable insights, assess risks, and provide recommendations on
                            key decisions,
                            helping the company navigate challenges and capitalize on opportunities.</p>
                    </div>
                </div>
            </section>



            <div class="grid-container">
                <div id="filter-container">

                    <div class="grid-x">

                        <div class="cell small-12 filter-title">Filter By Department:</div>
                        <div class="dropdown-grid-filter-container">
                            <div class="dropdown-grid-filter grid-x align-middle">

                                <label for="all-team">
                                    ALL
                                    <input type="radio" id="all-team" value="" name="team-categories" v-model="team"
                                        checked>
                                    <span class="checkmark"></span>
                                </label>


                                <label for="investment-team">
                                    MANAGEMENT <input type="radio" id="Management-Team" value="Management Team"
                                        name="team-categories" v-model="team">
                                    <span class="checkmark"></span>
                                </label>


                                <label for="investor-relations">
                                    INVESTMENT <input type="radio" id="Investment-Team" value="Investment Team"
                                        name="team-categories" v-model="team">
                                    <span class="checkmark"></span>
                                </label>


                                <label for="finance-operations">
                                    OPS &amp; FINANCE <input type="radio" id="finance-operations"
                                        value="Operations and Finance Team" name="team-categories" v-model="team">
                                    <span class="checkmark"></span>
                                </label>

                                <label for="finance-operations">
                                    ADVISORING BOARD <input type="radio" id="finance-operations"
                                        value="Advisoring Board Team" name="team-categories" v-model="team">
                                    <span class="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="card-container">
                <Card v-for="person of filtered" :image="person.image" :title="person.name" :subtitle="person.role"
                    :team="person.team" :area="person.area" :link="'/people/' + person.id" />
            </div>
            <div class="row3-container">
                <div class="col3">
                    <router-link to="/companies" class="nav-link-end">
                        <a class="card13">
                            <h3>CHECK OUR INVESTMENTS</h3>
                            <div class="go-corner">
                                <div class="go-arrow">
                                    →
                                </div>
                            </div>
                        </a>
                    </router-link>
                </div>
            </div>
        </section>

    </main>
</template>
  
<script setup>
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: people } = await useFetch(useRuntimeConfig().public.serverURL + '/people')
/*
    In order to implement a filter, we use the computed property.
    This allows to have a cached value that contains the filtered list.
    Instead of using the normal list for the cards, we used the computed property directly.
*/
const role = ref("");
const team = ref("");

const filtered = computed(() => {
    // Checking for values where the full list is provided
    if ((role.value == 0 || role.value == "") & (team.value == 0 || team.value == ""))
        return people.value

    const arr = []


    // Filtering the list
    for (let person of people.value) {
        if (person.team == team.value) {
            arr.push(person)
        }/*
        else if (person.role.toLowerCase().includes(role.value.toLowerCase()))
            arr.push(person)*/
    }

    // Returning the filtered list
    return arr

})
function getButtonString(a) {
    const arr = []
    var button = a; // replace "myButton" with the ID of your button
    for (let person of people.value) {
        if (person.role.includes(role.value) && person.team == a)
            arr.push(person)
    }
    return arr;
}
const blinking = ref(false);

onMounted(() => {
    blinking.value = true;
    setTimeout(() => {
        blinking.value = false;
    }, 2000); // Adjust the duration of blinking (in milliseconds) as per your preference
});

</script>

<style scoped>
.department-section {
    padding-top: 0.5%;
}

.container.custom-container {
    background-image: url("https://images.unsplash.com/photo-1603201667230-bd139210db18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80");
    background-repeat: no-repeat;
    background-position-y: 35%;
    background-size: cover;
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    align-items: center;
    text-align: center;
    padding-top: 15%;

}



#card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-decoration: none;
    border: none;
    padding-bottom: 3%;
}

.col-a {
    justify-content: center;
    display: flex;
    width: 100%;
    gap: 2%;

    padding-bottom: 2%;
}


.col-a h3 {
    color: #262626;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 4px;
}

@keyframes blink {
    20% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.blink {
    animation: blink 3s;
}

.col-a p {
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    color: #666666;
}

p.small {
    font-size: 14px;
}


.card1o {
    display: block;
    position: inherit;
    max-width: 30% !important;
    background: #00838d;
    border-radius: 4px;
    padding: 48px 34px;
    margin: 10px;
    text-decoration: none;
}


.card1o p {
    font-size: 18px;
    transition: all 0.3s ease-out;
    color: rgba(255, 255, 255, 0.8);
}

.col-a h3 {
    color: #ffffff;
}

.col3 h3 {
    color: #262626;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 4px;
}

.nav-link-end {
    text-decoration: none;
}

.card13 {
    display: block;
    position: relative;
    max-width: 151px;
    background-color: #f2f8f9;
    border-radius: 10px;
    padding: 20px 20px;
    margin: 10px;
    text-decoration: none;
    z-index: 5;
    overflow: hidden;
}

.card13:hover:before {
    transform: scale(21);
}

.card13:hover h3 {
    transition: all 0.3s ease-out;
    color: #ffffff;
}

.card13:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 60% 50%;
    transition: transform 0.25s ease-out;
}

.card13:hover:before {
    transform: scale(21);
}


.card13:hover h3 {
    transition: all 0.3s ease-out;
    color: #ffffff;
}

.go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: #00838d;
    border-radius: 0 4px 0 32px;
}

.go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
}

.row3-container {
    padding-left: 75%;
    padding-bottom: 2%;
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
    text-decoration: none;
}

.hover-content img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
}


.ourt-intro {
    background-color: rgb(239, 241, 246);
    color: rgb(6, 6, 6);
    font-size: 60px;
    font-weight: bold;
    margin: 0 auto;
    padding: 10px;
    width: 28%;
    top: auto;
    text-align: center;
    position: inherit;
    transform: translate(-50%, -50%);
    mix-blend-mode: screen;
}


.intro {
    font-family: monospace;
    font-size: 1.5rem;
    color: white;
    opacity: 0.8;
    position: relative;
    margin-top: 6%;
    margin-left: 10%;
    margin-right: 10%;
}

.team-info {
    font-family: monospace;
    font-size: 1.5rem;
    color: white;
    opacity: 0.6;
    position: relative;
    margin-top: 0.5%;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

.row {
    bottom: 30%;
    justify-content: space-between;
    align-items: center;
}

.row0 {
    position: relative;
    bottom: 60%;
    height: 20%;
    left: 15%;

}

.row0 a {
    text-decoration: none;
}

.row1 {
    background-image: url("https://images.unsplash.com/photo-1603201667230-bd139210db18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80");
    background-repeat: no-repeat;
    background-position-y: 65%;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 30%;
    height: 300px;
}

.gif-container {
    position: relative;
    justify-content: flex-start;

}

.grid-x {
    padding-left: 0%;
    padding-top: 0%;
}

/* Media Query for mobile devices */
@media screen and (max-width: 768px) {
  .row0 {
    bottom: auto; /* Removed bottom positioning */
    height: auto; /* Adjusted height to auto */
    left: auto; /* Removed left positioning */
    width: 90%; /* Adjusted width for better responsiveness */
    margin: 0 auto; /* Center the element horizontally */
  }

  .row1 {
    background-position-y: center; /* Adjusted background position */
    padding-top: 20%; /* Adjusted padding top */
    height: auto; /* Adjusted height to auto */
  }
  .ourt-intro {
    background-color: rgb(239, 241, 246);
    color: rgb(6, 6, 6);
    font-size: 18px;
    font-weight: bold;
    top: auto;
    text-align: center;
    position: inherit;
    transform: translate(-50%, -50%);
    }
}

.arrow {
    position: absolute;
    width: 5% !important;
    height: 11% !important;
    display: inline-block;
    position: absolute;
    top: 52%;
    left: 47%;
}

.arrow::before {
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    top: 50%;
    left: 50%;
    border-style: solid;
    border-color: #000;
    border-width: 2px 2px 0 0;
    position: absolute;
    transform-origin: 50% 50%;
}

.arrow.down::before {
    transform: rotate(135deg);
    margin: -20px 0 0 -15px;
}

.arrow::after {
    content: '';
    display: block;
    top: 50%;
    left: 50%;
    border-style: solid;
    border-color: #000;
    position: absolute;
    transform-origin: 50% 50%;
}

.arrow.down::after {
    width: 0;
    height: 40px;
    border-width: 0 2px 0 0;
    transform: translate(-1px, -26px);
}

.arrow.circle {
    background: #f2f8f9;
    opacity: 0.7;
    border-radius: 50px;
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



#team-members-grid {
    background-image: url('assets/img/19449741.jpg');
    background-position-x: center;
    opacity: 100%;
    position: relative;
    width: 100%;
}

section {
    display: block;
}

.grid-container {
    position: relative;
    padding-right: 30px;
    padding-left: 30px;
    max-width: 90rem;
    margin-left: 10%;
    margin-right: auto;
}

#filter-container {
    padding-top: 2%;
}


.grid-x {
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
}

#filter-container .filter-title {
    color: #0e6b74;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 4px;
    line-height: 27px;
    font-family: sans-serif;
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

#filter-container .dropdown-grid-filter-container .dropdown-grid-filter label {
    font-size: 18px;
    line-height: 1.1;
    font-family: sans-serif;
    color: #0e6b74;
    font-weight: 500;
    display: block;
    position: relative;
    opacity: 1;
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

/* Responsive Styles */
@media screen and (max-width: 768px) {
    .col-a {
        justify-content: flex-start;
    }
    .col-a .card1o {
        flex-basis: calc(50% - 20px);
        margin: 10px 0;
    }

    .row0 {
        text-align: center;
        height: 30%;
    }
}

@media screen and (max-width: 480px) {
    .col-a .card1o {
        flex-basis: 100%;
        margin: 10px 0;
    }
    .card1o {
        max-width: 100% !important; /* Adjusted max-width to fit full width */
        padding: 25px 18px; /* Adjusted padding for smaller screens */
        margin: 10px 10px; /* Adjusted margin for smaller screens */
    }
    .card1o h3 {
        font-size: 16px; /* Adjusted font size for smaller screens */
    }
    .card1o p {
        font-size: 10px; /* Adjusted font size for smaller screens */
    }


    .row0 {
        height: 40%;
    }
}

@media (max-width: 767px) {
    .col-a {
        flex-direction: column;
    }
}

@media (min-width: 768px) {
    .row1 {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .col-a {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        justify-items: center;
    }
}

@media (min-width: 992px) {
    .row1 {
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
        text-align: left;
    }
}

@media (min-width: 1200px) {
    .col-a {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>