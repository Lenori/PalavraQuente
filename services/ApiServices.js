const api = 'http://35.247.234.76/palavraquente/';

export const ApiService = {

  async get(endpoint) {

      return await fetch(api + endpoint)
            .then(response => {return response.text()})
              .then(data => {return data})

  }

}
