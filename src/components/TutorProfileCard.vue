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
              <h3>{{ tutor.name }}</h3>
              <div>
                <h6>Year {{tutor.year}} {{ tutor.course }}</h6>
                <body>
                  Hourly Rate: $ {{ tutor.rate }}/hr
                  <br />
                  Number of Students: {{ tutor.nstudents }}
                  <br />Rating:
                  <br />
                  <star-rating
                    read-only
                    v-model="tutor.rating"
                    :show-rating="false"
                    rounded-corners
                    :star-size="30"
                    inline
                  ></star-rating>
                  <br />
                  <br />
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
  props: ["tutor"],
  data() {
    dp: this.tutor.image;
  },
  created() {
    console.log(tutor.image);
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
