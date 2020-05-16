<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      :class="[$style['alternate-bg'], $style['navbar-bg']]"
    >
      <div class="container">
        <b-navbar-brand to="/">
          <img
            src="pseudo_razer.jpg"
            width="20%"
            height="20%"
            class="d-inline-block align-top text-center"
            alt=""
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav> </b-collapse>
      </div>
    </b-navbar>

    <div
      :class="[$style['alternate-bg'], $style['header-bg']]"
      class="py-5 text-center"
    >
      <div class="container">
        <!-- <logo /> -->
        <h1 :class="$style.green" @click="routeHome()">
          <strong>
            Acceleraze
          </strong>
        </h1>

        <div><p>Digitalising Your Company One Step at a Time</p></div>
        <h4 :class="$style.green"></h4>

        <div class="mt-5">
          <section>
            <form>
              <div
                v-if="!user.loggedIn"
                class="form-row justify-content-md-center"
              >
                <div class="col-md-auto mb-3">
                  <v-btn to="/login">Login</v-btn>
                </div>
                <div class="col-md-auto mb-3">
                  <v-btn to="/register">Register</v-btn>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h3><b>Step 1</b></h3>
            <p>
              Start from our RazeAwareness page to understand the various
              technologies that are needed for your company to grow. They are
              grouped into categories like
              <i>Why do you need to digitalise?</i>,
              <i>Operational Technologies Streamlining</i> and
              <i>Cloud Databases</i>.
            </p>
          </div>
          <div class="col-md-4">
            <h3><b>Step 2</b></h3>
            <p>
              Compare all the technologies that your previously read about in
              the RazeScanner page. Like a shopping cart, add the technologies
              that you are most interested in. Then, do a simple comparison
              based on industry metrics that we have compiled.
            </p>
          </div>
          <div class="col-md-4">
            <h3><b>Step 3</b></h3>
            <p>
              Taken aback by the exorbitant fee at the end of your previous
              page? Fret Not. In this step, you can easily find your sources of
              funding. In priority, you can check for any government funds that
              you are eligible for. Second, you can check for loans that you can
              take from the various banks. Lastly, you can attain funds through
              angel investors.
            </p>
          </div>
        </div>
      </div>
    </div>

    <v-footer padless>
      <v-col :class="$style.blue" class="text-center" cols="12">
        <strong>By Beef Wellington</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from 'firebase';
export default {
  data: () => ({
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram",
    ],
  }),
  methods: {
    routeHome() {
      this.$router.push({ name: "dashboard" });
    },
  },
  computed: {
    ...mapGetters({
      user: "user",
    }),
    checkLogin() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          return false;
        } else {
          return true;
        }
      });
    },
  },
};
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
  color: #66b933;
  background-color: black;
  width: 100%;
  height: 100%;
  padding: 0.5%;
}

.green {
  color: #66b933;
}
</style>
