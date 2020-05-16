<template>
  <div id="show-blogs">
    <h1 class="modsearch">
      <center>RazeScanner</center>
    </h1>
    <br />

    <div v-if="browsing" class="container">
      <div class="col-md-10 ml-auto mr-auto">
        <ScannerItem v-bind:order="orderCallback" />
      </div>
    </div>

    <div v-if="ordering" class="container">
      <div class="col-md-10 ml-auto mr-auto">
        <OrderItem v-bind:service="ordered" />
      </div>
    </div>

    <div v-if="comparing" class="container">
      <div class="col-md-10 ml-auto mr-auto">
        Comparing
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
import OrderItem from "../components/Order.vue";
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
    OrderItem
  },
  methods: {
    orderCallback(data) {
      this.browsing = false;
      this.ordering = true;
      this.ordered = data;
      console.log(data);
    }
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
            concount: doc.data().contracted_count,
            desc: doc.data().description,
            price: doc.data().price,
            totalrcount: doc.data().total_rating_count,
            totalr: doc.data().total_rating
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
  color: #19266e;
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
  background: #f1ba79;
  height: 5%;
  border-radius: 60px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  width: 40%;
  margin: 0% 50%;
}

.modsearch {
  padding-top: 20px;
  padding-bottom: 20px;
  color: #f1ba79;
  font-weight: bold;
}
</style>
