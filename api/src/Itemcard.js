import {DropdownButton,Card,Dropdown} from 'react-bootstrap';
export default function Itemcard({el}){
    return (<div className="car"><Card>
        <Card.Header className="textc">{el.name}</Card.Header>
        <Card.Body>
        <Card.Title>user name :{el.username}</Card.Title>

                    <Card.Title>email : {el.email}</Card.Title>
<div className="drop">
    <DropdownButton id="dropdown-basic-button" title="Adress">
   <Dropdown.Item href="#/action-1">{el.address.street}</Dropdown.Item> 
  <Dropdown.Item href="#/action-1">{el.address.suite}</Dropdown.Item>
  <Dropdown.Item href="#/action-1">{el.address.zipcode}</Dropdown.Item>
</DropdownButton>

<DropdownButton id="dropdown-basic-button" title="info">
   <Dropdown.Item href="#/action-1">{el.phone}</Dropdown.Item> 
  <Dropdown.Item href="#/action-1">{el.website}</Dropdown.Item>
</DropdownButton>
<DropdownButton id="dropdown-basic-button" title="company">
   <Dropdown.Item href="#/action-1">{el.company.name}</Dropdown.Item> 
  <Dropdown.Item href="#/action-1">{el.company.bs}</Dropdown.Item>
</DropdownButton> </div>


        </Card.Body>
         </Card></div>)
}