<template>
  <div id="app">
    {{ greeting }}
    <input type="text" v-model="message" />
    <span v-if="message" style="color: green">Thanks for the information</span>
    <span v-else="message" style="color: red">Please enter feedback</span>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  data() {
    return {
      message: 'varsha',
    };
  },
  components: {
    HelloWorld,
  },
  computed: {
    greeting() {
      if (new Date().getHours() >= 4 && new Date().getHours() < 12) {
        return 'Good Morning ' + this.message.toUpperCase();
      } else {
        return 'Good Afternoon ' + this.message.toUpperCase();
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
