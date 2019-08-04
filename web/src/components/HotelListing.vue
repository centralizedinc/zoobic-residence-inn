<template>
    <v-card>
        <v-toolbar color="primary" dark>
            <v-toolbar-title >Hotels</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-layout row wrap pa-2>
                <v-divider></v-divider>
                <v-flex xs12 v-for="hotel in hotels" :key="hotel.name">
                    <v-card-media
                        src="https://s3.amazonaws.com/vuetify-docs/images/cards/desert.jpg"
                        height="200px"
                        ></v-card-media>
                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{hotel.name}}</h3>
                        <div>{{hotel.address}}</div>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                   <v-btn block color="success" outline  dark @click="bookMe">Book</v-btn>
                    </v-card-actions>
                </v-flex>
                <v-divider></v-divider>
            </v-layout>
        </v-card-text>
    </v-card>
</template>

<script>
export default {

    data(){
        return{
            hotels:[{
                name:"Hotel Test",
                address:"Makati CIty"

            },
            {
                name:"Hotel Test",
                address:"Makati CIty"

            }]
        }
    },
    methods:{
        bookMe(){
          this.$router.push('/book')  
        }
    }
}
</script>

<style>

</style>
