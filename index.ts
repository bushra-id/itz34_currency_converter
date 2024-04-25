#! /usr/bin/env node
import inquirer from 'inquirer'

const currency: any = {
    USD: 1,   //base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.56,
    PKR: 280,
    JPY: 154.32,
    CAD: 1.37,
    AUD: 1.57,
    SGD: 1.36,
    QAR: 3.64,
    TRY: 32.59,
    SAR: 3.75
};

let user_answer = await inquirer.prompt
(
  [  
    {
      name: 'from',
      message:'enter from currency',
      type: 'list',
      choices: ['USD','EUR','GBP', 'INR', 'PKR', 'JPY', 'CAD', 'AUD', 'SGD', 'QAR', 'TRY', 'SAR']
    },
    {
      name: 'to',
      message:'enter TO currency',
      type: 'list',
      choices: ['USD','EUR','GBP', 'INR', 'PKR', 'JPY', 'CAD', 'AUD', 'SGD', 'QAR', 'TRY', 'SAR']
    },
    {
      name:'amount',
      message:'enter amount',
      type:'number'
    }
  ]
)

let fromAmount = currency[user_answer.from]  //exchange rate
let toAmount = currency[user_answer.to]    // exchange rate
let amount = user_answer.amount
let baseAmount = amount / fromAmount   // USD base currency
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);

