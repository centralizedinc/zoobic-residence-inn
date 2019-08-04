<template>
    <v-form>
        <v-text-field name="Name" outline v-model="reservation.personal_details.name" label="Guest First and Last Name" prepend-icon="account_circle" id="id"></v-text-field>
        <v-text-field name="Email" outline v-model="reservation.personal_details.email" label="Email Address" required prepend-icon="email" id="id"></v-text-field>
        <v-text-field name="Confirm" outline v-model="reservation.personal_details.confirm_email" label="Confirm Email Address" prepend-icon="email" id="id"></v-text-field>
        <v-text-field name="Mobile" outline v-model="reservation.personal_details.mobile" label="Mobile Number (Country code + 10-digit mobile number)" :mask="phone" prepend-icon="phonelink_ring" id="id"></v-text-field>
        <v-textarea name="input-7-1" outline v-model="reservation.personal_details.special_request" label="Special Request" auto-grow value="" prepend-icon="note"></v-textarea>
        <p class="black--text">Please write your requests in English. Special requests cannot be guaranteed – but the property will do its best to meet your needs. You can always make a special request after your booking is complete!</p>
        <!-- <v-btn color="accent" block @click="payment">Proceed to Payment</v-btn> -->
    </v-form>
</template>

<script>
export default {
  props: ["reservation"],
  data() {
    return {
      mobile: "",
      phone: "(+##) ### - ### - ####"
    };
  },
  methods: {
    payment() {
      this.$emit("nextPage", {
        page: 3,
        title: "Complete your Booking",
        subtitle: "Your Payment Details"
      });
    }
  }
};
</script>

<style>
</style>
