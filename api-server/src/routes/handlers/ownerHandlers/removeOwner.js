const { success, fail } = require('../api-utils')
const logic = require('../../../logic')

module.exports = (req, res) => {
    const { params: { documentId } } = req

    logic.removeOwner(documentOwner)
        .then(owner => res.json(success(owner)))
        .catch(err => res.json(fail(err.message)))
}