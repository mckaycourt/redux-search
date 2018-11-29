import React, {Component, Fragment} from 'react';
import Cards from './cards';


const createMarkup = (rawInfo = null) => {
    return {
        __html: rawInfo,
    }
};

class App extends Component {
    render() {
        return (
            <Fragment>
                <input type='text'
                       name='search'
                       placeholder='Search Card names'
                />
                <table border="1">
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Flavor</td>
                    </tr>
                    </thead>
                    <tbody>
                    {Cards.map((card) => {
                            if (card.flavor) {
                                return (
                                    <tr key={card.id}>
                                        <td>{card.name}</td>
                                        <td dangerouslySetInnerHTML={createMarkup(card.flavor)}></td>
                                    </tr>
                                )
                            }
                            return (
                                null
                            )
                        }
                    )}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default App;
