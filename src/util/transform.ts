export const Transform = {
    async get_obj_at_node(node: string, object: object): Promise<{ [key: string]: any } | undefined> {
        return node.split('.').reduce((obj, key) => (obj && key in obj ? obj[key] : undefined), object);
    },

    async set_obj_at_node(node: string, object: object, value: any): Promise<{ [key: string]: any }> {
        const keys = node.split('.');
        let obj = object;
        for (const key of keys.slice(0, -1)) {
            obj = obj[key] = obj[key] && typeof obj[key] === 'object' ? obj[key] : {};
        }
        obj[keys[keys.length - 1]] = value;
        return object;
    },

    async array_to_json(array: any[]) {
        if (!Array.isArray(array) || !array.length) return [];
        const [cols, ...rows] = array;
        return rows.map(row => Object.fromEntries(cols.map((col, i) => [col, row[i]]).filter(([_, v]) => v !== undefined)));
    },

    object_filter(original: object, filter: object): any {
        return Object.keys(filter).reduce((acc, key) => {
            if (key in original) {
                acc[key] = Array.isArray(filter[key]) && Array.isArray(original[key])
                    ? filter[key]
                    : typeof filter[key] === 'object' && typeof original[key] === 'object'
                        ? this.object_filter(original[key], filter[key])
                        : filter[key];
            }
            return acc;
        }, {});
    },

    remove_pattern_at_index(text: string, pattern: string, index: number): string {
        if (index < 0) {
            index = text.length + index;
        }
        const start = text.slice(0, index);
        const end = text.slice(index + pattern.length);
        return start + end;
    },

    repeat_trim(text: string, length: number): string {
        const len = text.length;
        return len === length ? text : text.repeat(Math.ceil(length / len)).slice(0, length);
    },

    json_to_array(json: object): string[] {
        return Object.values(json).map(v => typeof v === 'string' ? v : JSON.stringify(v));
    },

    pattern_a_to_b(text: string, pattern_a: string, pattern_b: string): string {
        return text.split(pattern_a).join(pattern_b)
    },

    capitalize_at_index(str: string, index: number): string {
        const words = str.split(' ');
        const i = index < 0 ? words.length + index : index;
        return i < 0 || i >= words.length ? str : words.map((w, j) => j === i ? w.charAt(0).toUpperCase() + w.slice(1) : w).join(' ');
    }
};