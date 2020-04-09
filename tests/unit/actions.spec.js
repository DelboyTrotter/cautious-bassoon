import actions from '@/store/actions';
import types from '@/store/mutationTypes';
import { loadItemsList, fetchItemDetails } from '@/api/';
import flushPromises from 'flush-promises';

jest.mock('@/api/index');

describe('actions', () => {
  test('loadItemsList calls commit with the result of loadItemsList',
    async () => {
      expect.assertions(1);
      const items = [{}, {}];
      loadItemsList.mockImplementationOnce(() => Promise.resolve(items));
      const context = {
        commit: jest.fn(),
      };
      actions.loadItemsList(context);
      await flushPromises();
      expect(context.commit).toHaveBeenCalledWith(types.SET_ITEMS_LIST, items);
    });
  test('setItemDetails calls commit with result of setItemDetails',
    async () => {
      expect.assertions(1);
      const itemDetails = {id: 1};
      fetchItemDetails.mockImplementationOnce(() => Promise.resolve(itemDetails));
      const context = {
        commit: jest.fn(),
      };
      actions.setItemDetails(context);
      await flushPromises();
      expect(context.commit).toHaveBeenCalledWith(types.SET_ITEM_DETAILS, itemDetails);
    });
});