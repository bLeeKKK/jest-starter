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


/**
 * 注：这里引用了 antd 的 Col 和 Row 组件，跑测试时会报：[TypeError: window.matchMedia is not a function]。
 * 这是因为 jsdom (opens new window)没有实现 window.matchMedia，所以你要在 jest-setup.ts 里添加这个 API 的 Mock：
 * 
*/
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

/**
 * 用于判断 dom 组件的展示
 * 
 * https://www.npmjs.com/package/@testing-library/jest-dom
 * 
 * toBeDisabled
 * toBeEnabled
 * toBeEmptyDOMElement
 * toBeInTheDocument
 * toBeInvalid
 * toBeRequired
 * toBeValid
 * toBeVisible
 * toContainElement
 * toContainHTML
 * toHaveAccessibleDescription
 * toHaveAccessibleName
 * toHaveAttribute
 * toHaveClass
 * toHaveFocus
 * toHaveFormValues
 * toHaveStyle
 * toHaveTextContent
 * toHaveValue
 * toHaveDisplayValue
 * toBeChecked
 * toBePartiallyChecked
 * toHaveErrorMessage
  * 
*/
import '@testing-library/jest-dom'



/**
 * msw (opens new window)可以拦截指定的 Http 请求，有点类似 Mock.js (opens new window)，是做测试时一个非常强大好用的 Http Mock 工具。
 * 
 * 如果你想在某个测试文件中想单独指定某个接口的 Mock 返回， 可以使用 server.use(mockHandler) 来实现
 * */ 
import server from "./mockServer/server";
beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});