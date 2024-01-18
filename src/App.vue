<!-- <template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->

<template>
  <div>
    <!-- <LoginView /> -->
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import LoginView from './views/LoginView.vue';
export default {
  
    name: 'App',
    components: { LoginView },
    data() {
        return {
            modal: false,
            tasks: []
            

        }

    },
    created() {

    },
    mounted() {
      axios
      .get('http://localhost:80/crud-tasks/public/tasks')
      .then(response => (this.info = response))
      
    },
}
</script>

<style>

</style>
