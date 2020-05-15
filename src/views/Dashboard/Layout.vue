<template>
  <div id="app">
      <v-container>
          <v-flex>
              <v-hover>
      <v-card>
    <h1>Number of tutors by Rate Charged</h1>
    <LineChart :styles="styles"/>
      </v-card>
      </v-hover>
          </v-flex>

      <br></br>
            <v-card>

    <h1>Number of Tutors by Modules</h1>
    <PieChart :styles="styles"/>
          </v-card>
                <br></br>

      <v-card>

    <h1>Number of Students per Tutor</h1>
    <BarChart :styles="styles"/>
          </v-card>
</v-container>
  </div>
</template>

<script>
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

export default {
  name: "Dashboard",
  components: {
    LineChart,
    PieChart,
    BarChart
  },
  data() {
    return {
      styles: {
        height: `${this.height}px`,
        position: 'relative'
      }
    };
  },
//   async created() {
//     let resp = await fetch(
//       "https://api.jsonbin.io/b/5e2b4f673d75894195de48ff/1"
//     );
//     let data = await resp.json();
//     this.pageViews = data.pageViews;
//     this.pageViewsByCategory = data.pageViewsByCategory;
//     this.visitors = data.newVsReturning;
//     this.loaded = true;
//   }
};

</script>