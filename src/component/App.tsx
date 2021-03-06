import React from 'react';

interface IMyComponent {
    obj: string;
    test: string;
}

const MyComponent: React.FC<IMyComponent> = ({ obj, test }) => (
    <div>Component: { `Obj ${obj} and other param ${test}`}</div>
);

export default MyComponent;
