import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import  TodoItem from './components/todoItem';
class App extends Component {
  constructor(){
    super();
    this.TodoItem = [
      'Dậy đi chợ Giao Giao',
      'Dậy đi đá bóng', 
      'Dậy đi học A Sỹ'
    ];
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        {
          this.TodoItem.map((item, index) => <TodoItem key ={index} title={item}  />) // Bất kì chỗ nào dùng map  để biến các array thì các object thành các array component thì phải có key
        }
        </header>
      </div>
    );
  }
} 
export default App;
