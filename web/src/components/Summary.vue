<template>
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
            <v-btn color="accent" block @click="close">Close</v-btn>
        </v-flex>
    </v-layout>
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
  props: ["reservation"],
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
    // this.$http
    //   .get("/api/hotels/details/" + this.getUrlVars().id)
    //   .then(result => {
    //     console.log("### Result: " + JSON.stringify(result.data));
    //   })
    //   .catch(err => {
    //     console.log("### ERR: " + err);
    //   });
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
