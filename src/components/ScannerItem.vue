<template>
  <v-container fluid grid-list-lg style="margin:0px, padding:0px">
    <v-layout row wrap>
      <v-flex md>
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="profile"
          >
            <div v-if="isCompared" class="top-card1" style="height:6.5em">
              <v-avatar size="120" class="avatar">
                <img src="razerlogo.jpg" class="image" />
              </v-avatar>
            </div>

            <div v-else class="top-card" style="height:6.5em">
              <v-avatar size="120" class="avatar">
                <img src="razerlogo.jpg" class="image" />
              </v-avatar>
            </div>

            <v-card-title primary-title>
              <div>
                <h3>{{ service.company }}</h3>
                <div>
                  <h6>{{ service.desc }}</h6>
                  <body>
                    Category: {{ service.category }} <br />
                    Contracted: {{ service.contracted_count }}<br />
                    Price: ${{ service.price }} <br />
                    Rating: {{ calculateAverage }}/5 <br />
                    <v-btn @click="order(service)" color="#66b933" style="text">
                      Order
                    </v-btn>
                    <v-btn v-show="browsing" @click="addCompare(service)" color="#66b933" style="text">
                      Add To Comparison
                    </v-btn>
                  </body>
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
    StarRating,
  },
  props: ["order", "service", "addCompare", "browsing", "comparedItems"],

  data() {
    return {
      data: {
        category: "",
        company: "",
        contracted_count: 0,
        description: "",
        price: 0,
        total_rating_count: 0,
        total_rating: 0,
        average_rating: 0,
      },
    };
  },
  // methods: {
  //   fetchUser() {
  //     firebase.auth().onAuthStateChanged(user => {
  //       if (user) {
  //         // User is signed in.
  //         var db = firebase.firestore();
  //         var docRef = db.collection("services");
  //         docRef
  //           .get()
  //           .then(doc => {
  //             if (doc && doc.exists) {
  //               const myData = doc.data();
  //               this.data.category = myData.category;
  //               this.data.company = myData.company;
  //               this.data.contracted_count = myData.contracted_count;
  //               this.data.description = myData.description;
  //               this.data.price = myData.price;
  //               this.data.total_rating_counts = myData.total_ratings_counts;
  //               this.data.total_ratings = myData.total_ratings;

  //               if (total_rating_counts == 0) {
  //                   this.average_ratings = 0;
  //               } else {
  //                   this.average_ratings = this.total_ratings / this.total_rating_counts;
  //               }
  //             }
  //           })
  //           .catch(error => {
  //             console.log("Got an error: ", error);
  //           });
  //       } else {
  //         console.log("not signed in");
  //       }
  //     });
  //   }
  // },
  computed: {
    calculateAverage() {
      return this.service.total_rating_count == 0 ? 0 : (this.service.total_rating / this.service.total_rating_count).toFixed(2);
    },
    isCompared() {
      // check whether in compared
      if (this.comparedItems.includes(this.service)) {
        return true;
      } else {
        return false;
      }
    },
    profileImg() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          var db = firebase.firestore();
          var docRef = db.collection("users").doc(user.uid);
          docRef
            .get()
            .then((doc) => {
              if (doc && doc.exists) {
                this.image = doc.data().image;
                console.log("file", this.image);
                return require(`../assets/${this.image}`);
              }
            })
            .catch((error) => {
              console.log("Got an error: ", error);
            });
        } else {
          console.log("not signed in");
        }
      });
    },
  },
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
  background-color: #66b933;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.top-card1 {
  background-color: red;
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
