import {addExpense, removeExpense, editExpense} from '../../actions/expenses';
import {v1 as uuid} from 'uuid';

test('removing expense', () => {
    expect(removeExpense({id: '125301df'})).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '125301df'
    });
});

test('adding expense', () => {
    expect(addExpense({
            description: 'ok',
            amount: 2531,
            createdAt: '123648',
            note: 'okf'  
        })).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
              id: expect.any(String),
              description: 'ok',
              note: 'okf',
              amount: 2531,
              createdAt: '123648'
            }
    });
});

test('adding empty expense', () => {
    expect(addExpense()).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
              id: expect.any(String),
              description: '',
              note: '',
              amount: 0,
              createdAt: 0
            }
    });
});

test('editing expense', () => {
    expect(editExpense('125301df',{description: 'dfgsfg', amount: 300})).toEqual({
        type: 'EDIT_EXPENSE',
        id: '125301df',
        updates: {description: 'dfgsfg', amount: 300}
    });
});

