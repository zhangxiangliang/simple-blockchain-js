const Block = require('./Block')
const config = require('../config/app')

module.exports = class Blockchain {

  /**
   * Init Blockchain
   */
  constructor() {
    this.chain = [this.createGenesisBlock()]
    this.difficulty = config.difficulty
  }

  /**
   * Genesis First Block
   * @return Block
   */
  createGenesisBlock() {
    return new Block(0, "12/16/1994", "0")
  }

  /**
   * Get Lastest Block
   * @return Block
   */
  getLatestBlock() {
    return this.chain[this.chain.length - 1]
  }

  /**
   * Push A New Block To Chain
   */
  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash
    newBlock.mineBlock(this.difficulty)
    this.chain.push(newBlock)
  }

  /**
   * Valid Chain
   * @return boolen
   */
  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}
