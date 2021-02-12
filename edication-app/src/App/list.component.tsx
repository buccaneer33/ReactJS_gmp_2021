import React from 'react';

class ListComponent extends React.Component {
    

    render () {
        const simpleArray: string[] = ['Try', 'to', 'render', 'list'];
        return (
            <ul> {
                simpleArray.map( (value, index) => {
                    return <li key={ index }>{ value }</li>
                })
            } </ul>
        )
    }
}

export default ListComponent
