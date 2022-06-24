import storage from "utils/storage";

describe('storage', () => {
  it('缓存值', () => {
    storage.set('newKey', "hello");
    expect(localStorage.getItem("my-app-newKey")).toEqual('hello');
  })
});