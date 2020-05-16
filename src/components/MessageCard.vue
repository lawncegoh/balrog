<template
  ><v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex md>
        <h2>Message</h2>
        <br />
        <v-card md6>
          <v-card-text>You have no new messages.</v-card-text>
          <v-card-actions>
            <v-btn
              to="/chat"
              :style="{ align: 'center', color: '#FFFFFF' }"
              color="#66B933"
              small
              tile
              outlined
              >View past messages</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container></template
>

<script></script>
<style>
h2 {
  color: #66B933;
  font-weight: bold;
}
</style>
