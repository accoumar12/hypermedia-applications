<!--
    Home page
-->
<template>
    <main id="back-h">
        <div class="row-h-1">
            <div class="content">
                <div class="content__container">
                    <p class="content__container__text">
                        Hello
                    </p>
                    <ul class="content__container__list">
                        <li class="content__container__list__item">world !</li>
                        <li class="content__container__list__item">bob !</li>
                        <li class="content__container__list__item">users !</li>
                        <li class="content__container__list__item">everybody !</li>
                    </ul>
                </div>
            </div>
            <div class="container-first">
                <div class="container__image-f">
                    <div class="container__info container__author">Photo by <a class="link"
                            href="https://instagram.com/silvia.diaconescu" target="_blank">Silvia Diaconescu</a></div>
                    <div class="container__info container__location">Geneva Lake Switzerland </div>

                </div>
            </div>
            <div class="container-second">
                <div class="container__image-t">
                    <div class="container__info container__author">Photo by <a class="link"
                            href="https://instagram.com/silvia.diaconescu" target="_blank">Silvia Diaconescu</a></div>
                    <div class="container__info container__location">Geneva Lake Switzerland </div>
                </div>
            </div>
            <div class="container-third">
                <div class="container__image-e"></div>
                <div class="container__info container__author">Photo by <a class="link"
                        href="https://instagram.com/silvia.diaconescu" target="_blank">Silvia Diaconescu</a></div>
                <div class="container__info container__location">Geneva Lake Switzerland </div>

            </div>
        </div>


    </main>
</template>

<style>
#back-h {
    width: 100%;
    background-image: url('assets/img/logo.png');
    background-size: cover;
    height: 100%;
    background-repeat: no-repeat;
    position: relative;
    z-index: 1;
    overflow: hidden;

}

.row-h-1 {
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 40%;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
}

.content {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(50%, 50%);
    height: 160px;
    overflow: hidden;
    padding: 20px;
    font-family: 'Lato', sans-serif;
    font-size: 35px;
    line-height: 40px;
    color: #ecf0f1;
}



.content__container {
    font-weight: 600;
    overflow: hidden;
    height: 40px;
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
    font-size: 42px;
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
    padding-left: 110px;
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
    background-image: url('https://img.freepik.com/premium-photo/growth-graph-finance-business-chart-market-financial-stock-money-background-success-digital-investment-data-concept-economy-analysis-profit-diagram-global-trade-currency-report-exchange_79161-2475.jpg');
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
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px;
    border-radius: 5px;
}

.container__image-f:hover .container__info {
    opacity: 1;
}

.container__location {
    transition-delay: .15s;
}

.container__image-f:hover {
    border-radius: 0%;
    width: 250px;
    height: 210px;

    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08), 0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14);
}

.container__image-f:before {
    width: 100%;

    opacity: 0.18;
    filter: blur(10px) saturate(100%);
    transform: scale(2.8) translate3d(-18%, 0px, 0px);
}


.link {
    border-bottom: 1px solid transparent;
    color: #06C0A8;
    text-decoration: none;
    transition: ease-in .13s;
}

.link:hover {
    background-color: #06C0A8;
    color: #ffffff;
}

/* Top Middle Image */
.top-middle-image {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
}

.container-second {
    padding-left: 2%;
    display: flex;
    justify-content: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.container__image-t {
    position: relative;
    display: flex;

    flex-direction: column;
    justify-content: center;
    width: 150px;
    height: 150px;

    border-radius: 50%;
    background-image: url('https://img.freepik.com/premium-photo/growth-graph-finance-business-chart-market-financial-stock-money-background-success-digital-investment-data-concept-economy-analysis-profit-diagram-global-trade-currency-report-exchange_79161-2475.jpg');
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

    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08), 0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14);
}

.container__image-t:before {
    width: 100%;

    opacity: 0.18;
    filter: blur(10px) saturate(100%);
    transform: scale(2.8) translate3d(-18%, 0px, 0px);
}

/* Right Image */
.right-image {
    max-width: 100%;
    max-height: 100%;
}

.container-third {
    padding-left: 4%;
    width: 100%;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.container__image-e {
    position: relative;
    display: flex;

    flex-direction: column;
    justify-content: center;
    width: 150px;
    height: 150px;

    border-radius: 50%;
    background-image: url('https://img.freepik.com/premium-photo/growth-graph-finance-business-chart-market-financial-stock-money-background-success-digital-investment-data-concept-economy-analysis-profit-diagram-global-trade-currency-report-exchange_79161-2475.jpg');
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

    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(9, 55, 53, 0.08), 0px 16px 24px rgba(9, 55, 53, 0.1), 0px 24px 32px rgba(9, 55, 53, 0.14);
}

.container__image-e:before {
    width: 100%;

    opacity: 0.18;
    filter: blur(10px) saturate(100%);
    transform: scale(2.8) translate3d(-18%, 0px, 0px);
}
</style>