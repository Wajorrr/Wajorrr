export interface ShowAddSwitch {
    suspect: boolean;
    importedCase: boolean;
    noInfect: boolean;
    localinfeciton: boolean;
    all: boolean;
    dead: boolean;
    heal: boolean;
    nowConfirm: boolean;
    nowSevere: boolean;
    localConfirm: boolean;
    confirm: boolean;
}

export interface Total {
    confirm: number;
    showHeal: boolean;
    continueDayZeroLocalConfirmAdd: number;
    continueDayZeroLocalConfirm: number;
    nowConfirm: number;
    showRate: boolean;
    provinceLocalConfirm: number;
    mtime: string;
    wzz: number;
    mediumRiskAreaNum: number;
    dead: number;
    heal: number;
    highRiskAreaNum: number;
    adcode: string;
}

export interface Today {
    confirm: number;
    confirmCuts: number;
    isUpdated: boolean;
    tip: string;
    wzz_add: number;
    local_confirm_add: number;
    abroad_confirm_add: number;
    dead_add: number;
}

export interface Total {
    continueDayZeroConfirmAdd: number;
    continueDayZeroLocalConfirmAdd: number;
    dead: number;
    showHeal: boolean;
    wzz: number;
    mtime: string;
    adcode: string;
    confirm: number;
    provinceLocalConfirm: number;
    highRiskAreaNum: number;
    continueDayZeroConfirm: number;
    nowConfirm: number;
    showRate: boolean;
    heal: number;
    mediumRiskAreaNum: number;
}

export interface Total {
    nowConfirm: number;
    wzz: number;
    adcode: string;
    confirm: number;
    showRate: boolean;
    mediumRiskAreaNum: number;
    mtime: string;
    continueDayZeroLocalConfirmAdd: number;
    dead: number;
    heal: number;
    showHeal: boolean;
    provinceLocalConfirm: number;
    highRiskAreaNum: number;
    continueDayZeroLocalConfirm: number;
}

export interface Children {
    name: string;
    adcode: string;
    date: string;
    today: Today;
    total: Total;
}

export interface Children {
    name: string;
    adcode: string;
    date: string;
    today: Today;
    total: Total;
    children: Children[];
}

export interface Today {
    confirm: number;
    isUpdated: boolean;
}

export interface AreaTree {
    total: Total;
    children: Children[];
    name: string;
    today: Today;
}

export interface ChinaTotal {
    localWzzAdd: number;
    nowLocalWzz: number;
    confirm: number;
    suspect: number;
    localConfirmH5: number;
    confirmAdd: number;
    localConfirm: number;
    importedCase: number;
    noInfect: number;
    noInfectH5: number;
    deadAdd: number;
    mtime: string;
    nowConfirm: number;
    nowSevere: number;
    showLocalConfirm: number;
    showlocalinfeciton: number;
    local_acc_confirm: number;
    localConfirmAdd: number;
    mediumRiskAreaNum: number;
    highRiskAreaNum: number;
    mRiskTime: string;
    heal: number;
    dead: number;
}

export interface ChinaAdd {
    heal: number;
    nowConfirm: number;
    suspect: number;
    importedCase: number;
    noInfectH5: number;
    localConfirmH5: number;
    confirm: number;
    dead: number;
    nowSevere: number;
    noInfect: number;
    localConfirm: number;
}

export interface Diseaseh5Shelf {
    isShowAdd: boolean;
    showAddSwitch: ShowAddSwitch;
    areaTree: AreaTree[];
    lastUpdateTime: string;
    chinaTotal: ChinaTotal;
    chinaAdd: ChinaAdd;
}

export interface StatisGradeCityDetail {
    dead: number;
    grade: string;
    date: string;
    mtime: string;
    syear: number;
    wzz_add: string;
    province: string;
    confirmAdd: number;
    confirm: number;
    heal: number;
    sdate: string;
    city: string;
    nowConfirm: number;
}

export interface RootObject {
    diseaseh5Shelf: Diseaseh5Shelf;
    statisGradeCityDetail: StatisGradeCityDetail[];
}