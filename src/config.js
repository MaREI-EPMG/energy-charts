import chartsInfo from "./specs/chartsInfo.json";
import chartsTitles from "./specs/chartsTitles.json";
import seriesTitles from "./specs/seriesTitles.json";
import scenarioTitles from "./specs/scenarioTitles.json";
import contentNavs from "./specs/contentNavs.json";
import scenarios from "./specs/scenarios.json";
import routes from "./specs/routes.json";

let years1 = Array(31)
  .fill(0)
  .map((e, i) => i + 2020); // 2020, 2021, 2022 ... 2050

let years2 = Array(7)
  .fill(0)
  .map((e, i) => i * 5 + 2020); // 2020, 2025, 2030, ... 2050

const config = {
  chartsInfo: chartsInfo,
  chartsPath: "charts/*",

  // dataDownload adds a link to chart cards to enable the viewer to
  //    download the data used to make the chart
  dataDownload: true,

  demo: true,

  // fixedDomain, if true, fixes the Y-axis scall across all charts.
  //    i.e. only the show-differences chart is auto-scaled
  //    You will need to provide MinY & MinY for each chart, in chartsInfo
  fixedDomain: false,

  // showSearchParams adds the scenario(s) and showDifference flag to
  //    URL, for sharing links to specific charts with other people
  showSearchParams: true,

  titles: {
    charts: chartsTitles,
    series: seriesTitles,
    scenarios: scenarioTitles
  },
  scenarios: scenarios,
  defaultScenarioGroup: [scenarios[0].name],
  landingPage: "about",
  routes: routes,
  contentNavs: contentNavs,
  headerNavLinks: [
    { to: "/about", text: "About" },
    { to: "/charts", text: "Charts" }
  ],
  headerNavBrand: {
    brand: "MAREI-EPMG TIM Scenarios",
    to: "/"
  },
  stackbarOffset: 5, // when comparing scenarios, this is the width that the bar for the compared scenario is offset by
  xDomainPadding: 10, // spacing between end bars and ends of axes
  xGridMarks: years2, // labels on chart - aka the *major* grid in Excel
  xGridValues: years1 // a barstack for each value
};

export { config as default };
