<template>
  <div class="details">
    <v-breadcrumbs divider="-">
      <v-breadcrumbs-item to="/">Clientes</v-breadcrumbs-item>
      <v-breadcrumbs-item>Detalhes</v-breadcrumbs-item>
    </v-breadcrumbs>
    <h1 class="text-left my-4">Detalhes</h1>
    <v-progress-linear
      v-if="loading"
      indeterminate
      color="cyan"
    ></v-progress-linear>
    <v-tabs
      fixed-tabs>
      <v-tabs-slider></v-tabs-slider>
      <v-tab key="1">
        <v-icon>mdi-account-box</v-icon> Geral
      </v-tab>
      <v-tab key="2">
        <v-icon>mdi-map-marker</v-icon> Endereço
        </v-tab>
      <v-tab key="3">
        <v-icon>mdi-phone</v-icon> Contato
      </v-tab>

      <v-tab-item key="1">
        <general-details v-bind:customer="customer"></general-details>
      </v-tab-item>

      <v-tab-item key="2">
        <address-details v-bind:customer="customer"></address-details>
      </v-tab-item>

      <v-tab-item key="3">
        <contact-details v-bind:customer="customer"></contact-details>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script lang="ts">
import AddressDetails from '@/components/details/AddressDetails.vue';
import ContactDetails from '@/components/details/ContactDetails.vue';
import GeneralDetails from '@/components/details/GeneralDetails.vue';
import { Customer } from '@/models';
import CustomerService from '@/services/CustomerService';
import Vue from 'vue'

export default Vue.extend({
  data: function () {
      return {
        customer: null as Customer | null,
        error: false,
        loading: false
      }
    },
  created: function () {
    this.getCustomerById(this.$route.params.id);
  },
  methods: {
    async getCustomerById(id: string | number) {
      try {
        this.loading = true;
        const customersData = await CustomerService.getCustomerById(id);
        console.log('customersData',customersData);
        this.customer = customersData;
      } catch (err) {
        console.warn('customersData err',err);
        this.customer = null;
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
  components: {
    AddressDetails,
    ContactDetails,
    GeneralDetails
  }
})
</script>