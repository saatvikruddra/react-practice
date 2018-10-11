import React, { Component } from 'react';

class InputBox extends Component {
    constructor(){
        super() 
        this.state = {
            title: '',
            author: '',
            posts: [
                {
                    title: 'Ruby On Rails',
                    author: 'Mahatma Gandhi'
                },
                {
                    title: 'Golam',
                    author: 'Jasdeep'
                },
                {
                    title: 'Python',
                    author: 'Jake Paul'
                },
                {
                    title: 'Mr. India',
                    author: 'Anil Kapoor'
                },
                {
                    title: 'Krishh 3',
                    author: 'Ajay Devgan'
                },
                {
                    title: 'Jadoo',
                    author: 'Heera Babu'
                }
            ]
        }
     }

     handleInput = (e) => {
            this.setState({
                [e.target.id]:e.target.value
            });      
     }

    render() {
        return ( 
        <React.Fragment>
            The Title : <input type="text" value={this.state.title} id="title"
             onChange={this.handleInput} />
             <br/>
            The Author : <input type="text" value={this.state.author} id="author"
             onChange={this.handleInput} />
            <br/>
            <button onClick={this.savePost}>Save Post</button>


        </React.Fragment>
         );
    }
}
 
export default InputBox;