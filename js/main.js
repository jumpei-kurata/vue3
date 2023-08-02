console.log(Vue.version)  

const app = Vue.createApp({
    data: () => ({
      basePrice: 100,
      message:'Hello Vue.js!',
      number: 100,
      ok: true,
      km: 0,
      m: 0,
      firstName: "",
      lastName: "",
      fullName: "",
      colors: [
        {name: "red"},
        {name: "green"},
        {name: "blue"}
      ]

      // message1:'Hello <span style="color:red;">Vue.js!!!!!'
    }),
    // watch: {
    //   message: function(newValue, oldValue) {
    //     console.log("new: %s, old: %s", newValue, oldValue)
    //   }
    // },
    watch: {
      colors: {
        handler: function(newValue, oldValue) {
          console.log("update!")
        },
        deep: true
      },
      // firstName: function(value) {
      //   this.fullName = value + " " + this.lastName
      // },
      // lastName: function(value) {
      //   this.fullName = this.firstName + " " + value 
      // },
      // km: function(value) {
      //   console.log(value)
      //   this.km = value
      //   this.m = value*1000
      // },
      // m: function(value) {
      //   this.km = value / 1000
      //   this.m = value
      // }
    },
    computed: {
      fullName: function() {
        return this.firstName + " " + this.lastName
      },
      computedNumber: function() {
        return Math.random()
      },
      taxIncludedPrice: {
        get: function() {
          return this.basePrice * 1.1
        },
        set: function(value) {
          this.basePrice = value / 1.1
        }
      },
      reversedMessage: function() {
        return this.message.split('').reverse().join('')
      }
    }, 
    methods: {
      // reversedMessageMethod: function() {
      //   return this.message.split('').reverse().join('')
    // , methods: {
    //   clickHndler: function(event) {
    //     this.message = this.message.split("").reverse().join("")
    //   }
    // }
      // },
      // methodsNumber: function(){
      //   return Math.random()
      // },
      onClick: function(event) {
        this.colors[1].name = "white"
      }
    }
  })
  app.mount('#app')
  