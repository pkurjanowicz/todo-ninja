<template>
  <div class="dashboard">
    <v-container class="my-10 mb-12 mx-12 grey lighten-4" fluid>
      <v-card flat class="pa-5">
        <v-row wrap>
          <v-col cols="12" sm="12" md="6">
            <div class="caption text--secondary">Project Title</div>
            <div>Projects name</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption text--secondary">Person</div>
            <div>the net ninja</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption text--secondary">Due by</div>
            <div>1st Jan 2021</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption text--secondary">Status</div>
            <div>Ongoing</div>
          </v-col>
        </v-row>
      </v-card>
      

    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
}
</script>
