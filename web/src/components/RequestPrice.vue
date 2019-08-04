<template>
    <v-card>
        <v-toolbar color="primary">
            <v-toolbar-title class="white--text">Request Pricing</v-toolbar-title>
        </v-toolbar>
        <v-card-media
            height="250px"
            src="http://rfp.hyattmeetings.com/frontend/searchsite/img/slideshow/9__Meet_masthead.jpg"
        >
        </v-card-media>
         <v-parallax height="90px" mb-3 src="https://s33.postimg.cc/9v75ql74f/image.jpg">
            <v-card-title primary-title>
            <h2 class="text-xs-center black--text"> Your request for pricing has been sent! Kindly check your email regularly for our response</h2>
            </v-card-title>
        
        <v-card-actions>
            
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
export default {
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
};
</script>

