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
        <h4 :class="$style.green" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed residamus, inquit, si placet. 
        </h4>

        <div class="mt-5">
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed residamus, inquit, si placet. </div>
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
          <div class="col-md-6">
            <h2>XXX</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed residamus, inquit, si placet. Quod quidem nobis non saepe contingit. Cyrenaici quidem non recusant; Si quae forte-possumus. Esse enim quam vellet iniquus iustus poterat inpune. Duo Reges: constructio interrete.</p>
          </div>
          <div class="col-md-6">
            <h2>XXX</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed residamus, inquit, si placet. Quod quidem nobis non saepe contingit. Cyrenaici quidem non recusant; Si quae forte-possumus. Esse enim quam vellet iniquus iustus poterat inpune. Duo Reges: constructio interrete.</p>
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