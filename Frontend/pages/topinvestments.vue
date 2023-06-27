<!--
    Page Of Most Relevant Projects
-->
<template>
    <main id="back">
        <div class="col-md-4">
            <div class="image-text-overlay text-middle-left">
                <p>
                    <span class="overlay-title">TOP ACTUAL INVESTMENTS</span><br>
                    <span class="overlay-subtext">In VenTour we invest in long lasting companies, known worlwide for their
                        success!</span><br>
                </p>
            </div>
        </div>
        <ul id="section-top">
            <input type="radio" name="radio-btn" id="img-1" checked />
            <li id="img-container">
                <div id="img-inner">
                    <router-link to="/companies/31"><img
                            src="https://assets.website-files.com/5e33539ac1dec48c992bdaae/5e5993706f7f75a7ce21dc93_DellTechnologiesWorld_3DExhibits_Fullscreen.jpg"></router-link>
                </div>
                <label for="img-6" class="sb-bignav" title="Previous">&#x2039;</label>
                <label for="img-2" class="sb-bignav" title="Next">&#x203a;</label>
            </li>

            <input type="radio" name="radio-btn" id="img-2" />
            <li id="img-container">
                <div id="img-inner">
                    <router-link to="/companies/37"><img
                            src="https://studycafe.in/cdn-cgi/image/fit=contain,format=webp,gravity=auto,metadata=none,quality=80,width=1200,height=730/wp-content/uploads/2022/12/Nike-1.jpg"></router-link>
                </div>
                <label for="img-1" class="sb-bignav" title="Previous">&#x2039;</label>
                <label for="img-3" class="sb-bignav" title="Next">&#x203a;</label>
            </li>

            <input type="radio" name="radio-btn" id="img-3" />
            <li id="img-container">
                <div id="img-inner">
                    <router-link to="/companies/41"><img
                            src="https://www.solarchoice.net.au/wp-content/uploads/Canadian-Solar-Banner.png"></router-link>
                </div>
                <label for="img-2" class="sb-bignav" title="Previous">&#x2039;</label>
                <label for="img-4" class="sb-bignav" title="Next">&#x203a;</label>
            </li>

            <input type="radio" name="radio-btn" id="img-4" />
            <li id="img-container">
                <div id="img-inner">
                    <router-link to="/companies/28"><img
                            src="https://www.fair360.com/media/2022/12/cigna-building.jpg"></router-link>
                </div>
                <label for="img-3" class="sb-bignav" title="Previous">&#x2039;</label>
                <label for="img-5" class="sb-bignav" title="Next">&#x203a;</label>
            </li>
        </ul>
        <div class="col3">
            <router-link to="/companies" class="nav-link-end">
                <a class="card13">
                    <h3>CHECK ALL INVESTMENTS</h3>
                    <div class="go-corner">
                        <div class="go-arrow">
                            →
                        </div>
                    </div>
                </a>
            </router-link>
        </div>
    </main>
</template>
<style>
#back {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-image: url('assets/img/19449741.jpg');
    background-position-x: center;
}

.col-md-4 {
    position: relative;
    width: 50%;
    margin-top: 5%;
    margin-right: 45%;
}

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
    font-family: sans-serif;
    font-size: 24px;
    margin-bottom: 5px;
    display: block;

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

ul,
li {
    display: block;
}

#section-top {
    left: 6%;
    width: 54%;
    height: 525px;
    display: block;
    position: relative;
}

#section-top * {
    user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
}

#section-top input {
    display: none;
}

#img-inner {
    top: 0;
    opacity: 0;
    width: 70%;
    height: 100%;
    display: block;
    position: absolute;

    transform: scale(0);
    -moz-transform: scale(0);
    -webkit-transform: scale(0);

    transition: all 0.7s ease-in-out;
    -moz-transition: all 0.7s ease-in-out;
    -webkit-transition: all 0.7s ease-in-out;
}

#img-inner img {
    width: 108%;
    height: 80%;
}


#img-inner:hover~label.sb-bignav {
    opacity: 0.5;
}

label.sb-bignav:hover {
    opacity: 1;
}

.sb-bignav {
    width: 200px;
    height: 80%;
    display: none;
    position: absolute;
    opacity: 0.3;
    z-index: 9;
    cursor: pointer;

    transition: opacity 0.2s;
    -moz-transition: opacity 0.2s;
    -webkit-transition: opacity 0.2s;

    color: white;
    font-size: 156pt;
    text-align: center;
    line-height: 380px;
    font-family: "Varela Round", sans-serif;
    background-color: rgba(255, 255, 255, 0.3);
    text-shadow: 0px 0px 15px rgb(119, 119, 119);
}

label[title="Next"] {
    margin-left: 55%;
}

input:checked+li>#img-inner {
    opacity: 1;

    transform: scale(1);
    -moz-transform: scale(1);
    -webkit-transform: scale(1);

    transition: opacity 1s ease-in-out;
    -moz-transition: opacity 1s ease-in-out;
    -webkit-transition: opacity 1s ease-in-out;
}

input:checked+li>label {
    display: block;
}

.col3 {
    max-width: 100%;
    margin: 2%;
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

@media (max-width: 768px) {
    .col-md-4 {
        margin-top: 15% !important;
    }
}

@media (max-width: 768px) {

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

@media (max-width: 460px) {
    #section-top {
        left: 0%;
        width: 72%;
        height: 308px;
        display: block;
        position: relative;
    }

    label[title="Next"] {
        margin-left: 15%;
    }
}

@media (max-width: 390px) {
    #section-top {
        margin-bottom: 6%;
        width: 54%;
        height: 320px;
        display: block;
        position: relative;
    }

    label[title="Next"] {
        margin-left: 0%;
    }
}

@media (max-width: 360px) {
    #section-top {
        margin-bottom: 6%;
        width: 86%;
        height: 320px;
        display: block;
        position: relative;
    }

    label[title="Next"] {
        margin-left: 10%;
    }

    .sb-bignav {
        width: 265px;
    }
}

@media (max-width: 300px) {
    #section-top {
        margin-bottom: 6%;
        width: 54%;
        height: 507px;
        display: block;
        position: relative;
    }

    label[title="Next"] {
        margin-left: 0%;
    }
}
</style>