import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, PanelSpinner, Search } from '@vkontakte/vkui';
import { getPanelHeader } from '../../utils/panels';
import StateRender from '../StateRender/StateRender';
import ErrorRender from '../ErrorRender/ErrorRender';
import DistrictsList from '../DistrictsList/DistrictsList';
import EmptyResult from '../EmptyResult/EmptyResult';

const DistrictsListPanel = ({ id, data, isLoading, isHasError, fetchData, setDistrict, ...navigationParams }) => {
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        if (data.length === 0 || id === null) {
            fetchData(search);
        }
    }, [search, fetchData, data, id]);

    const onChange = React.useCallback(e => setSearch(e.target.value), [setSearch]);

    const districtsList = React.useMemo(() => {
        const searchValue = search.toLowerCase().trim();

        return data.filter(
            ({ name, verbatimName }) =>
                verbatimName.toLowerCase().indexOf(searchValue) > -1 || name.toLowerCase().indexOf(searchValue) > -1
        );
    }, [search, data]);

    const handleClickBack = React.useCallback(() => navigationParams.back(), [navigationParams]);

    return (
        <Panel id={id}>
            <PanelHeader left={<PanelHeaderBack onClick={handleClickBack} />}>{getPanelHeader(id)}</PanelHeader>

            <Search value={search} onChange={onChange} placeholder={'Начните вводить'} />
            <StateRender
                isLoading={isLoading}
                isHasError={isHasError}
                loadingComponent={<PanelSpinner size="regular" />}
                errorComponent={<ErrorRender onClick={fetchData} />}
                doneComponent={
                    <div>
                        {!isLoading && districtsList.length === 0 ? (
                            <EmptyResult text="нет района" />
                        ) : (
                            <DistrictsList districts={districtsList} setDistrict={setDistrict} back={handleClickBack} />
                        )}
                    </div>
                }
            />
        </Panel>
    );
};

DistrictsListPanel.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isHasError: PropTypes.bool.isRequired,
    fetchData: PropTypes.func.isRequired,
    setDistrict: PropTypes.func.isRequired,
};

export default React.memo(DistrictsListPanel);
