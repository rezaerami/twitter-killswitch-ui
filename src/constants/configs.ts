interface ConfigsType {
  [key: string]: any;
}

const CONFIGS: ConfigsType = {
  TOKEN_COOKIE_NAME: 'TOKEN',
  OPERATION_IS_READY_COOKIE_NAME: 'OPERATION_READY',
  OPERATION_COMPLETED_COOKIE_NAME: 'OPERATION_COMPLETED',
};

export default CONFIGS;
