import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button, Card, Group, Link, MiniInfoCell, RichCell } from '@vkontakte/vkui';
import {
    Icon16Play,
    Icon20ArticleBoxOutline,
    Icon20ArticleOutline,
    Icon20EducationOutline,
    Icon20FavoriteCircleFillYellow,
    Icon20Info,
    Icon20ListLikeCircleFillBlue,
    Icon20PlaceOutline,
    Icon20WorkOutline,
    Icon24Phone,
    Icon28PhoneCircleFillGreen,
    Icon28UsersOutline,
} from '@vkontakte/icons';
import TeacherTitle from '../TeacherTitle/TeacherTitle';
import DotName from '../DotName/DotName';
import { PANELS_ID } from '../../constants/panels';
import { capitalizeFirstLetter } from '../../utils/text';
import * as Numfix from './../../utils/numfix';
import { MODALS_ID } from '../../constants/modals';
import { getTeacherPhoto, getTeacherPhotoStyle } from '../../utils/teacherPhoto';
import { isDesktop } from '../../utils';

const TeacherCardItem = ({ teacher, setTeacherId, filter, ...navigationParams }) => {
    const { setActiveModal } = navigationParams;

    const handleClick = React.useCallback(() => {
        setTeacherId(teacher.id);
        navigationParams.goToPage(PANELS_ID.TeacherPanel);
    }, [teacher, setTeacherId, navigationParams]);

    const renderPlaces = React.useMemo(() => {
        const dots = [];

        teacher.teachingPlaces.forEach(place => {
            place.stationsInRange.forEach(({ station }) => {
                dots.push({
                    name: station.name,
                    color: station.metroLineColor,
                });
            });
        });

        return (
            <span>
                {dots.map((dot, index) => {
                    return dot.color ? (
                        <DotName key={index} color={dot.color} name={dot.name} />
                    ) : (
                        <span key={index}>{dot.name}</span>
                    );
                })}
            </span>
        );
    }, [teacher]);

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

    const renderInfo = React.useMemo(() => teacher.teachingSubjects[0].pureComments, [teacher]);

    const renderUserCategories = () => capitalizeFirstLetter(teacher.teachingSubjects[0].categoriesString);

    const renderDivisions = () =>
        capitalizeFirstLetter(
            String(
                teacher.teachingSubjects[0].divisions
                    .map(item => item.name)
                    .join(', ')
                    .trim()
            )
        );

    const renderLesson = () => capitalizeFirstLetter(teacher.teachingSubjects[0].subject.name);

    const teacherPhoto = React.useMemo(() => (teacher.hasSquarePhoto ? getTeacherPhoto(teacher) : null), [teacher]);

    const style = React.useMemo(() => getTeacherPhotoStyle(teacher), [teacher]);

    const handleClickVideo = React.useCallback(
        e => {
            e.stopPropagation();
            setActiveModal(MODALS_ID.VIDEO, { videoId: teacher.presentationVideoYoutubeId });
        },
        [teacher, setActiveModal]
    );

    const handleClickCall = React.useCallback(
        e => {
            e.stopPropagation();
            setActiveModal(MODALS_ID.ORDER, { teacher: teacher });
        },
        [teacher, setActiveModal]
    );

    return (
        <Card size="l" key={teacher.id} mode="shadow" onClick={handleClick}>
            <Group>
                <RichCell
                    disabled
                    multiline
                    before={<Avatar size={72} src={teacherPhoto} style={teacher?.hasSquarePhoto ? null : style} />}
                    after={!isDesktop() ? <Icon28PhoneCircleFillGreen onClick={handleClickCall} /> : null}
                    caption={`${teacher.statusName} · Стаж ${Numfix.numfix(teacher.experience, Numfix.YEARS)}`}
                    actions={
                        !teacher.presentationVideoYoutubeId ? null : (
                            <>
                                <Button mode="secondary" before={<Icon16Play />} onClick={handleClickVideo}>
                                    Видеопрезентация
                                </Button>
                                {isDesktop() ? (
                                    <Button
                                        onClick={handleClickCall}
                                        mode="commerce"
                                        before={<Icon24Phone width={16} height={16} />}
                                    >
                                        Связаться
                                    </Button>
                                ) : null}
                            </>
                        )
                    }
                >
                    <TeacherTitle teacher={teacher} />
                </RichCell>

                <MiniInfoCell
                    before={<Icon20EducationOutline />}
                    after={<Link>от {teacher.minPricePerHourFiltered} руб / час</Link>}
                    textWrap="short"
                >
                    {renderLesson()}
                </MiniInfoCell>

                <MiniInfoCell before={<Icon20WorkOutline />}>{renderLessonsType()}</MiniInfoCell>

                {renderInfo ? (
                    <MiniInfoCell before={<Icon20ArticleOutline />} textWrap="short">
                        {renderInfo}
                    </MiniInfoCell>
                ) : null}

                <MiniInfoCell before={<Icon20FavoriteCircleFillYellow />}>
                    Рейтинг репетитора {parseFloat(teacher.starRating).toFixed(2)}
                </MiniInfoCell>

                <MiniInfoCell before={<Icon20ListLikeCircleFillBlue />}>
                    {Numfix.numfix(teacher.reviewCount, Numfix.REVIEW)} ·{' '}
                    {Numfix.numfix(teacher.orderCount, Numfix.MARK)}
                </MiniInfoCell>

                <MiniInfoCell before={<Icon20ArticleBoxOutline />} textWrap="short">
                    {renderDivisions()}
                </MiniInfoCell>

                <MiniInfoCell before={<Icon28UsersOutline width={20} height={20} />} textWrap="short">
                    {renderUserCategories()}
                </MiniInfoCell>

                {teacher?.teachingPlaces.length > 0 ? (
                    <MiniInfoCell textWrap="short" before={<Icon20PlaceOutline />}>
                        {renderPlaces}
                    </MiniInfoCell>
                ) : null}

                <MiniInfoCell before={<Icon20Info />} mode="more">
                    Подробная информация
                </MiniInfoCell>
            </Group>
        </Card>
    );
};

TeacherCardItem.propTypes = {
    teacher: PropTypes.object.isRequired,
};

export default React.memo(TeacherCardItem);
