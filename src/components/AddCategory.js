import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form } from 'react-bootstrap';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState();

    const handleInputchange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>¿Que buscas?</Form.Label>
                <Form.Control
                    type="text"
                    value={inputValue}
                    onChange={(e) => handleInputchange(e)}
                    placeholder="One Piece, Dragon Ball Z, One Punch Man..." />
                <Form.Text className="text-muted">
                    Aqui podras buscar todos tus gifs favoritos 😁😄
                </Form.Text>
            </Form.Group>
        </Form>
    );
};


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}