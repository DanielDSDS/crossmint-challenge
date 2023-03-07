const axios = require('axios');
const { Soloon, Cometh, Polyanet } = require('../models/index');

/**
 * @description Service to insert every desired astral object into map  
 * @returns {object} returns successfull response 
 */

const parseCustomMap = async () => {
  const response = await getGoalMap();
  const mapRows = response.data.goal;

  try {

    for (let i = 0; i < mapRows.length; i++) {
      for (let j = 0; j < mapRows[i].length; j++) {
        if (mapRows[i][j] !== 'SPACE') {
          const obj = insertAstralObjectFromText(mapRows[i][j], i, j);
          console.log(obj)
          await obj.insertAstralObject()
          await new Promise(resolve => setTimeout(resolve, 2000))
        }
      }
    }

    return {
      status: 200,
      message: 'Successfully inserted objects into map'
    };
  } catch (err) {
    throw err;
  }
}

/**
 * @description Helper function to get goal map array 
 * @returns {object} http response 
 */

const getGoalMap = async () => {
  const response = await axios.get('https://challenge.crossmint.io/api/map/4406a548-c08c-42ab-9df4-e598fc8567e8/goal')
  return response;
}

/**
 * @description Helper function to get goal map array 
 * @param {text} text from the current matrix cell  
 * @param {row} row current row from the map 
 * @param {column} column current column from the map 
 * @returns {object} returns corresponding astral object type   
 */
const insertAstralObjectFromText = (text, row, column) => {
  if (text === 'POLYANET') {
    const polyanet = new Polyanet(row, column);
    return polyanet;
  } else {
    const property = text.split('_')[0];
    const type = text.split('_')[1];
    if (type === 'COMETH') {
      const cometh = new Cometh(row, column, property.toLowerCase());
      return cometh;
    } else if (type === 'SOLOON') {
      const soloon = new Soloon(row, column, property.toLowerCase());
      return soloon;
    }
  }
}

module.exports = {
  parseCustomMap,
}