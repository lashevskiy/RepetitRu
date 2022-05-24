import React from 'react';
import PropTypes from 'prop-types';
import { Icon16Done } from '@vkontakte/icons';
import { Avatar, Snackbar } from '@vkontakte/vkui';

const blueBackground = {
    backgroundColor: 'var(--accent)',
};

const SnackBarComponent = ({ title, setSnackbar }) => {
    const onClose = React.useCallback(() => setSnackbar(null), [setSnackbar]);

    return (
        <Snackbar
            layout="vertical"
            onClose={onClose}
            before={
                <Avatar size={24} style={blueBackground}>
                    <Icon16Done fill="#fff" width={14} height={14} />
                </Avatar>
            }
        >
            {title}
        </Snackbar>
    );
};

SnackBarComponent.propTypes = {
    title: PropTypes.string.isRequired,
    setSnackbar: PropTypes.func.isRequired,
};

export default React.memo(SnackBarComponent);
