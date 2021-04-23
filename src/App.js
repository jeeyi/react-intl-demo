import logo from './logo.svg';
import './App.css';
import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

function App() {
    const intl = useIntl();
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {intl.formatMessage(
                        {
                            id: 'app.text',
                            description: 'Welcome header on app main page',
                            defaultMessage:
                                'Edit <code>src/App.js</code> and save to reload.{br}Now with {what}!',
                        },
                        {
                            code: (...chunks) => <code>{chunks}</code>,
                            br: <br />,
                            what: 'react-intl',
                        }
                    )}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FormattedMessage
                        id="app.learn-react-link"
                        description="Link on react page"
                        defaultMessage="Learn React"
                    />
                </a>
            </header>
        </div>
    );
}

export default App;
