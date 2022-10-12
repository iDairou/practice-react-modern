// ./src/components/App.js
import React from 'react';
import { TextContext } from '../context';
import Box from './Box';
import Div from './Div';

function App() {
    const { Provider } = TextContext;
    return (
        <section>
            <Box />
            <Provider value="sibling">
                <Div />
            </Provider>
        </section>
    );
}

export default App;
