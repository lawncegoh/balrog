<template>
  <div id="show-blogs">
    <h1 class="title1">
      <center>RazeScanner</center>
    </h1>

    <div class="text-center flex-end">
      <div v-if="this.comparing">
        <v-btn @click="browse"  color="#66b933" style="text">
          Browse
        </v-btn>
        <v-btn @click="compare" disabled color="#66b933" style="text">
          Compare
        </v-btn>
      </div>
      <div v-if="this.browsing">
        <div v-if="this.compared.length > 1">
        <v-btn @click="browse" disabled color="#66b933" style="text">
          Browse
        </v-btn>
        <v-btn @click="compare"  color="#66b933" style="text">
          Compare
        </v-btn>
        </div>
        <div v-else>
                  <v-btn @click="browse" disabled color="#66b933" style="text">
          Browse
        </v-btn>
        <v-btn @click="compare" disabled color="#66b933" style="text">
          Compare
        </v-btn>
          </div>
      </div>
    </div>

    <br />

    <div v-if="browsing" class="container">
      <!-- <div class="col-md-10 ml-auto mr-auto">
        <ScannerItem v-bind:order="orderCallback" />
      </div> -->
      <vue-grid align="stretch" justify="between">
        <vue-cell
          v-for="service in services"
          v-bind:key="service.company"
          width="4of12"
        >
          <!-- <router-link v-bind:to="'/services/' + service.company"> -->
          <ScannerItem
            :service="service"
            :order="orderCallback"
            :addCompare="addToComparison"
            :browsing="browsing"
            :comparedItems="compared"
            :removeCompare="removeFromComparison"
          />
          <!-- </router-link> -->
        </vue-cell>
      </vue-grid>
    </div>

    <div v-if="ordering" class="container">
      <div class="col-md-10 ml-auto mr-auto">
        <OrderItem v-bind:service="ordered" />
      </div>
    </div>

    <div v-if="comparing" class="container">
      <div class="col-md-10 ml-auto mr-auto">
        <CompareItem
          :services="compared"
          :orderCallback="orderCallback"
          :browsing="browsing"
        />
      </div>
    </div>
    <!-- <div class="searchbox">
      <center>
        <input type="text" v-model="search" placeholder="search module codes" class="show-blogs" />
      </center>
    </div>

    <div v-for="mods in filteredBlogs" class="single-blog">
      <h1>{{ mods.code.toUpperCase() }}: {{ mods.name.toUpperCase() }}</h1>
      <h3>Tutors:</h3>

      <div v-for="tut in mods.tutors" class="tutor-col">
        <router-link v-bind:to="'/tutors/' + tut">
          <h4>{{ tut }}</h4>
        </router-link>
      </div>
    </div> -->
  </div>
</template>

<script>
import db from "@/firebase/init.js";
import ScannerItem from "../components/ScannerItem.vue";
import { VueGrid, VueCell } from "vue-grd";
import OrderItem from "../components/Order.vue";
import CompareItem from "../components/Compare.vue";
export default {
  data() {
    return {
      services: [],
      browsing: true,
      ordering: false,
      comparing: false,
      ordered: null,
      compared: [],
    };
  },
  components: {
    ScannerItem,
    VueGrid,
    VueCell,
    OrderItem,
    CompareItem,
  },
  methods: {
    orderCallback(data) {
      this.browsing = false;
      this.ordering = true;
      this.comparing = false;
      this.ordered = data;
      console.log(data);
    },
    addToComparison(data) {
      if (this.compared.length < 3) {
      console.log("pushing data into comparison");
      this.compared.push(data);
      console.log(this.compared);
      } else {
        alert('You can compare at most 3 companies!');
      }
    },
    removeFromComparison(data) {
      console.log("removing data from comparison");
      const index = this.compared.indexOf(data);
      if (index > -1) {
        this.compared.splice(index, 1);
      }
      console.log(this.compared);
    },
    compare() {
      this.browsing = false;
      this.ordering = false;
      this.comparing = true;
    },
    browse() {
      this.browsing = true;
      this.ordering = false;
      this.comparing = false;
    },
  },
  created() {
    db.collection("services")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            category: doc.data().category,
            company: doc.data().company,
            desc: doc.data().description,
            expertise: doc.data().expertise,
            standards: doc.data().standards,
            training: doc.data().training,
            customers: doc.data().customers,
            cost_savings: doc.data().cost_savings,
            cloud_tech: doc.data().cloud_tech,
            costs: doc.data().costs,
          };
          console.log("Write succeeded!");
          console.log(data);
          this.services.push(data);
        });
      });
  },
};
</script>

<style>
h1 {
  color: "#FFFFFF";
}
#show-blogs {
  max-width: 80%;
  margin: 0px auto;
}
.single-blog {
  padding: 15px;
  margin: 25px 0;
  box-sizing: border-box;
  background: #eee;
}

.searchbox {
  left: 50%;
  top: 7.5%;
  transform: translate(-50%, -50%);
  background: #66B933;
  height: 5%;
  border-radius: 60px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  width: 40%;
  margin: 0% 50%;
}

.title1 {
  padding-top: 20px;
  padding-bottom: 20px;
  color: #66b933;
  font-weight: bold;
}
</style>
