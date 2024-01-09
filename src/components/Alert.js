import React from 'react';

function Alert(props) {

    // const capital = (word) => {
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
    return (
        <div style={{ height: '50px' }}>                    {/* because we wre using it inside a tag we must use {} to define the props */}
            {props.alert && <div className={`alert alert-${props.alert.type} text-center fade show`} role="alert">   {/* if props is not null then the other statement will execute */} 
                {/* {capital(props.alert.type)} : {props.alert.msg}     because succes dosen't look professional */}
                Hurray!! {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert;
