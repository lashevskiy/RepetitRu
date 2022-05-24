import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Avatar, Button, Group, Link, MiniInfoCell, RichCell } from '@vkontakte/vkui';
import {
    Icon20CalendarCircleFillRed,
    Icon20FavoriteCircleFillYellow,
    Icon20ListLikeCircleFillBlue,
    Icon20RecentOutline,
    Icon20RoubleCircleFillBlue,
    Icon20WorkOutline,
    Icon24Phone,
} from '@vkontakte/icons';
import TeacherTitle from '../TeacherTitle/TeacherTitle';
import { capitalizeFirstLetter } from '../../utils/text';
import * as Numfix from '../../utils/numfix';
import { withNavigation } from '../../containers/HOC/withNavigation';
import { MODALS_ID } from '../../constants/modals';
import { ShowImages } from '../../bridge';
import { getTeacherPhoto, getTeacherPhotoStyle } from '../../utils/teacherPhoto';
import { format } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import './style.scss';

const b = bemCl('teacher-card-common-info');

const TeacherCardCommonInfo = ({ teacher, ...navigationParams }) => {
    const { setActiveModal } = navigationParams;

    const renderLessonsType = () =>
        capitalizeFirstLetter(
            [
                teacher?.isExternalLessons ? 'у ученика' : null,
                teacher?.isRemoteLessons ? 'дистанционно' : null,
                teacher?.isHomeLessons ? 'у репетитора' : null,
            ]
                .filter(value => value !== null)
                .join(', ')
        );

    const teacherPhoto = React.useMemo(() => (teacher.hasSquarePhoto ? getTeacherPhoto(teacher) : null), [teacher]);

    const style = React.useMemo(() => getTeacherPhotoStyle(teacher), [teacher]);

    const handleClickCall = React.useCallback(
        e => {
            setActiveModal(MODALS_ID.ORDER, { teacher: teacher });
        },
        [teacher, setActiveModal]
    );

    const handleClickPhoto = React.useCallback(
        () => ShowImages([`https:${teacher.photoPathLarge || teacher.photoPathSquareLarge}`], 0),
        [teacher]
    );

    return (
        <Group separator="hide">
            <Group className={b().toString()}>
                <RichCell
                    disabled
                    multiline
                    before={
                        <Avatar
                            style={teacher.hasSquarePhoto ? null : style}
                            size={72}
                            src={teacherPhoto}
                            onClick={handleClickPhoto}
                        />
                    }
                    caption={`${teacher.statusName} · Стаж ${Numfix.numfix(teacher.experience, Numfix.YEARS)}`}
                    actions={
                        <React.Fragment>
                            <Button
                                onClick={handleClickCall}
                                mode="commerce"
                                before={<Icon24Phone width={16} height={16} />}
                            >
                                Связаться
                            </Button>
                        </React.Fragment>
                    }
                >
                    <TeacherTitle teacher={teacher} />
                </RichCell>

                <MiniInfoCell before={<Icon20RoubleCircleFillBlue />} textWrap="short">
                    Стоимость занятий: <Link>от {teacher.minPricePerHour} руб / час</Link>
                </MiniInfoCell>

                <MiniInfoCell before={<Icon20RecentOutline />} textWrap="short">
                    Продолжительность занятия: <Link>от {teacher.lessonDuration} минут</Link>
                </MiniInfoCell>

                <MiniInfoCell before={<Icon20WorkOutline />} textWrap="short">
                    {renderLessonsType()}
                </MiniInfoCell>

                <MiniInfoCell before={<Icon20FavoriteCircleFillYellow />}>
                    Рейтинг репетитора {parseFloat(teacher.starRating).toFixed(2)}
                </MiniInfoCell>

                <MiniInfoCell before={<Icon20ListLikeCircleFillBlue />}>
                    {Numfix.numfix(teacher.reviewCount, Numfix.REVIEW)} ·{' '}
                    {Numfix.numfix(teacher.orderCount, Numfix.MARK)}
                </MiniInfoCell>

                {teacher?.birthDate ? (
                    <MiniInfoCell before={<Icon20CalendarCircleFillRed />}>
                        Возраст: {Numfix.numfix(teacher.age, Numfix.YEARS)} ·{' '}
                        {format(new Date(teacher.birthDate), 'dd MMMM yyyy', { locale: ruLocale })}
                    </MiniInfoCell>
                ) : null}
            </Group>
        </Group>
    );
};

TeacherCardCommonInfo.propTypes = {
    teacher: PropTypes.object.isRequired,
};

export default withNavigation(TeacherCardCommonInfo);
