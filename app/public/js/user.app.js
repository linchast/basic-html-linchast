var userApp = new Vue({
  el: '#randomUser',
  data: {
    person: {
      "gender": "",
      "name": {
        "title": "",
        "first": "",
        "last": ""
      },
      "location": {
        "street": "",
        "city": "",
        "state": "",
        "postcode": "",
        "coordinates": {
          "latitude": "",
          "longitude": ""
        },
        "timezone": {
          "offset": "",
          "description": ""
        }
      },
      "email": "",
      "login": {
        "uuid": "",
        "username": "",
        "password": "",
        "salt": "",
        "md5": "",
        "sha1": "",
        "sha256": ""
      },
      "dob": {
        "date": "",
        "age": null
      },

      "picture": {
        "large": "",
        "medium": "",
        "thumbnail": ""
      },
      "nat": ""
    }
  },
  methods: {
    fetchUser() {
      fetch('https://randomuser.me/api/')
      .then( response => response.json() )
      .then( json => {userApp.person = json.results[0]})
      ;

      // Means the same at this
      // fetch('https://randomuser.me/api/')
      // .then(function(response) {return response.json()})
      // .then(function(json) {waitingApp.people = json});

    }
  },
  created() {
    this.fetchUser();
  }
})
