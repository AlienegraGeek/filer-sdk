let entyPay = {
    serialNumber: '',
    payRes: '',
    pay() {
        console.info('------start enty pay-------')
        // eslint-disable-next-line no-undef
        kraken.methodChannel.invokeMethod('payment', this.serialNumber)
            .then(result => {
                this.payRes = result.toString();
                console.info('pay result' + this.payRes.toString())
            })
            .catch(err => {
                this.payRes = err.toString();
                console.info('pay error' + this.payRes.toString())
            });
    }
}

module.exports = entyPay

