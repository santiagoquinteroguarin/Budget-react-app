import React, { useState } from 'react';

const Form = () => {
    return (
        <form action="">
            <h2>Agrega tus gastos aquí</h2>

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 500"
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