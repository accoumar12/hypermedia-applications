<!--
    Page with the list of all the people.
    As described in the Card component, the same component was used for both Person and Location since they have the same structure.
-->
<template>
    <main>
        <section class="container custom-container">
            <div class="co-container">
                <div class="header-center">
                    <h2> Meet Our Team</h2>
                </div>
            </div>
            <div class="row-a">
                <div class="container-a">
                    <div class="col-a">
                        <a class="card1r" href="#header1">
                            <h3>MANAGEMENT<br>DEPARTMENT</h3>
                            <p class="small-a">They develop and implement strategic plans, set organizational goals, and
                                provide
                                leadership to drive the company's growth and success.
                            </p>

                        </a>
                    </div>
                    <div class="col-a">
                        <a class="card1r" href="#header2">
                            <h3>INVESTMENT <br>DEPARTMENT</h3>
                            <p class="small-a">They conduct thorough research, assess risk factors, and make informed
                                investment decisions
                                to optimize the company's financial performance.</p>

                        </a>
                    </div>
                    <div class="col-a">
                        <a class="card1r" href="#header3">
                            <h3>OPERATIONS & FINANCE DEPARTMENT</h3>
                            <p class="small-a">They monitor cash flow and implement cost-saving measures
                                while maintaining
                                quality standards to support the company's overall objectives.</p>

                        </a>
                    </div>
                    <div class="col-a">
                        <a class="card1r" href="#header3">
                            <h3>ADVISORING <br>DEPARTMENT</h3>
                            <p class="small-a">They offer valuable insights, assess risks, and provide recommendations on
                                key decisions,
                                helping the company navigate on every challenge.</p>

                        </a>
                    </div>
                </div>
            </div>
        </section>

        <section id="team-members-grid">
            <div class="grid-container">
                <div id="filter-container">

                    <div class="grid-x">

                        <div class="cell small-12 filter-title">Filter By Department:</div>
                        <div class="dropdown-grid-filter-container">
                            <div class="dropdown-grid-filter grid-x align-middle">

                                <label for="all-team">
                                    ALL <input type="radio" id="all-team" value="" name="team-categories" v-model="team"
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
                                    FINANCE <input type="radio" id="finance-operations" value="Operations and Finance Team"
                                        name="team-categories" v-model="team">
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
            <div class="col3f">
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
const team = ref("");

const filtered = computed(() => {
    // Checking for values where the full list is provided
    if (team.value == 0 || team.value == "")
        return people.value

    const arr = []

    // Filtering the list
    for (let person of people.value) {
        if (person.team == team.value) {
            arr.push(person)
        }
    }

    // Returning the filtered list
    return arr

})

</script>

<script>
export default {
    data() {
        return {
            isMobile: false,
        };
    },
    methods: {
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
.department-section {
    padding-top: 0.1%;
}

.container.custom-container {
    background-image: url("https://images.unsplash.com/photo-1603201667230-bd139210db18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 40%;
    padding-top: 8%;
    background-position-y: 92%;
    background-position-x: 55%;
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

#card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-decoration: none;
    border: none;
    padding-bottom: 3%;
}

.container-a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5%;
}

/*Styles for the first 3 cards in the intro*/
.card1r {
    display: block;
    position: relative;
    max-width: 262px;
    background: #00838d;
    border-radius: 4px;
    padding: 42px 34px;
    margin: 10px;
    text-decoration: none;
    z-index: 5;
    overflow: hidden;

}

.card1r p {
    transition: all 0.3s ease-out;
    color: rgba(255, 255, 255, 0.8);
}

.card1r h3 {
    transition: all 0.3s ease-out;
    color: #ffffff;
}

.col-a h3 {
    color: #ffffff;
}

.col3f h3 {
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

.grid-x {
    padding-left: 0%;
    padding-top: 0%;
}

/* Media Query for mobile devices */
@media screen and (max-width: 768px) {
    .row0 {
        bottom: auto;
        /* Removed bottom positioning */
        height: auto;
        /* Adjusted height to auto */
        left: auto;
        /* Removed left positioning */
        top: 30px;
        width: 100%;
        /* Adjusted width for better responsiveness */
        margin: 0 auto;
        /* Center the element horizontally */
        align-items: center;
    }

    .row1 {
        background-position-y: center;
        /* Adjusted background position */
        padding-top: 20%;
        /* Adjusted padding top */
        height: auto;
        /* Adjusted height to auto */
    }

    .ourt-intro {
        background-color: rgb(239, 241, 246);
        color: #00838d;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        position: inherit;
        transform: translate(-50%, -50%);
        margin: 0 50%;
        padding: 20px;
        mix-blend-mode: unset;
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
    padding-top: 18%;
    }

    .grid-container {
        position: relative;
        padding-right: 30px;
        padding-left: 30px;
        padding-top: 20%;
        max-width: 90rem;
        margin-left: 10%;
        margin-right: auto;
        margin-top: 5%;
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
        flex-direction: column;
        margin: 0 10%;
    }

    #card-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        text-decoration: none;
        border: none;
        padding-bottom: 3%;
        margin-right: 20%;
    }

    .row3-container {
        padding-left: 50%;
        padding-bottom: 2%;
    }
}

/*button passing to the next page style */
.col3f {
    max-width: 100%;
    margin: 0%;
    display: flex;
    justify-content: center;
}

.card13 {
    display: block;
    position: relative;
    width: 100%;
    font-size: 18px;
    background-color: #f2f8f9;
    border-radius: 10px;
    padding: 20px 20px;
    text-decoration: none;
    z-index: 5;
    overflow: hidden;
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

#team-members-grid {
    width: 100%;
    background-image: url('assets/img/19449741.jpg');
    background-size: cover;
    height: 100%;
    background-repeat: no-repeat;
    background-position-y: 40%;
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


.cell {
    width: 100%;
    margin-right: 40%;
}

#filter-container .dropdown-grid-filter-container .dropdown-grid-filter label {
    font-size: 16px;
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

/* Media Queries */

@media (max-width: 768px) {

    .card13 {
        width: 100%;
        max-width: 100%;
    }
}


@media screen and (max-width: 600px) {
    .co-container {
        max-width: 95%;
        padding-right: 10px;
        padding-left: 10px;
    }

    .header-center {
        margin-left: 20%;
        font-size: 30px;
        width: 50%;
        position: center;

    }

}

@media screen and (max-width: 400px) {
    .co-container {
        padding-right: 10px;
        padding-left: 10px;
    }

    .header-center {

        font-size: 20px;
    }

    .card1o p {
        font-size: 12px;
        /* Adjusted font size for smaller screens */
    }

    .card13 {
        display: block;
        position: relative;
        max-width: 80%;
        font-size: 12px;
        background-color: #f2f8f9;
        border-radius: 10px;
        padding: 20px 20px;
        margin: 10px;
        text-decoration: none;
        z-index: 5;
        overflow: hidden;
    }
}

@media (max-width: 950px) and (min-width: 450px) {
    .container.custom-container {
        background-image: url("https://images.unsplash.com/photo-1603201667230-bd139210db18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80");
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 40%;
        padding-top: 8%;
        background-position-y: 65%;
        background-position-x: 70%;
    }
}



@media (min-width: 950px) {
    .container.custom-container {
        background-image: url("https://images.unsplash.com/photo-1603201667230-bd139210db18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80");
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 40%;
        padding-top: 8%;
        background-position-y: 92%;
        background-position-x: 55%;
    }

    #header p {
        width: 30%;
    }

}

@media screen and (max-width: 320px) {

    .container.custom-container {
        background-image: url("https://images.unsplash.com/photo-1603201667230-bd139210db18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1188&q=80");
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 40%;
        padding-top: 8%;
        background-position-y: 92%;
        background-position-x: 70%;
    }

    .card13 {
        display: block;
        position: relative;
        max-width: 80%;
        font-size: 10px;
        background-color: #f2f8f9;
        border-radius: 10px;
        padding: 20px 20px;
        text-decoration: none;
        z-index: 5;
        overflow: hidden;
    }
}
</style>