<template>
  <div class="background-section">
      <h1 class="big-text">About VenTour</h1>
      <!--<p class="small-text">We are a leading venture capital firm driving innovation and empowering startups to reach
          their full potential.</p>-->

      <div class="row-a">
        <div class="container-a">
          <div class="col-a">
            <a class="card1" href="#header1">
              <h3>OUR HISTORY</h3>
              <p class="small-a">Excellence over a decade in VenTour. From 15 million Euros of capital invested in 1910 to
                500 million Euros in 2020. We grow together with our investors!
              </p>
              <div class="go-corner" href="#header1">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
          <div class="col-a">
            <a class="card1" href="#header2">
              <h3>OUR APPROACH</h3>
              <p class="small-a">Evaluated from numerous experts as the best approach in helping the investors accomplish
                their ambitions for success. We help you to believe in YOU!</p>
              <div class="go-corner" href="#header2">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
          <div class="col-a">
            <a class="card1" href="#header3">
              <h3>WHAT DO WE OFFER</h3>
              <p class="small-a">We offer constant support, full guidance and numerous resources. We give information and
                assistance to new investors interested in joining us.</p>
              <div class="go-corner" href="#header3">
                <div class="go-arrow">
                  →
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div id="header1">
      <h1>OUR BRIEF HISTORY</h1>
      <p>Our history brings inovation.With a rich legacy spanning decades, we have been at the forefront of driving
        transformative change and empowering startups to shape the future.With a rich heritage spanning over two decades,
        our venture company has been at the forefront of fueling innovation, supporting promising startups, and fostering
        groundbreaking ideas that have revolutionized industries worldwide.</p>
    </div>
    <Carousel />
    <div id="header2">
      <h1>OUR INVESTMENT APPROACH</h1>
      <p>We are focused on four key factors that help us identify promising startups or better say... We make EVERYTHING
        promising!Our investment approach is driven by a meticulous evaluation of market dynamics, team expertise, product
        viability, and customer needs, ensuring a comprehensive assessment of startup potential. By combining strategic
        insights, rigorous analysis, and an unwavering belief in the power of innovation, we strive to transform every
        venture we back into a resounding success story that shapes the future of industries.</p>
    </div>
    <div class="row1-container">
      <div class="box box-down cyan">
        <h2>Growing Markets</h2>
        <p>We look for startups that are addressing large and growing markets with significant untapped potential. We
          assess the size of the market, the competitive landscape, and the potential for disruption.</p>
        <img class="ikona" src="~/assets/img/market-analysis.png">
      </div>
      <div class="box red">
        <h2>Team Experience</h2>
        <p>We believe that the founding team is critical to the success of any startup. We evaulate the team's experience,
          skills, and track record to ensure that they have the expertise and leadership necessary to execute on their
          vision. </p>
        <img class="ikona" src="~/assets/img/teamexp.png">
      </div>
      <div class="box box-down blue">
        <h2>Startup Products</h2>
        <p>We evaluate the startup's product or technology to ensure that it has a strong competitive advantage and
          addresses a real customer need. We assess the potential for scalability and the potential for further innovation
          and development.</p>
        <img class="ikona" src="https://assets.codepen.io/2301174/icon-calculator.svg">
      </div>
    </div>
    <div class="row2-container">
      <div class="box orange">
        <h2>Customer Needs</h2>
        <p>We focus on analyzing the alignment with market demand and customer needs. We assess the clarity and
          feasibility of the company's objectives, ensuring that they are relevant and time-bound.
          We evaluate the strategic plans, including actions and milestones outlined to achieve the specific objectives.
        </p>
        <img class="ikona" src="~/assets/img/customer-need.png">
      </div>
    </div>

    <div id="header3">
      <h1>WHAT WE OFFER TO COMPANIES</h1>
      <p>Once we have identified a promising startup, we work closely with the founding team to provide support, guidance,
        and resources to help them achieve their goals. Our team's extensive network and industry connections give our
        portfolio companies a competitive advantage in their respective markets.Our goal is to provide all companies with
        the resources they need to succeed, no matter what challenges
        they may face.</p>
    </div>
    <div class="card-o-row">
      <div class="card-o">
        <img
          src="https://media.istockphoto.com/id/494940062/photo/financial-concept-business-and-money.jpg?b=1&s=170667a&w=0&k=20&c=XPiQNsS1zIOyNLFDeffchh6T03A_mkR2IkBP06J9iyw="
          alt="">
        <div class="card-content-o">
          <h2>
            SUPPORT
          </h2>
          <p> We believe that investing in a startup is more than just providing funding. We take a hands-on approach to
            investing, working closely with our companies to provide the support they need to succeed. We are always
            available to provide support and
            answer questions.
          </p>
          <a href="#" class="button-o" @click="sendEmail">
            Contact for info. or questions
            <span class="material-symbols-outlined">
            </span>
          </a>
        </div>
      </div>
      <div class="card-o">
        <img
          src="https://media.istockphoto.com/id/950986640/photo/business-finance-accounting-contract-advisor-investment-consulting-marketing-plan-for-the.jpg?b=1&s=170667a&w=0&k=20&c=RvubsRQ8G-ZHiD0VyahnuZWKoQ-88HMnGQMBFSnOBjU="
          alt="">
        <div class="card-content-o">
          <h2>
            GUIDANCE
          </h2>
          <p>
            We work with out founding team to help companies develop their strategy and execute on their vision. We have a
            deep understanding of the challenges that startups face, and we draw on this knowledge to provide targeted
            guidance to our porfolio companies.
          </p>
          <a href="#" class="button-o" @click="sendEmail">
            Contact for info. or questions
            <span class="material-symbols-outlined">
            </span>
          </a>
        </div>
      </div>
      <div class="card-o">
        <img
          src="https://media.istockphoto.com/id/1468415656/photo/interest-rate-and-dividend-concept-businessman-with-percentage-symbol-and-up-arrow-interest.jpg?b=1&s=170667a&w=0&k=20&c=TeLXGpi5W-S04Lq0pSFluYu-xb7TpLa3isCcUiMOJb4="
          alt="">
        <div class="card-content-o">
          <h2>
            RESOURCES
          </h2>
          <p>
            We provide our portfolio companies with a wide range of resources. We provide them with access to a variety of
            services, such as marketing and branding support, legal and accounting services, and HR and recruiting
            support.
          </p>
          <a href="#" class="button-o" @click="sendEmail">
            Contact for info. or questions
            <span class="material-symbols-outlined">
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="row3-container">
      <div class="col3">
        <router-link to="/people" class="nav-link-end">
          <a class="card13">
            <h3>MEET OUR TEAM</h3>
            <div class="go-corner">
              <div class="go-arrow">
                →
              </div>
            </div>
          </a>
        </router-link>
      </div>
    </div>
</template>

<script>
import Carousel from '/pages/Carousel.vue'

export default {
  name: 'History',
  components: {
    Carousel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #656565;
  margin-top: 10px;
}

.attribution {
  font-size: 11px;
  text-align: center;
}

.attribution a {
  color: hsl(228, 45%, 44%);
}

/* Media Queries */

@media (max-width: 768px) {
  #carousel-container {
    width: 90%;
  }

  .left-arrow-container,
  .right-arrow-container {
    width: 40px;
    height: 30px;
  }

  .left-arrow-container {
    left: 50px;
  }

  .right-arrow-container {
    right: 50px;
  }
}

@media (max-width: 768px) {
  #carousel-container {
    width: 90%;
  }

  .left-arrow-container,
  .right-arrow-container {
    width: 40px;

    height: 30px;
  }

  .left-arrow-container {
    left: 5%;
  }

  .right-arrow-container {
    right: 5%;
  }
}

.card-o-row {
  gap: 2%;
  display: flex;
  justify-content: center;
  padding-bottom: 2%;
  width: 100%;
}

.card-o {
  display: inline-block;
  margin-right: 20px;
  position: relative;
  width: 400px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  color: rgb(240, 240, 240);
  box-shadow: 0 10px 30px 5px rgba(0, 0, 0, 0.5);
}

.card-o img {
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 1;
  transition: 1s ease-out;
}

.card-o h2 {
  opacity: 1;
  transition: transform 0.1s ease-in;
  font-size: 24px;
  position: absolute;
  margin: 0;
  font-family: sans-serif;
  font-weight: normal;
  text-transform: uppercase;
  inset: auto auto 220px 30px;
}

.card-o .p,
.card-o .a {
  position: absolute;
  opacity: 0;
  max-width: 80%;
  transition: 0.3s ease-out;
}

.card-o .p {
  inset: auto auto 80px 30px;
}

.card-o .a {
  inset: auto auto 40px 30px;
  color: inherit;
  text-decoration: none;
}

.card-o:hover .card-content-o {
  display: block;
}

.card-content-o {
  display: none;
}

.card-content-o p {
  display: none;
}

.card-o:hover h2 {
  color: rgb(84, 82, 82);
  font-weight: bold;
  inset: auto auto 220px 30px;
}

.card-o:hover p,
.card-o:hover a {
  font-size: 18px;
  padding-top: 20%;
  color: black;
  z-index: 4;
  opacity: 0.9;
  transition: 0.1s ease-in;
  text-align: center;
  padding-left: 10%;
  padding-right: 10%;
}

.card-o:hover img {
  transition: 0.3s ease-in;
  opacity: 0.4;
  transform: scaleY(0.0);
}

.card-o:hover .button-o {
  transition: 0.3s ease-in;
  opacity: 0.9;
  color: black;
}

.card-o:hover .button-o:hover {
  color: #045663;
}

.card-o:hover .card-content-o p {
  display: block;
}

.material-symbols-outlined {
  vertical-align: middle;
}

.nav-link-end {
  text-decoration: none;
}

@media (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
  }
}

#header3 {
  padding-left: 10%;
  text-align: left;
  line-height: 0.8;
  margin-bottom: 1%;
  margin-top: 5%;
  z-index: 3;
}

#header3 p {
  font-size: 18px;
  padding-right: 20%;
  line-height: 2;
  color: var(--grayishBlue);
}

#header2 {
  padding-left: 10%;
  text-align: left;
  line-height: 0.8;
  margin-bottom: 1%;
  margin-top: 5%;
  z-index: 3;
}

#header2 p {
  font-size: 18px;
  padding-right: 20%;
  line-height: 2;
  color: var(--grayishBlue);
}

#header1 {
  font-family: sans-serif;
  font-size: 18px;
  padding-left: 10%;
  text-align: left;
  line-height: 0.8;
  margin-top: 5%;
}

#header1 p {
  font-size: 18px;
  padding-right: 20%;
  line-height: 2;
  color: var(--grayishBlue);
}


.box p {
  font-family: sans-serif;
  font-size: 18px;
  color: var(--grayishBlue);
  text-decoration-color: #1c1b1b;
}

.box {
  background-color: #c8dce0;
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px var(--varyDarkBlue);
  padding: 30px;
  margin: 20px;
}

.box .ikona {
  float: right;
  max-width: 25%;
  max-height: 100%;
}

@media (max-width: 450px) {
  .box {
    height: 200px;
  }
}

@media (max-width: 950px) and (min-width: 450px) {
  .box {
    text-align: center;
    height: 180px;
  }
}

.cyan {
  border-top: 3px solid var(--cyan);
}

.red {
  border-top: 3px solid var(--red);
}

.blue {
  border-top: 3px solid var(--blue);
}

.orange {
  border-top: 3px solid var(--orange);
}

h2 {
  color: var(--varyDarkBlue);
  font-weight: var(--weight3);
}

@media (min-width: 950px) {
  .row1-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .row2-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box-down {
    position: relative;
    top: 150px;
  }

  .box {
    width: 20%;

  }

  #header p {
    width: 30%;
  }

}
</style>