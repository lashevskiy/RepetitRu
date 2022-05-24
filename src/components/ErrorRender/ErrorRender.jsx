import React from 'react';
import PropTypes from 'prop-types';
import { Button, Footer, Div } from '@vkontakte/vkui';

const ErrorRender = ({ errorComponent, onClick }) => {
    if (errorComponent) {
        return errorComponent;
    }

    return (
        <Footer>
            <Div>Не удалось получить данные</Div>
            <Div>
                <Button mode="outline" onClick={onClick}>
                    Попробовать снова
                </Button>
            </Div>
        </Footer>
    );
};

ErrorRender.propTypes = {
    errorComponent: PropTypes.node,
    onClick: PropTypes.func.isRequired,
};

ErrorRender.defaultProps = {
    errorComponent: null,
};

export default ErrorRender;
