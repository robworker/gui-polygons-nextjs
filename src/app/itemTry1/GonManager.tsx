export class Gon {
    constructor(public id: number, public type: string) { }
}

export class GonContainer {
    gons: Gon[] = [];

    constructor(public id: number) { }

    addGon(gon: Gon) {
        this.gons.push(gon);
    }
}

export default class GonManager {
    // Map GonContainer id to list of Gon ids
    gonContainerMap: Map<number, GonContainer> = new Map();
    unboundGons: Gon[] = [];

    constructor() {

        this.unboundGons = [
            new Gon(1, "heart"),
            new Gon(2, "key")
        ];

        this.gonContainerMap.set(1, new GonContainer(1));
        this.gonContainerMap.set(2, new GonContainer(2));

    }
}