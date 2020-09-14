import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

let showRandomChar = true;

const App = () => {
    const onToggleRandomCharView = () => {
        //const randomChar = document.getElementById('random-char-container');
        const randomCharButton = document.getElementById('random-char-button');
        if (showRandomChar) {
            showRandomChar = false;
            randomCharButton.innerText = 'Show Random Character';
        } else {
            showRandomChar = true;
            randomCharButton.innerText = 'Hide Random Character';
        }
    }

    return (
        <> 
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col id='random-char-container' lg={{size: 5, offset: 0}}>
                       <RandomChar/>
                    </Col>
                </Row>
                <button
                    id="random-char-button"
                    type="button"
                    className="mb-4 btn btn-dark"
                    onClick={onToggleRandomCharView}>Hide Random Character</button>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;