import storage from "utils/storage";

describe('storage', () => {
  it('设置缓存值', () => {
    storage.set('newKey', "hello");
    expect(localStorage.getItem("my-app-newKey")).toEqual('hello');
  })

  it('获取缓存值', () => {
    localStorage.setItem("my-app-newKey", "value");
    expect(storage.get('newKey')).toEqual('value');

    // localStorage.setItem("my-app-newKey", "hello");
    // expect(storage.get("newKey")).toEqual("hello");
})
});