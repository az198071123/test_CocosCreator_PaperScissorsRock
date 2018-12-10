const { ccclass, property, help } = cc._decorator;

import GameFSM from '../fsm/GameFSM';

@ccclass
@help("https://forum.cocos.com/t/cocos-creator-typescript/46515")
export default class GameMgr extends GameFSM {
    protected global_enter(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`global_enter(${eventName},${from},${to},${args})`);
        this.getComponent(cc.Label).string = `State: ${to}`;
    }
    protected global_leave(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`global_leave(${eventName},${from},${to},${args})`);
    }
    protected global_before(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`global_before(${eventName},${from},${to},${args})`);
    }
    protected global_after(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`global_after(${eventName},${from},${to},${args})`);
    }
    protected enter_game_init(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`enter_game_init(${eventName},${from},${to},${args})`);
    }
    protected leave_game_init(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`leave_game_init(${eventName},${from},${to},${args})`);
    }
    protected enter_check_result(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`enter_check_result(${eventName},${from},${to},${args})`);
    }
    protected leave_check_result(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`leave_check_result(${eventName},${from},${to},${args})`);
    }
    protected enter_game_win(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`enter_game_win(${eventName},${from},${to},${args})`);
    }
    protected leave_game_win(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`leave_game_win(${eventName},${from},${to},${args})`);
    }
    protected enter_game_lose(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`enter_game_lose(${eventName},${from},${to},${args})`);
    }
    protected leave_game_lose(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`leave_game_lose(${eventName},${from},${to},${args})`);
    }
    protected enter_game_drew(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`enter_game_drew(${eventName},${from},${to},${args})`);
    }
    protected leave_game_drew(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`leave_game_drew(${eventName},${from},${to},${args})`);
    }
    protected enter_round_end(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`enter_round_end(${eventName},${from},${to},${args})`);
    }
    protected leave_round_end(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`leave_round_end(${eventName},${from},${to},${args})`);
    }
    protected enter_game_start(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`enter_game_start(${eventName},${from},${to},${args})`);
    }
    protected leave_game_start(eventName: string, from: string, to: string, ...args: any[]): void {
        cc.log(`leave_game_start(${eventName},${from},${to},${args})`);
    }

    start() {
        try {
            this.fsmStartUp();
        }
        catch (err) {
            cc.error(err);
        }
    }

    public fireEvent(event, ...data: any[]): void {
        cc.log(`${this.name}.fireEvent : event:${event}, data:${data}`);
        try {
            this.fsmTrigger(event, data);
        }
        catch (err) {
            cc.error(err);
        }
    }

    god(event: cc.Event, data: any) {
        cc.log(`${this.name}.god : event:${event}, data:${data}`);
    }
}
