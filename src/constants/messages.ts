export interface MessagesInterface {
  [key: string]: string;
}

const MESSAGES = {
  LOGIN_VIA_TWITTER: 'Login via Twitter',
  PREPARE_CREDENTIALS: 'Preparing your account, please wait',
  KILL_ACCOUNT: 'ONCE YOU PRESS THIS BUTTON, THERE IS NO TURNING BACK',
  INTRO_ATTENTION:
    'THIS MESSAGE WILL BE SHOWN ONLY ONCE, SO PLEASE READ IT CAREFULLY',
  INTRO_DESCRIPTION:
    "Twitter Killswitch is a security application which allows you to remove all your tweets and direct messages from twitter, in case of emergency and danger, we don't use any personal data",
  INTRO_WHY_LOGIN:
    'Killswitch needs you to login via twitter to allow it to delete your tweets, and direct messages',
  INTRO_ENCRYPTION:
    'First you login to twitter, via Killswitch, then it will redirect you back to application, creates a private key, and a public key with SHA256 for you, then sends twitter api token, and secret, with public key to your client.',
  INTRO_NUKE_BUTTON:
    'Then when you press the NUKE BUTTON it will encrypt your api token and secret with public key, and sends it to Killswitch Api, if you were offline or had internet connection issue, it will wait for internet, and when you get connected it will request to kill your account ASAP',
  INTRO_KILL_SWITCH_API:
    'When API receives your encrypted data which we call it Black Box, it will use private key to decrypt it, then using your token and secret, it will create a queue for removing your tweets, and starts the process and removes your tweets one by one, same happens for your direct messages',
  INTRO_KILL_SWITCH_CALLBACK:
    "meanwhile when the tweets are getting removed in the background, it will lock the application, and won't allow you to login to twitter via Killswitch application again, also removes your credentials from your device, cause if you pressed the NUKE button, it means you are in danger, also opens a debugger to prevent it get accessed again",
  INTRO_KILL_SWITCH_SELF_DESTRUCT:
    'When your tweets and messages got completely removed, we will remove your private key and user code from our database (Black Box) so it seems you were not there since the beginning',
  INTRO_START: 'Now with all this explanations if you are ready, press START',
  FOR_WOMEN: 'For Woman',
  FOR_LIFE: 'For Life',
  FOR_LIBERTY: 'For Liberty',
  STAY_SAFE: 'Operation Completed, Stay Safe :)',
  NEXT: 'Next',
  START: 'Start',
  CANCEL: 'CANCEL',
};

export default MESSAGES;
