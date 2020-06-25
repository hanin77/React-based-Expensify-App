import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render Expense Item', () => {
    const wrapper = shallow(<ExpenseListItem expenses={expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();

});


