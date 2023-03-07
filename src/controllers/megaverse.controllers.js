const MegaverseServices = require('../services/megaverse.services')

/**
 * @description Controller that creates a custom end-goal map into the corssmint API
 * @param {object} req request object
 * @param  {object} res response object
 * @returns {Promise} Promise response 
 */

const loadCustomMap = async (req, res) => {
  try {
    const response = await MegaverseServices.parseCustomMap();

    res.send(response)
  } catch (err) {
    res.send(err);
    throw new Error(err);
  }
}

module.exports = {
  loadCustomMap
}