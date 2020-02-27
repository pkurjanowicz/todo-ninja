<template>
  <div class="team">
    <v-container class="my-12">
      <v-row wrap>
        <v-col cols="12" sm="6" md="4" lg="3" v-for="(person,i) in team" :key=i>
          <v-card flat class="text-center ma-3">
            <v-img class="pt-4">
              <v-avatar size="200">
                <img
                  :src="person.avatar"
                  :alt="person.name"
                >
              </v-avatar>
            </v-img>
            <v-card-text>
              <div class="subtitle-1 black--text">{{person.name}}</div>
              <div>{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="secondary">
                <v-icon small left>mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Team',
  data() {
    return {
      team: [
        {name: "Pete Kurjanowicz", role: "Web Developer", avatar: "/pete.png"},
        {name: "Ivana Humpalot", role:"The Big Cheese", avatar: "/ivana.png" },
        {name: "Mike Hunt", role:"Fuck Boy", avatar: "/mike.png" }
      ]
    }
  }
}
</script>
