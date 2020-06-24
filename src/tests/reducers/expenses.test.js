import expensesReducer from '../../reducers/expenses';
import moment from 'moment';

const expenses = [
    {id: "1",
    description:'walo1',
    amount: 250,
    note: 'note1',
    createdAt: 0},
    {id: "2",
    description:'Rent',
    amount: 5000,
    note: 'note2',
    createdAt: moment(0).subtract(4,'days').valueOf()},
    {id: "3",
    description:'Credit Card',
    amount: 700,
    note: 'note3',
    createdAt:  moment(0).add(4,'days').valueOf()}
];

test('setting default state', () => {

    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});


  test('should add expense', () => {
    const expense = {
        id: "7",
        description:'test',
        amount: 2500,
        note: 'note6',
        createdAt: 0
    };
    const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense: expense} );
    expect(state).toEqual([...expenses, expense]);
});

test('should remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-500'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates: {
            amount: 20,
            note: 'edited note'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], {id: "2",
        description:'Rent',
        amount: 20,
        note: 'edited note',
        createdAt: moment(0).subtract(4,'days').valueOf()}, expenses[2]]);
});

test('should not edit expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '255',
        updates: {
            amount: 20,
            note: 'edited note'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
