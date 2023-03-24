import type { AppTheme } from '~/types'

export const useTheme = () => useState<AppTheme>('theme', () => 'light')
