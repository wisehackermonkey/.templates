# __templateName__
----
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


<!-- <img src="assets/NNNNNNNNNNNNN" width="400"> -->


<h2 align="center">____________________</h2>

<h4 align="center">________________________</h4>










# Quick start
### 
##### 
```bash
yarn
yarn start
``` 











# Summary
### -  *[Quick start](#Quick-start)*
### -  *[Installation](#Installation)*
### -  *[For developers](#For-developers)*
### -  *[Contributors](#Contributors)*
### -  *[Links](#Links)*
### -  *[License](#License)*













 
# Installation
### 
```bash
cd ~
git clone https://github.com/wisehackermonkey/__templateName__.git
cd __templateName__
```










 -----------------
# Screenshots
- 













-----------------
# For developers
### Setup React, Babel, and Webpack 
```bash

# Install React, Material UI library
yarn add react react-dom @emotion/react @emotion/styled @fontsource/roboto @mui/icons-material @mui/material @mui/material @emotion/react @emotion/styled @mui/icons-material

# Install webpack dependencies
yarn add -D webpack @babel/core @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-react file-loader babel-loader css-loader jest start-server-and-test style-loader  webpack-cli webpack-dev-server  babel-preset-env html-webpack-plugin  uglifyjs-webpack-plugin
 
```
### Add build script to `package.json
```json
{
    ... 
    "scripts": {
        "start": "webpack serve --open --config webpack.config.js --hot --progress --port 3000 ",
        "build": "webpack build --mode production --config webpack.config.js",
    }
    ...
```
### Start Project
```bash
yarn start
```













 
---
# Links
### 
### 
### 
### 
### 












 -----------------
# Contributors

[![](https://contrib.rocks/image?repo=wisehackermonkey/__templateName__)](https://github.com/wisehackermonkey/__templateName__/graphs/contributors)

##### Made with [contributors-img](https://contrib.rocks).

-----------------
# License
#### MIT © wisehackermonkey
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
```bash
by oran collins
github.com/wisehackermonkey
oranbusiness@gmail.com
__DATE___
```
<!-- 

# Docker
### Build
```bash
cd ~
git clone https://github.com/wisehackermonkey/__templateName__.git
cd __templateName__
docker build -t wisehackermonkey/__templateName__:latest .  
```
### Run
```bash
docker run -it --rm --name wisehackermonkey/__templateName__:latest  
```
### Docker-compose
```bash
docker-compose build
docker-compose up 
```
# Publish Docker Image
```bash
docker build -t wisehackermonkey/__templateName__:latest .
docker login
docker push wisehackermonkey/__templateName__:latest
```
# Install React
```bash

```
 -->