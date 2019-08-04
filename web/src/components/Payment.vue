<template>
    <v-form>
        <v-autocomplete prepend-icon="credit_card" v-model="reservation.card.type" outline :items="states" label="Card Type">
        </v-autocomplete>
        <v-text-field name="cardname" outline label="Card Holder" v-model="reservation.card.name" id="id" prepend-icon="account_circle"></v-text-field>
        <v-text-field name="cardNumber" outline v-model="reservation.card.number" :mask="mask" prepend-icon="credit_card" label="Card Number" id="id"></v-text-field>
        <v-menu ref="menu" :close-on-content-click="false" v-model="menu" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
            <v-text-field slot="activator" outline v-model="reservation.card.expiration_date" label="Expiration Date" prepend-icon="event" readonly></v-text-field>
            <v-date-picker v-model="reservation.card.expiration_date" type="month" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                <v-btn flat color="accent" @click="$refs.menu.save(date)">OK</v-btn>
            </v-date-picker>
        </v-menu>
        <!-- <v-btn color="accent" large block @click="finalBooking">Confirm Booking</v-btn> -->
    </v-form>
</template>

<script>
export default {
    props: ["reservation"],
  data() {
    return {
      date: null,
      menu: false,
      modal: false,
      model: null,
      cardNumber: "",
      mask: "#### - #### - #### - ####",
      states: ["Amex", "MasterCard", "Visa", "Union Pay"]
    };
  },
  methods: {
    finalBooking() {
      this.$emit("nextPage", {
          page: 4,
          title: "Your Booking Summary",
          subtitle: "Your booking is confirmed!"
      });
    }
  }
};
</script>

<style>
</style>
