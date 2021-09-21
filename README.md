# Introduction

Simple, responsive, slider for cards using vanilla js.

## Usage

1. Include code below where the gallery should be.
```html
<div id="container">
  <div class="card card_1"></div>
  <div class="card card_2"></div>
  <div class="card card_3"></div>
  <div class="card card_4"></div>
  <div class="card card_5"></div>
  <div class="card card_6"></div>
</div>
```
2. Change css file for your needs.
3. In js file, there is a config object where you can set your different values such as:
  ``` activeCardIndex``` - it's index of initially active card(expected value: number).
  ``` transition``` - it's transition that will be assigned to each card(expected value: string). Example: ``` "flex 500ms ease-in-out"```.
  
## License
[MIT](https://choosealicense.com/licenses/mit/)
