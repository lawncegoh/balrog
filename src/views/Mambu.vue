<template>
  <div
    id="VueInputUiDemo"
    class="vue-input-ui-demo flex"
    :class="{'dark': darkMode}"
  >
    <div class="container">
      
      <div class="section">
        <h2>Create Your Company Bank Account</h2>
      </div>
      
      <div class="flex justify-content-center pt-3 mb-2">
        <button
          class="btn btn-sm"
          @click="darkMode = !darkMode"
        >
          Toggle Dark Mode
        </button>
        <button
          class="btn btn-success ml-2 btn-sm"
          @click="loading = !loading"
        >
          Toggle loader
        </button>
      </div>
      <br>
      <div class="component-container">
        <VueInputUi
          id="VueInputUi1"
          type="abc"
          name="abc"
          v-model="groupname"
          label="Company Name"
          color="purple"
          size="sm"
          :dark="darkMode"
          clearable
          :loader="loading"
        />
        <br>
        <VueInputUi
          id="VueInputUi2"
          v-model="emailAddress"
          label="Email Address"
          :dark="darkMode"
          :loader="loading"
          :border-radius="8"
        />
        <br>
        <VueInputUi
          id="VueInputUi3"
          v-model="homeAddress"
          :error="true"
          label="Company Address"
          hint="Error text"
          size="lg"
          :dark="darkMode"
          :loader="loading"
        />
        <br>
        <VueInputUi
          id="VueInputUi4"
          v-model="assignedUserKey"
          label="Assigned User Key (Optional)"
          valid
          :dark="darkMode"
            
          :loader="loading"
        />
        <br>
        <VueInputUi
          id="VueInputUi5"
          v-model="assignedCentreKey"
          label="Assigned Centre Key (Optional)"
          :dark="darkMode"
          :loader="loading"
        />
        <br>
        <VueInputUi
          id="VueInputUi6"
          v-model="assignedBranchKey"
          label="Assigned Branch Key"
          :dark="darkMode"
          disabled
          :loader="loading"
        />
        <br>
        <VueInputUi
          id="VueInputUi7"
          v-model="line1"
          label="Building Name"
          :dark="darkMode"
          clearable
          :loader="loading"
        />
        <br>
        <VueInputUi
          id="VueInputUi8"
          v-model="line2"
          label="Address"
          hint="Is required"
          :dark="darkMode"
          required
          :loader="loading"
          clearable
        />
        <br>
        <VueInputUi
          id="VueInputUi9"
          v-model="city"
          label="City"
          :dark="darkMode"
          color="tomato"
          :loader="loading"
        />        
        <br>
        <VueInputUi
          id="VueInputUi10"
          v-model="region"
          label="Region"
          :dark="darkMode"
          :loader="loading"
          :border-radius="8"
        />
        <br>
        <VueInputUi
          id="VueInputUi11"
          v-model="postcode"
          label="Postal Code"
          :dark="darkMode"
          :loader="loading"
          :border-radius="8"
        />
        <br>
        <VueInputUi
          id="VueInputUi12"
          v-model="country"
          label="Country"
          :dark="darkMode"
          :loader="loading"
          :border-radius="8"
        />
        <br> <!-- nothing to add, can add my own customFieldId that coys need to add in -->
        <VueInputUi 
          id="VueInputUi13" 
          v-model="custominfo_customFieldID" 
          label="Income"
          :dark="darkMode"
          :loader="loading"
          :border-radius="8"
        />
        <br>
        <VueInputUi
          id="VueInputUi14"
          v-model="custominfo_customFieldID"
          label="Profit Value"
          :border-radius="8"
          :dark="darkMode"
        />
        <br>
        <VueInputUi
          id="VueInputUi15"
          v-model="clientKey"
          label="Client Key"
          :dark="darkMode"
          :loader="loading"
          :border-radius="8"
        />
        <br>
        <VueInputUi
          id="VueInputUi16"
          v-model="groupRoles_clientKey"
          label="Client Key of Group Roles"
          :dark="darkMode"
          :loader="loading"
          :border-radius="8"
        />
        <br>
        <VueInputUi
          id="VueInputUi17"
          v-model="groupRoles_groupRoleNameKey"
          label="Unique Entity Number"
          :dark="darkMode"
          :loader="loading"
          :border-radius="8"
        />
        <br>
        <VueInputUi
          v-if="branchID"
          id="VueInputUi18"
          v-model="branchID"
          label="Branch ID"
          :dark="darkMode"
          :loader="loading"
          :border-radius="8"
        />
      </div>
      <div id="components-demo">
        <button @click="submit">Submit</button>
      </div>
    </div>
    

  </div>
  
</template>

<script>
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
        emailAddress: "",
        homeAddress: "",
        assignedUserKey: "",
        assignedCentreKey: "",
        assignedBranchKey: "",
        line1: "", // home address
        line2: "",
        city: "",
        region: "",
        postcode: "",
        country: "",
        custominfo_customFieldID: "",
        custominfo_value: "",
        customFieldSetGroupIndex: "",
        clientKey: "", // can have a lot of clientKey
        groupRoles_clientKey: "",
        groupRoles_groupRoleNameKey: "",
        UniqueEntityNumber: null,
        branchID: null,
        creationDate: "",
        darkMode: false,
        loading: false
      }
    },
    mounted: async function() {
        try {
          const res = await axios.get(baseURL + "/getBranchID");
          console.log(res.data)
          this.branchID = res.data.encodedKey
          console.log('branchId', this.branchID)
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
          var results = await axios.post(baseURL + "/createAccount");
          console.log(results)
        } catch(e) {
          console.error(e)
        }
      }
    }
  }
</script>

<style lang="scss">
  @import 'style-helpers';
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
      background: #FFF;
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