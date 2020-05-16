<template>
  <div
    id="VueInputUiDemo"
    class="vue-input-ui-demo flex"
  >
    <div class="container">
      
      <div class="section">
        <h2>Create Your Company Bank Account</h2>
      </div>
      
      <br>
      <div class="component-container">
        <h3 style="color:#66B933">Basic Info</h3>
        <br>
        <VueInputUi
          id="VueInputUi1"
          v-model="groupname"
          label="Company Name"
          color="#66B933"
          :border-radius="8"
          required
        />
        <br>
        <!-- <VueInputUi
          id="VueInputUi2"
          v-model="emailAddress"
          label="Email Address"
          color="green"
          :border-radius="8"
          type="email"
          required
        /> -->
        
        <VueInputUi
          id="VueInputUi7"
          v-model="line1"
          label="Address"
          color="#66B933"
          :border-radius="8"
          required
        />
        <br>
        <VueInputUi
          id="VueInputUi8"
          v-model="line2"
          color="#66B933"
          label="Building (Optional)"
          :border-radius="8"
        />
        <br>
        <VueInputUi
          id="VueInputUi9"
          v-model="city"
          label="City"
          color="#66B933"
          :border-radius="8"
          required
        />        
        <br>
        <VueInputUi
          id="VueInputUi10"
          v-model="region"
          label="Region"
          color="#66B933"
          :border-radius="8"
          required
        />
        <br>
        <VueInputUi
          id="VueInputUi11"
          v-model="postcode"
          label="Postal Code"
          color="#66B933"
          :border-radius="8"
          required
        />
        <br>
        <VueInputUi
          id="VueInputUi12"
          v-model="country"
          label="Country"
          color="#66B933"
          :border-radius="8"
          required
        />
        <br>
      </div>

      <div class="component-container">
        <h3 style="color:#66B933">Identification Numbers</h3>
        <br>
        <VueInputUi
          id="VueInputUi18"
          v-model="UniqueEntityNumber"
          label="Unique Entity Number"
          color="#66B933"
          :border-radius="8"
          required
        />
        <br>
        <VueInputUi
          v-if="assignedBranchKey"
          id="VueInputUi6"
          v-model="assignedBranchKey"
          label="Assigned Branch Key"
          required
          :border-radius="8"
          color="green"
          disabled
        />
        <br>

      </div>

      

      <div>
        <v-btn @click="submit" large color="#66B933">Submit</v-btn>
      </div>

    </div>
    
    

  </div>
  
</template>

<script>
  import firebase from 'firebase';
  import db from "@/firebase/init.js";
  import VueInputUi from 'vue-input-ui';
  import 'vue-input-ui/dist/vue-input-ui.css';
  import axios from 'axios';
  
  const baseURL = 'http://localhost:3002'

  export default {
    name: 'App',
    components: {
      VueInputUi
    },
    data () {
      return {
        groupname: "",
        // emailAddress: "",
        assignedBranchKey: "",
        line1: "", // home address
        line2: "",
        city: "",
        region: "",
        postcode: "",
        country: "",
        UniqueEntityNumber: "",
        userUid: "",
        groupId: ""
      }
    },
    created() {
        firebase.auth().onAuthStateChanged(user => {
          
          this.userUid = user.uid;
        })
        
        
    },
    mounted: async function() {
        try {
          const res = await axios.get(baseURL + "/getBranchID");
          // console.log(res.data)
          this.assignedBranchKey = res.data.encodedKey
        } catch(e) {
          console.error(e)
        }
      },
    methods: {
      getNow: function() {
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date +' '+ time;
        this.creationDate = dateTime;
      },
      submit: async function() {
        try {
          var body = {
            "theGroup": {
              "groupName": this.groupname,
              "assignedBranchKey": this.assignedBranchKey
              // "emailAddress": this.emailAddress
            },
            "addresses": [
              {
                "line1": this.line1,
                "city": this.city,
                "region": this.region,
                "postcode": this.postcode,
                "country": this.country
              }
            ],
            "customInformation": [
              {
                "value": this.UniqueEntityNumber,
                "customFieldID": "uen"
              }
            ]
          }
          
          var results = await axios.post(baseURL + "/createAccount", body);
          // console.log(results.data.theGroup.encodedKey)
          this.groupId = await results.data.theGroup.encodedKey
 
          this.insertIntoDb();
        } catch(e) {
          console.error(e)
        }
      },
      insertIntoDb: async function() {
        var userRef = await db.collection("users")
          .doc(this.userUid);

        userRef.update({
              branchkey: this.assignedBranchKey,
              groupid: this.groupId
            });

      }
    }
  }
</script>

<style lang="scss">
  //@import 'style-helpers';
  html,
  body {
    margin: 0;
    min-height: 100%;
  }
  .vue-input-ui-demo {
    background-color: white;
    .container {
      text-align: center;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
    .component {
      padding: 10px;
      background: #FFF;
      border-radius: 4px;
      border: 1px solid #EBEBEB;
      &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
      }
    }
    .component-container {
      margin: 0 10px 20px 10px;
      padding: 20px;
      background:#000000;
      border-radius: 4px;
      border: 1px solid #EBEBEB;
      min-width: 300px;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
      flex: 1 0 48%;
      &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
      }
      &.dark {
        background-color: darken(#424242, 10%);
        color: #FFF;
      }
    }
    &.dark {
      background-color: darken(#424242, 20%);
      .component-container,
      .component {
        border: 1px solid #424242;
        background-color: darken(#424242, 10%);
        &:hover {
          box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.6), 0 2px 4px 0 rgba(0, 0, 0, 0.5);
        }
      }
      .container {
        color: white;
      }
    }
  }
</style>