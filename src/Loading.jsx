import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='loading'>
            {/* <h4>Loading...</h4> */}
            <div class="lds-ripple"><div></div><div></div></div>
        </div>

    )
}

export default Loading