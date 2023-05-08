import { Deposit as DepositEvent, Withdraw as WithdrawEvent } from "../generated/LendingPool/LendingPool";
import { loadReserveSize } from "./entities/reserveSize";

export function handleDeposit(event: DepositEvent): void {
  let reserveSize = loadReserveSize(event.params.reserve);

  reserveSize.amount = reserveSize.amount.plus(event.params.amount);
  reserveSize.save();
}

export function handleWithdraw(event: WithdrawEvent): void {
  let reserveSize = loadReserveSize(event.params.reserve);

  reserveSize.amount = reserveSize.amount.minus(event.params.amount);
  reserveSize.save();
}
