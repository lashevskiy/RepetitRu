import React from 'react';
import PropTypes from 'prop-types';
import { Button, Div, FixedLayout } from '@vkontakte/vkui';
import { withNavigation } from '../../containers/HOC/withNavigation';
import { MODALS_ID } from '../../constants/modals';
import { isDesktop } from '../../utils';

const TeacherCardCall = ({ teacher, ...navigationParams }) => {
    const { setActiveModal } = navigationParams;

    const handleClickCall = React.useCallback(
        e => {
            setActiveModal(MODALS_ID.ORDER, { teacher: teacher });
        },
        [teacher, setActiveModal]
    );

    return (
        <FixedLayout vertical="bottom" filled>
            <Div>
                <Button mode="commerce" size="l" stretched onClick={handleClickCall}>
                    {isDesktop() ? 'СВЯЗАТЬСЯ С РЕПЕТИТОРОМ' : 'СВЯЗАТЬСЯ'}
                </Button>
            </Div>
        </FixedLayout>
    );
};

TeacherCardCall.propTypes = {
    teacher: PropTypes.object.isRequired,
};

export default withNavigation(TeacherCardCall);
