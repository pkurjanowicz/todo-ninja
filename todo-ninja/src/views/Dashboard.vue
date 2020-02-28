<template>
  <div class="dashboard">
    <v-container class="my-10 mb-12 grey lighten-4" style=" padding: 0 50px; width: 100%" fluid>

      <v-row class="pa-5 ma-2">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">Project Name</span>
            </v-btn>
          </template>
          <span class="caption text-lowercase">Click to sort by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-account</v-icon>
              <span class="caption text-lowercase">Person</span>
            </v-btn>
          </template>
          <span class="caption text-lowercase">Click to sort by person</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text @click="sortBy('status')" v-on="on">
              <v-icon left small>mdi-check</v-icon>
              <span class="caption text-lowercase">status</span>
            </v-btn>
          </template>
          <span class="caption text-lowercase">Click to sort by status</span>
        </v-tooltip>
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
        {title: "Learn Vue", person: "Pete Kurjanowicz", due: "January 1st 2020", status: "Complete", CSS: "complete", content: "Learn the Vue.js front end framework. This will help improve the speed in which I can deploy applications"},
        {title: "Learn Docker", person: "Pete Kurjanowicz", due: "January 15th 2020", status: "Over Due", CSS: "overdue", content: "Talk to Chris about this, this will help with deployment"},
        {title: "Learn Vuetify", person: "Pete Kurjanowicz", due: "Feburary 29th 2020", status: "In Progress", CSS: "inprogress", content: "This will improve the look and feel of my websites"},
        {title: "Learn Node.js", person: "Pete Kurjanowicz", due: "March 10th 2020", status: "Not Started", CSS: "notstarted", content: "This will allow me to use websockets to deploy Jess' recipe app"},
        {title: "Build Framework for Jess' website", person: "Pete Kurjanowicz", due: "March 20th 2020", status: "Not Started", CSS: "notstarted", content: "Start Building :)"},
        {title: "Deploy Jess' Recipe Website", person: "Pete Kurjanowicz", due: "April 30th 2020", status: "Not Started", CSS: "notstarted", content: "Can't wait"},
        {title: "Break office chairs", person: "Ivana Humpalot", due: "April 12th 2020", status: "In Progress", CSS: "inprogress", content: "Lets get it poppin"},
        {title: "Destroy happy marriages", person: "Ivana Humpalot", due: "March 14th 2020", status: "Over Due", CSS: "overdue", content: "No very nice..."},
        {title: "Order Pizza", person: "Mike Hunt", due: "April 30th 2020", status: "Complete", CSS: "complete", content: "I love pizza"},
        {title: "Eat that pizza ;)", person: "Mike Hunt", due: "March 2nd 2020", status: "In Progress", CSS: "inprogress", content: "I love eating pizza"},
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
