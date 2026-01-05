type CacheValue = {
  value: any;
  expiry: number;
};

class Cache {
  private store: Map<string, CacheValue> = new Map();

  set(key: string, value: any, ttlMs: number) {
    const expiry = Date.now() + ttlMs;
    this.store.set(key, { value, expiry });
  }

  get(key: string) {
    const item = this.store.get(key);
    if (!item) return null;

    if (Date.now() > item.expiry) {
      this.store.delete(key);
      return null;
    }

    return item.value;
  }

  delete(key: string) {
    this.store.delete(key);
  }

  clear() {
    this.store.clear();
  }
}

export const cache = new Cache();
