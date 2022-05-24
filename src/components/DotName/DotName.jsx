import React from 'react';
import bemCl from 'bem-cl';
import './style.scss';

const b = bemCl('dot-name');

const DotName = ({ color, name }) => {
    const style = React.useMemo(() => ({ background: `${color}` }), [color]);

    return name ? (
        <span className={b()}>
            <span className={b('dot')} style={style} />
            <span className={b('name')}>{name}</span>
        </span>
    ) : (
        <div className={b('item')} style={style} />
    );
};
export default React.memo(DotName);
