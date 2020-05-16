<template>
<div>
    <body>
        <h1>
        Ordering<br />
        </h1>
        Company: {{ service.company }} <br />
        Category: {{ service.category }}  <br />
        Price: {{ service.price }} <br />

        <v-btn @click="checkout(data)" color="#66b933" style="text"> Checkout </v-btn>
    </body>
</div>
</template>

<script>
export default {
    props: ["service"]
}
</script>