import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        loading ? (
            <div className="preloader">
                <div className="spinner" />
            </div>
        ) : (
            <React.Fragment />
        )
    );
};

export default Preloader;