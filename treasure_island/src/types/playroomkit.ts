import { PlayerState, Joystick } from "playroomkit"

export type Player = {
    state: PlayerState;
    controls: Joystick;
}
