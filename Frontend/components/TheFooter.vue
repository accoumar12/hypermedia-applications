<!--
    Footer of the page
-->

<template>
    <div>
    <div v-if="!isMobile">
    <desktop> 
    <div class="footer-dark">
        <footer>
            <div class="container-f">
                <div class="rowf">
                    <div class="col-md-3 col-sm-6 item text-right">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Terms & Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-6 item text-middle">
                        <h3>Contacts</h3>
                        <ul>
                            <li><a href="https://www.google.com/maps/place/Politecnico+di+Milano/@45.4780976,9.2223853,17z/data=!3m2!4b1!5s0x4786c6f41814d881:0x372c7074dcfca556!4m6!3m5!1s0x4786c6f67dd11753:0x8e30fae1774a3377!8m2!3d45.4780977!4d9.2272562!16s%2Fg%2F11g_76wmz"
                                    target="_blank">Address:
                                    Politecnico di Milano</a></li>
                            <li><a href="tel:+393123456789">Phone: +39 312 345 6789</a></li>
                            <li><a href="mailto:ventourteam@gmail.com" target="_blank">Email:
                                    ventourteam@gmail.com</a></li>
                        </ul>
                    </div>

                    <div class="logof">
                        <router-link to="/"><img class="logof" src="~/assets/img/logo-witho-bck-slog.png"></router-link>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 item ">
                    <div class="social-iconsf"><a href="#"><img src="~/assets/img/facebook.png" alt="Facebook" /></a>
                        <a href="#"><img src="~/assets/img/linkedin.png" alt="LinkedIn" /></a>
                        <a href="#"><img src="~/assets/img/instagram.png" alt="Instagram" /></a>
                        <div class="copy-right">© 2020 VenTour. All rights reserved.</div>
                    </div>
                </div>

            </div>
        </footer>
    </div>
    </desktop>
    </div>
    <div v-else>
        <mobile>
            <div class="footer-dark">
        <footer>
            <div class="container-f2">
                <div class="rowf2">
                    <div class="Services">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Terms & Policy</a></li>
                        </ul>
                        <div class="Space">
                            <p> </p>                            
                        </div>
                    <h3>Contacts</h3>
                        <ul>
                            <li><a href="https://www.google.com/maps/place/Politecnico+di+Milano/@45.4780976,9.2223853,17z/data=!3m2!4b1!5s0x4786c6f41814d881:0x372c7074dcfca556!4m6!3m5!1s0x4786c6f67dd11753:0x8e30fae1774a3377!8m2!3d45.4780977!4d9.2272562!16s%2Fg%2F11g_76wmz"
                                    target="_blank">Address:
                                    Politecnico di Milano</a></li>
                            <li><a href="tel:+393123456789">Phone: +39 312 345 6789</a></li>
                            <li><a href="mailto:ventourteam@gmail.com" target="_blank">Email:
                                    ventourteam@gmail.com</a></li>
                        </ul>
                    <div class="social-iconsf2"><a href="#"><img src="~/assets/img/facebook.png" alt="Facebook" /></a>
                    <a href="#"><img src="~/assets/img/linkedin.png" alt="LinkedIn" /></a>
                        <a href="#"><img src="~/assets/img/instagram.png" alt="Instagram" /></a>
                        <div class="copy-right2">© 2020 VenTour
                            <br>
                        All rights reserved.</div>
                    </div>
                    </div>
                    
                    
                </div>
                

            </div>
        </footer>
    </div>
        </mobile>
    </div>
    </div>
</template>
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
    },
};

</script>


<style>
.container-f {
    height: 200px;
}
.container-f2 {
    height: 100%;
}

.text-right {
    padding-left: 5%;
    padding-top: 2%;
}

h3 {
    color: aliceblue;
}

.rowf {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 20%;
}
.rowf2 {
    display: flex;
    flex-direction: column;
    align-items: flex;
    justify-content: space-between;
    height: 50%;
    align-items: center;
}

.col-md-3 {
    padding-top: 2%;
    height: 10%;
}

.text-middle {
    padding-left: 2%;
    padding-top: 2%;
}

.text-bottom {
    position: middle;
}

.logof {
    max-width: 25%;
    max-height: 16%;
    position: relative;
    padding-left: 30%;
    padding-top: 2.5%;
}

.copy-right {
    position: absolute;
    position: center;
    opacity: 0.6;
    font-size: 13px;
    padding-left: 5%;
    padding-top: 20%;
}
.copy-right2 {
    position: absolute;    
    opacity: 0.6;
    font-size: 10px;
    padding-left: 350%;
    width: 150%;
    
}

.footer-dark {
    color: aliceblue;
    background-color: #033f52;
    padding-bottom: none;
}

.footer-dark h3 {
    margin-top: 0;
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
    color: aliceblue;
    text-decoration: none;
    opacity: 0.6;
}

.footer-dark ul a:hover {
    opacity: 3;
    color: aliceblue;
}

.social-iconsf {
    width: 15%;
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: 2%;
    margin-left: 45%;
    gap: 6%;
}
.social-iconsf2 {
    width: 30%;
    position: relative;
    display: flex;
    
    align-items: center;
    margin-top: 5%;
    gap: 12%;
}
.space{
    top: 10px;
}

.social-iconsf img {
    width: 25px;
    height: 25px;
    padding: auto;
    cursor: pointer;
}
.social-iconsf2 img {
    width: 25px;
    height: 25px;
    padding: auto;
    cursor: pointer;
}

@media (max-width: 767px) {
    .footer-dark .item:not(.social) {
        text-align: center;
        padding-bottom: 20px;
    }

    .rowf {
        flex-wrap: wrap;
    }
    .rowf2 {
        flex-wrap: wrap;
    }

    .col-md-3 {
        flex: 0 0 100%;
        padding-top: 2%;
        height: auto;
        text-align: center;
    }

    .text-middle,
    .text-right {
        padding-left: 0;
        padding-top: 2%;
    }

    .logof {
        max-width: 50%;
        max-height: auto;
        padding-left: 0;
        padding-top: 2.5%;
    }

    .copy-right {
        padding-left: 0;
        padding-top: 10%;
        padding-bottom: 2%;
        text-align: center;
    }
}

@media (max-width: 576px) {
    .logof {
        max-width: 70%;
    }

    .copy-right {
        font-size: 11px;
        padding-left: 0;
        padding-top: 2%;
        padding-bottom: 2%;
    }
}

.footer-dark .item.text {
    margin-bottom: 36px;
}

@media (max-width: 767px) {
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

@media (max-width: 991px) {
    .footer-dark .item.social {
        text-align: center;
        margin-top: 20px;
    }
}

.footer-dark .item.social>a:hover {
    opacity: 0.9;
}
</style>
