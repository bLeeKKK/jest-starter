import after1000ms from "utils/after1000ms";

// function randocall(fn: any) {
//   return fn('20', 29);
// }

// test('randocall calls its callback with a number', () => {
//   const mock = jest.fn();
//   randocall(mock);
//   expect(mock).toBeCalledWith(expect.anything(), expect.any(Number));
// });

// describe("after1000ms", () => {
//   it("可以在 1000ms 后自动执行函数", (done) => {
//     after1000ms(() => {
//       expect("???");
//       done();
//     });
//   });
// })

// describe("after1000ms", () => {
//   beforeAll(() => {
//     jest.useFakeTimers();
//   });

//   it("可以在 1000ms 后自动执行函数", () => {
//     jest.spyOn(global, "setTimeout");

//     after1000ms();

//     expect(setTimeout).toHaveBeenCalledTimes(1);
//     expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
//     /**
//      * toBeCalledWith 是 toHaveBeenCalledWith 的别名
//     */
//     // expect(setTimeout).toBeCalledWith(expect.any(Function), 1000); 
//   });
// });

// describe("after1000ms", () => {
//   beforeAll(() => {
//     jest.useFakeTimers();
//   });

//   it("可以在 1000ms 后自动执行函数", () => {

//     // after1000ms(() => {
//     //   expect("???");
//     //   done();
//     // });

//     jest.spyOn(global, "setTimeout");
//     after1000ms();
//     expect(setTimeout).toHaveBeenCalledTimes(1);
//     expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
//   });
// });

describe("after1000ms", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it("可以在 1000ms 后自动执行函数", () => {
    jest.spyOn(global, "setTimeout");
    const callback = jest.fn();
    
    expect(callback).not.toHaveBeenCalled();

    after1000ms(callback);

    jest.runAllTimers();

    expect(callback).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
  });
});
