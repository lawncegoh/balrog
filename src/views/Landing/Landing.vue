<template>
  <div>
    <b-navbar toggleable="lg" type="light" :class="[$style['alternate-bg'], $style['navbar-bg']]">
      <div class="container">
        <b-navbar-brand to="/">
          <img src="./National_University_of_Singapore_logo_NUS.png" width="173" height="80" class="d-inline-block align-top" alt="">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/about">Contact Us</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>

    <div :class="[$style['alternate-bg'], $style['header-bg']]" class="py-5 text-center">
      <div class="container">
        <!-- <logo /> -->
        <h1 :class="$style.orange"><strong>
          NUSTutors
        </strong></h1>
        <h4 :class="$style.orange" >
          Simple and easy way to connect NUS students
        </h4>

        <div class="mt-5">
          <div>Join our early access program.</div>
          <form>
            <div class="form-row justify-content-md-center">
              <div class="col-md-auto mb-3">
                <v-btn to='/login'>Login</v-btn>
              </div>
              <div class="col-md-auto mb-3">
                <v-btn to='/register'>Register</v-btn>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="py-5">
      <div class="container">
        <b-carousel
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
        >
          <b-carousel-slide img-src="https://news.nus.edu.sg/sites/default/files/resources/highlights/2018/2018-03/computing_places/computing_places-1.jpg">
            <h1>Made by Students for Students</h1>
          </b-carousel-slide>

          <b-carousel-slide img-src="https://media.licdn.com/dms/image/C511BAQHGk_xlTp01jA/company-background_10000/0?e=2159024400&v=beta&t=1rksnfyAVTyiCM9pDky0iwXqI4JXejA6e8bybSylLAY">
            <h1>Made by Students for Students</h1>
          </b-carousel-slide>

          <b-carousel-slide img-src="https://www.comp.nus.edu.sg/images/resources/20190225_School_Facade_About_Page.jpg">
            <h1>Made by Students for Students</h1>
          </b-carousel-slide>
          
        </b-carousel>
      </div>
    </div>
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h2>What is NUS FORUM?</h2>
            <p>A platform made by students, for students. We believe that students need to make informed descisions and connect with seniors about module selections and advice. NUS Forum is the platform to make that happen.</p>
          </div>
          <div class="col-md-6">
            <h2>Why do we use it?</h2>
            <p>As students ourselves, we faced problems seeking advice from seniors regarding modules selection and general help for the modules that we are currently taking. By opening up doors and connections to students across NUS, students that face similar problems like ourselves can be able to reach out and connect with the right people.</p>
          </div>
        </div>
      </div>
    </div>

   
    <v-footer padless>
      <v-col :class="$style.blue"
        class="text-center"
        cols="12"
      >
        <strong>Made With Love By 3G3B</strong>
      </v-col>
    </v-footer>

  </div>
</template>

<script>
 export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
    }),
  }
</script>

<style module>
.alternate-bg {
  background-color: #003D7C;
  border-bottom: solid 1px #003D7C;
  border-top: solid 1px #003D7C;
}

.navbar-bg {
  border-top: 0;
  border-bottom: 0;
  background-color: white;
}

.header-bg {
  border-top: 0;
  color: white;
}

.txt {
  color: white;
}

.blue {
  color: white;
  background-color: #003D7C;
  width:100%;
  height: 100%;
  padding: 0.5%
}

.orange{
  color:#EF7C00
}

</style>