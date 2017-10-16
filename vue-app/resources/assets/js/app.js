new Vue({
  el: '#app',

  data: {
    skills: []
  },

  mounted() {
    // Make an ajax request to our server
    // fetch()
    // $.ajax(), $.getJson()
    // axios

    axios.get('/skills').then(response => this.skills = response.data);
  }
});
