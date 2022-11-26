import { useEffect, useState } from 'react';
import CONFIGS from 'constants/configs';
import * as MESSAGES from 'constants/messages';

export enum AvailableLanguages {
  EN = 'EN',
  FA = 'FA',
}
interface UseTranslateInterface {
  selectedLanguage: string;
  setSelectedLanguage: (locale: AvailableLanguages) => void;
  translate: (phrase: string) => string;
  MESSAGES: { [key: string]: string };
  isRtl: boolean | any;
}

const useTranslate = (): UseTranslateInterface => {
  const defaultLanguage = AvailableLanguages.EN;
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    localStorage.getItem(CONFIGS.SELECTED_LANGUAGE_NAME) ?? defaultLanguage,
  );
  useEffect(() => {
    localStorage.setItem(CONFIGS.SELECTED_LANGUAGE_NAME, selectedLanguage);
    document.dir = selectedLanguage === AvailableLanguages.FA ? 'rtl' : 'ltr';
  }, [selectedLanguage]);

  /* eslint-disable @typescript-eslint/ban-ts-comment */
  const selectedMessages =
    // @ts-expect-error
    MESSAGES?.[selectedLanguage] || MESSAGES[defaultLanguage];

  const translate = (phrase: string): string => {
    const messageKey: string | undefined = Object.keys(selectedMessages).find(
      // @ts-expect-error
      (key) => MESSAGES[defaultLanguage][key] === phrase,
    );

    // @ts-expect-error
    return selectedMessages?.[messageKey] ?? phrase;
  };
  /* eslint-enable @typescript-eslint/ban-ts-comment */

  const isRtl = selectedLanguage;

  return {
    selectedLanguage,
    setSelectedLanguage,
    translate,
    MESSAGES: MESSAGES[defaultLanguage],
    isRtl,
  };
};

export default useTranslate;
