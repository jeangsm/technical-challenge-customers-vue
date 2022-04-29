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
          <v-col cols="12" sm="4">Endereço</v-col>
          <v-col cols="12" sm="8">
            <v-text-field
                solo dense readonly hide-details
                :value="customer.address"
              ></v-text-field>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="12" sm="4">Número</v-col>
          <v-col cols="12" sm="8">
            <v-text-field
                solo dense readonly hide-details
                :value="customer.addressNumber"
              ></v-text-field>
          </v-col>
        </v-row>
        
        <v-row align="center">
          <v-col cols="12" sm="4">Complemento</v-col>
          <v-col cols="12" sm="8">
            <v-text-field
                solo dense readonly hide-details
                :value="customer.addressComplement"
              ></v-text-field>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="12" sm="4">Bairro</v-col>
          <v-col cols="12" sm="8">
            <v-text-field
                solo dense readonly hide-details
                :value="customer.addressDistrict"
              ></v-text-field>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="12" sm="4">Cidade</v-col>
          <v-col cols="12" sm="8">
            <v-text-field
                solo dense readonly hide-details
                :value="customer.addressCity"
              ></v-text-field>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="12" sm="4">CEP</v-col>
          <v-col cols="12" sm="8">
            <v-text-field
                solo dense readonly hide-details
                :value="customer.addressZipcode"
              ></v-text-field>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
    
  </div>
</template>

<script setup lang="ts">
import { Customer } from '@/models';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AddressDetails extends Vue {
  @Prop() private customer!: Customer | null;
}
</script>