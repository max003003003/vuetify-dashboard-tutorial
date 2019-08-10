<template>
   <nav>
       <v-app-bar flat app>
        <v-app-bar-nav-icon @click="draw = !draw"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span >SUMO</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn depressed color="white" class="grey--text">
               <span class="font-weight-light">Sign Out</span>
               <v-icon right>exit_to_app</v-icon>
            </v-btn>
       </v-app-bar>
        <v-navigation-drawer app v-model="draw" color="primary">
        <v-list>
        <v-subheader class="white--text">Dashboard</v-subheader>
        <v-list-item v-for="item in links" :key="item.text" route :to="item.route">
            <v-list-item-icon>
             <v-icon class="white--text">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title class="white--text">{{ item.text}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
     </v-navigation-drawer>
   </nav>
</template>
<script>
export default {
  data: () => ({
    draw: false,
    links: [
      { icon: 'dashboard', text: 'Dashboard', route: '/' },
      { icon: 'folder', text: 'My Project', route: '/projects' },
      { icon: 'person', text: 'Team', route: '/team' }
    ]
  })
}
</script>
<style >

</style>
