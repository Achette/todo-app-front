import React from 'react'
import { GradientBackground } from '../animated-background'

export const AccountContainer = ({
  children,
}: {
  children: React.ReactElement
}) => {
  return <GradientBackground>{children}</GradientBackground>
}
