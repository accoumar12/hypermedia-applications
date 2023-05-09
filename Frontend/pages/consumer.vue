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
                    <img id="area-img" src="~/assets/img/tech-team.png" />
                </div>
                <div class="columna2">
                    <div class="button-container">
                        <button class="section-button" :class="{ active: activeSection === 1 }" @click="activeSection = 1">
                            Description
                        </button>
                        <button class="section-button" :class="{ active: activeSection === 2 }" @click="activeSection = 2">
                            Projects
                        </button>
                    </div>
                    <div class="description-containera">
                        <div v-if="activeSection === 1">
                            <p2 class="description">
                                VenTour understands the importance of technology investments and is committed to investing
                                in cutting-edge technologies. We have a team of experienced professionals who have an eye
                                for identifying promising technologies and the potential to change the world.
                                By investing in technology, VenTour aims to support startups that are focused on creating
                                innovative solutions to complex problems.
                                <br>
                                VenTour, a venture capital firm, has been investing in technology companies for years,
                                contributing to the growth and success of some of the most innovative businesses in the
                                industry.
                                VenTour's extensive knowledge and expertise in technology investments have helped its
                                portfolio companies reach their full potential.
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
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2%;
    align-items: center;
    text-align: justify;
    padding-right: 23%;
}

.description-containera p2 {
    padding-left: 2%;
    font-size: 15pt;
    width: 40%;
    font-family: PT sans-serif;
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
    border: none;
    background: none;
    cursor: pointer;
    font-size: 20px;
    margin-right: 20px;
}

.section-button.active {
    color: #00bfff;
    font-weight: bold;
}

.button-container {
    display: flex;
    justify-content: flex-start;
    margin-top: 5%;
    font-family: monospace;
    color: #033f52;
}
</style>