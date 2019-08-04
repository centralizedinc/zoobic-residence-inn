<template>
  <v-card>
    <v-carousel>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <v-toolbar color="primary">
      <v-toolbar-title class="white--text">Premiere Suite</v-toolbar-title>
    </v-toolbar>
    <v-flex xs12 mr-3 ml-3 mt-3>
      <v-card>
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs7>
              <div>
                <div class="headline accent--text font-weight-black">PhP 10,000.00</div>
                <br>
                <div class="body-1 black--text">{{studioDetails4}}</div>
              </div>
            </v-flex>
            <v-flex xs5>
              <v-card-media src="https://s33.postimg.cc/c43pqohzj/star.png" height="125px" contain></v-card-media>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-card-text><span class="subheading black--text"> {{studioDetails}} </span> </v-card-text>
    <v-card-text><span class="subheading black--text">  {{studioDetails2}} </span> </v-card-text>
    <v-card-text><span class="subheading black--text">  {{studioDetails3}} </span> </v-card-text>
    <!-- <v-btn color="accent" large block @click="proceedToDate">Check Availability</v-btn> -->
    <v-bottom-nav height="70px" absolute color="accent">
      <v-btn flat @click="proceedToDate">
        <span class="title white--text font-weight-black">Check Availability</span>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "//connect.facebook.com/en_US/messenger.Extensions.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "Messenger");

export default {
  data() {
    return {
      studioDetails:
        "Contemporary luxury with breathtaking views of Manila and the HoyTel California poolside are found at the 119-square meter Premiere Suite. The spacious suite has a separate living room, powder room and bedroom.",
      studioDetails2:
        "The stylish bedroom has a spacious king bed with 300 thread count sheets, cozy foot bench, a walk-in closet and vanity area.",
      studioDetails3:
        "The elegant bathroom comes with a deep-soaker tub, a built-in LCD television, and a shower facility with dual shower heads for couples. ",
      studioDetails4:
        "5 minutes from Ninoy Aquino International Airport via the new airport skyway, 8 minutes from one of the biggest malls in Asia and 15 minutes from the city’s convention centers.",
      items: [
        {
          src: "https://www.nobuhotelmanila.com/rooms/images/suite/r2_0.jpg"
        },
        {
          src: "https://www.nobuhotelmanila.com/rooms/images/suite/r1_0.jpg"
        },
        {
          src: "https://www.nobuhotelmanila.com/rooms/images/suite/r3_0.jpg"
        },
        {
          src: "https://www.nobuhotelmanila.com/rooms/images/common/coffee.jpg"
        },
        {
          src: "https://www.nobuhotelmanila.com/rooms/images/common/ref.jpg"
        },
        {
          src:
            "https://www.nobuhotelmanila.com/rooms/images/common/flipflops_1.jpg"
        }
      ]
    };
  },
  methods: {
    getUrlVars() {
      var vars = {};
      var parts = window.location.href.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
          vars[key] = value;
        }
      );
      return vars;
    },
    proceedToDate() {
      this.$store.commit("CLEAR_ROOM");
      this.$store.commit("ROOM", {
        room: "Premier Suite",
        sender: this.getUrlVars().sender
      });
      this.$router.push("/book");
    }
  }
};
</script>

<style>
</style>
