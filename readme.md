# rssjson [![Build Status](https://travis-ci.org/bukinoshita/rssjson.svg?branch=master)](https://travis-ci.org/bukinoshita/rssjson)

> RSS promise generator for Node


## Install

```bash
$ yarn add rssjson
```


## Usage

```js
const rssjson = require('rssjson')

await rssjson('https://hipsters.tech/feed/podcast/')

/*
[{
  title: 'Startups, investimentos e corretoras – Hipsters #70',
  description: 'Algumas startups estão tentando resolver a vida financeira das pessoas! Vamos entender o que elas estão fazendo e como nesse episódio.',
  link: 'https://hipsters.tech/startups-investimentos-e-corretoras-hipsters-70/',
  url: 'https://hipsters.tech/startups-investimentos-e-corretoras-hipsters-70/',
  created: 1510624922000,
  enclosures: [{
    url: 'https://media.blubrry.com/hipsterstech/content.blubrry.com/hipsterstech/hipsters_070_startups_corretoras.mp3',
    length: '26568673',
    type: 'audio/mpeg'
  }]
}, ...]
*/
```


## API

### rssjson(url)

Returns a `promise`

Type: `string`<br/>
Required

RSS url


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
