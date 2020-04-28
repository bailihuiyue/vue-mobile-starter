const storage = {
    set(key, value) {
        if (typeof value == 'object') {
            value = JSON.stringify(value);
        }
        sessionStorage.setItem(key, value);
    },

    remove(key) {
        sessionStorage.removeItem(key);
    },

    get(key) {
        const value = sessionStorage.getItem(key);
        try {
            return JSON.parse(value)
        } catch (ev) {
            return null;
        }
    },
    clear() {
        sessionStorage.clear();
    }
};
export default storage;
