import React from 'react'
import { StyledAppWrapper } from './styles'

interface AppPropTypes {
  className?: string
}

const App: React.FC = ({ className }: AppPropTypes) => (
    <StyledAppWrapper className={className}>
        this is my app
    </StyledAppWrapper>
)

export default App
