<!--
    Page with the list of all the location.
    As described in the Card component, the same component was used for both Person and Location since they have the same structure.
-->
<template>
    <main>
        <div class="containeri">
            <div class="col-md-4">
                <div class="image-text-overlay text-middle-left">
                    <p>
                        <span class="overlay-title">Ventour investments</span><br>
                        <span class="overlay-subtext">We have a track record of identifying and nurtuing some of the most
                            innovative and dynamic
                            startups in the world!</span><br>
                        <span class="overlay-subsubtext"><em>*</em> Click the buttons to view all companies we have invested
                            in, or
                            select an investment area and click the buttons to filter.</span>

                    <div class="overlay-buttons"> <a href="#title2"><button class="active" @click="MR = ''"> Show all
                            </button>
                            <button @click="MR = true">Most Relevant Companies</button></a></div>
                    </p>

                </div>

            </div>

            <div class="row4-a">
                <div class="title">
                    <label for="all-team">
                        <input type="radio" id="all-investments" value="" name="Investments-categories" v-model="areas"
                            checked>
                        <h1 class="learn-more-2" style="color:#033f52">ALL COMPANIES</h1>
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="row4">
                <div class="column41">
                    <div class="area-icons">
                        <img src="~/assets/img/technology.png" alt="Tech">
                    </div>
                    <div class="counter" data-target="100"></div>
                    <div class="link-text">
                        <a class="learn-more"><router-link to="/companies/Areas/technology">
                                <h1 style="color:#033f52">Technology Investments →</h1>
                            </router-link></a>
                    </div>
                    <label for="Technology">
                        <input type="radio" id="Technology" value="Technology" name="Investments-categories"
                            v-model="areas">
                        <h1 class="learn-more" style="color:#033f52">SELECT & CHECK COMPANIES</h1>
                        <span class="checkmark"></span>
                    </label>
                </div>

                <div class=" column4">
                    <div class="area-icons">
                        <img src="~/assets/img/health.png" alt="Healthcare">
                    </div>
                    <div class="counter" data-target="250"></div>
                    <div class="link-text">
                        <a class="learn-more"><router-link to="/companies/Areas/healthcare">
                                <h1 style="color:#033f52">Healthcare Investments →</h1>
                            </router-link></a>
                    </div>
                    <label for="Healthcare">
                        <input type="radio" id="Healthcare" value="Healthcare" name="Investments-categories"
                            v-model="areas">
                        <h1 class="learn-more" style="color:#033f52">SELECT & CHECK COMPANIES</h1>
                        <span class="checkmark"></span>
                    </label>
                </div>


                <div class="column4">
                    <div class="area-icons">
                        <img src="~/assets/img/customer.png" alt="Goods">
                    </div>
                    <div class="counter" data-target="120"></div>
                    <div class="link-text">
                        <a class="learn-more"><router-link to="/companies/Areas/consumer">
                                <h1 style="color:#033f52">Consumer Goods Investments →</h1>
                            </router-link></a>
                    </div>
                    <label for="Consumer Goods">

                        <input type="radio" id="Consumer Goods" value="Consumer Goods" name="Investments-categories"
                            v-model="areas">
                        <h1 class="learn-more" style="color:#033f52">SELECT & CHECK COMPANIES</h1>
                        <span class="checkmark" href="#"></span>
                    </label>

                </div>

                <div class="column4">
                    <div class="area-icons">
                        <img src="~/assets/img/sustainable.png" alt="Sustainability">
                    </div>
                    <div class="counter" data-target="270"></div>
                    <div class="link-text">
                        <a class="learn-more"><router-link to="/companies/Areas/sustainability">
                                <h1 style="color:#033f52">Sustainability Investments →</h1>
                            </router-link></a>
                    </div>
                    <label for="Sustainability">

                        <input type="radio" id="Sustainability" value="Sustainability" name="Investments-categories"
                            v-model="areas">
                        <h1 class="learn-more" style="color:#033f52">SELECT & CHECK COMPANIES</h1>
                        <span class="checkmark" href="#"></span>
                    </label>

                </div>

            </div>

        </div>
        <section class="team-members-grid">
            <div id="title2">PORTFOLIO SNAPSHOT
                <div class="form-container">
                    <label for="age-filter">Filter companies by name </label>
                    <input id="age-filter" type='text' placeholder="Search Company" v-model="name">
                </div>
            </div>
            <div class="row-c">
                <div id="card-container">
                    <Cardsection v-for="company of filtered" :subtitle="company.ceo" :area="company.areas"
                        :image="company.image" :link="'/companies/' + company.id" />
                </div>
            </div>
        </section>
        <div class="row41">
            <div class="text-block">
                Our Exit Strategies
                <p class="left-text">{{ leftColumnText }}</p>
            </div>
            <div class="buttons-container">
                <div class="buttons">
                    <div v-for="button in buttons" :key="button.id">
                        <button style="color: white;" @click="updateText(button.text)"><span>{{ button.label
                        }}</span></button>
                    </div>
                </div>
                <div style="position=relative; align-items: center; margin:5%; ">
                    <div class="right-text">
                        <p>{{ rightColumnText }}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>


<script setup>
// useRuntimeConfig provide us with environment variables set up in the nuxtconfig file
const { data: companies } = await useFetch(useRuntimeConfig().public.serverURL + '/companies')
/*
    In order to implement a filter, we use the computed property.
    This allows to have a cached value that contains the filtered list.
    Instead of using the normal list for the cards, we used the computed property directly.
*/
const name = ref("");
const areas = ref("");
const MR = ref("");

const filtered = computed(() => {
    const arrTot = []
    // Checking for values where the part of the company name is provided
    for (let company of companies.value) {
        if (company.ceo != undefined) { // Irst 8 of the db are supervisors' name
            if ((name.value == 0 || name.value == "") & (areas.value == 0 || areas.value == "") & (MR.value == 0 || MR.value == "")) { // All companies
                //console.log(company) // Only for debug
                arrTot.push(company)
            }
            //else if ((company.name == name.value) & (company.areas == areas.value)) {
            //    arrTot.push(company)
            //}
            else if ((company.name.toLowerCase().includes(name.value.toLowerCase())) & ((company.areas == areas.value) || (areas.value == 0 || areas.value == "")) & (company.MostRelevant == MR.value))
                arrTot.push(company)
            console.log(MR.value)
        }
    }
    return arrTot

})


</script>

<script>
export default {
    mounted() {
        const counters = document.querySelectorAll('.counter');
        const delay = 500;

        const isInView = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        const animateCounters = () => {
            counters.forEach((counter, index) => {
                if (isInView(counter)) {
                    const target = +counter.dataset.target;
                    const start = performance.now();
                    const duration = 2000;

                    const step = (timestamp) => {
                        const elapsed = timestamp - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const value = Math.floor(progress * target);
                        counter.textContent = `${value}+`;
                        if (progress < 1) {
                            requestAnimationFrame(step);
                        }
                    };

                    requestAnimationFrame(step);
                } else {
                    counter.textContent = '0+';
                }
            });
        };

        const handleScroll = () => {
            animateCounters();
            window.removeEventListener('scroll', handleScroll);
        };

        animateCounters();
        window.addEventListener('scroll', handleScroll);
    },
    methods: {
        navigateToProjects() {
            this.$router.push({ name: 'technology', hash: '#projects' });
        },
        filterAndNavigate(event) {
            // Prevent the default link behavior
            event.preventDefault();

            // Perform filtering based on the selected value (example filtering code)
            // Replace this code with your actual filtering logic
            if (this.areas === 'Technology') {
                // Get the target section using the href attribute
                const targetSection = document.querySelector(event.target.getAttribute('href'));

                // Scroll to the target section
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        },
    },
    data() {
        return {
            areas: '',
            leftColumnText: 'We are committed to helping our portfolio companies realize their full potential. One of the key ways is by working closely with our companies to develop and execute a successful exit strategy. Our goal is to help our companies achieve a successful exit that maximizes returns for our investors and provides a strong foundation for future growth and opportunities. Take a look at our exit strategies in the buttons below:',
            rightColumnText: '',
            buttons: [
                { id: 2, label: 'IPO', text: 'An Initial Public Offering is a process where a private company goes public and offers shares of stock to the public market. We prepare our companies for an IPO, including helping them build a strong management team, establishing governance and financial controls,and developing a compelling growth strategy. Our deep understanding of the public markets, combined with our network of investment bankers,allows us to guide our companies to achieve the best possible outcome.' },
                { id: 3, label: 'M & A', text: 'Mergers & Acquisitions involves the acquisition of a company by another company often at a premiuim price. We work closely to identify potential acquirers and facilitate the M & A process, including valuation analysis, due diligence and negotiation. Our network of strategic buyers, private equity firms, and other potential acquirers enables us to help our companies to achieve transactions that maximize returns for our investors.' },
                { id: 4, label: 'Strategic Sale', text: 'A strategic sale involves the scale of a company to a strategic buyer, such as a competitor or industry player. We have deep industry expertise and a broad network of strategic buyers, enabling us to help our portfolio companies identify potential acquirers and negotiate a successful sale. Our focus on building strong relationships with key players in the industry allows us to achieve the best possible outcome for our companies.' },
                { id: 5, label: 'Recapitalization', text: 'Recapitalization involves restructuring the capital structure of a company, often through a combination of debt and equity. We work closely to evaluate their capital needs and develop comprehensive recapitalization plan that balances the companys growth objectives with its financial profile. We help the companies achieve a successful recapitalization that provides a strong foundation for future growth and opportunities.' },
            ],
        }
    },
    methods: {
        updateText(newText) {
            this.rightColumnText = newText;
        },
    },
};

</script>
<style scoped>
/*First-intro styles*/
.image-text-overlay {
    width: 80%;
    height: 225px;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
}

.overlay-title {
    font-size: 60px;
    font-family: sans-serif;
    text-transform: uppercase;

}

.overlay-subtext {
    font-size: 24px;
    margin-bottom: 5px;
    display: block;

}

.overlay-subsubtext {
    width: 70%;
    font-size: 18px;
    color: #646766;
    display: block;
}

/* Responsive styles for smaller screens */
@media (max-width: 768px) {
    .col-md-4 {
        margin-top: 15% !important;
    }
}
@media (max-width: 768px){

    .overlay-title {
        font-size: 40px;
    }

    .overlay-subtext {
        font-size: 20px;
    }

    .overlay-subsubtext {
        width: 100%;
        font-size: 16px;
    }
}

.overlay-subsubtext em {
    color: red;
}

.text-middle-left {
    display: table;
}

.text-middle-left p {
    display: table-cell;
    position: relative;
    z-index: 2;
    padding: 15px 20px 15px 20px;
}

.text-middle-left p {
    vertical-align: middle;
    text-align: left;
}

.containeri {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
}

.containeri::before {
    content: "";
    background: url('assets/img/logoinv.jpg') no-repeat;
    background-size: cover;
    background-position-y: 50%;
    background-position-x: 55%;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

}

.overlay-buttons {
    margin-top: 2%;
    align-items: center;
    position: relative;
    z-index: 2;
    width: 100%;
}

.overlay-buttons button {
    cursor: pointer;
    color: #f6f9f9;
    background-color: #033f52;
    border: none;
    padding: 2%;
    font-size: 18px;
    border: solid #bafefe;
}

.overlay-buttons button:hover {
    cursor: pointer;
    color: #f6f9f9;
    background-color: #076b8a;
}

.col-md-4 {
    position: relative;
    width: 50%;
    margin-top: 5%;
    margin-right: 45%;
}

#title2 {
    align-items: center;
    padding-top: 1%;
    padding-left: 45%;
    position: relative;
    font-size: 24px;
    font-weight: bold;
    font-family: sans-serif;
    z-index: 6;
}

/*Styles for the counter section*/
.row4 {
    margin-bottom: 5%;
    width: 100%;
    height: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.row4-a {
    width: 92%;
    height: 30%;
    display: flex;
    flex-wrap: wrap;
}

.column4 {
    position: relative;
    background-size: 80%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: right;


}

.column4::before {
    background: url('assets/img/areas.png') center center no-repeat;
    content: "";
    position: absolute;
    background-size: 80%;
    width: 90%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    opacity: 0.17;

}

.column41 {
    padding-top: 2%;
    position: relative;
    background-size: 80%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: right;
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

.counter {
    font-size: 3rem;
    font-weight: bolder;
    color: #033f52;
}

.column41::before {
    background: url('assets/img/areas.png') center center no-repeat;
    content: "";
    position: absolute;
    background-size: 80%;
    width: 90%;
    height: 100%;
    flex-basis: 20%;
    padding: 0.7rem;
    background-color: rgba(255, 255, 255, 0.8);
    opacity: 0.07;
}

.area-icons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 0;
    padding-bottom: 50%;
    position: relative;
}

.area-icons img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.column4 p {
    font-size: 1.5rem;
    font-weight: bold;
}

.column41 p {
    font-size: 1.5rem;
    font-weight: bold;

}

.link-text {
    text-align: center;
    text-decoration: underline;
}

.learn-more {
    text-decoration: none;
    font-size: 16px;
    text-decoration-color: #033f52;
    font-family: sans-serif;
    font-size: large;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position: relative;
    position: left;
}

.learn-more-2 {
    margin-left: 16%;
    text-decoration: none;
    font-size: 16px;
    text-decoration-color: #033f52;
    font-family: sans-serif;
    font-size: large;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position: relative;
    z-index: 4;

}

.learn-more a {
    text-decoration: none;
    font-size: 10px;
}

label>[type=checkbox],
label>[type=radio] {
    margin-right: 2rem;
    -webkit-text-fill-color: #0e6b74;
    margin: 1rem 1rem 0.2rem 0;
    position: absolute;
}

/*Styles for the section of companies*/
.team-members-grid {
    background-color: rgba(233, 237, 237, 0.997);
    background-position-x: center;
    opacity: 100%;
    position: relative;
    width: 100%;
}

.title {
    width: 20%;
    position: relative;
    font-weight: bold;
}



#card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-decoration: none;
    border: none;
    padding-bottom: 2%;
}

.form-container {
    text-align: right;
    padding-right: 4%;
    padding-bottom: 0%;
    font-family: sans-serif;
    font-size: 16px;
}

input {
    border-color: #b2b7b5;
    padding: 10px;
    font-size: 1.1em;
    width: 10%;
    background-color: rgba(233, 237, 237, 0.997);
    box-sizing: border-box;
    border: 3px solid #ccc;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
}

#age-filter {
    border-color: #b2b7b5;
    padding: 10px;
    font-size: 1.1em;
    width: 20%;
    background-color: rgba(233, 237, 237, 0.997);
    box-sizing: border-box;
    border: 3px solid #ccc;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
}

input[type=text]:focus {
    border: 3px solid #555;
}

input::placeholder {
    color: #b2b7b5;
}

.row4.button {
    padding: 10px 20px;
    margin: 5px;
    border: none;
    border-radius: 10%;
    cursor: pointer;
}


/*Exit Strategies section styles*/
.row41 {
    background: url('assets/img/exit.png') no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
}

.row41 .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.text-block {
    position: relative;
    font-family: sans-serif;
    font-size: 40px;
    color: white;
    padding-left: 8%;
    padding-top: 5%;
    padding-right: 10%;
}

.buttons-container {
    display: flex;
    align-items: center;
    padding-left: 5%;
    width: 60%;
    padding-bottom: 2%;
}

.row41 .left-text {
    margin-top: 2%;
    width: 35%;
    font-family: sans-serif;
    font-size: 20px;
    color: white;
}

.buttons {
    padding-bottom: 2%;
    width: 40%;
    height: 100%;
    flex-direction: row;

}

.buttons button {
    width: 150px;
    height: 2.5rem;
    margin: 2%;
    font-size: 18px;
    text-decoration-color: white;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    border-radius: 10px;
    background-color: #0e6b74;
    border: 2px solid #0e6b74;
    box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.2);
}

button:hover {
    background-color: #5ecbde;
}

.right-text {
    position: relative;
    padding: 1%;
    background-color: #0e6b74;
    border-radius: 5%;
    padding-left: 1%;
    width: 80%;
    font-family: sans-serif;
    font-size: 18px;
    color: #f6f9f9;
}

.row41 {
    background: url('assets/img/exit.png') no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
}

.row41 .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.text-block {
    position: relative;
    font-family: sans-serif;
    font-size: 40px;
    color: white;
    padding-left: 8%;
    padding-top: 5%;
    padding-right: 10%;
}

.buttons-container {
    display: flex;
    align-items: center;
    padding-left: 5%;
    width: 60%;
    padding-bottom: 2%;
}

.row41 .left-text {
    margin-top: 3%;
    width: 35%;
    font-family: sans-serif;
    font-size: 20px;
    color: white;
}

.buttons {
    padding-bottom: 2%;
    width: 40%;
    height: 100%;
    flex-direction: row;
}

.buttons button {
    width: 150px;
    height: 2.5rem;
    margin: 2%;
    font-size: 18px;
    text-decoration-color: white;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    border-radius: 10px;
    background-color: #0e6b74;
    border: 2px solid #0e6b74;
    box-shadow: 4px 6px 4px rgba(0, 0, 0, 0.2);
}

button:hover {
    background-color: #5ecbde;
}


/* Media Queries */

@media (max-width: 768px) {
    .text-block {
        font-size: 30px;
        padding-left: 5%;
        padding-right: 5%;
    }

    .buttons-container {
        padding-left: 2%;
        width: 80%;
    }

    .row41 .left-text {
        width: 50%;
        font-size: 16px;
    }

    .buttons button {

        height: 2rem;
        margin: 1%;
        font-size: 16px;
    }

    .right-text {
        padding: 0.5%;
        width: 100%;
        font-size: 16px;
    }

    .image-text-overlay {
        width: 70%;
    }

    .col-md-4 {
        width: 100%;
        margin-right: 0;
    }
}

@media (max-width: 600px) {
    .text-block {
        font-size: 24px;
        padding-left: 4%;
        padding-right: 4%;
    }

    .buttons-container {
        padding-left: 2%;
        width: 80%;
    }

    .row41 .left-text {
        width: 60%;
        font-size: 16px;
    }

    .buttons button {
        height: 1.5rem;
        margin: 1%;
        font-size: 14px;
    }

    .right-text {
        padding: 0.5%;
        width: 100%;
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .text-block {
        font-size: 20px;
        padding-left: 3%;
        padding-right: 3%;
    }

    .buttons-container {
        padding-left: 2%;
        width: 90%;
    }

    .row41 .left-text {
        width: 70%;
        font-size: 14px;
    }

    .buttons button {
        width: 120px;
        height: 1.5rem;
        margin: 1%;
        font-size: 14px;
    }

    .right-text {
        padding: 0.5%;
        width: 100%;
        font-size: 14px;
    }
}

@media (max-width: 460px) {
    .image-text-overlay {
        width: 90%;
    }
}

@media (max-width: 400px) {
    .text-block {
        font-size: 18px;
        padding-left: 2%;
        padding-right: 2%;
    }

    .buttons-container {
        padding-left: 2%;
        width: 90%;
    }

    .row41 .left-text {
        width: 80%;
        font-size: 12px;
    }

    .buttons button {
        width: 100px;
        height: 1.25rem;
        margin: 1%;
        font-size: 12px;
    }

    .right-text {
        padding: 0.5%;
        width: 100%;
        font-size: 12px;
    }

    .image-text-overlay {
        width: 100%;
    }
}

@media (max-width: 300px) {
    .text-block {
        font-size: 16px;
        padding-left: 1%;
        padding-right: 1%;
    }

    .buttons-container {
        padding-left: 2%;
        width: 90%;
    }

    .row41 .left-text {
        width: 90%;
        font-size: 10px;
    }

    .buttons button {
        width: 100px;
        height: 1rem;
        margin: 1%;
        font-size: 10px;
    }

    .right-text {
        padding: 0.5%;
        width: 100%;
        font-size: 10px;
    }

    .image-text-overlay {
        width: 60%;
    }

    .overlay-title {
        font-size: 20px;
    }

    .overlay-subtext {
        font-size: 10px;
    }

    .overlay-subsubtext {
        font-size: 10px;
    }
}
</style>