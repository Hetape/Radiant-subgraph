import { Address } from "@graphprotocol/graph-ts";
import { Asset } from "../../generated/schema";
import { ASSET_SYMBOLS, RTOKEN_ADDRESSES } from "../constants";

export function loadAsset(address: Address): Asset {
  let asset = Asset.load(address.toHexString());

  if (!asset) {
    asset = new Asset(address.toHexString());

    asset.save();
  }

  return asset as Asset;
}

export function getAssetSymbol(address: Address): string {
  let index = -1;
  let i = 0;
  for(i = 0; i < RTOKEN_ADDRESSES.length; i++) {
    if(address.toHexString().toLowerCase() == RTOKEN_ADDRESSES[i].toLowerCase()) {
      index = i;
    }
  }
  if(index >= 0) return ASSET_SYMBOLS[index];
  else return "null";
}
