<template>
  <v-app class="my-12 grey lighten-4">
    <navbar/>
    <v-content class="grey lighten-4">
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
import navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    navbar
  },
  data: () => ({
    //
  }),
};
</script>
