import PropTypes from 'prop-types';
import { Component } from 'react';
import { Container, FeedbackTitle } from './Feedback.styled';
import Statistics  from 'components/StatTypesBox/Statistics';
import FeedbackOptions from 'components/buttonList/FeedbackOptions';
import NotificationMessage from 'components/notificationMessage/NotificationMessage';

class Feedback extends Component {
state = {good: 0,
         neutral: 0,
         bad: 0
         }

handleLeaveFeedback = (event) => {

switch (event.target.name) {
    case "good":
    return this.setState(prevState => ({
     good: prevState.good + 1
      }))
      
      case "neutral":
    return this.setState(prevState => ({
     neutral: prevState.neutral + 1
      }))
      
      case "bad":
    return this.setState(prevState => ({
     bad: prevState.bad + 1
      }))
      default:
     return this.state; 
}


}
countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
     
   }
 
countPositiveFeedbackPercentage = () => {
  const { good, neutral, bad } = this.state;
  return Math.round(good / (good + neutral + bad) * 100);  
    }

render() {
    const { good, neutral, bad } = this.state;
   return (
  <Container>
<FeedbackTitle>Please leave feedback</FeedbackTitle>
<FeedbackOptions

onLeaveFeedback={this.handleLeaveFeedback}/>

<FeedbackTitle>Statistics</FeedbackTitle>

{(good + neutral + bad) === 0 ? 
  <NotificationMessage /> : 
  <Statistics 
   good={good} 
   neutral={neutral}
   bad={bad}
   total = {this.countTotalFeedback}
   positivePercentage = {this.countPositiveFeedbackPercentage}
   />}

  </Container>
        )
    }

}

export default Feedback;

Feedback.propTypes = {

}