import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/policy",
      component:require("@/components/Privacy").default
    },

    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/search",
      name: "Booking",
      component: require("@/components/Booking").default
    },
    {
      path: "/hotels",
      name: "Hotels",
      component: require("@/components/HotelListing").default
    },
    // {
    //   path: "/book",
    //   name: "Book",
    //   component: require("@/components/Book").default
    // },
    // {
    //   path: "/payment",
    //   name: "Payment",
    //   component: require("@/components/Payment").default
    // },
    {
      path: "/view/hotel",
      name: "view_hotel_details",
      component: require("@/components/ViewHotelDetails").default
    },
    {
      path: "/view/book",
      name: "view_book_details",
      component: require("@/components/ViewBookDetails").default
    },
    {
      path: "/studio",
      name: "studio",
      component: require("@/components/Studio").default
    },
    {
      path: "/book",
      name: "hotel_booking",
      component: require("@/components/HotelBooking").default
    },
    {
      path: "/deluxe",
      name: "deluxe",
      component: require("@/components/Deluxe").default
    },
    {
      path: "/suite",
      name: "suite",
      component: require("@/components/Suite").default
    },
    {
      path: "/about",
      name: "about",
      component: require("@/components/About").default
    },
    {
      path: "/meeting",
      name: "meeting",
      component: require("@/components/Meeting").default
    }, {
      path: "/bookmeeting",
      name: "bookMeeting",
      component: require("@/components/BookMtg").default
    }, {
      path: "/request",
      name: "price",
      component: require("@/components/RequestPrice").default
    }
    // {
    //   path: "/date",
    //   name: "date",
    //   component: require("@/components/Date").default
    // }
  ]
});
