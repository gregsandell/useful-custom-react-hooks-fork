// @flow
import * as React from 'react';
import {useEffect, useState} from "react";
type MyProps = {
    id: number
}
export function Temp({id}: MyProps) {
    const [text, setText] = useState('');

    useEffect(() => {
        const controller = new AbortController(); // A DOM API object

        fetch(`https://dummyjson.com/${id}`, {signal: controller.signal})
            .then(response => response.json())
            .then(json => setText(json))

        return () => controller.abort()
    }, [id]);
    return (
        <div>{text}</div>
    );
};
