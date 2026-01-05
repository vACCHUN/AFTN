const { FusesPlugin } = require("@electron-forge/plugin-fuses");
const { FuseV1Options, FuseVersion } = require("@electron/fuses");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  packagerConfig: {
    icon: "images/icon",
    win32metadata: {
      CompanyName: "vACCHUN",
      FileDescription: "AFTN",
      OriginalFilename: "AFTN.exe",
      ProductName: "AFTN",
      InternalName: "AFTN",
    },
    osxSign: false,
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "aftn",
        setupExe: "AFTNSetup.exe",
        certificateFile: "./AFTN.pfx",
        certificatePassword: process.env.WIN_CERT_PASSWORD,
      },
    },
    /*{
      name: "@electron-forge/maker-msix",
      config: {
        manifestVariables: {
          publisher: "vACCHUN",
        },
      },
    },*/
  ],
  plugins: [
    {
      name: "@electron-forge/plugin-auto-unpack-natives",
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
