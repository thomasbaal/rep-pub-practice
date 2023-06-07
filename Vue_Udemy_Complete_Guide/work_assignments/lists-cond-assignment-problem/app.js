const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      isTasklistVisible: true,
      tasks: ["task_1"],
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredValue);
      console.table(this.tasks);
    },
    toggleTaskList() {
      this.isTasklistVisible = !this.isTasklistVisible;
    },
    list_Visibility(event) {
      console.log();
      // change the caption
    },
  },
  computed: {
    buttonCaption() {
      return this.listActive ? "Hide Tasks" : "Show Tasks";
    },
  },
});
app.mount("#assignment");
