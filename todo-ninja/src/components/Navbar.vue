<template>
  <nav>
    <v-app-bar flat app class="grey lighten-4">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" text color="primary"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light primary--text">Todo</span>
        <span class='primary--text'>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="primary">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model='drawer'>
      <v-list flat>
          <v-list-item-group v-model="item" flat mandatory color="primary">
            <v-list-item v-for="(item, i) in drawerItems" :key="i" router :to='item.route'>
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text" ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      drawer: false,
      drawerItems: [
        { text: 'Dashboard', icon: 'mdi-view-dashboard', route: '/' },
        { text: 'My Projects', icon: 'mdi-folder', route: '/projects' },
        { text: 'Team', icon: 'mdi-account-group', route: '/team' },
      ],
    }
  },
}
</script>