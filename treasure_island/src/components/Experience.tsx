import { Environment, OrbitControls } from "@react-three/drei";
import { Character } from "./Character";
import { Hexagon } from "./Hexagon";
import { GameArena } from "./GameArena";
import { useGameState } from "../hooks";
import { CharacterController } from "./CharacterController";
import { Player } from "../types/playroomkit";
import { myPlayer } from "playroomkit";

export const Experience = () => {
  const { players, stage } = useGameState();
  const me = myPlayer();

  return (
    <>
      <OrbitControls />
      <Environment files={"hdrs/medieval_cafe_1k.hdr"} />
      {/* <Character /> */}
      <>
        {stage !== "lobby" && <GameArena />}
        {players.map((player: Player) => (
          <CharacterController
            key={player.state.id}
            state={player.state}
            controls={player.controls}
            player={me.id === player.state.id}
            position-y={3}
          />
        ))}
      </>
      <GameArena />
      {/* <Hexagon color="red" position-y={-0.3} /> */}
    </>
  );
};
