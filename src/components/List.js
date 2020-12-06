import React from 'react';
import Expense from './Expense';

const List = ({expenses}) => {
    return (
        <div className="expenses-executed">
            <h2>Listado</h2>
            {expenses.map(expense => (
                <Expense
                    key={expense.id}
                    expense={expense}
                />
            ))}
        </div>
    );
}

export default List;