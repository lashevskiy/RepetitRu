import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Div,
    FixedLayout,
    FormLayout,
    FormLayoutGroup,
    Panel,
    PanelHeader,
    PanelHeaderBack,
    SelectMimicry,
} from '@vkontakte/vkui';
import bemCl from 'bem-cl';
import { Icon28DeleteOutline } from '@vkontakte/icons';
import { getPanelHeader } from '../../utils/panels';
import { PANELS_ID } from '../../constants/panels';
import FilterLessonPlace from '../FilterLessonPlace/FilterLessonPlace';
import FilterPrice from '../FilterPrice/FilterPrice';
import FilterDisplay from '../FilterDisplay/FilterDisplay';
import FilterTeacherStatus from '../FilterTeacherStatus/FilterTeacherStatus';
import FilterExperience from '../FilterExperience/FilterExperience';
import FilterGender from '../FilterGender/FilterGender';
import FilterAge from '../FilterAge/FilterAge';
import FixedLayoutContent from '../FixedLayoutContent/FixedLayoutContent';
import './style.scss';

const b = bemCl('filter-panel');

// TODO
const FilterPanel = ({
    id,
    changePage,
    setLesson,
    setDistrict,
    setCity,
    changeFilter,
    changeFilterAge,
    changeFilterExperience,
    applyFilter,
    fetchTeachers,
    resetFilter,
    filter,
    filterTmp,
    ...navigationParams
}) => {
    React.useEffect(() => {
        // fetchTeacher(teacherId);

        return () => {
            // resetData();
        };
    }, []);

    const handleClickBack = React.useCallback(() => navigationParams.back(), [navigationParams]);
    const handleClickCity = React.useCallback(
        () => navigationParams.goToPage(PANELS_ID.CityListPanel),
        [navigationParams]
    );
    const handleClickDistrict = React.useCallback(
        () => navigationParams.goToPage(PANELS_ID.DistrictsListPanel),
        [navigationParams]
    );
    const handleClickSubjects = React.useCallback(
        () => navigationParams.goToPage(PANELS_ID.SubjectsListPanel),
        [navigationParams]
    );

    const handleResetFilter = React.useCallback(() => {
        resetFilter();
        setLesson(null);
        setDistrict(null);
        changePage(0);
    }, [resetFilter, setLesson, setDistrict, changePage]);

    const handleApplyFilter = React.useCallback(() => {
        // changePage(0);
        applyFilter();
        // fetchTeachers();
        handleClickBack();
    }, [applyFilter, handleClickBack]);

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={handleClickBack} />}>{getPanelHeader(id)}</PanelHeader>

            <FixedLayoutContent>
                <FormLayout>
                    <SelectMimicry top="Предмет" placeholder="Выберите предмет" onClick={handleClickSubjects}>
                        {filter?.lesson?.name}
                    </SelectMimicry>

                    <SelectMimicry top="Город" placeholder="Выберите город" onClick={handleClickCity}>
                        {filter?.city?.name}
                    </SelectMimicry>
                    <SelectMimicry
                        top="Район"
                        disabled={!filter?.city?.name}
                        placeholder="Выберите район"
                        bottom={!filter?.city?.name ? 'Необходимо выбрать город' : null}
                        onClick={handleClickDistrict}
                    >
                        {filter?.district?.name}
                    </SelectMimicry>

                    <FormLayoutGroup top="Формат занятий">
                        <FilterLessonPlace filter={filter} changeFilter={changeFilter} />
                    </FormLayoutGroup>

                    <FormLayoutGroup top="Цена за час">
                        <FilterPrice filter={filter} changeFilter={changeFilter} />
                    </FormLayoutGroup>

                    <FormLayoutGroup top="Показывать">
                        <FilterDisplay filter={filter} changeFilter={changeFilter} />
                    </FormLayoutGroup>

                    <FormLayoutGroup top="Статус преподавателя">
                        <FilterTeacherStatus filter={filter} changeFilter={changeFilter} />
                    </FormLayoutGroup>

                    <FormLayoutGroup top="Стаж преподавателя">
                        <FilterExperience filter={filter} changeFilterExperience={changeFilterExperience} />
                    </FormLayoutGroup>

                    <FormLayoutGroup top="Пол преподавателя">
                        <FilterGender filter={filter} changeFilter={changeFilter} />
                    </FormLayoutGroup>

                    <FormLayoutGroup top="Возраст преподавателя">
                        <FilterAge filter={filter} changeFilterAge={changeFilterAge} />
                    </FormLayoutGroup>
                </FormLayout>
            </FixedLayoutContent>

            <FixedLayout vertical="bottom" filled>
                <Div className={b().toString()}>
                    <Button mode="commerce" size="l" stretched onClick={handleApplyFilter}>
                        Показать
                    </Button>
                    <Button mode="secondary" className={b('delete').toString()} onClick={handleResetFilter}>
                        <Icon28DeleteOutline width={24} height={24} />
                    </Button>
                </Div>
            </FixedLayout>
        </Panel>
    );
};

FilterPanel.propTypes = {
    id: PropTypes.string.isRequired,
    teacher: PropTypes.array.isRequired,
    fetchTeachers: PropTypes.func.isRequired,
    resetData: PropTypes.func.isRequired,
    applyFilter: PropTypes.func.isRequired,
    changeFilterExperience: PropTypes.func.isRequired,
};

export default FilterPanel;
