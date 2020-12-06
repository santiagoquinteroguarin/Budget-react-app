import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({setSavedExpense, setSavedCreateExpense}) => {

    // ?8. state defined
    const [name, setSavedName] = useState('');
    const [amount, setSavedAmount] = useState(0);
    const [error, setSavedError] = useState(false);

    // ?9. when user added to spendint
    const AddExpense = (e) => {
        e.preventDefault();
        
        // ?10. validation
        if(amount < 1 || isNaN(amount) || name.trim() === '') {
            setSavedError(true);
            return;
        }

        setSavedError(false);

        // ?11. build the expense
        const expense = {
            name,
            amount,
            id: shortid.generate()
        }

        // ?12. pass the expense to the main component
        setSavedExpense(expense);
        setSavedCreateExpense(true);

        //  ?13. reset form
        setSavedName('');
        setSavedAmount(0);
    }

    return (
        <form onSubmit={AddExpense}>
            <h2>Agrega tus gastos aquí</h2>

            {error ? <Error message="Ambos campos son obligatorios o Presupuesto Incorrecto"/> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    // ?7.
                    value={name}
                    onChange={e => setSavedName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 500"
                    // ?7.
                    value={amount}
                    onChange={e => setSavedAmount(parseInt(e.target.value, 10))}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agredar Gasto"
            />
        </form>
    );
}

export default Form;