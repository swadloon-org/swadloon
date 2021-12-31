---
title: Tables
description: Tables are used to organize and display information.
tags:
  - organism
  - data
jsdocImports: ['TableCellProps']
---

<!-- CODE IMPORTS -->

<!-- prettier-ignore -->
import { Tables, TablesDensityXSmall, TablesDensityMedium, TablesDensityLarge } from '../../src/code/tables.code'; 
import TablesCode from '!!raw-loader!../../src/code/tables.code.tsx';

<!-- END CODE IMPORTS -->

<DocHeader props={props}/>

<!-- prettier-ignore -->
<ThemeWrapper 
  filename={'tables.code.tsx'} 
  code={TablesCode}
  displayTabs={false}>
  <Tables />
</ThemeWrapper>

## Density

The table is available in four different row size: `xSmall`, `small`, `medium`
and `large`.

### XSmall

<!-- prettier-ignore -->
<ThemeWrapper displayTabs={false}>
  <TablesDensityXSmall />
</ThemeWrapper>

### Small (default)

<!-- prettier-ignore -->
<ThemeWrapper displayTabs={false}>
  <Tables />
</ThemeWrapper>

### Medium

<!-- prettier-ignore -->
<ThemeWrapper displayTabs={false}>
  <TablesDensityMedium />
</ThemeWrapper>

### Large

<!-- prettier-ignore -->
<ThemeWrapper displayTabs={false}>
  <TablesDensityLarge />
</ThemeWrapper>

## Mardown Tables Examples

Any markdown tables will be rendered with the Table components.

For example, this markdown table:

```markdown
| Symbol | Name                | Sector                 |  Price | Price/Earnings | Dividend Yield | Earnings/Share | 52 Week Low | 52 Week High |   Market Cap |      EBITDA | Price/Sales | Price/Book | SEC Filings                                                        |
| ------ | ------------------- | ---------------------- | -----: | -------------: | -------------: | -------------: | ----------: | -----------: | -----------: | ----------: | ----------: | ---------: | ------------------------------------------------------------------ |
| MMM    | 3M Company          | Industrials            | 222.89 |          24.31 |      2.3328617 |           7.92 |      259.77 |       175.49 | 138721055226 |  9048000000 |   4.3902707 |      11.34 | http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=MMM  |
| AOS    | A.O. Smith Corp     | Industrials            |  60.24 |          27.76 |      1.1479592 |            1.7 |       68.39 |       48.925 |  10783419933 |   601000000 |   3.5754826 |       6.35 | http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AOS  |
| ABT    | Abbott Laboratories | Health Care            |  56.27 |          22.51 |      1.9089824 |           0.26 |        64.6 |        42.28 | 102121042306 |  5744000000 |   3.7404804 |       3.19 | http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ABT  |
| ABBV   | AbbVie Inc.         | Health Care            | 108.48 |          19.41 |      2.4995599 |           3.29 |      125.86 |        60.05 | 181386347059 | 10310000000 |    6.291571 |      26.14 | http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ABBV |
| ACN    | Accenture plc       | Information Technology | 150.51 |          25.47 |      1.7144699 |           5.44 |       162.6 |       114.82 |  98765855553 |  5643228000 |    2.604117 |      10.62 | http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ACN  |
| ATVI   | Activision Blizzard | Information Technology |  65.83 |           31.8 |     0.43190324 |           1.28 |      74.945 |        38.93 |  52518668144 |  2704000000 |    10.59512 |       5.16 | http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ATVI |
```

Is rendered as:

| Symbol | Name                | Sector                 |  Price | Price/Earnings | Dividend Yield | Earnings/Share | 52 Week Low | 52 Week High |   Market Cap |      EBITDA | Price/Sales | Price/Book | SEC Filings                                                        |
| ------ | ------------------- | ---------------------- | -----: | -------------: | -------------: | -------------: | ----------: | -----------: | -----------: | ----------: | ----------: | ---------: | ------------------------------------------------------------------ |
| MMM    | 3M Company          | Industrials            | 222.89 |          24.31 |      2.3328617 |           7.92 |      259.77 |       175.49 | 138721055226 |  9048000000 |   4.3902707 |      11.34 | http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=MMM  |
| AOS    | A.O. Smith Corp     | Industrials            |  60.24 |          27.76 |      1.1479592 |            1.7 |       68.39 |       48.925 |  10783419933 |   601000000 |   3.5754826 |       6.35 | http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=AOS  |
| ABT    | Abbott Laboratories | Health Care            |  56.27 |          22.51 |      1.9089824 |           0.26 |        64.6 |        42.28 | 102121042306 |  5744000000 |   3.7404804 |       3.19 | http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ABT  |
| ABBV   | AbbVie Inc.         | Health Care            | 108.48 |          19.41 |      2.4995599 |           3.29 |      125.86 |        60.05 | 181386347059 | 10310000000 |    6.291571 |      26.14 | http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ABBV |
| ACN    | Accenture plc       | Information Technology | 150.51 |          25.47 |      1.7144699 |           5.44 |       162.6 |       114.82 |  98765855553 |  5643228000 |    2.604117 |      10.62 | http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ACN  |
| ATVI   | Activision Blizzard | Information Technology |  65.83 |           31.8 |     0.43190324 |           1.28 |      74.945 |        38.93 |  52518668144 |  2704000000 |    10.59512 |       5.16 | http://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=ATVI |

## API

<DocPropsTable props={props}/>
