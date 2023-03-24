import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

export default <Partial<Config>>{
  theme: {},
  plugins: [daisyui],
  daisyui: { themes: ['light', 'dark'] }
}
