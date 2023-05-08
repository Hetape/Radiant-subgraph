import {
  Relocked as RelockedEvent,
  Locked as LockedEvent,
  Withdrawn as WithdrawEvent,
  MultiFeeDistribution
} from "../generated/MultiFeeDistribution/MultiFeeDistribution";

import { Relocked, Locked, Withdrawn } from "../generated/schema";
import { loadUser } from "./entities/user";
import { getHistoryEntityId } from "./utils";
import { loadLpLocker } from "./entities/lpLocker";
import { loadLockedSupply } from "./entities/lockedSupply";

export function handleRelocked(event: RelockedEvent): void {
  let user = loadUser(event.params.user);
  let lockedSupply = loadLockedSupply();
  let mfdContract = MultiFeeDistribution.bind(event.address);

  lockedSupply.lockedSupply = mfdContract.lockedSupply();
  lockedSupply.address = event.address.toHexString();
  lockedSupply.save();

  let entity = new Relocked(getHistoryEntityId(event));
  entity.txHash = event.transaction.hash;
  entity.action = "Relocked";
  entity.user = user.id;
  entity.timestamp = event.block.timestamp.toI32();

  entity.amount = event.params.amount;
  entity.lockIndex = event.params.lockIndex;

  entity.save();
}

export function handleLocked(event: LockedEvent): void {
  let user = loadUser(event.params.user);
  let lockedSupply = loadLockedSupply();
  let mfdContract = MultiFeeDistribution.bind(event.address);

  lockedSupply.lockedSupply = mfdContract.lockedSupply();
  lockedSupply.address = event.address.toHexString();
  lockedSupply.save();
  
  if(event.params.isLP){
    let lpLocker = loadLpLocker(event.params.user);
    lpLocker.lockedBalance = event.params.lockedBalance;
    lpLocker.save();
  }

  let entity = new Locked(getHistoryEntityId(event));
  entity.txHash = event.transaction.hash;
  entity.action = "Locked";
  entity.user = user.id;
  entity.timestamp = event.block.timestamp.toI32();

  entity.amount = event.params.amount;
  entity.isLP = event.params.isLP;
  entity.lockedBalance = event.params.lockedBalance;

  entity.save();
}

export function handleWithdrawn(event: WithdrawEvent): void {
  let user = loadUser(event.params.user);
  let lockedSupply = loadLockedSupply();
  let mfdContract = MultiFeeDistribution.bind(event.address);

  lockedSupply.lockedSupply = mfdContract.lockedSupply();
  lockedSupply.address = event.address.toHexString();
  lockedSupply.save();
  
  if(event.params.isLP){
    let lpLocker = loadLpLocker(event.params.user);
    lpLocker.lockedBalance = event.params.lockedBalance;
    lpLocker.save();
  }

  let entity = new Withdrawn(getHistoryEntityId(event));
  entity.txHash = event.transaction.hash;
  entity.action = "Withdrawn";
  entity.user = user.id;
  entity.timestamp = event.block.timestamp.toI32();

  entity.receivedAmount = event.params.receivedAmount;
  entity.penalty = event.params.penalty;
  entity.burn = event.params.burn;
  entity.isLP = event.params.isLP;
  entity.lockedBalance = event.params.lockedBalance;

  entity.save();
}