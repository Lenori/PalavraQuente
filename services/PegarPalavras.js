import {ApiService} from './ApiServices';

const endpoint = 'palavras.php';

export const PegarPalavras = {

  async list() {

     return await ApiService.get(endpoint);

  }

}
