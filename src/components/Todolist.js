import React, {useState} from 'react'
import { Container, ListGroup,InputGroup,FormControl, Button } from 'react-bootstrap';
function Todolist() {

        const [lists, setLists] = useState([
            {
                title:'Business is '
            },
            {
                title:'Politic is '
            },
            {
                title:'Sport is '
            },
            {
                title:'Healthy is '
            }
        ]);   
        
        const [list, setList] = useState('')

        const handleSubmit =()=>{
            setLists([
                {title:list},
                ...lists
            ])
            setList('');
        };

        const removeItem = indexnumber=>{
            const newItem = lists.filter((list, index)=>index !== indexnumber)
            setLists(newItem)
        }

  return (
    <Container>
        <h1>To Do List</h1>

        <InputGroup className="mb-3">
            <FormControl
            placeholder="Enter To Do List"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={e=>setList(e.target.value)}
            value={list}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={handleSubmit}>
            Add To Do
            </Button>
        </InputGroup>

        <ListGroup>
            {
                lists && lists.map((list, index)=>(
                    <ListGroup.Item key={index} onClick={e=>removeItem(index)}>{list.title}</ListGroup.Item>
                ))
            }
        </ListGroup>
    </Container>
  )
}

export default Todolist;