export const Transform = {
    get_obj_at_node: async (node: string, object: any): Promise<{ [key: string]: any } | undefined> =>
        node.split('.').reduce((obj, key) => (obj && key in obj ? obj[key] : undefined), object),

    set_obj_at_node: async (node: string, object: any, value: any): Promise<{ [key: string]: any }> => {
        const keys = node.split('.');
        let obj = object;
        for (const key of keys.slice(0, -1)) obj = obj[key] = obj[key] && typeof obj[key] === 'object' ? obj[key] : {};
        obj[keys[keys.length - 1]] = value;
        return object;
    },

    array_to_json: (array: any[]) => {
        if (!Array.isArray(array) || !array.length) return [];
        const [cols, ...rows] = array;
        return rows.map(row => Object.fromEntries(cols.map((col: any, i: string | number) => [col, row[i]]).filter(([_, v]: any) => v !== undefined)));
    },

    object_filter: (original: Record<string, any>, filter: Record<string, any>): Record<string, any> =>
        Object.keys(filter).reduce((acc, key) => {
            if (key in original) {
                acc[key] = Array.isArray(filter[key]) && Array.isArray(original[key])
                    ? filter[key]
                    : typeof filter[key] === 'object' && typeof original[key] === 'object' && filter[key] !== null && original[key] !== null
                        ? Transform.object_filter(original[key], filter[key])
                        : filter[key];
            }
            return acc;
        }, {} as Record<string, any>),

    remove_pattern_at_index: (text: string, pattern: string, index: number): string => {
        const i = index < 0 ? text.length + index : index;
        return i < 0 || i > text.length - pattern.length ? text : text.slice(0, i) + text.slice(i + pattern.length);
    },

    repeat_trim: (text: string, length: number): string =>
        text.length === length ? text : text.repeat(Math.ceil(length / text.length)).slice(0, length),

    json_to_array: (json: object): string[] =>
        Object.values(json).map(v => typeof v === 'string' ? v : JSON.stringify(v)),

    pattern_a_to_b: (text: string, pattern_a: string, pattern_b: string): string =>
        text.split(pattern_a).join(pattern_b),

    capitalize_at_index: (str: string, index: number): string => {
        const words = str.split(' ');
        const i = index < 0 ? words.length + index : index;
        return i < 0 || i >= words.length ? str : words.map((w, j) => j === i ? w.charAt(0).toUpperCase() + w.slice(1) : w).join(' ');
    }
}