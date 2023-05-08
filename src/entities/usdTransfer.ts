import { BigInt } from "@graphprotocol/graph-ts";
import { UsdTransfered } from "../../generated/schema";

export function loadUsdTransfered(): UsdTransfered {
  let usdTransfered = UsdTransfered.load("1");

  if (!usdTransfered) {
    usdTransfered = new UsdTransfered("1");
    usdTransfered.totalLpUsdTransfered = BigInt.fromI32(0);

    usdTransfered.save();
  }

  return usdTransfered as UsdTransfered;
}
