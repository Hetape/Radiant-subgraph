import { BigInt } from "@graphprotocol/graph-ts";
import { TotalTransferred } from "../../generated/schema";

export function loadTotalTransferred(id: string): TotalTransferred {
  let totalTransferred = TotalTransferred.load(id);

  if (!totalTransferred) {
    totalTransferred = new TotalTransferred(id);
    totalTransferred.totalTransferred = BigInt.fromI32(0);

    totalTransferred.save();
  }

  return totalTransferred as TotalTransferred;
}
