import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Tejas Shende
        </SectionTitle>
        <SectionText>
        I am a positive, enthusiastic and competent student who over the college years, has built up a diverse range of skills, qualities and attributes that guarantee my commitment towards the work.
        My motive is be a Responsible, creative, open-minded and ambitious Web Developer.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;