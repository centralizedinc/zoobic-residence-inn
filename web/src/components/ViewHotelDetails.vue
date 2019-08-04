<template>
   <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media
          class="white--text"
          height="200px"
          src="https://2.bp.blogspot.com/-yBAvB7zLhMg/Vt592QaYFxI/AAAAAAAATZU/FpQ71VvA0s0/s1600/DSC_1264.JPG"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">Red Planet Hotel Makati</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
         <div>
             <p>
          If what you're looking for is a conveniently located hotel in Manila, look no further than Red Planet Makati. From here, guests can enjoy easy access to all that the lively city has to offer. For those of you who want to venture out, there is the Museo Ng Makati, the Embassy of France, Powerplant Mall, many great restaurants, shopping malls, and vibrant nightlife. </p>
<p>Offering hotel guests superior services and a broad range of amenities, Red Planet Makati is committed to ensuring that your stay is as comfortable as possible. This hotel offers numerous on-site facilities to satisfy even the most discerning guest. All 213 rooms are inclusive of a power shower, ceiling fan or air conditioning, large flat screen television, Wi-Fi internet access, a safe, and a hair dryer. The hotel's host of recreational offerings ensures you have plenty to do during your stay. Red Planet Makati is your one-stop destination for quality hotel accommodations in Manila.</p>
</div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="primary">Close</v-btn>
          <v-btn flat color="primary" @click="redirectToBook">Book </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout> 
</template>

<script>
export default {
methods: {
    redirectToBook() {
      this.$router.push("/book");
    }
}
}
</script>

<style>

</style>
