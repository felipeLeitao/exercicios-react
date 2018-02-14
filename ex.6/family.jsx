import React from 'react'
import { childrenWithProps } from '../util/reactUtils'
export default props => (
    <div>
        <h1>Familia {props.lastName}</h1>
        {childrenWithProps(props)}
    </div>
)