import React, {Fragment} from 'react';
import Cards from './cards';
import {connect} from 'react-redux';
import Actions from './Actions';

const createMarkup = (rawInfo = null) => {
    return {
        __html: rawInfo,
    }
};

const App = ({cards, searchTerm, searchTermChanged}) => (
    <Fragment>
        <input type='text'
               name='search'
               placeholder='Search Card names'
               value= {searchTerm}
               onChange={e => searchTermChanged(e.target.value)}
        />
        <table border="1">
            <thead>
            <tr>
                <td>Name</td>
                <td>Flavor</td>
            </tr>
            </thead>
            <tbody>
            {cards.map((card) => {
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

export default connect(store => store, Actions)(App);
