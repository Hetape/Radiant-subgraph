import { ethereum } from "@graphprotocol/graph-ts";

export function getHistoryEntityId(event: ethereum.Event): string {
  return (
    event.block.number.toString() +
    ":" +
    event.transaction.index.toString() +
    ":" +
    event.transaction.hash.toHexString() +
    ":" +
    event.logIndex.toString() +
    ":" +
    event.transactionLogIndex.toString()
  );
}
