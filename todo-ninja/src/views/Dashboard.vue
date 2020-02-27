<template>
  <div class="dashboard">
    <v-container class="my-10 mb-12 grey lighten-4" style="width: 100%" fluid>

      <v-row class="pa-5 ma-2">
        <v-btn small text @click="sortBy('title')">
          <v-icon left small>mdi-folder</v-icon>
          <span class="caption text-lowercase">By Project Name</span>
        </v-btn>
        <v-btn small text @click="sortBy('person')">
          <v-icon left small>mdi-account</v-icon>
          <span class="caption text-lowercase">By Person</span>
        </v-btn>
        <v-btn small text @click="sortBy('status')">
          <v-icon left small>mdi-check</v-icon>
          <span class="caption text-lowercase">By status</span>
        </v-btn>
      </v-row>

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
            <div class="float-right" :color="``">
              <v-chip small :color="project_status(project.CSS)" :class="`my-2 white--text caption`">{{project.status}}</v-chip>
            </div>
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
  },
  methods: {
    sortBy(name) {
      this.projects.sort((a,b) => a[name] < b[name] ? -1 : 1)
    },
    project_status(status) {
        if (status === "complete") return "rgb(87, 191, 66)";
        else if (status === "inprogress") return "rgb(255, 189, 66)";
        else if (status === "notstarted") return "grey";
      return "red"
    }
  }
}
</script>

<style scoped>
  .project.complete {
    border-left: 4px solid rgb(87, 191, 117)
  }
  .project.inprogress {
    border-left: 4px solid rgb(255, 207, 117)
  }
  .project.notstarted {
    border-left: 4px solid white
  }
  .project.overdue {
    border-left: 4px solid rgb(255, 119, 119)
  }
</style>
