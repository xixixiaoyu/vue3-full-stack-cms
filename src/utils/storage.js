import config from "../config";

export default {
  setItem(key, val) {
    const obj = this.getStorageObj();
    obj[key] = val;
    window.localStorage.setItem(config.namespace, JSON.stringify(obj));
  },
  getItem(key) {
    return this.getStorageObj()[key];
  },
  getStorageObj() {
    return JSON.parse(window.localStorage.getItem(config.namespace) || "{}");
  },
  clearItem(key) {
    const obj = this.getStorageObj();
    delete obj[key];
    window.localStorage.setItem(config.namespace, JSON.stringify(obj));
  },
  clearAll() {
    window.localStorage.clear();
  },
};
