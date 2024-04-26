import React from "react"

export default function Tes() {
  const data = {
    indicator_1: "Data for Kepatuhan jam visite dokter spesialis",
    numerator_indicator_1: {
      d1: 3,
      d2: 3,
      d3: 3,
      // Fill in the rest of the days similarly
      d31: 3,
    },
    denumerator_indicator_1: {
      d1: 3,
      d2: 3,
      d3: 3,
      d5: 3,
      // Fill in the rest of the days similarly
      d31: 3,
    },
    indicator_2: "Data for Indicator 2",
    numerator_indicator_2: {
      d1: 4,
      d2: 4,
      d3: 4,
      // Fill in the rest of the days similarly
      d31: 4,
    },
    denumerator_indicator_2: {
      d1: 4,
      d2: 4,
      d3: 4,
      // Fill in the rest of the days similarly
      d31: 4,
    },
    indicator_3: "Data for Indicator 3",
    numerator_indicator_3: {
      d1: 5,
      d2: 5,

      d3: 5,
      d31: 5,
    },
    denumerator_indicator_3: {
      d1: 5,
      d2: 5,
      d3: 5,
      // Fill in the rest of the days similarly
      d31: 5,
    },
  }

  const renderIndicatorRows = (
    indicatorName,
    numeratorData,
    denumeratorData
  ) => {
    const tableRows = []
    tableRows.push(
      <tr key={`${indicatorName}_name`}>
        <td style={{ border: "1px solid black", padding: "8px" }}>
          {data[indicatorName]}
        </td>
      </tr>
    )

    tableRows.push(
      <tr key={`${indicatorName}_numerator`}>
        <td style={{ border: "1px solid black", padding: "8px" }}>
          Numerator {indicatorName.split("_")[2]}
        </td>
        {[...Array(31)].map((_, index) => (
          <td key={index} style={{ border: "1px solid black", padding: "8px" }}>
            {numeratorData[`d${index + 1}`]}
          </td>
        ))}
      </tr>
    )

    tableRows.push(
      <tr key={`${indicatorName}_denumerator`}>
        <td style={{ border: "1px solid black", padding: "8px" }}>
          Denumerator {indicatorName.split("_")[2]}
        </td>
        {[...Array(31)].map((_, index) => (
          <td key={index} style={{ border: "1px solid black", padding: "8px" }}>
            {denumeratorData[`d${index + 1}`]}
          </td>
        ))}
      </tr>
    )

    return tableRows
  }

  const indicators = ["indicator_1", "indicator_2", "indicator_3"]

  return (
    <div>
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{ border: "1px solid black", padding: "8px" }}
              rowspan="2"
            >
              Nama Indikator
            </th>
            <th
              style={{ border: "1px solid black", padding: "8px" }}
              colspan="31"
            >
              Pemantauan Harian*)
            </th>
          </tr>
          <tr>
            {[...Array(31)].map((_, index) => (
              <th
                key={index}
                style={{ border: "1px solid black", padding: "8px" }}
              >
                {index + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {indicators.map((indicator) =>
            renderIndicatorRows(
              indicator,
              data[`numerator_${indicator}`],
              data[`denumerator_${indicator}`]
            )
          )}
        </tbody>
      </table>
    </div>
  )
}
