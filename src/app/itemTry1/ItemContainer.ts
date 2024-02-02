import { Heart, Key } from "./ItemManager";

export default class ItemContainer {
    public hearts: Heart[] = [];
    public keys: Key[] = [];

    addHeart(heart: Heart) {
        this.hearts.push(heart);
    }
    addKey(key: Key) {
        this.keys.push(key);
    }
}