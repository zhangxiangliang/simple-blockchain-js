const SHA256 = require("crypto-js/sha256")


module.exports = class Block {

  /**
   * Init Block
   * @param  index
   * @param  timestamp
   * @param  data
   * @param  previousHash
   */
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index
    this.timestamp = timestamp
    this.data = data
    this.previousHash = previousHash
    this.hash = this.calculateHash()
    this.nonce = 0
  }

  /**
   * Calculate Hash
   * @return string
   */
  calculateHash() {
    return SHA256( this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce ).toString()
  }

  /**
   * Proof of Work
   * @param  difficulty
   */
  mineBlock(difficulty) {
    while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
      this.nonce++
      this.hash = this.calculateHash()
    }

    console.log("Block mined: " + this.hash);
  }
};

