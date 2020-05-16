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
                <v-col cols="12" sm="3">

                <!-- Modal for more details about the company and its services -->
                <div>
                <v-btn icon @click="modalShow = !modalShow">
                    <v-icon>info</v-icon>
                </v-btn>

                <b-modal v-model="modalShow" :title="service.company">
                    <h6>{{service.desc}}</h6>
                    <body>
                        Category: {{service.category}} <br/>
                        Expertise Areas: <br />
                        <ul>
                            <li v-for="area in service.expertise" :key="area">
                                {{ area }}
                            </li>
                        </ul>
                    </body>
                </b-modal>
                </div>

                </v-col>
                <h3>{{ service.company }}</h3>
                <div>
                  <h6>{{ service.desc }}</h6>
                  <body>
                    Category: {{ service.category }} <br />
                    <!-- Contracted: {{ service.contracted_count }}<br />
                    Price: ${{ service.price }} <br />
                    Rating: {{ calculateAverage }}/5 <br /> -->
                    <v-btn @click="order(service)" color="#66b933" style="text">
                    Consult
                    </v-btn>

                    <div v-if="isCompared">
                      <v-btn
                        v-show="browsing"
                        @click="removeCompare(service)"
                        color="#66b933"
                        style="text"
                      >
                        Remove from Comparison
                      </v-btn>
                    </div>
                    <div v-else>
                      <v-btn
                        v-show="browsing"
                        @click="addCompare(service)"
                        color="#66b933"
                        style="text"
                      >
                        Add To Comparison
                      </v-btn>
                    </div>

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
import VueSimpleAlert from "vue-simple-alert";

export default {
  components: {
    StarRating,
    VueSimpleAlert,
  },
  props: [
    "order",
    "service",
    "addCompare",
    "browsing",
    "comparedItems",
    "removeCompare",
  ],

  data() {
    return {
        modalShow: false,
      data: {
        hover: false,
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
  methods: {
    showInfo() {
      this.$fire({title: this.service.company, text: this.service.company, text:this.service.company});
    },
  },
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
      return this.service.total_rating_count == 0
        ? 0
        : (this.service.total_rating / this.service.total_rating_count).toFixed(
            2
          );
    },
    isCompared() {
      // check whether in compared
    //   console.log("checking comparison");
    //   console.log(this.comparedItems);
    //   console.log(this.comparedItems.includes(this.service));
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
