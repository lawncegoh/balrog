<template>
<div>
  <body>
    <div class="row">
      <div class="container col-md-4"></div>
      <div class="container col-md-4"></div>
      <div class="container col-md-4"></div>
    </div>
    <h2 class="text-center">
      Comparing {{ this.company1 }} and {{ this.company2 }}
      <br />
    </h2>

    <div class="row align-center">
      <div class="container col-md-3"></div>
      <div class="container col-md-3"><h4>{{services[0].company}}</h4></div>
      <div class="container col-md-3"><h4>{{services[1].company}}</h4></div>
    </div>

    <div class="row align-center">
      <div class="container col-md-3"><h4>Category</h4></div>
      <div class="container col-md-3">{{services[0].category}}</div>
      <div class="container col-md-3">{{services[1].category}}</div>
    </div>

    <div class="row align-center">
      <div class="container col-md-3"><h4>Estimated Costs (varies)</h4></div>
      <div class="container col-md-3">From SGD${{services[0].costs}} onwards</div>
      <div class="container col-md-3">From SGD${{services[1].costs}} onwards</div>
    </div>

    <div class="row align-center">
      <div class="container col-md-3"><h4>Expertise Areas</h4></div>
      <div class="container col-md-3">
        <ul>
          <li v-for="area in services[0].expertise" :key="area">{{ area }}</li>
        </ul>
      </div>
      <div class="container col-md-3">
        <ul>
          <li v-for="area in services[1].expertise" :key="area">{{ area }}</li>
        </ul>
      </div>
    </div>

    <div class="row align-center">
      <div class="container col-md-3"><h4>Company Standards</h4></div>
      <div class="container col-md-3">
        <ul>
          <li v-for="standard in services[0].standards" :key="standard">{{ standard }}</li>
        </ul>
      </div>
      <div class="container col-md-3">
        <ul>
          <li v-for="standard in services[1].standards" :key="standard">{{ standard }}</li>
        </ul>
      </div>
    </div>

    <div class="row align-center">
      <div class="container col-md-3"><h4>Training Standards and Certifications</h4></div>
      <div class="container col-md-3">
        <ul>
          <li v-for="training in services[0].training" :key="training">{{ training }}</li>
        </ul>
      </div>
      <div class="container col-md-3">
        <ul>
          <li v-for="training in services[1].training" :key="training">{{ training }}</li>
        </ul>
      </div>
    </div>

    <div class="row align-center">
      <div class="container col-md-3"><h4>Notable Customers</h4></div>
      <div class="container col-md-3">
        <ul>
          <li v-for="customer in services[0].customers" :key="customer">{{ customer }}</li>
        </ul>
      </div>
      <div class="container col-md-3">
        <ul>
          <li v-for="customer in services[1].customers" :key="customer">{{ customer }}</li>
        </ul>
      </div>
    </div>

    <div class="row align-center">
      <div class="container col-md-3"><h4>Estimated Cost Savings</h4></div>
      <div class="container col-md-3">{{services[0].cost_savings}}</div>
      <div class="container col-md-3">{{services[1].cost_savings}}</div>
    </div>

    <div class="row align-center">
      <div class="container col-md-3"><h4>Cloud Technology Usage</h4></div>
      <div class="container col-md-3">
        <ul>
          <li v-for="tech in services[0].cloud_tech" :key="tech">{{ tech }}</li>
        </ul>
      </div>
      <div class="container col-md-3">
        <ul>
          <li v-for="tech in services[1].cloud_tech" :key="tech">{{ tech }}</li>
        </ul>
      </div>
    </div>

    <!-- <vue-grid align="stretch" justify="between">
      <vue-cell v-for="service in services" v-bind:key="service.company" width="4of12">
        <ScannerItem
          :service="service"
          :order="orderCallback"
          :addCompare="addToComparison"
          :browsing="browsing"
          :comparedItems="services"
        />
      </vue-cell>
    </vue-grid> -->
  </body>
</div>
</template>

<script>
import ScannerItem from "../components/ScannerItem.vue";

export default {
  props: ["services", "orderCallback", "browsing"],
  components: {
    ScannerItem
  },
  data: function() {
    return {
      company1: "",
      company2: ""
    };
  },
  computed: {
    rows() {
      var myrows = [];
    }
  },
  created() {
    this.company1 = this.services[0].company;
    this.company2 = this.services[1].company;
  }
};
</script>
