<template>
    <div>
      <div v-if="error" class="error">{{ error.message }}</div>
      <form @submit.prevent="pressed" >
        <div class="email">
            <label for="email">Email:
            <input type="email" id="email" v-model="email" /></label>
        </div>

        <div class="password">
            <label :for="password">Password:
            <input type="password" id="password" name="password" v-model="password"/></label>
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    pressed() {
      alert('submitted');
    },
  },
};
</script>
