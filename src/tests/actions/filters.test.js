import {sortByAmount, sortByDate, setEndDate, setStartDate, setTextFilter} from '../../actions/filters'
import moment from 'moment';

test('setting text filter', () => {
    expect(setTextFilter('Coffee')).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Coffee'
    });
});

test('setting text filter with empty param', () => {
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});


test('sorting By Amount', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});


test('sorting By Date', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('setting the start date', () => {
    expect(setStartDate(moment(0))).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('setting the end date', () => {
    expect(setEndDate(moment(0))).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});
