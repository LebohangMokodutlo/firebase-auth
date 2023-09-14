<template>
  <div>
    <p>Login Form</p>
    <form @submit.prevent="pressed">
      <div class="email">
        <label for="email">Email:
          <input type="email" id="email" v-model="email">
        </label>
      </div>

      <div class="password">
        <label for="password">Password:
          <input type="password" id="password" v-model="password">
        </label>
      </div>

      <button type="submit">Login</button>
    </form>
    <div class="error" v-if="error">{{ error }}</div>
    <span>Need an account? Register >>> <router-link to="/registerform">here</router-link></span>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    async pressed() {
      try {
        const auth = getAuth(); // Initialize Firebase Auth
        await signInWithEmailAndPassword(auth, this.email, this.password);
        // If login is successful, you can navigate to a different route or perform other actions.
        this.$router.replace({ name: 'secretView' });
      } catch (err) {
        console.error(err.message);
        this.error = err.message; // Display the error message to the user
      }
    },
  },
};
</script>
