import React, { Fragment } from 'react';

const ControlBudget = ({budget, remaining}) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {budget}
            </div>
            <div className="alert">
                Restante: $ {remaining}
            </div>
        </Fragment>
        
    );
}

export default ControlBudget;