import { BigInt, Address } from "@graphprotocol/graph-ts";
import { LpLocker } from "../../generated/schema";

export function loadLpLocker(address: Address): LpLocker {
  let lpLocker = LpLocker.load(address.toHexString());

  if (!lpLocker) {
    lpLocker = new LpLocker(address.toHexString());
    lpLocker.lockedBalance = BigInt.fromI32(0);

    lpLocker.save();
  }

  return lpLocker as LpLocker;
}
