<template>
<v-container fluid grid-list-lg style="margin:0px, padding:0px">
  <v-layout row wrap>
    <v-flex md>
      <v-hover>
        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="profile">
          <div class="top-card" style="height:6.5em">
            <v-avatar size="100" class="avatar">
              <img src="https://ptetutorials.com/images/user-profile.png" class="image" />
            </v-avatar>
          </div>

          <v-card-title primary-title>
            <div>
              <h3>{{ name }}</h3>
              <div>
                <h6>Year {{year}} {{ course }}</h6>
                <body>
                  Hourly Rate: $ {{ rate }}/hr
                  <br />
                  Number of Students: {{ nstudents }}
                  <br />Rating:
                  <br />
                  <star-rating
                    read-only
                    v-model="rating"
                    :show-rating="false"
                    rounded-corners
                    :star-size="30"
                    inline
                  ></star-rating>
                  <br />
                  <br />
                </body>
                <!-- <div class="review">click here to see reviews written by {{name}}'s past tutees</div> -->
              </div>
            </div>
          </v-card-title>

          <v-card-actions></v-card-actions>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import StarRating from "vue-star-rating";
import firebase from "firebase";

export default {
  components: {
    StarRating
  },

  data() {
    return {
      name: null,
      year: "",
      course: null,
      rate: "-",
      nstudents: "-",
      rating: 0,
      image: ""
    };
  },
  methods: {
    fetchUser() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          var db = firebase.firestore();
          var docRef = db.collection("users").doc(user.uid);
          docRef
            .get()
            .then(doc => {
              if (doc && doc.exists) {
                const myData = doc.data();
                this.course = myData.course;
                this.name = myData.username;
                this.year = myData.year;
                this.image = myData.image;
                if (myData.tutor) {
                  this.rate = myData.rate;
                  this.rating = myData.rating;
                  docRef
                    .collection("students")
                    .get()
                    .then(snap => {
                      this.nstudents = snap.size;
                    });
                  docRef.update({
                    numstudent: this.nstudents
                  });
                }
              }
            })
            .catch(error => {
              console.log("Got an error: ", error);
            });
        } else {
          console.log("not signed in");
        }
      });
    }
  },
  computed: {
    profileImg() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          var db = firebase.firestore();
          var docRef = db.collection("users").doc(user.uid);
          docRef
            .get()
            .then(doc => {
              if (doc && doc.exists) {
                this.image = doc.data().image;
                console.log("file", this.image);
                return require(`../assets/${this.image}`);
              }
            })
            .catch(error => {
              console.log("Got an error: ", error);
            });
        } else {
          console.log("not signed in");
        }
      });
    }
  },
  created() {
    this.fetchUser();
  }
};
</script>

<style scoped>
h2 {
  color: #f1ba79;
  font-weight: bold;
}
h3 {
  margin-top: 2.5rem;
}
.avatar {
  margin: -3.5rem;
}
.top-card {
  background-color: #f1ba79;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.review {
  text-decoration: underline;
  font-size: 0.8em;
  padding: 1em 0;
  color: gray;
  white-space: normal;
}
.image {
  width: 100%;
  height: 100%;
}
</style>
