const API_BASE: string = process.env.REACT_APP_API_BASE ?? '';

const ENDPOINTS: { [key: string]: { [key: string]: string } } = {
  TWITTER: {
    LOGIN: `${API_BASE}/twitter/login`,
    KILL: `${API_BASE}/twitter/kill`,
  },
};

export default ENDPOINTS;
