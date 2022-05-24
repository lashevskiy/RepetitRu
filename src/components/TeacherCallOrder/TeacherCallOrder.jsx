import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { FormLayout, FormLayoutGroup, FormStatus, Group, Input, Textarea, withModalRootContext } from '@vkontakte/vkui';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import { withNavigation } from '../../containers/HOC/withNavigation';
import TeacherOrderPlaceholder from '../TeacherOrderPlaceholder/TeacherOrderPlaceholder';
import axios from 'axios';
import { isApp } from '../../utils';
import './style.scss';

const b = bemCl('teacher-call-order');

const EMPTY_VALUE = '';

const TeacherCallOrder = ({ user, updateModalHeight, isPanel, ...navigationParams }) => {
    const [phone, setPhone] = React.useState(EMPTY_VALUE);
    const [name, setName] = React.useState(EMPTY_VALUE);
    const [success, setSuccess] = React.useState(false);
    const [validatePhone, setValidatePhone] = React.useState(true);
    const [validateName, setValidateName] = React.useState(true);

    const handleClick = React.useCallback(() => {
        const { teacher, comments } = navigationParams.activeModalParams;
        if (phone !== EMPTY_VALUE && name !== EMPTY_VALUE) {
            setSuccess(true);
            setValidatePhone(true);
            setValidateName(true);

            // TODO create action and move to saga
            axios.post('https://api.repetit.ru/public/createorder', {
                contactName: String(name),
                phone: String(phone),
                partnerId: 'p437',
                teacherIds: teacher.id ? [teacher.id] : EMPTY_VALUE,
                comments: comments ? comments : EMPTY_VALUE,
            });
        } else {
            if (phone === EMPTY_VALUE) {
                setValidatePhone(false);
            }

            if (name === EMPTY_VALUE) {
                setValidateName(false);
            }
        }
    }, [phone, name, navigationParams]);

    const handleChangePhone = React.useCallback(value => {
        const phone = value.target.value.replace(/^\s*/, '');
        setPhone(phone);
        if (phone !== EMPTY_VALUE) {
            setValidatePhone(true);
        } else {
            setValidatePhone(false);
        }
    }, []);

    const handleChangeName = React.useCallback(value => {
        const name = value.target.value.replace(/^\s*/, '');
        setName(name);
        if (name !== EMPTY_VALUE) {
            setValidateName(true);
        } else {
            setValidateName(false);
        }
    }, []);

    React.useEffect(() => {
        updateModalHeight();

        const name = isApp() || user === null ? '' : `${user.first_name} ${user.last_name}`;
        setName(name);
        if (name !== EMPTY_VALUE) {
            setValidateName(true);
        }
    }, [user, updateModalHeight]);

    return (
        <div className={b()}>
            <Group separator="hide">
                {success ? (
                    <TeacherOrderPlaceholder />
                ) : (
                    <FormLayout>
                        <FormLayoutGroup>
                            {isPanel ? (
                                <Textarea placeholder="Что планируете изучать, как часто, и какая цель занятий?" />
                            ) : (
                                <FormStatus mode="default">
                                    Чтобы связаться с репетитором, оставьте, пожалуйста, ваши контактные данные. Мы
                                    свяжемся с вами в течение 15 минут.
                                </FormStatus>
                            )}
                            <Input
                                status={validateName ? 'default' : 'error'}
                                top="Ваше имя"
                                value={name}
                                onChange={handleChangeName}
                                placeholder="Введите имя"
                            />
                            <Input
                                status={validatePhone ? 'default' : 'error'}
                                top="Номер телефона"
                                type="tel"
                                value={phone}
                                onChange={handleChangePhone}
                                placeholder="Введите номер телефона"
                            />
                            <Button
                                size="xl"
                                className={b('button').toString()}
                                mode="overlay_primary"
                                onClick={handleClick}
                            >
                                Подобрать мне репетитора
                            </Button>
                        </FormLayoutGroup>
                    </FormLayout>
                )}
            </Group>
        </div>
    );
};

TeacherCallOrder.propTypes = {
    user: PropTypes.object,
    updateModalHeight: PropTypes.func,
    isPanel: PropTypes.bool,
};

TeacherCallOrder.defaultProps = {
    isPanel: false,
    user: null,
};

export default withNavigation(withModalRootContext(TeacherCallOrder));
