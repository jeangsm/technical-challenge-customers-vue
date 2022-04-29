<template>
  <div>
    <!-- <v-simple-table>
      <template>
        <table v-if="customer" class="text-left">
          <tr>
            <th>Código:</th>
            <td>{{ customer.id }}</td>
          </tr>
          <tr>
            <th>Nome:</th>
            <td>{{ customer.name }}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{{ customer.email }}</td>
          </tr>
        </table>
      </template>
    </v-simple-table>
    <ul v-if="customer">
      <li>{{ customer.id }}</li>
      <li>{{ customer.name }}</li>
      <li>{{ customer.email }}</li>
    </ul> -->
    <v-row justify="center" v-if="customer" class="text-left my-4">
      <v-col cols="12" sm="8" md="6">
        <v-row align="center">
          <v-col cols="12" sm="4">Código</v-col>
          <v-col cols="12" sm="8">
            <v-text-field
                solo dense readonly hide-details
                :value="customer.id"
              ></v-text-field>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="12" sm="4">Nome</v-col>
          <v-col cols="12" sm="8">
            <v-text-field
                solo dense readonly hide-details
                :value="customer.name"
              ></v-text-field>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="12" sm="4">Data de nascimento</v-col>
          <v-col cols="12" sm="8">
            <v-text-field
                solo dense readonly hide-details
                :value="customer.birthday"
              ></v-text-field>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="12" sm="4">RG</v-col>
          <v-col cols="12" sm="8">
            <v-text-field
                solo dense readonly hide-details
                :value="customer.rg"
              ></v-text-field>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="12" sm="4">CPF</v-col>
          <v-col cols="12" sm="8">
            <v-text-field
                solo dense readonly hide-details
                :value="customer.cpf"
              ></v-text-field>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="12" sm="4">Salário</v-col>
          <v-col cols="12" sm="8">
            <v-text-field
                solo dense readonly hide-details
                :value="customer.salary"
              ></v-text-field>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
    
  </div>
</template>

<script setup lang="ts">
import { Customer } from '@/models';
// import Vue from 'vue'

// export default Vue.extend({
//   data: () => {
//     return {
//       customerDetails: null as Customer | null,
//     }
//   },
//   props: {
//     customer: {
//       type: Object as () => Customer | null,
//     }
//   },
//   mounted() {
//     this.customerDetails = this.customer;
//   }
// })

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class GeneralDetails extends Vue {
  @Prop() private customer!: Customer | null;
}
</script>