<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex md3>
          <v-card flat class="card--flex-toolbar" color="transparent">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex md>
                  <h2>Tutor Profile</h2>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <TutorProfileCard v-bind:tutor="tutor" />
              </v-layout>
            </v-container>
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex md>
                  <h2>Contact Tutor</h2>

                  <v-btn
                    :style="{ align: 'center', color: '#FFFFFF' }"
                    color="#F1BA79"
                    large
                    tile
                    outlined
                    @click="addContact()"
                  >Book A Session</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

        <v-flex md6>
          <v-card flat class="card--flex-toolbar" color="transparent">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex md8>
                  <h2>Experiences</h2>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>

          <v-card class="modules">
            <div class="container">
              <div class="module-test">
                <div class="table-responsive">
                  <table class="table">
                    <thead id="testcss">
                      <tr>
                        <th>Modules</th>
                        <th>Skill Level</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr
                        v-for="experience in experiences"
                        v-bind:key="experience.code"
                        style="width:'inherit"
                      >
                        <td id="testcss">{{ experience.code }}</td>

                        <td id="testcss">{{ experience.skill }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </v-card>

          <v-card flat class="card--flex-toolbar" color="transparent">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex md8>
                  <h2>Skills</h2>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>

          <v-card class="skillset">
            <div class="container">
              <div class="skill-test">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Skills</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="skill in skillset" v-bind:key="skill.name" style="width:'inherit">
                        <p id="skillsdetail">
                          <span>
                            <h5>{{ skill.name.toUpperCase() }}</h5>
                          </span>
                          {{ skill.detail }}
                        </p>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "@/firebase/init.js";
import { VueEditor } from "vue2-editor";
import StarRating from "vue-star-rating";
import TutorProfileCard from "../components/TutorProfileCard";

export default {
  components: {
    StarRating,
    TutorProfileCard
  },
  data() {
    return {
      id: this.$route.params.tut,

      tutor: {
        name: "",
        course: "",
        rate: "",
        nstudents: "",
        rating: 5
      },
      experiences: [],
      experience: {
        code: null,
        skill: null
      },
      skillset: [],
      skill: {
        name: null,
        detail: null
      },
      email: ""
    };
  },
  methods: {
    addContact() {
      db.collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("contacts")
        .doc(this.email)
        .set({
          name: this.email
        })
        .then(this.$router.push({ name: "Chat" }));
    }
  },
  created() {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          if (doc.data().username == this.id) {
            this.tutor.name = doc.data().username;
            this.tutor.course = doc.data().course;
            this.tutor.year = doc.data().year;
            this.tutor.rate = doc.data().rate;
            this.tutor.image = doc.data().image;
            this.email = doc.data().email;
            db.collection("users")
              .doc(doc.id)
              .collection("students")
              .get()
              .then(snap => {
                this.tutor.nstudents = snap.size;
              });
            console.log(this.tutor);
            db.collection("users")
              .doc(doc.id)
              .collection("modules")
              .get()
              .then(querySnapshot => {
                let allExperiences = [];
                querySnapshot.forEach(doc => {
                  allExperiences.push(doc.data());
                });
                this.experiences = allExperiences;
              });

            db.collection("users")
              .doc(doc.id)
              .collection("skills")
              .get()
              .then(querySnapshot => {
                let allSkills = [];
                querySnapshot.forEach(doc => {
                  allSkills.push(doc.data());
                });
                this.skillset = allSkills;
              });
          }
        });
      });
  }
};
</script>

<style>
#skillsheader {
  color: #192666;
  margin: 10px;
}

#skillsdetail {
  margin: 20px;
}

#skillsbreaker {
  text-align: left;
  border-bottom: 1.5px dashed #bbb;
  padding-bottom: 10px;
}

#testcss {
  text-align: center;
}
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
  color: #19266e;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}

.searchbox {
  background-color: #ffffff;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f07008;
  height: 40px;
  border-radius: 60px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
}

.modsearch {
  padding-top: 20px;
  padding-bottom: 20px;
}
h2 {
  color: #f1ba79;
  font-weight: bold;
}
h3 {
  margin-top: 3rem;
}
.avatar {
  margin: -3.5rem;
}
.top-card {
  height: 8rem;
  background-color: #f1ba79;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.outine-2 {
  border: 2px solid white;
}
.card--flex-toolbar {
}
.review {
  text-decoration: underline;
  font-size: 0.8em;
  padding: 1em 0;
  color: gray;
  white-space: normal;
}
textarea {
  width: 100%;
}
.textwrapper {
  border: 1px solid #999999;
  margin: 5px 0;
  padding: 3px;
}
</style>
