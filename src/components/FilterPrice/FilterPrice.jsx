import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { Input, RangeSlider } from '@vkontakte/vkui';
import './style.scss';

const b = bemCl('filter-price');

const MAX_PRICE = 5000;
const MIN_PRICE = 0;
const STEP = 50;

const FilterPrice = ({ changeFilter, filter }) => {
    const [priceMin, setPriceMin] = React.useState(filter.minPricePerHour);
    const [priceMax, setPriceMax] = React.useState(filter.maxPricePerHour);

    const handleChangeMin = React.useCallback(
        e => {
            let value = e.target.value;
            if (value > MAX_PRICE) {
                value = MAX_PRICE;
            }
            if (value < MIN_PRICE) {
                value = MIN_PRICE;
            }

            changeFilter('filter.minPricePerHour', value);
            setPriceMin(value);
        },
        [changeFilter]
    );

    const handleChangeMax = React.useCallback(
        e => {
            let value = e.target.value;
            if (value > MAX_PRICE) {
                value = MAX_PRICE;
            }
            if (value < MIN_PRICE) {
                value = MIN_PRICE;
            }

            changeFilter('filter.maxPricePerHour', value);
            setPriceMax(value);
        },
        [changeFilter]
    );

    const handleSlider = React.useCallback(
        v => {
            setPriceMin(v[0]);
            setPriceMax(v[1]);
            changeFilter('filter.minPricePerHour', v[0]);
            changeFilter('filter.maxPricePerHour', v[1]);
        },
        [changeFilter]
    );

    const sliderValue = [priceMin, priceMax];

    return (
        <>
            <div className={b()}>
                <div className={b('number')}>
                    <Input
                        value={String(priceMin)}
                        disabled={true}
                        stretched
                        onChange={handleChangeMin}
                        type="number"
                    />
                </div>
                <div className={b('number')}>
                    <Input
                        value={String(priceMax)}
                        disabled={true}
                        stretched
                        onChange={handleChangeMax}
                        type="number"
                    />
                </div>
            </div>
            <RangeSlider min={MIN_PRICE} max={MAX_PRICE} step={STEP} value={sliderValue} onChange={handleSlider} />
        </>
    );
};

FilterPrice.propTypes = {
    filter: PropTypes.object.isRequired,
    changeFilter: PropTypes.func.isRequired,
};

export default React.memo(FilterPrice);
