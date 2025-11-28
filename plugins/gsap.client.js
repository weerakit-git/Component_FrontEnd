import { gsap } from 'gsap';
import SplitText from 'gsap/SplitText'; 

export default defineNuxtPlugin((nuxtApp) => {

  gsap.registerPlugin(SplitText);

  return {
    provide: {
      gsap: gsap,
      SplitText: SplitText,
    }
  }
});