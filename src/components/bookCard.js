import React, {Component} from 'react';
import { Card , Button, Form ,  } from 'react-bootstrap';


class BookCard extends Component{
  
  render() {

    return(
      
        <Card className="col-lg-4 m-1">
        <Form onSubmit={this.onSubmit}>
        <Card.Img variant="top" src={this.props.image} onChange={this.onChangeImage}/>
        <Card.Body>
          <Card.Title onChange={this.onChangeTitle}>{this.props.title}</Card.Title>
          <Card.Text onChange={this.onChangeAuthor}>
          {this.props.author}
          </Card.Text>
          <Card.Text>
          
          </Card.Text>
          <Button variant="primary" onClick={()=> window.open(this.props.hyperLink, "_blank")}>View in the store</Button>
          <Button type="submit" className="m-1" variant="primary" >Save</Button>

        </Card.Body>
        </Form>
      </Card>
      
    )}
}

export default BookCard;
