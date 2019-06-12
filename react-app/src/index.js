import React from  'react';
import  {render as r} from 'react-dom';

const exps = [10, 1, 2, 3, 4, 5];
const Deg = ({base: b, exp: e}) =>
    <h1><span>{b}</span><sup>{e}</sup> = { b ** e }</h1>;

const Degs = ({a}) =>
    <ul>{a.map((v, i) => <li><Deg base="2" exp={v} key={i} /></li>)}</ul>;
r(<Degs a={exps} />,
    document.querySelector('.cont'));