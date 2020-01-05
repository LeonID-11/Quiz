import React, {Component} from 'react';
import './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component{
    state = {
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz:[
            {
                question: 'question',
                rightAnswerId: 2,
                id: 1,
                answers:[
                    {text: 'qustion 1', id: 1},
                    {text: 'qustion 2', id: 2},
                    {text: 'qustion 3', id: 3},
                    {text: 'qustion 4', id: 4}
                ]
            },
            {
                question: 'question2',
                rightAnswerId: 4,
                id: 2,
                answers:[
                    {text: 'qustion 12', id: 1},
                    {text: 'qustion 22', id: 2},
                    {text: 'qustion 32', id: 3},
                    {text: 'qustion 42', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) =>{
        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success'){
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion],
            results = this.state.results
        ;

        if(question.rightAnswerId === answerId){
            if(!results[question.id]){
                results[question.id] = 'success';
            }
            this.setState({
                answerState:{[answerId]: 'success'},
                results
            })
            const timeout = window.setTimeout(()=>{
                if(this.isQuizFinished()){
                    this.setState({
                        isFinished: true,
                        results
                    })
                }else{
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }

                clearTimeout(timeout);

            }, 1000);
        }else{
            results[question.id] = 'error';
            this.setState({
                answerState:{[answerId]: 'error'},
                results
            })
        }

        
    }
    isQuizFinished(){
        return this.state.activeQuestion +1 === this.state.quiz.length
    }
    retryHandler = ()=>{
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null
        })
    }
    render(){
        return(
            <div className ='Quiz'>
                <div className='QuizWrapper'>
                    <h1>Quiz</h1>
                    {
                        this.state.isFinished 
                        ? <FinishedQuiz
                            results = {this.state.results}
                            quiz = {this.state.quiz}
                            retry = {this.retryHandler}
                        /> 
                        : <ActiveQuiz 
                            answers ={this.state.quiz[this.state.activeQuestion].answers}
                            question ={this.state.quiz[this.state.activeQuestion].question}
                            onAnswerClick = {this.onAnswerClickHandler}
                            quizLenght = {this.state.quiz.length}
                            answerNumber = {this.state.activeQuestion + 1}
                            state={this.state.answerState}
                        />
                    }
                </div>
            </div>
        )
    }
}

export default Quiz 