<template>
    <v-card>
        <v-toolbar color="primary">
            <v-toolbar-title class="white--text">Meeting</v-toolbar-title>
        </v-toolbar>
        <v-card-media
            height="250px"
            src="https://jakarta.grand.hyatt.com/content/dam/PropertyWebsites/grandhyatt/jakgh/Media/All/Grand-Hyatt-Jakarta-Ballroom.jpg"
        >
        </v-card-media>
        <v-parallax height="90px" src="https://s33.postimg.cc/9v75ql74f/image.jpg">
        <v-card-title primary-title>
            <h1 class="black--text">Meeting Information</h1>
        </v-card-title>
        <v-card-text>
            <v-form >
              <v-text-field outline type="number" name="capacity" label="Maximum Capacity" id="id" prepend-icon="meeting_room"></v-text-field>
                <v-text-field name="Email" outline label="Corporate Email Address" required prepend-icon="email" id="id"></v-text-field>
                <v-text-field name="Mobile" outline label="Mobile Number (Country code + 10-digit mobile number)" v-model="mobile" :mask="phone" prepend-icon="phonelink_ring" id="id"></v-text-field>
                <!-- <v-btn color="accent" block @click="payment">Proceed to Payment</v-btn> -->
            </v-form>
        </v-card-text>
    </v-parallax>
    <v-bottom-nav absolute height="70px" color="accent">
      <v-btn flat @click="requestPrice">
        <span class="title white--text font-weight-black">Request Pricing</span>
      </v-btn>
    </v-bottom-nav>
    </v-card>
</template>

<script>
export default {
  data() {
    return {
      mobile: "",
      phone: "(+##) ### - ### - ####"
    };
  },
  methods: {
    requestPrice() {
      this.$router.push("/request");
    }
  }
};
</script>

<style>
</style>
