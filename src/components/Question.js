import React, { Fragment } from 'react';

const Question = () => {
    return (
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>

            <form>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
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