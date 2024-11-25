const Transform = {

    async get_obj_at_node(node: string, object: any): Promise<{ [key: string]: any } | undefined> {
        const keys = node.split('.');
        let obj = object;

        for (const key of keys) {
            if (obj && typeof obj === 'object' && key in obj) {
                obj = obj[key];
            } else {
                return undefined;
            }
        }

        return obj // Return the found value
    },

    async set_obj_at_node(node: string, object: any, value: any): Promise<{ [key: string]: any }> {
        const keys = node.split('.');
        let obj = object;

        for (let i = 0; i < keys.length - 1; i++) {
            const key = keys[i];
            if (!(key in obj) || typeof obj[key] !== 'object') {
                obj[key] = {}; // Create an empty object if the key doesn't exist
            }
            obj = obj[key];
        }

        // Set the value at the specified key
        obj[keys[keys.length - 1]] = value;

        return object
    },
    
    async array_to_json(array: any) {
        if (!Array.isArray(array) || array.length === 0) {
            return []
        }

        const [columnNames, ...rows] = array;

        return rows.map((row: any) => {
            const jsonObject: any = {};
            columnNames.forEach((columnName: any, index: any) => {
                if (row[index] !== undefined) {
                    jsonObject[columnName] = row[index];
                }
            });
            return jsonObject;
        });
    },

    object_filter(from: any, to: any): any {
        const filteredObject: any = {};

        for (let key in to) {
            if (Object.prototype.hasOwnProperty.call(from, key)) {
                if (Array.isArray(to[key]) && Array.isArray(from[key])) {
                    filteredObject[key] = to[key];
                } else if (typeof to[key] === 'object' && typeof from[key] === 'object') {
                    filteredObject[key] = this.object_filter(from[key], to[key]);
                } else {
                    filteredObject[key] = to[key];
                }
            }
        }

        return filteredObject;
    },

    remove_tail_pattern(str: any, pattern: any) {
        return String(str).slice(0, -pattern.length);
    },

    repeat_trim(input: string, length: number) {
        const inputLength = input.length;

        if (inputLength === length) {
            return input;
        } else if (inputLength < length) {
            const repetitions = Math.ceil(length / inputLength);
            const repeatedString = input.repeat(repetitions);
            return repeatedString.slice(0, length);
        } else {
            return input.slice(0, length);
        }
    },

    json_to_array(json: any) {
        return Object.values(json).map(value => (typeof value != 'string') ? JSON.stringify(value) : value)
    }
}

export default Transform