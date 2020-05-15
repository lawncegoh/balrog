<template>
  <div id="app">
    <div id="app">
      <div class="title">
        <h5>Category 1</h5>
        <p>Short write-up</p>
      </div>

      <section>
        <vue-horizontal-list
          :items="items"
          :options="{
            responsive: [
              { end: 576, size: 1 },
              { start: 576, end: 768, size: 2 },
              { size: 3 },
            ],
          }"
        >
          <template v-slot:default="{ item }">
            <div class="item">
              <img src="razer.png" height="100" width="100" />
              <h5>{{ item.title }}</h5>
              <p>{{ item.content }}</p>
            </div>
          </template>
        </vue-horizontal-list>
      </section>
      <div class="title">
        <h5>Category 2</h5>
        <p>Short write-up</p>
      </div>
      <section>
        <vue-horizontal-list
          :items="items"
          :options="{
            responsive: [
              { end: 576, size: 1 },
              { start: 576, end: 768, size: 2 },
              { size: 3 },
            ],
          }"
        >
          <template v-slot:default="{ item }">
            <div class="item">
              <img src="razer.png" height="100" width="100" />
              <h5>{{ item.title }}</h5>
              <p>{{ item.content }}</p>
            </div>
          </template>
        </vue-horizontal-list>
      </section>
      <div class="title">
        <h5>Category 3</h5>
        <p>Short write-up</p>
      </div>
      <section>
        <vue-horizontal-list
          :items="items"
          :options="{
            responsive: [
              { end: 576, size: 1 },
              { start: 576, end: 768, size: 2 },
              { size: 3 },
            ],
          }"
        >
          <template v-slot:default="{ item }">
            <div class="item">
              <img src="razer.png" height="100" width="100" />
              <h5>{{ item.title }}</h5>
              <p>{{ item.content }}</p>
            </div>
          </template>
        </vue-horizontal-list>
      </section>
    </div>
  </div>
</template>

<script>
import VueHorizontalList from "./vue-horizontal-list.vue";
export default {
  name: "Dashboard",
  components: {
    VueHorizontalList,
  },
  data() {
    return {
      options: {
        responsive: [
          { end: 576, size: 1 },
          { start: 576, end: 768, size: 2 },
          { start: 768, end: 992, size: 3 },
          { size: 4 },
        ],
        list: {
          // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
          windowed: 1200,

          // Because: #app {padding: 80px 24px;}
          padding: 24,
        },
      },
      items: [
        { title: "Item 0", content: "Content item with description" },
        { title: "Item 1", content: "Content item with description" },
        { title: "Item 2", content: "Content item with description" },
        { title: "Item 3", content: "Content item with description" },
        { title: "Item 4", content: "Content item with description" },
        { title: "Item 5", content: "Content item with description" },
        { title: "Item 6", content: "Content item with description" },
        { title: "Item 7", content: "Content item with description" },
        { title: "Item 8", content: "Content item with description" },
        { title: "Item 9", content: "Content item with description" },
      ],
    };
  },
};
</script>

<style scoped>
#app {
  font-family: "Roboto", sans-serif;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 24px;
}
@media (min-width: 1200px) {
  #app {
    padding-left: 80px;
    padding-right: 80px;
  }
}
h5 {
  font-size: 18px;
  line-height: 1.5;
  margin: 0 0 8px;
}
p {
  font-size: 17px;
  line-height: 1.5;
  font-weight: 400;
  margin: 0;
  word-break: break-word;
}
.item {
  padding: 16px 24px;
  border-radius: 3px;
  background: #f5f5f5;
}
.title {
  padding: 16px 24px;
  border-radius: 3px;
  background: black;
  color: #66B933;
}

section {
  margin-bottom: 50px;
}
</style>
