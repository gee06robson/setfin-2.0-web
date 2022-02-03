import { useState, useEffect } from 'react'

declare global {
  interface Window {
    google: any
    [key: string]: any
  }
}

export default function useScript(src: string): string {
  const [status, setStatus] = useState<string>(src ? 'loading' : 'idle')

  useEffect(
    () => {
      if (!src) {
        setStatus('idle')
        return;
      }
      
      let script: HTMLScriptElement | null = document.querySelector(`script[src="${src}"]`,)
        
        if (!script) {

          script = document.createElement('script')
          script.src = src
          script.async = true
          script.setAttribute('data-status', 'loading')

          document.body.appendChild(script)
          
          const setAttributeFromEvent = (event: Event) => {
            !!script &&
            script.setAttribute(
              'data-status',
              event.type === 'load' ? 'ready' : 'error',
              )
            }
            
            script.addEventListener('load', setAttributeFromEvent)
            script.addEventListener('error', setAttributeFromEvent)
        } else {
          setStatus(script.getAttribute('data-status') || 'idle')
        }

      const setStateFromEvent = (event: Event) => {
        setStatus(event.type === 'load' ? 'ready' : 'error')
      }

      script.addEventListener('load', setStateFromEvent)
      script.addEventListener('error', setStateFromEvent)
      
      return () => {
        if (script) {
          script.removeEventListener('load', setStateFromEvent)
          script.removeEventListener('error', setStateFromEvent)
        }
      };
    },[src],
  )

  return status
}
