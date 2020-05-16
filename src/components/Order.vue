<template>
  <v-container>
    <div>
      <body>
        <h1>Chat with {{service.company}}<br /></h1>
      </body>
    </div>
    <br />
    <br />
    <v-card>
      <div>
        <div class="chats" style="padding:20px">
          <div class="row msg" v-for="chatLog in chatLogs">
            <div class="col-3">
              <h6 style="color:black" class="m-0">{{ chatLog.time }}</h6>
              <h6 style="color:black">{{ chatLog.name }}</h6>
            </div>
            <div class="col-8">
              <p style="color:black">
                <strong>{{ chatLog.comment }}</strong>
              </p>
            </div>
          </div>
        </div>
        <div class="sender" style="padding:20px">
          <d-input-group class="px-2 mb-1">
            <d-form-input
              size="lg"
              type="text"
              v-model="chatComment"
            ></d-form-input>
            
            <d-button
              @click="insert_chat"
              theme="success"
              size="lg"
              class="ml-2"
              >Enter</d-button
            >
          </d-input-group>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  props: ["service"],
  data: function() {
    return {
      logs: {},
      chatLogs: {},
      name:"",
      chatName: "Insert Username",
      chatComment: "",
      userkey: "",
      timeStamp: "",
      company: "",
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
      let response = await fetch(this.firebaseUrl + '/chat/' + this.name + '/' + this.company +'.json');
      let data = await response.json();
      this.chatLogs = data;
    },
    insert_chat: function() {
      if (
        //do not insert rubbish comment
        !this.chatComment.includes("Comment")
      ) {
        this.insert_chat_event({
          name: this.name,
          comment: this.chatComment,
          time: this.timeStamp,
        });
        this.chatName = "Insert Username";
        this.chatComment = "Insert Comment";
      }
    },
    insert_chat_event: function(event) {
      console.log("Logging event.");
      fetch(this.firebaseUrl + '/chat/' + this.name + '/' + this.company + '.json', {
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
    fetchUser() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          var db = firebase.firestore();
          var docRef = db.collection("users").doc(user.uid);
          docRef
            .get()
            .then((doc) => {
              if (doc && doc.exists) {
                const myData = doc.data();

                this.name = myData.username;
              }
            })
            .catch((error) => {
              console.log("Got an error: ", error);
            });
        } else {
          console.log("not signed in");
        }
      });
    },
  },
  created() {
    setInterval(this.getNow, 1000);
    this.fetchUser();
    this.company = this.service.company;
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
