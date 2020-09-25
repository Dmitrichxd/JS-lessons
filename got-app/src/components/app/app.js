import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../errorMessage";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {BookItem, BookPage, HousePage, CharacterPage} from "../pages";
import './app.css';

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
            <Router>
                <div className="app">
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

                        <Route path="/" exact component={() => <h1>Welcome to GOT Database</h1>}/>
                        <Route path="/characters" component={CharacterPage}/>
                        <Route path="/houses" component={HousePage}/>
                        <Route path="/books" exact component={BookPage}/>
                        <Route path="/books/:id" render={
                            ({match}) => {
                                const {id} = match.params;
                                return <BookItem bookId={id}/>
                            }
                        }/>
                    </Container>
                </div>
            </Router>
        );
    }
};