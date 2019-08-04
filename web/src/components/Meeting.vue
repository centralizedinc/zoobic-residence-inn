<template>
  <v-card>
    <v-carousel>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <v-toolbar color="primary">
      <v-toolbar-title class="white--text">Introducing Meetings on Demand</v-toolbar-title>
    </v-toolbar>
     <v-flex xs12 mr-3 ml-3 mt-3 >
            <v-card>
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <!-- <div class="headline accent--text font-weight-black">PhP 7,000.00</div>
                      <br> -->
                      <div class="display-1 black--text">{{studioDetails4}}</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-card-media
                      src="https://s33.postimg.cc/c43pqohzj/star.png"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
    <v-card-text><span class="subheading black--text">  {{studioDetails2}} </span> </v-card-text>
    <v-card-text><span class="subheading black--text">  {{studioDetails3}} </span> </v-card-text>
    <!-- <v-btn color="accent" large block @click="proceedToDate">Check Availability</v-btn> -->
    <v-bottom-nav height="70px" absolute color="accent">
      <v-btn flat block @click="bookMeetingRoom">
        <span class="title white--text font-weight-black">Plan your meeting here</span>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      studioDetails2:
        "Planning a successful meeting at HoyTel California is easier than ever when you use our online meeting event solution.",
      studioDetails3:
        "Find a hotel with the guest rooms or event space you need, then submit a pricing request for detailed information.",
      studioDetails4: "Meeting at HoyTel California is even easier",
      items: [
        {
          src:
            "https://cdn.meetingsbooker.com/images/venues/Park-Hyatt-Paris-Vendome-0-1.jpg"
        },
        {
          src:
            "https://media-cdn.tripadvisor.com/media/photo-s/0a/2f/83/6a/meeting-rooms-atelier.jpg"
        }
      ]
    };
  },
  methods: {
    bookMeetingRoom() {
      this.$store.commit("CLEAR_ROOM");
      //   this.$store.commit("ROOM", "Resort Studio");
      this.$router.push("/bookmeeting");
    }
  }
};
</script>

<style>
</style>
