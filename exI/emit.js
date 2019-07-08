class EventEmitter {
    constructor(events = {}) {
        this.events = events;
    }

    subscribe = (eName, cb) => {
        let existing = this.events[eName];
        if (!existing) {
            existing = new Map()
            existing.set(cb, 0)
        }
        existing.set(cb, existing.get(cb) + 1);
        return {
            unsubscribe = () => {
                let current = existing.get(cb);
                if (current > 1) {
                    existing.set(cb, existing.get(cb) - 1);
                } else { existing.delete(cb) }
            }
        }
    }

    emit = (eName) => {
        let existing = this.events[eName];
        Array.from(existing.keys()).forEach(e => (e)())
    }
}