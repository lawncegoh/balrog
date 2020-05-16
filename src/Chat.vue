<template>
  <div class="razefunds">
    <VueFaqAccordion
      @categorySelect="onCategorySelect"
      @itemSelect="onItemSelect"
      :items="myItems"
    />
  </div>
</template>


<script>
import VueFaqAccordion from "./vue-faq-accordion.vue";
export default {
  components: {
    VueFaqAccordion,
  },
  data() {
    return {
      attr1: '',
      attr2: '',
      attr3: '',
      attr4: '',
      indexToRemove: [],
      recommendedGrants:[
        "Capability Development Grant",
        "Enhanced ISprint",
        "Innovation and Cap Voucher",
        "Productivity Innovation Project"
      ],
      grantsBinaries: [
        {grantName: "Capability Development Grant", attr1:"1", attr2:"1", attr3:"1", attr4:"1"},
        {grantName: "Enhanced ISprint", attr1:"1", attr2:"1", attr3:"1", attr4:"1"},
        {grantName: "Innovation and Cap Voucher", attr1:"1", attr2:"1", attr3:"1", attr4:"1"},
        {grantName: "Productivity Innovation Project", attr1:"1", attr2:"0", attr3:"0", attr4:"0"}
      ],
      myItems: [
        {
          title: "Start-Up SG Equity",
          value:
            "Managed by SPRING Seeds Capital and SG Innovate",
          category: "Government Grants",
        },
        {
          title: "Productivity Solutions Grant (PSG)",
          value: "The Productivity Solutions Grant (PSG) supports companies keen on adopting IT solutions and equipment to enhance business processes",
          category: "Government Grants"
        },
        {
          title: "SkillsFuture Enterprise Credit (SFEC)",
          value: " The SkillsFuture Enterprise Credit (SFEC) encourages employers to invest in enterprise transformation and capabilities of their employees",
          category: "Government Grants"
        },
        {
          title: "How long is a day and year on Venus?",
          value:
            "Venus takes 224.7 Earth days to complete one orbit around the Sun.",
          category: "Loans",
        },
        {
          title: "What animal smells like popcorn?",
          value: "Binturongs smell like popcorn.",
          category: "Loans",
        },
        {
          title: "What animal smells like popcorn?",
          value: "Binturongs smell like popcorn.",
          category: "Crowdfunding Investments",
        },
      ],
    };
  },
  methods: {
    onCategorySelect(args) {
      console.log("onCategorySelect", args);
    },
    onItemSelect(args) {
      console.log("onItemSelect", args);
    },
    onQuizComplete() {
      if (questions.getQ1.answer = TRUE) {
        this.attr1 = 1;
      } else {
        this.attr1 = 0;
      }
      if (questions.getQ2.answer = TRUE) {
        this.attr2 = 1;
      } else {
        this.attr2 = 0;
      }
      if (questions.getQ3.answer = TRUE) {
        this.attr3 = 1;
      } else {
        this.attr3 = 0;
      }
      if (questions.getQ4.answer = TRUE) {
        this.attr4 = 1;
      } else {
       this.attr4 = 0;
      }
      determineRightFunds()
    },
    determineRightFunds() {
      if (this.attr1 != 1) {
        indexToRemove.push("0");
        indexToRemove.push("1");
        indexToRemove.push("2");
        indexToRemove.push("3");
      }
      if (this.attr2 != 1) {
        indexToRemove.push("3");
      }
      if (this.attr3 != 1) {
        indexToRemove.push("3");
      }
      if (this.attr4 != 1) {
        indexToRemove.push("3");
      }
    },
    genRecommendedGrants() { //need print all these grants
      for(var i = 0; i < indexToRemove.length; i++) {
        recommendedGrants.splice(indexToRemove[i], 1);
      }
    }
  }, created() {
    this.recommendedGrants = [
        "Capability Development Grant",
        "Enhanced ISprint",
        "Innovation and Cap Voucher",
        "Productivity Innovation Project"
    ]
  }
};
</script>

<style scoped>
.razefunds{
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  
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
</style>
