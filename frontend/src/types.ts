export interface FrameState {
    frameState: string;
}
  
export enum ActionType {
    UPDATE_FRAME_STATE = 'UPDATE_FRAME_STATE',
}
  
export interface UpdateFrameStateAction {
    type: ActionType.UPDATE_FRAME_STATE;
    payload: string;
}