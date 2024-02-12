
# Currency Exchange README
![Alt text](ibrahim-boran-_aUwE2DnIPg-unsplash.jpg)

## Overview:
This Currency Exchange application allows users to convert between different currencies based on current exchange rates. It provides an easy-to-use interface for users to input the amount in one currency and select the target currency for conversion. 
## Features

- Currency Conversion: Users can convert an amount from one currency to another.
- User-friendly Interface: The interface is intuitive and easy to use, allowing users to quickly perform currency conversions.
- Multiple Currencies Supported: Supports a wide range of currencies for conversion, making it versatile for users worldwide.
- Input Conversion Details: Enter the amount you want to convert and select the source and target currencies.


## Used By

This project is used by the following companies:

- Run the Application: Start the Currency Exchange application.
- Input Conversion Details: Enter the amount you want to convert and select the source and target currencies.
- View Result: The converted amount will be displayed based on the current exchange rate.
- Repeat: Perform as many conversions as needed.

## API Reference

#### Get all items

```https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json
  currency-api@1/latest/currencies.json
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Unlicense


This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>
## Contributing

Contributions to the Currency Exchange application are welcome. Feel free to fork the repository, make improvements, and submit pull requests.




## Acknowledgements

 - [Awesome Readme](https://github.com/fawazahmed0/currency-api/blob/1/README.md)
## Disclaimer

Please note that currency exchange rates may fluctuate, and the application provides estimates based on real-time data. Users are encouraged to verify the converted amounts with other sources for critical transactions.