<!--
    Contact Page
-->
<head>

</head>

<template>
  <main id="contact">
    <section class="co-section">
      <div class="co-container">
        <div class="header-center">
          <h2> Join VenTour!</h2>
        </div>
      </div>
    </section>
    <div class="button-container-co" style="position: relative; top: 0; z-index: 1;">
      <button class="section-button-co" :class="{ active: activeSection === 1 }" @click="activeSection = 1">
        <br>
        New Company
      </button>
      <button class="section-button-co" :class="{ active: activeSection === 2 }" @click="activeSection = 2">
        <br>
        Open Positions
      </button>
    </div>
    <div class="description-container-co" v-if="activeSection === 1">
      <h1>Do you have a company in the field of: </h1>
      <div class="job-boards-company-grid">
        <router-link to="/companies/Areas/healthcare">
          <div class="job-boards-company-item">
            <img class="job-boards-company-logo" alt="Personio logo"
              src="https://img.freepik.com/free-vector/doctors-concept-illustration_114360-1515.jpg?w=826&t=st=1684688733~exp=1684689333~hmac=e2274bf2ff9039e3bec16c71647d0e149af066fb21aa3e84011cea30dcc2d821"
              width="240" height="160">

            <h2 class="job-boards-company-name">
              Healthcare
            </h2>
            <div class="job-boards-company-link">
            </div>
          </div>
        </router-link>
        <router-link to="/companies/Areas/technology">
          <div class="job-boards-company-item">
            <img class="job-boards-company-logo" alt="Personio logo"
              src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=826&t=st=1684688628~exp=1684689228~hmac=9ee5d32fec913dab6323d9796c550d1106c27e8f15aa3744659eb846175cb796"
              width="240" height="160">

            <h2 class="job-boards-company-name">
              Technology
            </h2>
            <div class="job-boards-company-link">
            </div>
          </div>
        </router-link>
      </div>
      <div class="job-boards-company-grid">
        <router-link to="/companies/Areas/consumer">
          <div class="job-boards-company-item">
            <img class="job-boards-company-logo" alt="Personio logo"
              src="https://img.freepik.com/free-vector/grocery-shopping-concept-illustration_114360-8991.jpg?w=826&t=st=1684688644~exp=1684689244~hmac=872efd172603cca9271028aef17524056d90ff660a4d461401126314c605b3e7"
              width="240" height="160">
            <h2 class="job-boards-company-name">
              Consumer goods
            </h2>
            <div class="job-boards-company-link">
            </div>
          </div>
        </router-link>
        <router-link to="/companies/Areas/sustainability">
          <div class="job-boards-company-item">
            <img class="job-boards-company-logo" alt="Personio logo"
              src="https://img.freepik.com/free-vector/palm-tree-concept-illustration_114360-9480.jpg?w=826&t=st=1684688781~exp=1684689381~hmac=da1284ec9192e47ae74a52c8dd503363c02b544475ec133edd23169b8e37e795"
              width="240" height="160">

            <h2 class="job-boards-company-name">
              Sustainability
            </h2>
            <div class="job-boards-company-link">
            </div>
          </div>
        </router-link>
      </div>
      <form>
        <div class="space">
          <h1>Join us</h1>
          <div class="contact-us">
            <label class="labeljoin" for="customerName">NAME<em>&#x2a;</em></label>
            <input id="customerName" v-model="customerName" required type="text" />
            <label class="labeljoin" for="customerEmail">EMAIL <em>&#x2a;</em></label>
            <input id="customerEmail" v-model="customerEmail" required type="email" />
            <label class="labeljoin" for="customerPhone">PHONE</label>
            <input id="customerPhone" v-model="customerPhone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" />
            <label class="labeljoin" for="country">COUNTRY<em>&#x2a;</em></label>
            <div class="mt-2">
              <select id="country" v-model="country" autocomplete="country-name" class="block" style="height: 36px;">
                <option>Albania</option>
                <option>China</option>
                <option>France</option>
                <option>Japan</option>
                <option>Italy</option>
                <option>Switzerland</option>
                <option>Spain</option>
                <option>Other</option>
              </select>
            </div>
            <label class="labeljoin" for="customerNote">ABOUT <em>&#x2a;</em><span
                class="spanNew">&nbsp;&nbsp;&nbsp;&nbsp;Write about your
                company
                (i.e. name and goal)</span></label>
            <textarea id="customerNote" v-model="customerNote" required rows="4"></textarea>
            <label for="file-upload" class="labeljoin">
              Company Profile or Business Proposal <em>&#x2a;</em><span class="spanNew">&nbsp;&nbsp;&nbsp;&nbsp;Upload
                file</span>
              <input id="file-upload" type="file" class="sr-only" ref="fileUpload" />
            </label>

            <button id="customerOrder" @click.prevent="submitForm" href="#" @click="sendEmail(1)">SUBMIT</button>
          </div>
        </div>
      </form>
    </div>
    <div class="description-container-co" v-else-if="activeSection === 2">
      <h1>Do you have knowledge in Frontend Technologies: </h1>
      <div class="job-boards-company-grid">
        <div class="job-boards-company-item">
          <img class="job-boards-company-logo" alt="Personio logo"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png">
          <a href="https://vuejs.org/" target="_blank">
            <h2 class="job-boards-company-name">
              Vue.js
            </h2>
          </a>
          <div class="job-boards-company-link">
          </div>
        </div>
        <div class="job-boards-company-item">
          <img class="job-boards-company-logo" alt="HTML logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png">
          <a href="https://www.w3schools.com/html/" target="_blank">
            <h2 class="job-boards-company-name">
              HTML
            </h2>
          </a>
          <div class="job-boards-company-link">
          </div>
        </div>
      </div>
      <div class="job-boards-company-grid">
        <div class="job-boards-company-item">
          <img class="job-boards-company-logo" alt="CSS logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png">
          <a href="https://www.w3schools.com/css/" target="_blank">
            <h2 class="job-boards-company-name">
              CSS
            </h2>
          </a>
          <div class="job-boards-company-link">
          </div>
        </div>
        <div class="job-boards-company-item">
          <img class="job-boards-company-logo" alt="Personio logo"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-shield-logo-icon-2.png">
          <a href="https://www.w3schools.com/js/default.asp" target="_blank">
            <h2 class="job-boards-company-name">
              JavaScript
            </h2>
          </a>
          <div class="job-boards-company-link">
          </div>
        </div>
      </div>
      <form>
        <div class="space">
          <h1>
            Join us
          </h1>
          <div class="contact-us">

            <label class="labeljoin" for="customerName">NAME<em>&#x2a;</em></label><input id="customerName"
              name="customerName" required="" type="text" v-model="customerName" />
            <label class="labeljoin" for="customerEmail">EMAIL <em>&#x2a;</em></label>
            <input id="customerEmail" v-model="customerEmail" name="customerEmail" required="" type="email" /><label
              for="customerPhone">PHONE</label><input id="customerPhone" name="customerPhone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" type="tel" /><label class="labeljoin"
              for="country">COUNTRY<em>&#x2a;</em></label>
            <div class="mt-2">
              <select id="country" name="country" autocomplete="country-name" class="block" style="height: 36px;">
                <option>Albania</option>
                <option>China</option>
                <option>France</option>
                <option>Japan</option>
                <option>Italy</option>
                <option>Switzerland</option>
                <option>Spain</option>
                <option>Other</option>
              </select>
            </div>
            <label class="labeljoin" for=" customerNote">ABOUT <em>&#x2a;</em><span
                class="spanNew">&nbsp;&nbsp;&nbsp;&nbsp;Write about you
                (goals,expectations)
              </span></label><textarea id="customerNote" name="customerNote" required="" rows="4"
              v-model="customerNote"></textarea>
            <label for="file-upload" class="labeljoin">
              CV <em>&#x2a;</em><span class="spanNew">&nbsp;&nbsp;&nbsp;&nbsp;Upload file</span>
              <input id="file-upload" type="file" class="sr-only" ref="fileUpload" />
            </label>
            <button id="customerOrder" @click.prevent="submitForm" href="#" @click="sendEmail(2)">SUBMIT</button>

          </div>
        </div>
      </form>
    </div>

  </main>
</template>
<script>
export default defineNuxtComponent({
  data() {
    return {
      activeSection: 1,
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      country: '',
      customerNote: '',
    };
  },
  methods: {
    submitForm() {
      let check
      if (this.customerName == '' || !this.customerEmail || !this.customerNote || !this.$refs.fileUpload.files) {
        check = false;
      }
      else {
        check = true;
      }
      if (check == false) {
        return
      }
      const email = {
        to: 'ventourteam@gmail.com',
        attachments: [
          {
            name: this.$refs.fileUpload.files[0].name,
            data: this.$refs.fileUpload.files[0],
          },
        ],
      };

      // Here, we are using a dummy function as an example
      this.sendEmail()
        .then(() => {
          // Email sent successfully
          alert('Look for your email provider and continue there! Unfortunately, you have to attach the file you have uploaded (' + this.$refs.fileUpload.files[0].name + ') again for privacy reasons');
          this.resetForm();
        })
        .catch((error) => {
          // Error occurred while sending email
          console.error('Error sending email:', error);
          alert('An error occurred while opening the email provider. Please try again.');
        });
    },
    sendEmail(activeSection) {
      let check
      if (this.customerName == '' || !this.customerEmail || !this.customerNote || !this.$refs.fileUpload.files) {
        check = false;
      }
      else {
        check = true;
      }
      if (check == false) {
        alert('Please fill in all mandatory fields.')
        return
      }
      const recipient = 'ventourteam@gmail.com';
      let subject;
      let body;
      console.log('I am a ' + activeSection, typeof activeSection);

      if (activeSection === 1) {
        subject = 'Request from ' + this.customerName;
        body = 'Good morning,\nI\'m ' + this.customerName + ' and I would like to send my request. \nTalking about my company, I would like to say a couple of words (for example that my company has its register office in ' + this.country + '\n' + this.customerNote + '\nCan you please contact me at this email: ' + this.customerEmail + '\n Thank you for your attention, \nBest Regards \n' + this.customerName;
      } else {
        subject = 'Application from ' + this.customerName;
        body = 'Good morning,\nI\'m ' + this.customerName + ' and I would like to apply for the job offer I found on your website. \nTalking about me, I would like to say a couple of words (for example that I was born in ' + this.country + 'and: \n' + this.customerNote + '\nCan you please contact me at this email: ' + this.customerEmail + '\n Thank you for your attention, \nBest Regards \n' + this.customerName;
      }

      const mailtoLink = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      window.location.href = mailtoLink;

      // This is just a dummy function that returns a promise resolved after 2 seconds
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Sending email:');
          resolve();
        }, 2000);
      });
    },

    resetForm() {
      this.customerName = '';
      this.customerEmail = '';
      this.customerPhone = '';
      this.country = '';
      this.customerNote = '';
      this.$refs.fileUpload.value = '';
    },

  },
})
</script>


<style>
.contact-us {
  background: rgb(212, 208, 208);
  padding: 70px 100px;
  border-top: 10px solid #2A293E;
  height: fit-content;
}

#customerPhone,
#customerName,
#customerEmail,
#file-upload {
  display: block;
  width: 100%;
  font-size: 12pt;
  line-height: 24pt;
  font-family: sans-serif;
}

select,
textarea {
  display: block;
  width: 100%;
  font-size: 12pt;
  line-height: 24pt;
  font-family: sans-serif;
}

.labeljoin {
  display: block;
  width: 100%;
  font-size: 12pt;
  line-height: 24pt;
  font-family: sans-serif;
}

textarea {
  margin-bottom: 3%;
}

.labeljoin {
  text-align: left;
}

select {
  margin-bottom: 24pt;

}

#customerPhone,
#customerName,
#customerEmail,
#file-upload {
  margin-bottom: 24pt;

}

.spanNew {
  font-size: 8pt;
}

em {
  color: #f45702;
  font-weight: bold;
}

#customerPhone,
#customerName,
#customerEmail,
#file-upload,
select,
textarea {
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background: #f1f1f1;
  padding-left: 5px;
  outline: none;
}

#customerPhone,
#customerName,
#customerEmail,
#file-upload {
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  background: #f1f1f1;
  padding-left: 5px;
  outline: none;
}

select:focus,
textarea:focus {
  border: 1px solid #6bd4b1;
}

#customerPhone:focus,
#customerName:focus,
#customerEmail:focus,
#file-upload:focus {
  border: 1px solid #6bd4b1;
}

textarea {
  resize: none;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #268fb2;
}

#customerOrder {
  cursor: pointer;
  display: block;
  float: right;
  line-height: 24pt;
  padding: 0px 20px;
  border: none;
  background-color: #2A293E;
  color: white;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  border-bottom: 2px solid transparent;
  outline: none;
}

#customerOrder:hover {
  background: inherit;
  color: var(--varyDarkBlue);
  border-bottom: 2px solid var(--varyDarkBlue);
}

::selection {
  background: #ffc7b8;
}

@media (max-width: 768px) {
  #customerOrder {
    float: none;
    margin-top: 150px;
    align-items: center;
  }
}

select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus,
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus {
  border: 1px solid #6bd4b1;
  -webkit-text-fill-color: #2A293E;
  -webkit-box-shadow: 0 0 0px 1000px #f8f4e5 inset;
  transition: background-color 5000s ease-in-out 0s;
}

.space {
  text-align: center;
}

#contact {
  background-image: url('assets/img/19449741.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

form {
  width: 80%;
  margin-bottom: 5%;
}

textarea {
  width: 99%;
  min-height: 5.1em;
  resize: vertical;
}

select {
  width: 60%;
}

#customerPhone,
#customerName,
#customerEmail,
#file-upload {
  width: 60%;
}

.mt-2 {
  width: 60%;
}

.labeljoin {
  font-size: 13pt;
  font-weight: bold;
}

#message-div {
  flex-direction: column;
}

@media screen and (max-width: 700px) {
  form div {
    flex-direction: column;
  }

  #customerPhone,
  #customerName,
  #customerEmail,
  #file-upload {
    width: 100%;
  }

  select {
    width: 100%;
  }

  form {
    width: 90%;
    min-width: 100%;
  }
}

.co-section {
  background-image: url('assets/img/joinus.jpg');
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 40%;
  padding-top: 10%;
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

@media screen and (max-width: 700px) {
  .co-container {
    max-width: 100%;
    /* Adjusted to full width */
    padding-right: 10px;
    padding-left: 10px;
  }

  .header-center {
    font-size: 32px;
    max-width: 100%;
    /* Adjusted font size for smaller screens */
    padding-right: 10px;
  }
}

.spanNew {
  font-size: 10px;
}


.section-button-co {
  padding-bottom: 2.5%;
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 20px;
  font-family: sans-serif;
  color: black;
  font-size: 20px;
}

.section-button-co.active {
  font-family: sans-serif;
  font-size: 20px;
  color: black;
  font-weight: bold;
  background-color: rgb(212, 208, 208);
  border-radius: 10%;
}

.button-container-co {
  margin-top: 5%;
  position: fixed;
  display: flex;
  justify-content: center;
  margin-bottom: 2%;
  font-family: sans-serif;
  color: black;
}

.description-container-co {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  text-align: justify;
  font-family: sans-serif;
  font-size: 18px;
  width: 90%;
}

/* Media Query for mobile devices */
@media screen and (max-width: 700px) {
  .description-container-co {
    font-size: 8px;
    /* Adjusted font size for smaller screens */
    margin-top: 5px;
    /* Adjusted margin top for smaller screens */
  }
}

.job-boards-company-grid {
  font-family: sans-serif;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  text-align: justify;
}

.job-boards-company-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  text-align: justify;
  text-decoration: none;
}

.job-boards-company-name {
  color: #2A293E;
  font-size: 18px;
  text-decoration: none;
}

.job-boards-company-logo {
  width: 150px;
  height: 140px;
}

@media (min-width: 720px) {
  .job-boards-company-item {
    margin-bottom: 0;
  }

  .job-boards-company-item {
    margin-bottom: 16px;
    padding: 24px 24px 32px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: var(--border-md);
  }
}
</style>