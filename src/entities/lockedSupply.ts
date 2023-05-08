import { BigInt } from "@graphprotocol/graph-ts";
import { LockedSupply } from "../../generated/schema";

export function loadLockedSupply(): LockedSupply {
  let lockedSupply = LockedSupply.load("1");

  if (!lockedSupply) {
    lockedSupply = new LockedSupply("1");
    lockedSupply.lockedSupply = BigInt.fromI32(0);
    lockedSupply.address = "";

    lockedSupply.save();
  }

  return lockedSupply as LockedSupply;
}
