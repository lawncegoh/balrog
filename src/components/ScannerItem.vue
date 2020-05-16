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

          <!-- company logo -->
            <div v-if="isCompared" class="top-card1" style="height:6.5em">
              <v-avatar size="120" class="avatar">
                  <!-- placeholder image -->
                <img src="razerlogo.jpg" class="image" /> 
              </v-avatar>
            </div>

            <div v-else class="top-card" style="height:6.5em">
              <v-avatar size="120" class="avatar">
                  <!-- placeholder image -->
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

                <b-modal v-model="modalShow" :title="service.company" hide-footer>
                    <h6>{{service.desc}}</h6>
                    <body>
                        <br/>
                        Category: {{service.category}} <br/><br/>
                        Estimated Costs (varies): From SGD${{service.costs}} onwards<br/><br/>
                        Expertise Areas: <br />
                        <ul>
                            <li v-for="area in service.expertise" :key="area">
                                {{ area }}
                            </li>
                        </ul>
                        Company Standards: <br />
                        <ul>
                            <li v-for="standard in service.standards" :key="standard">
                                {{ standard }}
                            </li>
                        </ul>
                        Training Standards and Certifications: <br />
                        <ul>
                            <li v-for="training in service.training" :key="training">
                                {{ training }}
                            </li>
                        </ul>
                        Notable Customers: <br />
                        <ul>
                            <li v-for="customer in service.customers" :key="customer">
                                {{ customer }}
                            </li>
                        </ul>
                        Estimated Cost Savings: {{ service.cost_savings }} <br /><br/>
                        Cloud Technology Usage: <br />
                        
                        <ul>
                            <li v-for="tech in service.cloud_tech" :key="tech">
                                {{ tech }}
                            </li>
                        </ul>
                        <div class="text-center">
                            <v-btn @click="modalShow = !modalShow" color="#66b933">OK</v-btn>
                        </div>
                    </body>
                </b-modal>
                </div>

                <!-- company brief information -->
                </v-col>
                <h3>{{ service.company }}</h3>
                <div>
                  <h6>{{ service.desc }}</h6>
                  <body>
                    Category: {{ service.category }} <br />
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
import firebase from "firebase";

export default {
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
    };
  },
  computed: {
    isCompared() {
      // check whether in compared
      if (this.comparedItems.includes(this.service)) {
        return true;
      } else {
        return false;
      }
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
