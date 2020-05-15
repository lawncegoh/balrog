<template>
  <v-app v-if="user.loggedIn">
    <v-navigation-drawer
      width="250"
      class="blue-grey darken-4"
      dark
      persistent
      :mini-variant="miniVariant"
      v-model="drawer"
      fixed
      app
    >
      <v-toolbar flat class="transparent" dense>
        <v-list class="pa-0" :class="{ 'list-border-bottom': miniVariant }">
          <v-list-tile>
            <v-list-tile-action v-if="!miniVariant">
              <img src="NUS.jpg" height="40" width="40">
            </v-list-tile-action>
            <v-list-tile-content v-if="!miniVariant">
              <v-list-tile-title>
                <h4>NUSTutors</h4>
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon
                  v-html="miniVariant ? 'chevron_right' : 'chevron_left'"
                ></v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-divider></v-divider>

      <v-tooltip right :disabled="!miniVariant">
        <v-toolbar flat class="transparent" dense slot="activator">
          <v-list class="pa-0" :class="{ 'list-border-bottom': miniVariant }">
            <v-list-tile to="/home" exact>
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Home</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-toolbar>
      </v-tooltip>
      <v-divider></v-divider>

      <v-list subheader :class="{ 'list-border-bottom': miniVariant }">
        <template v-for="item in analyticsItems">
          <v-tooltip right :disabled="!miniVariant">
            <v-list-tile
              @submit.prevent="enter"
              :key="item.icon"
              :to="item.link"
              exact
              slot="activator"
            >
              <v-list-tile-action>
                <v-icon v-html="item.icon"></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <span v-text="item.title"></span>
          </v-tooltip>
        </template>
      </v-list>
      <v-divider></v-divider>
      <v-list subheader :class="{ 'list-border-bottom': miniVariant }">
      <v-list-tile key="lock_open" @click.prevent="signOut">
                        <v-list-tile-action>
                            <v-icon>lock_open</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Logout</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                          </v-list>
      <v-divider></v-divider>

      
      <!--<v-divider></v-divider>-->
    </v-navigation-drawer>


    <v-content>
      <router-view />
    </v-content>


  </v-app>
  <v-app v-else>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import firebase from 'firebase';

export default {
  name: 'VuebaseLayout',

  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: 'user'
    })
  },

  data() {
    return {
      appName: process.env.VUE_APP_APP_NAME,
      drawer: true,
      fixed: false,
      analyticsItems: [
        {
          icon: 'dashboard',
          title: 'Dashboard',
          link: '/dashboard'
        },
        {
          icon: 'search',
          title: 'Module Search',
          link: '/search'
        },
        {
          icon: 'chat',
          title: 'Chat',
          link: '/chat'
        },
        {
          icon: 'person',
          title: 'Profile',
          link: '/profile'
        },

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,

      searching: false,
      search: ''
    };
  },

  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: 'login'
          });
        });
    },
    enter() {
      this.$router.push({
        name: 'Chat',
        params: { name: user.data.displayName }
      });
    }
  }
};
</script>

<style scoped lang="stylus">
@import '../../node_modules/vuetify/src/stylus/settings/_variables.styl';


</style>
