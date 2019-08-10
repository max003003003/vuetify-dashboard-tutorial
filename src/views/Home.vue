<template>
  <div class="home">
    <v-btn class="pink white--text">Click me!</v-btn>
    <v-btn >Click Me</v-btn>
    <v-btn flat color="pink">Click</v-btn>

    <v-btn depressed class="pink white--text">
        <v-icon left>email</v-icon>
        <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
        <v-icon left small >email</v-icon>
        <span>email me</span>
    </v-btn>

     <v-btn depressed large class="pink white--text">
        <v-icon left large>email</v-icon>
        <span>email me</span>
    </v-btn>

   <v-btn depressed  small dark color="pink">
        <v-icon left>favorite</v-icon>
    </v-btn>

  </div>
</template>

<script>
export default {

}
</script>
