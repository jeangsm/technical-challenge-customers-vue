import axios from 'axios';

export default class GeoService {
  static async getCities() {
    const res = await axios.get(
      'https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome'
    );
    return res.data;
  }
} 
