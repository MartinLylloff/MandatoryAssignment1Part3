const app = Vue.createApp({
  data() {
    return {
      word: "",
      amount: undefined,
      result: "",
    };
  },
  methods: {
    duplicate() {
      this.result = "";
      if (this.amount < 0) this.result = "Cannot be negative";
      for (i = 0; i < this.amount; i++) {
        this.result += this.word;
      }
    },
  },
});
