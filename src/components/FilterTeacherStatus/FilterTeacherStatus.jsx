import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@vkontakte/vkui';

const FilterTeacherStatus = ({ changeFilter, filter }) => {
    const handlers = React.useMemo(() => {
        const handleChange = name => () => changeFilter(`filter.${name}`, !filter[name]);

        const names = [
            'teacherStatusIds1',
            'teacherStatusIds2',
            'teacherStatusIds3',
            'teacherStatusIds4',
            'teacherStatusIds5',
            'teacherStatusIds7',
        ];

        return Object.fromEntries(names.map(name => [name, handleChange(name)]));
    }, [changeFilter, filter]);

    return (
        <>
            <Checkbox
                disabled={false}
                checked={filter?.teacherStatusIds1 === true}
                onChange={handlers['teacherStatusIds1']}
            >
                Студент
            </Checkbox>
            <Checkbox
                disabled={false}
                checked={filter?.teacherStatusIds2 === true}
                onChange={handlers['teacherStatusIds2']}
            >
                Аспирант
            </Checkbox>
            <Checkbox
                disabled={false}
                checked={filter?.teacherStatusIds3 === true}
                onChange={handlers['teacherStatusIds3']}
            >
                Школьный преподаватель
            </Checkbox>
            <Checkbox
                disabled={false}
                checked={filter?.teacherStatusIds4 === true}
                onChange={handlers['teacherStatusIds4']}
            >
                Преподаватель вуза
            </Checkbox>
            <Checkbox
                disabled={false}
                checked={filter?.teacherStatusIds5 === true}
                onChange={handlers['teacherStatusIds5']}
            >
                Частный преподаватель
            </Checkbox>
            <Checkbox
                disabled={false}
                checked={filter?.teacherStatusIds7 === true}
                onChange={handlers['teacherStatusIds7']}
            >
                Носитель языка
            </Checkbox>
        </>
    );
};

FilterTeacherStatus.propTypes = {
    filter: PropTypes.object.isRequired,
    changeFilter: PropTypes.func.isRequired,
};

export default React.memo(FilterTeacherStatus);
