<template>
    <v-form>
        <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent lazy full-width width="290px">
            <v-text-field slot="activator" outline v-model="reservation.reservation_details.check_in_date" label="Check-in date" prepend-icon="event" readonly></v-text-field>
            <v-date-picker v-model="reservation.reservation_details.check_in_date" scrollable
            :min="formatDate(new Date())">
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="modal = false">OK</v-btn>
                <!-- <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn> -->
            </v-date-picker>
        </v-dialog>
        <v-dialog ref="dialog" v-model="modal2" :return-value.sync="date" persistent lazy full-width width="290px">
            <v-text-field slot="activator" outline v-model="reservation.reservation_details.check_out_date" label="Check-out date" prepend-icon="event" readonly></v-text-field>
            <v-date-picker v-model="reservation.reservation_details.check_out_date" scrollable
            :min="formatDate(reservation.reservation_details.check_in_date)">
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="modal2 = false">OK</v-btn>
                <!-- <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn> -->
            </v-date-picker>
        </v-dialog>
        <v-text-field outline type="number" name="guest" v-model="reservation.reservation_details.guest" label="No. of Guests" id="id" prepend-icon="face"></v-text-field>
        <v-text-field outline type="number" name="child" v-model="reservation.reservation_details.child" label="Children 0 to 12" id="id" prepend-icon="child_care"></v-text-field>
        <!-- <v-btn color="accent" block @click="proceedToBook">Proceed</v-btn> -->
    </v-form>
</template>

<script>
export default {
  props: ["reservation"],
  data: () => ({
    date1: null,
    date0: null,
    modal: false,
    modal2: false
  }),
  methods: {
    formatDate(date) {
      if (!date) {
        return "";
      }
      var dt = new Date(date);
      dt.setDate(dt.getDate() + 1);
      var month = dt.getMonth() + 1;
      var day = dt.getDate();
      var d =
        dt.getFullYear() +
        "-" +
        (month > 9 ? month : "0" + month) +
        "-" +
        (day > 9 ? day : "0" + day);
      console.log(d);
      return d;
    },
    proceedToBook() {
      this.$emit("nextPage", {
        page: 2,
        title: "Personal Details",
        subtitle: "Your Booking Data"
      });
    }
  }
};
</script>
<style>
</style>
