import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';


const FeedbackOptions = ( {options, onLeaveFeedback} ) => (
       <>
    {options.map(option => (
  <Button type='button' key={option} name={option} onClick={() => onLeaveFeedback(option)}>{option}</Button>
  
    ))}   
        </>    
        
        )



export default FeedbackOptions; 

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string), 
  onLeaveFeedback: PropTypes.func,
  option: PropTypes.string,
}