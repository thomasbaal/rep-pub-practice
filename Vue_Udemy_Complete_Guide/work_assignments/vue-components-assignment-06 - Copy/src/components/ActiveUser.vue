<template>
  <section>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
  </section>
</template>


<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      username: "",
      userage: "",
    };
  },
};
</script>