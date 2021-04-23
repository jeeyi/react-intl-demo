import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';

import messages_ko from './translations/ko.json';
import messages_en from './translations/en.json';

const messages = {
    ko: messages_ko,
    en: messages_en,
};
const language = navigator.language.split(/[-_]/)[0]; // language without region code from the browser
//const language = 'ko'; // explicitly set to specific language for testing
console.log('LANG: ' + language);

ReactDOM.render(
    <React.StrictMode>
        <IntlProvider locale={language} messages={messages[language]}>
            <App />
        </IntlProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
