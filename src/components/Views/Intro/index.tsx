import React, { ReactElement, useContext, useState } from 'react';

import MESSAGES from 'constants/messages';
import ClearIcon from 'resources/icons/ClearIcon';
import { AppContext } from 'components/App/context';
import { StepsEnum } from 'components/App/types';

import {
  StyledDescription,
  StyledIntroButton,
  StyledIntroButtonWrapper,
  StyledIntroWrapper,
  StyledNextButton,
  StyledStartButton,
  StyledDescriptionsWrapper,
  StyledDescriptionItem,
  StyledTechnicalDetailsModal,
  StyledCloseButton,
} from './styles';
import CloseIcon from 'resources/icons/CloseIcon';

export interface IntroProps {
  className?: string;
}

interface steps {
  title: string;
  descriptions?: string[];
  cta?: ReactElement<any>;
}
const Intro: React.FC<IntroProps> = ({ className }: IntroProps) => {
  const { setStep: setViewStep } = useContext(AppContext);
  const [step, setStep] = useState(0);
  const [technicalDetailsVisibility, setTechnicalDetailsVisibility] =
    useState(false);

  const slides: steps[] = [
    {
      title: MESSAGES.INTRO_ATTENTION,
    },
    {
      title: MESSAGES.INTRO_DESCRIPTION,
    },
    {
      title: MESSAGES.INTRO_GUIDE,
      descriptions: [
        MESSAGES.INTRO_LOGIN,
        MESSAGES.INTRO_REDIRECT_BACK,
        MESSAGES.INTRO_OFFLINE_CALL,
        MESSAGES.INTRO_LOCK_APPLICATION,
        MESSAGES.INTRO_CLEANUP,
      ],
      cta: (
        <StyledStartButton onClick={() => setTechnicalDetailsVisibility(true)}>
          {MESSAGES.TECHNICAL_DETAILS}
        </StyledStartButton>
      ),
    },
    {
      title: MESSAGES.INTRO_START,
    },
  ];
  const isLastSlide = step >= slides.length - 1;

  const technicalDescriptions: string[] = [
    MESSAGES.INTRO_LOGIN_SECURITY,
    MESSAGES.INTRO_BROOM_BUTTON,
    MESSAGES.INTRO_KILL_SWITCH_API,
    MESSAGES.INTRO_KILL_SWITCH_CALLBACK,
    MESSAGES.INTRO_BACKGROUND_PROCESS,
    MESSAGES.INTRO_SELF_DESTRUCT,
  ];

  const renderBulletPoints = (list: string[] = []): ReactElement<any> => (
    <StyledDescriptionsWrapper>
      {list.map((item, index) => (
        <StyledDescriptionItem key={index}>{item}</StyledDescriptionItem>
      ))}
    </StyledDescriptionsWrapper>
  );

  return (
    <StyledIntroWrapper className={className}>
      <StyledIntroButtonWrapper size={12.8}>
        <StyledIntroButton>
          <ClearIcon width={80} height={80} />
        </StyledIntroButton>
      </StyledIntroButtonWrapper>
      {slides.map(({ title, descriptions = [], cta }, index: number) => (
        <StyledDescription
          className={index === step ? 'active' : ''}
          key={index}
        >
          <h3>{title}</h3>
          {!!descriptions?.length && renderBulletPoints(descriptions)}
          {!!cta && cta}
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
      {technicalDetailsVisibility && (
        <StyledTechnicalDetailsModal>
          <StyledCloseButton
            onClick={() => setTechnicalDetailsVisibility(false)}
          >
            <CloseIcon width={32} height={32} />
          </StyledCloseButton>
          <StyledDescription className="active">
            <h3>{MESSAGES.INTRO_SHOW_TECHNICAL_DETAILS}</h3>
            {renderBulletPoints(technicalDescriptions)}
          </StyledDescription>
        </StyledTechnicalDetailsModal>
      )}
    </StyledIntroWrapper>
  );
};

export default Intro;
