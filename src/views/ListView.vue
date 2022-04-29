<template>
  <div class="list">
    <v-row class="my-4 px-2" justify="space-between" align="center">
      <h1>Clientes</h1>
      <v-btn
        to="/create"
        color="primary"
        elevation="2"
      ><v-icon class="mr-2">mdi-account-plus</v-icon> Cadastrar Cliente</v-btn>
    </v-row>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr class="text-left">
            <th>
              Código
            </th>
            <th>
              Nome
            </th>
            <th>
              Email
            </th>
            <th>
              Telefone
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in customers"
            :key="item.id"
            class="text-left"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td class="text-right text-decoration-none">
              <router-link
                :to="{
                  name: 'details',
                  params: {id: item.id}}"
                class="text-decoration-none">
                <v-icon color="secondary">mdi-account-details</v-icon>
              </router-link>
              <router-link :to="{
                  name: 'update',
                  params: {id: item.id}}"
                class="text-decoration-none">
                <v-icon color="primary">mdi-account-edit</v-icon>
              </router-link>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-progress-linear
      v-if="loading"
      indeterminate
      color="cyan"
    ></v-progress-linear>
    <span v-if="error">Algum erro ocorreu!</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import CustomerService from '../services/CustomerService';
  import { Customer } from '@/models';

  export default Vue.extend({
    data: function () {
      return {
        customers: [] as Customer[],
        error: false,
        loading: true,
      }
    },
    created: function () {
      this.getCustomers();
    },
    methods: {
      async getCustomers() {
        this.loading = true;
        try {
          const customersData = await CustomerService.getCustomers();
          console.log('customersData',customersData);
          this.customers = customersData;
        } catch (err) {
          console.warn('customersData err',err);
          this.customers = [];
          this.error = true;
        } finally {
          this.loading = false;
        }
      },
    }
  });
</script>