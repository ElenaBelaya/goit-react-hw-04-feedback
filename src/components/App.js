import Feedback from './feedback';
import options from '..//options.json';

export const App = () => {
  return (
    <>
      <Feedback options={options} />
    </>
  );
};
