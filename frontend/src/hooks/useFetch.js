import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

const useCallbackRef = (callback) => {
    const callbackRef = useRef(callback);
    useLayoutEffect(() => {
        callbackRef.current = callback;
    }, [callback]);
    return callbackRef;
};

export const useFetch = (options) => {
    const [data, setData] = useState(null);

    const savedOnSuccess = useCallbackRef(options.onSuccess);

    useEffect(() => {
        console.log("useFetch useEffect ");
        if (options.url) {
            let isCancelled = false;
            fetch(options.url)
                .then((response) => {
                    response.json();
                })
                .then((json) => {
                    setData(json);
                    savedOnSuccess.current?.(json);
                });

            return () => {
                isCancelled = true;
            };
        }
    }, [options.url]);

    return {
        data,
    };
};
