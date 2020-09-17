import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from "../characterPage";
import ErrorMessage from "../errorMessage";

export default class App extends Component {
    state = {
        showRandomChar: true,
        buttonTitle: 'Hide Random Character',
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    onToggleRandomCharView = () => {
     this.setState((state) => {
         return {
             showRandomChar: !state.showRandomChar,
             buttonTitle: state.showRandomChar ? 'Show Random Character' : 'Hide Random Character'
         }
     })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <>
                <Container>
                    <Header/>
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {this.state.showRandomChar ? <RandomChar/> : null}
                        </Col>
                    </Row>
                    <button
                        id="random-char-button"
                        type="button"
                        className="mb-5 btn btn-dark"
                        onClick={this.onToggleRandomCharView}>{this.state.buttonTitle}
                    </button>
                    <CharacterPage/>
                </Container>
            </>
        );
    }
};