export const getCookie = (name: string): string => {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie?.substring(name.length, cookie.length);
    }
  }
  return '';
};
export const hasCookie = (name: string): boolean => Boolean(getCookie(name));

export const deleteCookie = (name: string): void => {
  if (hasCookie(name)) {
    document.cookie = `${name}='';expires=${new Date(0).toString()}`;
  }
};

export const setCookie = (
  name: string,
  value: string,
  expireDays = 7,
): void => {
  const date = new Date();
  date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
};
