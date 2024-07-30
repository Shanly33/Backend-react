import React, { useState, useEffect, useRef } from 'react'
import * as echarts from 'echarts'

const Echarts = props => {
  const { style = {}, chartData, isAxisChart = true } = props
  const chartRef = useRef()
  const echartObj = useRef(null)

  //echarts配置数据
  //有坐标系
  const axisOption = {
    grid: {
      right: 20
    },
    //图例文字颜色
    textStyle: {
      color: '#333'
    },
    //提示框
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category', //类目轴
      data: [],
      axisLine: {
        lineStyle: {
          color: '#17b3a3'
        }
      },
      axisLabel: {
        interval: 0,
        color: '#333'
      }
    },
    yAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#17b3a3'
          }
        }
      }
    ],
    color: ['#2ec7c9', '#b6a2de', '#ffb980', '#5ab1ef', '#8d98b3', '#d87a80'],
    series: []
  }
  //没有坐标系
  const normalOption = {
    tooltip: {
      trigger: 'item'
    },
    color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452'],
    series: []
  }

  useEffect(() => {
    let options
    //echarts初始化
    echartObj.current = echarts.init(chartRef.current)
    //设置option
    if (isAxisChart) {
      //有坐标系
      axisOption.xAxis.data = chartData?.xData
      axisOption.series = chartData?.series
      options = axisOption
    } else {
      //没有坐标系
      normalOption.series = chartData?.series
      options = normalOption
    }
    echartObj.current.setOption(options)
  }, [chartData])
  return <div style={style} ref={chartRef}></div>
}
export default Echarts
