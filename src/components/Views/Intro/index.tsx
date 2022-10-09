import React, { useContext, useState } from 'react';

import MESSAGES from 'constants/messages';
import NukeIcon from 'resources/icons/NukeIcon';
import { AppContext } from 'components/App/context';

import {
  StyledDescription,
  StyledIntroButton,
  StyledIntroButtonWrapper,
  StyledIntroWrapper,
  StyledNextButton,
  StyledStartButton,
} from './styles';
import { StepsEnum } from '../../App/types';

export interface IntroProps {
  className?: string;
}
const Intro: React.FC<IntroProps> = ({
  className,
}: IntroProps) => {
  const { setStep: setViewStep } = useContext(AppContext);
  const [step, setStep] = useState(0);
  const slides: string[] = [
    MESSAGES.INTRO_ATTENTION,
    MESSAGES.INTRO_DESCRIPTION,
    MESSAGES.INTRO_WHY_LOGIN,
    MESSAGES.INTRO_ENCRYPTION,
    MESSAGES.INTRO_NUKE_BUTTON,
    MESSAGES.INTRO_KILL_SWITCH_API,
    MESSAGES.INTRO_KILL_SWITCH_CALLBACK,
    MESSAGES.INTRO_KILL_SWITCH_SELF_DESTRUCT,
    MESSAGES.INTRO_START,
  ];
  const isLastSlide = step >= slides.length - 1;

  return (
    <StyledIntroWrapper className={className}>
      <StyledIntroButtonWrapper size={12.8}>
        <StyledIntroButton>
          <NukeIcon width={96} height={96} />
        </StyledIntroButton>
      </StyledIntroButtonWrapper>
      {slides.map((item: string, index: number) => (
        <StyledDescription className={index === step ? 'active' : ''}>
          {item}
        </StyledDescription>
      ))}
      {!isLastSlide && (
        <StyledNextButton onClick={() => setStep(step + 1)}>
          {MESSAGES.NEXT}
        </StyledNextButton>
      )}
      {isLastSlide && (
        <StyledStartButton onClick={() => setViewStep(StepsEnum.LOGIN)}>
          {MESSAGES.START}
        </StyledStartButton>
      )}
    </StyledIntroWrapper>
  );
};

export default Intro;
