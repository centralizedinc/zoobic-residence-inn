<template>
    <v-card>
        <v-toolbar color="primary">
            <v-toolbar-title class="white--text">Personal Details</v-toolbar-title>
        </v-toolbar>
        <v-card-media
            height="250px"
            src="https://i0.bookcdn.com/data/Photos/Big/3771/377186/377186851/City-Of-Dreams-Macau-Nuwa-photos-Exterior-Hotel-information.JPEG"
        >
        </v-card-media>
        <v-parallax height="90px" src="https://s33.postimg.cc/9v75ql74f/image.jpg">
        <v-card-title primary-title>
            <h1 class="black--text">Your Booking Data</h1>
        </v-card-title>
        <v-card-text>
            <v-form >
                <v-text-field name="Name" outline label="Guest First and Last Name" prepend-icon="account_circle" id="id"></v-text-field>
                <v-text-field name="Email" outline label="Email Address" required prepend-icon="email" id="id"></v-text-field>
                <v-text-field name="Confirm" outline label="Confirm Email Address" prepend-icon="email" id="id"></v-text-field>
                <v-text-field name="Mobile" outline label="Mobile Number (Country code + 10-digit mobile number)" v-model="mobile" :mask="phone" prepend-icon="phonelink_ring" id="id"></v-text-field>
                <v-textarea name="input-7-1" outline label="Special Request" auto-grow value="" prepend-icon="note"></v-textarea>
                <p class="black--text">Please write your requests in English that we'll share with the property. Special requests cannot be guaranteed – but the property will do its best to meet your needs. You can always make a special request after your booking is complete!</p>
                <!-- <v-btn color="accent" block @click="payment">Proceed to Payment</v-btn> -->
            </v-form>
        </v-card-text>
    </v-parallax>
    <v-bottom-nav absolute height="70px" color="accent">
      <v-btn flat @click="payment">
        <span class="title white--text font-weight-black">Proceed to Payment</span>
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
    payment() {
      this.$router.push("/payment");
    }
  }
};
</script>

<style>
</style>
