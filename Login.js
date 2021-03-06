import { useState } from "react";
import { useHistory } from "react-router";
import {
    Jumbotron,
    Spinner,
    Form,
    Button,
    FormGroup, 
    Label, 
    Input
} from 'reactstrap';
import firebase from '../FireBase.js';

function Login(){

const history =useHistory();
const [creds , setCards]=useState({nickname:''});
const [showLoading ,setShowLoading] = useState(false);
const ref =firebase.database().ref('users/');

const onChange = (e) => {
    e.persist();
    setCards({...creds, [e.target.name]: e.target.value});
}

const login = (e) => {
    e.preventDefault();
    setShowLoading(true);
    ref.orderByChild('nickname').equalTo(creds.nickname).once('value', snapshot => {
        if (snapshot.exists()) {
            localStorage.setItem('nickname', creds.nickname);
            history.push('/roomlist');
            setShowLoading(false);
        } else {
            const newUser = firebase.database().ref('users/').push();
            newUser.set(creds);
            localStorage.setItem('nickname', creds.nickname);
            history.push('/roomlist');
            setShowLoading(false);
        }
    });
}; 

return (
    <div>
        {showLoading &&
            <Spinner color="primary" />
        }
        <Jumbotron>
            <Form onSubmit={login}>
                <FormGroup>
                    <Label>Nickname</Label>
                    <Input type="text" name="nickname" id="nickname" placeholder="Enter Your Nickname" value={creds.nickname} onChange={onChange} />
                </FormGroup>
                <Button variant="secondary" type="submit">
                    Login
                </Button>
            </Form>
        </Jumbotron>
    </div>
);


    
}
export default Login;