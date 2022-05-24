import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Card, CardGrid, Div, Group, Title, withModalRootContext } from '@vkontakte/vkui';
import TeacherCallOrder from '../TeacherCallOrder/TeacherCallOrder';
import './style.scss';

const b = bemCl('order-banner');

const OrderBanner = ({ user, isPanel }) => (
    <Group separator="hide" className={b()}>
        <CardGrid>
            <Card size="l" mode="shadow">
                <Group>
                    {!isPanel ? null : (
                        <Div>
                            <Title level="1" weight="bold">
                                Подобрать репетитора?
                            </Title>
                        </Div>
                    )}
                    <Div>
                        <Title level="3" weight="regular" className={b('subtitle'.toString())}>
                            Бесплатно и без обязательств. Перезвоним в течение 15 минут.
                        </Title>
                    </Div>
                    <TeacherCallOrder user={user} isPanel={isPanel} />
                </Group>
            </Card>
        </CardGrid>
    </Group>
);

OrderBanner.propTypes = {
    user: PropTypes.object,
    isPanel: PropTypes.bool,
};

OrderBanner.defaultProps = {
    isPanel: false,
    user: null,
};

export default React.memo(withModalRootContext(OrderBanner));
