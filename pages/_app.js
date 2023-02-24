import '@/styles/globals.css'
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  variable: '--font-ubuntu',
  weight: ['300','400','500','700'] //delete weight that u dont use in the project! --optimize
})
export default function ({Component,pageProps,router}) {
  return <div className={`${ubuntu.variable}`}>
    <Component {...pageProps }/>
  </div>
}
