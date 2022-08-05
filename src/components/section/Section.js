import PropTypes from 'prop-types';
import { SectionBox, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionBox>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionBox>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};
