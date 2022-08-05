import PropTypes from 'prop-types';
import { StatTypesBox, StatTypes } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatTypesBox>
    <StatTypes>Good: {good}</StatTypes>
    <StatTypes>Neutral: {neutral}</StatTypes>
    <StatTypes>Bad: {bad}</StatTypes>
    <StatTypes>Total: {total}</StatTypes>
    <StatTypes>Positive feedback: {positivePercentage} %</StatTypes>
  </StatTypesBox>
);
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
