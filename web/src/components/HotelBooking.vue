<template>
    <v-card>
        <v-toolbar color="primary">
            <v-toolbar-title class="white--text">{{ items[page-1].title }}</v-toolbar-title>
        </v-toolbar>
        <v-card-media height="200px" src="https://i0.bookcdn.com/data/Photos/Big/3771/377186/377186851/City-Of-Dreams-Macau-Nuwa-photos-Exterior-Hotel-information.JPEG">
        </v-card-media>
        <v-parallax height="90px" src="https://s33.postimg.cc/u36ncl2f3/Untitled-1.jpg">
            <v-card-title primary-title>
                <v-icon center large color="success" v-show="page===4">check_circle</v-icon>
                <h1 class="black--text">{{ items[page-1].subtitle }}</h1>
            </v-card-title>
            <v-card-text>
                <reservation v-show="page===1" :reservation="reservation"></reservation>
                <personal-details v-show="page===2" :reservation="reservation"></personal-details>
                <payment v-show="page===3" :reservation="reservation"></payment>
                <summary v-show="page===4" :reservation="reservation"></summary>
            </v-card-text>
        </v-parallax>
        <v-bottom-nav absolute height="70px" color="accent">
            <v-btn flat @click="nextPage">
                <span class="title white--text font-weight-black">{{ items[page-1].btnLabel }}</span>
            </v-btn>
        </v-bottom-nav>
    </v-card>
</template>

<script>
import Reservation from "./Reservation";
import PersonalDetails from "./PersonalDetails";
import Payment from "./Payment";
import Summary from "./Summary";

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
  components: {
    reservation: Reservation,
    "personal-details": PersonalDetails,
    payment: Payment,
    summary: Summary
  },
  data: () => ({
    page: 1,
    items: [
      {
        title: "Make a Reservation",
        subtitle: "Room Availability",
        btnLabel: "Proceed"
      },
      {
        title: "Personal Details",
        subtitle: "Your Booking Data",
        btnLabel: "Proceed to Payment"
      },
      {
        title: "Complete your Booking",
        subtitle: "Your Payment Details",
        btnLabel: "Confirm Booking"
      },
      {
        title: "Your Booking Summary",
        subtitle: "Your booking is confirmed!",
        btnLabel: "Close"
      }
    ],
    reservation: {
      reservation_details: {
        room: "",
        check_in_date: "",
        check_out_date: "",
        guest: "",
        child: ""
      },
      personal_details: {
        name: "",
        email: "",
        confirm_email: "",
        mobile: "",
        special_request: ""
      },
      card: {
        type: "",
        name: "",
        number: "",
        expiration_date: ""
      }
    },
    sender: ""
  }),
  created() {
    if (this.getUrlVars().room) {
      this.reservation.reservation_details.room = this.getUrlVars().room;
      this.sender = this.getUrlVars().sender;
    } else {
      this.reservation.reservation_details.room = this.$store.state.book.room;
      this.sender = this.$store.state.book.sender;
    }
    console.log(
      "Hotelss: " +
        this.reservation.reservation_details.room +
        ":::" +
        this.sender
    );
  },
  methods: {
    getUrlVars() {
      var vars = {};
      var parts = window.location.href.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
          vars[key] = value;
        }
      );
      return vars;
    },
    nextPage() {
      switch (this.page) {
        case 1:
          this.validatePage1();
          break;
        case 2:
          this.validatePage1();
          break;
        case 3:
          this.validateAndSave();
          break;
        case 4:
          this.close();
          break;
      }
    },
    validatePage1() {
      this.page++;
    },
    validatePage2() {
      this.page++;
    },
    validateAndSave() {
      this.$http.post("/api/reservation", this.reservation).then(result => {
        if (result.data.success) {
          this.page++;
        }
      });
    },
    close() {
      this.$http
        .post("/callback/book", {
          sender: this.sender,
          keyword: "BOOKING_SUMMARY"
        })
        .then(result => {
          this.exit();
        });
    },
    exit() {
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
