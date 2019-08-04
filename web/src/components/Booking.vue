<template>
    <v-card>
        <v-toolbar color="primary">
            <v-toolbar-title class="white--text">Hotel Booking</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-form>
                <v-text-field name="name" label="Destination" prepend-icon="location_on" id="id"></v-text-field>
                <v-menu ref="menuRef" lazy :close-on-content-click="false" v-model="menuCheckin" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px" :return-value.sync="datePickerValue">
                    <v-text-field slot="activator" label="Check-in" v-model="datePickerValue" prepend-icon="event" readonly></v-text-field>
                    <v-date-picker v-model="datePickerValue" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menuCheckin = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.menuRef.save(date)">OK</v-btn>
                    </v-date-picker>
                </v-menu>
                <v-menu ref="menuRef" lazy :close-on-content-click="false" v-model="menuCheckout" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px" :return-value.sync="datePickerValue">
                    <v-text-field slot="activator" label="Check-out " v-model="datePickerValue" prepend-icon="event" readonly></v-text-field>
                    <v-date-picker v-model="datePickerValue" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menuCheckout = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.menuRef.save(date)">OK</v-btn>
                    </v-date-picker>
                </v-menu>
                <v-text-field name="name" label="Total Guest(s)" prepend-icon="hotel" id="id" type="number"></v-text-field>
                <v-btn color="success" block @click="search">Search</v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                menuCheckin: false,
                menuCheckout: false,
                datePickerValue: ''
            }
        },
        methods: {
            search() {
                this.$router.push('/hotels')
            }
        }
    }
</script>

<style>

</style>
