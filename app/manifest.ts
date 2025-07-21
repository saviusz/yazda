import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Yazda',
    short_name: 'Yazda',
    description: 'Controll panel for linear camera dolly',
    start_url: '/',
    display: 'fullscreen',
    background_color: '#2F2823',
    theme_color: '#FB6F04',
    icons: [
      {
        src: '/icon.png',
        sizes: 'all',
        type: 'image/png',
      },
    ],
  }
}