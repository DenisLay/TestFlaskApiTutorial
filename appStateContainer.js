class AppStateContainer {
    constructor() {
        this.states = [];
    }

    set({key, value}) {
        let isDone = false;
        this.states.map(item => {
            if (item.key === key) {
                item.value = value;
                isDone = true;
            }
        })

        if (!isDone) {
            this.states.push({key, value});
        }
    }

    get(key) {
        return this.states.filter(item => item.key === key);
    }
}