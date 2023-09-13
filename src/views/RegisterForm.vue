<template>
  <div>
    <div
      v-if="error"
      class="error"
    >
      {{ error.message }}
    </div>
    <form @submit.prevent="pressed">
      <div class="email">
        <label for="email">Email:
          <input
            id="email"
            v-model="email"
            type="email"
          ></label>
      </div>

      <div class="password">
        <label :for="password">Password:
          <input
            id="password"
            v-model="password"
            type="password"
            name="password"
          ></label>
      </div>

      <button type="submit">
        Register
      </button>
    </form>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

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
        const auth = getAuth();
        const userCred = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const { user } = userCred.user;
        console.log('User registered:', user);
        this.$router.replace({ name: 'secretView' });
      } catch (err) {
        console.error('An error occurred:', err);
        this.error = err.message; // Display the error message in your template
      }
    },
  },
};
</script>
