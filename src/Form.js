import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question1: "things",
            question2: "more things",
            question3: "even more things",
        }
    }

    handleChange1 = (e) => {
        this.setState({
            question1: e.target.value
        })
    }

     handleChange2 = (e) => {
        this.setState({
            question2: e.target.value
        })
    }

     handleChange3 = (e) => {
        this.setState({
            question3: e.target.value
        })
    }

    handleChange = (name) => (e) => {
        this.setState({
            [name]: e.target.value
        })
    }

    render() {
        return (
        <form>
            <div className="custom-component">
                <div>
                    <span>Question 1: </span>
                    <input name="question-1" id="question-1" value={this.state.question1} onChange={this.handleChange('question1')}></input>
                </div>
                <div>
                    <span>Question 2: </span>
                    <input name="question-2" id="question-2" value={this.state.question2} onChange={this.handleChange('question2')}></input>
                </div>
                <div>
                    <span>Question 3: </span>
                    <input name="question-3" id="question-3" value={this.state.question3} onChange={this.handleChange('question3')}></input>
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
        )
    }
}

export default Form;