import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';

import messages_ko from './translations/ko.json';
import messages_en from './translations/en.json';

const messages = {
    ko: messages_ko,
    en: messages_en,
};

// language without region code from the browser
const language = navigator.language.split(/[-_]/)[0];
console.log('LANG: ' + language);

ReactDOM.render(
    <React.StrictMode>
        <IntlProvider locale={language} messages={messages[language]}>
            <App />
        </IntlProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
