import React from 'react';

const Button = ({ children, cls, handler }) => {
    return (
        <div>
            <button onClick={handler} className={`${cls} px-4 py-2 rounded-md transition text-lg hover:bg-primary focus:scale-90 hover:scale-110 bg-gradient-to-r bg-primary from-transparent to-secondary`}>
                {children}
            </button>
        </div>
    );
};

export default Button;