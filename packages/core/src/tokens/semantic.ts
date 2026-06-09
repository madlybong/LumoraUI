export const LuTokens = {
  colors: {
    surface:         '--lu-color-surface',
    surfaceRaised:   '--lu-color-surface-raised',
    surfaceSunken:   '--lu-color-surface-sunken',
    surfaceOverlay:  '--lu-color-surface-overlay',
    
    surfaceHover:    '--lu-color-surface-hover',
    surfaceActive:   '--lu-color-surface-active',
    
    border:          '--lu-color-border',
    borderStrong:    '--lu-color-border-strong',
    borderFocus:     '--lu-color-border-focus',
    
    primary:         '--lu-color-primary',
    primaryHover:    '--lu-color-primary-hover',
    primaryActive:   '--lu-color-primary-active',
    onPrimary:       '--lu-color-on-primary',
    primarySurface:  '--lu-color-primary-surface',
    primaryBorder:   '--lu-color-primary-border',
    
    danger:          '--lu-color-danger',
    dangerSurface:   '--lu-color-danger-surface',
    success:         '--lu-color-success',
    successSurface:  '--lu-color-success-surface',
    warning:         '--lu-color-warning',
    warningSurface:  '--lu-color-warning-surface',
    info:            '--lu-color-info',
    infoSurface:     '--lu-color-info-surface',
    
    text:            '--lu-color-text',
    textMuted:       '--lu-color-text-muted',
    textDisabled:    '--lu-color-text-disabled',
    
    pipelineSuccess: '--lu-pipeline-success',
    pipelineWarning: '--lu-pipeline-warning',
    pipelineDanger:  '--lu-pipeline-danger',
    pipelineInfo:    '--lu-pipeline-info',
  },
  radius: {
    btn:    '--lu-radius-btn',
    input:  '--lu-radius-input',
    card:   '--lu-radius-card',
    dialog: '--lu-radius-dialog',
    chip:   '--lu-radius-chip',
  },
} as const;

export type LuTokenKey = typeof LuTokens[keyof typeof LuTokens][keyof typeof LuTokens[keyof typeof LuTokens]];
