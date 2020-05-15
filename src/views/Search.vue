<template>
  <div id="show-blogs">
    <h1 class="modsearch">
      <center>Module Search</center>
    </h1>
    <br />
    <div class="searchbox">
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
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init.js";
export default {
  data() {
    return {
      search: "",
      testlist: []
    };
  },
  methods: {},
  created() {
    db.collection("modules")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            code: doc.data().code,
            name: doc.data().name,
            tutors: doc.data().tutors,
            modules: doc.data().modules
          };
          console.log("Write succeeded!");
          console.log(data);
          this.testlist.push(data);
        });
      });
  },
  computed: {
    filteredBlogs: function() {
      return this.testlist.filter(everymod => {
        return everymod.code.toUpperCase().match(this.search.toUpperCase());
      });
    },
    created() {
      db.collection("modules")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              code: doc.data().code,
              name: doc.data().name,
              tutors: doc.data().tutors,
              modules: doc.data().modules
            };
            this.testlist.push(data);
          });
        });
    },
    computed: {
      filteredBlogs: function() {
        return this.testlist.filter(everymod => {
          return everymod.code.toUpperCase().match(this.search.toUpperCase());
        });
      }
    }
  }
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
