"use client"
import { useEffect } from "react"
import createScript from "./createScript.js"
import createLink from "./createLink.js"

export default function ApiDocs() {
  useEffect(() => {
    const StyleCss = createLink("https://nkhm.xyz/assets/css/swagger.css")
    const linkStyle = createLink("https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.css")
    const scriptPreset = createScript("https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.min.js")
    const scriptBundle = createScript("https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.min.js")
    
    const customStyle = document.createElement("style")
    customStyle.innerHTML = `
      .swagger-ui .topbar { 
        display: none;
      }
     .swagger-ui .info a[href$="swg.json"] {
        display: none;
      }
    `

    document.head.appendChild(StyleCss)
    document.head.appendChild(linkStyle)
    document.head.appendChild(customStyle)
    document.body.appendChild(scriptBundle)
    document.body.appendChild(scriptPreset)

    scriptBundle.onload = () => {
      if (window.SwaggerUIBundle && window.SwaggerUIStandalonePreset) {
        window.SwaggerUIBundle({
          url: "/swg.json",
          dom_id: "#swagger-ui",
          presets: [
            window.SwaggerUIBundle.presets.apis,
            window.SwaggerUIStandalonePreset,
          ],
          layout: "StandaloneLayout",
        })
      }
    }

    return () => {
      document.head.removeChild(linkStyle)
      document.head.removeChild(customStyle)
      document.body.removeChild(scriptBundle)
      document.body.removeChild(scriptPreset)
    }
  }, [])

  return <div id="swagger-ui" style={{ height: "100vh" }}/>
}