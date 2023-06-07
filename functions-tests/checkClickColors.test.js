const robot = require("robotjs");
const {
  checkInitialClickColor,
  checkNextClickColor,
} = require("../functions/checkClickColors");

jest.mock("robotjs", () => {
  const mockCapture = jest.fn(() => ({
    colorAt: jest.fn(() => "ff0000"),
  }));

  return {
    moveMouseSmooth: jest.fn(),
    mouseClick: jest.fn(),
    screen: {
      capture: mockCapture,
    },
  };
});

describe("checkInitialClickColor", () => {
  let mockCapture;
  let mockColorAt;

  beforeEach(() => {
    mockColorAt = jest.fn(() => "ff0000");
    mockCapture = jest.spyOn(robot.screen, "capture").mockReturnValue({
      colorAt: mockColorAt,
    });
  });

  afterEach(() => {
    mockCapture.mockRestore();
    jest.clearAllMocks();
  });

  test("should return true if active fishing spot found", () => {
    const x = 100;
    const y = 200;

    const result = checkInitialClickColor(x, y);

    expect(robot.screen.capture).toHaveBeenCalledWith(0, 0, 1920, 1080);
    expect(robot.screen.capture().colorAt).toHaveBeenCalledWith(x, y);
    expect(result).toBe(true);
  });

  test("should return false if no active fishing spot found", () => {
    const x = 100;
    const y = 200;

    // Mocking a different color to simulate no active fishing spot
    mockColorAt.mockReturnValue("#fff");

    const result = checkInitialClickColor(x, y);

    expect(robot.screen.capture).toHaveBeenCalledWith(0, 0, 1920, 1080);
    expect(robot.screen.capture().colorAt).toHaveBeenCalledWith(x, y);
    expect(result).toBe(false);
  });
});

describe("checkNextClickColor", () => {
  let mockCapture;
  let mockColorAt;

  beforeEach(() => {
    mockColorAt = jest.fn(() => "ff0000");
    mockCapture = jest.spyOn(robot.screen, "capture").mockReturnValue({
      colorAt: mockColorAt,
    });
  });

  afterEach(() => {
    mockCapture.mockRestore();
    jest.clearAllMocks();
  });

  test("should return true if active fishing spot still present", () => {
    const x = 100;
    const y = 200;

    const result = checkNextClickColor(x, y);

    expect(mockCapture).toHaveBeenCalledWith(0, 0, 1920, 1080);
    expect(mockColorAt).toHaveBeenCalledWith(x, y);
    expect(result).toBe(true);
  });

  test("should return false if active fishing spot no longer present", () => {
    // Mocking a different color to simulate no active fishing spot
    mockColorAt.mockReturnValue("#fff");

    const x = 100;
    const y = 200;

    const result = checkNextClickColor(x, y);

    expect(mockCapture).toHaveBeenCalledWith(0, 0, 1920, 1080);
    expect(mockColorAt).toHaveBeenCalledWith(x, y);
    expect(result).toBe(false);
  });
});
