<template>
  <div class="create">
    <v-breadcrumbs divider="-">
      <v-breadcrumbs-item to="/">Clientes</v-breadcrumbs-item>
      <v-breadcrumbs-item>Cadastrar Cliente</v-breadcrumbs-item>
    </v-breadcrumbs>
    <h1 class="text-left my-4">Cadastrar Cliente</h1>
    <v-progress-linear
      v-if="loading"
      indeterminate
      color="cyan"
    ></v-progress-linear>
    <v-stepper v-model="stepper">
      <v-stepper-header>
        <v-stepper-step
          :complete="stepper > 1"
          editable
          step="1"
        >
          Geral
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          :complete="stepper > 2"
          :editable="validStepGeneral"
          step="2"
        >
          Endereço
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step 
            :editable="validStepAddress"
            step="3"
          >
          Contato
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-row justify="center" class="text-left my-4">
            <v-col cols="12" sm="8" md="6">
              <v-row justify="center">
                <v-form
                  ref="formGeneral"
                  v-model="validStepGeneral">
                  <v-row>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Nome"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="rg"
                        :rules="rgRules"
                        label="RG"
                        type="number"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="cpf"
                        :rules="cpfRules"
                        label="CPF"
                        type="number"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col>
                      <v-menu
                        ref="birthdayDate"
                        v-model="birthdayDate"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="290px"
                        min-width="auto"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="dateFormatted"
                            label="Data"
                            :rules="dateRules"
                            hint="MM/DD/YYYY format"
                            persistent-hint
                            v-bind="attrs"
                            @blur="birthday = parseDate(dateFormatted)"
                            v-on="on"
                          ></v-text-field>
                        </template>
                        <v-date-picker
                          v-model="birthday"
                          no-title
                          @input="birthdayDate = false"
                        ></v-date-picker>
                      </v-menu>
                    </v-col>

                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="salary"
                        :rules="salaryRules"
                        label="Salário"
                        type="number"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-form>
              </v-row>
            </v-col>
          </v-row>

          <v-btn
            color="primary"
            @click="nextStep1()"
          >
            Avançar
          </v-btn>

          <v-btn text to="/">
            Cancelar
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-row justify="center" class="text-left my-4">
            <v-col cols="12" sm="8" md="6">
              <v-row justify="center">
                <v-form
                  ref="formAddress"
                  v-model="validStepAddress">
                  <v-row>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="address"
                        :rules="addressRules"
                        label="Endereço"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="addressNumber"
                        :rules="numberRules"
                        label="Número"
                        type="number"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="addressComplement"
                        label="Complemento"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="addressDistrict"
                        :rules="districtRules"
                        label="Bairro"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                    >
                      <v-autocomplete
                        v-model="addressCity"
                        :rules="cityRules"
                        :items="cities"
                        label="Cidade"
                        no-data-text="Nenhuma cidade encontrada"
                        required
                      ></v-autocomplete>
                    </v-col>

                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="addressZipcode"
                        :rules="zipcodeRules"
                        label="CEP"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-form>
              </v-row>
            </v-col>
          </v-row>

          <v-btn
            color="primary"
            @click="nextStep2()"
          >
            Avançar
          </v-btn>

          <v-btn text @click="previousStep()">
            Voltar
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-row justify="center" class="text-left my-4">
            <v-col cols="12" sm="8" md="6">
              <v-row justify="center">
                <v-form
                  ref="formContact"
                  v-model="validStepContact">
                  <v-row>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="phone"
                        :rules="phoneRules"
                        label="Telefone"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="cellphone"
                        :rules="cellphoneRules"
                        label="Celular"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-form>
              </v-row>
            </v-col>
          </v-row>

          <v-btn
            color="primary"
            @click="finalStep()"
            :disabled="loading"
          >
            <v-icon class="mr-2">mdi-account-plus</v-icon> Cadastrar
          </v-btn>

          <v-btn text @click="previousStep()">
            Voltar
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CustomerService from '../services/CustomerService';
import GeoService from '../services/GeoService';

export default Vue.extend({
  data: () => ({
      cities: [],
      loading: false,
      stepper: 1,
      validStepGeneral: false,
      validStepAddress: false,
      validStepContact: false,
      name: '',
      nameRules: [
        (v:any) => !!v || 'Campo obrigatório',
        (v:any) => v.length > 2 || 'Nome deve ser maior que 2 caracteres',
      ],
      rg: '',
      rgRules: [
        (v:any) => !!v || 'Campo obrigatório',
      ],
      cpf: '',
      cpfRules: [
        (v:any) => !!v || 'Campo obrigatório',
      ],
      salary: '',
      salaryRules: [
        (v:any) => !!v || 'Campo obrigatório',
      ],
      birthday: ''  as string | null,
      dateFormatted: ''  as string | null,
      dateRules: [
        (v:any) => !!v || 'Campo obrigatório',
      ],
      birthdayDate: false,
      address: '',
      addressRules: [
        (v:any) => !!v || 'Campo obrigatório',
      ],
      addressNumber: '',
      numberRules: [
        (v:any) => !!v || 'Campo obrigatório',
      ],
      addressComplement: '',
      addressDistrict: '',
      districtRules: [
        (v:any) => !!v || 'Campo obrigatório',
      ],
      addressCity: '',
      cityRules: [
        (v:any) => !!v || 'Campo obrigatório',
      ],
      addressZipcode: '',
      zipcodeRules: [
        (v:any) => !!v || 'Campo obrigatório',
      ],
      email: '',
      emailRules: [
        (v:any) => !!v || 'Campo obrigatório',
        (v:any) => /.+@.+/.test(v) || 'Email inválido',
      ],
      phone: '',
      phoneRules: [
        (v:any) => !!v || 'Campo obrigatório',
      ],
      cellphone: '',
      cellphoneRules: [
        (v:any) => !!v || 'Campo obrigatório',
      ],
    }),
  methods: {
    nextStep1() {
      (this.$refs.formGeneral as Vue & { validate: () => boolean }).validate();
      console.log('validStepGeneral',this.validStepGeneral);
      if(this.validStepGeneral) {
        console.log('Birthday',this.birthday)
        this.stepper = 2
      }
    },
    nextStep2() {
      (this.$refs.formAddress as Vue & { validate: () => boolean }).validate();
      console.log('validStepGeneral',this.validStepAddress);
      if(this.validStepAddress) {
        this.stepper = 3
      }
    },
    async finalStep() {
      (this.$refs.formContact as Vue & { validate: () => boolean }).validate();
      if(this.validStepContact) {
        console.log('Cadastrado!')
        console.log('Birthday',this.birthday)
        let date = new Date(this.birthday || new Date())
        const body = {
          name: this.name,
          birthday: date,
          rg: this.rg,
          cpf: this.cpf,
          salary: this.salary,
          address: this.address,
          addressNumber: this.addressNumber,
          addressComplement: this.addressComplement,
          addressDistrict: this.addressDistrict,
          addressCity: this.addressCity,
          addressZipcode: this.addressZipcode,
          email: this.email,
          phone: this.phone,
          cellphone: this.cellphone,
        }
        try {
          this.loading = true;
          await CustomerService.setCustomer(body);
          this.$router.push('/')
        } catch (err) {
          console.warn(err)
        } finally {
          this.loading = false;
        }
      }
    },
    previousStep() {
      this.stepper -= 1
    },
    async getCities() {
        this.loading = true;
        try {
          const citiesData = await GeoService.getCities();
          this.cities = citiesData.map((city: any) => {
            return city.nome
          });
        } catch (err) {
          console.warn('citiesData err',err);
          this.cities = [];
        } finally {
          this.loading = false;
        }
      },
      parseDate (date: string) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      formatDate (date: string | null) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${day}/${month}/${year}`
      },
  },
  created: function () {
    this.getCities();
  },
  watch: {
      birthday () {
        this.dateFormatted = this.formatDate(this.birthday);
      },
    },

})
</script>