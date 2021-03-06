const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { leaseId } } = req

    logic.retrievePaymentByLeaseId(leaseId)
        .then(payment => res.json(success(payment)))
        .catch(err => res.json(fail(err.message)))
}