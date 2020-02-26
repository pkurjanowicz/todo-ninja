<template>
  <div class="projects">
    <h1 class="headline text--secondary">This is the Projects Page</h1>
    <v-container class="my-12">
      <v-row dense wrap>
        <v-col cols="12" sm="12" md="6">
          <v-btn outline block class="primary">1</v-btn>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-btn outline block class="primary">2</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Projects',
}
</script>