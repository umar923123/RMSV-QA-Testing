# Automated Testing for RMSV

Hello Team,

This repository contains automated test cases developed for the RMSV project under our development environment. Below are the instructions to successfully run these tests.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/umar923123/RMSV-QA-Testing.git


## Test Cases
1. **Synchrony.Payment.spec.js**
2. **Cart.checkout.function.spec.js**
3. **Add,Remove-cartitems.spec.js**

## Instructions for Running Tests
To execute the tests, use the following commands. Note that there is a timeout issue that we are actively addressing, so please run each test individually.

1. **For Synchrony.Payment.spec.js**:
   ```bash
   npx playwright test ./tests/RMSV\ Test\ Cases/Synchrony.Payment.spec.js --project chromium --headed

2. **For Cart.checkout.function.spec.js**:
   ```bash
   npx playwright test ./tests/RMSV\ Test\ Cases/Cart.checkout.function.spec.js --project chromium --headed

3. **For Add,Remove-cartitems.spec.js**:
   ```bash
   npx playwright test ./tests/RMSV\ Test\ Cases/Add,Remove-cartitems.spec.js --project chromium --headed
