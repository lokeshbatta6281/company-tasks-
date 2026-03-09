if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

const Storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },
    remove(key) {
        localStorage.removeItem(key);
    },
   
    clearSession() {
        this.remove('session');
    }
};