
//###{"class":"go.GraphLinksModel","nodeDataArray":[{"text":"GameInit","isInit":true,"key":-1,"loc":"504.15578507109797 63.73795765062076","callbacks":"{\"enter\":[\"enter_game_init\"],\"leave\":[\"leave_game_init\"]}"},{"text":"CheckResult","isInit":false,"key":-2,"loc":"457.43719004739864 380.31945103249416","callbacks":"{\"enter\":[\"enter_check_result\"],\"leave\":[\"leave_check_result\"]}"},{"text":"GameWin","isInit":false,"key":-3,"loc":"212.53196558905677 468.50112122551195","callbacks":"{\"enter\":[\"enter_game_win\"],\"leave\":[\"leave_game_win\"]}"},{"text":"GameLose","isInit":false,"key":-4,"loc":"811.3446569567642 525.900265216717","callbacks":"{\"enter\":[\"enter_game_lose\"],\"leave\":[\"leave_game_lose\"]}"},{"text":"GameDrew","isInit":false,"key":-5,"loc":"454.5391672817053 542.9648755924808","callbacks":"{\"enter\":[\"enter_game_drew\"],\"leave\":[\"leave_game_drew\"]}"},{"text":"RoundEnd","isInit":false,"key":-6,"loc":"595.7100349357503 698.0976971903323","callbacks":"{\"enter\":[\"enter_round_end\"],\"leave\":[\"leave_round_end\"]}"},{"text":"GameStart","isInit":false,"key":-7,"loc":"479.36041873736156 231.14790418079895","callbacks":"{\"enter\":[\"enter_game_start\"],\"leave\":[\"leave_game_start\"]}"}],"linkDataArray":[{"from":-1,"to":-7,"points":[576.7521638727742,115.69385229623012,582.9324943524192,155.0257280687496,579.7330723491451,193.50802495178866,567.1771543848809,231.17467725996374],"text":"S2C_Game_Start","callbacks":"{\"before\":[],\"after\":[]}"},{"from":-2,"to":-3,"points":[500.0717795262785,432.01109949532616,447.36690522182283,459.8253142868293,398.4306767928163,475.9616527649149,357.5927522385369,482.1763999862963],"text":"S2C_Game_Win","callbacks":"{\"before\":[],\"after\":[]}"},{"from":-2,"to":-5,"points":[553.7334426620926,432.2753790362725,559.1645871939403,467.5773162206169,553.8241731043304,504.1816701930178,542.9828648925289,542.9833190473419],"text":"S2C_Game_Drew","callbacks":"{\"before\":[],\"after\":[]}"},{"from":-2,"to":-4,"points":[642.023982308029,410.76753945055947,701.9455487347607,434.3678219541293,775.4050510551305,472.90417151250364,854.7411432674328,526.1108735031501],"text":"S2C_Game_Lose","callbacks":"{\"before\":[],\"after\":[]}"},{"from":-7,"to":-2,"points":[560.3631253530028,283.1081317155958,563.050869095727,317.28740181282325,561.0672976910224,348.4702459591463,554.9300968756257,380.32917881048223],"callbacks":"{\"before\":[],\"after\":[]}","text":"C2S_BtnClick"},{"from":-3,"to":-7,"points":[308.21625512155623,468.6259583853426,373.8923152728571,395.0982983334735,444.8505914142459,333.2204127846491,519.6067325629596,282.8866145131615],"callbacks":"{\"before\":[],\"after\":[]}","text":"S2C_Game_Start"},{"from":-5,"to":-7,"points":[471.15455838808384,594.5525478677462,49.64250291131253,761.7021540454516,77.56641079892583,212.53196558905677,479.3625562240582,249.804026143483],"callbacks":"{\"before\":[],\"after\":[]}","text":"S2C_Game_Start"},{"from":-4,"to":-7,"points":[890.0498974945187,525.9006355275679,885.8084113237328,415.75596188224245,746.1888718856665,322.67626892353144,626.5036804003632,280.9171707174973],"callbacks":"{\"before\":[],\"after\":[]}","text":"S2C_Game_Start"},{"from":-3,"to":-6,"points":[293.7178097129515,520.4392241067796,345.94619216320916,684.1357432465257,418.85861831419936,726.0216050779457,595.7100493629293,724.6781019436122],"callbacks":"{\"before\":[],\"after\":[]}","text":"S2C_RoundEnd"},{"from":-5,"to":-6,"points":[569.9632534270396,594.7274261106907,601.664837490764,618.6016665314723,632.5325959525348,653.0770163909438,659.2660241245776,698.1676061458745],"callbacks":"{\"before\":[],\"after\":[]}","text":"S2C_RoundEnd"},{"from":-4,"to":-6,"points":[900.4787841852693,577.8319703262026,919.9376320752601,631.3905839032561,885.8084113237328,701.2003536222894,753.5431796031439,715.5293165561084],"callbacks":"{\"before\":[],\"after\":[]}","text":"S2C_RoundEnd"}],"globalCallbacksText":"{\"enter\":[\"global_enter\"],\"leave\":[\"global_leave\"],\"before\":[\"global_before\"],\"after\":[\"global_after\"]}"}###
interface StateNameInterface {
    GameInit: string;
    CheckResult: string;
    GameWin: string;
    GameLose: string;
    GameDrew: string;
    RoundEnd: string;
    GameStart: string;

}
interface EventNameInterface {
    S2C_Game_Start: string;
    S2C_Game_Win: string;
    S2C_Game_Drew: string;
    S2C_Game_Lose: string;
    C2S_BtnClick: string;
    S2C_RoundEnd: string;

}
import StateMachine from "./StateMachine";
export default abstract class GameFSM extends cc.Component {

    private fsm: any;

    protected fsmTrigger(eventName: string, ...args: any[]) {
        this.fsm[eventName](...args);
    };

    protected fsmIs(stateName: string): boolean {
        return this.fsm.is(stateName);
    };

    protected fsmCan(eventName: string): boolean {
        return this.fsm.can(eventName);
    };

    protected fsmCannot(eventName: string): boolean {
        return this.fsm.cannot(eventName);
    };

    protected fsmCurrent(): string {
        return this.fsm.current;
    };

    protected fsmStartUp() {
        this.fsm = StateMachine.create({ "initial": "GameInit", "events": [{ "name": "S2C_Game_Start", "from": "GameInit", "to": "GameStart" }, { "name": "S2C_Game_Win", "from": "CheckResult", "to": "GameWin" }, { "name": "S2C_Game_Drew", "from": "CheckResult", "to": "GameDrew" }, { "name": "S2C_Game_Lose", "from": "CheckResult", "to": "GameLose" }, { "name": "C2S_BtnClick", "from": "GameStart", "to": "CheckResult" }, { "name": "S2C_Game_Start", "from": "GameWin", "to": "GameStart" }, { "name": "S2C_Game_Start", "from": "GameDrew", "to": "GameStart" }, { "name": "S2C_Game_Start", "from": "GameLose", "to": "GameStart" }, { "name": "S2C_RoundEnd", "from": "GameWin", "to": "RoundEnd" }, { "name": "S2C_RoundEnd", "from": "GameDrew", "to": "RoundEnd" }, { "name": "S2C_RoundEnd", "from": "GameLose", "to": "RoundEnd" }], "callbacks": { "onenterGameInit": [this.enter_game_init], "onleaveGameInit": [this.leave_game_init], "onenterCheckResult": [this.enter_check_result], "onleaveCheckResult": [this.leave_check_result], "onenterGameWin": [this.enter_game_win], "onleaveGameWin": [this.leave_game_win], "onenterGameLose": [this.enter_game_lose], "onleaveGameLose": [this.leave_game_lose], "onenterGameDrew": [this.enter_game_drew], "onleaveGameDrew": [this.leave_game_drew], "onenterRoundEnd": [this.enter_round_end], "onleaveRoundEnd": [this.leave_round_end], "onenterGameStart": [this.enter_game_start], "onleaveGameStart": [this.leave_game_start], "onenterstate": [this.global_enter], "onleavestate": [this.global_leave], "onbeforeevent": [this.global_before], "onafterevent": [this.global_after] } }, this);
    };

    public readonly stateName: StateNameInterface = {
        GameInit: "GameInit",
        CheckResult: "CheckResult",
        GameWin: "GameWin",
        GameLose: "GameLose",
        GameDrew: "GameDrew",
        RoundEnd: "RoundEnd",
        GameStart: "GameStart"
    };

    public readonly eventName: EventNameInterface = {
        S2C_Game_Start: "S2C_Game_Start",
        S2C_Game_Win: "S2C_Game_Win",
        S2C_Game_Drew: "S2C_Game_Drew",
        S2C_Game_Lose: "S2C_Game_Lose",
        C2S_BtnClick: "C2S_BtnClick",
        S2C_RoundEnd: "S2C_RoundEnd"
    };

    protected S2C_Game_Start(...args: any[]): void { this.fsm["S2C_Game_Start"](...args); };
    protected S2C_Game_Win(...args: any[]): void { this.fsm["S2C_Game_Win"](...args); };
    protected S2C_Game_Drew(...args: any[]): void { this.fsm["S2C_Game_Drew"](...args); };
    protected S2C_Game_Lose(...args: any[]): void { this.fsm["S2C_Game_Lose"](...args); };
    protected C2S_BtnClick(...args: any[]): void { this.fsm["C2S_BtnClick"](...args); };
    protected S2C_RoundEnd(...args: any[]): void { this.fsm["S2C_RoundEnd"](...args); };

    protected abstract enter_game_init(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract leave_game_init(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract enter_check_result(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract leave_check_result(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract enter_game_win(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract leave_game_win(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract enter_game_lose(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract leave_game_lose(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract enter_game_drew(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract leave_game_drew(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract enter_round_end(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract leave_round_end(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract enter_game_start(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract leave_game_start(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract global_enter(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract global_leave(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract global_before(eventName: string, from: string, to: string, ...args: any[]): void;
    protected abstract global_after(eventName: string, from: string, to: string, ...args: any[]): void;

}
