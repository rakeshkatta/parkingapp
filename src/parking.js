import React, { Component } from 'react';
import { Button, ButtonToolbar, Container, Row, Col } from "react-bootstrap";
class Parking extends Component {
    constructor(props) {
        super(props);
          
        this.state = { data :
            [{id: 1, holdername:'sam', status: true},
            {id: 2, holdername:'sam', status: true},
            {id: 3, holdername:'sam', status: true},
            {id: 4, holdername:'sam', status: true},
            {id: 5, holdername:'sam', status: true},
            {id: 6, holdername:'jhon', status: false}]
        }
     }
    render() {
      return (  
          <div>
              <Container>
  <Row>
  
    <Col xs={6}><ButtonToolbar>
                  {this.state.data.map((val, index) => {
                   return <Button variant="primary" size="xs">
                    slots {val.id}
                    </Button>
                  })}
               
                
            </ButtonToolbar></Col>
    
  </Row>
</Container>

              

          </div>
        );
    }
  }
  
  export default Parking;