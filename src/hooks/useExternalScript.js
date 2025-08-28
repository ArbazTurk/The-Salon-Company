// import { useLayoutEffect, useState } from 'react'

// export function useExternalScript(url) {
//   const [loaded, setLoaded] = useState(false)
//   const [error, setError] = useState(false)

//   useLayoutEffect(() => {
//     // Check if script is already loaded
//     // const existingScript = document.querySelector(`script[src="${url}"]`)
//     // if (existingScript) {
//     //   setLoaded(true)
//     //   return
//     // }

//     const script = document.createElement('script')
//     script.src = url
//     script.async = true
//     document.head.appendChild(script)

//     script.onload = () => setLoaded(true)
//     script.onerror = () => setError(true)

//     return () => {
//       // Cleanup: remove the script when component unmounts
//       const scriptElement = document.querySelector(`script[src="${url}"]`)
//       if (scriptElement) {
//         document.head.removeChild(scriptElement)
//       }
//     }
//   }, [url])

//   return { loaded, error }
// }
