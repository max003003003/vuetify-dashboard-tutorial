<template>
  <div class="dashboard">
  <h1 class="subheading grey--text">Dashboard</h1>
  <v-container class="my-5">
       <v-card flat class="pa-6">
         <v-layout row wrap>
           <v-flex xs12 md6>
              <div class="caption grey--text">
                 Project title
              </div>
             <div>
                 Create a new website
              </div>
           </v-flex>
           <v-flex xs6 sm4 md2>
              <div class="caption grey--text">
                Project title
              </div>
              <div>
                The new untitled
              </div>
           </v-flex>
           <v-flex xs6 sm4 md2>
              <div class="caption grey--text">
                Duedate
              </div>
              <div>
                1st Jan 2019
              </div>
           </v-flex>
           <v-flex xs6 sm4 md2>
              <div class="caption grey--text">
                status
              </div>
              <div>
              ongoing
            </div>
           </v-flex>
         </v-layout>
       </v-card>
  </v-container>
  </div>
</template>

<script>
export default {

}
</script>
