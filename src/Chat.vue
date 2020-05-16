<template>
  <v-container>
    <div class="razefunds">
      <h1 class="title1">
        <center>RazeScanner</center>
      </h1>

      <div class="container">
          <VueFaqAccordion
            @categorySelect="onCategorySelect"
            @itemSelect="onItemSelect"
            :items="myItems"
          />
        </div>

      <!-- Clicked on Government Grants, render grants stuff -->
      <v-container v-if="this.currentState==0">
        <div>
          <v-container>
            <h2 class="headers">
              These are the grants that are currently available:
            </h2>
            <ul id="recoGrants">
              <li v-for="r in currentGrants">
                {{ r }}
              </li>
            </ul>
          </v-container>
          <h2 class="headers">
            Complete the questionaire to find out what grants you are eligible
            for!
          </h2>
          <v-container id="questions">
            <div>
              <div>
                <h5>Is your company registered in Singapore?</h5>
              </div>
              <input type="radio" name="q1" value="1" v-model="selected1" />
              <span> Yes </span><br />
              <input type="radio" name="q1" value="0" v-model="selected1" />
              <span> No </span>
              <!-- <select v-model="selected1">
                <option disabled value="" id="q1">(Please select one)</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
              <span> Selected: ?{{ this.selected1 }}</span> -->
            </div>
            <br />
            <div>
              <div>
                <h5>Do you have at least 30% shareholding?</h5>
              </div>
              <input type="radio" name="q2" value="1" v-model="selected2" />
              <span> Yes </span><br />
              <input type="radio" name="q2" value="0" v-model="selected2" />
              <span> No </span>
              <!-- <select v-model="selected2">
                <option disabled value="" id="q2">(Please select one)</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
              <span> Selected: {{ this.selected2 }}</span> -->
            </div>
            <br />
            <div>
              <div>
                <h5>Is your group's annual sales less than $100 million?</h5>
              </div>
              <input type="radio" name="q3" value="1" v-model="selected3" />
              <span> Yes </span><br />
              <input type="radio" name="q3" value="0" v-model="selected3" />
              <span> No </span>
              <!-- <select v-model="selected3">
                <option disabled value="" id="q3">(Please select one)</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
              <span> Selected: {{ this.selected3 }}</span> -->
            </div>
            <br />
            <div>
              <div>
                <h5>Do you have less than 200 employees?</h5>
              </div>
              <input type="radio" name="q4" value="1" v-model="selected4" />
              <span> Yes </span><br />
              <input type="radio" name="q4" value="0" v-model="selected4" />
              <span> No </span>
              <!-- <select v-model="selected4">
                <option disabled value="" id="q4">(Please select one) </option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
              <span> Selected: {{ this.selected4 }}</span> -->
            </div>
            <br />
            <div>
              <v-btn @click="onQuizComplete()" color="success">
                Find Out!
              </v-btn>
            </div>

            <v-container v-show="this.complete">
              <h2 class="headers">
                These are the grants that are <b>highly recommended</b> for you!
              </h2>
              <div v-if="this.recommendedGrants.length === 0">
                <h4>Sorry, you are not eligible for any grants.</h4>
              </div>
              <ul id="recoGrants">
                <li v-for="r in recommendedGrants">
                  {{ r }}
                </li>
              </ul>
              </v-container>
            </v-container>
          </div>
        </v-container>
    <!-- Clicked on Government Grants, render grants stuff -->


    <!-- Clicked on Loans, render loans stuff-->
    <v-container v-else-if="this.currentState==1">
      <div>
        Hello Hello
      </div>
    </v-container>
    <!-- Clicked on Loans, render loans stuff-->

    <!-- Clicked on Loans, render loans stuff-->
    <!-- <v-container v-else-if="this.currentState==2"> -->

    <!-- Clicked on Loans, render loans stuff-->


    </div>
  </v-container>
</template>

<script>
import VueFaqAccordion from "./vue-faq-accordion.vue";
export default {
  components: {
    VueFaqAccordion,
  },
  data() {
    return {
      indexToKeep: [],
      selected1: null,
      selected2: null,
      selected3: null,
      selected4: null,
      complete: false,
      currentState: 0,

      currentGrants: [
        "Capability Development Grant",
        "Enhanced ISprint",
        "Innovation and Cap Voucher",
        "Productivity Innovation Project",
      ],
      recommendedGrants: [],

      myItems: [
        {
          title: "Capability Development Grant",
          value: "CDG (Capability Development Grant) is a programme managed by Enterprise Singapore (formerly known as SPRING Singapore). It is designed to help Small and Medium Enterprises (SMEs) in Singapore to build internal capabilities in 10 specific areas: \n Branding & Marketing, Business Model Transformation, Enhancing Business, Processes for Productivity, Human Capital Development, Product Development, Business Excellence, Service Excellence, Intellectual Property, Financial Management, Standards Adoption, https://cdggrant.com/",
          category: "Government Grants",
        },
        {
          title: "Productivity Solutions Grant (PSG)",
          value:
            "iSPRINT has been in place since March 2010 to help SMEs' use of technology in order to enhance SMEs' productivity and growth. It aims to increase the rate of adoption and raise SMEs’ infocomm capabilities. This scheme is targeted at first time adopters and supports a large range of solutions including accounting, payroll, point-of-sales and software-as-a-service. https://www.mci.gov.sg/portfolios/infocomm-media/initiatives/industry/isprint",
          category: "Government Grants",
        },
        {
          title: "Innovation and Capability Voucher",
          value:
            " Enhance your business through and of the following areas:Productivity, Human Resources, Innovation, Financial Management https://www.paulhypepage.com/guide-faq/what-is-innovation-and-capability-voucher-icv/",
          category: "Government Grants",
        },
        {
          title: "Productivity Innovation Project (PIP)",
          value:
            "The Productivity Innovation Project (PIP) scheme aims to defray the cost of technology adoption involving application of technology to improve productivity and re-engineering of work processes. This is to encourage the construction related companies to embark on development projects that build up their capabilities and improve their processes for achieving higher site productivity. https://www.bca.gov.sg/PIP/pip.html",
          category: "Government Grants",
        },
        {
          title: "Loans",
          value:
          "your loan descriptions come here",
          category: "Loans",
        }
      ],
    };
  },
  methods: {
    onCategorySelect(args) {
      if (args.categoryIndex == 0) {
        this.currentState = 0;
      } else if (args.categoryIndex == 1) {
        this.currentState = 1;
      } else {
        this.currentState = 2;
      }
      console.log("onCategorySelect", args);
    },
    onItemSelect(args) {
      console.log("onItemSelect", args);
    },
    regenRecoArray() {
      this.recommendedGrants = [];
    },
    regenIndexArray() {
      this.indexToKeep = [];
    },
    determineRightFunds() {
      if (this.selected1 == 1 && this.selected2 == 1 && this.selected3 == 1 && this.selected4 == 1) {
        if (!this.indexToKeep.includes(0)) {
          this.indexToKeep.push(0);
        }
        if (!this.indexToKeep.includes(1)) {
          this.indexToKeep.push(1);
        }
        if (!this.indexToKeep.includes(2)) {
          this.indexToKeep.push(2);
        }
        if (!this.indexToKeep.includes(3)) {
          this.indexToKeep.push(3);
        }
      }
      if (this.selected1 != 1) {
      }
      if (this.selected2 != 1) {
        if (!this.indexToKeep.includes(0)) {
          this.indexToKeep.push(0);
        }
        if (!this.indexToKeep.includes(1)) {
          this.indexToKeep.push(1);
        }
        if (!this.indexToKeep.includes(2)) {
          this.indexToKeep.push(2);
        }
      }
      if (this.selected3 != 1) {
        if (!this.indexToKeep.includes(0)) {
          this.indexToKeep.push(0);
        }
        if (!this.indexToKeep.includes(1)) {
          this.indexToKeep.push(1);
        }
        if (!this.indexToKeep.includes(2)) {
          this.indexToKeep.push(2);
        }
      }
      if (this.selected4 != 1) {
        if (!this.indexToKeep.includes(0)) {
          this.indexToKeep.push(0);
        }
        if (!this.indexToKeep.includes(1)) {
          this.indexToKeep.push(1);
        }
        if (!this.indexToKeep.includes(2)) {
          this.indexToKeep.push(2);
        }
      }
    },
    genRecommendedGrants() {
      //need print all these grants
      console.log(this.indexToKeep);
      for (var i = 0; i < this.indexToKeep.length; i++) {
        this.recommendedGrants.push(this.currentGrants[this.indexToKeep[i]]);
      }
      console.log(this.recommendedGrants);
    },
    onQuizComplete() {
      if (this.selected1 != null && this.selected2 != null && this.selected3 != null && this.selected4 != null) {
        this.recommendedGrants = [];
        this.determineRightFunds();
        this.genRecommendedGrants();
        this.complete = true;
        console.log(this.complete);
        console.log(this.selected1);
      }
    },
  },
  created() {
    this.currentGrants = [
      "Capability Development Grant",
      "Enhanced ISprint",
      "Innovation and Cap Voucher",
      "Productivity Innovation Project",
    ];
    this.regenRecoArray();
    this.regenIndexArray();
  },
};
</script>

<style scoped>
.razefunds {
  max-width: 80%;
  margin: 0px auto;
}

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
  display: "flex";
  flex-direction: "row";
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
  float: "left";
  color: "#FFFFFF";
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

.title1 {
  padding-top: 20px;
  padding-bottom: 20px;
  color: #66b933;
  font-weight: bold;
}
.headers {
  padding-top: 20px;
  padding-bottom: 20px;
  color: #66b933;
  font-weight: bold;
}
</style>
