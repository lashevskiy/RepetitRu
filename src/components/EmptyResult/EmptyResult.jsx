import React from 'react';
import bemCl from 'bem-cl';
import './style.scss';

const b = bemCl('empty-result');

const EmptyResult = ({ text }) => <div className={b()}>{text}</div>;

export default React.memo(EmptyResult);
