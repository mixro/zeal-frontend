// Safe localStorage helpers: private windows or blocked storage never break the page.
export const load = (key, fallback) => {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export const save = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable */
  }
};

export const remove = (key) => {
  try {
    window.localStorage.removeItem(key);
  } catch {
    /* storage unavailable */
  }
};
