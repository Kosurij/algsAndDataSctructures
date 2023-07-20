class HashTable {
    constructor(size) {
        if (!size || size < 0) {
            throw new Error('Размер должен быть положительным числом');
        }

        this.size = size;
        this.memory = [];
    }

    // Добавляет пару [key, value] в хеш-таблицу.
    // Если ключ существует, перезаписывает значение.
    set(key, value) {
        const index = hash(key, this.size);

        if (this.memory[index]) {
            for (let i = 0; i < this.memory[index].length; i++) {
                if (this.memory[index][i][0] === key) {
                    this.memory[index][i][1] = value;
                    return;
                }
            }

            this.memory[index].push([key, value]);
        } else {
            this.memory[index] = [];
            this.memory[index].push([key, value]);
        }

        this.size++;
    }

    // Возвращает значение в хеш-таблице по ключу.
    // Если ключа нет, возвращает undefined.
    get(key) {
        const index = hash(key, this.size);

        if (this.memory[index]) {
            for (let i = 0; i < this.memory.length; i++) {
                if (this.memory[index][i][0] === key) {
                    return this.memory[index][i][1];
                }
            }
        }

        return undefined;
    }

    // Удаляет значение из хеш-таблице по ключу.
    remove(key) {
        const index = hash(key, this.size);

        if (this.memory[index] && this.memory[index].length) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.memory[index][i][0] === key) {
                    this.memory[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        } else {
            return false
        }
    }
}

// Хеширующая функция.
function hash(key, size) {
    const MAX_LENGTH = 200;

    const start = key.length > MAX_LENGTH ?
        Math.floor((key.length % MAX_LENGTH) / 2) : 0;
    const end = Math.min(key.length, MAX_LENGTH);

    let total = 0;

    for (let i = 0; i < end; i++) {
        const charCode = key.charCodeAt(start + i);
        total = (total + charCode * (i + 1)) % size;
    }

    return total;
}

const hashTable = new HashTable(5);

hashTable.set('key', 'oldValue');

hashTable.set('key', 'someNewValue');

console.log(hashTable.memory)

