<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
    >
      Stored Resources
    </base-button>
    <base-button
      @click="setSelectedTab('add-resources')"
      :mode="storedResButtonMode"
    >
      Add Resource
    </base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The Official Vue Documentation",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Find everything on Google",
          link: "https://google.com",
        },
      ],
    };
  },
  // providing the resources to all lower level components.
  provide() {
    return {
      resources: this.storedResources,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resources" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

