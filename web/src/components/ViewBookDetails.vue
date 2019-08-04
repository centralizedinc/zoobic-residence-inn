<template>
    <v-card>
        <v-toolbar color="primary">
            <v-toolbar-title class="white--text">Your Booking Summary</v-toolbar-title>
        </v-toolbar>
        <v-card-media
            height="250px"
            src="https://www.nuwamanila.com/rooms/images/premiere-king/pk1.jpg"
        >
        </v-card-media>
         <v-parallax height="90px" mb-3 src="https://s33.postimg.cc/9v75ql74f/image.jpg">
            <v-card-title primary-title>
            <v-icon center large color="success">check_circle</v-icon>
            <h1 class="text-xs-center black--text"> Your booking is confirmed!</h1>
            </v-card-title>
        <v-card-text>
            <v-card-title primary-title>
                <span class="display-1 accent--text">Premier Suite</span>
            </v-card-title>
            <v-layout row wrap ml-5>
                <v-flex xs12>
                    <span class="title black--text">Premier Suite Room Only</span>
                </v-flex>
                <v-flex xs12>
                    <span class="title black--text">01 Aug 2018 - 02 Aug 2018(1 Night)</span>
                </v-flex>
                <v-flex xs12>
                    <span class="title black--text">Recommended Occupancy: 3</span>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-list>
                        <div v-for="(item, index) in items" :key="index">
                            <v-divider></v-divider>
                            <v-divider v-if="index===2"></v-divider>
                            <v-list-tile avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        <h2 v-if="index===2"><strong>{{ item.title }}</strong></h2>
                                        <h4 v-else><strong>{{ item.title }}</strong></h4>
                                    </v-list-tile-title>
                                </v-list-tile-content>

                                <v-list-tile-action>
                                    <strong>{{ item.price }}</strong>
                                </v-list-tile-action>
                            </v-list-tile>
                        </div>
                    </v-list>
                </v-flex>
            </v-layout>
        </v-card-text>
        <v-card-actions>
            <v-layout row wrap>
                <v-flex xs12 text-xs-right>
                    <!-- <v-btn color="accent" block @click="close">Close</v-btn> -->
                </v-flex>
            </v-layout>
        </v-card-actions>
         </v-parallax>
          <v-bottom-nav absolute height="70px" color="accent">
      <v-btn flat @click="close">
        <span class="title white--text font-weight-black">Close</span>
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
  data: () => ({
    items: [
      {
        title: "Rate for 1 guest",
        price: "PHP 21,000.00"
      },
      {
        title: "EST. TAXES & OTHER CHARGES",
        price: "PHP 4,777.50"
      },
      {
        title: "GRAND TOTAL",
        price: "PHP 25,777.50"
      }
    ]
  }),
  created() {
    this.$http
      .get("/api/hotels/details/" + this.getUrlVars().id)
      .then(result => {
        console.log("### Result: " + JSON.stringify(result.data));
      })
      .catch(err => {
        console.log("### ERR: " + err);
      });
  },
  methods: {
    getUrlVars: function() {
      var vars = {};
      var parts = window.location.href.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
          vars[key] = value;
        }
      );
      return vars;
    },
    close() {
      MessengerExtensions.requestCloseBrowser(
        function success() {
          callback();
        },
        function error(err) {
          console.log("closing......");
          //web close
          window.open("", "_parent", "");
          window.close();
          //ios
          open(location, "_self").close();
          callback();
        }
      );
    }
  }
};
</script>

<style>
</style>
