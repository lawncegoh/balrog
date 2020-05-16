<template>
  <div>
    <b-navbar toggleable="lg" type="light" :class="[$style['alternate-bg'], $style['navbar-bg']]">
      <div class="container">
        <b-navbar-brand to="/">
          <img src="./razer.png" width="150" height="150" class="d-inline-block align-top" alt="">
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
        <h1 :class="$style.green"><strong>
          FundRaze
        </strong></h1>
        <div><p>Digitalising Your Company One Step at a Time</p></div>
        <h4 :class="$style.green" >

        </h4>

        <div class="mt-5">
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
    <!-- <div class="py-5">
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
    </div> -->
    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h3><b>Step 1</b></h3>
            <p>
              Start from our RazeAwareness page to understand the various
              technologies that are needed for your company to grow.
            </p>
          </div>
          <div class="col-md-4">
            <h3><b>Step 2</b></h3>
            <p>
              Compare all the technologies that your previously read about
              in the RazeScanner page. Like a shopping cart, add the technologies
              that you are most interested into a single page and seek to make 
              payment for them asap.
            </p>
          </div>
          <div class="col-md-4">
            <h3><b>Step 3</b></h3>
            <p>
              Taken aback by the exorbitant fee at the end of your previous 
              page? Fret Not. In this step, you can easily find your sources 
              of funding. In priority, you can check for any government funds that 
              you are eligible for. Second, you can check for loans that you can take 
              from the various banks. Lastly, you can attain funds through angel investors.
            </p>
          </div>
        </div>
      </div>
    </div>

   
    <v-footer padless>
      <v-col :class="$style.blue"
        class="text-center"
        cols="12"
      >
        <strong>By Beef Wellington</strong>
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
  background-color: black;
  border-bottom: solid 1px black;
  border-top: solid 1px black;
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
  color: #66B933;
  background-color: black;
  width:100%;
  height: 100%;
  padding: 0.5%
}

.green{
  color:#66B933
}

</style>