import { CustomerBody } from '@/models';
import axios from 'axios';

export default class CustomerService {
//   static async getMovies(query = '', by = 'title', page = 0) {
//     const res = await axios.get(
//       `http://localhost:5000/api/v1/movies?${by}=${query}&page=${page}`
//     );
//     return res.data;
//   }

//   static async getMovie(id) {
//     const res = await axios.get(
//       `http://localhost:5000/api/v1/movies/id/${id}`
//     );
//     return res.data;
//   }

  static async getCustomers() {
    const res = await axios.get(
      process.env.VUE_APP_API_URL + '/customers'
    );
    return res.data;
  }

  static async getCustomerById(id: string | number) {
    const res = await axios.get(
      process.env.VUE_APP_API_URL + '/customers/' + id
    );
    return res.data;
  }

  static async setCustomer(body: CustomerBody) {
    const res = await axios.post(
      process.env.VUE_APP_API_URL + '/customers/',
      body
    );
    return res.data;
  }
} 
