console.log(Vue.version)

const app = Vue.createApp({
    data: () => ({
      now: "-",
      toggle: true,
      message: "Hello Vue.js!", 
      count: 0,
      user: {
        lastName: "kurata",
        firstName: "jumpei",
        prefecture: "Tokyo"
      },
      colors: ["red", "green", "blue"]
    }),
    methods: {
      onClick: function(){
        console.log("onClick!")
        this.now = new Date().toLocaleString()
      }
    }
  })
  app.component("hello-component", {
    template: "<p>Hello!</p>"
  })
  app.mount('#app')
  