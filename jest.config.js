module.exports = {
    "roots": [
      "<rootDir>/src"
    ],
    "testMatch": [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },

    "reporters": [
      "default",
      [
        "jest-html-reporters",
        {
          filename: "reports.html",
          pageTitle: "JS & TS Test Execution Report",
          hideIcon:true , 
        }
      ],
      [
        "jest-stare",
        {
          "resultDir": "results/jest-stare",
          "reportTitle": "jest-stare!",
           "coverageLink": "./coverage/lcov-report/index.html",
          // "jestStareConfigJson": "jest-stare.json",
          // "jestGlobalConfigJson": "globalStuff.json"
        }
      ]
  ]
  }