console.log(Vue.version)  

const app = Vue.createApp({
    data: () => ({
      basePrice: 100,
      message:'Hello Vue.js!',
      number: 100,
      ok: true

      // message1:'Hello <span style="color:red;">Vue.js!!!!!'
    }),
    computed: {
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
    }, methods: {
      reversedMessageMethod: function() {
        return this.message.split('').reverse().join('')
    // , methods: {
    //   clickHndler: function(event) {
    //     this.message = this.message.split("").reverse().join("")
    //   }
    // }
      },
      methodsNumber: function(){
        return Math.random()
      }
    }
  })
  app.mount('#app')
  