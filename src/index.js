import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { IntlProvider } from 'react-intl';

import messages_ko from './translations/ko.json';
import messages_en from './translations/en.json';
import messages_pseudo from './translations/en-XA.json';

const messages = {
    ko: messages_ko,
    en: messages_en,
    'en-XA': messages_pseudo,
};

// language without region code from the browser
const language = navigator.language.split(/[-_]/)[0];
const usePseudoLocalization = true;
const locale = usePseudoLocalization ? 'en-XA' : language;
console.log('LANG: ' + locale);

ReactDOM.render(
    <React.StrictMode>
        <IntlProvider locale={locale} messages={messages[locale]}>
            <App />
        </IntlProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
