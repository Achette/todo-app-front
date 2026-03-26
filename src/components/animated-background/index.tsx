'use client';
import type React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

type GradientBackgroundProps = React.ComponentProps<'div'> & {
  gradients?: string[];
  animationDuration?: number;
  animationDelay?: number;
  enableCenterContent?: boolean;
  overlay?: boolean;
  overlayOpacity?: number;
};

const Default_Gradients = [
  'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
  'linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)',
  'linear-gradient(135deg, #0f3460 0%, #e94560 100%)',
  'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
  'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
];

const MotionBox = motion(Box);

export function GradientBackground({
  children,
  gradients = Default_Gradients,
  animationDuration = 8,
  animationDelay = 0.5,
  overlay = false,
  overlayOpacity = 0.3,
  ...rest
}: GradientBackgroundProps) {
  return (
    <Box
      w="full"
      position="relative"
      minH="100vh"
      overflow="hidden"
      {...rest}
    >
      {/* Animated gradient background */}
      <MotionBox
        position="absolute"
        inset={0}
        style={{ background: gradients[0] }}
        animate={{ background: gradients }}
        transition={{
          delay: animationDelay,
          duration: animationDuration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Optional overlay */}
      {overlay && (
        <Box
          position="absolute"
          inset={0}
          bg="black"
          opacity={overlayOpacity}
        />
      )}

      {/* Content wrapper */}
      {children && (
        <Box
          position="relative"
          zIndex={10}
          display="flex"
          minH="100vh"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Box>
      )}
    </Box>
  );
}