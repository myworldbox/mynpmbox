"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transform = void 0;
exports.Transform = {
    async get_obj_at_node(node, object) {
        const keys = node.split('.');
        let obj = object;
        for (const key of keys) {
            if (obj && typeof obj === 'object' && key in obj) {
                obj = obj[key];
            }
            else {
                return undefined;
            }
        }
        return obj; // Return the found value
    },
    async set_obj_at_node(node, object, value) {
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
        return object;
    },
    async array_to_json(array) {
        if (!Array.isArray(array) || array.length === 0) {
            return [];
        }
        const [columnNames, ...rows] = array;
        return rows.map((row) => {
            const jsonObject = {};
            columnNames.forEach((columnName, index) => {
                if (row[index] !== undefined) {
                    jsonObject[columnName] = row[index];
                }
            });
            return jsonObject;
        });
    },
    object_filter(original_object, filter_object) {
        const filteredObject = {};
        for (let key in filter_object) {
            if (Object.prototype.hasOwnProperty.call(original_object, key)) {
                if (Array.isArray(filter_object[key]) && Array.isArray(original_object[key])) {
                    filteredObject[key] = filter_object[key];
                }
                else if (typeof filter_object[key] === 'object' && typeof original_object[key] === 'object') {
                    filteredObject[key] = this.object_filter(original_object[key], filter_object[key]);
                }
                else {
                    filteredObject[key] = filter_object[key];
                }
            }
        }
        return filteredObject;
    },
    remove_tail_text(text, pattern) {
        return String(text).slice(0, -pattern.length);
    },
    repeat_trim(text, length) {
        const textLength = text.length;
        if (textLength === length) {
            return text;
        }
        else if (textLength < length) {
            const repetitions = Math.ceil(length / textLength);
            const repeatedString = text.repeat(repetitions);
            return repeatedString.slice(0, length);
        }
        else {
            return text.slice(0, length);
        }
    },
    json_to_array(json) {
        return Object.values(json).map(value => (typeof value != 'string') ? JSON.stringify(value) : value);
    }
};
