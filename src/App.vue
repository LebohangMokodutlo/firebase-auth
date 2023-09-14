<template>
  <div id="app">
    <top-header></top-header>
    <nav>
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>|
      <router-link to="/loginform">
        Login
      </router-link> |
      <router-link to="/secretview">
        Secret
      </router-link>|
      <router-link to="/registerform">
        Register
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import TopHeader from './components/top-header.vue';

export default {
  components: { 'top-header': TopHeader },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
