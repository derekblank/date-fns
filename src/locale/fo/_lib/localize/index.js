import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'

var eraValues = {
  narrow: ['fKr.', 'eKr.'],
  abbreviated: ['f.Kr.', 'e.Kr.'],
  wide: ['fyri Krist', 'eftir Krist']
}

var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['1 ársfj.', '2 ársfj.', '3 ársfj.', '4 ársfj.'],
  wide: [
    '1. ársfjórðingur',
    '2. ársfjórðingur',
    '3. ársfjórðingur',
    '4. ársfjórðingur'
  ]
}

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: [
    'jan',
    'feb',
    'mar',
    'apr',
    'mai',
    'jun',
    'jul',
    'aug',
    'sep.',
    'okt.',
    'nov.',
    'des.'
  ],
  wide: [
    'januar',
    'februar',
    'mars',
    'apríl',
    'mai',
    'juni',
    'juli',
    'august',
    'september',
    'oktober',
    'november',
    'desember'
  ]
}

var dayValues = {
  narrow: ['S', 'M', 'T', 'M', 'H', 'F', 'L'],
  short: ['Su', 'Má', 'Tý', 'Mi', 'Hó', 'Fr', 'Le'],
  abbreviated: ['sun.', 'mán.', 'týs.', 'mik.', 'hós.', 'frí.', 'ley'],
  wide: [
    'sunnudagur',
    'mánadagur',
    'týsdagur',
    'mikudagur',
    'hósdagur',
    'fríggjadagur',
    'leygardagur'
  ]
}

var dayPeriodValues = {
  narrow: {
    am: 'f',
    pm: 'e',
    midnight: 'midnátt',
    noon: 'miðdegi',
    morning: 'morgun',
    afternoon: 'seinnapartur',
    evening: 'kvøld',
    night: 'nátt'
  },
  abbreviated: {
    am: 'f.m.',
    pm: 'e.m.',
    midnight: 'midnátt',
    noon: 'miðdegi',
    morning: 'morgun',
    afternoon: 'seinnapartur',
    evening: 'kvøld',
    night: 'nátt'
  },
  wide: {
    am: 'fyri miðdegi',
    pm: 'eftir miðdegi',
    midnight: 'midnátt',
    noon: 'miðdegi',
    morning: 'morgun',
    afternoon: 'seinnapartur',
    evening: 'kvøld',
    night: 'nátt'
  }
}

var formattingDayPeriodValues = {
  narrow: {
    am: 'f',
    pm: 'e',
    midnight: 'á midnátt',
    noon: 'á hádegi',
    morning: 'að morgun',
    afternoon: 'seinnapartur',
    evening: 'um kvøld',
    night: 'um nátt'
  },
  abbreviated: {
    am: 'f.m.',
    pm: 'e.m.',
    midnight: 'á midnátt',
    noon: 'á hádegi',
    morning: 'í morgun',
    afternoon: 'seinnapartur',
    evening: 'í kvøld',
    night: 'um nátt'
  },
  wide: {
    am: 'fyri miðdegi',
    pm: 'eftir miðdegi',
    midnight: 'á midnátt',
    noon: 'á hádegi',
    morning: 'að morgun',
    afternoon: 'seinnapartur',
    evening: 'um kvøld',
    night: 'um nátt'
  }
}

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber)

  return number + '.'
}

var localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide'
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function(quarter) {
      return Number(quarter) - 1
    }
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide'
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide'
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
}

export default localize
