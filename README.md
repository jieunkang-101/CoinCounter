# Coin Counter

#### Functional Programming with JavaScript, 13 April 2020
 
#### By **_Jieun Kang_**

## Description
A coin counter application that takes X amount of money (such as $4.99) and determines the exact amount of change needed in quarters, dimes, nickels and pennies. 

## Setup/Installation Requirements

1. Open Terminal and go to the Desktop directory `("cd desktop")`.
2. Clone this repository to your local machine `("git clone https://github.com/jieunkang-101/coin-counter")`.
3. Once the directory is clonded to your local machine, go to the root directory of this project `("cd coin-counter")`.
4. Type  `("npm install")` to add the correct Node modules and download necessary dependencies to the project.
5. Type `("npm run build")` to create _dist_ folder with `bundle.js` file using webpack.
6. Open cloned directory in Visual Studio Code or preferred text editor `("code .")`.

## Behavior Driven Development Specifications

| Behavior(Spec)  | Input | Output  |
| :---------------- | :-----: | :-----: |
| Application determines the amount to convert user's input money into a quarter | $ 7.44 | quarters: 29 |
| Application determines the amount to convert user's input money into a dime | $ 7.44 | dimes: 1 |
| Application determines the amount to convert user's input money into a nickel | $ 7.44 | nickels: 1 |
| Application determines the amount to convert user's input money into a penny | $ 7.44 | pennies: 4 |

## Technologies Used

* Javascript
* Node.js
* webpack
* Jest

### License

*This webpage is licensed under the [MIT](https://en.wikipedia.org/wiki/MIT_License) license*

Copyright (c) 2020 **_Jieun Kang_**