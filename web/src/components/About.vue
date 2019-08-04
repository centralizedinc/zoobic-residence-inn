<template>
  <v-card>
    <v-parallax height="200px" src="https://s33.postimg.cc/u36ncl2f3/Untitled-1.jpg">
      <v-carousel>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
      <v-flex xs12>
        <v-card color="primary">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs7>
                <div>
                  <div class="display-1 white--text font-weight-black">HoyTel California</div>
                  <br />
                  <div class="body-1 grey--text">{{aboutDetails4}}</div>
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
            <!-- <iframe :src="video_url" style="display:none" height="250px" width="450px">
            </iframe>-->
            <video autoplay width="320" height="176" style="display:none" controls="controls">
              <source :src="video_url" type="video/mp4" />Your browser does not support HTML5 video.
            </video>
          </v-container>
        </v-card>
      </v-flex>
      <v-card-text>
        <span class="subheading black--text">{{aboutDetails}}</span>
      </v-card-text>
      <v-card-text>
        <span class="subheading black--text">{{aboutDetails2}}</span>
      </v-card-text>
    </v-parallax>
    <v-bottom-nav height="70px" absolute color="accent">
      <v-btn flat @click="close">
        <span class="title white--text font-weight-black">Close</span>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      aboutDetails4:
        "📍 Bradco Avenue, Aseana City, Manila Bay, Manila, Philippines, 1700",
      aboutDetails:
        "Your journey in luxury and indulgence begins here. HoyTel California welcomes you with impeccable service in surroundings that are both opulent and elegant stylish. Private and intuitive service is delivered through culturally aware service professional to make your stay at HoyTel California an oasis in the heart of Manila.",
      aboutDetails2:
        "Each of the 254 guestrooms are luxuriously appointed and styled for timeless elegance. Our Pool Villas and Bi-level Villas are designed to maximize living space while providing unprecedented exclusivity and the utmost in personalized butler service.",

      items: [
        {
          src: "https://s33.postimg.cc/dxb7t4anz/image.jpg"
        },
        {
          src: "https://s33.postimg.cc/u8bbpf00f/image.jpg"
        },
        {
          src: "https://s33.postimg.cc/p9ntaw3xb/image.jpg"
        },
        {
          src: "https://s33.postimg.cc/ezlebnlrj/image.jpg"
        },
        {
          src: "https://s33.postimg.cc/l0j38pl8f/image.jpg"
        },
        {
          src: "https://s33.postimg.cc/l0j38o37z/image.jpg"
        },
        {
          src: "https://s33.postimg.cc/yu7fxr63z/image.jpg"
        }
      ],
      video_url: ""
    };
  },
  created() {
    this.video_url =
      require("../assets/01 - Hotel California.mp3") + "?autoplay=1";
  },
  methods: {
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
