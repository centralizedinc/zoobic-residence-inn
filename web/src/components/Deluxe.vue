<template>
  <v-card>
    <v-carousel>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <v-toolbar color="primary">
      <v-toolbar-title class="white--text">Deluxe Double</v-toolbar-title>
    </v-toolbar>
    <v-flex xs12 mr-3 ml-3 mt-3 >
            <v-card>
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline accent--text font-weight-black">PhP 8,000.00</div>
                      <br>
                      <div class="body-1 black--text">{{studioDetails4}}</div>
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
        "The elegantly-styled Deluxe Double Queen guest room provides magnificent views of the Manila skyline and the HoyTel California poolside with 53-square meters of sophisticated space.",
      studioDetails2:
        "The affluent room has two spacious queen beds with 300 thread count sheets.",
      studioDetails3:
        "A warm, soothing bath at the Deluxe Double Queen’s elegantly appointed bathroom creating an indulgent space.",
      studioDetails4:
        "5 minutes from Ninoy Aquino International Airport via the new airport skyway, 8 minutes from one of the biggest malls in Asia and 15 minutes from the city’s convention centers.",
      items: [
        {
          src:
            "https://cityofdreamsmanila.hyatt.com/PropertyWebsites/hyatt/mnlhy/Media/All/Hyatt-City-of-Dreams-Manila-P013-Twin-Deluxe.gallery-2-3-item-panel.jpg/jcr:content/renditions/cq5dam.thumbnail.744.415.png"
        },
        {
          src:
            "https://cityofdreamsmanila.hyatt.com/PropertyWebsites/hyatt/mnlhy/Media/All/Hyatt-City-of-Dreams-Manila-P001-Bathroom.gallery-2-3-item-panel.jpg/jcr:content/renditions/cq5dam.thumbnail.744.415.png"
        },
        {
          src: "http://images.asiatravel.com/Hotel/16877/aquasuite002.jpg"
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
        room: "Deluxe Double",
        sender: this.getUrlVars().sender
      });
      this.$router.push("/book");
    }
  }
};
</script>

<style>
</style>
