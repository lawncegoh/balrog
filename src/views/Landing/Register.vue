<template>
  <div id="modal-signup" class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                <div class="col-md-6">
                  <input
                    id="name"
                    type="name"
                    class="form-control"
                    name="name"
                    value
                    required
                    autofocus
                    v-model="form.name"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                <div class="col-md-6">
                  <input
                    id="email"
                    type="email"
                    class="form-control"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                <div class="col-md-6">
                  <input
                    id="password"
                    type="password"
                    class="form-control"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="faculty" class="col-md-4 col-form-label text-md-right">Faculty</label>

                <div class="col-md-6">
                  <input
                    id="faculty"
                    type="faculty"
                    class="form-control"
                    name="faculty"
                    required
                    v-model="form.faculty"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="course" class="col-md-4 col-form-label text-md-right">Course</label>

                <div class="col-md-6">
                  <input
                    id="course"
                    type="course"
                    class="form-control"
                    name="course"
                    required
                    v-model="form.course"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="year" class="col-md-4 col-form-label text-md-right">Year</label>

                <div class="col-md-6">
                  <input
                    id="year"
                    type="year"
                    class="form-control"
                    name="year"
                    required
                    v-model="form.year"
                  />
                </div>
              </div>
              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import fb from "@/firebase/init.js";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        course: "",
        year: "",
        faculty: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(cred => {
            fb
            .collection("users")
            .doc(cred.user.uid)
            .set({
              username: this.form.name,
              tutor: false,
              email: this.form.email,
              password: this.form.password,
              course: this.form.course,
              year: this.form.year,
              faculty: this.form.faculty,
              numstudent: 0,
              rate: 0,
            });

          this.$router.push('home')
          alert(`you are logged in as ${cred.user.email}`)
          
        })
        .catch(err => {
          this.error = err.message;
        }
        
        
        );
    }
  }
};
</script>
