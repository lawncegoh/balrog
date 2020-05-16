<template>
  <v-container>
    <div>
      <body>
        <h1>Ordering<br /></h1>
        Company: {{ service.company }} <br />
        Category: {{ service.category }} <br />
        Price: {{ service.price }} <br />

        <v-btn @click="checkout(data)" color="#66b933" style="text">
          Checkout
        </v-btn>
      </body>
    </div>
    <br/>
    <br/>
    <v-card>
    <div>
      <div class="chats">
        <div class="row msg" v-for="chatLog in chatLogs">
          <div class="col-3">
            <p style="color:black" class="m-0">{{ chatLog.time }}</p>
            <p style="color:black">{{ chatLog.name }}</p>
          </div>
          <div class="col-8">
            <p style="color:black">
              <strong>{{ chatLog.comment }}</strong>
            </p>
          </div>
        </div>
      </div>
      <div class="sender">
        <d-input-group class="px-2 mb-1">
          <d-form-input
            size="lg"
            type="text"
            v-model="chatComment"
          ></d-form-input>
          <d-form-input size="lg" type="text" v-model="chatName"></d-form-input>
          <d-button @click="insert_chat" theme="primary" size="lg" class="ml-2"
            >Enter</d-button
          >
        </d-input-group>
      </div>
    </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["service"],
  data: function() {
    return {
      logs: {},
      chatLogs: {},
      chatName: "Insert Username",
      chatComment: "Insert Comment",
      userkey: "",
      timeStamp: "",
      firebaseUrl: "https://fundraze-123.firebaseio.com/",
    };
  },
  methods: {
    fetch_logs: async function() {
      let response = await fetch(this.firebaseUrl + "/logs.json");
      let data = await response.json();
      this.logs = data;
    },
    fetch_chat_logs: async function() {
      let response = await fetch(this.firebaseUrl + "/chat.json");
      let data = await response.json();
      this.chatLogs = data;
    },
    insert_chat: function() {
      if (
        //do not insert rubbish comment
        !this.chatComment.includes("Comment")
      ) {
        this.insert_chat_event({
          name: this.chatName,
          comment: this.chatComment,
          time: this.timeStamp,
        });
        this.chatName = "Insert Username";
        this.chatComment = "Insert Comment";
      }
    },
    insert_chat_event: function(event) {
      console.log("Logging event.");
      fetch(this.firebaseUrl + "/chat.json", {
        method: "post",
        body: JSON.stringify(event),
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log("Logged event", data);
        });
    },
    log_event: function(event) {
      console.log("Logging event.");
      fetch(this.firebaseUrl + "/logs.json", {
        method: "post",
        body: JSON.stringify(event),
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          console.log("Logged event", data);
        });
    },
    getNow: function() {
      let today = new Date();
      let date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      let time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      let dateTime = date + " " + time;
      this.timeStamp = dateTime;
    },
  },
  created() {
    setInterval(this.getNow, 1000);
  },
  mounted: function() {
    this.$nextTick(function() {
      window.setInterval(() => {
        this.fetch_chat_logs();
      }, 1000);
    });
  },
};
</script>
