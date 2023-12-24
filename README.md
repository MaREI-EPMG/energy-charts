# Energy Charts

This is the bespoke UCC-EPMG version of Energy Charts, customised from the [orginal software](https://github.com/facilitate-energy/energy-charts) developed by [Facilitate Energy Ltd.](https://facilitate.energy/)

## Purpose

Energy Charts is a React component, and a standalone web application, developed to:

- make it easier to communicate energy modelling results and scenarios to stakeholders;
- facilitate discussion of energy modelling results and make model debugging easier;
- disseminate energy modelling results and scenarios to a wide audience.

## To use as dependency

To use Energy Charts as dependency in a project run:

`npm install energy-charts --save-prod`

## To run locally (in general, you don't want to do this)

After cloning from GitHub, execute from within the repository:

`npm install`

Followed by:

`npm start`

Requires [Node.js](https://nodejs.org).

## To deploy (and you won't, in general, want to do this either)

Follow this [guide](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) to deploy on Netlify.

## To customise

- **Scenario data** is located in `public/data`
- Mardown files to be rendered as **Pages** are in `public/pages`
- **Routes** and other configuration settings are in `src/config.js`
- Charts' **specs** are in `src/specs/chartsInfo.js`. These also act as filters.

## License

[![license](https://img.shields.io/github/license/facilitate-energy/energy-charts?color=blueviolet)](LICENSE)

Copyright 2021-2023 Facilitate Energy Ltd. Bespoke changes by UCC-EPMG are copyright 2023 University College Cork.

Energy Charts is licensed under the Apache License, Version 2.0.

You may obtain a copy of the License [here](/LICENSE) or at http://www.apache.org/licenses/LICENSE-2.0.
