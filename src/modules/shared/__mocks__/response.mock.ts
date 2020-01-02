export const responseMock: any = {
  status: jest
    .fn(() => ({
      json: jest.fn(),
    }))
    .mockReturnValue({ json: jest.fn() }),
};
