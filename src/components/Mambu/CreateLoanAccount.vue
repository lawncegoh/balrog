<template>
  <div>
    <b-modal v-model="modalShow" hide-footer hide-header>
      <body>
        <h2 class="text-center">Let's move on to your loan account now!</h2>
        <br />
        <h5 class="text-center">
          Same Deal - Same Drill. Just click the button :)
        </h5>
        <br />
        <br />
        <div class="text-center">
        <router-link v-bind:to="'/'">
          <b-btn
            pill
            variant="success"
            class="next"
            text-align="right"
            >Back to Home Page</b-btn
          >
        </router-link>
          <br />
          <br />
        <router-link v-bind:to="'/'">
          <b-btn
            pill
            variant="success"
            class="next"
            text-align="right"
            @click="createLA"
            >Create Loan Account Now</b-btn
          >
        </router-link>
        </div>
      </body>
    </b-modal>

    <!-- <div class="component-container">
    <h2 class="text-center">Awesome, lets create your current account now!</h2>
    <br />
    <h4 class="text-center">Create your Current Account with a click of a button</h4>
    <br />
    <br />
    <b-btn
      pill
      variant="outline-primary"
      class="next"
      text-align="right"
      href="/landing"
    >Back to Home Page</b-btn>

    <b-btn
      pill
      variant="outline-primary"
      class="next"
      text-align="right"
      @click="next"
    >Create Current Account Now</b-btn>
  </div> -->
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import firebase from "firebase";
import db from "@/firebase/init.js";
import VueSimpleAlert from "vue-simple-alert";

const baseURL = "https://o6702mtpsf.execute-api.ap-southeast-1.amazonaws.com/dev";

export default {
  components: {
    StarRating,
    VueSimpleAlert,
  },
  data() {
    return {
      modalShow: true,
      userUid: "",
      key: "",
      branchKey: "",
    };
  },
  created() {
    this.getBothKeys();
  },
  methods: {
    createLA: async function() {
      try {
        var body = {
          accountHolderKey: this.key,
          assignedBranchKey: this.branchKey,
        };
        console.log(body);
        var results = await axios.post(baseURL + "/createLoans", body);
        // console.log(results.data.the"Group.encodedKey)
        console.log("Success");
        alert("You have successfully applied for a loan!");
      } catch (e) {
        console.error(e);
      }
    },
    getBothKeys() {
      db.collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            this.key = doc.data().groupid;
            this.branchKey = doc.data().branchkey;
            console.log(this.key);
            console.log(this.branchKey);
          } else {
            console.log("No such document");
          }
        });
    },
  },
};
</script>

<style scoped>
.pop-up {
  margin: 300px auto;
  width: 65%;
  padding: 20px;
  background: rgb(58, 58, 218);
  border-radius: 14px;
  border: 3px solid #ebebeb;
  min-width: 300px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  flex: 1 0 48%;
}
</style>
