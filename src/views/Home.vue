<template>
  <div id="app">
    <v-container>
      <v-layout col>
        <v-flex md3>
          <v-card flat color="transparent">
            <ProfileCard />
          </v-card>
        </v-flex>

        <v-flex md9>
          <v-card flat color="transparent">
            <v-container fluid grid-list-lg>
              <h2>{{ title }}</h2>
              <ToggleButton
                @change="swapCards"
                :labels="{ unchecked: 'Student', checked: 'Tutor' }"
                style="float:right"
                width="80"
              />
            </v-container>
          </v-card>
          <vue-grid v-show="!tutortoggle" align="stretch" justify="between">
            <vue-cell v-for="tutor in tutors" v-bind:key="tutor.name" width="4of12">
              <router-link v-bind:to="'/tutors/' + tutor.username">
                <TutorCard v-bind:tutor="tutor" />
              </router-link>
            </vue-cell>
          </vue-grid>

          <v-card v-show="tutortoggle">
            <div class="container">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Subject</th>
                      <th>Timeslot</th>
                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="student in requests" v-bind:key="student.name">
                      <td class="my-2">{{ student.name }}</td>
                      <td>{{ student.module }}</td>
                      <td>
                        {{
                        student.date.toDate().toDateString() +
                        ', ' +
                        student.date.toDate().getHours() +
                        ':' +
                        student.date.toDate().getMinutes() +
                        '0'
                        }}
                      </td>
                      <td>
                        <v-btn
                          v-on:click="
                            select(student);
                            acceptRequest();
                          "
                          class="mx-2"
                          depressed
                          small
                          color="primary"
                        >Accept</v-btn>
                        <v-btn
                          v-on:click="
                            select(student);
                            addContact();
                          "
                          class="mx-2"
                          depressed
                          small
                          color="success"
                        >Send Message</v-btn>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </v-card>
          <br />
          <!-- <Calender /> -->
          <TestCalender ref="calendar" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import { ToggleButton } from "vue-js-toggle-button";
import ProfileCard from "../components/ProfileCard.vue";
import MessageCard from "../components/MessageCard.vue";
import Calender from "../components/Calender.vue";
import firebase from "firebase";
import { VueGrid, VueCell } from "vue-grd";
import TutorCard from "../components/TutorCard.vue";
import TestCalender from "../components/TestCalender.vue";
export default {
  name: "app",
  components: {
    TestCalender,
    StarRating,
    ToggleButton,
    ProfileCard,
    MessageCard,
    Calender,
    VueGrid,
    VueCell,
    TutorCard
  },

  data() {
    return {
      user: "",
      tutortoggle: false,
      name: "",
      title: "Top Picks for CS2030",
      value: {},
      requests: [],
      tutors: []
    };
  },
  methods: {
    fetchTutors() {
      this.tutors = [];
      db.collection("modules")
        .where("code", "==", "CS2030")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let tutorlist = doc.data().tutors;
            console.log(tutorlist.slice(2));
            tutorlist = tutorlist.slice(2);
            for (let i = 0; i < tutorlist.length; i++) {
              db.collection("users")
                .where("username", "==", tutorlist[i])
                .get()
                .then(querySnapshot => {
                  querySnapshot.forEach(doc => {
                    this.tutors.push(doc.data());
                    console.log("tutor", doc.data());
                  });
                });
            }
          });
        });
    },
    fetchUser() {
      this.requests = [];
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          // User is signed in.

          let email = "";
          db.collection("users")
            .doc(user.uid)
            .get()
            .then(doc => {
              email = doc.data().email;
            });
          db.collection("studentrequests")
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                let request = doc.data();

                if (
                  request.receipient != null &&
                  request.receipient == email &&
                  !request.accept
                ) {
                  let authorid = request.author;
                  db.collection("users")
                    .where("email", "==", authorid)
                    .get()
                    .then(querySnapshot => {
                      querySnapshot.forEach(doc => {
                        request.name = doc.data().username;
                      });
                    });

                  this.requests.push(request);
                }
              });
            });
        }
      });
    },
    fetchEvents() {
      this.$refs.calendar.fetchEvents();
    },
    swapCards() {
      this.tutortoggle = !this.tutortoggle;
      if (this.tutortoggle) {
        this.title = "Appointment Requests";
      } else {
        this.title = "Top Picks for CS2030";
      }
    },
    addContact() {
      db.collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("contacts")
        .doc(this.student.author)
        .set({
          name: this.student.author,
          studentName: this.student.name
        })
        .then(this.$router.push({ name: "Chat" }));
    },
    acceptRequest() {
      db.collection("studentrequests")
        .doc(this.student.uid)
        .update({ accept: true });
      this.fetchUser();
      this.fetchEvents();
    },
    select: function(e) {
      this.student = e;
    }
  },
  created() {
    this.fetchTutors();
    this.fetchUser();
    this.fetchEvents();
  }
};
</script>

<style></style>
