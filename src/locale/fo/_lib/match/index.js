import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import buildMatchFn from '../../../_lib/buildMatchFn/index.js'

var matchOrdinalNumberPattern = /^(\d+)(\.)?/i
var parseOrdinalNumberPattern = /\d+/i

var matchEraPatterns = {
  narrow: /^(fKr|eKr)/i,
  abbreviated: /^(f\.Kr\.|e\.Kr\.)/i,
  wide: /^(fyri Krist|eftir Krist)/i
}

var parseEraPatterns = {
  any: [/^(f\.Kr\.|e\.Kr\.)/i]
}

var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]. ársfj\./i,
  wide: /^[1234] ársfjórðingur/i
}

var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
}

var matchMonthPatterns = {
  narrow: /^[jfmásónd]/i,
  abbreviated: /^(jan\.|feb\.|mars\.|apríl\.|maí|júní|júlí|águst|sep\.|oct\.|nov\.|dec\.)/i,
  wide: /^(januar|februar|mars|apríl|mai|juni|juli|august|september|oktober|november|desember)/i
}

var parseMonthPatterns = {
  narrow: [
    /^J/i,
    /^F/i,
    /^M/i,
    /^A/i,
    /^M/i,
    /^J/i,
    /^J/i,
    /^A/i,
    /^S/i,
    /^O/i,
    /^N/i,
    /^D/i
  ],
  any: [
    /^jan/i,
    /^feb/i,
    /^mar/i,
    /^apr/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^aug/i,
    /^sep/i,
    /^okt/i,
    /^nov/i,
    /^des/i
  ]
}

var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|má|tý|mi|hó|fr|le)/i,
  abbreviated: /^(sun.|mán.|týs.|mik.|hós.|frí.|ley.)\.?/i,
  wide: /^(sunnudagur|mánadagur|týsdagur|mikudagur|hósdagur|fríggjadagur|leygardagur)/i
}

var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^m/i, /^h/i, /^f/i, /^l/i],
  any: [/^su/i, /^má/i, /^tý/i, /^mi/i, /^hó/i, /^fr/i, /^le/i]
}

var matchDayPeriodPatterns = {
  narrow: /^(f|e|síðdegis|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i,
  any: /^(fyrir hádegi|eftir hádegi|[ef]\.?h\.?|síðdegis|morgunn|(á|að|um) (morgni|kvöld|nótt|miðnætti))/i
}

var parseDayPeriodPatterns = {
  any: {
    am: /^f/i,
    pm: /^e/i,
    midnight: /^mi/i,
    noon: /^há/i,
    morning: /morgunn/i,
    afternoon: /síðdegi/i,
    evening: /kvöld/i,
    night: /nótt/i
  }
}

var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function(value) {
      return parseInt(value, 10)
    }
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function(index) {
      return index + 1
    }
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
}

export default match
