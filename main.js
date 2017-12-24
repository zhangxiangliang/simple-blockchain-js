const Blockchain = require('./modules/Blockchain')
const Block = require('./modules/Block')

let TLC = new Blockchain()

while(true) {
  let index = TLC.getLatestBlock.index
  const timestamp = (new Date()).getTime()
  const data = { name: "ZHANGXIANGLIANG", amount: index }

  console.log("---------------------------------------")
  console.log("Blockchain valid? " + TLC.isChainValid())

  console.log("Creating a block ...")
  TLC.addBlock(new Block(++index, timestamp, data))

  console.log("Blockchain valid? " + TLC.isChainValid())

  console.log("---------------------------------------")
}


