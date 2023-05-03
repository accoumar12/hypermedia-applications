<!--
    Footer of the page
-->

<template>
    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6 item text-right">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-6 item text-middle">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>

                    <div class="logo">
                        <router-link to="/"><img class="logo" src="~/assets/img/logo-witho-bck-slog.png"></router-link>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 item ">
                    <div class="social-icons"><a href="#"><img src="~/assets/img/facebook.png" alt="Facebook" /></a>
                        <a href="#"><img src="~/assets/img/linkedin.png" alt="LinkedIn" /></a>
                        <a href="#"><img src="~/assets/img/instagram.png" alt="Instagram" /></a>
                    </div>
                </div>
                <div class="copy-right">© 2020 VenTour. All rights reserved.</div>
            </div>
        </footer>
    </div>
</template>


<style>
.text-right {

    padding-right: 5%;

}

.text-right2 {
    padding-left: 2%;
}


.text-bottom {
    position: middle;
}

.logo {
    max-width: 30%;
    max-height: 18%;
    position: relative;
    padding-left: 40%;
}

.copy-right {
    position: relative;
    position: center;
    opacity: 0.6;
    font-size: 13px;
    padding-left: 45%;
    padding-top: 2%;
    padding-bottom: 2%;
}

.footer-dark {

    color: #010406;
    background-color: white;
    padding-bottom: none;
    border-top: 0.2em solid;
    border-image: linear-gradient(to right, rgb(25, 147, 153), rgb(4, 48, 61)) 1;
}

.footer-dark h3 {
    margin-top: 0;
    margin-bottom: 12px;
    font-weight: bold;
    font-size: 16px;
}

.footer-dark ul {
    padding: 0;
    list-style: none;
    line-height: 1.6;
    font-size: 14px;
    margin-bottom: 0;
}

.footer-dark ul a {
    color: inherit;
    text-decoration: none;
    opacity: 0.6;
}

.footer-dark ul a:hover {
    opacity: 0.8;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 2%;

}

.social-icons img {
    width: 25px;
    height: 25px;
    padding: auto;
    cursor: pointer;
}

@media (max-width:767px) {
    .footer-dark .item:not(.social) {
        text-align: center;
        padding-bottom: 20px;
    }
}

.footer-dark .item.text {
    margin-bottom: 36px;
}

@media (max-width:767px) {
    .footer-dark .item.text {
        margin-bottom: 0;
    }
}

.footer-dark .item.text p {
    opacity: 0.6;
    margin-bottom: 0;
}

.footer-dark .item.social {
    text-align: center;
}

@media (max-width:991px) {
    .footer-dark .item.social {
        text-align: center;
        margin-top: 20px;
    }
}


.footer-dark .item.social>a:hover {
    opacity: 0.9;
}
</style>