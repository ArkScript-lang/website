---
title: "Datetime"
slug: "datetime"
description: ""
summary: ""
date: 2026-07-01T02:06:31+02:00
lastmod: 2026-07-01T02:06:31+02:00
draft: false
weight: 410
toc: true
seo:
  title: "" # custom title (optional)
  description: "" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

## timezoneOffsets

---
`(let timezoneOffsets <value>)`
Dictionary of time zone offsets to UTC, in minutes

**Note**: List obtained from https://github.com/vvo/tzdb/blob/ac6f4cbc6063b9a823a8ee1e4b5dffb6ca0a6c81/raw-time-zones.json,
by keeping only `name` -> `rawOffsetInMinutes`.

**Author**: [@SuperFola](https://github.com/SuperFola)



## utcOffsetMinutes

---
`(let utcOffsetMinutes (fun (_tz) (...)))`
Get the offset to UTC of a time zone by name, in minutes

**Note**: Abort if the timezone is not known

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_tz`: String, time zone name



## makeUTCTimestamp

---
`(let makeUTCTimestamp (fun ((mut _year) (mut _month) _day _hour _minute _second _millisecond _tz _dst?) (...)))`
Construct a UTC timestamp

**Note**: This doesn't handle the timezone changes from 1970 and before,
it only uses modern ones which is good enough in most cases.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_year`: Number
- `_month`: Number, in [1, 12] range
- `_day`: Number, in [1, 31] range
- `_hour`: Number, in [0, 23] range
- `_minute`: Number, in [0, 59] range
- `_second`: Number, in [0, 60] range
- `_millisecond`: Number, in [0, 999] range
- `_tz`: String representing a time zone ; can be nil to indicate UTC
- `_dst?`: Bool, true if the given date is in day light saving, false otherwise


#### Example
{{< highlight_arkscript >}}
(print (datetime:makeUTCTimestamp 2026 5 27 14 28 5 300 "Europe/Paris" true))
# 1779884885.3
{{< /highlight_arkscript >}}

## year0

---
`(let year0 <value>)`
Precomputed timestamp of 1/1/0000 at 00H 00M 00.000s


**Author**: [@SuperFola](https://github.com/SuperFola)



## year1970

---
`(let year1970 <value>)`
Precomputed timestamp of 1/1/1970 at 00H 00M 00.000s


**Author**: [@SuperFola](https://github.com/SuperFola)



## year2000

---
`(let year2000 <value>)`
Precomputed timestamp of 1/1/2000 at 00H 00M 00.000s


**Author**: [@SuperFola](https://github.com/SuperFola)



## toUTCTimestamp

---
`(let toUTCTimestamp (fun (_date) (...)))`
Convert a date to a UTC timestamp

**Note**: This doesn't handle the timezone changes from 1970 and before,
it only uses modern ones which is good enough in most cases.

Keys needed in the Dict:
- `millisecond` - milliseconds after the second – [0, 999]
- `second` - seconds after the minute – [0, 60]
- `minute` - minutes after the hour – [0, 59]
- `hour` - hours since midnight – [0, 23]
- `day` - day of the month – [1, 31]
- `month` - months since January – [1, 12]
- `year` - years since 0
- `week_day` - days since Sunday – [0, 6]
- `year_day` - days since January 1 – [0, 365]
- `is_dst` - Daylight Saving Time flag. The value is true if DST is in effect,  false if not or if no information is available.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_date`: Dict, as returned by `datetime:asUTCDate`


#### Example
{{< highlight_arkscript >}}
(let t (time))
(print t)  # 1779908523.389969
(print (datetime:toUTCTimestamp (datetime:asUTCDate t))  # 1779908523.389
{{< /highlight_arkscript >}}

## asUTCDate

---
`(let asUTCDate (fun (_time) (...)))`
Convert a timestamp to a UTC date

**Note**: Returns a Dict with the following keys:
- `millisecond` - milliseconds after the second – [0, 999]
- `second` - seconds after the minute – [0, 60]
- `minute` - minutes after the hour – [0, 59]
- `hour` - hours since midnight – [0, 23]
- `day` - day of the month – [1, 31]
- `month` - months since January – [1, 12]
- `year` - years since 0
- `week_day` - days since Sunday – [0, 6]
- `year_day` - days since January 1 – [0, 365]
- `is_dst` - Daylight Saving Time flag. The value is true if DST is in effect,  false if not or if no information is available.

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: timestamp


#### Example
{{< highlight_arkscript >}}
(print (datetime:asUTCDate (time)))
# {millisecond: 913, second: 24, minute: 15, hour: 17, day: 26, month: 5, year: 2026, week_day: 2, year_day: 145, is_dst: false}
{{< /highlight_arkscript >}}

## plusSeconds

---
`(let plusSeconds (fun (_time _quantity) (...)))`
Add a number of seconds to a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_quantity`: Number, quantity of the unit to add



## minusSeconds

---
`(let minusSeconds (fun (_time _quantity) (...)))`
Subtract a number of seconds to a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_quantity`: Number, quantity of the unit to remove



## plusMinutes

---
`(let plusMinutes (fun (_time _quantity) (...)))`
Add a number of minutes to a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_quantity`: Number, quantity of the unit to add



## minusMinutes

---
`(let minusMinutes (fun (_time _quantity) (...)))`
Subtract a number of minutes to a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_quantity`: Number, quantity of the unit to remove



## plusHours

---
`(let plusHours (fun (_time _quantity) (...)))`
Add a number of hours to a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_quantity`: Number, quantity of the unit to add



## minusHours

---
`(let minusHours (fun (_time _quantity) (...)))`
Subtract a number of hours to a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_quantity`: Number, quantity of the unit to remove



## plusDays

---
`(let plusDays (fun (_time _quantity) (...)))`
Add a number of days to a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_quantity`: Number, quantity of the unit to add



## minusDays

---
`(let minusDays (fun (_time _quantity) (...)))`
Subtract a number of days to a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_quantity`: Number, quantity of the unit to remove



## plusWeeks

---
`(let plusWeeks (fun (_time _quantity) (...)))`
Add a number of weeks to a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_quantity`: Number, quantity of the unit to add



## minusWeeks

---
`(let minusWeeks (fun (_time _quantity) (...)))`
Subtract a number of weeks to a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_quantity`: Number, quantity of the unit to remove



## plusMonths

---
`(let plusMonths (fun (_time _quantity) (...)))`
Add a number of seconds to a timestamp

**Note**: A month is considered to be a fixed 30 days

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_quantity`: Number, quantity of the unit to add



## minusMonths

---
`(let minusMonths (fun (_time _quantity) (...)))`
Subtract a number of months to a timestamp

**Note**: A month is considered to be a fixed 30 days

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_quantity`: Number, quantity of the unit to remove



## plusYears

---
`(let plusYears (fun (_time _quantity) (...)))`
Add a number of seconds to a timestamp

**Note**: A year is considered to be a fixed 365 days

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_quantity`: Number, quantity of the unit to add



## minusYears

---
`(let minusYears (fun (_time _quantity) (...)))`
Subtract a number of years to a timestamp

**Note**: A year is considered to be a fixed 365 days

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_quantity`: Number, quantity of the unit to remove



## atStartOfDay

---
`(let atStartOfDay (fun (_time) (...)))`
Put a given timestamp at the start of the day, at 00H 00M 00.000s


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## atEndOfDay

---
`(let atEndOfDay (fun (_time) (...)))`
Put a given timestamp at the end of the day, at 23H 59M 59.999s


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## today

---
`(let today (fun () (...)))`
Compute today's date, at 00H 00M 00s

**Note**: Returns a timestamp

**Author**: [@SuperFola](https://github.com/SuperFola)



## yesterday

---
`(let yesterday (fun () (...)))`
Compute yesterday's date, at 00H 00M 00s

**Note**: Returns a timestamp

**Author**: [@SuperFola](https://github.com/SuperFola)



## tomorrow

---
`(let tomorrow (fun () (...)))`
Compute tomorrow's date, at 00H 00M 00s

**Note**: Returns a timestamp

**Author**: [@SuperFola](https://github.com/SuperFola)



## nextDay

---
`(let nextDay (fun (_time) (...)))`
Return the timestamp of the next day of a given timestamp, keeping the hours, minutes, seconds and milliseconds


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## previousDay

---
`(let previousDay (fun (_time) (...)))`
Return the timestamp of the previous day of a given timestamp, keeping the hours, minutes, seconds and milliseconds


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## delta

---
`(let delta (fun (_t1 _t2) (...)))`
Compute the delta between two timestamps

**Note**: Output Dict has the following keys:
- milliseconds
- seconds
- minutes
- hours
- days

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_t1`: Number, first timestamp
- `_t2`: Number, second timestamp



## asDelta

---
`(let asDelta (fun (_time) (...)))`
Create a delta from a number of seconds, as a Dict with the same shape as `datetime:asUTCDate`


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, number of seconds



## asSeconds

---
`(let asSeconds (fun (_date) (...)))`
Convert a delta or a date to a number of seconds


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_date`: Dict, with the same shape as `datetime:asUTCDate`



## plusDelta

---
`(let plusDelta (fun (_time _delta) (...)))`
Add a delta to a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_delta`: Dict, with the same shape as `datetime:asUTCDate`



## minusDelta

---
`(let minusDelta (fun (_time _delta) (...)))`
Subtract a delta to a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_time`: Number, timestamp
- `_delta`: Dict, with the same shape as `datetime:asUTCDate`



## year

---
`(let year (fun (_time) (...)))`
Return the year component of a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## month

---
`(let month (fun (_time) (...)))`
Return the month (1-12) component of a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## day

---
`(let day (fun (_time) (...)))`
Return the day (1-31) of the month component of a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## hour

---
`(let hour (fun (_time) (...)))`
Return the hour (0-23) component of a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## minute

---
`(let minute (fun (_time) (...)))`
Return the minute (0-59) component of a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## second

---
`(let second (fun (_time) (...)))`
Return the second (0-59) component of a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## millisecond

---
`(let millisecond (fun (_time) (...)))`
Return the millisecond (0-999) component of a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## dayOfWeek

---
`(let dayOfWeek (fun (_time) (...)))`
Return the day of the week component of a timestamp (starts at 0 for monday, 6 for sunday)


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## dayOfYear

---
`(let dayOfYear (fun (_time) (...)))`
Return the day of the year (0-365) component of a timestamp


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## leapYear?

---
`(let leapYear? (fun (_year) (...)))`
Check if a year is a leap year


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_year`: Number, year



## monthLength

---
`(let monthLength (fun (_time) (...)))`
Return the number of days in the month a timestamp is at


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## yearLength

---
`(let yearLength (fun (_time) (...)))`
Return the number of days in the year a timestamp is at


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## utcOffsetRepr

---
`(let utcOffsetRepr (fun (_tz) (...)))`
Convert a timezone to its representation: +05:45

**Note**: Abort if the timezone is not known

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_tz`: String, timezone



## asISO8601

---
`(let asISO8601 (fun (_time) (...)))`
Convert a timestamp to its ISO8601 representation: 2007-04-05T12:34:56.789Z


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_time`: Number, timestamp



## parse

---
`(let parse (fun (_str) (...)))`
Try to parse a date as `%Y-%m-%dT%H:%M:%S` and return it as a timestamp, or `nil` if it fails


**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameter
- `_str`: String, date following `%Y-%m-%dT%H:%M:%S`



## parseAs

---
`(let parseAs (fun (_str _format) (...)))`
Try to parse a date as a given format and return it as a timestamp, or `nil` if it fails

**Note**: Format spec for `_format`:
- `%` 	matches a literal `%`. The full conversion specification must be `%%`
- `t` 	matches any whitespace
- `n` 	matches any whitespace

**Year**
- `Y` 	parses full year as a 4 digit decimal number, leading zeroes permitted but not required
- `EY` 	parses year in the alternative representation, e.g. `平成23年` (year Heisei 23) which writes 2011 to year in ja_JP locale
- `y` 	parses last 2 digits of year as a decimal number. Range [69,99] results in values 1969 to 1999, range [00,68] results in 2000-2068
- `Oy` 	parses last 2 digits of year using the alternative numeric system, e.g. `十一` is parsed as 11 in ja_JP locale
- `Ey` 	parses year as offset from locale's alternative calendar period `%EC`
- `C` 	parses the first 2 digits of year as a decimal number (range [00,99])
- `EC` 	parses the name of the base year (period) in the locale's alternative representation, e.g. `平成` (Heisei era) in ja_JP

**Month**
- `b` 	parses the month name, either full or abbreviated, e.g. `Oct`
- `h` 	synonym of `b`
- `B` 	synonym of `b`
- `m` 	parses the month as a decimal number (range [01,12]), leading zeroes permitted but not required
- `Om` 	parses the month using the alternative numeric system, e.g. `十二` parses as 12 in ja_JP locale

**Week**
- `U` 	parses the week of the year as a decimal number (Sunday is the first day of the week) (range [00,53]), leading zeroes permitted but not required
- `OU` 	parses the week of the year, as by `%U`, using the alternative numeric system, e.g. `五十二` parses as 52 in ja_JP locale
- `W` 	parses the week of the year as a decimal number (Monday is the first day of the week) (range [00,53]), leading zeroes permitted but not required
- `OW` 	parses the week of the year, as by `%W`, using the alternative numeric system, e.g. `五十二` parses as 52 in ja_JP locale

**Day of the year/month**
- `j` 	parses day of the year as a decimal number (range [001,366]), leading zeroes permitted but not required
- `d` 	parses the day of the month as a decimal number (range [01,31]), leading zeroes permitted but not required
- `Od` 	parses the day of the month using the alternative numeric system, e.g. `二十七` parses as 27 in ja_JP locale, leading zeroes permitted but not required
- `e` 	synonym of `d`
- `Oe` 	synonym of `Od`

**Day of the week**
- `a` 	parses the name of the day of the week, either full or abbreviated, e.g. `Fri`
- `A` 	synonym of `a`
- `w` 	parses weekday as a decimal number, where Sunday is 0 (range [0-6])
- `Ow` 	parses weekday as a decimal number, where Sunday is 0, using the alternative numeric system, e.g. `二` parses as 2 in ja_JP locale

**Hour, minute, second**
- `H` 	parses the hour as a decimal number, 24 hour clock (range [00-23]), leading zeroes permitted but not required
- `OH` 	parses hour from 24-hour clock using the alternative numeric system, e.g. `十八` parses as 18 in ja_JP locale
- `I` 	parses hour as a decimal number, 12 hour clock (range [01,12]), leading zeroes permitted but not required
- `OI` 	parses hour from 12-hour clock using the alternative numeric system, e.g. `六` reads as 06 in ja_JP locale
- `M` 	parses minute as a decimal number (range [00,59]), leading zeroes permitted but not required
- `OM` 	parses minute using the alternative numeric system, e.g. `二十五` parses as 25 in ja_JP locale
- `S` 	parses second as a decimal number (range [00,60]), leading zeroes permitted but not required
- `OS` 	parses second using the alternative numeric system, e.g. `二十四` parses as 24 in ja_JP locale

**Other**
- `c` 	parses the locale's standard date and time string format, e.g. `Sun Oct 17 04:41:13 2010` (locale dependent)
- `Ec` 	parses the locale's alternative date and time string format, e.g. expecting `平成23年` (year Heisei 23) instead of `2011年` (year 2011) in ja_JP locale
- `x` 	parses the locale's standard date representation
- `Ex` 	parses the locale's alternative date representation, e.g. expecting `平成23年` (year Heisei 23) instead of `2011年` (year 2011) in ja_JP locale
- `X` 	parses the locale's standard time representation
- `EX` 	parses the locale's alternative time representation
- `D` 	equivalent to `"%m / %d / %y "`
- `r` 	parses locale's standard 12-hour clock time (in POSIX, `"%I : %M : %S %p"`)
- `R` 	equivalent to `"%H : %M"`
- `T` 	equivalent to `"%H : %M : %S"`
- `p` 	parses the locale's equivalent of `a.m.` or `p.m.`

**Author**: [@SuperFola](https://github.com/SuperFola)

#### Parameters
- `_str`: String, date
- `_format`: String, follows [std::get_time](https://en.cppreference.com/cpp/io/manip/get_time) format





{{< highlight_scripts >}}
