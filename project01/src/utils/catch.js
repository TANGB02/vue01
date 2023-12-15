class LocalCatch {
  // 后台返回的是json数据   特别提醒  一定要将json数据转换为字符串 JSON.stringify(value)
  setToken(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  getToken(key) {
    const value = window.localStorage.getItem(key);
    return JSON.stringify(value);
  }
  deleteToken(key) {
    const value = window.localStorage.removeItem(key);
    if (value) {
      return JSON.stringify(value);
    }
  }
  clearToken() {
    window.localStorage.clear();
  }
}
export default new LocalCatch();
