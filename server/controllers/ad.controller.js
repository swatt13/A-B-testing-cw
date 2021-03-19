import AdStats from '../models/ad.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './../helpers/dbErrorHandler.js'

const create = async (req, res) => {
    const ad = new AdStats(req.body)
    try {
        await ad.save();
        return res.status(200).json({
            message: "Ad click saved"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}
const list = async (req, res) => {
    try {
        let ads = await AdStats.find().select('wasClicked option')
        res.json(ads)
    } catch (err) {
        return res.status(400).json({
            error:errorHandler.getErrorMessage(err)
        })
    }
}

export default {
    create,
    list
}