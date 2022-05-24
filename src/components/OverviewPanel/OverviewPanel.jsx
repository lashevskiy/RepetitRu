import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader } from '@vkontakte/vkui';
import SnackBarComponent from '../SnackBarComponent/SnackBarComponent';
import OrderBanner from '../OrderBanner/OrderBanner';
import BannerJoinRepetitor from '../BannerJoinRepetitor/BannerJoinRepetitor';
import OverviewLessons from '../OverviewLessons/OverviewLessons';
import OverviewCardActions from '../OverviewCardActions/OverviewCardActions';
import OverviewHorizontalActions from '../OverviewHorizontalActions/OverviewHorizontalActions';
import OverviewDescription from '../OverviewDescription/OverviewDescription';
import OverviewButtonActions from '../OverviewButtonActions/OverviewButtonActions';
import OverviewHeader from '../OverviewHeader/OverviewHeader';
import { getPanelHeader } from '../../utils/panels';
import { EDUCATIONS, LANGUAGES, OTHER } from './constants';
import { isApp } from '../../utils';

const OverviewPanel = ({ id, setLesson, resetFilter, group, user }) => {
    const [snackbar, setSnackbar] = useState(null);

    const openSnackBar = title => {
        if (snackbar) return;
        setSnackbar(<SnackBarComponent title={title} setSnackbar={setSnackbar} />);
    };

    return (
        <Panel id={id}>
            <PanelHeader separator={false}>{getPanelHeader(id)}</PanelHeader>

            <OverviewHeader />

            <OverviewButtonActions group={group} />

            {!isApp() ? <OverviewHorizontalActions group={group} openSnackBar={openSnackBar} /> : null}

            <OverviewDescription group={group} />

            {!isApp() ? <OverviewCardActions openSnackBar={openSnackBar} /> : null}

            <OverviewLessons
                title="Среднее и высшее образование"
                lessons={EDUCATIONS}
                resetFilter={resetFilter}
                setLesson={setLesson}
            />
            <OverviewLessons
                title="Иностранные языки"
                lessons={LANGUAGES}
                resetFilter={resetFilter}
                setLesson={setLesson}
            />
            <OverviewLessons
                title="Другие репетиторы"
                lessons={OTHER}
                resetFilter={resetFilter}
                setLesson={setLesson}
            />

            <BannerJoinRepetitor />

            <OrderBanner user={user} isPanel />

            {snackbar}
        </Panel>
    );
};

OverviewPanel.propTypes = {
    id: PropTypes.string.isRequired,
    setLesson: PropTypes.func.isRequired,
    resetFilter: PropTypes.func.isRequired,
    group: PropTypes.object,
    user: PropTypes.object,
};

OverviewPanel.defaultProps = {
    group: null,
    user: null,
};

export default React.memo(OverviewPanel);
