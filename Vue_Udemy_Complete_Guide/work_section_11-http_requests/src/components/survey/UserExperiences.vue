<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">
          Load Submitted Experiences
        </base-button>
      </div>
      <p v-if="isLoading">Loading...</p>
      <ul v-else-if="!isLoading && results && results.length">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "./SurveyResult.vue";

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
    };
  },
  methods: {
    //trigger when button is clicked
    loadExperiences() {
      /*
      
      */
      this.isLoading = true;
      fetch(
        "https://vue-http-demo-5a731-default-rtdb.europe-west1.firebasedatabase.app/surveys.json"
      )
        .then((response) => {
          this.isLoading = false;
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoading = false;
          // console.log(data);
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          //below: cant point to this.results from inside nested functions.
          // fixed by setting it to aan arrow function
          this.results = results;
        });
    },
  },
  // mounted is a vue hook that triggers when "this" component runs,so an autorun in this case
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>