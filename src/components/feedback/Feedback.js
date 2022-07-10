import PropTypes from 'prop-types';
import { Component } from 'react';
import options from '..//..//options.json';
import { Container } from './Feedback.styled';
import Statistics  from 'components/StatTypesBox/Statistics';
import FeedbackOptions from 'components/feedbackOptions';
import NotificationMessage from 'components/notificationMessage';
import Section from 'components/section';
class Feedback extends Component {
state = {good: 0,
         neutral: 0,
         bad: 0
         }

handleLeaveFeedback = (option) => {

this.setState(PrevState => ({
[option.toLowerCase()]: PrevState[option.toLowerCase()] +1

}))

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
<Section 
title={"Please leave feedback"} 
children={
<FeedbackOptions
options={options}
onLeaveFeedback={this.handleLeaveFeedback}/>
} 
/>
<Section
title={"Statistics"}
children={
  (good + neutral + bad) === 0 ? 
    <NotificationMessage /> : 
    <Statistics 
     good={good} 
     neutral={neutral}
     bad={bad}
     total = {this.countTotalFeedback}
     positivePercentage = {this.countPositiveFeedbackPercentage}
     />}

/>

  </Container>
        )
    }

}

export default Feedback;

Feedback.propTypes = {
  option: PropTypes.string,
  handleLeaveFeedback: PropTypes.func,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
}