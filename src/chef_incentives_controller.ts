import { Disqualified as DisqualifiedEvent } from "../generated/ChefIncentivesController/ChefIncentivesController";
import { Disqualified } from "../generated/schema";
import { loadUser } from "./entities/user";
import { getHistoryEntityId } from "./utils";

export function handleDisqualified(event: DisqualifiedEvent): void {
  let user = loadUser(event.params.user);

  let entity = new Disqualified(getHistoryEntityId(event));
  entity.txHash = event.transaction.hash;
  entity.action = "Disqualified";
  entity.user = user.id;
  entity.timestamp = event.block.timestamp.toI32();

  entity.save();
}
