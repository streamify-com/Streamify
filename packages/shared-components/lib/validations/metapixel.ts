declare global {
  interface Window {
    fbq?: Function;
  }
}

export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const pageview = () => {
  if (window.fbq) {
    window.fbq("track", "PageView");
  }
};

export const event = (name: any, options = {}) => {
  if (window.fbq) {
    window.fbq("track", name, options);
  }
};
