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
          <v-col cols="12" sm="4">Telefone</v-col>
          <v-col cols="12" sm="8">
            <v-text-field
                solo dense readonly hide-details
                :value="customer.phone"
              ></v-text-field>
          </v-col>
        </v-row>

        <v-row align="center">
          <v-col cols="12" sm="4">Celular</v-col>
          <v-col cols="12" sm="8">
            <v-text-field
                solo dense readonly hide-details
                :value="customer.cellphone"
              ></v-text-field>
          </v-col>
        </v-row>
        
        <v-row align="center">
          <v-col cols="12" sm="4">Email</v-col>
          <v-col cols="12" sm="8">
            <v-text-field
                solo dense readonly hide-details
                :value="customer.email"
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
export default class ContactDetails extends Vue {
  @Prop() private customer!: Customer | null;
}
</script>