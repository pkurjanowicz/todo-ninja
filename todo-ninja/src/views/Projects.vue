<template>
  <div class="projects">
    <v-container class="my-10 mb-12 grey lighten-4" style=" padding: 0 50px; width: 100%" fluid>
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(project,i) in myProjects"
          :key="i"
        >
          <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">Due by: {{project.due}}</div>
            <div>{{project.content}}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Projects',
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
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === "Pete Kurjanowicz"
      })
    }
  }
}
</script>