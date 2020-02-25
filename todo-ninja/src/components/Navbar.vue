<template>
  <nav>
    <v-toolbar flat app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" text color="primary"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="primary">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer 
      app 
      temporary 
      class='secondary' 
      v-model='drawer'
    >

    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      drawer: false
    }
  },
}
</script>