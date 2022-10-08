import React from 'react';

import NukeIcon from 'resources/icons/NukeIcon';
import MESSAGES from 'constants/messages';

import {
  StyledKillSwitchWrapper,
  StyledKillSwitchButton,
  StyledKillSwitchButtonWrapper,
  StyledTitle,
} from './styles';

export interface KillSwitchProps {
  className?: string;
}
const KillSwitch: React.JSXElementConstructor<KillSwitchProps> = ({
  className,
}: KillSwitchProps) => (
  <StyledKillSwitchWrapper className={className}>
    <StyledKillSwitchButtonWrapper size={12.8}>
      <StyledKillSwitchButton>
        <NukeIcon width={96} height={96} />
      </StyledKillSwitchButton>
    </StyledKillSwitchButtonWrapper>
    <StyledTitle>{MESSAGES.KILL_ACCOUNT}</StyledTitle>
  </StyledKillSwitchWrapper>
);

export default KillSwitch;
