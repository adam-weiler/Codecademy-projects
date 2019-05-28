from blockchain import Blockchain

block_one_transactions = {"sender":"Alice", "receiver": "Bob", "amount":"50"}
block_two_transactions = {"sender": "Bob", "receiver":"Cole", "amount":"25"}
block_three_transactions = {"sender":"Alice", "receiver":"Cole", "amount":"35"}
fake_transactions = {"sender": "Bob", "receiver":"Cole, Alice", "amount":"25"}

local_blockchain = Blockchain()
print(local_blockchain.print_blocks()) #Returns Block 0 and details.
print("\n")

local_blockchain.add_block(block_one_transactions)
local_blockchain.add_block(block_two_transactions)
local_blockchain.add_block(block_three_transactions)
print(local_blockchain.print_blocks()) #Returns Block 0, 1, 2, 3 and details.
print("\n")

local_blockchain.chain[2].transactions = fake_transactions
print(local_blockchain.print_blocks()) #Returns Block 0, 1, Fake2, 3 and details.
local_blockchain.validate_chain() #Returns Current Hash does not equal generated hash.
