import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';


const FeedbackOptions = ( {onLeaveFeedback} ) => (
<>
<Button type='button' name='good' onClick={onLeaveFeedback}>Good</Button>
<Button type='button' name='neutral' onClick={onLeaveFeedback}>Neutral</Button>
<Button type='button' name='bad' onClick={onLeaveFeedback}>Bad</Button> 
</>    

)

export default FeedbackOptions; 