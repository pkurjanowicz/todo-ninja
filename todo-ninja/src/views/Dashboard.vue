<template>
  <div class="dashboard">
    <v-container class="my-10 mb-12 mx-12 grey lighten-4" fluid>

      <v-card flat class="pa-5 ma-2" :class="`pa-5 project ${project.CSS}`" v-for="(project, i) in projects" :key="i">
        <v-row wrap >
          <v-col cols="12" sm="12" md="6">
            <div class="caption text--secondary">Project Title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption text--secondary">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption text--secondary">Due by</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div class="caption text--secondary">Status</div>
            <div>{{project.status}}</div>
          </v-col>
        </v-row>
      </v-card>
      

    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  data() {
    return {
      projects: [
        {title: "Learn Vue", person: "Pete Kurjanowicz", due: "Jan 1st 2020", status: "Complete", CSS: "complete"},
        {title: "Learn Docker", person: "Pete Kurjanowicz", due: "Jan 15th 2020", status: "Over Due", CSS: "overdue"},
        {title: "Learn Vuetify", person: "Pete Kurjanowicz", due: "Feb 29th 2020", status: "In Progress", CSS: "inprogress"},
        {title: "Learn Node.js", person: "Pete Kurjanowicz", due: "Mar 10th 2020", status: "Not Started", CSS: "notstarted"},
        {title: "Build Framework for Jess' website", person: "Pete Kurjanowicz", due: "Mar 20th 2020", status: "Not Started", CSS: "notstarted"},
        {title: "Deploy Jess' Recipe Website", person: "Pete Kurjanowicz", due: "Apr 30th 2020", status: "Not Started", CSS: "notstarted"},
      ]
    }
  }
}
</script>

<style scoped>
  .project.complete {
    background: rgba(0, 182, 0, 0.1)
  }
  .project.inprogress {
    background: rgba(255, 255, 0, 0.1)
  }
  .project.notstarted {
    background: white
  }
  .project.overdue {
    background: rgba(255, 0, 0, 0.1)
  }
</style>
