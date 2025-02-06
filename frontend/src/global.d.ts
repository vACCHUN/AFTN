export {};

declare global {
  interface Window {
    electron: {
      closeApp: () => void;
      log: (message: string) => void;
    };
  }
}
