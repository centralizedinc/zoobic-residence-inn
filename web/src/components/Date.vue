<template>
    <v-card>
        <v-toolbar color="primary">
            <v-toolbar-title class="white--text">Make a Reservation</v-toolbar-title>
        </v-toolbar>
        <v-card-media height="250px" src="https://i0.bookcdn.com/data/Photos/Big/3771/377186/377186851/City-Of-Dreams-Macau-Nuwa-photos-Exterior-Hotel-information.JPEG">
        </v-card-media>
        <v-parallax height="90px" src="https://s33.postimg.cc/9v75ql74f/image.jpg">
            <v-card-title primary-title>
                <h1 class="black--text">Room Availability </h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent lazy full-width width="290px">
                        <v-text-field slot="activator" outline v-model="date0" label="Check-in date" prepend-icon="event" readonly></v-text-field>
                        <v-date-picker v-model="date0" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="modal = false">OK</v-btn>
                            <!-- <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn> -->
                        </v-date-picker>
                    </v-dialog>
                    <v-dialog ref="dialog" v-model="modal2" :return-value.sync="date" persistent lazy full-width width="290px">
                        <v-text-field slot="activator" outline v-model="date1" label="Check-out date" prepend-icon="event" readonly></v-text-field>
                        <v-date-picker v-model="date1" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="modal2 = false">OK</v-btn>
                            <!-- <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn> -->
                        </v-date-picker>
                    </v-dialog>
                    <v-text-field outline type="number" name="guest" label="No. of Guests" id="id" prepend-icon="face"></v-text-field>
                    <v-text-field outline type="number" name="child" label="Children 0 to 12" id="id" prepend-icon="child_care"></v-text-field>
                    <!-- <v-btn color="accent" block @click="proceedToBook">Proceed</v-btn> -->
                </v-form>
            </v-card-text>
        </v-parallax>
         <v-bottom-nav height="70px" absolute color="accent">
      <v-btn flat @click="proceedToBook">
        <span class="title white--text font-weight-black">Proceed</span>
      </v-btn>
</v-bottom-nav>
    </v-card>
</template>

<script>
export default {
  data: () => ({
    date1: null,
    date0: null,
    modal: false,
    modal2: false
  }),
  methods: {
    proceedToBook() {
      this.$router.push("/book");
    }
  }
};
</script>
<style>
</style>
