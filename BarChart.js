/*
 * @license
 * BarChart.js
 * Copyright 2019 Atanu Roy (atanuroy@live.in)
 * Released under the MIT license
 */

InitBarChart=function(e){this.colors=["red","orange","yellow","green","blue","purple","grey"],this.constructor.prototype._proto||(this.constructor.prototype._proto={renderLabel:"renderLabel",onClick:"eventON_CLICK",_getChartOptions:function(e){var t=Common.utils.getOptionValue(e,"legendOptions")
e.legendChangeHandle=t?t.bindAll(e.change,e):null
var o=Common.utils.getPropertyValue(t,"labels"),a=Common.utils.getOptionValue(e,"animationOptions")
e.animationChangeHandle=a?a.bindAll(e.change,e):null
var l=Common.utils.getOptionValue(e,"layoutOptions")
e.layoutChangeHandle=l?l.bindAll(e.change,e):null
var i=Common.utils.getOptionValue(e,"titleOptions")
e.titleChangeHandle=i?i.bindAll(e.change,e):null
var n=Common.utils.getOptionValue(e,"tooltipOptions")
e.tooltipChangeHandle=n?n.bindAll(e.change,e):null
var r=Common.utils.getOptionValue(e,"scaleOptions")
e.scaleChangeHandle=r?r.bindAll(e.change,e):null
var s=Common.utils.getPropertyValue(r,"xAxisLabel"),u=Common.utils.getPropertyValue(r,"yAxisLabel"),m=Common.utils.getOptionValue(e,"gridOptions")
e.gridChangeHandle=m?m.bindAll(e.change,e):null
var d=Common.utils.getOptionValue(e,"secondYAxisLabelOptions")
e.secondYAxisLabelChangeHandle=d?d.bindAll(e.change,e):null
var g=Common.utils.getOptionValue(e,"eventsAllowed")&&Common.utils.getOptionValue(e,"eventsAllowed").items?Common.utils.getOptionValue(e,"eventsAllowed").items:[],C=Common.utils.getOptionValue(e,"onChartLabelProperties")
e.onChartLabelPropertiesChangeHandle=C?C.bindAll(e.change,e):null
var h={responsive:!0,responsiveAnimationDuration:Common.utils.getOptionValue(e,"responsiveAnimationDuration",1e3),maintainAspectRatio:e.isMobile?!1:!0,aspectRatio:Common.utils.getOptionValue(e,"aspectRatio",2),devicePixelRatio:Common.utils.getOptionValue(e,"devicePixelRatio",window.devicePixelRatio),plugins:{datalabels:{align:Common.utils.getValue(C,"align","center"),anchor:Common.utils.getValue(C,"anchor","center"),backgroundColor:function(e){return null},borderColor:Common.utils.getValue(C,"borderColor",null),borderRadius:Common.utils.getValue(C,"borderRadius",null),borderWidth:Common.utils.getValue(C,"borderWidth",null),clamp:"true"==Common.utils.getValue(C,"clamp",!0)?!0:!1,clip:"true"==Common.utils.getValue(C,"clip",!0)?!0:!1,color:Common.utils.getValue(C,"color",null)?Common.utils.getValue(C,"color",null):function(e){var t
t=e.dataset.tempBackgroundColor&&""!=e.dataset.tempBackgroundColor&&void 0!=e.dataset.tempBackgroundColor?-1!=e.dataset.tempBackgroundColor.search("rgb")?Common.utils.rgb2hex(e.dataset.tempBackgroundColor):e.dataset.tempBackgroundColor:e.dataset.backgroundColor&&""!=e.dataset.backgroundColor&&void 0!=e.dataset.backgroundColor?-1!=e.dataset.backgroundColor.search("rgb")?Common.utils.rgb2hex(e.dataset.backgroundColor):e.dataset.backgroundColor:null
var o=t?Common.utils.hexToRgb(t):null
if(o){var a=140,l=.299*o.r+.587*o.g+.114*o.b
return l>a?"black":"white"}return"black"},display:"true"==Common.utils.getValue(C,"display",!0)?!0:!1,font:{family:Common.utils.getValue(C,"fontFamily","'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),weight:Common.utils.getValue(C,"fontWeight","normal"),size:Common.utils.getValue(C,"fontSize",12),style:Common.utils.getValue(C,"fontStyle","normal"),lineHeight:Common.utils.getValue(C,"lineHeight",1.2)},formatter:function(t,o){return e.executeEventHandlingFunction(e,"renderLabel",t,o),o.customValue?o.customValue:t},offset:Common.utils.getValue(C,"offset",4),opacity:Common.utils.getValue(C,"opacity",1),padding:Common.utils.getValue(C,"padding",4),rotation:Common.utils.getValue(C,"rotation",0),textAlign:Common.utils.getValue(C,"textAlign","start")}},legend:{display:"true"==Common.utils.getValue(t,"display",!0)?!0:!1,position:Common.utils.getValue(t,"position","bottom"),fullWidth:"true"==Common.utils.getValue(t,"fullWidth",!0)?!0:!1,reverse:Common.utils.getValue(t,"reverse",!1),labels:{boxWidth:Common.utils.getValue(o,"boxWidth",40),fontSize:Common.utils.getValue(o,"fontSize",12),fontStyle:Common.utils.getValue(o,"fontStyle","normal"),fontColor:Common.utils.getValue(o,"fontColor","#666"),fontFamily:Common.utils.getValue(o,"fontFamily","'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),padding:Common.utils.getValue(o,"padding",4),usePointStyle:Common.utils.getValue(o,"usePointStyle",!1)}},title:{display:"true"==Common.utils.getValue(i,"display",!0)?!0:!1,position:Common.utils.getValue(i,"position","top"),fontSize:Common.utils.getValue(i,"fontSize",16),fontFamily:Common.utils.getValue(i,"fontFamily","'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),fontColor:Common.utils.getValue(i,"fontColor","#666"),fontStyle:Common.utils.getValue(i,"fontStyle","bold"),padding:Common.utils.getValue(i,"padding",4),lineHeight:Common.utils.getValue(i,"lineHeight",1.2),text:Common.utils.getValue(i,"text","")},events:g,tooltips:{enabled:"true"==Common.utils.getValue(n,"enabled",!0)?!0:!1,mode:Common.utils.getValue(n,"mode","nearest"),intersect:"true"==Common.utils.getValue(n,"intersect",!0)?!0:!1,position:Common.utils.getValue(n,"position","avarage"),backgroundColor:Common.utils.getValue(n,"backgroundColor","rgba(0, 0, 0, 0.8)"),titleFontFamily:Common.utils.getValue(n,"titleFontFamily","'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),titleFontSize:Common.utils.getValue(n,"titleFontSize",12),titleFontStyle:Common.utils.getValue(n,"titleFontStyle","bold"),titleFontColor:Common.utils.getValue(n,"titleFontColor","#fff"),titleSpacing:Common.utils.getValue(n,"titleSpacing",2),titleMarginBottom:Common.utils.getValue(n,"titleMarginBottom",6),bodyFontFamily:Common.utils.getValue(n,"bodyFontFamily","'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),bodyFontSize:Common.utils.getValue(n,"bodyFontSize",12),bodyFontStyle:Common.utils.getValue(n,"bodyFontStyle","normal"),bodyFontColor:Common.utils.getValue(n,"bodyFontColor","#fff"),bodySpacing:Common.utils.getValue(n,"bodySpacing",2),footerFontFamily:Common.utils.getValue(n,"footerFontFamily","'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),footerFontSize:Common.utils.getValue(n,"footerFontSize",12),footerFontStyle:Common.utils.getValue(n,"footerFontStyle","bold"),footerFontColor:Common.utils.getValue(n,"footerFontColor","#fff"),footerSpacing:Common.utils.getValue(n,"footerSpacing",2),footerMarginTop:Common.utils.getValue(n,"footerMarginTop",6),xPadding:Common.utils.getValue(n,"xPadding",6),yPadding:Common.utils.getValue(n,"yPadding",6),caretPadding:Common.utils.getValue(n,"caretPadding",2),caretSize:Common.utils.getValue(n,"caretSize",5),cornerRadius:Common.utils.getValue(n,"cornerRadius",6),multiKeyBackground:Common.utils.getValue(n,"multiKeyBackground","#fff"),displayColors:"true"==Common.utils.getValue(n,"displayColors",!0)?!0:!1,borderColor:Common.utils.getValue(n,"borderColor","rgba(0, 0, 0, 0)"),borderWidth:Common.utils.getValue(n,"borderWidth",0),callbacks:{}},animation:{duration:Common.utils.getValue(a,"duration",1e3),easing:Common.utils.getValue(a,"easing","easeOutQuart")},layout:{padding:{left:Common.utils.getValue(l,"paddingLeft",4),right:Common.utils.getValue(l,"paddingRight",0),top:Common.utils.getValue(l,"paddingTop",0),bottom:Common.utils.getValue(l,"paddingBottom",0)}},scales:{xAxes:[{stacked:"stackedBar"==Common.utils.getOptionValue(e,"chartType")?!0:!1,barPercentage:Common.utils.getValue(r,"barPercentage",.9),categoryPercentage:Common.utils.getValue(r,"categoryPercentage",.9),barThickness:Common.utils.getValue(r,"barThickness","flex"),maxBarThickness:Common.utils.getValue(r,"maxBarThickness",100),minBarLength:Common.utils.getValue(r,"minBarLength",0),gridLines:{display:"true"==Common.utils.getValue(m,"display",!0)?!0:!1,color:Common.utils.getValue(m,"color","rgba(0, 0, 0, 0.1)"),borderDash:Common.utils.getValue(m,"borderDash",[]),borderDashOffset:Common.utils.getValue(m,"borderDashOffset",[]),lineWidth:Common.utils.getValue(m,"lineWidth",1),drawBorder:"true"==Common.utils.getValue(m,"drawBorder",!0)?!0:!1,drawOnChartArea:"true"==Common.utils.getValue(m,"drawOnChartArea",!0)?!0:!1,drawTicks:"true"==Common.utils.getValue(m,"drawTicks",!0)?!0:!1,tickMarkLength:Common.utils.getValue(m,"tickMarkLength",10),zeroLineWidth:Common.utils.getValue(m,"zeroLineWidth",1),zeroLineColor:Common.utils.getValue(m,"zeroLineColor","rgba(0, 0, 0, 0.25)"),zeroLineBorderDash:Common.utils.getValue(m,"zeroLineBorderDash",[]),zeroLineBorderDashOffset:Common.utils.getValue(m,"zeroLineBorderDashOffset",0),offsetGridLines:Common.utils.getValue(m,"offsetGridLines",!1)},scaleLabel:{display:"true"==Common.utils.getValue(s,"display",!0)?!0:!1,labelString:Common.utils.getValue(s,"labelString",""),lineHeight:Common.utils.getValue(s,"lineHeight",1.2),fontColor:Common.utils.getValue(s,"fontColor","#666"),fontFamily:Common.utils.getValue(s,"fontFamily","'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),fontSize:Common.utils.getValue(s,"fontSize",12),fontStyle:Common.utils.getValue(s,"fontStyle","normal"),padding:Common.utils.getValue(s,"padding",4)}}],yAxes:[{stacked:"stackedBar"==Common.utils.getOptionValue(e,"chartType")?!0:!1,display:!0,id:Common.utils.getOptionValue(e,"firstYAxisId","y-axis-2"),barPercentage:Common.utils.getValue(r,"barPercentage",.9),categoryPercentage:Common.utils.getValue(r,"categoryPercentage",.9),barThickness:Common.utils.getValue(r,"barThickness","flex"),maxBarThickness:Common.utils.getValue(r,"maxBarThickness",100),minBarLength:Common.utils.getValue(r,"minBarLength",0),gridLines:{display:"true"==Common.utils.getValue(m,"display",!0)?!0:!1,color:Common.utils.getValue(m,"color","rgba(0, 0, 0, 0.1)"),borderDash:Common.utils.getValue(m,"borderDash",[]),borderDashOffset:Common.utils.getValue(m,"borderDashOffset",[]),lineWidth:Common.utils.getValue(m,"lineWidth",1),drawBorder:"true"==Common.utils.getValue(m,"drawBorder",!0)?!0:!1,drawOnChartArea:"true"==Common.utils.getValue(m,"drawOnChartArea",!0)?!0:!1,drawTicks:"true"==Common.utils.getValue(m,"drawTicks",!0)?!0:!1,tickMarkLength:Common.utils.getValue(m,"tickMarkLength",10),zeroLineWidth:Common.utils.getValue(m,"zeroLineWidth",1),zeroLineColor:Common.utils.getValue(m,"zeroLineColor","rgba(0, 0, 0, 0.25)"),zeroLineBorderDash:Common.utils.getValue(m,"zeroLineBorderDash",[]),zeroLineBorderDashOffset:Common.utils.getValue(m,"zeroLineBorderDashOffset",0),offsetGridLines:Common.utils.getValue(m,"offsetGridLines",!1)},scaleLabel:{display:"true"==Common.utils.getValue(u,"display",!0)?!0:!1,labelString:Common.utils.getValue(u,"labelString",""),lineHeight:Common.utils.getValue(u,"lineHeight",1.2),fontColor:Common.utils.getValue(u,"fontColor","#666"),fontFamily:Common.utils.getValue(u,"fontFamily","'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),fontSize:Common.utils.getValue(u,"fontSize",12),fontStyle:Common.utils.getValue(u,"fontStyle","normal"),padding:Common.utils.getValue(u,"padding",4)}}]},onClick:function(t){var o=this.getElementAtEvent(t)&&this.getElementAtEvent(t)[0]?this.getElementAtEvent(t)[0]:null
if(o){var a=o._chart.data,l=o._datasetIndex
o.label=a.datasets[l].label,o.value=a.datasets[l].data[o._index],bpmext.ui.executeEventHandlingFunction(e,"eventON_CLICK",{barItem:o})}}},c={position:"right",type:"linear",display:!0,id:Common.utils.getOptionValue(e,"secondYAxisId","y-axis-2"),gridLines:{drawOnChartArea:!1},scaleLabel:{display:"true"==Common.utils.getValue(d,"display",!0)?!0:!1,labelString:Common.utils.getValue(d,"labelString",""),lineHeight:Common.utils.getValue(d,"lineHeight",1.2),fontColor:Common.utils.getValue(d,"fontColor","#666"),fontFamily:Common.utils.getValue(d,"fontFamily","'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),fontSize:Common.utils.getValue(d,"fontSize",12),fontStyle:Common.utils.getValue(d,"fontStyle","normal"),padding:Common.utils.getValue(d,"padding",4)}}
if(Common.utils.getOptionValue(e,"isMultiAxis")&&"bar"==e.chartType&&h.scales.yAxes.push(c),e.colorScheme){var p={scheme:e.colorScheme}
h.plugins.colorschemes=p}return h},_mapData:function(e,t){var o=Chart.helpers.color,a=["red","orange","yellow","green","blue","purple","grey"],l=[],i=[],n=Common.utils.getOptionValue(e,"isMultiAxis")
if(t){if(t&&t.datasets&&t.datasets.items&&t.datasets.items.length>0)for(var r=0;r<t.datasets.items.length;r++){var s=a[Common.utils.getRandomInt(0,a.length-1)],u={},m=t.datasets.items[r]
u.label=m.label?m.label:"",u.borderSkipped=m.borderSkipped?m.borderSkipped:"bottom",u.borderWidth=m.borderWidth?m.borderWidth:0,u.hoverBackgroundColor=m.hoverBackgroundColor?m.hoverBackgroundColor:void 0,u.hoverBorderColor=m.hoverBorderColor?m.hoverBorderColor:void 0,u.hoverBorderWidth=m.hoverBorderWidth?m.hoverBorderWidth:1,""!=e.colorScheme&&e.colorScheme&&void 0!=e.colorScheme||(u.backgroundColor=m.backgroundColor?m.backgroundColor:o(window.chartColors[s]).alpha(.5).rgbString(),u.borderColor=m.borderColor?m.borderColor:m.backgroundColor?m.backgroundColor.replace(/[^,]+(?=\))/,"1.0"):window.chartColors[s]),u.borderWidth=m.borderWidth?m.borderWidth:1,u.type=m.type?m.type:"",u.fill="false"!=m.fill&&""!=m.fill&&void 0!=m.fill&&m.fill?!0:!1,n&&"bar"==e.chartType&&(u.yAxisID=m.yAxisID),u.data=m.data.items,l.push(u)}i=t&&t.labels&&t.labels.items?t.labels.items:[],xLabels=t&&t.xLabels&&t.xLabels.items?t.xLabels.items:[],yLabels=t&&t.yLabels&&t.yLabels.items?t.yLabels.items:[]}return{labels:i,datasets:l}},_getBarChartData:function(e){return this._mapData(e,e.context.binding.get("value"))},_getBarChartDataFromService:function(e){var t=Common.utils.getOptionValue(e,"dataServiceInput",null),o=this._getChartOptions(e)
e.myBar&&e.myBar.destroy()
var a=e.canvas.getContext("2d")
e.myBar=new Chart(a,{type:"bar"==e.chartType||"stackedBar"==e.chartType?"bar":e.chartType,data:{labels:[],datasets:[]},options:o})
var l={params:{input:t?t.toJSObject():null},load:function(t){t&&t.barChartData&&(e.context.binding.get("value").set("labels",t.barChartData.labels),e.context.binding.get("value").set("datasets",t.barChartData.datasets))},error:function(e){console.log(e)}}
e.context.options.dataProviderService(l)},_labelUpdated:function(e){this._createChart(e)},_datasetsUpdated:function(e){this._createChart(e)},_createChart:function(e){e.myBar&&e.myBar.destroy()
var t=e.canvas.getContext("2d"),o=this._getBarChartData(e),a=this._getChartOptions(e)
o&&void 0!=o&&a&&void 0!=a&&(e.myBar=new Chart(t,{type:"bar"==e.chartType||"stackedBar"==e.chartType?"bar":e.chartType,data:o,options:a}))}},this.constructor.prototype.load=function(){this.bpmEventHelper.ui.loadView(this),this.isMobile=Common.utils.isMobile()
var t=this.context.options
this.chartType=t&&t.chartType&&t.chartType.get("value")?t.chartType.get("value"):"bar",this.colorScheme=Common.utils.getOptionValue(this,"colorScheme"),this.container=e.create("div",null,this.context.element,"first"),this.container.style.width=Common.utils.getOptionValue(this,"chartWidth","100%"),this.container.style.position="relative",this.container.style.minHeight="360px",this.canvas=e.create("canvas",null,this.container,"first")
Common.utils.getOptionValue(this,"elementOptions"),Common.utils.getOptionValue(this,"fontOptions")
t[this._proto.renderLabel]&&this.registerEventHandlingFunction(this,this._proto.renderLabel,"value","context"),t[this._proto.onClick]&&this.registerEventHandlingFunction(this,this._proto.onClick,"e")
var o=this.context.binding.get("value")
this.labelBindingHandle=o.bind("labels",this.change,this),this.datasetsBindingHandle=o.bind("datasets",this.change,this)
var a=Common.utils.getOptionValue(this,"dataSource","binding")
"service"==a?this._proto._getBarChartDataFromService(this):this._proto._createChart(this)},this.constructor.prototype.view=function(){},this.constructor.prototype.change=function(e){if("datasets"==e.property||"labels"==e.property)this._proto._createChart(this)
else if("chartType"==e.property&&e.oldVal!=e.newVal)this.chartType=e.newVal,this._proto._createChart(this)
else if("colorScheme"==e.property&&e.oldVal!=e.newVal){this.colorScheme=e.newVal,this.myBar.config.data.datasets.forEach(function(e){e.backgroundColor&&delete e.backgroundColor,e.borderColor&&delete e.borderColor,e.pointBackgroundColor&&delete e.pointBackgroundColor,e.pointBorderColor&&delete e.pointBorderColor})
var t=this._proto._getChartOptions(this)
this.myBar.options=t,this.myBar.update()}else if("chartWidth"==e.property&&e.oldVal!=e.newVal)this.container.style.width=e.newVal
else{var t=this._proto._getChartOptions(this)
this.myBar.options=t,this.myBar.update()}},this.constructor.prototype.validate=function(e){},this.constructor.prototype.collaboration=function(e){},this.constructor.prototype.unload=function(){this.myBar&&this.myBar.destroy(),this.canvas&&e.destroy(this.canvas),this.labelBindingHandle&&this.labelBindingHandle.unbind(),this.datasetsBindingHandle&&this.datasetsBindingHandle.unbind(),this.legendChangeHandle&&this.legendChangeHandle.unbind(),this.animationChangeHandle&&this.animationChangeHandle.unbind(),this.layoutChangeHandle&&this.layoutChangeHandle.unbind(),this.titleChangeHandle&&this.titleChangeHandle.unbind(),this.tooltipChangeHandle&&this.tooltipChangeHandle.unbind(),this.scaleChangeHandle&&this.scaleChangeHandle.unbind(),this.gridChangeHandle&&this.gridChangeHandle.unbind(),this.secondYAxisLabelChangeHandle&&this.secondYAxisLabelChangeHandle.unbind(),this.onChartLabelPropertiesChangeHandle&&this.onChartLabelPropertiesChangeHandle.unbind()})}