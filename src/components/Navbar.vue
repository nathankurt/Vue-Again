<template>
    <nav>
       <v-toolbar app>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Nate Kurt</span>
            </v-toolbar-title>
            <v-btn v-for="link in links" :key="link.text" router :to="link.route">
                {{ link.text }}
            </v-btn>
            
<!--            <v-btn to="/">Home</v-btn>-->
<!--            <v-btn to="/about">About</v-btn>-->
<!--            <v-btn to="/spartahack">SpartaHack</v-btn>-->
<!--            <v-btn to="/protips">Pro-Tips</v-btn>-->
<!--            <v-btn to="/github">GitHub</v-btn>-->
       </v-toolbar>
    </nav>
    
</template>


<script>
    export default {
        data() {
            return {
                links: [
                    {text: 'Home', route: '/'},
                    {text: 'About', route: '/about'},
                    {text: 'SpartaHack', route: '/spartahack'},
                    {text: 'Pro-Tips', route: '/protips'},
                    {text: 'GitHub', route: '/github'},
                ]
            }
        }
    }
</script>