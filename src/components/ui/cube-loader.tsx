'use client'

import React from 'react'

/**
 * Route-aware color themes for the cube loader.
 * Each product page gets its own color palette.
 */
export interface CubeColorTheme {
  /** Primary face color (CSS rgba) */
  primary: string;
  /** Secondary face color */
  secondary: string;
  /** Accent face color */
  accent: string;
  /** Glow color for the core */
  core: string;
  /** Gradient for the ambient background glow */
  glow: string;
  /** Text color class */
  textClass: string;
  /** Label text */
  label?: string;
}

export const cubeThemes: Record<string, CubeColorTheme> = {
  default: {
    primary: 'rgba(37,99,235,0.4)',     // brand blue
    secondary: 'rgba(249,115,22,0.4)',   // brand orange
    accent: 'rgba(37,99,235,0.3)',
    core: 'rgba(255,255,255,0.8)',
    glow: 'radial-gradient(ellipse 50% 40% at 50% 45%, rgba(37,99,235,0.12) 0%, transparent 70%), radial-gradient(ellipse 35% 30% at 60% 55%, rgba(249,115,22,0.06) 0%, transparent 70%)',
    textClass: 'text-blue-400',
    label: 'Loading',
  },
  'nena-ai': {
    primary: 'rgba(37,99,235,0.45)',     // blue
    secondary: 'rgba(34,197,94,0.4)',    // green
    accent: 'rgba(255,255,255,0.3)',     // white
    core: 'rgba(96,165,250,0.9)',
    glow: 'radial-gradient(ellipse 50% 40% at 50% 45%, rgba(37,99,235,0.15) 0%, transparent 70%), radial-gradient(ellipse 35% 30% at 60% 55%, rgba(34,197,94,0.08) 0%, transparent 70%)',
    textClass: 'text-blue-400',
    label: 'Nena AI',
  },
  'doodlenest': {
    primary: 'rgba(249,115,22,0.45)',    // orange
    secondary: 'rgba(251,191,36,0.4)',   // amber/yellow
    accent: 'rgba(249,115,22,0.3)',
    core: 'rgba(251,146,60,0.9)',
    glow: 'radial-gradient(ellipse 50% 40% at 50% 45%, rgba(249,115,22,0.14) 0%, transparent 70%), radial-gradient(ellipse 35% 30% at 60% 55%, rgba(251,191,36,0.08) 0%, transparent 70%)',
    textClass: 'text-orange-400',
    label: 'DoodleNest',
  },
  'autoflow': {
    primary: 'rgba(249,115,22,0.4)',     // orange
    secondary: 'rgba(239,68,68,0.35)',   // red
    accent: 'rgba(251,146,60,0.3)',
    core: 'rgba(249,115,22,0.9)',
    glow: 'radial-gradient(ellipse 50% 40% at 50% 45%, rgba(249,115,22,0.14) 0%, transparent 70%), radial-gradient(ellipse 35% 30% at 60% 55%, rgba(239,68,68,0.06) 0%, transparent 70%)',
    textClass: 'text-orange-400',
    label: 'AutoFlow',
  },
  'business-solutions': {
    primary: 'rgba(37,99,235,0.4)',      // blue
    secondary: 'rgba(99,102,241,0.35)',  // indigo
    accent: 'rgba(37,99,235,0.3)',
    core: 'rgba(96,165,250,0.9)',
    glow: 'radial-gradient(ellipse 50% 40% at 50% 45%, rgba(37,99,235,0.14) 0%, transparent 70%), radial-gradient(ellipse 35% 30% at 60% 55%, rgba(99,102,241,0.06) 0%, transparent 70%)',
    textClass: 'text-blue-400',
    label: 'Business Solutions',
  },
}

interface CubeLoaderProps {
  theme?: CubeColorTheme;
}

export default function CubeLoader({ theme = cubeThemes.default }: CubeLoaderProps) {
  return (
    <div className='flex flex-col items-center justify-center gap-10 perspective-container'>

      {/* 3D Scene Wrapper */}
      <div className='relative w-20 h-20 flex items-center justify-center preserve-3d'>

        {/* THE SPINNING CUBE CONTAINER */}
        <div className='relative w-full h-full preserve-3d animate-cube-spin'>

          {/* Internal Core (The energy source) */}
          <div
            className='absolute inset-0 m-auto w-6 h-6 rounded-full blur-md animate-pulse-fast'
            style={{ background: theme.core, boxShadow: `0 0 40px ${theme.core}` }}
          />

          {/* Front */}
          <div className='side-wrapper front'>
            <div className='face' style={{ background: theme.primary, borderColor: theme.primary, boxShadow: `0 0 15px ${theme.primary}` }} />
          </div>
          {/* Back */}
          <div className='side-wrapper back'>
            <div className='face' style={{ background: theme.primary, borderColor: theme.primary, boxShadow: `0 0 15px ${theme.primary}` }} />
          </div>
          {/* Right */}
          <div className='side-wrapper right'>
            <div className='face' style={{ background: theme.secondary, borderColor: theme.secondary, boxShadow: `0 0 15px ${theme.secondary}` }} />
          </div>
          {/* Left */}
          <div className='side-wrapper left'>
            <div className='face' style={{ background: theme.secondary, borderColor: theme.secondary, boxShadow: `0 0 15px ${theme.secondary}` }} />
          </div>
          {/* Top */}
          <div className='side-wrapper top'>
            <div className='face' style={{ background: theme.accent, borderColor: theme.accent, boxShadow: `0 0 15px ${theme.accent}` }} />
          </div>
          {/* Bottom */}
          <div className='side-wrapper bottom'>
            <div className='face' style={{ background: theme.accent, borderColor: theme.accent, boxShadow: `0 0 15px ${theme.accent}` }} />
          </div>
        </div>

        {/* Floor Shadow */}
        <div className='absolute -bottom-16 w-20 h-6 bg-black/40 blur-xl rounded-[100%] animate-shadow-breathe' />
      </div>

      {/* Loading Text */}
      <div className='flex flex-col items-center gap-1'>
        <h3 className={`text-xs font-semibold tracking-[0.3em] uppercase ${theme.textClass}`}>
          {theme.label || 'Loading'}
        </h3>
        <p className='text-[10px] text-slate-500'>
          Preparing your experience…
        </p>
      </div>

      <style jsx>{`
        .perspective-container {
          perspective: 1200px;
          -webkit-perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
        @keyframes cubeSpin {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.35; }
        }
        @keyframes pulse-fast {
          0%, 100% { transform: scale(0.8); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        @keyframes shadow-breathe {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.5); opacity: 0.15; }
        }
        .animate-cube-spin {
          animation: cubeSpin 8s linear infinite;
        }
        .animate-pulse-fast {
          animation: pulse-fast 2s ease-in-out infinite;
        }
        .animate-shadow-breathe {
          animation: shadow-breathe 3s ease-in-out infinite;
        }
        .side-wrapper {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
        }
        .face {
          width: 100%;
          height: 100%;
          position: absolute;
          border-width: 1.5px;
          border-style: solid;
          animation: breathe 3s ease-in-out infinite;
          backdrop-filter: blur(2px);
          -webkit-backface-visibility: visible;
          backface-visibility: visible;
        }
        .front  { transform: rotateY(0deg) translateZ(40px); }
        .back   { transform: rotateY(180deg) translateZ(40px); }
        .right  { transform: rotateY(90deg) translateZ(40px); }
        .left   { transform: rotateY(-90deg) translateZ(40px); }
        .top    { transform: rotateX(90deg) translateZ(40px); }
        .bottom { transform: rotateX(-90deg) translateZ(40px); }
      `}</style>
    </div>
  )
}
