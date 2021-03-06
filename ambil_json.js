Vue.createApp({
    data() {
      return {
        message: "Hello Vue!",
        artikel: [],
        article: null,
      };
    },
    methods: {
      getArticle()
      {
        axios
          .get("https://raw.githubusercontent.com/DavidSKL78/tekweb2022/main/artikel.json")
          .then((res) => {
            console.log(res.data);
            this.artikel = res.data;
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getMarkdownData()
      {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const article = urlParams.get('article');        
        var converter = new showdown.Converter();
        axios
          .get(
            "https://raw.githubusercontent.com/DavidSKL78/tekweb2022/main/artikel/"+article
          )
          .then((res) => {           
            var html = converter.makeHtml(res.data);           
            this.article = html;
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    beforeMount() {
      this.getArticle(),
      this.getMarkdownData()
    },
  }).mount("#app");
