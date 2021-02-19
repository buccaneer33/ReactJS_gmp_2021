import React from 'react';

export class ListComponent extends React.Component {
    
    simpleArray: string[] = ['Try', 'to', 'render', 'list'];

    render () {
        return (
            <ul> {
                this.simpleArray.map((value, index) => <li key={index}>{value}</li>)
            } </ul>
        )
    }
}
