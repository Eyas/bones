# bonesday.today

[![Netlify Status](https://api.netlify.com/api/v1/badges/ff325ff0-a859-44d5-ba75-2d0fc07b86d8/deploy-status)](https://app.netlify.com/sites/bones-day/deploys)

[bonesday.today](https://bonesday.today/) is an [Astro](https://astro.build/) site that tells you if it's a Bones Day today.

## Contributing

If I'm missing a forecast, you can simply add a new entry to `./src/data/bones.ts`.

A forecast is a plain JS object that looks like this:

| Field                      | Type         | Presence                                                | Notes                                     |
| -------------------------- | ------------ | ------------------------------------------------------- | ----------------------------------------- |
| date                       | CivilDate    | required                                                | constructed like `new CivilDate(y, m, d)` |
| cite                       | string       | optional, but strongly recommended                      | TikTok URL showing Noodle on that day.    |
| forecast                   | BonesDayType | required                                                | `BONES`, `NO_BONES`, or `INDETERMINATE`   |
| closestDeterminateForecast | BonesDayType | **Only present** when the `forecast` is `INDETERMINATE` | Can be `BONES` or `NO_BONES` only.        |
| message                    | string       | optional                                                |                                           |
