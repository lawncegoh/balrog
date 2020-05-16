<template>
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
</template>

<script>
import StarRating from "vue-star-rating";
import firebase from "firebase";
import VueSimpleAlert from "vue-simple-alert";

export default {
  components: {
    StarRating,
    VueSimpleAlert
  },
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.component-container {
      margin: 0 10px 20px 10px;
      padding: 20px;
      background: lightblue;
      border-radius: 4px;
      border: 1px solid #EBEBEB;
      min-width: 300px;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      flex: 1 0 48%;

    }
</style>