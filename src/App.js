import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from './components/login'
import ModifyUser from './components/modifyUser'
import List from './components/list'
import React, { Component } from 'react'
import AddUser from './components/addUser'
import { Provider } from 'react-redux'
import store from './redux/cake/userStore'
// import store from './redux/cake/Store'


class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false,
       token:'',
       user_id: ''
    }
  }

  get_login() {
    sessionStorage.getItem('token')? this.setState({isLoggedIn: true}) : this.setState({isLoggedIn: false})
  }
  componentDidMount(){
    this.get_login();
  }
  
  render() {
    console.log(store)
    return (
      <Provider store={store}>
        <div className="App">
      {
        this.state.isLoggedIn ? <BrowserRouter>
        <Switch>
            <Route exact path="/" component={List}></Route>
            <Route exact path="/list" component={List}></Route>
            <Route exact path="/add" component={AddUser}></Route>
            <Route exact path="/modify/:id" component={ModifyUser}></Route>
        </Switch>
        </BrowserRouter> : <BrowserRouter> 
        <Route exact path="/" component={Login}></Route>
        </BrowserRouter> 
      }
      

       {/* <CakeComponent></CakeComponent> */}
       {/* <List></List> */}
      
  </div>
      </Provider>
    )
  }
}

export default App
