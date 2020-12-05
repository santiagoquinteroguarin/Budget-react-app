import React, { Fragment, useState } from 'react';
import Error from './Error';

const Question = (props) => {

    const { setSavedBudget, setSavedRemaining, setUpdateQuestion} = props;

    // ?1. state defined
    const [amount, setSavedAmount] = useState(0);
    const [error, setSavedError] = useState(false);

    // ?2 function for get budget
    const defineBudget = (e) => {
        setSavedAmount(parseInt(e.target.value, 10));
    }

    // ?3. Submit for defined the budget
    const addBudget = (e) => {
        e.preventDefault();

        // ?4. validation
        if(amount < 1 || isNaN(amount)) {
            setSavedError(true);
            return;
        }

        // ?5. check validation
        setSavedError(false);

        // ?6.
        setSavedBudget(amount);
        setSavedRemaining(amount);
        setUpdateQuestion(false);
    }

    return (
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>

            {error ? <Error message="El Presupuesto no es valido"/> : null}

            <form onSubmit={addBudget}>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    // ?2. define budget
                    onChange={defineBudget}
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Question;