<template>
  <div id="app">
    <FullCalendar
      ref="fullCalendar"
      defaultView="dayGridMonth"
      :plugins="calendarPlugins"
      :weekends="true"
      :header="head"
      :events="events"
      @dateClick="handleDateClick"
    />
  </div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import firebase from 'firebase';

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  // props: [length],
  data() {
    return {
      calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      head: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
      },
      calendarEvents: [
        { title: 'event 1', date: '2020-04-01T12:30:00-05:00' },
        { title: 'event 2', date: '2020-04-02' },
        { title: 'Event Now', start: new Date() },
      ],
      events: [],
    };
  },
  methods: {
    fetchEvents() {
      this.events = [];

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          let email = '';
          db.collection('users')
            .doc(user.uid)
            .get()
            .then((doc) => {
              if (doc.exists) {
                email = doc.data().email;
              }
            });
          db.collection('studentrequests')
            .get()
            .then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                const event = {};
                if (
                  doc.data().receipient != null &&
                  doc.data().receipient == email &&
                  doc.data().accept
                ) {
                  // current user is recipient of confirmed request
                  let authoremail = doc.data().author;
                  let module = doc.data().module;
                  let date = doc.data().date;
                  db.collection('users')
                    .where('email', '==', authoremail)
                    .get()
                    .then((querySnapshot) => {
                      querySnapshot.forEach((doc) => {
                        const title = doc.data().username + ' ' + module;
                        this.events.push({
                          title: title,
                          start: date.toDate(),
                        });
                      });
                    });
                }
                if (
                  doc.data().author != null &&
                  doc.data().author == email &&
                  doc.data().accept
                ) {
                  // current user is author of confirmed request
                  let receipientemail = doc.data().receipient;
                  let module = doc.data().module;
                  let date = doc.data().date;
                  db.collection('users')
                    .where('email', '==', receipientemail)
                    .get()
                    .then((querySnapshot) => {
                      querySnapshot.forEach((doc) => {
                        const title = doc.data().username + ' ' + module;
                        this.events.push({
                          title: title,
                          start: date.toDate(),
                        });
                      });
                    });
                }
              });
            });
        }
      });
    },
    handleDateClick(arg) {
      if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        this.calendarEvents.push({
          // add new event data
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay,
        });
      }
    },
  },
  created() {
    this.fetchEvents();
  },
};
</script>
<style lang="scss">
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
@import '~@fullcalendar/timegrid/main.css';
FullCalender {
  padding: 10%;
}
</style>
