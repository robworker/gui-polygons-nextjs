import ItemContainer from "./ItemContainer";
import {produce} from "immer";

class BaseItem {
    constructor(public id: number) { }
}

export class Heart extends BaseItem { }

export class Key extends BaseItem { }

export default class ItemManager {
    private _idCtr = -1;

    // Got this idea from https://codesandbox.io/p/sandbox/github/react-dnd/react-dnd/tree/gh-pages/examples_js/00-chessboard?file=%2Fsrc%2FGame.js%3A24%2C1-27%2C4
    observers: Function[] = []
    observe(o: Function) {
      this.observers.push(o)
    //   this.emitChange()
    //   return () => {
    //     this.observers = this.observers.filter((t) => t !== o)
    //   }
    }
    unobserve(o: Function) {
        this.observers.splice(this.observers.findIndex(e => e === o),1);
    }

    public items: BaseItem[] = [
        new Heart(++this._idCtr),
        new Heart(++this._idCtr),
        new Key(++this._idCtr),
        new Key(++this._idCtr),
        new Heart(++this._idCtr),
    ];

    public itemContainers: ItemContainer[] = [
        new ItemContainer(),
        new ItemContainer(),
    ];

    public getItem(id: number) {
        const resp = this.items.find(e => e.id === id);
        if(resp == null) {
            throw new Error("Not found.");
        } else {
            return resp;
        }
    }

    public placeItem(id: number, destination: ItemContainer) {

        // // don't mutate because react won't hear about it // Update: doing emit idea instead
        // const itemManagerCopy = {...this};
        this.getItem(id).constructor.name === "Heart" ? destination.addHeart(this.getItem(id)) :
            destination.addKey(this.getItem(id));
        this.items.splice(this.items.findIndex(e => e.id === id), 1);

        // Use Immer instead I say! NO, just Object.create shallow copy maybe!?
        // setObj({
        //     ...obj,
        //     x: 10
        //   });
        
        // produce((draft) => {
        //     const todo = draft.find((todo) => todo.id === id);
        //     todo.done = !todo.done;
        //   })

        this.emitChange();
    }

    emitChange() {
        this.observers.forEach((o) => o && o(Object.create(this)))
      }
}