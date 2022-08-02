import * as envUtils from 'utils/env';


// describe("env", () => {
//   it('开发环境', () => {
//     // @ts-ignore
//     jest.spyOn(envUtils, 'env', 'get').mockReturnValue('dev')

//     expect(envUtils.env).toEqual('dev');
//   })

//   it('正式环境', () => {
//     // @ts-ignore
//     jest.spyOn(envUtils, 'env', 'get').mockReturnValue('prod')

//     expect(envUtils.env).toEqual('prod');
//   })
// });


// const originEnv = envUtils.env;
// describe("env", () => {
//   afterEach(() => {
//     // @ts-ignore
//     envUtils.env = originEnv;
//   })
//   it('开发环境', () => {
//     // @ts-ignore
//     envUtils.env = 'dev'
//     expect(envUtils.env).toEqual('dev');
//   })
//   it('正式环境', () => {
//     // @ts-ignore
//     envUtils.env = 'prod'
//     expect(envUtils.env).toEqual('prod');
//   })
// });


const originEnv = envUtils.env;
describe("env", () => {
  afterEach(() => {
    Object.defineProperty(envUtils, 'env', {
      value: originEnv,
      writable: true,
    })
  })
  it('开发环境', () => {
    Object.defineProperty(envUtils, 'env', {
      value: 'dev',
      writable: true,
    })
    expect(envUtils.env).toEqual('dev');
  })
  it('正式环境', () => {
    Object.defineProperty(envUtils, 'env', {
      value: 'prod',
      writable: true,
    })
    expect(envUtils.env).toEqual('prod');
  })
});
