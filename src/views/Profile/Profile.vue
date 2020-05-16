<template>
  <div>
    <v-container>
      <v-layout row>
        <v-flex md3>
          <!-- <v-card flat class="card--flex-toolbar" color="transparent">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex>
                  <h2>Profile</h2>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card> -->
          <ProfileCard />
          <br />
          <v-btn
            @click="addHourlyRate"
            :style="{
              align: 'center',
              width: '89%',
              color: '#FFFFFF',
              marginLeft: '4%',
            }"
            color="#F1BA79"
            large
            tile
            outlined
            bold
            >Hourly Rate</v-btn
          >

          <div
            class="modal fade"
            id="rate"
            tabindex="-1"
            role="dialog"
            aria-labelledby="editLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="editLabel" v-if="modal == 'edit'">
                    Edit Hourly Rate
                  </h5>
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
                  <div class="row">
                    <!-- main module -->
                    <div class="col-md-8">
                      <v-slider
                        v-model="rate"
                        class="align-center"
                        :max="50"
                        :min="0"
                        hide-details
                      >
                        <template v-slot:append>
                          <v-text-field
                            v-model="rate"
                            class="mt-0 pt-0"
                            hide-details
                            single-line
                            type="number"
                            style="width: 60px"
                          ></v-text-field>
                        </template>
                      </v-slider>
                    </div>
                  </div>
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
                    @click="addRate(rate)"
                    type="button"
                    class="btn btn-primary"
                    v-if="modal == 'new'"
                  >
                    Save changes
                  </button>
                  <button
                    @click="updateRate(rate)"
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

          <br />
          <v-btn
            to="/chat"
            :style="{
              align: 'center',
              width: '89%',
              color: '#FFFFFF',
              marginLeft: '4%',
            }"
            color="#F1BA79"
            large
            tile
            outlined
            bold
            >Go to Chat</v-btn
          >
        </v-flex>

        <v-flex md8>
          <v-card flat class="card--flex-toolbar" color="transparent">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex md8>
                  <h2>Founders' Experiences</h2>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>

          <v-card class="experiences">
            <div class="container">
              <div class="experience-test">
                <v-btn
                  class="mx-2"
                  depressed
                  @click="addNewExperience"
                  color="#F1BA79"
                  :style="{ float: 'right', color: '#FFFFFF' }"
                  >Add Experience</v-btn
                >

                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Date</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr
                        v-for="experience in experiences"
                        v-bind:key="experience"
                      >
                        <td>
                          {{ experience.code }}
                        </td>

                        <td>
                          {{ experience.skill }}
                        </td>

                        <td>
                          <v-btn
                            class="mx-2"
                            color="primary"
                            @click="editExperience(experience)"
                          >
                            Edit
                          </v-btn>
                          <v-btn
                            class="mx-2"
                            color="error"
                            @click="deleteExperience(experience)"
                          >
                            Delete
                          </v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Experience Modal -->
            <div
              class="modal fade"
              id="experience"
              tabindex="-1"
              role="dialog"
              aria-labelledby="editLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title"
                      id="editLabel"
                      v-if="modal == 'new'"
                    >
                      Add Experience
                    </h5>
                    <h5
                      class="modal-title"
                      id="editLabel"
                      v-if="modal == 'edit'"
                    >
                      Edit Experience
                    </h5>
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
                    <div class="row">
                      <!-- main module -->
                      <div class="col-md-8">
                        <div class="form-group">
                          <input
                            type="text"
                            placeholder="Title e.g John(CTO) Harvard Lecturer"
                            v-model="experience.code"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            placeholder="Description e.g Research Fellow for 5 modules "
                            v-model="experience.name"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            placeholder="Date e.g DD/MM/YYYY"
                            v-model="experience.skill"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
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
                      @click="addExperience()"
                      type="button"
                      class="btn btn-primary"
                      v-if="modal == 'new'"
                    >
                      Save changes
                    </button>
                    <button
                      @click="updateExperience()"
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
          </v-card>

          <v-card flat class="card--flex-toolbar" color="transparent">
            <v-container fluid grid-list-lg>
              <v-layout row wrap>
                <v-flex md8>
                  <h2>Business Model</h2>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>

          <v-card class="businessset">
            <div class="container">
              <div class="business-test">
                <v-btn
                  class="mx-2"
                  depressed
                  @click="newBusiness"
                  color="#F1BA79"
                  :style="{ float: 'right', color: '#FFFFFF' }"
                  >Add one Part</v-btn
                >

                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Description</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="business in businessset" v-bind:key="business">
                        <td>
                          <span>
                            <h5>
                              {{ business.name }}
                            </h5>

                            {{ business.detail }}
                          </span>
                        </td>
                        <td>
                          <v-btn
                            class="mx-2"
                            color="primary"
                            @click="editBusiness(business)"
                          >
                            Edit
                          </v-btn>
                          <v-btn
                            class="mx-2"
                            color="error"
                            @click="deleteBusiness(business)"
                          >
                            Delete
                          </v-btn>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Business Modal -->
            <div
              class="modal fade"
              id="business"
              tabindex="-1"
              role="dialog"
              aria-labelledby="editLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="editLabel">Add</h5>
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
                    <div class="row">
                      <!-- main module -->
                      <div class="col-md-8">
                        <div class="form-group">
                          <input
                            type="text"
                            placeholder="Title e.g Distribution Channel, Value Proposition"
                            v-model="business.name"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            placeholder="A small write-up about this part of your business model"
                            v-model="business.detail"
                            class="form-control"
                          />
                        </div>
                      </div>
                    </div>
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
                      @click="addBusiness()"
                      type="button"
                      class="btn btn-primary"
                      v-if="modal == 'new'"
                    >
                      Save changes
                    </button>
                    <button
                      @click="updateBusiness()"
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
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import firebase from "firebase";
import StarRating from "vue-star-rating";
import ProfileCard from "../../components/ProfileCard";
import MessageCard from "../../components/MessageCard";
export default {
  name: "Modules",
  components: {
    StarRating,
    ProfileCard,
    MessageCard,
  },
  data() {
    return {
      name: null,
      year: "",
      course: null,
      rate: null,
      nstudents: "-",
      rating: 0,
      testlist: [],
      experiences: [],
      experience: {
        code: null,
        skill: null,
        id: null,
      },
      businessset: [],
      business: {
        name: null,
        detail: null,
        id: null,
      },
      activeItem: null,
      modal: null,
    };
  },
  methods: {
    addHourlyRate() {
      this.modal = "edit";
      this.rate = rate;
      $("#rate").modal("show");
    },
    updateRate(rate) {
      db.collection("users")
        .doc(firebase.auth().currentUser.uid)
        .update({
          rate: rate,
        });
      this.fetchEverything();
      $("#rate").modal("hide");
    },
    resetExperience() {
      this.experience = {
        code: null,
        skill: null,
        id: null,
      };
    },
    addNewExperience() {
      this.modal = "new";
      this.resetExperience();
      $("#experience").modal("show");
    },
    updateExperience() {
      db.collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("modules")
        .where("id", "==", this.experience.id)
        .get()
        .then((querySnapshot) => {
          return querySnapshot.docs[0].ref.update({
            code: this.experience.code,
            skill: this.experience.skill,
            name: this.experience.name,
          });
        })
        .then(() => {
          this.fetchEverything();
        });
      $("#experience").modal("hide");
    },
    editExperience(experience) {
      this.modal = "edit";
      this.experience = experience;
      $("#experience").modal("show");
    },
    deleteExperience(experience) {
      db.collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("modules")
        .where("id", "==", experience.id)
        .get()
        .then((querySnapshot) => {
          return querySnapshot.docs[0].ref.delete().then(() => {
            this.fetchEverything();
          });
        });
      db.collection("modules")
        .doc(experience.code)
        .update({
          tutors: firebase.firestore.FieldValue.arrayRemove(this.name),
        });
    },
    addExperience() {
      this.experience.id = new Date();
      if (this.experience.code != null && this.experience.skill != null) {
        db.collection("users")
          .doc(firebase.auth().currentUser.uid)
          .collection("modules")
          .add(this.experience)
          .then(() => {
            alert("Module created successfully");
          });

        db.collection("modules")
          .doc(this.experience.code)
          .get()
          .then((doc) => {
            if (doc.exists) {
              db.collection("modules")
                .doc(this.experience.code)
                .update({
                  tutors: firebase.firestore.FieldValue.arrayUnion(this.name),
                });
            } else {
              db.collection("modules")
                .doc(this.experience.code)
                .set({
                  code: this.experience.code,
                  name: this.experience.name,
                  tutors: [this.name],
                });
            }
          });
      } else {
        alert("Enter blank first");
      }
      this.fetchEverything();
      $("#experience").modal("hide");
    },
    fetchEverything() {
      db.collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("modules")
        .get()
        .then((querySnapshot) => {
          let allExperiences = [];
          querySnapshot.forEach((doc) => {
            allExperiences.push(doc.data());
          });
          this.experiences = allExperiences;
        });

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
                this.course = myData.course;
                this.name = myData.username;
                this.year = myData.year;
              }
            })
            .catch((error) => {
              console.log("Got an error: ", error);
            });
        } else {
          console.log("not signed in");
        }
      });

      db.collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("business")
        .get()
        .then((querySnapshot) => {
          let allBusiness = [];
          querySnapshot.forEach((doc) => {
            allBusiness.push(doc.data());
          });
          this.businessset = allBusiness;
        });

      db.collection("users")
        .doc(firebase.auth().currentUser.uid)
        .get()
        .then((doc) => {
          this.rate = doc.data().rate;
        });
    },
    resetBusiness() {
      this.business = {
        name: null,
        detail: null,
        id: null,
      };
    },
    newBusiness() {
      this.modal = "new";
      this.resetBusiness();
      $("#business").modal("show");
    },
    updateBusiness() {
      db.collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("business")
        .where("id", "==", this.business.id)
        .get()
        .then((querySnapshot) => {
          return querySnapshot.docs[0].ref.update({
            name: this.business.name,
            detail: this.business.detail,
          });
        })
        .then(() => {
          this.fetchEverything();
        });
      $("#business").modal("hide");
    },
    editBusiness(business) {
      this.modal = "edit";
      this.business = business;
      $("#business").modal("show");
    },
    deleteBusiness(business) {
      db.collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("business")
        .where("id", "==", business.id)
        .get()
        .then((querySnapshot) => {
          return querySnapshot.docs[0].ref.delete().then(() => {
            this.fetchEverything();
          });
        });
    },
    addBusiness() {
      this.business.id = new Date();
      if (this.business.name != null && this.business.detail != null) {
        db.collection("users")
          .doc(firebase.auth().currentUser.uid)
          .collection("business")
          .add(this.business)
          .then(() => {
            alert("Business Model created successfully");
          });
      } else {
        alert("Enter blank first");
      }
      this.fetchEverything();
      $('#business').modal('hide');
    }
  },
  created() {
    this.fetchEverything();
  },
};
</script>

<style scoped>
h2 {
  color: #f1ba79;
  font-weight: bold;
}
h3 {
  margin-top: 2.5rem;
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
