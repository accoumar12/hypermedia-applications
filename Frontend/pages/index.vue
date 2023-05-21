<!--
    Home page
-->
<template>
    <main id="back-h">
        <div class="row-h-1">
            <div class="content2">
                <p class="content__container__text">
                    Fly with us to a journey of growth!
                </p>
                <a href="#section2" class="plane-icon">
                    <img src="~/assets/img/plane.png" />
                </a>
            </div>
            <div class="content">
                <div class="content__container">
                    <p class="content__container__text">
                        We are
                    </p>
                    <ul class="content__container__list">
                        <li class="content__container__list__item">inovation !</li>
                        <li class="content__container__list__item">power !</li>
                        <li class="content__container__list__item">potential !</li>
                        <li class="content__container__list__item">VenTour !</li>

                    </ul>
                </div>
            </div>

            <div class="container-first">
                <div class="container__image-f">
                    <div class="container__info container__author">Investments in a decade </div>
                </div>

            </div>
            <div class="container-second">
                <div class="container__image-t">
                    <div class="container__info2 container__author">Invested in 5 BEST worldwide companies</div>
                </div>
            </div>
            <div class="container-second-b">
                <div class="container__image-e">
                    <div class="container__info3 container__author">Operating in 4 diverse investment areas</div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
// JavaScript code for handling the hover event
document.addEventListener("DOMContentLoaded", function () {
    const planeIcon = document.querySelector(".plane-icon");
    const planeImage = document.querySelector(".plane-icon img");

    planeIcon.addEventListener("mouseover", function () {
        planeImage.style.animation = "movePlane 1s infinite";
    });

    planeIcon.addEventListener("mouseout", function () {
        planeImage.style.animation = "";
    });
});
</script>
<style>
.plane-icon img {
    opacity: 1;
    position: absolute;
    width: 38%;
    top: 200%;
    left: 70%;
    transform: translate(-50%, -50%);
    z-index: 7;
    border-radius: 50%;
    animation: movePlane 5s linear infinite;
}

.plane-icon:hover img {
    animation: none;
    opacity: 0.5;
    animation: blink 1s linear infinite;
}

@keyframes movePlane {
    0% {
        transform: translate(-50%, -50%);
    }

    50% {
        transform: translate(-50%, 0%);
    }

    100% {
        transform: translate(-50%, -50%);
    }
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

body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    /* Prevent horizontal scrolling */
}

.row-h-1 {
    background-image: url("~/assets/img/wallhome.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 90%;
    position: relative;
    top: 0%;
    left: 0%;
    right: 0;
    z-index: 1;

}

.content {
    position: absolute;
    top: 29%;
    left: 68%;
    transform: translate(50%, 50%);
    height: 180px;
    overflow: hidden;
    padding: 20px;
    font-family: sans-serif;
    font-size: 25px;
    line-height: 40px;
    color: rgb(15, 108, 126);
    z-index: 2;
}

.content2 {
    width: 25%;
    position: absolute;
    font-weight: bold;
    top: 0px;
    left: 58%;
    transform: translate(46%, 50%);
    height: 135px;
    padding: 20px;
    font-family: sans-serif;
    font-size: 60px;
    line-height: 100%;
    color: rgb(15, 108, 126);
    z-index: 6
}


.content__container {
    font-weight: 600;
    overflow: hidden;
    height: 44px;
    padding: 0 40px;
    position: relative;
}

.content__container:before {
    content: '[';
    position: absolute;
    left: 0;
    top: 0;
}

.content__container:after {
    content: ']';
    position: absolute;
    right: 0;
    top: 0;
}

.content__container__text {
    display: inline;
    float: left;
    margin: 0;
}

.content:after,
.content:before {
    position: absolute;
    top: 0;

    color: #0e1010;
    font-size: 60px;
    line-height: 40px;

    -webkit-animation-name: opacity;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
    animation-name: opacity;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}


.content__container__list {
    margin-top: 0;
    padding-left: 100px;
    text-align: left;
    list-style: none;

    -webkit-animation-name: change;
    -webkit-animation-duration: 10s;
    -webkit-animation-iteration-count: infinite;
    animation-name: change;
    animation-duration: 10s;
    animation-iteration-count: infinite;
}

.content__container__list__item {
    line-height: 40px;
    margin: 0;
}

@-webkit-keyframes opacity {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@-webkit-keyframes change {

    0%,
    12.66%,
    100% {
        transform: translate3d(0, 0, 0);
    }

    16.66%,
    29.32% {
        transform: translate3d(0, -25%, 0);
    }

    33.32%,
    45.98% {
        transform: translate3d(0, -50%, 0);
    }

    49.98%,
    62.64% {
        transform: translate3d(0, -75%, 0);
    }

    66.64%,
    79.3% {
        transform: translate3d(0, -50%, 0);
    }

    83.3%,
    95.96% {
        transform: translate3d(0, -25%, 0);
    }
}

@-o-keyframes opacity {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@-o-keyframes change {

    0%,
    12.66%,
    100% {
        transform: translate3d(0, 0, 0);
    }

    16.66%,
    29.32% {
        transform: translate3d(0, -25%, 0);
    }

    33.32%,
    45.98% {
        transform: translate3d(0, -50%, 0);
    }

    49.98%,
    62.64% {
        transform: translate3d(0, -75%, 0);
    }

    66.64%,
    79.3% {
        transform: translate3d(0, -50%, 0);
    }

    83.3%,
    95.96% {
        transform: translate3d(0, -25%, 0);
    }
}

@-moz-keyframes opacity {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@-moz-keyframes change {

    0%,
    12.66%,
    100% {
        transform: translate3d(0, 0, 0);
    }

    16.66%,
    29.32% {
        transform: translate3d(0, -25%, 0);
    }

    33.32%,
    45.98% {
        transform: translate3d(0, -50%, 0);
    }

    49.98%,
    62.64% {
        transform: translate3d(0, -75%, 0);
    }

    66.64%,
    79.3% {
        transform: translate3d(0, -50%, 0);
    }

    83.3%,
    95.96% {
        transform: translate3d(0, -25%, 0);
    }
}

@keyframes opacity {

    0%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

@keyframes change {

    0%,
    12.66%,
    100% {
        transform: translate3d(0, 0, 0);
    }

    16.66%,
    29.32% {
        transform: translate3d(0, -25%, 0);
    }

    33.32%,
    45.98% {
        transform: translate3d(0, -50%, 0);
    }

    49.98%,
    62.64% {
        transform: translate3d(0, -75%, 0);
    }

    66.64%,
    79.3% {
        transform: translate3d(0, -50%, 0);
    }

    83.3%,
    95.96% {
        transform: translate3d(0, -25%, 0);
    }
}

.container-first {
    padding-left: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding-top: 4%;
}

.container__image-f {
    position: relative;
    display: flex;

    flex-direction: column;
    justify-content: center;
    width: 150px;
    height: 150px;

    border-radius: 50%;
    background-image: url("~/assets/img/euros.png");
    background-size: cover;
    transition: ease-in-out .3s;

    z-index: 2;
}

.container__image-f:before {
    content: ' ';
    position: absolute;

    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    background: inherit;
    background-position: bottom;
    filter: blur(40px) saturate(0%);
    transform: scaleX(0.4);
    transition: ease-in-out .4s;
    border-radius: 120px;
    transform-origin: right;
    opacity: 0;

    z-index: -1;
}

.container__info {
    color: rgb(43 49 71);
    font-family: sans-serif;
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 70%;
    position: relative;
    line-height: 1.8;
    transition: opacity 0.3s ease;
    opacity: 0;
}

.container__info.container__text {
    /* ... existing styles ... */
    position: absolute;
    /* Added position absolute */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 10px;
    border-radius: 5px;
}

.container__image-f:hover .container__info {
    opacity: 1;
}



.container__image-f:hover {
    border-radius: 0%;
    width: 250px;
    height: 210px;
    opacity: 0.7;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08), 0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14);
}

.container__image-f:before {
    width: 100%;

    opacity: 0.18;
    filter: blur(10px) saturate(100%);
    transform: scale(2.8) translate3d(-18%, 0px, 0px);
}


/* Top Middle Image */
.top-middle-image {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.container-second {
    padding-left: 6%;
    display: flex;
    justify-content: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.container-second-b {
    display: flex;
    justify-content: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.container__info2 {
    color: rgb(43 49 71);
    font-family: sans-serif;
    font-size: 20px;
    font-weight: bold;
    left: 10%;
    padding-bottom: 30%;
    position: relative;
    line-height: 1.8;
    transition: opacity 0.3s ease;
    opacity: 0;
}

.container__info2.container__text {
    /* ... existing styles ... */
    position: absolute;
    /* Added position absolute */
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    text-align: center;
    padding: 10px;
    border-radius: 5px;
}

.container__image-t:hover .container__info2 {
    opacity: 1;
}

.container__image-t {
    position: relative;
    display: flex;

    flex-direction: column;
    justify-content: center;
    width: 150px;
    height: 150px;

    border-radius: 50%;
    background-image: url('~/assets/img/offices.png');
    background-size: cover;
    transition: ease-in-out .3s;

    z-index: 2;
}

.container__image-t:before {
    content: ' ';
    position: absolute;

    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    background: inherit;
    background-position: bottom;
    filter: blur(40px) saturate(0%);
    transform: scaleX(0.4);
    transition: ease-in-out .4s;
    border-radius: 120px;
    transform-origin: right;
    opacity: 0;

    z-index: -1;
}

.container__image-t:hover .container__info {
    opacity: 1;
}



.container__image-t:hover {
    border-radius: 0;
    width: 250px;
    height: 210px;
    opacity: 0.7;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08), 0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14);
}

.container__image-t:before {
    width: 100%;

    opacity: 0.18;
    filter: blur(10px) saturate(100%);
    transform: scale(2.8) translate3d(-18%, 0px, 0px);
}

.container__info3 {
    color: rgb(43 49 71);
    font-family: sans-serif;
    font-size: 20px;
    font-weight: bold;
    left: 10%;
    padding-bottom: 58%;
    position: relative;
    line-height: -5px;
    transition: opacity 0.3s ease;
    opacity: 0;
}

.container__info3.container__text {
    /* ... existing styles ... */
    position: absolute;
    /* Added position absolute */
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    text-align: center;
    padding: 10px;
    border-radius: 5px;
}

.container__image-e:hover .container__info3 {
    opacity: 1;
}

.container__image-e {
    position: relative;
    display: flex;

    flex-direction: column;
    justify-content: center;
    width: 150px;
    height: 150px;

    border-radius: 50%;
    background-image: url('~/assets/img/areass.png');
    background-size: cover;
    transition: ease-in-out .3s;

    z-index: 2;
}

.container__image-e:before {
    content: ' ';
    position: absolute;

    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    background: inherit;
    background-position: bottom;
    filter: blur(40px) saturate(0%);
    transform: scaleX(0.4);
    transition: ease-in-out .4s;
    border-radius: 120px;
    transform-origin: right;
    opacity: 0;

    z-index: -1;
}

.container__image-e:hover .container__info {
    opacity: 1;
}



.container__image-e:hover {
    border-radius: 0;
    width: 250px;
    height: 210px;
    opacity: 0.7;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08), 0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14);
}

.container__image-e:before {
    width: 100%;

    opacity: 0.18;
    filter: blur(10px) saturate(100%);
    transform: scale(2.8) translate3d(-18%, 0px, 0px);
}
</style>