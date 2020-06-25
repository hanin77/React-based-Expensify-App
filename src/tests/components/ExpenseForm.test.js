import React from 'react';
import {shallow }from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render empty form without data', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    
});

test('should render form with data', () => {
    const wrapper = shallow(<ExpenseForm expenses ={expenses[2]} />);
    expect(wrapper).toMatchSnapshot();
    
});
