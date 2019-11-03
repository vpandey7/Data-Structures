class HashTable {
    constructor(size) {
        this.data = new Array(size); // [['grapes',10000]]
    }

    _hash(key) { // means this is a private property although we can still access it. But this is a developer standard.
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {

        let address = this._hash(key); // this creates the addess where the key and value would e stored

        if (!this.data[address]) { // this checks if the addess is empty 
            this.data[address] = []; // this is the new space that would be created for the key, value
            //this.data[address].push([key,value]);
        }
        this.data[address].push([key, value]); // pushes in the same space regardless . so creates array within array.
        return this.data;

    }

    get(key) {
        let address = this._hash(key); // to access the address associated with this key

        const currentBucket = this.data[address];
        //console.log("current bucket is " + currentBucket);
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) { // this can cause O(n) in case of collission

                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }

            }

        } else {
            return undefined;
        }


    }

    keys() {
        // allows to iterate over the hash table and get all the keys
        const keyArrays = []; // this array will hold all the keys
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keyArrays.push(this.data[i][0][0]);
            }
        }
        return keyArrays;


    }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('oranges', 2);
myHashTable.set('apples', 54);
myHashTable.get('apples');
myHashTable.keys();