<template>
<v-container fluid grid-list-lg style="margin:0px, padding:0px">
  <v-layout row wrap>
    <v-flex md>
      <v-hover>
        <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="profile">
          <div class="top-card" style="height:6.5em">
            <v-avatar size="120" class="avatar">
              <img src="razerlogo.jpg" class="image" />
            </v-avatar>
          </div>

          <v-card-title primary-title>
            <div>
              <h3>{{ data.company }}</h3>
              <div>
                <h6>{{ data.description }}</h6>
                <body>
                Category: {{ data.category }} <br />
                Contracted: {{ data.contracted_count }}<br />
                Rating: {{ data.average_ratings }} <br />
                <v-btn @click="order(data)" color="#66b933" style="text"> Order </v-btn>
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
    StarRating
  },
  props: ["order"],

  data() {
    return {
        data: {
            category: "",
            company: "",
            contracted_count: 0,
            description: "",
            price: 0, 
            total_rating_count: 0,
            total_ratings: 0,
            average_ratings: 0
        }
    };
  },
  methods: {
    fetchUser() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.
          var db = firebase.firestore();
          var docRef = db.collection("services").doc("AihpygOEGsUQs2W79WRl");
          docRef
            .get()
            .then(doc => {
              if (doc && doc.exists) {
                const myData = doc.data();
                this.data.category = myData.category;
                this.data.company = myData.company;
                this.data.contracted_count = myData.contracted_count;
                this.data.description = myData.description;
                this.data.price = myData.price;
                this.data.total_rating_count = myData.total_rating_count;
                this.data.total_ratings = myData.total_ratings;

                if (this.data.total_rating_count == 0) {
                    this.data.average_ratings = 0;
                } else {
                    this.data.average_ratings = this.data.total_ratings / this.data.total_rating_count;
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
  background-color: #66B933;
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
