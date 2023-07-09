import { filterByName, filterByProps, scrollEnd } from './apiHelpers';

describe('API Helpers', () => {
  const mockData = { data: { characters: { results: [] } } };
  const mockQueryFunction = jest.fn().mockResolvedValue(mockData);
  const filter = {};
  const setData = jest.fn();
  const setPage = jest.fn();
  const dataTitle = 'characters';

  describe('filterByName', () => {
    const name = 'Rick';
    const setFilter = jest.fn();

    test('should filter data by name', async () => {
      await filterByName({ filter, queryFunction: mockQueryFunction, setFilter, setData, setPage, dataTitle, name });

      expect(mockQueryFunction).toHaveBeenCalledWith({ variables: { page: 1, ...filter, name } });
      expect(setFilter).toHaveBeenCalledWith({ ...filter, name });
      expect(setPage).toHaveBeenCalledWith(2);
      expect(setData).toHaveBeenCalledWith([]);
    });
  });

  describe('filterByProps', () => {
    const newFilters = { species: 'Human', gender: 'Male', status: 'Alive' };
    const setFilter = jest.fn();

    test('should filter data by props', async () => {
      await filterByProps({ newFilters, filter, queryFunction: mockQueryFunction, setFilter, setPage, setData, dataTitle });

      expect(mockQueryFunction).toHaveBeenCalledWith({ variables: { page: 1, ...filter, ...newFilters } });
      expect(setFilter).toHaveBeenCalledWith({ ...filter, ...newFilters });
      expect(setPage).toHaveBeenCalledWith(2);
      expect(setData).toHaveBeenCalledWith([]);
    });
  });

  describe('scrollEnd', () => {
    const page = 1;

    test('should fetch more data on scroll end', async () => {
      await scrollEnd({ queryFunction: mockQueryFunction, page, filter, setData, setPage, dataTitle });

      expect(mockQueryFunction).toHaveBeenCalledWith({ variables: { page, ...filter } });
      expect(setData).toHaveBeenCalledWith([]);
      expect(setPage).toHaveBeenCalledWith(2);
    });
  });
});
