<template>
    <div>
      Logged in
      <span v-if="loggedIn">Yes</span>
      <span v-else>No</span>

      <div>
        <button @click="signOut">Sign Out</button>
      </div>
    </div>
  </template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default {
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },

  data() {
    return {
      loggedIn: false, // Fixed typo: changed 'loggenIn' to 'loggedIn'
    };
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: 'loginForm' });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
