import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from "../errorMessage";
import gotService from "../../services/gotService";
import {withRouter} from 'react-router-dom';

class BookPage extends Component {

    gotService = new gotService();

    state = {
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <ItemList
                onItemSelected={(itemId) => {
                    this.props.history.push(`/books/${itemId}`)
                }}
                getData={this.gotService.getAllBooks}
                renderItem={({name, numberOfPages}) => `${name} (${numberOfPages})`}/>
        )
    }
}

export default withRouter(BookPage);