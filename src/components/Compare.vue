<template>
<div>
    <body>
        <h1>
        Comparing<br />
        </h1>

        <vue-grid align="stretch" justify="between">
          <vue-cell
            v-for="service in services"
            v-bind:key="service.company"
            width="4of12"
          >
            <ScannerItem :service="service" :order="orderCallback" :addCompare="addToComparison" :browsing="browsing"/>
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
        ScannerItem
    }
}
</script>