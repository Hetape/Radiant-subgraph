import { Address, BigInt, BigDecimal } from "@graphprotocol/graph-ts";

export const ADDRESS_ZERO = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export const BIG_DECIMAL_1E6 = BigDecimal.fromString("1e6");
export const BIG_DECIMAL_1E10 = BigDecimal.fromString("1e10");
export const BIG_DECIMAL_1E12 = BigDecimal.fromString("1e12");
export const BIG_DECIMAL_1E18 = BigDecimal.fromString("1e18");
export const BIG_DECIMAL_ZERO = BigDecimal.fromString("0");
export const BIG_DECIMAL_ONE = BigDecimal.fromString("1");
export const BIG_DECIMAL_HUNDRED = BigDecimal.fromString("100");

export const BIG_INT_ONE = BigInt.fromI32(1);
export const BIG_INT_ZERO = BigInt.fromI32(0);
export const NULL_CALL_RESULT_VALUE =
  "0x0000000000000000000000000000000000000000000000000000000000000001";

export const MULTI_FEE_DISTRIBUTION_ADDRESS = Address.fromString(
  "0x4FD9F7C5ca0829A656561486baDA018505dfcB5E"
);

export const CHEF_INCENTIVES_CONTROLLER_ADDRESS = Address.fromString(
  "0x7C16aBb090d3FB266E9d17F60174B632f4229933"
);

export const ASSET_SYMBOLS = "BUSD,USDT,USDC,BTCB,BNB,ETH".split(",");

export const RTOKEN_ADDRESSES = "0x89d763e8532D256a3e3e60c1C218Ac71E71cF664,0x4Ff2DD7c6435789E0BB56B0553142Ad00878a004,0x3bDCEf9e656fD9D03eA98605946b4fbF362C342b,0x34d4F4459c1b529BEbE1c426F1e584151BE2C1e5,0x58b0BB56CFDfc5192989461dD43568bcfB2797Db,0x455a281D508B4e34d55b31AC2e4579BD9b77cA8E".split(",");
