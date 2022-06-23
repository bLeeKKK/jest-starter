/**
 * 第一个配置
*/
// tests/jest-setup.ts
// Object.defineProperty(global, 'localStorage', {
//   value: {
//     store: {} as Record<string, string>,
//     setItem(key: string, value: string) {
//       this.store[key] = value;
//     },
//     getItem(key: string) {
//       return this.store[key];
//     },
//     removeItem(key: string) {
//       delete this.store[key];
//     },
//     clear() {
//       this.store = {}
//     }
//   },
//   configurable: true,
// })

/**
 * Mock Location
 * 这个包就是专门用于修改网页地址的。缺点是我们只能用它 Mock 的 3 个 API
 * window.location.assign
 * reload
 * replace
*/
import "jest-location-mock";


/**
 * 这在调试时可以很方便地看到结果，但是会生成很多干扰项。举个例子，如代码里有
 * console.error('debug')，那么在跑测试时就会生成很多干扰的报错信息。
 * 因此，我们在写测试时应该要把 Logger 给 Mock 掉。
*/

// 方法一
// jest.spyOn(console, 'log').mockReturnValue();
// jest.spyOn(console, 'info').mockReturnValue();
// jest.spyOn(console, 'warn').mockReturnValue();
// jest.spyOn(console, 'error').mockReturnValue();

// 方法二
import mockConsole from "jest-mock-console";
mockConsole()
