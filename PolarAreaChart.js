/*
 * @license
 * BarChart.js
 * Copyright 2019 Atanu Roy (atanuroy@live.in)
 * Released under the MIT license
 */
InitPolarAreaChart = function (domConstruct) {
	debugger;
	this.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey'];
	if (!this.constructor.prototype._proto) {
		this.constructor.prototype._proto = {
			renderLabel: "renderLabel",
			onClick: "eventON_CLICK",
			_getChartOptions: function(view){
				var legendOptions = Common.utils.getOptionValue(view, "legendOptions");
				view.legendChangeHandle = legendOptions ? legendOptions.bindAll(view.change, view) : null;
				var legendLabelOptions = Common.utils.getPropertyValue(legendOptions, "labels");
				var animationOptions = Common.utils.getOptionValue(view, "animationOptions");
				view.animationChangeHandle = animationOptions ? animationOptions.bindAll(view.change, view) : null;
				var layoutOptions = Common.utils.getOptionValue(view, "layoutOptions");
				view.layoutChangeHandle = layoutOptions ? layoutOptions.bindAll(view.change, view) : null;
				var titleOptions = Common.utils.getOptionValue(view, "titleOptions");
				view.titleChangeHandle = titleOptions ? titleOptions.bindAll(view.change, view) : null;
				var tooltipOptions = Common.utils.getOptionValue(view, "tooltipOptions");
				view.tooltipChangeHandle = tooltipOptions ? tooltipOptions.bindAll(view.change, view) : null;
				var eventsAllowed = Common.utils.getOptionValue(view, "eventsAllowed") && Common.utils.getOptionValue(view, "eventsAllowed").items ? Common.utils.getOptionValue(view, "eventsAllowed").items : [];
				var onChartLabelProperties = Common.utils.getOptionValue(view, "onChartLabelProperties");
				view.onChartLabelPropertiesChangeHandle = onChartLabelProperties ? onChartLabelProperties.bindAll(view.change, view) : null;
				var scaleOptions = Common.utils.getOptionValue(view, "scaleOptions");
				view.scaleChangeHandle = scaleOptions ? scaleOptions.bindAll(view.change, view) : null;
				var gridOptions = Common.utils.getOptionValue(view, "gridOptions");
				view.gridChangeHandle = gridOptions ? gridOptions.bindAll(view.change, view) : null;
				var angleLines = Common.utils.getOptionValue(view, "angleLines");
				view.angleLinesChangeHandle = angleLines ? angleLines.bindAll(view.change, view) : null;

				var chartOptions = {
					responsive: true,
					responsiveAnimationDuration: Common.utils.getOptionValue(view, "responsiveAnimationDuration", 500),
					maintainAspectRatio: view.isMobile ? false : true,
					aspectRatio: Common.utils.getOptionValue(view, "aspectRatio", 2),
					devicePixelRatio: Common.utils.getOptionValue(view, "devicePixelRatio", window.devicePixelRatio),
					plugins: {
						datalabels: {
							display: (Common.utils.getValue(onChartLabelProperties, "display", true) == "true") ? true :false,
							align: Common.utils.getValue(onChartLabelProperties, "align", "center"),
							anchor: Common.utils.getValue(onChartLabelProperties, "anchor", "center"),
							clamp : (Common.utils.getValue(onChartLabelProperties, "clamp", true) == "true") ? true :false,
							clip: (Common.utils.getValue(onChartLabelProperties, "clip", true) == "true") ? true :false,
							offset: Common.utils.getValue(onChartLabelProperties, "offset", 4),
							opacity: Common.utils.getValue(onChartLabelProperties, "opacity", 1),
							padding: Common.utils.getValue(onChartLabelProperties, "padding", 4),
							rotation: Common.utils.getValue(onChartLabelProperties, "rotation", 0),
							textAlign : Common.utils.getValue(onChartLabelProperties, "textAlign", 'start'),
							borderColor: Common.utils.getValue(onChartLabelProperties, "borderColor", null),
							borderWidth: Common.utils.getValue(onChartLabelProperties, "borderWidth", 0),
							backgroundColor: function(context) {
								return null;
							},
							borderRadius: Common.utils.getValue(onChartLabelProperties, "borderRadius", 4),
							color: Common.utils.getValue(onChartLabelProperties, "color", null) ? Common.utils.getValue(onChartLabelProperties, "color", null) : function (context) {
								var hex;
								if(context.dataset.tempBackgroundColor && context.dataset.tempBackgroundColor != "" && context.dataset.tempBackgroundColor != undefined){
									var hex = (context.dataset.tempBackgroundColor[context.dataIndex].search("rgb") != -1) ? Common.utils.rgb2hex(context.dataset.tempBackgroundColor[context.dataIndex]) : context.dataset.tempBackgroundColor[context.dataIndex];
								}else if(context.dataset.backgroundColor && context.dataset.backgroundColor != "" && context.dataset.backgroundColor != undefined){
									hex = (context.dataset.backgroundColor.search("rgb") != -1) ? Common.utils.rgb2hex(context.dataset.backgroundColor) : context.dataset.backgroundColor;
								}else{
									hex = null;
								}

								var rgb = hex ? Common.utils.hexToRgb(hex) : null;
								if(rgb){
									var threshold = 140;
									var luminance = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
									return luminance > threshold ? 'black' : 'white';
								}else{
									return 'black';
								}
							},
							font: {
								family: Common.utils.getValue(onChartLabelProperties, "fontFamily", "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),
								weight: Common.utils.getValue(onChartLabelProperties, "fontWeight", "normal"),
								size: Common.utils.getValue(onChartLabelProperties, "fontSize", 12),
								style: Common.utils.getValue(onChartLabelProperties, "fontStyle", "normal"),
								lineHeight: Common.utils.getValue(onChartLabelProperties, "lineHeight", 1.2),
							},
							formatter: function(value, context) {
								view.executeEventHandlingFunction(view, "renderLabel", value, context);
								return context.customValue ? context.customValue : value;
							},
						},
					},
					legend: {
						display: (Common.utils.getValue(legendOptions, "display", true) == "true") ? true :false,
						position: Common.utils.getValue(legendOptions, "position", 'bottom'),
						fullWidth: (Common.utils.getValue(legendOptions, "fullWidth", true) == "true") ? true : false,
						reverse: Common.utils.getValue(legendOptions, "reverse", false),
						labels: {
							boxWidth: Common.utils.getValue(legendLabelOptions, "boxWidth", 40),
							fontSize: Common.utils.getValue(legendLabelOptions, "fontSize", 12),
							fontStyle: Common.utils.getValue(legendLabelOptions, "fontStyle", 'normal'),
							fontColor: Common.utils.getValue(legendLabelOptions, "fontColor", '#666'),
							fontFamily: Common.utils.getValue(legendLabelOptions, "fontFamily", "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),
							padding: Common.utils.getValue(legendLabelOptions, "padding", 4),
							usePointStyle: Common.utils.getValue(legendLabelOptions, "usePointStyle", false),
						},
					},
					title: {
						display: (Common.utils.getValue(titleOptions, "display", true) == "true") ? true : false,
						position: Common.utils.getValue(titleOptions, "position", 'top'),
						fontSize: Common.utils.getValue(titleOptions, "fontSize", 16),
						fontFamily: Common.utils.getValue(titleOptions, "fontFamily", "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),
						fontColor: Common.utils.getValue(titleOptions, "fontColor", '#666'),
						fontStyle: Common.utils.getValue(titleOptions, "fontStyle", 'bold'),
						padding: Common.utils.getValue(titleOptions, "padding", 4),
						lineHeight: Common.utils.getValue(titleOptions, "lineHeight", 1.2),
						text: Common.utils.getValue(titleOptions, "text", ""),
					},
					events: eventsAllowed,
					tooltips: {
						enabled: (Common.utils.getValue(tooltipOptions, "enabled", true) == "true") ? true : false,
						//mode: Common.utils.getValue(tooltipOptions, "mode", 'nearest'),
						//intersect: (Common.utils.getValue(tooltipOptions, "intersect", true) == "true") ? true : false,
						//position: Common.utils.getValue(tooltipOptions, "position", 'avarage'),
						backgroundColor: Common.utils.getValue(tooltipOptions, "backgroundColor", 'rgba(0, 0, 0, 0.8)'),
						titleFontFamily: Common.utils.getValue(tooltipOptions, "titleFontFamily", "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),
						titleFontSize: Common.utils.getValue(tooltipOptions, "titleFontSize", 12),
						titleFontStyle: Common.utils.getValue(tooltipOptions, "titleFontStyle", 'bold'),
						titleFontColor: Common.utils.getValue(tooltipOptions, "titleFontColor", '#fff'),
						titleSpacing: Common.utils.getValue(tooltipOptions, "titleSpacing", 2),
						titleMarginBottom: Common.utils.getValue(tooltipOptions, "titleMarginBottom", 6),
						bodyFontFamily: Common.utils.getValue(tooltipOptions, "bodyFontFamily", "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),
						bodyFontSize: Common.utils.getValue(tooltipOptions, "bodyFontSize", 12),
						bodyFontStyle: Common.utils.getValue(tooltipOptions, "bodyFontStyle", 'normal'),
						bodyFontColor: Common.utils.getValue(tooltipOptions, "bodyFontColor", '#fff'),
						bodySpacing: Common.utils.getValue(tooltipOptions, "bodySpacing", 2),
						footerFontFamily: Common.utils.getValue(tooltipOptions, "footerFontFamily", "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"),
						footerFontSize: Common.utils.getValue(tooltipOptions, "footerFontSize", 12),
						footerFontStyle: Common.utils.getValue(tooltipOptions, "footerFontStyle", 'bold'),
						footerFontColor: Common.utils.getValue(tooltipOptions, "footerFontColor", '#fff'),
						footerSpacing: Common.utils.getValue(tooltipOptions, "footerSpacing", 2),
						footerMarginTop: Common.utils.getValue(tooltipOptions, "footerMarginTop", 6),
						xPadding: Common.utils.getValue(tooltipOptions, "xPadding", 6),
						yPadding: Common.utils.getValue(tooltipOptions, "yPadding", 6),
						caretPadding: Common.utils.getValue(tooltipOptions, "caretPadding", 2),
						caretSize: Common.utils.getValue(tooltipOptions, "caretSize", 5),
						cornerRadius: Common.utils.getValue(tooltipOptions, "cornerRadius", 6),
						multiKeyBackground: Common.utils.getValue(tooltipOptions, "multiKeyBackground", '#fff'),
						displayColors: (Common.utils.getValue(tooltipOptions, "displayColors", true) == "true") ? true : false,
						borderColor: Common.utils.getValue(tooltipOptions, "borderColor", 'rgba(0, 0, 0, 0)'),
						borderWidth: Common.utils.getValue(tooltipOptions, "borderWidth", 0),
					},
					animation: {
						animateScale: true,
						animateRotate: true,
						duration: Common.utils.getValue(animationOptions, "duration", 500),
						easing: Common.utils.getValue(animationOptions, "easing", 'easeOutQuart'),
					},
					layout: {
						padding: {
							left: Common.utils.getValue(layoutOptions, "paddingLeft", 4),
							right: Common.utils.getValue(layoutOptions, "paddingRight", 0),
							top: Common.utils.getValue(layoutOptions, "paddingTop", 0),
							bottom: Common.utils.getValue(layoutOptions, "paddingBottom", 0),
						}
					},
					scale: {
						animate: (Common.utils.getValue(scaleOptions, "animate", true) == "true") ? true : false,
						display: (Common.utils.getValue(scaleOptions, "display", true) == "true") ? true : false,
						offset: (Common.utils.getValue(scaleOptions, "offset", true) == "true") ? true : false,
						type: "radialLinear",
						angleLines: {
							borderDash: Common.utils.getValue(angleLines, "borderDash", []),
							borderDashOffset: Common.utils.getValue(angleLines, "borderDashOffset", 0),
							color: Common.utils.getValue(angleLines, "color", "rgba(0, 0, 0, 0.1)"),
							display: (Common.utils.getValue(angleLines, "display", true) == "true") ? true : false,
							lineWidth: Common.utils.getValue(angleLines, "lineWidth", 1),
						},
						gridLines: {
							display: (Common.utils.getValue(gridOptions, "display", true) == "true") ? true : false,
							color: Common.utils.getValue(gridOptions, "color", 'rgba(0, 0, 0, 0.1)'),
							borderDash: Common.utils.getValue(gridOptions, "borderDash", []),
							circular: (Common.utils.getValue(gridOptions, "circular", true) == "true") ? true : false,
							borderDashOffset: Common.utils.getValue(gridOptions, "borderDashOffset", []),
							lineWidth: Common.utils.getValue(gridOptions, "lineWidth", 1),
							drawBorder: (Common.utils.getValue(gridOptions, "drawBorder", true) == "true") ? true : false,
							drawOnChartArea: (Common.utils.getValue(gridOptions, "drawOnChartArea", true) == "true") ? true : false,
							drawTicks: (Common.utils.getValue(gridOptions, "drawTicks", true) == "true") ? true : false,
							tickMarkLength: Common.utils.getValue(gridOptions, "tickMarkLength", 10),
							zeroLineWidth: Common.utils.getValue(gridOptions, "zeroLineWidth", 1),
							zeroLineColor: Common.utils.getValue(gridOptions, "zeroLineColor", 'rgba(0, 0, 0, 0.25)'),
							zeroLineBorderDash: Common.utils.getValue(gridOptions, "zeroLineBorderDash", []),
							zeroLineBorderDashOffset: Common.utils.getValue(gridOptions, "zeroLineBorderDashOffset", 0.0),
							offsetGridLines: Common.utils.getValue(gridOptions, "offsetGridLines", false),
						},
						pointLabels: {
							display: (Common.utils.getValue(scaleOptions, "pointLabelsDisplay", true) == "true") ? true : false,
							fontSize: Common.utils.getValue(gridOptions, "pointLabelsFontSize", 10),
						},
						position: "chartArea",
						scaleLabel: {
							display: (Common.utils.getValue(scaleOptions, "scaleLabelDisplay", true) == "true") ? true : false,
							labelString: Common.utils.getValue(scaleOptions, "scaleLabelString", ""),
						},
					},
					
					onClick: function(e){
						var polarAreaItem = this.getElementAtEvent(e) && this.getElementAtEvent(e)[0] ? this.getElementAtEvent(e)[0] : null;
						if(polarAreaItem){
							var data = polarAreaItem._chart.data;
							var datasetIndex = polarAreaItem._datasetIndex;
							polarAreaItem.label = data.datasets[datasetIndex].label;
							polarAreaItem.value = data.datasets[datasetIndex].data[polarAreaItem._index];
							bpmext.ui.executeEventHandlingFunction(view, "eventON_CLICK", {polarAreaItem: polarAreaItem});
						}
					},
				}

				if(view.colorScheme){
					var colorschemes = {scheme: view.colorScheme}
					chartOptions.plugins.colorschemes = colorschemes;
				}
				debugger;
				return chartOptions;
			},
			
			_mapData: function(view, polarAreaChartData){
				var color = Chart.helpers.color;
				var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey'];
				var datasets = [];
				var labels = [];
				
				if(polarAreaChartData){
					if(polarAreaChartData && polarAreaChartData.datasets && polarAreaChartData.datasets.items && polarAreaChartData.datasets.items.length > 0){
						for(var i=0; i<polarAreaChartData.datasets.items.length; i++){
							var randomColor = colors[Common.utils.getRandomInt(0, colors.length-1)];
							var dataObj = {};
							var item = polarAreaChartData.datasets.items[i];
							if(view.colorScheme == "" || !view.colorScheme || view.colorScheme == undefined){
								dataObj.backgroundColor = item.backgroundColor ? item.backgroundColor : color(window.chartColors[randomColor]).alpha(0.5).rgbString();
								dataObj.borderColor = item.borderColor ? item.borderColor : window.chartColors[randomColor];
							}
							
							dataObj.borderAlign = item.borderAlign ? item.borderAlign : 'center';
							dataObj.hoverBackgroundColor = item.hoverBackgroundColor ? item.hoverBackgroundColor : undefined;
							dataObj.hoverBorderColor = item.hoverBorderColor ? item.hoverBorderColor : undefined;
							dataObj.hoverBorderWidth = item.hoverBorderWidth ? item.hoverBorderWidth : 1;
							
							dataObj.data = item.data.items;
							
							datasets.push(dataObj);
						} 
					}
				
					labels = polarAreaChartData && polarAreaChartData.labels && polarAreaChartData.labels.items ? polarAreaChartData.labels.items : [];
				}

				return {labels: labels, datasets: datasets};
				
			},
			_getPolarAreaChartData: function(view){
				return this._mapData(view, view.context.binding.get("value"));
			},
			_getPolarAreaChartDataFromService: function(view){
				var dataServiceInput = Common.utils.getOptionValue(view, "dataServiceInput", null);
				var polarAreaChartOptions = this._getChartOptions(view);
				if(view.myPolarArea){
					view.myPolarArea.destroy();
				}
				var ctx = view.canvas.getContext('2d');
				view.myPolarArea = new Chart(ctx, {
					type: "polarArea",
					data: {labels: [], datasets: []},
					options: polarAreaChartOptions
				});
				var serviceArgs = {
					params: {
						input: dataServiceInput ? dataServiceInput.toJSObject() : null
					},
					load : function (response) {
						if(response && response.polarAreaChartData){
							view.context.binding.get("value").set("labels", response.polarAreaChartData.labels);
							view.context.binding.get("value").set("datasets", response.polarAreaChartData.datasets);
						}
					},
					error : function (error) {
						console.log(error);
					}
				}

				view.context.options.dataProviderService(serviceArgs);
			},
			_labelUpdated: function(view){
				this._createChart(view);
			},
			_datasetsUpdated: function(view){
				this._createChart(view);
			},
			_createChart : function(view){
				if(view.myPolarArea){
					view.myPolarArea.destroy();
				}
				var ctx = view.canvas.getContext('2d');
				var polarAreaChartData = this._getPolarAreaChartData(view);
				var polarAreaChartOptions = this._getChartOptions(view);
				if(polarAreaChartData && polarAreaChartData != undefined && polarAreaChartOptions && polarAreaChartOptions != undefined){
					view.myPolarArea = new Chart(ctx, {
						type: "polarArea",
						data: polarAreaChartData,
						options: polarAreaChartOptions
					});
				}
			},

		};
		this.constructor.prototype.load = function () {
			this.bpmEventHelper.ui.loadView(this);
			this.isMobile = Common.utils.isMobile(); 
			var _this = this;
			var options = this.context.options;
			this.colorScheme = Common.utils.getOptionValue(this, "colorScheme");
			this.container = domConstruct.create("div", null, this.context.element, "first");
			this.container.style.width = Common.utils.getOptionValue(this, "chartWidth", "100%");;
			this.container.style.position = "relative";
			this.container.style.minHeight = "360px";
			this.canvas = domConstruct.create("canvas", null, this.container, "first");
			
			if(options[this._proto.renderLabel]){
				this.registerEventHandlingFunction(this, this._proto.renderLabel, "value", "context");
			}
			if(options[this._proto.onClick]){
				this.registerEventHandlingFunction(this, this._proto.onClick, "e");
			}
			
			var binding = this.context.binding.get("value");
			this.labelBindingHandle = binding.bind("labels", this.change, this);
			this.datasetsBindingHandle = binding.bind("datasets", this.change, this);
			
			var dataSource = Common.utils.getOptionValue(this, "dataSource", "binding");
			if(dataSource == "service"){
				this._proto._getPolarAreaChartDataFromService(this);
			}else{
				this._proto._createChart(this);
			}
		};

		this.constructor.prototype.view = function () {};

		this.constructor.prototype.change = function (event) {
			debugger;
			if(event.property == "datasets" || event.property == "labels"){
				this._proto._createChart(this);
			}else if(event.property == "chartType" && (event.oldVal != event.newVal)){
				this.chartType = event.newVal;
				this._proto._createChart(this);
			}else if(event.property == "colorScheme" && (event.oldVal != event.newVal)){
				this.colorScheme = event.newVal;
				this.myPolarArea.config.data.datasets.forEach(function(dataset) {
					if (dataset.backgroundColor) {
						delete dataset.backgroundColor;
					}
					if (dataset.borderColor) {
						delete dataset.borderColor;
					}
					if (dataset.pointBackgroundColor) {
						delete dataset.pointBackgroundColor;
					}
					if (dataset.pointBorderColor) {
						delete dataset.pointBorderColor;
					}
				});
				var polarAreaChartOptions = this._proto._getChartOptions(this);
				this.myPolarArea.options = polarAreaChartOptions;
				this.myPolarArea.update();
			}else if(event.property == "chartWidth" && (event.oldVal != event.newVal)){
				this.container.style.width = event.newVal;
			}
			else{
				var polarAreaChartOptions = this._proto._getChartOptions(this);
				this.myPolarArea.options = polarAreaChartOptions;
				this.myPolarArea.update();
			}
		};

		this.constructor.prototype.validate = function (event) {};

		this.constructor.prototype.collaboration = function (event) {};

		this.constructor.prototype.unload = function () {
			if(this.myPolarArea){
				this.myPolarArea.destroy();
			}
			if(this.canvas){
				domConstruct.destroy(this.canvas);
			}
			if (this.labelBindingHandle){
				this.labelBindingHandle.unbind();
			}
			if (this.datasetsBindingHandle){
				this.datasetsBindingHandle.unbind();
			}
			if(this.legendChangeHandle){
				this.legendChangeHandle.unbind();
			}
			if(this.animationChangeHandle){
				this.animationChangeHandle.unbind();
			}
			if(this.layoutChangeHandle){
				this.layoutChangeHandle.unbind();
			}
			if(this.titleChangeHandle){
				this.titleChangeHandle.unbind();
			}
			if(this.tooltipChangeHandle){
				this.tooltipChangeHandle.unbind();
			}
			if(this.onChartLabelPropertiesChangeHandle){
				this.onChartLabelPropertiesChangeHandle.unbind();
			}
			if(this.gridChangeHandle){
				this.gridChangeHandle.unbind();
			}
			if(this.scaleChangeHandle){
				this.scaleChangeHandle.unbind();
			}
			if(this.angleLinesChangeHandle){
				this.angleLinesChangeHandle.unbind();
			}
		};
	}
}
