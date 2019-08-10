<template>
  <div class="dashboard">
  <h1 class="subheading grey--text">Dashboard</h1>
<v-container my-5>

       <v-card flat v-for="project in projects" :key="project.title">
         <v-layout row wrap :class="`pa-6 project ${project.status}`">
           <v-flex xs12 md6>
              <div class="caption grey--text">
                 Project title
              </div>
             <div>
                  {{ project.title }}
              </div>
           </v-flex>
           <v-flex xs6 sm4 md2>
              <div class="caption grey--text">
                Person
              </div>
              <div>
                {{ project.person}}
              </div>
           </v-flex>
           <v-flex xs6 sm4 md2>
              <div class="caption grey--text">
                Duedate
              </div>
              <div>
                {{project.due}}
              </div>
           </v-flex>
           <v-flex xs6 sm4 md2>
              <div class="float-right">
                  <v-chip small active :class="`${project.status} white--text caption my-4`">
                    {{ project.status}}
                  </v-chip>
            </div>
           </v-flex>
         </v-layout>
         <v-divider>

         </v-divider>
       </v-card>

  </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        { title: 'Design a new spaceship', person: 'steve job', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem voluptate incididunt cupidatat occaecat exercitation. Ex voluptate qui exercitation cupidatat voluptate labore. Ex esse voluptate quis aliqua aliqua commodo esse deserunt est et. Ad adipisicing nulla veniam labore in incididunt dolor Lorem velit ullamco ullamco. Anim elit deserunt do enim. Ea commodo culpa dolore ut tempor nostrud non dolor ex officia deserunt ut. Exercitation proident cillum duis cillum ea nisi.' },
        { title: 'Fix varp core', person: 'henry linda', due: '1st Mar 2019', status: 'overdue', content: 'Lorem voluptate incididunt cupidatat occaecat exercitation. Ex voluptate qui exercitation cupidatat voluptate labore. Ex esse voluptate quis aliqua aliqua commodo esse deserunt est et. Ad adipisicing nulla veniam labore in incididunt dolor Lorem velit ullamco ullamco. Anim elit deserunt do enim. Ea commodo culpa dolore ut tempor nostrud non dolor ex officia deserunt ut. Exercitation proident cillum duis cillum ea nisi.' },
        { title: 'Re-program logic board', person: 'Kamin Aulph', due: '1st Jun 2019', status: 'complete', content: 'Lorem voluptate incididunt cupidatat occaecat exercitation. Ex voluptate qui exercitation cupidatat voluptate labore. Ex esse voluptate quis aliqua aliqua commodo esse deserunt est et. Ad adipisicing nulla veniam labore in incididunt dolor Lorem velit ullamco ullamco. Anim elit deserunt do enim. Ea commodo culpa dolore ut tempor nostrud non dolor ex officia deserunt ut. Exercitation proident cillum duis cillum ea nisi.' },
        { title: 'Fix AI ', person: 'Hobs', due: '1st Jan 2019', status: 'complete', content: 'Lorem voluptate incididunt cupidatat occaecat exercitation. Ex voluptate qui exercitation cupidatat voluptate labore. Ex esse voluptate quis aliqua aliqua commodo esse deserunt est et. Ad adipisicing nulla veniam labore in incididunt dolor Lorem velit ullamco ullamco. Anim elit deserunt do enim. Ea commodo culpa dolore ut tempor nostrud non dolor ex officia deserunt ut. Exercitation proident cillum duis cillum ea nisi.' },
        { title: 'Extract plutoneum', person: 'Konsinal', due: '3rd Jan 2019', status: 'ongoing', content: 'Lorem voluptate incididunt cupidatat occaecat exercitation. Ex voluptate qui exercitation cupidatat voluptate labore. Ex esse voluptate quis aliqua aliqua commodo esse deserunt est et. Ad adipisicing nulla veniam labore in incididunt dolor Lorem velit ullamco ullamco. Anim elit deserunt do enim. Ea commodo culpa dolore ut tempor nostrud non dolor ex officia deserunt ut. Exercitation proident cillum duis cillum ea nisi.' },
        { title: 'Re navigation to destination', person: 'Omahiln', due: '24th May 2019', status: 'overdue', content: 'Lorem voluptate incididunt cupidatat occaecat exercitation. Ex voluptate qui exercitation cupidatat voluptate labore. Ex esse voluptate quis aliqua aliqua commodo esse deserunt est et. Ad adipisicing nulla veniam labore in incididunt dolor Lorem velit ullamco ullamco. Anim elit deserunt do enim. Ea commodo culpa dolore ut tempor nostrud non dolor ex officia deserunt ut. Exercitation proident cillum duis cillum ea nisi.' }

      ]
    }
  }
}
</script>
<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}

.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2  !important;
}

.v-chip.ongoing {
  background: #ffaa2c !important;
}
.v-chip.overdue {
  background: #f83e69 !important;
}
.row {
  margin-left: 0px;
  margin-top: 0px;
}
</style>
