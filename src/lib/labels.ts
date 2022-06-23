import { MoveLearnMethod, MoveTarget } from "@/graphql";

export const getMoveTargetLabel = (value: MoveTarget) => {
  switch (value) {
    case MoveTarget.AllAllies:
      return "All allies";
    case MoveTarget.AllOpponents:
      return "All opponents";
    case MoveTarget.AllOtherPokemon:
      return "All other Pokemon";
    case MoveTarget.AllPokemon:
      return "All Pokemon";
    case MoveTarget.Ally:
      return "Ally";
    case MoveTarget.EntireField:
      return "Entire field";
    case MoveTarget.OpponentsField:
      return "Opponent's field";
    case MoveTarget.RandomOpponent:
      return "Random opponent";
    case MoveTarget.SelectedPokemon:
      return "Selected Pokemon";
    case MoveTarget.SelectedPokemonMeFirst:
      return "Selected Pokemon";
    case MoveTarget.SpecificMove:
      return "Specific move";
    case MoveTarget.User:
      return "User";
    case MoveTarget.UserAndAllies:
      return "User & allies";
    case MoveTarget.UserOrAlly:
      return "User or ally";
    case MoveTarget.UsersField:
      return "User's field";
  }
};

export const getMoveLearnMethodLabel = (value: MoveLearnMethod) => {
  switch (value) {
    case MoveLearnMethod.ColosseumPurification:
      return "Colosseum purification";
    case MoveLearnMethod.Egg:
      return "Egg";
    case MoveLearnMethod.FormChange:
      return "Form change";
    case MoveLearnMethod.LevelUp:
      return "Level up";
    case MoveLearnMethod.LightBallEgg:
      return "Light ball egg";
    case MoveLearnMethod.Machine:
      return "TM";
    case MoveLearnMethod.Record:
      return "TR";
    case MoveLearnMethod.StadiumSurfingPikachu:
      return "Statium surfing Pikachu";
    case MoveLearnMethod.Transfer:
      return "Transfer";
    case MoveLearnMethod.Tutor:
      return "Tutor";
    case MoveLearnMethod.XdPurification:
      return "Purification";
    case MoveLearnMethod.XdShadow:
      return "Shadow";
  }
};
