import { BigInt, Address } from "@graphprotocol/graph-ts";
import { ReserveSize } from "../../generated/schema";

export function loadReserveSize(address: Address): ReserveSize {
  let reserveSize = ReserveSize.load(address.toHexString());

  if (!reserveSize) {
    reserveSize = new ReserveSize(address.toHexString());
    reserveSize.amount = BigInt.fromI32(0);

    reserveSize.save();
  }

  return reserveSize as ReserveSize;
}
