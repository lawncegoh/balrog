<template>
  <div id="app">
    <div id="app">
      <h1 class="title1">
        <center>RazeAwareness</center>
      </h1>
      <br />
      <div class="title">
        <h5>Cloud Databases</h5>
        <p>Future-proof your database with one of these awesome cloud providers</p>
      </div>

      <section>
        <vue-horizontal-list
          :items="items"
          :options="{
            responsive: [
              { end: 576, size: 1 },
              { start: 576, end: 768, size: 2 },
              { size: 3 },
            ],
          }"
        >
          <template v-slot:default="{ item }">
            <div class="item">
              <img v-if="item.id==='0'" src= "amazon.png" height="100%" width="100%" />
              <img v-else-if="item.id==='1'"src= "azure-sql.png" height="70%" width="70%" />
              <img v-else-if="item.id==='2'"src= "oracle.png" height="80%" width="80%" />
              <img v-else-if="item.id==='3'"src= "ibm.png" height="80%" width="80%" />
              <img v-else-if="item.id==='4'"src= "google-cloud.png" height="80%" width="80%" />

              <h5>{{ item.title }}</h5>
              <p>{{ item.content }}</p>
            </div>
          </template>
        </vue-horizontal-list>
      </section>
      <div class="title">
        <h5>Security</h5>
        <p>
          To help you protect your business, here are some friendly cyber
          security solutions
        </p>
      </div>
      <section>
        <vue-horizontal-list
          :items="items1"
          :options="{
            responsive: [
              { end: 576, size: 1 },
              { start: 576, end: 768, size: 2 },
              { size: 3 },
            ],
          }"
        >
          <template v-slot:default="{ item }">
            <div class="item">
              <img v-if="item.id==='0'" src= "comodo.png" height="100%" width="100%" />
              <img v-else-if="item.id==='1'"src= "cloudflare.png" height="100%" width="100%" />
              <img v-else-if="item.id==='2'"src= "openvpn.png" height="100%" width="100%" />
              <img v-else-if="item.id==='3'"src= "social-engineer.png" height="100%" width="100%" />

              <h5>{{ item.title }}</h5>
              <p>{{ item.content }}</p>
              <button>Click HERE</button>

            </div>
          </template>
        </vue-horizontal-list>
      </section>
      <div class="title">
        <h5>HR Services</h5>
        <p>Automate everything from payroll to leave approval</p>
      </div>
      <section>
        <vue-horizontal-list
          :items="items2"
          :options="{
            responsive: [
              { end: 576, size: 1 },
              { start: 576, end: 768, size: 2 },
              { size: 3 },
            ],
          }"
        >
          <template v-slot:default="{ item }">
            <div class="item">
              <img src="razer.png" height="100" width="100" />
              <h5>{{ item.title }}</h5>
              <p>{{ item.content }}</p>
            </div>
          </template>
        </vue-horizontal-list>
      </section>
    </div>
  </div>
</template>

<script>
import VueHorizontalList from "./vue-horizontal-list.vue";
export default {
  name: "Dashboard",
  components: {
    VueHorizontalList,
  },
  data() {
    return {
      options: {
        responsive: [
          { end: 576, size: 1 },
          { start: 576, end: 768, size: 2 },
          { start: 768, end: 992, size: 3 },
          { size: 4 },
        ],
        list: {
          // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
          windowed: 1200,

          // Because: #app {padding: 80px 24px;}
          padding: 24,
        },
      },
      items: [
        { id: '0', title: "Amazon Relational Database", content: "Amazon Relational Database is a Database as a Service (DBaaS). It is suitable for experienced data users, data scientists and database administrators. This is a good choice for developers already familiar with AWS services. Users need to contact a Database Administrator to get setup as the process is technically involved.", image_src:"comodo.png"},
        { id: '1', title: "Microsoft Azure SQL Database", content: "Azure’s SQL database has the familiar look and feel of Microsoft. It has a strong SQL engine compatibility and machine learning. The service offers all SQL tools and applications needed for creating a database. It's easy to use.", image_src:"razer.png" },
        { id: '2',title: "Oracle Database", content: "All of your data and applications can be integrated. The solution enables the user to migrate all processes to the cloud. Everything is managed via a single platform. All data is encrypted by default. Oracle Cloud Platform claims their solution does everything for you. This saves time on repetitive tasks such as system maintenance, deploying solutions and necessary updates.", image_src:'' },
        { id: '3',title: "IBM DB2 on Cloud", content: "IBM's Db2 on Cloud is a fully managed SQL database that runs in the cloud. It's quick and easy to set up and allows for flexible scaling, so you only need to pay for what you actually use in terms of resources. It also comes with AI capabilities built in, and security patching it automated through rolling updates. It's easy to retrieve datasets as and when you need to look at them. Db2 on Cloud can also be set up on a private VPN.", image_src:'' },
        { id: '4',title: "Google Cloud SQL", content: "The platform provides a fully managed service, specifically for relational databases such as MySQL, PostgreSQL, and SQL Server, and aims to provide strong performance, availability, scalability, and convenience, while also using Google's private global network for enhanced security.", image_src:""},

      ],
      items1: [
        {
          id: '0',
          title: "Comodo",
          content:
            " Comodo is a global, award-winning security provider that offers free and affordable security tools that don't compromise on features and reliability.", 
          image_src:"comodo.png"
        },
        {
          id: '1',
          title: "Cloudflare",
          content:
            " Cloudflare automatically detects attacks, blocks them and creates reports to keep you up to date. ",
          image_src:"razer.png"
        },
        {
          id: '2',
          title: "OpenVPN",
          content:
            "You can use OpenVPN to make sure your employees aren't accessing your network through an open, unprotected connection. ",
          image_src:"razer.png"
        },
        {
          id: '3',
          title: "Social Engineer",
          content:
            "Social-Engineer.com helps organizations identify risk areas and how malicious attackers can exploit vulnerabilities to gain unauthorized access to infrastructures.",
          image_src:"razer.png"
        },
      ],
      items2: [
        {
          id: '0',
          title: "Singtel MecWise Payroll",
          content:
            "Singtel MecWise Payroll enables companies to easily comply with the pay slip requirement. It calculates different pay components such as bonus, advance pay, monthly variable component (MVC), etc. ",
          image_src:"razer.png"
        },
        {
          id: '1',
          title: "Zoho People",
          content:
            "If you only have a few employees, one thing you’ll love about Zoho People is that it’s free to use for up to five employees. After that, the monthly prices scale up with the number of employees like most of the others.",
          image_src:"razer.png"
        },
        {
          id: '2',
          title: "Namely",
          content:
            "Namely targets mid-sized companies, which it defines as anything from 15 employees to a few thousand. So, it may not be ideal for a true micro-business, but it’s a great option if you have ambitious growth plans and want a solution that is very scalable. ",
          image_src:"razer.png"
        },
        {
          id: '3',
          title: "BreatheHR",
          content:
            "UK-based BreatheHR lets you bring a lot of disparate data together into easy-to-use dashboards for both you and your employees.",
        },
      ],
    };
  },
};
</script>

<style scoped>
#app {
  font-family: "Roboto", sans-serif;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

}
@media (min-width: 1200px) {
  #app {
    padding-left: 80px;
    padding-right: 80px;
  }
}
h5 {
  font-size: 18px;
  line-height: 1.5;
  margin: 0 0 8px;
}
p {
  font-size: 17px;
  line-height: 1.5;
  font-weight: 400;
  margin: 0;
  word-break: break-word;
}
.item {
  padding: 16px 24px;
  border-radius: 3px;
  background: #f5f5f5;
}
.title {
  padding: 16px 24px;
  border-radius: 3px;
  background: black;
  color: #66b933;
}

section {
  margin-bottom: 50px;
}

.title1 {
  padding-top: 20px;
  padding-bottom: 20px;
  color: #66B933;
  font-weight: bold;
}
</style>
