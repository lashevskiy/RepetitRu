import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Button, Div } from '@vkontakte/vkui';
import { Icon24BrowserBack, Icon24BrowserForward } from '@vkontakte/icons';
import './style.scss';

const b = bemCl('teachers-list-pagination');

const TeachersListPagination = ({ page, pages, changePage }) => {
    const handleClickBack = React.useCallback(() => changePage(page - 1), [changePage, page]);
    const handleClickForward = React.useCallback(() => changePage(page + 1), [changePage, page]);

    return (
        <Div>
            <div className={b()}>
                <Button
                    onClick={handleClickBack}
                    size="l"
                    stretched
                    disabled={page === 0}
                    className={b('button-back').toString()}
                    before={<Icon24BrowserBack width={20} height={20} />}
                >
                    Назад
                </Button>
                <Button
                    onClick={handleClickForward}
                    size="l"
                    stretched
                    disabled={page === pages - 1}
                    className={b('button-forward').toString()}
                    after={<Icon24BrowserForward width={20} height={20} />}
                >
                    Вперед
                </Button>
            </div>
        </Div>
    );
};

TeachersListPagination.propTypes = {
    page: PropTypes.number.isRequired,
    pages: PropTypes.number.isRequired,
    changePage: PropTypes.func.isRequired,
};

export default React.memo(TeachersListPagination);
