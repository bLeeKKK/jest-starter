import useCounter from "hooks/useCounter";
import { act, render } from "@testing-library/react";
import React from "react";

const setUp = (initialValue: number) => {
  const returnVal = {}

  const UseCounterTest = () => {
    const [counter, utils] = useCounter(initialValue);

    Object.assign(returnVal, { counter, utils });

    return null;
  }

  render(<UseCounterTest />);

  return returnVal;
}

describe("useCounter", () => {
  it("做加法", async () => {
    const useCounterData = setUp(0) as any;
    act(() => {
      useCounterData.utils.inc(1);
    });
    expect(useCounterData.counter).toBe(1);
  })
  it("做减法", async () => {
    const useCounterData = setUp(0) as any;
    act(() => {
      useCounterData.utils.dec(1);
    });
    expect(useCounterData.counter).toBe(-1);
  })
  it("设置值", async () => {
    const useCounterData = setUp(0) as any;
    act(() => {
      useCounterData.utils.set(11);
    });
    expect(useCounterData.counter).toBe(11);
  })
  it("重置值", async () => {
    const useCounterData = setUp(0) as any;
    act(() => {
      useCounterData.utils.inc(1);
      useCounterData.utils.reset();
    });
    expect(useCounterData.counter).toBe(0);
  })
});

