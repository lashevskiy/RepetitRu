import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Card, Div, Group, Header, List } from '@vkontakte/vkui';
import LessonCard from '../LessonCard/LessonCard';
import { isDesktop } from '../../utils';
import './style.scss';

const b = bemCl('overview-lessons');

const OverviewLessons = ({ title, lessons, setLesson, resetFilter }) => (
    <Div>
        <Card mode="shadow">
            <Group separator="hide" header={<Header mode="primary">{title}</Header>}>
                <List className={isDesktop() ? b() : null}>
                    {lessons.map((item, index) => (
                        <LessonCard key={index} item={item} setLesson={setLesson} resetFilter={resetFilter} />
                    ))}
                </List>
            </Group>
        </Card>
    </Div>
);

OverviewLessons.propTypes = {
    title: PropTypes.string.isRequired,
    lessons: PropTypes.array.isRequired,
    setLesson: PropTypes.func.isRequired,
    resetFilter: PropTypes.func.isRequired,
};

export default React.memo(OverviewLessons);
