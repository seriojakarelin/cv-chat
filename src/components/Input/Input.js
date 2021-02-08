import React from 'react';

function Input() {
    return (
        <section className="input">
            <ul className="input__options-container">
                <li className="input__option input__option_type_education"></li>
                <li className="input__option input__option_type_experience"></li>
            </ul>
            <form className="input__form">
                <input className="input__input" placeholder="Не стесняйтесь узнать обо мне больше" />
            </form>
            <ul className="input__options-container">
                <li className="input__option input__option_type_hobby"></li>
                <li className="input__option input__option_type_contacts"></li>
            </ul>
        </section>
    );
  }
  
  export default Input;