import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import { useLocation } from "react-router-dom";
import { Chart, ChartLegend } from "../components";
import { DownloadIcon } from "../components";
import downloadTableData from "../utils/downloadTableData";

function Charts(props) {
  const {
    cache,
    charts,
    chartsInfo,
    chartsTitles,
    seriesTitles,
    chartWidth,
    chartWidthScaling = 1,
    dataDownload,
    scenarioTitles
  } = props;

  const location = useLocation();
  const when = Date();

  function sendTableData(e, chart) {
    const cacheChartURL =
      e.currentTarget.parentNode.parentNode.querySelector("[data-chart]")
        .dataset["chart"];

    const chartData = cache.current[cacheChartURL];
    const chartName = (chartsTitles && chartsTitles[chart]) || chart;
    const unit =
      chartsInfo && chartsInfo[chart] && chartsInfo[chart]["unit"]
        ? chartsInfo[chart]["unit"]
        : "unit";

    downloadTableData(
      chartData,
      chartName,
      unit,
      scenarioTitles,
      location.pathname,
      when
    );
  }

  return (
    <Row
      xs={"auto"}
      className="charts py-2 justify-content-center justify-content-md-start"
    >
      <p
        style={{
          width: "100%"
        }}
      >
        Download data for any chart by clicking on the{" "}
        <Card.Link>
          <DownloadIcon />
        </Card.Link>{" "}
        in its top-right corner.
      </p>
      {charts.map(
        (chart, idx) =>
          chartsInfo[chart] && (
            <Col className="p-2" key={idx}>
              <Card style={{ maxWidth: chartWidth }}>
                <Card.Header>
                  {(chartsTitles && chartsTitles[chart]) || chart}
                  {dataDownload && (
                    <Card.Link
                      onClick={(e) => sendTableData(e, chart)}
                      className="download-table"
                      title="click to download this table's data"
                    >
                      <DownloadIcon />
                    </Card.Link>
                  )}
                </Card.Header>
                <Chart
                  chartName={chart}
                  {...props}
                  {...chartsInfo[chart]}
                  chartWidth={chartWidth}
                  widthScaling={chartWidthScaling}
                />
                <Card.Footer>
                  <ChartLegend
                    {...chartsInfo[chart]}
                    seriesTitles={seriesTitles}
                  />
                </Card.Footer>
              </Card>
            </Col>
          )
      )}
    </Row>
  );
}

export default Charts;
