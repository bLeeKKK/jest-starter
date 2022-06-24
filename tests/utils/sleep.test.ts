import sleep from "utils/sleep";

// describe('sleep', () => {
//   beforeAll(() => {
//     jest.useFakeTimers();
//   })

//   it('可以睡眠 1000ms', async () => {
//     const callback = jest.fn();

//     // 会报错
//     // const act = async () => {
//     //   await sleep(1000)
//     //   callback();
//     // }
//     // act()

//     // 会报错
//     // sleep(1000)
//     //   .then(() => {
//     //     callback()
//     //   })

//     expect(callback).not.toHaveBeenCalled();

//     jest.runAllTimers();

//     expect(callback).toHaveBeenCalledTimes(1);
//   })
// })

// test('执行顺序', async () => {
//   console.log('1');
//   setTimeout(() => { console.log('6'); }, 0);
//   const promise = new Promise<undefined>(resolve => {
//     console.log('2');
//     resolve(undefined);
//   }).then(() => {
//     console.log('4');
//   });
//   console.log('3');
//   await promise;
//   console.log('5');
// });

describe("sleep", () => {
  it("可以在 1s 后再执行", async () => {
    jest.useFakeTimers();

    const act = async (callback: () => void) => {
      await sleep(1000);
      callback();
    };

    const mockCallback = jest.fn();

    const promise = act(mockCallback);

    // mockCallback 还未调用
    expect(mockCallback).not.toBeCalled();

    // 清算 Jest Message Queue 的回调，其中会执行 setTimeout 里的 resolve 函数
    jest.runAllTimers();

    // 执行 callback 内容
    await promise;

    // mockCallback 已调用
    expect(mockCallback).toBeCalled();
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
