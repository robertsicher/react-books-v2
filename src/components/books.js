import React, {Component} from 'react';
import request from 'superagent'
import BookList from './bookList'
import { Container  } from 'react-bootstrap';
import SearchArea from './searchArea';
import axios from 'axios'

class Books extends Component {

    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);


        this.state = {
            books: [],
            searchField: '',
            image: '',
            title:'',
            author:'',
            link:'',
        }
    }

    onChangeTitle(title){
        this.setState({
            title: title
        });
    }

    onChangeImage(image){
        this.setState({
            image: image
        });
    }

    onChangeAuthor(author){
        this.setState({
            author: author
        });
    }

    onChangeLink(link){
        this.setState({
            link: link
        });
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then( (data) => {
                this.setState({ books: [...data.body.items]})
                console.log(data)
            })
    }

    onSubmit(e) {
        e.preventDefault();
    
        const book = {
          image: this.state.image,
          title: this.state.title,
          author: this.state.author,
          link: this.state.link
        }
    
        console.log(book);
    
        axios.post('http://localhost:5000/exercises/add', book)
          .then(res => console.log(res.data));
    
        window.location = '/';
      }

    handleSearch = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        return(
        <div>
            <Container>
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            <BookList books={this.state.books}/>
            </Container>
        </div>  
        );
    }
}

export default Books;
