import React from 'react';

function Input() {
    return (
        <section className="input">
            <ul className="input__options-container">
                <li><button type="button" className="input__option input__option_type_education"></button></li>
                <li><button type="button" className="input__option input__option_type_experience"></button></li>
            </ul>
            <form className="input__form">
                <input className="input__input" placeholder="Ваше сообщение" />
                <button type="submit" className="input__submit-button"></button>
            </form>
            <ul className="input__options-container">
                <li><button type="button" className="input__option input__option_type_hobby"></button></li>
                <li><button type="button" className="input__option input__option_type_contacts"></button></li>
            </ul>
        </section>
    );
  }
  
  export default Input;