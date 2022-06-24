import getSearchObj from "utils/getSearchObj";

describe('获取页面地址参数', () => {
  it("可以获取当前网址的查询参数对象", () => {
    // window.location.href = "https://www.baidu.com?a=1&b=2";

    // Object.defineProperty(window, 'location', {
    //   writable: true,
    //   value: { href: 'https://google.com?a=1&b=2', search: '?a=1&b=2' },
    // });

    // global.jsdom.reconfigure({
    //   url: "https://www.baidu.com?a=1&b=2",
    // });

    window.location.assign('https://www.baidu.com?a=1&b=2');

    expect(window.location.search).toEqual("?a=1&b=2");
    expect(getSearchObj()).toEqual({
      a: "1",
      b: "2",
    });
  })

  it("空参数返回空", () => {
    // Object.defineProperty(window, 'location', {
    //   writable: true,
    //   value: { href: 'https://google.com', search: '' },
    // });

    // global.jsdom.reconfigure({
    //   url: "https://www.baidu.com",
    // });

    window.location.assign('https://www.baidu.com');

    expect(window.location.search).toEqual("");
    expect(getSearchObj()).toEqual({});
  });
})