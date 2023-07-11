'use strict'

let iosApp = new Vue({
    el: '#app',
    data: {
        message: "Hello Everyone",

    }
});

let app1 = new Vue({
    el: '#app1',
    data: {
        msg: 'Vous avez affiché cette page le ' + new Date().toLocaleString(),
    }
})

let app2 = new Vue({
    el: '#app2',
    data: {
        seen: true,
        motor: 'Mercedes Rail'
    }
})

let app3 = new Vue({
    el: '#app3',
    data: {
        motorBrand: [
           'mercedes',
            'toyota',
            'peugeot',
            'rollroys',
            'camry'
        ]
    }
})