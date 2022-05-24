import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Group, Header, Link, MiniInfoCell, Separator } from '@vkontakte/vkui';
import {
    Icon20ArticleBoxOutline,
    Icon20HomeOutline,
    Icon20UserOutline,
    Icon28ComputerOutline,
    Icon28UsersOutline,
} from '@vkontakte/icons';
import { capitalizeFirstLetter } from '../../utils/text';
import './style.scss';

const b = bemCl('teacher-subject');

const TeacherSubject = ({ subject, teacher }) => (
    <Group className={b().toString()}>
        <Header mode="primary">{subject?.subject?.name}</Header>

        {teacher.isHomeLessons ? (
            <MiniInfoCell
                before={<Icon20HomeOutline width={20} height={20} />}
                after={<Link>от {subject.price} руб / час</Link>}
            >
                У репетитора
            </MiniInfoCell>
        ) : null}

        {teacher.isExternalLessons ? (
            <MiniInfoCell
                before={<Icon20UserOutline width={20} height={20} />}
                after={<Link>от {subject.priceExternal} руб / час</Link>}
            >
                У ученика
            </MiniInfoCell>
        ) : null}

        {teacher.isRemoteLessons ? (
            <MiniInfoCell
                before={<Icon28ComputerOutline width={20} height={20} />}
                after={<Link>от {subject.priceRemote} руб / час</Link>}
            >
                Дистанционно
            </MiniInfoCell>
        ) : null}

        <Separator className={b('separator').toString()} />

        <MiniInfoCell before={<Icon20ArticleBoxOutline />} textWrap="short">
            {capitalizeFirstLetter(subject?.divisions?.map(item => item.name).join(', '))}
        </MiniInfoCell>

        <MiniInfoCell before={<Icon28UsersOutline width={20} height={20} />} textWrap="short">
            {capitalizeFirstLetter(subject?.categoriesString)}
        </MiniInfoCell>
    </Group>
);

TeacherSubject.propTypes = {
    subject: PropTypes.object.isRequired,
    teacher: PropTypes.object.isRequired,
};

export default React.memo(TeacherSubject);
