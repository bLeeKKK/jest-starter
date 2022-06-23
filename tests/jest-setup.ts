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
