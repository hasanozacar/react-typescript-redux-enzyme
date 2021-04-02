import { put, takeLatest } from "redux-saga/effects";
import watcher from "./units";

describe("SAGAS", () => {
  it("should dispatch action  without crash", () => {
    const mockResponse = { articles: "Some content" };
    const generator = watcher();
    generator.next(mockResponse);
    expect(generator.next().done).toBeTruthy();
  });
});
