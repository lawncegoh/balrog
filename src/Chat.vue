<template>
  <div class="container">
    <div class="messaging">
      <div class="inbox_msg">
        <div class="inbox_people">
          <div class="headind_srch">
            <div class="recent_heading">
              <h4>Recent</h4>
            </div>
            <div class="srch_bar">
              <div class="stylish-input-group">
                <input type="text" class="search-bar" placeholder="Search" />
                <span class="input-group-addon">
                  <button type="button">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="inbox_chat">
            <div
              v-for="contact in contacts"
              :key="contact"
              class="chat_list active_chat"
            >
              <div class="chat people">
                <div class="chat_ib">
                  <h5>{{ contact.username }}</h5>
                  <v-btn
                    :style="{ align: 'center', color: '#FFFFFF' }"
                    color="#F1BA79"
                    tile
                    outlined
                    @click="
                      select(contact.email);
                      fetchMessages();
                    "
                  >
                    Start messaging
                  </v-btn>
                  <v-btn
                    :style="{
                      align: 'center',
                      color: '#FFFFFF',
                      float: 'right',
                    }"
                    color="#F1BA79"
                    tile
                    outlined
                    @click="
                      select(contact.email);
                      addNew();
                    "
                    >Schedule session</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mesgs">
          <div class="msg_history">
            <div
              v-for="message in messages"
              v-bind:key="message"
              class="incoming_msg"
            >
              <div
                :class="[
                  message.author === authUser.email
                    ? 'sent_msg'
                    : 'received_msg',
                ]"
              >
                <div class="received_withd_msg">
                  <p>
                    {{ message.message }}
                  </p>

                  <span class="time_date"
                    >{{
                      message.createdAt.toDate().getMonth() +
                        '/' +
                        message.createdAt.toDate().getDate() +
                        ' ' +
                        message.createdAt.toDate().getHours() +
                        ':' +
                        message.createdAt.toDate().getMinutes()
                    }}||{{ message.author }}</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="type_msg">
            <div class="input_msg_write">
              <input
                @keyup.enter="saveMessage"
                v-model="message"
                type="text"
                class="write_msg"
                placeholder="Type a message"
              />
              <button class="msg_send_btn" type="button">
                <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="module"
      tabindex="-1"
      role="dialog"
      aria-labelledby="editLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editLabel">Schedule a date!</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Module
            <input class="mod_input" type="text" v-model="module" />
            <v-spacer></v-spacer>
            <br />

            Date
            <br />
            <v-date-picker v-model="date" no-title scrollable></v-date-picker>
            <v-spacer></v-spacer>
            Time
            <br />
            <v-time-picker v-model="time"></v-time-picker>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="addSession()"
              type="button"
              class="btn btn-primary"
              v-if="modal == 'new'"
            >
              Save changes
            </button>
            <button
              @click="updateModule()"
              type="button"
              class="btn btn-primary"
              v-if="modal == 'edit'"
            >
              Apply changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Chat',

  data() {
    return {
      message: null,
      messages: [],
      authUser: {},
      receipient: '',
      contacts: [],
      modal: null,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      menu2: false,
      time: new Date(),
      module: null,
    };
  },
  methods: {
    saveMessage() {
      //save message to firestore
      if (this.message != null) {
        db.collection('chat')
          .add({
            message: this.message,
            author: this.authUser.email,
            createdAt: new Date(),
            receipient: this.receipient,
            auth_rec: this.authUser.email.concat(this.receipient).length,
          })
          .then(() => {
            this.scrollToBottom();
          });
      } else {
        alert('Enter message first');
      }
      this.message = null;
    },
    fetchMessages() {
      if (this.receipient) {
        db.collection('chat')
          .where(
            'auth_rec',
            '==',
            firebase.auth().currentUser.email.concat(this.receipient).length
          )
          .orderBy('createdAt')
          .onSnapshot((querySnapshot) => {
            let allMessages = [];
            querySnapshot.forEach((doc) => {
              allMessages.push(doc.data());
            });
            this.messages = allMessages;

            setTimeout(() => {
              this.scrollToBottom();
            }, 1000);
          });
      } else {
        console.log('no receipient');
      }
    },
    fetchContacts() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          db.collection('users')
            .doc(user.uid)
            .collection('contacts')
            .onSnapshot((querySnapshot) => {
              let allContacts = [];
              querySnapshot.forEach((doc) => {
                let email = doc.data().name;
                db.collection('users')
                  .where('email', '==', email)
                  .get()
                  .then((snapshot) => {
                    snapshot.forEach((doc) => {
                      allContacts.push(doc.data());
                    });
                  });
                // allContacts.push(doc.data());
              });
              this.contacts = allContacts;
            });
        }
      });
    },
    scrollToBottom() {
      let box = document.querySelector('.msg_history');
      box.scrollTop = box.scrollHeight;
    },
    select: function(e) {
      this.receipient = e;
    },
    addNew() {
      this.modal = 'new';
      $('#module').modal('show');
    },
    addSession() {
      db.collection('studentrequests')
        .doc(firebase.auth().currentUser.uid)
        .set({
          date: this.submittableDateTime,
          author: firebase.auth().currentUser.email,
          receipient: this.receipient,
          created: new Date(),
          module: this.module,
          accepted: false,
          uid: firebase.auth().currentUser.uid,
          auth_rec: firebase.auth().currentUser.email.concat(this.receipient)
            .length,
        })
        .then(() => {
          this.modal = null;
        });
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.authUser = user;
      } else {
        this.authUser = {};
      }
    });
    this.fetchContacts();
  },
  computed: {
    submittableDateTime() {
      const date = new Date(this.date);
      if (typeof this.time === 'string') {
        const hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
      }
      return date;
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          next();
        } else {
          vm.$router.push('/login');
        }
      });
    });
  },
};
</script>

<style scoped>
.container {
  max-width: 1170px;
  margin: auto;
}
img {
  max-width: 100%;
}
.inbox_people {
  background: #f8f8f8 none repeat scroll 0 0;
  float: left;
  overflow: hidden;
  width: 40%;
  border-right: 1px solid #c4c4c4;
}
.inbox_msg {
  border: 1px solid #c4c4c4;
  clear: both;
  overflow: hidden;
}
.top_spac {
  margin: 20px 0 0;
}

.recent_heading {
  float: left;
  width: 40%;
}
.srch_bar {
  display: inline-block;
  text-align: right;
  width: 60%;
  padding: ;
}
.headind_srch {
  padding: 10px 29px 10px 20px;
  overflow: hidden;
  border-bottom: 1px solid #c4c4c4;
}

.recent_heading h4 {
  color: #05728f;
  font-size: 21px;
  margin: auto;
}
.srch_bar input {
  border: 1px solid #cdcdcd;
  border-width: 0 0 1px 0;
  width: 80%;
  padding: 2px 0 4px 6px;
  background: none;
}
.srch_bar .input-group-addon button {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  padding: 0;
  color: #707070;
  font-size: 18px;
}
.srch_bar .input-group-addon {
  margin: 0 0 0 -27px;
}

.chat_ib h5 {
  font-size: 15px;
  color: #464646;
  margin: 3%;
}
.chat_ib h5 span {
  font-size: 13px;
  float: right;
}
.chat_ib p {
  font-size: 14px;
  color: #989898;
  margin: auto;
}
.chat_img {
  float: left;
  width: 11%;
}
.chat_ib {
  /* float: left; */
  display: 'flex';
  flex-direction: 'row';
  padding: 0 0 0 0px;
  width: 88%;
  font-size: 30px;
}

.chat_people {
  overflow: hidden;
  clear: both;
}
.chat_list {
  border-bottom: 1px solid #c4c4c4;
  margin: 0;
  padding: 2%;
}
.inbox_chat {
  height: 550px;
  overflow-y: scroll;
}

.active_chat {
  background: #ebebeb;
}

.incoming_msg_img {
  display: inline-block;
  width: 6%;
}
.received_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  width: 92%;
  margin-left: auto;
  position: relative;
}
.received_withd_msg p {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 10px;
  border-radius: 25px;
  background-color: #82ccdd;
  padding: 10px;
  position: relative;
}
.time_date {
  color: #747474;
  display: block;
  font-size: 12px;
  margin: 8px 0 0;
}
.received_withd_msg {
  width: 57%;
}
.mesgs {
  padding: 30px 15px 0 25px;
  width: 60%;
  display: flex;
  flex-direction: column;
}

.sent_msg p {
  border-radius: 25px;
  background-color: #ffa41b;
  padding: 10px;
  position: relative;
}
.outgoing_msg {
  overflow: hidden;
  margin: 26px 0 26px;
}
.sent_msg {
  display: inline-block;
  padding: 0 0 0 10px;
  width: 92%;
  position: relative;
  margin-left: 250px;
}
.input_msg_write input {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border: medium none;
  color: #4c4c4c;
  font-size: 15px;
  min-height: 48px;
  width: 100%;
}

.type_msg {
  border-top: 1px solid #c4c4c4;
  position: relative;
}
.msg_send_btn {
  background: #05728f none repeat scroll 0 0;
  border: medium none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  height: 33px;
  position: absolute;
  right: 0;
  top: 11px;
  width: 33px;
}
.messaging {
  padding: 0 0 50px 0;
}
.msg_history {
  height: 516px;
  overflow-y: auto;
}

.mx-2 {
  float: 'left';
  color: '#FFFFFF';
}
.modal-body {
  align-items: center;
  align-self: center;
  padding: 15px 22px;
  margin: 10px 5px;
  box-sizing: border-box;
}

.mod_input {
  width: 100%;
  height: 20px;
  padding: 15px 22px;
  margin: 10px 5px;
  box-sizing: border-box;
  border: 1px solid #000;
}
</style>
