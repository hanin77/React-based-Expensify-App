import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('filter on default filter value', () => {

    const state = filtersReducer(undefined, '@@INIT');
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')

    });
});

test('set sortBy to amount', () => {

    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount');
});

test('set sortBy to date', () => {

    const state = filtersReducer(undefined, {type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('set text filter', () => {
    const curentState = {
        text: 'bb',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
      };
    const state = filtersReducer(curentState, {type: 'SET_TEXT_FILTER', text: 'kkk'});
    expect(state.text).toBe('kkk');
});

test('set startDate filter', () => {

    const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: moment(25)});
    expect(state.startDate).toEqual(moment(25));
});

test('set endDate filter', () => {
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: moment(265)});
    expect(state.endDate).toEqual(moment(265));
});






