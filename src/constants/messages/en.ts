export default {
  CHANGE_LANGUAGE: 'فارسی',
  SOCIAL_CLEANER: 'Social Cleaner',
  LANGUAGE: 'English',
  LOGIN_VIA_TWITTER: 'Login via Twitter',
  PREPARE_CREDENTIALS: 'Preparing your account, please wait',
  KILL_ACCOUNT: 'ONCE YOU PRESS THIS BUTTON, THERE IS NO TURNING BACK',
  INTRO_ATTENTION:
    'This message will be shown only once, so please read it carefully.',
  INTRO_DESCRIPTION:
    'Social Cleaner is a security application that allows you to remove all your tweets and direct messages from Twitter in case of emergency and danger. It has been brought to life because of the dire situation in Iran and seeks to help out those in need.',
  INTRO_GUIDE:
    'In order to allow Social Cleaner to delete your tweets and direct messages, you have to go through the following steps:',

  INTRO_LOGIN: 'Login to Twitter via Social Cleaner.',
  INTRO_REDIRECT_BACK:
    'Once redirected back to Social Cleaner, press the ‘delete all’ button to initiate the process.',
  INTRO_OFFLINE_CALL:
    ' If you are offline or have connection issues, Social Cleaner will wait until you are connected again and request permission to continue the process.',
  INTRO_LOCK_APPLICATION:
    'While your tweets and direct messages are being removed, Social Cleaner will be locked.',
  INTRO_CLEANUP:
    'When all is removed, we will delete your private key and user code from our database. There will be no trace of you left.',

  INTRO_SHOW_TECHNICAL_DETAILS:
    'It is important to note that we have taken extensive security measures in order to safeguard your privacy. This means we do not keep ANY personal data. For a more detailed and technical explanation of how Social Cleaner works',

  INTRO_LOGIN_SECURITY:
    'Logging in to Twitter via Social Cleaner will redirect you back to the Social Cleaner application. This creates a private key and a public key with a secure hash algorithm (SHA256). Twitter uses the OAuth method which allows Social Cleanerh to communicate with the Twitter API through your account without knowing your username and password.',
  INTRO_BROOM_BUTTON:
    'Pressing the ‘delete all’ button will then encrypt your API token, secret and public key and send it to the Social Cleaner API. If you are offline or have connection issues, Social Cleaner will wait until you are connected again and request permission to delete your tweets and direct messages as soon as possible.',
  INTRO_KILL_SWITCH_API:
    'When API receives your encrypted data which we call it Black Box, it will use private key to decrypt it, then using your token and secret, it will create a queue for removing your tweets, and starts the process and removes your tweets one by one, same happens for your direct messages',
  INTRO_KILL_SWITCH_CALLBACK:
    'When the Social Cleaner API receives your encrypted data in what we call a Black Box, it will use the private key to decrypt it. Then using your token and secret key, it will create a queue and start the process of removing your tweets and direct messages one by one.',
  INTRO_BACKGROUND_PROCESS:
    'While the tweets and direct messages are being removed in the background, the Social Cleaner application will be locked. It won’t allow you to login to Twitter via Social Cleaner again and removes your credentials from your device. It will also open a debugger to prevent Social Cleaner from being accessed again, so that if someone else wants to access the interface from your device they will not see that you have used it.',
  INTRO_SELF_DESTRUCT:
    'Once your tweets and messages are completely removed, Social Cleaner will also delete your private key and user code from our database (or Black Box), so it will seem like you were never here in the first place.',

  INTRO_START: 'If you are ready to use Social Cleaner, press START.',
  FOR_WOMEN: 'For Woman',
  FOR_LIFE: 'For Life',
  FOR_LIBERTY: 'For Liberty',
  STAY_SAFE: 'Operation Completed, Stay Safe :)',
  NEXT: 'Next',
  START: 'Start',
  CANCEL: 'CANCEL',
  KILL_ERROR: 'There was an error while cleaning your account, login again',
  OFFLINE:
    'You are OFFLINE, We have queued your request, and will process it as soon as you get ONLINE',
  TECHNICAL_DETAILS: 'Technical Details',
};
