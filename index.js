// module.exports = require('./lib/entypay');

// function addZero(num) {
//     return num > 9 ? num : '0' + num
// }
//
// let formatter = {
//     date: null,
//     init(date) {
//         try {
//             if (date) {
//                 this.date = new Date(date)
//             }
//         } catch (error) {
//             console.info(error)
//         }
//     },
//     getDateTime () {
//         let date = this.date || new Date()
//         let res = ''
//         res = date.getFullYear() + '-' + addZero(date.getMonth() + 1) + '-' +addZero(date.getDate())
//             + ' ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds())
//         return res
//     },
//     getDate () {
//         return this.getDateTime().split(' ')[0]
//     },
//     getTime () {
//         return this.getDateTime().split(' ')[1]
//     }
// }
//
// module.exports = formatter

let entyPay = {
    serialNumber: '',
    payRes: '',
    pay() {
        // eslint-disable-next-line no-undef
        kraken.methodChannel.invokeMethod('payment', this.serialNumber)
            .then(result => {
                this.payRes = result.toString();
            })
            .catch(err => {
                this.payRes = err.toString();
            });
    }
}

module.exports = entyPay


