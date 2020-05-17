<template>
  <div>
    <body>
      <div class="row">
        <div class="container col-md-4"></div>
        <div class="container col-md-4"></div>
        <div class="container col-md-4"></div>
      </div>
      <h1>Comparing {{ this.company1 }} and {{ this.company2 }}<br /></h1>

      <vue-grid align="stretch" justify="between">
        <vue-cell
          v-for="service in services"
          v-bind:key="service.company"
          width="4of12"
        >
          <ScannerItem
            :service="service"
            :order="orderCallback"
            :addCompare="addToComparison"
            :browsing="browsing"
            :comparedItems="services"
          />
        </vue-cell>
      </vue-grid>
    </body>
  </div>
</template>

<script>
import ScannerItem from "../components/ScannerItem.vue";
export default {
  props: ["services", "orderCallback", "browsing"],
  components: {
    ScannerItem,
  },
  data: function() {
    return {
      company1: "",
      company2: "",
    };
  },
  created() {
      this.company1 = this.services[0].company;
      this.company2 = this.services[1].company;
  }
};
</script>
