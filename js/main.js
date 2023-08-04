const helloComp = {
  template: "<p>Hello</p>"
}

const buttonCounter = {
  template: "<div><span>count: </span><button v-on:click='countUp'>{{count}}</button></div>",
  data: () => ({
    count: 0

  }),
  methods: {
    countUp: function(event) {
      this.count++
    }
  }
}

const app = Vue.createApp({
  data: () => ({
    // message: "",
    show: true,
  }),
  components: {
    // "hello-component": helloComp
    "button-counter": buttonCounter
  },
  methods: {
     clickHandler: function() {
  
    },
  }
})

// app.component('hello-component', {
//   template: "<p>Hello</p>"
// })



app.mount('#app')