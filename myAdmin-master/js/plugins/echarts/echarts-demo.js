//折线图
$(function(){
	var myChart = echarts.init(document.getElementById('echarts-line-chart'));
	option = {
	    title: {
	        text: '未来一周气温变化'
	    },
	    tooltip: {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['最高气温','最低气温']
	    },
	    toolbox: {
	        show: true,
	        feature: {
	            dataZoom: {
	                yAxisIndex: 'none'
	            },
	            dataView: {readOnly: false},
	            magicType: {type: ['line', 'bar']},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    grid: {
	        top: '30%'
	    },
	    xAxis:  {
	        type: 'category',
	        boundaryGap: false,
	        data: ['周一','周二','周三','周四','周五','周六','周日']
	    },
	    yAxis: {
	        type: 'value',
	        axisLabel: {
	            formatter: '{value} °C'
	        }
	    },
	    series: [
	        {
	            name:'最高气温',
	            type:'line',
	            data:[11, 11, 15, 13, 12, 13, 10],
	            markPoint: {
	                data: [
	                    {type: 'max', name: '最大值'},
	                    {type: 'min', name: '最小值'}
	                ]
	            },
	            markLine: {
	                data: [
	                    {type: 'average', name: '平均值'}
	                ]
	            }
	        },
	        {
	            name:'最低气温',
	            type:'line',
	            data:[1, -2, 2, 5, 3, 2, 0],
	            markPoint: {
	                data: [
	                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
	                ]
	            },
	            markLine: {
	                data: [
	                    {type: 'average', name: '平均值'},
	                    [{
	                        symbol: 'none',
	                        x: '90%',
	                        yAxis: 'max'
	                    }, {
	                        symbol: 'circle',
	                        label: {
	                            normal: {
	                                position: 'start',
	                                formatter: '最大值'
	                            }
	                        },
	                        type: 'max',
	                        name: '最高点'
	                    }]
	                ]
	            }
	        }
	    ]
	};
	myChart.setOption(option);
})
//柱状图
$(function(){
	var myChart = echarts.init(document.getElementById('echarts-bar-chart'));
	option = {
	    tooltip : {
	        trigger: 'axis',
	        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
	            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
	        }
	    },
	    legend: {
	        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            data : ['周一','周二','周三','周四','周五','周六','周日']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'直接访问',
	            type:'bar',
	            data:[320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'邮件营销',
	            type:'bar',
	            stack: '广告',
	            data:[120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	            name:'联盟广告',
	            type:'bar',
	            stack: '广告',
	            data:[220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	            name:'视频广告',
	            type:'bar',
	            stack: '广告',
	            data:[150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	            name:'搜索引擎',
	            type:'bar',
	            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
	            markLine : {
	                lineStyle: {
	                    normal: {
	                        type: 'dashed'
	                    }
	                },
	                data : [
	                    [{type : 'min'}, {type : 'max'}]
	                ]
	            }
	        },
	        {
	            name:'百度',
	            type:'bar',
	            barWidth : 5,
	            stack: '搜索引擎',
	            data:[620, 732, 701, 734, 1090, 1130, 1120]
	        },
	        {
	            name:'谷歌',
	            type:'bar',
	            stack: '搜索引擎',
	            data:[120, 132, 101, 134, 290, 230, 220]
	        },
	        {
	            name:'必应',
	            type:'bar',
	            stack: '搜索引擎',
	            data:[60, 72, 71, 74, 190, 130, 110]
	        },
	        {
	            name:'其他',
	            type:'bar',
	            stack: '搜索引擎',
	            data:[62, 82, 91, 84, 109, 110, 120]
	        }
	    ]
	};
	myChart.setOption(option);
})
//散点图
$(function(){
	var myChart = echarts.init(document.getElementById('echarts-scatter-chart'));
	var data = [
	    [[28604,77,17096869,'Australia',1990],[31163,77.4,27662440,'Canada',1990],[1516,68,1154605773,'China',1990],[13670,74.7,10582082,'Cuba',1990],[28599,75,4986705,'Finland',1990],[29476,77.1,56943299,'France',1990],[31476,75.4,78958237,'Germany',1990],[28666,78.1,254830,'Iceland',1990],[1777,57.7,870601776,'India',1990],[29550,79.1,122249285,'Japan',1990],[2076,67.9,20194354,'North Korea',1990],[12087,72,42972254,'South Korea',1990],[24021,75.4,3397534,'New Zealand',1990],[43296,76.8,4240375,'Norway',1990],[10088,70.8,38195258,'Poland',1990],[19349,69.6,147568552,'Russia',1990],[10670,67.3,53994605,'Turkey',1990],[26424,75.7,57110117,'United Kingdom',1990],[37062,75.4,252847810,'United States',1990]],
	    [[44056,81.8,23968973,'Australia',2015],[43294,81.7,35939927,'Canada',2015],[13334,76.9,1376048943,'China',2015],[21291,78.5,11389562,'Cuba',2015],[38923,80.8,5503457,'Finland',2015],[37599,81.9,64395345,'France',2015],[44053,81.1,80688545,'Germany',2015],[42182,82.8,329425,'Iceland',2015],[5903,66.8,1311050527,'India',2015],[36162,83.5,126573481,'Japan',2015],[1390,71.4,25155317,'North Korea',2015],[34644,80.7,50293439,'South Korea',2015],[34186,80.6,4528526,'New Zealand',2015],[64304,81.6,5210967,'Norway',2015],[24787,77.3,38611794,'Poland',2015],[23038,73.13,143456918,'Russia',2015],[19360,76.5,78665830,'Turkey',2015],[38225,81.4,64715810,'United Kingdom',2015],[53354,79.1,321773631,'United States',2015]]
	];
	
	option = {
	    backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
	        offset: 0,
	        color: '#f7f8fa'
	    }, {
	        offset: 1,
	        color: '#cdd0d5'
	    }]),
	    title: {
	        text: '1990 与 2015 年各国家人均寿命与 GDP'
	    },
	    legend: {
	        right: 10,
	        data: ['1990', '2015']
	    },
	    xAxis: {
	        splitLine: {
	            lineStyle: {
	                type: 'dashed'
	            }
	        }
	    },
	    yAxis: {
	        splitLine: {
	            lineStyle: {
	                type: 'dashed'
	            }
	        },
	        scale: true
	    },
	    series: [{
	        name: '1990',
	        data: data[0],
	        type: 'scatter',
	        symbolSize: function (data) {
	            return Math.sqrt(data[2]) / 5e2;
	        },
	        label: {
	            emphasis: {
	                show: true,
	                formatter: function (param) {
	                    return param.data[3];
	                },
	                position: 'top'
	            }
	        },
	        itemStyle: {
	            normal: {
	                shadowBlur: 10,
	                shadowColor: 'rgba(120, 36, 50, 0.5)',
	                shadowOffsetY: 5,
	                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
	                    offset: 0,
	                    color: 'rgb(251, 118, 123)'
	                }, {
	                    offset: 1,
	                    color: 'rgb(204, 46, 72)'
	                }])
	            }
	        }
	    }, {
	        name: '2015',
	        data: data[1],
	        type: 'scatter',
	        symbolSize: function (data) {
	            return Math.sqrt(data[2]) / 5e2;
	        },
	        label: {
	            emphasis: {
	                show: true,
	                formatter: function (param) {
	                    return param.data[3];
	                },
	                position: 'top'
	            }
	        },
	        itemStyle: {
	            normal: {
	                shadowBlur: 10,
	                shadowColor: 'rgba(25, 100, 150, 0.5)',
	                shadowOffsetY: 5,
	                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
	                    offset: 0,
	                    color: 'rgb(129, 227, 238)'
	                }, {
	                    offset: 1,
	                    color: 'rgb(25, 183, 207)'
	                }])
	            }
	        }
	    }]
	};
	myChart.setOption(option);
});
//K线图
$(function(){
	var myChart = echarts.init(document.getElementById('echarts-k-chart'));
	
	// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
	var data0 = splitData([
	    ['2013/1/24', 2320.26,2320.26,2287.3,2362.94],
	    ['2013/1/25', 2300,2291.3,2288.26,2308.38],
	    ['2013/1/28', 2295.35,2346.5,2295.35,2346.92],
	    ['2013/1/29', 2347.22,2358.98,2337.35,2363.8],
	    ['2013/1/30', 2360.75,2382.48,2347.89,2383.76],
	    ['2013/1/31', 2383.43,2385.42,2371.23,2391.82],
	    ['2013/2/1', 2377.41,2419.02,2369.57,2421.15],
	    ['2013/2/4', 2425.92,2428.15,2417.58,2440.38],
	    ['2013/2/5', 2411,2433.13,2403.3,2437.42],
	    ['2013/2/6', 2432.68,2434.48,2427.7,2441.73],
	    ['2013/2/7', 2430.69,2418.53,2394.22,2433.89],
	    ['2013/2/8', 2416.62,2432.4,2414.4,2443.03],
	    ['2013/2/18', 2441.91,2421.56,2415.43,2444.8],
	    ['2013/2/19', 2420.26,2382.91,2373.53,2427.07],
	    ['2013/2/20', 2383.49,2397.18,2370.61,2397.94],
	    ['2013/2/21', 2378.82,2325.95,2309.17,2378.82],
	    ['2013/2/22', 2322.94,2314.16,2308.76,2330.88],
	    ['2013/2/25', 2320.62,2325.82,2315.01,2338.78],
	    ['2013/2/26', 2313.74,2293.34,2289.89,2340.71],
	    ['2013/2/27', 2297.77,2313.22,2292.03,2324.63],
	    ['2013/2/28', 2322.32,2365.59,2308.92,2366.16],
	    ['2013/3/1', 2364.54,2359.51,2330.86,2369.65],
	    ['2013/3/4', 2332.08,2273.4,2259.25,2333.54],
	    ['2013/3/5', 2274.81,2326.31,2270.1,2328.14],
	    ['2013/3/6', 2333.61,2347.18,2321.6,2351.44],
	    ['2013/3/7', 2340.44,2324.29,2304.27,2352.02],
	    ['2013/3/8', 2326.42,2318.61,2314.59,2333.67],
	    ['2013/3/11', 2314.68,2310.59,2296.58,2320.96],
	    ['2013/3/12', 2309.16,2286.6,2264.83,2333.29],
	    ['2013/3/13', 2282.17,2263.97,2253.25,2286.33],
	    ['2013/3/14', 2255.77,2270.28,2253.31,2276.22],
	    ['2013/3/15', 2269.31,2278.4,2250,2312.08],
	    ['2013/3/18', 2267.29,2240.02,2239.21,2276.05],
	    ['2013/3/19', 2244.26,2257.43,2232.02,2261.31],
	    ['2013/3/20', 2257.74,2317.37,2257.42,2317.86],
	    ['2013/3/21', 2318.21,2324.24,2311.6,2330.81],
	    ['2013/3/22', 2321.4,2328.28,2314.97,2332],
	    ['2013/3/25', 2334.74,2326.72,2319.91,2344.89],
	    ['2013/3/26', 2318.58,2297.67,2281.12,2319.99],
	    ['2013/3/27', 2299.38,2301.26,2289,2323.48],
	    ['2013/3/28', 2273.55,2236.3,2232.91,2273.55],
	    ['2013/3/29', 2238.49,2236.62,2228.81,2246.87],
	    ['2013/4/1', 2229.46,2234.4,2227.31,2243.95],
	    ['2013/4/2', 2234.9,2227.74,2220.44,2253.42],
	    ['2013/4/3', 2232.69,2225.29,2217.25,2241.34],
	    ['2013/4/8', 2196.24,2211.59,2180.67,2212.59],
	    ['2013/4/9', 2215.47,2225.77,2215.47,2234.73],
	    ['2013/4/10', 2224.93,2226.13,2212.56,2233.04],
	    ['2013/4/11', 2236.98,2219.55,2217.26,2242.48],
	    ['2013/4/12', 2218.09,2206.78,2204.44,2226.26],
	    ['2013/4/15', 2199.91,2181.94,2177.39,2204.99],
	    ['2013/4/16', 2169.63,2194.85,2165.78,2196.43],
	    ['2013/4/17', 2195.03,2193.8,2178.47,2197.51],
	    ['2013/4/18', 2181.82,2197.6,2175.44,2206.03],
	    ['2013/4/19', 2201.12,2244.64,2200.58,2250.11],
	    ['2013/4/22', 2236.4,2242.17,2232.26,2245.12],
	    ['2013/4/23', 2242.62,2184.54,2182.81,2242.62],
	    ['2013/4/24', 2187.35,2218.32,2184.11,2226.12],
	    ['2013/4/25', 2213.19,2199.31,2191.85,2224.63],
	    ['2013/4/26', 2203.89,2177.91,2173.86,2210.58],
	    ['2013/5/2', 2170.78,2174.12,2161.14,2179.65],
	    ['2013/5/3', 2179.05,2205.5,2179.05,2222.81],
	    ['2013/5/6', 2212.5,2231.17,2212.5,2236.07],
	    ['2013/5/7', 2227.86,2235.57,2219.44,2240.26],
	    ['2013/5/8', 2242.39,2246.3,2235.42,2255.21],
	    ['2013/5/9', 2246.96,2232.97,2221.38,2247.86],
	    ['2013/5/10', 2228.82,2246.83,2225.81,2247.67],
	    ['2013/5/13', 2247.68,2241.92,2231.36,2250.85],
	    ['2013/5/14', 2238.9,2217.01,2205.87,2239.93],
	    ['2013/5/15', 2217.09,2224.8,2213.58,2225.19],
	    ['2013/5/16', 2221.34,2251.81,2210.77,2252.87],
	    ['2013/5/17', 2249.81,2282.87,2248.41,2288.09],
	    ['2013/5/20', 2286.33,2299.99,2281.9,2309.39],
	    ['2013/5/21', 2297.11,2305.11,2290.12,2305.3],
	    ['2013/5/22', 2303.75,2302.4,2292.43,2314.18],
	    ['2013/5/23', 2293.81,2275.67,2274.1,2304.95],
	    ['2013/5/24', 2281.45,2288.53,2270.25,2292.59],
	    ['2013/5/27', 2286.66,2293.08,2283.94,2301.7],
	    ['2013/5/28', 2293.4,2321.32,2281.47,2322.1],
	    ['2013/5/29', 2323.54,2324.02,2321.17,2334.33],
	    ['2013/5/30', 2316.25,2317.75,2310.49,2325.72],
	    ['2013/5/31', 2320.74,2300.59,2299.37,2325.53],
	    ['2013/6/3', 2300.21,2299.25,2294.11,2313.43],
	    ['2013/6/4', 2297.1,2272.42,2264.76,2297.1],
	    ['2013/6/5', 2270.71,2270.93,2260.87,2276.86],
	    ['2013/6/6', 2264.43,2242.11,2240.07,2266.69],
	    ['2013/6/7', 2242.26,2210.9,2205.07,2250.63],
	    ['2013/6/13', 2190.1,2148.35,2126.22,2190.1]
	]);
	
	
	function splitData(rawData) {
	    var categoryData = [];
	    var values = []
	    for (var i = 0; i < rawData.length; i++) {
	        categoryData.push(rawData[i].splice(0, 1)[0]);
	        values.push(rawData[i])
	    }
	    return {
	        categoryData: categoryData,
	        values: values
	    };
	}
	
	function calculateMA(dayCount) {
	    var result = [];
	    for (var i = 0, len = data0.values.length; i < len; i++) {
	        if (i < dayCount) {
	            result.push('-');
	            continue;
	        }
	        var sum = 0;
	        for (var j = 0; j < dayCount; j++) {
	            sum += data0.values[i - j][1];
	        }
	        result.push(sum / dayCount);
	    }
	    return result;
	}
	
	option = {
	    title: {
	        text: '上证指数',
	        left: 0
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'line'
	        }
	    },
	    legend: {
	        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
	    },
	    grid: {
	        left: '10%',
	        right: '10%'
	    },
	    xAxis: {
	        type: 'category',
	        data: data0.categoryData,
	        scale: true,
	        boundaryGap : false,
	        axisLine: {onZero: false},
	        splitLine: {show: false},
	        splitNumber: 20,
	        min: 'dataMin',
	        max: 'dataMax'
	    },
	    yAxis: {
	        scale: true,
	        splitArea: {
	            show: true
	        }
	    },
	    dataZoom: [
	        {
	            type: 'inside',
	            start: 50,
	            end: 100
	        },
	        {
	            show: true,
	            type: 'slider',
	            y: '90%',
	            start: 50,
	            end: 100
	        }
	    ],
	    series: [
	        {
	            name: '日K',
	            type: 'candlestick',
	            data: data0.values,
	            markPoint: {
	                label: {
	                    normal: {
	                        formatter: function (param) {
	                            return param != null ? Math.round(param.value) : '';
	                        }
	                    }
	                },
	                data: [
	                    {
	                        name: 'XX标点',
	                        coord: ['2013/5/31', 2300],
	                        value: 2300,
	                        itemStyle: {
	                            normal: {color: 'rgb(41,60,85)'}
	                        }
	                    },
	                    {
	                        name: 'highest value',
	                        type: 'max',
	                        valueDim: 'highest'
	                    },
	                    {
	                        name: 'lowest value',
	                        type: 'min',
	                        valueDim: 'lowest'
	                    },
	                    {
	                        name: 'average value on close',
	                        type: 'average',
	                        valueDim: 'close'
	                    }
	                ],
	                tooltip: {
	                    formatter: function (param) {
	                        return param.name + '<br>' + (param.data.coord || '');
	                    }
	                }
	            },
	            markLine: {
	                symbol: ['none', 'none'],
	                data: [
	                    [
	                        {
	                            name: 'from lowest to highest',
	                            type: 'min',
	                            valueDim: 'lowest',
	                            symbol: 'circle',
	                            symbolSize: 10,
	                            label: {
	                                normal: {show: false},
	                                emphasis: {show: false}
	                            }
	                        },
	                        {
	                            type: 'max',
	                            valueDim: 'highest',
	                            symbol: 'circle',
	                            symbolSize: 10,
	                            label: {
	                                normal: {show: false},
	                                emphasis: {show: false}
	                            }
	                        }
	                    ],
	                    {
	                        name: 'min line on close',
	                        type: 'min',
	                        valueDim: 'close'
	                    },
	                    {
	                        name: 'max line on close',
	                        type: 'max',
	                        valueDim: 'close'
	                    }
	                ]
	            }
	        },
	        {
	            name: 'MA5',
	            type: 'line',
	            data: calculateMA(5),
	            smooth: true,
	            lineStyle: {
	                normal: {opacity: 0.5}
	            }
	        },
	        {
	            name: 'MA10',
	            type: 'line',
	            data: calculateMA(10),
	            smooth: true,
	            lineStyle: {
	                normal: {opacity: 0.5}
	            }
	        },
	        {
	            name: 'MA20',
	            type: 'line',
	            data: calculateMA(20),
	            smooth: true,
	            lineStyle: {
	                normal: {opacity: 0.5}
	            }
	        },
	        {
	            name: 'MA30',
	            type: 'line',
	            data: calculateMA(30),
	            smooth: true,
	            lineStyle: {
	                normal: {opacity: 0.5}
	            }
	        },
	
	    ]
	};
	
	myChart.setOption(option);
});
//饼状图
$(function(){
	var myChart = echarts.init(document.getElementById('echarts-pie-chart'));
	
	option = {
	    title : {
	        text: 'zAdmin用户访问来源',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
	    },
	    series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:335, name:'直接访问'},
	                {value:310, name:'邮件营销'},
	                {value:234, name:'联盟广告'},
	                {value:135, name:'视频广告'},
	                {value:1548, name:'搜索引擎'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
	
	myChart.setOption(option);
});
//雷达图
$(function(){
	var myChart = echarts.init(document.getElementById('echarts-radar-chart'));
	
	option = {
//	    title: {
//	        text: '基础雷达图'
//	    },
	    tooltip: {},
	    legend: {
	        data: ['预算分配', '实际开销'],
	        x:'left'
	    },
	    radar: {
	        // shape: 'circle',
	        indicator: [
	           { name: '销售', max: 6500},
	           { name: '管理', max: 16000},
	           { name: '信息技术', max: 30000},
	           { name: '客服', max: 38000},
	           { name: '研发', max: 52000},
	           { name: '市场', max: 25000}
	        ]
	    },
	    series: [{
	        name: '预算 vs 开销',
	        type: 'radar',
	        // areaStyle: {normal: {}},
	        data : [
	            {
	                value : [4300, 10000, 28000, 35000, 50000, 19000],
	                name : '预算分配'
	            },
	             {
	                value : [5000, 14000, 28000, 31000, 42000, 21000],
	                name : '实际开销'
	            }
	        ]
	    }]
	};
	
	myChart.setOption(option);
});
//仪表盘
$(function(){
	var myChart = echarts.init(document.getElementById('echarts-gauge-chart'));
	
	option = {
	    tooltip : {
	        formatter: "{a} <br/>{c} {b}"
	    },
	    toolbox: {
	        show: true,
	        feature: {
	            restore: {show: true},
	            saveAsImage: {show: true}
	        },
	        x:'left'
	    },
	    series : [
	        {
	            name: '速度',
	            type: 'gauge',
	            z: 3,
	            min: 0,
	            max: 220,
	            splitNumber: 11,
	            radius: '90%',
	            axisLine: {            // 坐标轴线
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    width: 10
	                }
	            },
	            axisTick: {            // 坐标轴小标记
	                length: 15,        // 属性length控制线长
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    color: 'auto'
	                }
	            },
	            splitLine: {           // 分隔线
	                length: 20,         // 属性length控制线长
	                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                    color: 'auto'
	                }
	            },
	            title : {
	                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                    fontWeight: 'bolder',
	                    fontSize: 20,
	                    fontStyle: 'italic'
	                }
	            },
	            detail : {
	                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                    fontWeight: 'bolder'
	                }
	            },
	            data:[{value: 40, name: 'km/h'}]
	        },
	        {
	            name: '转速',
	            type: 'gauge',
	            center: ['20%', '55%'],    // 默认全局居中
	            radius: '75%',
	            min:0,
	            max:7,
	            endAngle:45,
	            splitNumber:7,
	            axisLine: {            // 坐标轴线
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    width: 8
	                }
	            },
	            axisTick: {            // 坐标轴小标记
	                length:12,        // 属性length控制线长
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    color: 'auto'
	                }
	            },
	            splitLine: {           // 分隔线
	                length:20,         // 属性length控制线长
	                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                    color: 'auto'
	                }
	            },
	            pointer: {
	                width:5
	            },
	            title: {
	                offsetCenter: [0, '-30%'],       // x, y，单位px
	            },
	            detail: {
	                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
	                    fontWeight: 'bolder'
	                }
	            },
	            data:[{value: 1.5, name: 'x1000 r/min'}]
	        },
	        {
	            name: '油表',
	            type: 'gauge',
	            center: ['78%', '50%'],    // 默认全局居中
	            radius: '70%',
	            min: 0,
	            max: 2,
	            startAngle: 135,
	            endAngle: 45,
	            splitNumber: 2,
	            axisLine: {            // 坐标轴线
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    width: 8
	                }
	            },
	            axisTick: {            // 坐标轴小标记
	                splitNumber: 5,
	                length: 10,        // 属性length控制线长
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    color: 'auto'
	                }
	            },
	            axisLabel: {
	                formatter:function(v){
	                    switch (v + '') {
	                        case '0' : return 'E';
	                        case '1' : return 'Gas';
	                        case '2' : return 'F';
	                    }
	                }
	            },
	            splitLine: {           // 分隔线
	                length: 15,         // 属性length控制线长
	                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                    color: 'auto'
	                }
	            },
	            pointer: {
	                width:2
	            },
	            title : {
	                show: false
	            },
	            detail : {
	                show: false
	            },
	            data:[{value: 0.5, name: 'gas'}]
	        },
	        {
	            name: '水表',
	            type: 'gauge',
	            center : ['78%', '50%'],    // 默认全局居中
	            radius : '70%',
	            min: 0,
	            max: 2,
	            startAngle: 315,
	            endAngle: 225,
	            splitNumber: 2,
	            axisLine: {            // 坐标轴线
	                lineStyle: {       // 属性lineStyle控制线条样式
	                    width: 8
	                }
	            },
	            axisTick: {            // 坐标轴小标记
	                show: false
	            },
	            axisLabel: {
	                formatter:function(v){
	                    switch (v + '') {
	                        case '0' : return 'H';
	                        case '1' : return 'Water';
	                        case '2' : return 'C';
	                    }
	                }
	            },
	            splitLine: {           // 分隔线
	                length: 15,         // 属性length控制线长
	                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	                    color: 'auto'
	                }
	            },
	            pointer: {
	                width:2
	            },
	            title: {
	                show: false
	            },
	            detail: {
	                show: false
	            },
	            data:[{value: 0.5, name: 'gas'}]
	        }
	    ]
	};
	
//	setInterval(function (){
//	    option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
//	    option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0;
//	    option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0;
//	    option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0;
//	    myChart.setOption(option,true);
//	},2000);
	
	myChart.setOption(option);
});
//漏斗图
$(function(){
	var myChart = echarts.init(document.getElementById('echarts-funnel-chart'));
	
	option = {
//	    title: {
//	        text: '漏斗图'
//	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c}%"
	    },
	    toolbox: {
	        feature: {
	            dataView: {readOnly: false},
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    legend: {
	        data: ['展现','点击','访问','咨询','订单']
	    },
	    calculable: true,
	    series: [
	        {
	            name:'漏斗图',
	            type:'funnel',
	            left: '10%',
	            top: 60,
	            //x2: 80,
	            bottom: 60,
	            width: '80%',
	            height: '70%',
	            min: 0,
	            max: 100,
	            minSize: '0%',
	            maxSize: '100%',
	            sort: 'descending',
	            gap: 2,
	            label: {
	                normal: {
	                    show: true,
	                    position: 'inside'
	                },
	                emphasis: {
	                    textStyle: {
	                        fontSize: 16
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    length: 10,
	                    lineStyle: {
	                        width: 1,
	                        type: 'solid'
	                    }
	                }
	            },
	            itemStyle: {
	                normal: {
	                    borderColor: '#fff',
	                    borderWidth: 1
	                }
	            },
	            data: [
	                {value: 60, name: '访问'},
	                {value: 40, name: '咨询'},
	                {value: 20, name: '订单'},
	                {value: 80, name: '点击'},
	                {value: 100, name: '展现'}
	            ]
	        }
	    ]
	};
	
	myChart.setOption(option);
});
//中国地图
$(function(){
	var myChart = echarts.init(document.getElementById('echarts-map-chart'));
	
	option = {
	    tooltip: {
	        trigger: 'item',
	        formatter: '{b}'
	    },
	    series: [
	        {
	            name: '中国',
	            type: 'map',
	            mapType: 'china',
	            selectedMode : 'multiple',
	            label: {
	                normal: {
	                    show: true
	                },
	                emphasis: {
	                    show: true
	                }
	            },
	            data:[
	            ],
	            markPoint: {
	                symbol: 'pin',
	                symbolSize:100,
	                label:{
	                    normal:{
	                        show:true,
	                        formatter:function(d){return d.name}
	                    }
	                }
	            }
	        }
	    ]
	};
	
	myChart.setOption(option);
});
