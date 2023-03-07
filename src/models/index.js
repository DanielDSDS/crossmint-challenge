const candidateId = '4406a548-c08c-42ab-9df4-e598fc8567e8';
const axios = require('axios');

class Polyanet {
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }

  /**
   * @description 
   * @param {object} 
   * @param  {object}
   * @returns {object} 
   */
  async insertAstralObject() {
    await axios.post('https://challenge.crossmint.io/api/polyanets',
      { row: this.row, column: this.column, candidateId },
    )
    // await console.log('insertar polyanet en x:', this.row, ' y: ', this.column)
  }
}

class Cometh extends Polyanet {
  constructor(row, column, direction) {
    super(row, column);
    this.direction = direction;
  }

  /**
   * @description 
   * @param {object} 
   * @param  {object}
   * @returns {object} 
   */
  async insertAstralObject() {
    await axios.post('https://challenge.crossmint.io/api/comeths',
      { row: this.row, column: this.column, candidateId, direction: this.direction },
    )
    // await console.log('insertar cometh en x:', this.row, ' y: ', this.column, ' direction:', this.direction);
  }
}

class Soloon extends Polyanet {
  constructor(row, column, color) {
    super(row, column);
    this.color = color;
  }

  async insertAstralObject() {
    await axios.post('https://challenge.crossmint.io/api/soloons',
      { row: this.row, column: this.column, candidateId, color: this.color },
    )
    // await console.log('insertar soloon en x:', this.row, ' y: ', this.column, ' direction:', this.color);
  }
}

module.exports = {
  Polyanet,
  Cometh,
  Soloon
}