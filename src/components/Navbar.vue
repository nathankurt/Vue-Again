<template>
    <nav>
       <v-toolbar app dark>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Nate Kurt</span>
            </v-toolbar-title>
            <v-btn v-for="link in links" :key="link.name" router :to="link.route">
                {{ link.text }}
            </v-btn>

       </v-toolbar>
    </nav>
    
</template>


<script>
    export default {
        data() {
            return {
                links: [
                    {text: 'Home', name: 'home', route: '/'},
                    {text: 'About', name: 'about', route: '/about'},
                    {text: 'SpartaHack', name: 'spartahack', route: '/spartahack'},
                    {text: 'Pro-Tips', name: 'protips', route: '/protips'},
                    {text: 'Nate\'s GitHub', name: 'github', route: '/github'},
                ]
            }
        }
    }
</script>