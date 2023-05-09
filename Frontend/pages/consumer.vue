<template>
    <main id="back">
        <div class="info-group">
            <div class="arrow">
                <div class="arrow-left">
                    <router-link to="/healthcare">
                        <img src="~/assets/img/left-arrows.png" alt="Left Arrow">
                    </router-link>
                </div>
                <router-link to="/sustainability">
                    <div class="arrow-right">
                        <img src="~/assets/img/right-arrows.png" alt="Right Arrow">
                    </div>

                </router-link>
            </div>

            <h1 class="name">Consumer Goods Investments</h1>
            <hr />
            <div class="row">
                <div class="columna">
                    <img id="area-img" src="~/assets/img/consumer-team.png" />
                </div>
                <div class="columna2">
                    <div class="button-container" style="position: sticky; top: 0; z-index: 1;">
                        <button class="section-button" :class="{ active: activeSection === 1 }" @click="activeSection = 1">
                            <br>
                            DESCRIPTION
                        </button>
                        <button class="section-button" :class="{ active: activeSection === 2 }" @click="activeSection = 2">
                            <br>
                            PROJECTS
                        </button>
                    </div>
                    <div class="description-containera">
                        <div v-if="activeSection === 1">
                            <p2 class="description">
                                Our company looks for opportunities in the consumer goods sector that are able to offer
                                unique value propositions to customers,
                                create new markets or disrupt existing ones.
                                <br>
                                The company's consumer goods investments span across a variety of categories including food
                                and beverage, beauty and personal care,
                                and household goods. VenTour is interested in companies that leverage cutting-edge
                                technologies to create new products and services that meet evolving consumer needs.
                                The company also prioritizes businesses that have a strong brand identity and are able to
                                connect with their customers on a personal level.
                            </p2>
                        </div>
                        <div v-else-if="activeSection === 2">
                            <p2 class="description">
                                This is the second section.Im gonna but here a list of projects(companies).
                            </p2>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
        <div class="row">
            <div class="text-center">
                <p>COMPANIES:</p>
            </div>
        </div>
        <div class="row2">
            <div class="column3">
                <img src="image1.jpg" alt="Image 1">
                <p>Text for image 1</p>
            </div>
            <div class="column3">
                <img src="image2.jpg" alt="Image 2">
                <p>Text for image 2</p>
            </div>
            <div class="column3">
                <img src="image3.jpg" alt="Image 3">
                <p>Text for image 3</p>
            </div>
        </div>
    </main>
</template>
        
        <!--
        <p id="description" v-html="newLineOnFullStop(dog.description)"></p>
        <SmallCard :title="dog.location.name" :subtitle="dog.location.city" :link="'/locations/' + dog.location.id" />
        -->
<script>
export default {
    data() {
        return {
            activeSection: 1,
        };
    },
};
</script>
<style>
#back {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url('assets/img/19449741.jpg');
    background-position-x: center;
}

.arrow {
    padding-top: 5%;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    animation: blink 4s infinite;
}

.arrow-left img,
.arrow-right img {
    height: 10%;
    width: 10%;
}


.arrow-left a,
.arrow-right a {
    display: flex;
    align-items: center;
    justify-content: center;
}


@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}

.info-group {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.name {
    font-size: 30px;
    font-weight: bold;
}

#data-container {
    margin-top: 10px;
    font-size: 18px;
}

.role {
    margin-top: 1%;
}

.team {
    margin-top: 2%;
}

hr {
    width: 70%;
    border: 1px solid black;
    margin: 20px 0;
}

.row {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding-bottom: 2%;
}



.columna {
    flex-basis: 50%;
    padding-left: 8%;
}

.columna2 {
    flex-basis: 50%;
    padding-right: 4%;

}

.columna.p2 {
    position: absolute;
}

#area-img {
    width: 70%;
    height: 700%;
    padding-left: 10%;

}


.description-containera {
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2%;
    align-items: center;
    text-align: justify;
    padding-right: 23%;
}

.description-containera p2 {
    height: 20%;
    padding-left: 2%;
    font-size: 15pt;
    width: 40%;
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

.column3 img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
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
}</style>