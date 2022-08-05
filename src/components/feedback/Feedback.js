import { useState } from 'react';
import { Container } from './Feedback.styled';
import Statistics from 'components/StatTypesBox/Statistics';
import FeedbackOptions from 'components/feedbackOptions';
import NotificationMessage from 'components/notificationMessage';
import Section from 'components/section';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  let FeedbackValues = [good, neutral, bad];

  const countTotalFeedback = () => {
    return FeedbackValues.reduce((total, item) => total + item, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };
  const options = Object.keys({ good, neutral, bad });
  return (
    <Container>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleLeaveFeedback}
          />
        }
      />
      <Section
        title="Statistics"
        children={
          good + neutral + bad === 0 ? (
            <NotificationMessage />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )
        }
      />
    </Container>
  );
}

export default Feedback;
