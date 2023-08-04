const app = Vue.createApp({
  data: () => ({
    toggle: false,
    counter: 0,
    message: "27",
    checked: false,
    colors: [],
    color: "",
    selected: "",

    // isLarge: true,
    // hasError: true,
    // color: "y",
    fontSize: 36,
    classObject: {
      large: true,
      "text-danger": true,
    },
    largeClass: {
      "large": true,
      "bg-gray": true
    },
    dangerClass: {
     "text-danger": true
    },
    isLarge: true

  //  items: null,
  //  keyword: "",
  //  message: ""
  // }),
  // watch: {
  //   keyword: function(newKeyword, oldKeyword) {
  //     console.log(newKeyword)
  //     this.message = "Waiting for y to stop typing..."
  //     this.debouncedGetAnswer()
  //   }
  // },
  // mounted: function() {
  //   // this.keyword = "JavaScript"
  //   // this.getAnswer()
  //   this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  // },
  // methods: {
  //   getAnswer: function() {
  //     if(this.keyword === "") {
  //       console.log("karamoji")
  //       this.items = null
  //       return 
  //     }

  //     this.message = "Loading..."
  //     const vm = this
  //     const params = {page: 1, per_page: 20, query: this.keyword}
  //     axios.get("https://qiita.com/api/v2/items", {params})
  //       .then(function(response){
  //         // console.log(response)
  //         vm.items = response.data
  //       })
  //       .catch(function(error){
  //         vm.message = "Error" + error
  //       })
  //       .finally(function(){
  //         vm.message = ""
  //       })

  //   }
  // }
  }),
  methods: {
    // clickHandler: function(event) {
    // clickHandler: function($event, message) {
    clickHandler: function() {
      this.message = new Date().toLocaleTimeString()
      // console.log($event)
      // this.counter++
      // console.log(event)
      // console.log(event.target)
      // console.log(event.target.tagName)
      // console.log(event.target.innerHTML)
      // console.log(event.target.type)
      // console.log(event.target.id)
    }
  }
})
app.mount('#app')