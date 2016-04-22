console.log("welcome to eda-manager")
import React, {Component} from 'react'
import {render} from 'react-dom'
import HotWaterQueue from './components/HotWaterQueue'

render(
  <HotWaterQueue />
  , document.querySelector('main')
  )