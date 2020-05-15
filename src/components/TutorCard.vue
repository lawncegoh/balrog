<template>
<v-row class="d-inline-block" color="transparent">
  <v-container style="width:50em, height:10em, padding:0px, margin:0px">
    <v-container fluid grid-list-lg style="margin:0px, padding:0px">
      <v-layout row wrap>
        <v-flex md>
          <v-hover>
            <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`" class="profile">
              <div class="top-card">
                <v-avatar size="80" class="avatar">
                  <img src="https://ptetutorials.com/images/user-profile.png" alt="dog" />
                </v-avatar>
              </div>

              <v-card-title primary-title>
                <div>
                  <h3>{{ tutor.username }}</h3>
                  <div>
                    <h6>Year {{tutor.year}} {{ tutor.course }}</h6>
                    <body>
                      Hourly Rate: $ {{ tutor.rate }}/hr
                      <br />
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
  </v-container>
</v-row>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating
  },
  props: ["tutor"]
};
</script>

<style>
h2 {
  color: #f1ba79;
  font-weight: bold;
}
h3 {
  margin-top: 2.5rem;
}
.avatar {
  margin: -3rem;
}
.top-card {
  height: 5.5rem;
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
</style>
