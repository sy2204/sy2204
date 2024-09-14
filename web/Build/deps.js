deps = {
	"common": {
		"core": [
			"./src/common/SuperMap.js",
			"./src/common/REST.js"
		],
		"util": [
			"./src/common/util/FetchRequest.js"
		],
		"format": [
			"./src/common/format/GeoJSON.js"
		],
		"style": [
			"./src/common/style/CartoCSS.js"
		],
		"security": [
			"./src/common/security/SecurityManager.js"
		],
		"iManager": [
			"./src/common/iManager/iManager.js"
		],
		"online": [
			"./src/common/online/Online.js"
		],
		"iPortal": [
			"./src/common/iPortal/iPortal.js"
		],
		"iServer": [
			//Data
			"./src/common/iServer/FieldStatisticService.js",
			"./src/common/iServer/GetFeaturesByBoundsService.js",
			"./src/common/iServer/GetFeaturesByBufferService.js",
			"./src/common/iServer/GetFeaturesByGeometryService.js",
			"./src/common/iServer/GetFeaturesByIDsService.js",
			"./src/common/iServer/GetFeaturesBySQLService.js",
			"./src/common/iServer/GetFieldsService.js",
			"./src/common/iServer/GetGridCellInfosService.js",
			"./src/common/iServer/EditFeaturesService.js",
			//Map
			"./src/common/iServer/GetLayersInfoService.js",
			"./src/common/iServer/MapService.js",
			"./src/common/iServer/ChartQueryService.js",
			"./src/common/iServer/QueryByDistanceService.js",
			"./src/common/iServer/QueryByGeometryService.js",
			"./src/common/iServer/QueryBySQLService.js",
			"./src/common/iServer/QueryByBoundsService.js",
			"./src/common/iServer/TilesetsService.js",
			"./src/common/iServer/MeasureService.js",
			"./src/common/iServer/ChartFeatureInfoSpecsService.js",
			"./src/common/iServer/SetLayerInfoService.js",
			"./src/common/iServer/SetLayersInfoService.js",
			"./src/common/iServer/SetLayerStatusService.js",
			//ThemeService
			"./src/common/iServer/ThemeService.js",
			//NetworkAnalyst
			"./src/common/iServer/BurstPipelineAnalystService.js",
			"./src/common/iServer/ComputeWeightMatrixService.js",
			"./src/common/iServer/FacilityAnalystStreamService.js",
			"./src/common/iServer/FindClosestFacilitiesService.js",
			"./src/common/iServer/FindLocationService.js",
			"./src/common/iServer/FindMTSPPathsService.js",
			"./src/common/iServer/FindPathService.js",
			"./src/common/iServer/FindServiceAreasService.js",
			"./src/common/iServer/FindTSPPathsService.js",
			"./src/common/iServer/UpdateEdgeWeightService.js",
			"./src/common/iServer/UpdateTurnNodeWeightService.js",
			//NetworkAnalyst3D
			"./src/common/iServer/FacilityAnalystSinks3DService.js",
			"./src/common/iServer/FacilityAnalystSources3DService.js",
			"./src/common/iServer/FacilityAnalystTracedown3DService.js",
			"./src/common/iServer/FacilityAnalystTraceup3DService.js",
			"./src/common/iServer/FacilityAnalystUpstream3DService.js",
			//TrafficTransferAnalyst
			"./src/common/iServer/StopQueryService.js",
			"./src/common/iServer/TransferPathService.js",
			"./src/common/iServer/TransferSolutionService.js",
			//SpatialAnalyst
			"./src/common/iServer/AreaSolarRadiationService.js",
			"./src/common/iServer/BufferAnalystService.js",
			"./src/common/iServer/DensityAnalystService.js",
			"./src/common/iServer/GenerateSpatialDataService.js",
			"./src/common/iServer/GeoRelationAnalystService.js",
			"./src/common/iServer/InterpolationAnalystService.js",
			"./src/common/iServer/MathExpressionAnalysisService.js",
			"./src/common/iServer/OverlayAnalystService.js",
			"./src/common/iServer/RouteCalculateMeasureService.js",
			"./src/common/iServer/RouteLocatorService.js",
			"./src/common/iServer/SurfaceAnalystService.js",
			"./src/common/iServer/TerrainCurvatureCalculationService.js",
			"./src/common/iServer/ThiessenAnalystService.js",
			"./src/common/iServer/GeometryBatchAnalystService.js",
			//ProcessingService
			"./src/common/iServer/BuffersAnalystJobsService",
			"./src/common/iServer/KernelDensityJobsService.js",
			"./src/common/iServer/OverlayGeoJobsService.js",
			"./src/common/iServer/SingleObjectQueryJobsService.js",
			"./src/common/iServer/SummaryMeshJobsService.js",
			"./src/common/iServer/SummaryRegionJobsService.js",
			"./src/common/iServer/TopologyValidatorJobsService",
			"./src/common/iServer/VectorClipJobsService.js",
			"./src/common/iServer/SummaryAttributesJobsService.js",
			//AddressService
			"./src/common/iServer/AddressMatchService.js",
			//DataFlowService
			"./src/common/iServer/DataFlowService.js"
		],
		"graph": [
			"./src/common/overlay/Bar.js",
			"./src/common/overlay/Bar3D.js",
			"./src/common/overlay/Circle.js",
			"./src/common/overlay/Line.js",
			"./src/common/overlay/Pie.js",
			"./src/common/overlay/Point.js",
			"./src/common/overlay/Ring.js"
		]

	},

	"openlayers": {

		"Mapping": {
			"title": "地图",
			"description": "基础地图模块",
			"description_en": "Basic map module",

			"RESTMAP": {
				"name": "iServer 地图图层",
				"src": ["./src/openlayers/mapping/TileSuperMapRest.js",
					"./src/openlayers/mapping/ImageSuperMapRest.js"
				],
				"modules": [{
					"name": "ol.source.TileSuperMapRest",
					"des": "iServer tileImage 地图",
					"des_en": "iServer tileImage resources tile layer"
				}, {
					"name": "ol.source.ImageSuperMapRest",
					"des": "iServer image 地图",
					"des_en": "iServer image resources tile layer"
				}]
			},

			"Baidu": {
				// "name": "百度图层",
				// "src": ['./src/openlayers/mapping/BaiduMap.js'],
				"modules": [{
					"name": "ol.source.BaiduMap",
					"des": "百度地图",
					// "des_en": "Baidu map tile layer"
				}]
			},
			"Tianditu": {
				"name": "天地图图层",
				"src": ['./src/openlayers/mapping/Tianditu.js'],
				"modules": [{
					"name": "ol.source.Tianditu",
					"des": "天地图",
					"des_en": "Tianditu map tile layer"
				}]
			},
			"SuperMapCloud": {
				"name": "超图云图层",
				"src": ['./src/openlayers/mapping/SuperMapCloud.js'],
				"modules": [{
					"name": "ol.source.SuperMapCloud",
					"des": "超图云地图",
					"des_en": "SuperMap cloud map tile layer"
				}]
			},
			"iPortal": {
				"name": "iPortal webmap",
				"src": ["./src/openlayers/mapping/WebMap.js"],
				"modules": [{
					"name": "ol.supermap.WebMap",
					"des": "iPortal、Online 地图",
					"des_en": "SuperMap iPortal and Online tile layer"
				}]
			}
		},
		"Services": {
			"title": "服务",
			"description": "服务模块",
			"description_en": "Service module",

			"Map": {
				"name": "地图服务",
				"src": [
					"./src/openlayers/services/MapService.js",
					"./src/openlayers/services/QueryService.js",
					"./src/openlayers/services/LayerInfoService.js",
					"./src/openlayers/services/MeasureService.js",
					"./src/openlayers/services/ChartService.js"
				],
				"modules": [{
					"name": "ol.supermap.MapService",
					"des": "地图信息服务",
					"des_en": "iServer map service"
				}, {
					"name": "ol.supermap.QueryService",
					"des": "地图查询服务",
					"des_en": "iServer map query service"
				}, {
					"name": "ol.supermap.LayerInfoService",
					"des": "图层信息服务",
					"des_en": "iServer layer information service"
				}, {
					"name": "ol.supermap.MeasureService",
					"des": "测量服务",
					"des_en": "iServer measure service"
				}, {
					"name": "ol.supermap.ChartService",
					"des": "海图服务",
					"des_en": "iServer chart service"
				}]
			},
			"Data": {
				"name": "数据服务",
				"src": [
					"./src/openlayers/services/FeatureService.js",
					"./src/openlayers/services/FieldService.js",
					"./src/openlayers/services/GridCellInfosService.js"
				],
				"modules": [{
					"name": "ol.supermap.FeatureService",
					"des": "数据集服务",
					"des_en": "iServer feature service"
				}, {
					"name": "ol.supermap.FieldService",
					"des": "字段服务",
					"des_en": "iServer field service"
				}, {
					"name": "ol.supermap.GridCellInfosService",
					"des": "数据栅格查询服务",
					"des_en": "iServer data grid cell information service"
				}]
			},
			"Theme": {
				"name": "服务器专题图服务",
				"src": [
					"./src/openlayers/services/ThemeService.js"
				],
				"modules": [{
					"name": "ol.supermap.ThemeService",
					"des": "专题图服务",
					"des_en": "iServer thematic service"
				}]
			},
			"NetworkAnalyst": {
				"name": "网络分析服务",
				"src": [
					"./src/openlayers/services/NetworkAnalystService.js"
				],
				"modules": [{
					"name": "ol.supermap.NetworkAnalystService",
					"des": "网络分析服务",
					"des_en": "iServer network analyst service"
				}]
			},
			"NetworkAnalyst3D": {
				"name": "3D网络分析服务",
				"src": [
					"./src/openlayers/services/NetworkAnalyst3DService.js"
				],
				"modules": [{
					"name": "ol.supermap.NetworkAnalyst3DService",
					"des": "3D 网络分析服务",
					"des_en": "iServer 3D network analyst service"
				}]
			},
			"SpatialAnalyst": {
				"name": "空间分析服务",
				"src": [
					"./src/openlayers/services/SpatialAnalystService.js"
				],
				"modules": [{
					"name": "ol.supermap.SpatialAnalystService",
					"des": "空间分析服务",
					"des_en": "iServer spatial analyst service"
				}]
			},
			"TrafficTransferAnalyst": {
				"name": "交通换乘分析服务",
				"src": [
					"./src/openlayers/services/TrafficTransferAnalystService.js"
				],
				"modules": [{
					"name": "ol.supermap.TrafficTransferAnalystService",
					"des": "交通换乘服务",
					"des_en": "iServer traffic transfer analyst service"
				}]
			},
			"iPortal": {
				"name": "iPortal服务",
				"src": [
					"./src/common/iPortal/iPortal.js"
				],
				"modules": [{
					"name": "SuperMap.iPortal",
					"des": "iPortal 服务",
					"des_en": "SuperMap iPortal service"
				}]
			},
			"Online": {
				"name": "Online服务",
				"src": [
					"./src/common/online/Online.js"
				],
				"modules": [{
					"name": "SuperMap.Online",
					"des": "Online 服务",
					"des_en": "SuperMap Online service"
				}]
			},
			"iManager": {
				"name": "iManager服务",
				"src": [
					"./src/common/iManager/iManager.js"
				],
				"modules": [{
					"name": "SuperMap.iManager",
					"des": "iManager 服务",
					"des_en": "SuperMap iManager service"
				}]
			},
			"ProcessingService": {
				"name": "分布式分析服务",
				"src": [
					"./src/openlayers/services/ProcessingService.js"
				],
				"modules": [{
					"name": "ol.supermap.ProcessingService",
					"des": "分布式分析服务",
					"des_en": "iServer distributed analyst service"
				}]
			},
			"AddressMatch": {
				"name": "地址匹配服务",
				"src": [
					"./src/openlayers/services/AddressMatchService.js"
				],
				"modules": [{
					"name": "ol.supermap.AddressMatchService",
					"des": "地址匹配服务",
					"des_en": "iServer address match service"
				}]
			},
			"ElasticSearch": {
				"name": "ElasticSearch",
				"src": [
					"./src/common/control/TimeFlowControl.js",
					"./src/common/thirdparty/elasticsearch/ElasticSearch.js"
				],
				"modules": [{
					"name": "SuperMap.ElasticSearch",
					"des": "ElasticSearch 服务",
					"des_en": "ElasticSearch service"
				}]
			},
			"DataFlow": {
				"name": "数据流服务",
				"src": [
					"./src/openlayers/services/DataFlowService.js",
					"./src/openlayers/overlay/DataFlow.js"
				],
				"modules": [{
					"name": "ol.supermap.DataFlowService",
					"des": "数据流服务",
					"des_en": "iServer data flow service"
				}, {
					"name": "ol.source.DataFlow",
					"des": "数据流源",
					"des_en": "iServer data flow layer"
				}]
			}
		},
		"Overlay": {
			"title": "可视化",
			"description": "可视化与计算模块",
			"description_en": "Visualization and calculation module",

			"HeatMap": {
				"name": "热力图图层源",
				"src": [
					"./src/openlayers/overlay/HeatMap.js"
				],
				"modules": [{
					"name": "ol.source.HeatMap",
					"des": "热力图图层源",
					"des_en": "Heatmap source"
				}]
			},
			"Graphic": {
				"name": "高效率点图层源",
				"src": [
					"./src/openlayers/overlay/Graphic.js",
					"./src/openlayers/overlay/graphic/CloverShape.js"
				],
				"modules": [{
					"name": "ol.source.Graphic",
					"des": "高效率点图层源",
					"des_en": "High efficiency point source"
				}, {
					"name": "ol.style.CloverShape ",
					"des": "高效率点图层源三叶草风格",
					"des_en": "Clover style of graphic source"
				}]
			},
			"VectorTile": {
				"name": "矢量瓦片图层源",
				"src": [
					"./src/openlayers/overlay/VectorTileSuperMapRest.js",
					"./src/openlayers/overlay/vectortile/MapboxStyles.js",
					"./src/openlayers/overlay/vectortile/VectorTileStyles.js"
				],
				"modules": [{
					"name": "ol.source.VectorTileSuperMapRest",
					"des": "矢量瓦片图层源",
					"des_en": "Vector tile source"
				}, {
					"name": "ol.supermap.MapboxStyles",
					"des": "Mapbox 矢量瓦片风格",
					"des_en": "Mapbox vector tile style"
				}, {
					"name": "ol.supermap.VectorTileStyles",
					"des": "矢量瓦片风格",
					"des_en": "Vector tile style"
				}]
			},
			"Theme": {
				"name": "专题图图层源",
				"src": [
					"./src/openlayers/overlay/Unique.js",
					"./src/openlayers/overlay/Range.js",
					"./src/openlayers/overlay/RankSymbol.js",
					"./src/openlayers/overlay/Graph.js",
					"./src/openlayers/overlay/Label.js"
				],
				"modules": [{
					"name": "ol.source.Unique",
					"des": "单值专题图图层源",
					"des_en": "Unique thematic map source"
				}, {
					"name": "ol.source.RankSymbol",
					"des": "符号等级专题图图层源",
					"des_en": "Rank symbol thematic map source"
				}, {
					"name": "ol.source.Range",
					"des": "分段专题图图层源",
					"des_en": "Range thematic map source"
				}, {
					"name": "ol.source.Graph",
					"des": "统计专题图图层源",
					"des_en": "Statistical thematic map source"
				}, {
					"name": "ol.source.Label",
					"des": "标签专题图图层源",
					"des_en": "Label thematic map source"
				}]
			},
			"MapV": {
				"name": "MapV source",
				"src": [
					"./src/openlayers/overlay/Mapv.js"
				],
				"modules": [{
					"name": "ol.source.Mapv",
					"des": "MapV 图层源",
					"des_en": "MapV source"
				}]
			},
			"Turf": {
				"name": "Turf source",
				"src": [
					"./src/openlayers/overlay/Turf.js"
				],
				"modules": [{
					"name": "ol.source.Turf",
					"des": "Turf 图层源",
					"des_en": "Turf source"
				}]
			}
		},
		"Control": {
			"title": "控件",
			"description": "功能控件模块",
			"description_en": "Control module",

			"ChangeTileVersion": {
				"name": "多版本缓存切换",
				"src": [
					"./src/openlayers/control/ChangeTileVersion.js"
				],
				"modules": [{
					"name": "ol.supermap.control.ChangeTileVersion",
					"des": "瓦片版本切换控件",
					"des_en": "Tile version switch control"
				}]
			},
			"Logo": {
				"name": "logo控件",
				"src": [
					"./src/openlayers/control/Logo.js"
				],
				"modules": [{
					"name": "ol.supermap.control.Logo",
					"des": "Logo 控件",
					"des_en": "Logo control"
				}]
			}
		}
	},

	"Documentation": {
		"Analysis": {
			"title": "分析",
			"description": "分析",
			"description_en": "分析",
			"LimitBody": {
				"name": "限高体类",
				"src": ["../docs/Documentation/LimitBody.html"],
				"modules": [{
					"name": "LimitBody",
					"des": "限高体类",
					"des_en": "LimitBody"
				}]
			},
			"MultiViewShed3D": {
				"name": "多可视域分析类",
				"src": ["../docs/Documentation/MultiViewShed3D.html"],
				"modules": [{
					"name": "MultiViewShed3D",
					"des": "多可视域分析类",
					"des_en": "MultiViewShed3D"
				}]
			},
			"Profile": {
				"name": "剖面分析类",
				"src": ["../docs/Documentation/Profile.html"],
				"modules": [{
					"name": "Profile",
					"des": "剖面分析类",
					"des_en": "Profile"
				}]
			},
			"ProjectionImage": {
				"name": "视频投放类",
				"src": ["../docs/Documentation/ProjectionImage.html"],
				"modules": [{
					"name": "ProjectionImage",
					"des": "视频投放类",
					"des_en": "ProjectionImage"
				}]
			},
			"ShadowQueryPoints": {
				"name": "阴影率分析类",
				"src": ["../docs/Documentation/ShadowQueryPoints.html"],
				"modules": [{
					"name": "ShadowQueryPoints",
					"des": "阴影率分析类",
					"des_en": "ShadowQueryPoints"
				}]
			},
			"Sightline": {
				"name": "通视分析类",
				"src": ["../docs/Documentation/Sightline.html"],
				"modules": [{
					"name": "Sightline",
					"des": "通视分析类",
					"des_en": "Sightline"
				}]
			},
			"Skyline": {
				"name": "天际线分析类",
				"src": ["../docs/Documentation/Skyline.html"],
				"modules": [{
					"name": "Skyline",
					"des": "天际线分析类",
					"des_en": "Skyline"
				}]
			},
			"SpatialQuery3D": {
				"name": "GPU空间分析类",
				"src": ["../docs/Documentation/SpatialQuery3D.html"],
				"modules": [{
					"name": "SpatialQuery3D",
					"des": "GPU空间分析类",
					"des_en": "SpatialQuery3D"
				}]
			},
			"ViewDome": {
				"name": "开敞度分析类",
				"src": ["../docs/Documentation/ViewDome.html"],
				"modules": [{
					"name": "ViewDome",
					"des": "开敞度分析类",
					"des_en": "ViewDome"
				}]
			},
			"ViewDomeType": {
				"name": "开敞度显示类型 ",
				"src": ["../docs/Documentation/ViewDomeType.html"],
				"modules": [{
					"name": "ViewDomeType",
					"des": "开敞度显示类型",
					"des_en": "ViewDomeType"
				}]
			},
			"ViewShed3D": {
				"name": "可视域分析类 ",
				"src": ["../docs/Documentation/ViewShed3D.html"],
				"modules": [{
					"name": "ViewShed3D",
					"des": "可视域分析类 ",
					"des_en": "ViewShed3D"
				}]
			}		
		},	
		"Core": {
			"title": "核心",
			"description": "核心模块",
			"description_en": "Core module",
			"ArcType": {
				"name": "弧线类型类",
				"src": [
					"../docs/Documentation/ArcType.html"
				],
				"modules": [{
					"name": "ArcType",
					"des": "弧线类型类",
					"des_en": "ArcType"
				}]
			},
			"AssociativeArray": {
				"name": "密钥数值集合类",
				"src": [
					"../docs/Documentation/AssociativeArray.html"
				],
				"modules": [{
					"name": "AssociativeArray",
					"des": "密钥数值集合类",
					"des_en": "AssociativeArray"
				}]
			},
			"AxisAlignedBoundingBox": {
				"name": "密钥数值集合类",
				"src": [
					"../docs/Documentation/AxisAlignedBoundingBox.html"
				],
				"modules": [{
					"name": "AxisAlignedBoundingBox",
					"des": "密钥数值集合类",
					"des_en": "AxisAlignedBoundingBox"
				}]
			},
			"barycentricCoordinates": {
				"name": "点相对于三角形的重心坐标类",
				"src": [
					"../docs/Documentation/barycentricCoordinates.html"
				],
				"modules": [{
					"name": "barycentricCoordinates",
					"des": "点相对于三角形的重心坐标类",
					"des_en": "barycentricCoordinates"
				}]
			},
			"binarySearch": {
				"name": "二进制检索类",
				"src": [
					"../docs/Documentation/binarySearch.html"
				],
				"modules": [{
					"name": "binarySearch",
					"des": "二进制检索类",
					"des_en": "binarySearch"
				}]
			},
			"BingMapsApi": {
				"name": "BingMaps API",
				"src": [
					"../docs/Documentation/BingMapsApi.html"
				],
				"modules": [{
					"name": "BingMapsApi",
					"des": "BingMaps API类",
					"des_en": "BingMapsApi"
				}]
			},
			"BingMapsGeocoderService": {
				"name": "BingMap地理编码服务类",
				"src": [
					"../docs/Documentation/BingMapsGeocoderService.html"
				],
				"modules": [{
					"name": "BingMapsGeocoderService",
					"des": "BingMap地理编码服务类",
					"des_en": "BingMapsGeocoderService"
				}]
			},
			"BoundingRectangle": {
				"name": "边界矩形类",
				"src": [
					"../docs/Documentation/BoundingRectangle.html"
				],
				"modules": [{
					"name": "BoundingRectangle",
					"des": "边界矩形类",
					"des_en": "BoundingRectangle"
				}]
			},
			"BoundingSphere": {
				"name": "边界球体类",
				"src": [
					"../docs/Documentation/BoundingSphere.html"
				],
				"modules": [{
					"name": "BoundingSphere",
					"des": "边界球体类",
					"des_en": "BoundingSphere"
				}]
			},
			"BoxGeometry": {
				"name": "立方体类",
				"src": [
					"../docs/Documentation/BoxGeometry.html"
				],
				"modules": [{
					"name": "BoxGeometry",
					"des": "立方体类",
					"des_en": "BoxGeometry"
				}]
			},
			"BoxOutlineGeometry": {
				"name": "立方体轮廓类",
				"src": [
					"../docs/Documentation/BoxOutlineGeometry.html"
				],
				"modules": [{
					"name": "BoxOutlineGeometry",
					"des": "立方体轮廓类",
					"des_en": "BoxOutlineGeometry"
				}]
			},
			"cancelAnimationFrame": {
				"name": "取消动画帧",
				"src": [
					"../docs/Documentation/cancelAnimationFrame.html"
				],
				"modules": [{
					"name": "cancelAnimationFrame",
					"des": "取消动画帧",
					"des_en": "cancelAnimationFrame"
				}]
			},
			"Cartesian2": {
				"name": "二维笛卡尔坐标点类",
				"src": [
					"../docs/Documentation/Cartesian2.html"
				],
				"modules": [{
					"name": "Cartesian2",
					"des": "二维笛卡尔坐标点类",
					"des_en": "Cartesian2"
				}]
			},
			"Cartesian3": {
				"name": "三维笛卡尔坐标点类",
				"src": [
					"../docs/Documentation/Cartesian3.html"
				],
				"modules": [{
					"name": "Cartesian3",
					"des": "三维笛卡尔坐标点类",
					"des_en": "Cartesian3"
				}]
			},
			"Cartesian4": {
				"name": "四维笛卡尔坐标点类",
				"src": [
					"../docs/Documentation/Cartesian4.html"
				],
				"modules": [{
					"name": "Cartesian4",
					"des": "四维笛卡尔坐标点类",
					"des_en": "Cartesian4"
				}]
			},
			"Cartographic": {
				"name": "制图类",
				"src": [
					"../docs/Documentation/Cartographic.html"
				],
				"modules": [{
					"name": "Cartographic",
					"des": "制图类",
					"des_en": "Cartographic"
				}]
			},
			"CartographicGeocoderService": {
				"name": "制图的地理编码服务类",
				"src": [
					"../docs/Documentation/CartographicGeocoderService.html"
				],
				"modules": [{
					"name": "CartographicGeocoderService",
					"des": "制图的地理编码服务类",
					"des_en": "CartographicGeocoderService"
				}]
			},
			"CatmullRomSpline": {
				"name": "立方样条曲线类",
				"src": [
					"../docs/Documentation/CatmullRomSpline.html"
				],
				"modules": [{
					"name": "CatmullRomSpline",
					"des": "立方样条曲线类",
					"des_en": "CatmullRomSpline"
				}]
			},
			"CircleGeometry": {
				"name": "椭圆体类",
				"src": [
					"../docs/Documentation/CircleGeometry.html"
				],
				"modules": [{
					"name": "CircleGeometry",
					"des": "椭圆体类",
					"des_en": "CircleGeometry"
				}]
			},
			"CircleOutlineGeometry": {
				"name": "椭圆体轮廓类",
				"src": [
					"../docs/Documentation/CircleOutlineGeometry.html"
				],
				"modules": [{
					"name": "CircleOutlineGeometry",
					"des": "椭圆体轮廓类",
					"des_en": "CircleOutlineGeometry"
				}]
			},
			"Clock": {
				"name": "时钟类",
				"src": [
					"../docs/Documentation/Clock.html"
				],
				"modules": [{
					"name": "Clock",
					"des": "时钟类",
					"des_en": "Clock"
				}]
			},
			"ClockRange": {
				"name": "时间范围类",
				"src": [
					"../docs/Documentation/ClockRange.html"
				],
				"modules": [{
					"name": "ClockRange",
					"des": "时间范围类",
					"des_en": "ClockRange"
				}]
			},
			"ClockStep": {
				"name": "时钟步长类",
				"src": [
					"../docs/Documentation/ClockStep.html"
				],
				"modules": [{
					"name": "ClockStep",
					"des": "时钟步长类",
					"des_en": "ClockStep"
				}]
			},
			"clone": {
				"name": "克隆对象类",
				"src": [
					"../docs/Documentation/clone.html"
				],
				"modules": [{
					"name": "clone",
					"des": "克隆对象类",
					"des_en": "clone"
				}]
			},
			"ColorTable": {
				"name": "颜色表类",
				"src": [
					"../docs/Documentation/ColorTable.html"
				],
				"modules": [{
					"name": "ColorTable",
					"des": "颜色表类",
					"des_en": "ColorTable"
				}]
			},
			"combine": {
				"name": "合并对象类",
				"src": [
					"../docs/Documentation/combine.html"
				],
				"modules": [{
					"name": "combine",
					"des": "合并对象类",
					"des_en": "combine"
				}]
			},
			"ComponentDatatype": {
				"name": "组件数据类",
				"src": [
					"../docs/Documentation/ComponentDatatype.html"
				],
				"modules": [{
					"name": "ComponentDatatype",
					"des": "组件数据类",
					"des_en": "ComponentDatatype"
				}]
			},
			"ContextType": {
				"name": "初始化上下文类",
				"src": [
					"../docs/Documentation/ContextType.html"
				],
				"modules": [{
					"name": "ContextType",
					"des": "初始化上下文类",
					"des_en": "ContextType"
				}]
			},
			"CornerType": {
				"name": "边角样式类",
				"src": [
					"../docs/Documentation/CornerType.html"
				],
				"modules": [{
					"name": "CornerType",
					"des": "边角样式类",
					"des_en": "CornerType"
				}]
			},
			"CorridorGeometry": {
				"name": "廊道几何类",
				"src": [
					"../docs/Documentation/CorridorGeometry.html"
				],
				"modules": [{
					"name": "CorridorGeometry",
					"des": "廊道几何类",
					"des_en": "CorridorGeometry"
				}]
			},
			"CorridorOutlineGeometry": {
				"name": "廊道几何轮廓类",
				"src": [
					"../docs/Documentation/CorridorOutlineGeometry.html"
				],
				"modules": [{
					"name": "CorridorOutlineGeometry",
					"des": "廊道几何轮廓类",
					"des_en": "CorridorOutlineGeometry"
				}]
			},
			"createGuid": {
				"name": "创建用户名类",
				"src": [
					"../docs/Documentation/createGuid.html"
				],
				"modules": [{
					"name": "createGuid",
					"des": "创建用户名类",
					"des_en": "createGuid"
				}]
			},
			"Credential": {
				"name": "SuperMap地图服务安全验证类",
				"src": [
					"../docs/Documentation/Credential.html"
				],
				"modules": [{
					"name": "Credential",
					"des": "SuperMap地图服务安全验证类",
					"des_en": "Credential"
				}]
			},
			"CredentialType": {
				"name": "SuperMap地图服务密钥类",
				"src": [
					"../docs/Documentation/CredentialType.html"
				],
				"modules": [{
					"name": "CredentialType",
					"des": "SuperMap地图服务密钥类",
					"des_en": "CredentialType"
				}]
			},
			"CubicRealPolynomial": {
				"name": "三阶多项式函数类",
				"src": [
					"../docs/Documentation/CubicRealPolynomial.html"
				],
				"modules": [{
					"name": "CubicRealPolynomial",
					"des": "三阶多项式函数类",
					"des_en": "CubicRealPolynomial"
				}]
			},
			"CustomProjection": {
				"name": "自定义投影类",
				"src": [
					"../docs/Documentation/CustomProjection.html"
				],
				"modules": [{
					"name": "CustomProjection",
					"des": "自定义投影类",
					"des_en": "CustomProjection"
				}]
			},
			"CylinderGeometry": {
				"name": "圆柱体类",
				"src": [
					"../docs/Documentation/CylinderGeometry.html"
				],
				"modules": [{
					"name": "CylinderGeometry",
					"des": "圆柱体类",
					"des_en": "CylinderGeometry"
				}]
			},
			"CylinderOutlineGeometry": {
				"name": "圆柱体轮廓类",
				"src": [
					"../docs/Documentation/CylinderOutlineGeometry.html"
				],
				"modules": [{
					"name": "CylinderOutlineGeometry",
					"des": "圆柱体轮廓类",
					"des_en": "CylinderOutlineGeometry"
				}]
			},
			"DefaultProxy": {
				"name": "代理类",
				"src": [
					"../docs/Documentation/DefaultProxy.html"
				],
				"modules": [{
					"name": "DefaultProxy",
					"des": "代理类",
					"des_en": "DefaultProxy"
				}]
			},
			"defaultValue": {
				"name": "默认值类",
				"src": [
					"../docs/Documentation/defaultValue.html"
				],
				"modules": [{
					"name": "defaultValue",
					"des": "默认值类",
					"des_en": "defaultValue"
				}]
			},
			"defined": {
				"name": "定义对象类",
				"src": [
					"../docs/Documentation/defined.html"
				],
				"modules": [{
					"name": "defined",
					"des": "定义对象类",
					"des_en": "defined"
				}]
			},
			"destroyObject": {
				"name": "销毁对象类",
				"src": [
					"../docs/Documentation/destroyObject.html"
				],
				"modules": [{
					"name": "destroyObject",
					"des": "销毁对象类",
					"des_en": "destroyObject"
				}]
			},
			"DeveloperError": {
				"name": "抛异常对象类",
				"src": [
					"../docs/Documentation/DeveloperError.html"
				],
				"modules": [{
					"name": "DeveloperError",
					"des": "抛异常对象类",
					"des_en": "DeveloperError"
				}]
			},
			"DistanceDisplayCondition": {
				"name": "相机的可见距离类",
				"src": [
					"../docs/Documentation/DistanceDisplayCondition.html"
				],
				"modules": [{
					"name": "DistanceDisplayCondition",
					"des": "相机的可见距离类",
					"des_en": "DistanceDisplayCondition"
				}]
			},
			"DistanceDisplayConditionGeometryInstanceAttribute": {
				"name": "相机的可见距离几何实例类",
				"src": [
					"../docs/Documentation/DistanceDisplayConditionGeometryInstanceAttribute.html"
				],
				"modules": [{
					"name": "DistanceDisplayConditionGeometryInstanceAttribute",
					"des": "相机的可见距离几何实例类",
					"des_en": "DistanceDisplayConditionGeometryInstanceAttribute"
				}]
			},
			"DistanceDisplayConditionGeometryInstanceAttribute": {
				"name": "相机的可见距离几何实例类",
				"src": [
					"../docs/Documentation/DistanceDisplayConditionGeometryInstanceAttribute.html"
				],
				"modules": [{
					"name": "DistanceDisplayConditionGeometryInstanceAttribute",
					"des": "相机的可见距离几何实例类",
					"des_en": "DistanceDisplayConditionGeometryInstanceAttribute"
				}]
			},
			"EasingFunction": {
				"name": "缓动动画函数类",
				"src": [
					"../docs/Documentation/EasingFunction.html"
				],
				"modules": [{
					"name": "EasingFunction",
					"des": "缓动动效动画函数类",
					"des_en": "EasingFunction"
				}]
			},
			"EllipseGeometry": {
				"name": "椭圆体几何类",
				"src": [
					"../docs/Documentation/EllipseGeometry.html"
				],
				"modules": [{
					"name": "EllipseGeometry",
					"des": "椭圆体几何类",
					"des_en": "EllipseGeometry"
				}]
			},
			"EllipseOutlineGeometry": {
				"name": "椭圆体几何轮廓类",
				"src": [
					"../docs/Documentation/EllipseOutlineGeometry.html"
				],
				"modules": [{
					"name": "EllipseOutlineGeometry",
					"des": "椭圆体几何轮廓类",
					"des_en": "EllipseOutlineGeometry"
				}]
			},
			"Ellipsoid": {
				"name": "椭球体类",
				"src": [
					"../docs/Documentation/Ellipsoid.html"
				],
				"modules": [{
					"name": "Ellipsoid",
					"des": "椭球体类",
					"des_en": "Ellipsoid"
				}]
			},
			"EllipsoidGeodesic": {
				"name": "椭球体测地线类",
				"src": [
					"../docs/Documentation/EllipsoidGeodesic.html"
				],
				"modules": [{
					"name": "EllipsoidGeodesic",
					"des": "椭球体测地线类",
					"des_en": "EllipsoidGeodesic"
				}]
			},
			"EllipsoidGeometry": {
				"name": "椭球体几何类",
				"src": [
					"../docs/Documentation/EllipsoidGeometry.html"
				],
				"modules": [{
					"name": "EllipsoidGeometry",
					"des": "椭球体几何类",
					"des_en": "EllipsoidGeometry"
				}]
			},
			"EllipsoidOutlineGeometry": {
				"name": "椭球体几何轮廓类",
				"src": [
					"../docs/Documentation/EllipsoidOutlineGeometry.html"
				],
				"modules": [{
					"name": "EllipsoidOutlineGeometry",
					"des": "椭球体几何轮廓类",
					"des_en": "EllipsoidOutlineGeometry"
				}]
			},
			"EllipsoidTangentPlane": {
				"name": "椭球体切面类",
				"src": [
					"../docs/Documentation/EllipsoidTangentPlane.html"
				],
				"modules": [{
					"name": "EllipsoidRhumbLine",
					"des": "椭球体切面类",
					"des_en": "EllipsoidTangentPlane"
				}]
			},
			"EllipsoidTangentPlane": {
				"name": "椭球体切面类",
				"src": [
					"../docs/Documentation/EllipsoidTangentPlane.html"
				],
				"modules": [{
					"name": "EllipsoidRhumbLine",
					"des": "椭球体切面类",
					"des_en": "EllipsoidTangentPlane"
				}]
			},
			"EllipsoidTerrainProvider": {
				"name": "高度为0的地形图层类",
				"src": [
					"../docs/Documentation/EllipsoidTerrainProvider.html"
				],
				"modules": [{
					"name": "EllipsoidTerrainProvider",
					"des": "高度为0的地形图层类",
					"des_en": "EllipsoidTerrainProvider"
				}]
			},
			"Event": {
				"name": "事件类",
				"src": [
					"../docs/Documentation/Event.html"
				],
				"modules": [{
					"name": "Event",
					"des": "事件类",
					"des_en": "Event"
				}]
			},
			"EventHelper": {
				"name": "事件帮助类",
				"src": [
					"../docs/Documentation/EventHelper.html"
				],
				"modules": [{
					"name": "EventHelper",
					"des": "事件帮助类",
					"des_en": "EventHelper"
				}]
			},
			"ExtrapolationType": {
				"name": "插值类",
				"src": [
					"../docs/Documentation/ExtrapolationType.html"
				],
				"modules": [{
					"name": "ExtrapolationType",
					"des": "插值类",
					"des_en": "ExtrapolationType"
				}]
			},
			"FeatureDetection": {
				"name": "查询特征值类",
				"src": [
					"../docs/Documentation/FeatureDetection.html"
				],
				"modules": [{
					"name": "FeatureDetection",
					"des": "查询特征值类",
					"des_en": "FeatureDetection"
				}]
			},
			"formatError": {
				"name": "格式化错误对象类",
				"src": [
					"../docs/Documentation/formatError.html"
				],
				"modules": [{
					"name": "formatError",
					"des": "格式化错误对象类",
					"des_en": "formatError"
				}]
			},
			"Fullscreen": {
				"name": "全屏模式类",
				"src": [
					"../docs/Documentation/Fullscreen.html"
				],
				"modules": [{
					"name": "Fullscreen",
					"des": "全屏模式类",
					"des_en": "Fullscreen"
				}]
			},
			"GeocoderService": {
				"name": "外部服务提供地理编码类",
				"src": [
					"../docs/Documentation/GeocoderService.html"
				],
				"modules": [{
					"name": "GeocoderService",
					"des": "外部服务提供地理编码类",
					"des_en": "GeocoderService"
				}]
			},
			"GeographicProjection": {
				"name": "地图投影类",
				"src": [
					"../docs/Documentation/GeographicProjection.html"
				],
				"modules": [{
					"name": "GeographicProjection",
					"des": "地图投影类",
					"des_en": "GeographicProjection"
				}]
			},
			"GeographicTilingScheme": {
				"name": "几何图形切片类",
				"src": [
					"../docs/Documentation/GeographicTilingScheme.html"
				],
				"modules": [{
					"name": "GeographicTilingScheme",
					"des": "几何图形切片类",
					"des_en": "GeographicTilingScheme"
				}]
			},
			"Geometry": {
				"name": "几何图形切片类",
				"src": [
					"../docs/Documentation/Geometry.html"
				],
				"modules": [{
					"name": "Geometry",
					"des": "几何图形类",
					"des_en": "Geometry"
				}]
			},
			"GeometryAttribute": {
				"name": "几何属性类",
				"src": [
					"../docs/Documentation/GeometryAttribute.html"
				],
				"modules": [{
					"name": "GeometryAttribute",
					"des": "几何属性类",
					"des_en": "GeometryAttribute"
				}]
			},
			"GeometryAttributes": {
				"name": "几何图形顶点的属性类",
				"src": [
					"../docs/Documentation/GeometryAttributes.html"
				],
				"modules": [{
					"name": "GeometryAttributes",
					"des": "几何图形顶点的属性类",
					"des_en": "GeometryAttributes"
				}]
			},
			"GeometryInstance": {
				"name": "几何实例化类",
				"src": [
					"../docs/Documentation/GeometryInstance.html"
				],
				"modules": [{
					"name": "GeometryInstance",
					"des": "几何实例化类",
					"des_en": "GeometryInstance"
				}]
			},
			"GeometryInstanceAttribute": {
				"name": "几何属性实例化类",
				"src": [
					"../docs/Documentation/GeometryInstanceAttribute.html"
				],
				"modules": [{
					"name": "GeometryInstanceAttribute",
					"des": "几何属性实例化类",
					"des_en": "GeometryInstanceAttribute"
				}]
			},
			"GeometryPipeline": {
				"name": "几何管道类",
				"src": [
					"../docs/Documentation/GeometryPipeline.html"
				],
				"modules": [{
					"name": "GeometryPipeline",
					"des": "几何管道类",
					"des_en": "GeometryPipeline"
				}]
			},
			"GeometryType": {
				"name": "几何类型类",
				"src": [
					"../docs/Documentation/GeometryType.html"
				],
				"modules": [{
					"name": "GeometryType",
					"des": "几何类型类",
					"des_en": "GeometryType"
				}]
			},
			"getAbsoluteUri": {
				"name": "获取绝对的Uri类",
				"src": [
					"../docs/Documentation/getAbsoluteUri.html"
				],
				"modules": [{
					"name": "getAbsoluteUri",
					"des": "获取绝对的Uri类",
					"des_en": "getAbsoluteUri"
				}]
			},
			"getBaseUri": {
				"name": "获取基本的Uri类",
				"src": [
					"../docs/Documentation/getBaseUri.html"
				],
				"modules": [{
					"name": "getBaseUri",
					"des": "获取基本的Uri类",
					"des_en": "getBaseUri"
				}]
			},
			"getExtensionFromUri": {
				"name": "从Uri获取扩展类",
				"src": [
					"../docs/Documentation/getExtensionFromUri.html"
				],
				"modules": [{
					"name": "getExtensionFromUri",
					"des": "从Uri获取扩展类",
					"des_en": "getExtensionFromUri"
				}]
			},
			"getFilenameFromUri": {
				"name": "从Uri获取文件名类",
				"src": [
					"../docs/Documentation/getFilenameFromUri.html"
				],
				"modules": [{
					"name": "getFilenameFromUri",
					"des": "从Uri获取文件名类",
					"des_en": "getFilenameFromUri"
				}]
			},
			"getImagePixels": {
				"name": "获取图像像素类",
				"src": [
					"../docs/Documentation/getImagePixels.html"
				],
				"modules": [{
					"name": "getImagePixels",
					"des": "获取图像像素类",
					"des_en": "getImagePixels"
				}]
			},
			"getTimestamp": {
				"name": "获取时间戳类",
				"src": [
					"../docs/Documentation/getTimestamp.html"
				],
				"modules": [{
					"name": "getTimestamp",
					"des": "获取时间戳类",
					"des_en": "getTimestamp"
				}]
			},
			"GoogleEarthEnterpriseMetadata": {
				"name": "使用Google Earth提供元数据类",
				"src": [
					"../docs/Documentation/GoogleEarthEnterpriseMetadata.html"
				],
				"modules": [{
					"name": "GoogleEarthEnterpriseMetadata",
					"des": "使用Google Earth提供元数据类",
					"des_en": "GoogleEarthEnterpriseMetadata"
				}]
			},
			"GoogleEarthEnterpriseTerrainData": {
				"name": "使用Google Earth提供地形数据类",
				"src": [
					"../docs/Documentation/GoogleEarthEnterpriseTerrainData.html"
				],
				"modules": [{
					"name": "GoogleEarthEnterpriseTerrainData",
					"des": "使用Google Earth提供地形数据类",
					"des_en": "GoogleEarthEnterpriseTerrainData"
				}]
			},
			"GregorianDate": {
				"name": "公历日期类",
				"src": [
					"../docs/Documentation/GregorianDate.html"
				],
				"modules": [{
					"name": "GregorianDate",
					"des": "公历日期类",
					"des_en": "GregorianDate"
				}]
			},
			"HeadingPitchRange": {
				"name": "方位、俯仰范围类",
				"src": [
					"../docs/Documentation/HeadingPitchRange.html"
				],
				"modules": [{
					"name": "HeadingPitchRange",
					"des": "方位、俯仰范围类",
					"des_en": "HeadingPitchRange"
				}]
			},
			"HeightmapTerrainData": {
				"name": "高程地形数据类",
				"src": [
					"../docs/Documentation/HeightmapTerrainData.html"
				],
				"modules": [{
					"name": "HeightmapTerrainData",
					"des": "高程地形数据类",
					"des_en": "HeightmapTerrainData"
				}]
			},
			"HermitePolynomialApproximation": {
				"name": "执行 Hermite 插值类",
				"src": [
					"../docs/Documentation/HermitePolynomialApproximation.html"
				],
				"modules": [{
					"name": "HermitePolynomialApproximation",
					"des": "执行 Hermite 插值类",
					"des_en": "HermitePolynomialApproximation"
				}]
			},
			"HermiteSpline": {
				"name": "Hermite样条类",
				"src": [
					"../docs/Documentation/HermiteSpline.html"
				],
				"modules": [{
					"name": "HermiteSpline",
					"des": "Hermite样条类",
					"des_en": "HermiteSpline"
				}]
			},
			"HypsometricSetting": {
				"name": "分层设色类",
				"src": [
					"../docs/Documentation/HypsometricSetting.html"
				],
				"modules": [{
					"name": "HypsometricSetting",
					"des": "分层设色类",
					"des_en": "HypsometricSetting"
				}]
			},
			"HypsometricSettingEnum": {
				"name": "分层设色枚举类",
				"src": [
					"../docs/Documentation/HypsometricSettingEnum.html"
				],
				"modules": [{
					"name": "HypsometricSettingEnum",
					"des": "分层设色枚举类",
					"des_en": "HypsometricSettingEnum"
				}]
			},
			"InterpolationAlgorithm": {
				"name": "插值算法类",
				"src": [
					"../docs/Documentation/InterpolationAlgorithm.html"
				],
				"modules": [{
					"name": "InterpolationAlgorithm",
					"des": "插值算法类",
					"des_en": "InterpolationAlgorithm"
				}]
			},
			"Intersect": {
				"name": "对象相对位置类",
				"src": [
					"../docs/Documentation/Intersect.html"
				],
				"modules": [{
					"name": "Intersect",
					"des": "对象相对位置类",
					"des_en": "Intersect"
				}]
			},
			"Intersections2D": {
				"name": "二维交集类",
				"src": [
					"../docs/Documentation/Intersections2D.html"
				],
				"modules": [{
					"name": "Intersections2D",
					"des": "二维交集类",
					"des_en": "Intersections2D"
				}]
			},
			"IntersectionTests": {
				"name": "几何体交集类",
				"src": [
					"../docs/Documentation/IntersectionTests.html"
				],
				"modules": [{
					"name": "IntersectionTests",
					"des": "几何体交集类",
					"des_en": "IntersectionTests"
				}]
			},
			"Interval": {
				"name": "区间类",
				"src": [
					"../docs/Documentation/Interval.html"
				],
				"modules": [{
					"name": "Interval",
					"des": "区间类",
					"des_en": "Interval"
				}]
			},
			"isArray": {
				"name": "判断数组类",
				"src": [
					"../docs/Documentation/isArray.html"
				],
				"modules": [{
					"name": "isArray",
					"des": "判断数组类",
					"des_en": "isArray"
				}]
			},
			"isLeapYear": {
				"name": "判断闰年类",
				"src": [
					"../docs/Documentation/isLeapYear.html"
				],
				"modules": [{
					"name": "isLeapYear",
					"des": "判断闰年类",
					"des_en": "isLeapYear"
				}]
			},
			"Iso8601": {
				"name": "ISO8601支持相关的常量类",
				"src": [
					"../docs/Documentation/Iso8601.html"
				],
				"modules": [{
					"name": "Iso8601",
					"des": "ISO8601支持相关的常量类",
					"des_en": "Iso8601"
				}]
			},
			"JulianDate": {
				"name": "Julian日期类",
				"src": [
					"../docs/Documentation/JulianDate.html"
				],
				"modules": [{
					"name": "JulianDate",
					"des": "Julian日期类",
					"des_en": "JulianDate"
				}]
			},
			"KeyboardEventModifier": {
				"name": "键盘修饰符类",
				"src": [
					"../docs/Documentation/KeyboardEventModifier.html"
				],
				"modules": [{
					"name": "KeyboardEventModifier",
					"des": "键盘修饰符类",
					"des_en": "KeyboardEventModifier"
				}]
			},
			"LagrangePolynomialApproximation": {
				"name": "Lagrange插值类",
				"src": [
					"../docs/Documentation/LagrangePolynomialApproximation.html"
				],
				"modules": [{
					"name": "LagrangePolynomialApproximation",
					"des": "Lagrange插值类",
					"des_en": "LagrangePolynomialApproximation"
				}]
			},
			"LeapSecond": {
				"name": "闰秒类",
				"src": [
					"../docs/Documentation/LeapSecond.html"
				],
				"modules": [{
					"name": "LeapSecond",
					"des": "闰秒类",
					"des_en": "LeapSecond"
				}]
			},
			"LinearApproximation": {
				"name": "线性插值类",
				"src": [
					"../docs/Documentation/LinearApproximation.html"
				],
				"modules": [{
					"name": "LinearApproximation",
					"des": "线性插值类",
					"des_en": "LinearApproximation"
				}]
			},
			"LinearSpline": {
				"name": "分段线性插值类",
				"src": [
					"../docs/Documentation/LinearSpline.html"
				],
				"modules": [{
					"name": "LinearSpline",
					"des": "分段线性插值类",
					"des_en": "LinearSpline"
				}]
			},
			"LineDisplayType": {
				"name": "设置遮挡模式类",
				"src": [
					"../docs/Documentation/LineDisplayType.html"
				],
				"modules": [{
					"name": "LineDisplayType",
					"des": "设置遮挡模式类",
					"des_en": "LineDisplayType"
				}]
			},
			"loadArrayBuffer": {
				"name": "加载数组Buffer类",
				"src": [
					"../docs/Documentation/loadArrayBuffer.html"
				],
				"modules": [{
					"name": "loadArrayBuffer",
					"des": "加载数组Buffer类",
					"des_en": "loadArrayBuffer"
				}]
			},
			"loadBlob": {
				"name": "加载Blob类",
				"src": [
					"../docs/Documentation/loadBlob.html"
				],
				"modules": [{
					"name": "loadBlob",
					"des": "加载Blob类",
					"des_en": "loadBlob"
				}]
			},
			"loadCRN": {
				"name": "加载CRN类",
				"src": [
					"../docs/Documentation/loadCRN.html"
				],
				"modules": [{
					"name": "loadCRN",
					"des": "加载CRN类",
					"des_en": "loadCRN"
				}]
			},
			"loadImage": {
				"name": "加载图片类",
				"src": [
					"../docs/Documentation/loadImage.html"
				],
				"modules": [{
					"name": "loadImage",
					"des": "加载图片类",
					"des_en": "loadImage"
				}]
			},
			"loadImageViaBlob": {
				"name": "通过Blob加载图像类",
				"src": [
					"../docs/Documentation/loadImageViaBlob.html"
				],
				"modules": [{
					"name": "loadImageViaBlob",
					"des": "通过Blob加载图像类",
					"des_en": "loadImageViaBlob"
				}]
			},
			"loadJson": {
				"name": "加载Json类",
				"src": [
					"../docs/Documentation/loadJson.html"
				],
				"modules": [{
					"name": "loadJson",
					"des": "加载Json类",
					"des_en": "loadJson"
				}]
			},
			"loadJsonp": {
				"name": "JSONP请求资源类",
				"src": [
					"../docs/Documentation/loadJsonp.html"
				],
				"modules": [{
					"name": "loadJsonp",
					"des": "JSONP请求资源类",
					"des_en": "loadJsonp"
				}]
			},
			"loadKTX": {
				"name": "加载KTX类",
				"src": [
					"../docs/Documentation/loadKTX.html"
				],
				"modules": [{
					"name": "loadKTX",
					"des": "加载KTX类",
					"des_en": "loadKTX"
				}]
			},
			"loadText": {
				"name": "加载文本类",
				"src": [
					"../docs/Documentation/loadText.html"
				],
				"modules": [{
					"name": "loadText",
					"des": "加载文本类",
					"des_en": "loadText"
				}]
			},
			"loadWithXhr": {
				"name": "加载Xhr类",
				"src": [
					"../docs/Documentation/loadWithXhr.html"
				],
				"modules": [{
					"name": "loadWithXhr",
					"des": "加载Xhr类",
					"des_en": "loadWithXhr"
				}]
			},
			"loadXML": {
				"name": "loadXML类",
				"src": [
					"../docs/Documentation/loadXML.html"
				],
				"modules": [{
					"name": "loadXML",
					"des": "loadXML类",
					"des_en": "lloadXML"
				}]
			},
			"MapProjection": {
				"name": "地图投影类",
				"src": [
					"../docs/Documentation/MapProjection.html"
				],
				"modules": [{
					"name": "MapProjection",
					"des": "地图投影类",
					"des_en": "MapProjection"
				}]
			},
			"Math": {
				"name": "数学函数类",
				"src": [
					"../docs/Documentation/Math.html"
				],
				"modules": [{
					"name": "Math",
					"des": "数学函数类",
					"des_en": "Math"
				}]
			},
			"Matrix2": {
				"name": "2x2 矩阵类",
				"src": [
					"../docs/Documentation/Matrix2.html"
				],
				"modules": [{
					"name": "Matrix2",
					"des": "2x2 矩阵类",
					"des_en": "Matrix2"
				}]
			},
			"Matrix3": {
				"name": "3x3矩阵类",
				"src": [
					"../docs/Documentation/Matrix3.html"
				],
				"modules": [{
					"name": "Matrix3",
					"des": "3x3 矩阵类",
					"des_en": "Matrix3"
				}]
			},
			"Matrix4": {
				"name": "4x4矩阵类",
				"src": [
					"../docs/Documentation/Matrix4.html"
				],
				"modules": [{
					"name": "Matrix4",
					"des": "4x4 矩阵类",
					"des_en": "Matrix4"
				}]
			},
			"mergeSort": {
				"name": "归并排序类",
				"src": [
					"../docs/Documentation/mergeSort.html"
				],
				"modules": [{
					"name": "mergeSort",
					"des": "归并排序类",
					"des_en": "mergeSort"
				}]
			},
			"NearFarScalar": {
				"name": "相机远近距离范围的上下限类",
				"src": [
					"../docs/Documentation/NearFarScalar.html"
				],
				"modules": [{
					"name": "NearFarScalar",
					"des": "相机远近距离范围的上下限类",
					"des_en": "NearFarScalar"
				}]
			},
			"objectToQuery": {
				"name": "查询对象类",
				"src": [
					"../docs/Documentation/objectToQuery.html"
				],
				"modules": [{
					"name": "objectToQuery",
					"des": "查询对象类",
					"des_en": "objectToQuery"
				}]
			},
			"Occluder": {
				"name": "遮挡物类",
				"src": [
					"../docs/Documentation/Occluder.html"
				],
				"modules": [{
					"name": "Occluder",
					"des": "遮挡物类",
					"des_en": "Occluder"
				}]
			},
			"Occluder": {
				"name": "遮挡物类",
				"src": [
					"../docs/Documentation/Occluder.html"
				],
				"modules": [{
					"name": "Occluder",
					"des": "遮挡物类",
					"des_en": "Occluder"
				}]
			},
			"OrientedBoundingBox": {
				"name": "定向包围盒类",
				"src": [
					"../docs/Documentation/OrientedBoundingBox.html"
				],
				"modules": [{
					"name": "OrientedBoundingBox",
					"des": "定向包围盒类",
					"des_en": "OrientedBoundingBox"
				}]
			},
			"OrthographicOffCenterFrustum": {
				"name": "视椎体类",
				"src": [
					"../docs/Documentation/OrthographicOffCenterFrustum.html"
				],
				"modules": [{
					"name": "OrthographicOffCenterFrustum",
					"des": "视椎体类",
					"des_en": "OrthographicOffCenterFrustum"
				}]
			},
			"Packable": {
				"name": "打包元素类",
				"src": [
					"../docs/Documentation/Packable.html"
				],
				"modules": [{
					"name": "Packable",
					"des": "打包元素类",
					"des_en": "Packable"
				}]
			},
			"PackableForInterpolation": {
				"name": "打包插值类",
				"src": [
					"../docs/Documentation/PackableForInterpolation.html"
				],
				"modules": [{
					"name": "PackableForInterpolation",
					"des": "打包插值类",
					"des_en": "PackableForInterpolation"
				}]
			},
			"PackingRequest": {
				"name": "批量请求编码方式类",
				"src": [
					"../docs/Documentation/PackingRequest.html"
				],
				"modules": [{
					"name": "PackingRequest",
					"des": "批量请求编码方式类",
					"des_en": "PackingRequest"
				}]
			},
			"PerspectiveFrustum": {
				"name": "视椎体类",
				"src": [
					"../docs/Documentation/PerspectiveFrustum.html"
				],
				"modules": [{
					"name": "PerspectiveFrustum",
					"des": "视椎体类",
					"des_en": "PerspectiveFrustum"
				}]
			},
			"PerspectiveOffCenterFrustum": {
				"name": "视椎体类",
				"src": [
					"../docs/Documentation/PerspectiveOffCenterFrustum.html"
				],
				"modules": [{
					"name": "PerspectiveOffCenterFrustum",
					"des": "视椎体类",
					"des_en": "PerspectiveOffCenterFrustum"
				}]
			},
			"PinBuilder": {
				"name": "自定义地图标签类",
				"src": [
					"../docs/Documentation/PinBuilder.html"
				],
				"modules": [{
					"name": "PinBuilder",
					"des": "自定义地图标签类",
					"des_en": "PinBuilder"
				}]
			},
			"PixelFormat": {
				"name": "像素格式类",
				"src": [
					"../docs/Documentation/PixelFormat.html"
				],
				"modules": [{
					"name": "PixelFormat",
					"des": "像素格式类",
					"des_en": "PixelFormat"
				}]
			},
			"Plane": {
				"name": "平面类",
				"src": [
					"../docs/Documentation/Plane.html"
				],
				"modules": [{
					"name": "Plane",
					"des": "平面类",
					"des_en": "Plane"
				}]
			},
			"pointInsideTriangle": {
				"name": "确定点是否在三角形内",
				"src": [
					"../docs/Documentation/pointInsideTriangle.html"
				],
				"modules": [{
					"name": "pointInsideTriangle",
					"des": "确定点是否在三角形内",
					"des_en": "pointInsideTriangle"
				}]
			},
			"PolygonGeometry": {
				"name": "多边形几何体类",
				"src": [
					"../docs/Documentation/PolygonGeometry.html"
				],
				"modules": [{
					"name": "PolygonGeometry",
					"des": "多边形几何体类",
					"des_en": "PolygonGeometry"
				}]
			},
			"PolygonHierarchy": {
				"name": "带孔的多边形类",
				"src": [
					"../docs/Documentation/PolygonHierarchy.html"
				],
				"modules": [{
					"name": "PolygonHierarchy",
					"des": "带孔的多边形类",
					"des_en": "PolygonHierarchy"
				}]
			},
			"PolylineVolumeGeometry": {
				"name": "管线几何类",
				"src": [
					"../docs/Documentation/PolylineVolumeGeometry.html"
				],
				"modules": [{
					"name": "PolylineVolumeGeometry",
					"des": "管线几何类",
					"des_en": "PolylineVolumeGeometry"
				}]
			},
			"PolylineVolumeOutlineGeometry": {
				"name": "管线几何轮廓类",
				"src": [
					"../docs/Documentation/PolylineVolumeOutlineGeometry.html"
				],
				"modules": [{
					"name": "PolylineVolumeOutlineGeometry",
					"des": "管线几何轮廓类",
					"des_en": "PolylineVolumeOutlineGeometry"
				}]
			},
			"PrimitiveType": {
				"name": "基本几何类",
				"src": [
					"../docs/Documentation/PrimitiveType.html"
				],
				"modules": [{
					"name": "PrimitiveType",
					"des": "基本几何类",
					"des_en": "PrimitiveType"
				}]
			},
			"ProjectionName": {
				"name": "自定义投影类",
				"src": [
					"../docs/Documentation/ProjectionName.html"
				],
				"modules": [{
					"name": "ProjectionName",
					"des": "自定义投影类",
					"des_en": "ProjectionName"
				}]
			},

			"QuadraticRealPolynomial": {
				"name": "二次方程类",
				"src": [
					"../docs/Documentation/QuadraticRealPolynomial.html"
				],
				"modules": [{
					"name": "QuadraticRealPolynomial",
					"des": "二次方程类",
					"des_en": "QuadraticRealPolynomial"
				}]
			},
			"QuantizedMeshTerrainData": {
				"name": "网格地形类",
				"src": [
					"../docs/Documentation/QuantizedMeshTerrainData.html"
				],
				"modules": [{
					"name": "QuantizedMeshTerrainData",
					"des": "网格地形类",
					"des_en": "QuantizedMeshTerrainData"
				}]
			},
			"QuarticRealPolynomial": {
				"name": "四次方程类",
				"src": [
					"../docs/Documentation/QuarticRealPolynomial.html"
				],
				"modules": [{
					"name": "QuarticRealPolynomial",
					"des": "四次方程类",
					"des_en": "QuarticRealPolynomial"
				}]
			},
			"Quaternion": {
				"name": "四元数类",
				"src": [
					"../docs/Documentation/Quaternion.html"
				],
				"modules": [{
					"name": "Quaternion",
					"des": "四元数类",
					"des_en": "Quaternion"
				}]
			},
			"QuaternionSpline": {
				"name": "四元数样条线类",
				"src": [
					"../docs/Documentation/QuaternionSpline.html"
				],
				"modules": [{
					"name": "QuaternionSpline",
					"des": "四元数样条线类",
					"des_en": "QuaternionSpline"
				}]
			},
			"queryToObject": {
				"name": "查询对象类",
				"src": [
					"../docs/Documentation/queryToObject.html"
				],
				"modules": [{
					"name": "queryToObject",
					"des": "查询对象类",
					"des_en": "queryToObject"
				}]
			},
			"Queue": {
				"name": "队列类",
				"src": [
					"../docs/Documentation/Queue.html"
				],
				"modules": [{
					"name": "Queue",
					"des": "队列类",
					"des_en": "Queue"
				}]
			},
			"Ray": {
				"name": "射线类",
				"src": [
					"../docs/Documentation/Ray.html"
				],
				"modules": [{
					"name": "Ray",
					"des": "射线类",
					"des_en": "Ray"
				}]
			},
			"Rectangle": {
				"name": "矩形类",
				"src": [
					"../docs/Documentation/Rectangle.html"
				],
				"modules": [{
					"name": "Rectangle",
					"des": "矩形类",
					"des_en": "Rectangle"
				}]
			},
			"RectangleGeometry": {
				"name": "矩形几何类",
				"src": [
					"../docs/Documentation/RectangleGeometry.html"
				],
				"modules": [{
					"name": "RectangleGeometry",
					"des": "矩形几何类",
					"des_en": "RectangleGeometry"
				}]
			},
			"RectangleOutlineGeometry": {
				"name": "矩形几何轮廓类",
				"src": [
					"../docs/Documentation/RectangleOutlineGeometry.html"
				],
				"modules": [{
					"name": "RectangleOutlineGeometry",
					"des": "矩形几何轮廓类",
					"des_en": "RectangleOutlineGeometry"
				}]
			},
			"ReferenceFrame": {
				"name": "参考系类",
				"src": [
					"../docs/Documentation/ReferenceFrame.html"
				],
				"modules": [{
					"name": "ReferenceFrame",
					"des": "参考系类",
					"des_en": "ReferenceFrame"
				}]
			},
			"Request": {
				"name": "参考系类",
				"src": [
					"../docs/Documentation/Request.html"
				],
				"modules": [{
					"name": "Request",
					"des": "参考系类",
					"des_en": "Request"
				}]
			},
			"requestAnimationFrame": {
				"name": "动画帧请求类",
				"src": [
					"../docs/Documentation/requestAnimationFrame.html"
				],
				"modules": [{
					"name": "requestAnimationFrame",
					"des": "动画帧请求类",
					"des_en": "requestAnimationFrame"
				}]
			},
			"RequestErrorEvent": {
				"name": "错误请求事件类",
				"src": [
					"../docs/Documentation/RequestErrorEvent.html"
				],
				"modules": [{
					"name": "RequestErrorEvent",
					"des": "错误请求事件类",
					"des_en": "RequestErrorEvent"
				}]
			},
			"RequestState": {
				"name": "请求状态类",
				"src": [
					"../docs/Documentation/RequestState.html"
				],
				"modules": [{
					"name": "RequestState",
					"des": "请求状态类",
					"des_en": "RequestState"
				}]
			},
			"RequestType": {
				"name": "请求类型类",
				"src": [
					"../docs/Documentation/RequestType.html"
				],
				"modules": [{
					"name": "RequestType",
					"des": "请求类型类",
					"des_en": "RequestType"
				}]
			},
			"Resource": {
				"name": "资源类",
				"src": [
					"../docs/Documentation/Resource.html"
				],
				"modules": [{
					"name": "Resource",
					"des": "资源类",
					"des_en": "Resource"
				}]
			},
			"RuntimeError": {
				"name": "运行异常类",
				"src": [
					"../docs/Documentation/RuntimeError.html"
				],
				"modules": [{
					"name": "RuntimeError",
					"des": "运行异常类",
					"des_en": "RuntimeError"
				}]
			},
			"S3MPixelFormat": {
				"name": "S3M纹理像素格式类",
				"src": [
					"../docs/Documentation/S3MPixelFormat.html"
				],
				"modules": [{
					"name": "S3MPixelFormat",
					"des": "S3M纹理像素格式类",
					"des_en": "S3MPixelFormat"
				}]
			},
			"sampleTerrain": {
				"name": "粗略获取地形高度类",
				"src": [
					"../docs/Documentation/sampleTerrain.html"
				],
				"modules": [{
					"name": "sampleTerrain",
					"des": "粗略获取地形高度类",
					"des_en": "sampleTerrain"
				}]
			},
			"sampleTerrainMostDetailed": {
				"name": "精确获取地形高度类",
				"src": [
					"../docs/Documentation/sampleTerrainMostDetailed.html"
				],
				"modules": [{
					"name": "sampleTerrainMostDetailed",
					"des": "精确获取地形高度类",
					"des_en": "sampleTerrainMostDetailed"
				}]
			},
			"ScreenSpaceEventHandler": {
				"name": "处理屏幕空间事件类",
				"src": [
					"../docs/Documentation/ScreenSpaceEventHandler.html"
				],
				"modules": [{
					"name": "ScreenSpaceEventHandler",
					"des": "处理屏幕空间事件类",
					"des_en": "ScreenSpaceEventHandler"
				}]
			},
			"ScreenSpaceEventType": {
				"name": "屏幕空间事件类型类",
				"src": [
					"../docs/Documentation/ScreenSpaceEventType.html"
				],
				"modules": [{
					"name": "ScreenSpaceEventType",
					"des": "屏幕空间事件类型类",
					"des_en": "ScreenSpaceEventType"
				}]
			},
			"SCTTerrainProvider": {
				"name": "SCT地形服务提供者",
				"src": [
					"../docs/Documentation/SCTTerrainProvider.html"
				],
				"modules": [{
					"name": "SCTTerrainProvider",
					"des": "SCT地形服务提供者",
					"des_en": "SCTTerrainProvider"
				}]
			},
			"ShowGeometryInstanceAttribute": {
				"name": "显示几何实例属性类",
				"src": [
					"../docs/Documentation/ShowGeometryInstanceAttribute.html"
				],
				"modules": [{
					"name": "ShowGeometryInstanceAttribute",
					"des": "显示几何实例属性类",
					"des_en": "ShowGeometryInstanceAttribute"
				}]
			},
			"Simon1994PlanetaryPositions": {
				"name": "计算行星位置类",
				"src": [
					"../docs/Documentation/Simon1994PlanetaryPositions.html"
				],
				"modules": [{
					"name": "Simon1994PlanetaryPositions",
					"des": "计算行星位置类",
					"des_en": "Simon1994PlanetaryPositions"
				}]
			},
			"SimplePolylineGeometry": {
				"name": "多段线几何类",
				"src": [
					"../docs/Documentation/SimplePolylineGeometry.html"
				],
				"modules": [{
					"name": "SimplePolylineGeometry",
					"des": "多段线几何类",
					"des_en": "SimplePolylineGeometry"
				}]
			},
			"SlopeSetting": {
				"name": "坡度设置对象类",
				"src": [
					"../docs/Documentation/SlopeSetting.html"
				],
				"modules": [{
					"name": "SlopeSetting",
					"des": "坡度设置对象类",
					"des_en": "SlopeSetting"
				}]
			},
			"SlopeSettingEnum": {
				"name": "坡度坡向分析枚举类",
				"src": [
					"../docs/Documentation/SlopeSettingEnum.html"
				],
				"modules": [{
					"name": "SlopeSettingEnum",
					"des": "坡度坡向分析枚举类",
					"des_en": "SlopeSettingEnum"
				}]
			},
			"SphereGeometry": {
				"name": "球体几何类",
				"src": [
					"../docs/Documentation/SphereGeometry.html"
				],
				"modules": [{
					"name": "SphereGeometry",
					"des": "球体几何类",
					"des_en": "SphereGeometry"
				}]
			},
			"SphereOutlineGeometry": {
				"name": "球体几何轮廓类",
				"src": [
					"../docs/Documentation/SphereOutlineGeometry.html"
				],
				"modules": [{
					"name": "SphereOutlineGeometry",
					"des": "球体几何轮廓类",
					"des_en": "SphereOutlineGeometry"
				}]
			},
			"Spherical": {
				"name": "球体几何轮廓类",
				"src": [
					"../docs/Documentation/Spherical.html"
				],
				"modules": [{
					"name": "Spherical",
					"des": "球体几何轮廓类",
					"des_en": "Spherical"
				}]
			},
			"Spline": {
				"name": "样条曲线类",
				"src": [
					"../docs/Documentation/Spline.html"
				],
				"modules": [{
					"name": "Spline",
					"des": "样条曲线类",
					"des_en": "Spline"
				}]
			},
			"subdivideArray": {
				"name": "划分数组类",
				"src": [
					"../docs/Documentation/subdivideArray.html"
				],
				"modules": [{
					"name": "subdivideArray",
					"des": "划分数组类",
					"des_en": "subdivideArray"
				}]
			},
			"SuperMapTerrainProvider": {
				"name": "打开文件组件",
				"src": [
					"./src/leaflet/components/openfile/OpenFileView.js"
				],
				"modules": [{
					"name": "SuperMapTerrainProvider",
					"des": "地形服务提供者类",
					"des_en": "SuperMapTerrainProvider"
				}]
			},
			"SupportTools": {
				"name": "三维工具类",
				"src": [
					"../docs/Documentation/SupportTools.html"
				],
				"modules": [{
					"name": "SupportTools",
					"des": "三维工具类",
					"des_en": "SupportTools"
				}]
			},
			"TaskProcessor": {
				"name": "任务处理器类",
				"src": [
					"../docs/Documentation/TaskProcessor.html"
				],
				"modules": [{
					"name": "TaskProcessor",
					"des": "任务处理器类",
					"des_en": "TaskProcessor"
				}]
			},
			"TemporalSetting": {
				"name": "设置时间类",
				"src": [
					"../docs/Documentation/TemporalSetting.html"
				],
				"modules": [{
					"name": "TemporalSetting",
					"des": "设置时间类",
					"des_en": "TemporalSetting"
				}]
			},
			"TerrainData": {
				"name": "地形数据类",
				"src": [
					"../docs/Documentation/TerrainData.html"
				],
				"modules": [{
					"name": "TerrainData",
					"des": "地形数据类",
					"des_en": "TerrainData"
				}]
			},
			"TerrainProvider": {
				"name": "地形服务类",
				"src": [
					"../docs/Documentation/TerrainProvider.html"
				],
				"modules": [{
					"name": "TerrainProvider",
					"des": "地形服务类",
					"des_en": "TerrainProvider"
				}]
			},
			"throttleRequestByServer": {
				"name": "限制请求类",
				"src": [
					"../docs/Documentation/throttleRequestByServer.html"
				],
				"modules": [{
					"name": "throttleRequestByServer",
					"des": "限制请求类",
					"des_en": "throttleRequestByServer"
				}]
			},
			"TileAvailability": {
				"name": "瓦片可用性类",
				"src": [
					"../docs/Documentation/TileAvailability.html"
				],
				"modules": [{
					"name": "TileAvailability",
					"des": "瓦片可用性类",
					"des_en": "TileAvailability"
				}]
			},
			"TileProviderError": {
				"name": "瓦片程序错误类",
				"src": [
					"../docs/Documentation/TileProviderError.html"
				],
				"modules": [{
					"name": "TileProviderError",
					"des": "瓦片程序错误类",
					"des_en": "TileProviderError"
				}]
			},
			"TilingScheme": {
				"name": "瓦片镶嵌类",
				"src": [
					"../docs/Documentation/TilingScheme.html"
				],
				"modules": [{
					"name": "TilingScheme",
					"des": "瓦片镶嵌类",
					"des_en": "TilingScheme"
				}]
			},
			"TimeInterval": {
				"name": "时间间隔类",
				"src": [
					"../docs/Documentation/TimeInterval.html"
				],
				"modules": [{
					"name": "TimeInterval",
					"des": "时间间隔类",
					"des_en": "TimeInterval"
				}]
			},
			"TimeIntervalCollection": {
				"name": "时间间隔集合类",
				"src": [
					"../docs/Documentation/TimeIntervalCollection.html"
				],
				"modules": [{
					"name": "TimeIntervalCollection",
					"des": "时间间隔集合类",
					"des_en": "TimeIntervalCollection"
				}]
			},
			"TimeStandard": {
				"name": "时间标准类",
				"src": [
					"../docs/Documentation/TimeStandard.html"
				],
				"modules": [{
					"name": "TimeStandard",
					"des": "时间标准类",
					"des_en": "TimeStandard"
				}]
			},
			"Transforms": {
				"name": "参考系转换类",
				"src": [
					"../docs/Documentation/Transforms.html"
				],
				"modules": [{
					"name": "Transforms",
					"des": "参考系转换类",
					"des_en": "Transforms"
				}]
			},
			"TranslationRotationScale": {
				"name": "平移旋转缩放类",
				"src": [
					"../docs/Documentation/TranslationRotationScale.html"
				],
				"modules": [{
					"name": "TranslationRotationScale",
					"des": "平移旋转缩放类",
					"des_en": "TranslationRotationScale"
				}]
			},
			"TridiagonalSystemSolver": {
				"name": "Thomas算法",
				"src": [
					"../docs/Documentation/TridiagonalSystemSolver.html"
				],
				"modules": [{
					"name": "TridiagonalSystemSolver",
					"des": "Thomas算法",
					"des_en": "TridiagonalSystemSolver"
				}]
			},
			"TrustedServers": {
				"name": "可信服务器",
				"src": [
					"../docs/Documentation/TrustedServers.html"
				],
				"modules": [{
					"name": "TrustedServers",
					"des": "可信服务器",
					"des_en": "TrustedServers"
				}]
			},
			"UrlType": {
				"name": "S3M图层数据请求形式类",
				"src": [
					"../docs/Documentation/UrlType.html"
				],
				"modules": [{
					"name": "UrlType",
					"des": "S3M图层数据请求形式类",
					"des_en": "UrlType"
				}]
			},
			"VertexFormat": {
				"name": "顶点格式类",
				"src": [
					"../docs/Documentation/VertexFormat.html"
				],
				"modules": [{
					"name": "VertexFormat",
					"des": "顶点格式类",
					"des_en": "VertexFormat"
				}]
			},
			"VideoSynchronizer": {
				"name": "视频同步类",
				"src": [
					"../docs/Documentation/VideoSynchronizer.html"
				],
				"modules": [{
					"name": "VideoSynchronizer",
					"des": "视频同步类",
					"des_en": "VideoSynchronizer"
				}]
			},
			"Visibility": {
				"name": "可见性类",
				"src": [
					"../docs/Documentation/Visibility.html"
				],
				"modules": [{
					"name": "Visibility",
					"des": "可见性类",
					"des_en": "Visibility"
				}]
			},
			"VRTheWorldTerrainProvider": {
				"name": "世界地形服务类",
				"src": [
					"../docs/Documentation/VRTheWorldTerrainProvider.html"
				],
				"modules": [{
					"name": "VRTheWorldTerrainProvider",
					"des": "世界地形服务类",
					"des_en": "VRTheWorldTerrainProvider"
				}]
			},
			"WallGeometry": {
				"name": "墙面几何类",
				"src": [
					"../docs/Documentation/WallGeometry.html"
				],
				"modules": [{
					"name": "WallGeometry",
					"des": "墙面几何类",
					"des_en": "WallGeometry"
				}]
			},
			"WallOutlineGeometry": {
				"name": "墙面几何轮廓类",
				"src": [
					"../docs/Documentation/WallOutlineGeometry.html"
				],
				"modules": [{
					"name": "WallOutlineGeometry",
					"des": "墙面几何轮廓类",
					"des_en": "WallOutlineGeometry"
				}]
			},
			"WebGLConstants": {
				"name": "WebGL常量类",
				"src": [
					"../docs/Documentation/WebGLConstants.html"
				],
				"modules": [{
					"name": "WebGLConstants",
					"des": "WebGL常量类",
					"des_en": "WebGLConstants"
				}]
			},
			"webGLConstantToGlslType": {
				"name": "webGLC 常量转换为 GlslType类",
				"src": [
					"../docs/Documentation/webGLConstantToGlslType.html"
				],
				"modules": [{
					"name": "webGLConstantToGlslType",
					"des": "webGLC 常量转换为 GlslType类",
					"des_en": "webGLConstantToGlslType"
				}]
			},
			"webGLConstantToGlslType": {
				"name": "webGL常量转换为 GlslType类",
				"src": [
					"../docs/Documentation/webGLConstantToGlslType.html"
				],
				"modules": [{
					"name": "webGLConstantToGlslType",
					"des": "webGL常量转换为 GlslType类",
					"des_en": "webGLConstantToGlslType"
				}]
			},
			"WebMercatorTilingScheme": {
				"name": "Web Mercator切片方案",
				"src": [
					"./src/leaflet/components/openfile/OpenFileView.js"
				],
				"modules": [{
					"name": "WebMercatorTilingScheme",
					"des": "Web Mercator切片方案",
					"des_en": "WebMercatorTilingScheme"
				}]
			},
			"WindingOrder": {
				"name": "模型的渲染模式类",
				"src": [
					"../docs/Documentation/WindingOrder.html"
				],
				"modules": [{
					"name": "WindingOrder",
					"des": "模型的渲染模式类",
					"des_en": "WindingOrder"
				}]
			}
		},
		"DataSources": {
			"title": "数据源",
			"description": "数据源",
			"description_en": "DataSources",
			"BillboardGraphics": {
				"name": "布告板类",
				"src": [
					"../docs/Documentation/BillboardGraphics.html"
				],
				"modules": [{
					"name": "BillboardGraphics",
					"des": "布告板类",
					"des_en": "BillboardGraphics"
				}]
			},
			"BillboardVisualizer": {
				"name": "布告板显示屏类",
				"src": [
					"../docs/Documentation/BillboardVisualizer.html"
				],
				"modules": [{
					"name": "BillboardVisualizer",
					"des": "布告板显示屏类",
					"des_en": "BillboardVisualizer"
				}]
			},
			"BoxGeometryUpdater": {
				"name": "Box几何更新类",
				"src": [
					"../docs/Documentation/BoxGeometryUpdater.html"
				],
				"modules": [{
					"name": "BoxGeometryUpdater",
					"des": "Box几何更新类",
					"des_en": "BoxGeometryUpdater"
				}]
			},
			"BoxGraphics": {
				"name": "Box类",
				"src": [
					"../docs/Documentation/BoxGraphics.html"
				],
				"modules": [{
					"name": "BoxGraphics",
					"des": "Box类",
					"des_en": "BoxGraphics"
				}]
			},
			"CallbackProperty": {
				"name": "回调属性类",
				"src": [
					"../docs/Documentation/CallbackProperty.html"
				],
				"modules": [{
					"name": "CallbackProperty",
					"des": "回调属性类",
					"des_en": "CallbackProperty"
				}]
			},
			"CheckerboardMaterialProperty": {
				"name": "棋盘图像材质类",
				"src": [
					"../docs/Documentation/CheckerboardMaterialProperty.html"
				],
				"modules": [{
					"name": "CheckerboardMaterialProperty",
					"des": "棋盘图像材质类",
					"des_en": "CheckerboardMaterialProperty"
				}]
			},
			"ColorMaterialProperty": {
				"name": "颜色材质属性类",
				"src": [
					"../docs/Documentation/ColorMaterialProperty.html"
				],
				"modules": [{
					"name": "ColorMaterialProperty",
					"des": "颜色材质属性类",
					"des_en": "ColorMaterialProperty"
				}]
			},
			"CompositeEntityCollection": {
				"name": "组合实体集合类",
				"src": [
					"../docs/Documentation/CompositeEntityCollection.html"
				],
				"modules": [{
					"name": "CompositeEntityCollection",
					"des": "组合实体集合类",
					"des_en": "CompositeEntityCollection"
				}]
			},
			"CompositeMaterialProperty": {
				"name": "组合材质属性类",
				"src": [
					"../docs/Documentation/CompositeMaterialProperty.html"
				],
				"modules": [{
					"name": "CompositeMaterialProperty",
					"des": "组合材质属性类",
					"des_en": "CompositeMaterialProperty"
				}]
			},
			"CompositePositionProperty": {
				"name": "组合位置属性类",
				"src": [
					"../docs/Documentation/CompositePositionProperty.html"
				],
				"modules": [{
					"name": "CompositePositionProperty",
					"des": "组合位置属性类",
					"des_en": "CompositePositionProperty"
				}]
			},
			"CompositeProperty": {
				"name": "组合属性类",
				"src": [
					"../docs/Documentation/CompositeProperty.html"
				],
				"modules": [{
					"name": "CompositeProperty",
					"des": "组合属性类",
					"des_en": "CompositeProperty"
				}]
			},
			"ConstantPositionProperty": {
				"name": "常量位置属性类",
				"src": [
					"../docs/Documentation/ConstantPositionProperty.html"
				],
				"modules": [{
					"name": "ConstantPositionProperty",
					"des": "常量位置属性类",
					"des_en": "ConstantPositionProperty"
				}]
			},
			"ConstantProperty": {
				"name": "常量属性类",
				"src": [
					"../docs/Documentation/ConstantProperty.html"
				],
				"modules": [{
					"name": "ConstantProperty",
					"des": "常量属性类",
					"des_en": "ConstantProperty"
				}]
			},
			"CorridorGeometryUpdater": {
				"name": "过道等狭长型几何更新类",
				"src": [
					"../docs/Documentation/CorridorGeometryUpdater.html"
				],
				"modules": [{
					"name": "CorridorGeometryUpdater",
					"des": "走廊、过道等狭长型几何更新类",
					"des_en": "CorridorGeometryUpdater"
				}]
			},
			"CorridorGraphics": {
				"name": "走廊、过道类",
				"src": [
					"../docs/Documentation/CorridorGraphics.html"
				],
				"modules": [{
					"name": "CorridorGraphics",
					"des": "走廊、过道类",
					"des_en": "CorridorGraphics"
				}]
			},
			"CustomDataSource": {
				"name": "自定义数据源类",
				"src": [
					"../docs/Documentation/CustomDataSource.html"
				],
				"modules": [{
					"name": "CustomDataSource",
					"des": "自定义数据源类",
					"des_en": "CustomDataSource"
				}]
			},
			"CylinderGeometryUpdater": {
				"name": "圆柱体几何更新类",
				"src": [
					"../docs/Documentation/CylinderGeometryUpdater.html"
				],
				"modules": [{
					"name": "CylinderGeometryUpdater",
					"des": "圆柱体几何更新类",
					"des_en": "CylinderGeometryUpdater"
				}]
			},
			"CylinderGraphics": {
				"name": "圆柱体类",
				"src": [
					"../docs/Documentation/CylinderGraphics.html"
				],
				"modules": [{
					"name": "CylinderGraphics",
					"des": "圆柱体类",
					"des_en": "CylinderGraphics"
				}]
			},
			"CzmlDataSource": {
				"name": "Czml 数据源类",
				"src": [
					"../docs/Documentation/CzmlDataSource.html"
				],
				"modules": [{
					"name": "CzmlDataSource",
					"des": "Czml 数据源类",
					"des_en": "CzmlDataSource"
				}]
			},
			"DataSource": {
				"name": "数据源类",
				"src": [
					"../docs/Documentation/DataSource.html"
				],
				"modules": [{
					"name": "DataSource",
					"des": "数据源类",
					"des_en": "DataSource"
				}]
			},
			"DataSourceClock": {
				"name": "数据源所需Clock类",
				"src": [
					"../docs/Documentation/DataSourceClock.html"
				],
				"modules": [{
					"name": "DataSourceClock",
					"des": "数据源所需Clock类",
					"des_en": "DataSourceClock"
				}]
			},
			"DataSourceCollection": {
				"name": "数据源实例集合类",
				"src": [
					"../docs/Documentation/DataSourceCollection.html"
				],
				"modules": [{
					"name": "DataSourceCollection",
					"des": "数据源实例集合类",
					"des_en": "DataSourceCollection"
				}]
			},
			"DataSourceDisplay": {
				"name": "可视化数据源类",
				"src": [
					"../docs/Documentation/DataSourceDisplay.html"
				],
				"modules": [{
					"name": "DataSourceDisplay",
					"des": "可视化数据源类",
					"des_en": "DataSourceDisplay"
				}]
			},
			"DynamicGeometryUpdater": {
				"name": "动态几何更新类",
				"src": [
					"../docs/Documentation/DynamicGeometryUpdater.html"
				],
				"modules": [{
					"name": "DynamicGeometryUpdater",
					"des": "动态几何更新类",
					"des_en": "DynamicGeometryUpdater"
				}]
			},
			"EllipseGeometryUpdater": {
				"name": "椭圆几何更新类",
				"src": [
					"../docs/Documentation/EllipseGeometryUpdater.html"
				],
				"modules": [{
					"name": "EllipseGeometryUpdater",
					"des": "椭圆几何更新类",
					"des_en": "EllipseGeometryUpdater"
				}]
			},
			"EllipseGraphics": {
				"name": "椭圆类",
				"src": [
					"../docs/Documentation/EllipseGraphics.html"
				],
				"modules": [{
					"name": "EllipseGraphics",
					"des": "椭圆类",
					"des_en": "EllipseGraphics"
				}]
			},
			"EllipsoidGeometryUpdater": {
				"name": "椭圆体几何更新类",
				"src": [
					"../docs/Documentation/EllipsoidGeometryUpdater.html"
				],
				"modules": [{
					"name": "EllipsoidGeometryUpdater",
					"des": "椭圆体几何更新类",
					"des_en": "EllipsoidGeometryUpdater"
				}]
			},
			"EllipsoidGraphics": {
				"name": "椭圆体类",
				"src": [
					"../docs/Documentation/EllipsoidGraphics.html"
				],
				"modules": [{
					"name": "EllipsoidGraphics",
					"des": "椭圆体类",
					"des_en": "EllipsoidGraphics"
				}]
			},
			"Entity": {
				"name": "实体类",
				"src": [
					"../docs/Documentation/Entity.html"
				],
				"modules": [{
					"name": "Entity",
					"des": "实体类",
					"des_en": "Entity"
				}]
			},
			"EntityCluster": {
				"name": "实体集群类",
				"src": [
					"../docs/Documentation/EntityCluster.html"
				],
				"modules": [{
					"name": "EntityCluster",
					"des": "实体集群类",
					"des_en": "EntityCluster"
				}]
			},
			"EntityCollection": {
				"name": "实体对象集合类",
				"src": [
					"../docs/Documentation/EntityCollection.html"
				],
				"modules": [{
					"name": "EntityCollection",
					"des": "实体对象集合类",
					"des_en": "EntityCollection"
				}]
			},
			"EntityCluster": {
				"name": "实体集群类",
				"src": [
					"../docs/Documentation/EntityCluster.html"
				],
				"modules": [{
					"name": "EntityCluster",
					"des": "实体集群类",
					"des_en": "EntityCluster"
				}]
			},
			"EntityCollection": {
				"name": "实体集合类",
				"src": [
					"../docs/Documentation/EntityCollection.html"
				],
				"modules": [{
					"name": "EntityCollection",
					"des": "实体集合类",
					"des_en": "EntityCollection"
				}]
			},
			"EntityView": {
				"name": "实体视图类",
				"src": [
					"../docs/Documentation/EntityView.html"
				],
				"modules": [{
					"name": "EntityView",
					"des": "实体视图类",
					"des_en": "EntityView"
				}]
			},
			"GeoJsonDataSource": {
				"name": "GeoJson数据源类",
				"src": [
					"../docs/Documentation/GeoJsonDataSource.html"
				],
				"modules": [{
					"name": "GeoJsonDataSource",
					"des": "GeoJson数据源类",
					"des_en": "GeoJsonDataSource"
				}]
			},
			"GeometryUpdater": {
				"name": "几何更新类",
				"src": [
					"../docs/Documentation/GeometryUpdater.html"
				],
				"modules": [{
					"name": "GeometryUpdater",
					"des": "几何更新类",
					"des_en": "GeometryUpdater"
				}]
			},
			"GeometryVisualizer": {
				"name": "几何可视化类",
				"src": [
					"../docs/Documentation/GeometryVisualizer.html"
				],
				"modules": [{
					"name": "GeometryVisualizer",
					"des": "几何可视化类",
					"des_en": "GeometryVisualizer"
				}]
			},
			"GridMaterialProperty": {
				"name": "网格材质属性类",
				"src": [
					"../docs/Documentation/GridMaterialProperty.html"
				],
				"modules": [{
					"name": "GridMaterialProperty",
					"des": "网格材质属性类",
					"des_en": "GridMaterialProperty"
				}]
			},
			"ImageMaterialProperty": {
				"name": "Image材质属性类",
				"src": [
					"../docs/Documentation/ImageMaterialProperty.html"
				],
				"modules": [{
					"name": "ImageMaterialProperty",
					"des": "Image材质属性类",
					"des_en": "ImageMaterialProperty"
				}]
			},
			"KmlDataSource": {
				"name": "Kml数据源类",
				"src": [
					"../docs/Documentation/KmlDataSource.html"
				],
				"modules": [{
					"name": "KmlDataSource",
					"des": "Kml数据源类",
					"des_en": "KmlDataSource"
				}]
			},
			"KmlTour": {
				"name": "Kml浏览类",
				"src": [
					"../docs/Documentation/KmlTour.html"
				],
				"modules": [{
					"name": "KmlTour",
					"des": "Kml浏览类",
					"des_en": "KmlTour"
				}]
			},
			"LabelGraphics": {
				"name": "标签图形类",
				"src": [
					"../docs/Documentation/LabelGraphics.html"
				],
				"modules": [{
					"name": "LabelGraphics",
					"des": "标签图形类",
					"des_en": "LabelGraphics"
				}]
			},
			"LabelVisualizer": {
				"name": "标签可视化类",
				"src": [
					"../docs/Documentation/LabelVisualizer.html"
				],
				"modules": [{
					"name": "LabelVisualizer",
					"des": "标签可视化类",
					"des_en": "LabelVisualizer"
				}]
			},
			"MaterialProperty": {
				"name": "材质属性类",
				"src": [
					"../docs/Documentation/MaterialProperty.html"
				],
				"modules": [{
					"name": "MaterialProperty",
					"des": "材质属性类",
					"des_en": "MaterialProperty"
				}]
			},
			"ModelGraphics": {
				"name": "模型图形类",
				"src": [
					"../docs/Documentation/ModelGraphics.html"
				],
				"modules": [{
					"name": "ModelGraphics",
					"des": "模型图形类",
					"des_en": "ModelGraphics"
				}]
			},
			"ModelVisualizer": {
				"name": "模型可视化类",
				"src": [
					"../docs/Documentation/ModelVisualizer.html"
				],
				"modules": [{
					"name": "ModelVisualizer",
					"des": "模型可视化类",
					"des_en": "ModelVisualizer"
				}]
			},
			"NodeTransformationProperty": {
				"name": "节点转换属性类",
				"src": [
					"../docs/Documentation/NodeTransformationProperty.html"
				],
				"modules": [{
					"name": "NodeTransformationProperty",
					"des": "节点转换属性类",
					"des_en": "NodeTransformationProperty"
				}]
			},
			"PathGraphics": {
				"name": "路径图形类",
				"src": [
					"../docs/Documentation/PathGraphics.html"
				],
				"modules": [{
					"name": "PathGraphics",
					"des": "路径图形类",
					"des_en": "PathGraphics"
				}]
			},
			"PathVisualizer": {
				"name": "路径可视化类",
				"src": [
					"../docs/Documentation/PathVisualizer.html"
				],
				"modules": [{
					"name": "PathVisualizer",
					"des": "路径可视化类",
					"des_en": "PathVisualizer"
				}]
			},
			"PointGraphics": {
				"name": "点阵图形类",
				"src": [
					"../docs/Documentation/PointGraphics.html"
				],
				"modules": [{
					"name": "PointGraphics",
					"des": "点阵图形类",
					"des_en": "PointGraphics"
				}]
			},
			"PointVisualizer": {
				"name": "点可视化类",
				"src": [
					"../docs/Documentation/PointVisualizer.html"
				],
				"modules": [{
					"name": "PointVisualizer",
					"des": "点可视化类",
					"des_en": "PointVisualizer"
				}]
			},
			"PolygonGeometryUpdater": {
				"name": "多边形几何更新类",
				"src": [
					"../docs/Documentation/PolygonGeometryUpdater.html"
				],
				"modules": [{
					"name": "PolygonGeometryUpdater",
					"des": "多边形几何更新类",
					"des_en": "PolygonGeometryUpdater"
				}]
			},
			"PolygonGraphics": {
				"name": "多边形类",
				"src": [
					"../docs/Documentation/PolygonGraphics.html"
				],
				"modules": [{
					"name": "PolygonGraphics",
					"des": "多边形类",
					"des_en": "PolygonGraphics"
				}]
			},
			"PolylineArrowMaterialProperty": {
				"name": "带箭头的线材质属性类",
				"src": [
					"../docs/Documentation/PolylineArrowMaterialProperty.html"
				],
				"modules": [{
					"name": "PolylineArrowMaterialProperty",
					"des": "带箭头的线材质属性类",
					"des_en": "PolylineArrowMaterialProperty"
				}]
			},
			"PolylineDashMaterialProperty": {
				"name": "虚线材质属性类",
				"src": [
					"../docs/Documentation/PolylineDashMaterialProperty.html"
				],
				"modules": [{
					"name": "PolylineDashMaterialProperty",
					"des": "虚线材质属性类",
					"des_en": "PolylineDashMaterialProperty"
				}]
			},
			"PolylineDynamicMaterialProperty": {
				"name": "动态多段线材质属性类",
				"src": [
					"../docs/Documentation/PolylineDynamicMaterialProperty.html"
				],
				"modules": [{
					"name": "PolylineDynamicMaterialProperty",
					"des": "动态多段线材质属性类",
					"des_en": "PolylineDynamicMaterialProperty"
				}]
			},
			"PolylineGeometryUpdater": {
				"name": "多段线几何更新类",
				"src": [
					"../docs/Documentation/PolylineGeometryUpdater.html"
				],
				"modules": [{
					"name": "PolylineGeometryUpdater",
					"des": "多段线几何更新类",
					"des_en": "PolylineGeometryUpdater"
				}]
			},
			"PolylineGlowMaterialProperty": {
				"name": "光晕线材质属性类",
				"src": [
					"../docs/Documentation/PolylineGlowMaterialProperty.html"
				],
				"modules": [{
					"name": "PolylineGlowMaterialProperty",
					"des": "光晕线材质属性类",
					"des_en": "PolylineGlowMaterialProperty"
				}]
			},
			"PolylineGraphics": {
				"name": "多段线类",
				"src": [
					"../docs/Documentation/PolylineGraphics.html"
				],
				"modules": [{
					"name": "PolylineGraphics",
					"des": "多段线类",
					"des_en": "PolylineGraphics"
				}]
			},
			"PolylineOutlineMaterialProperty": {
				"name": "外轮廓线材质属性类",
				"src": [
					"../docs/Documentation/PolylineOutlineMaterialProperty.html"
				],
				"modules": [{
					"name": "PolylineOutlineMaterialProperty",
					"des": "外轮廓线材质属性类",
					"des_en": "PolylineOutlineMaterialProperty"
				}]
			},
			"PolylineTrailMaterialProperty": {
				"name": "尾迹线材质类",
				"src": [
					"../docs/Documentation/PolylineTrailMaterialProperty.html"
				],
				"modules": [{
					"name": "PolylineTrailMaterialProperty",
					"des": "尾迹线材质类",
					"des_en": "PolylineTrailMaterialProperty"
				}]
			},
			"PolylineVolumeGeometryUpdater": {
				"name": "多段线体积几何更新类",
				"src": [
					"../docs/Documentation/PolylineVolumeGeometryUpdater.html"
				],
				"modules": [{
					"name": "PolylineVolumeGeometryUpdater",
					"des": "多段线体积几何更新类",
					"des_en": "PolylineVolumeGeometryUpdater"
				}]
			},
			"PolylineVolumeGraphics": {
				"name": "多段线体积类",
				"src": [
					"../docs/Documentation/PolylineVolumeGraphics.html"
				],
				"modules": [{
					"name": "PolylineVolumeGraphics",
					"des": "多段线体积类",
					"des_en": "PolylineVolumeGraphics"
				}]
			},
			"PositionProperty": {
				"name": "位置属性类",
				"src": [
					"../docs/Documentation/PositionProperty.html"
				],
				"modules": [{
					"name": "PositionProperty",
					"des": "位置属性类",
					"des_en": "PositionProperty"
				}]
			},
			"PositionPropertyArray": {
				"name": "位置属性数组类",
				"src": [
					"../docs/Documentation/PositionPropertyArray.html"
				],
				"modules": [{
					"name": "PositionPropertyArray",
					"des": "位置属性数组类",
					"des_en": "PositionPropertyArray"
				}]
			},
			"Property": {
				"name": "属性类",
				"src": [
					"../docs/Documentation/Property.html"
				],
				"modules": [{
					"name": "Property",
					"des": "属性类",
					"des_en": "Property"
				}]
			},
			"PropertyArray": {
				"name": "属性数组类",
				"src": [
					"../docs/Documentation/PropertyArray.html"
				],
				"modules": [{
					"name": "PropertyArray",
					"des": "属性数组类",
					"des_en": "PropertyArray"
				}]
			},
			"PropertyBag": {
				"name": "属性存储管理器类",
				"src": [
					"../docs/Documentation/PropertyBag.html"
				],
				"modules": [{
					"name": "PropertyBag",
					"des": "属性存储管理器类",
					"des_en": "PropertyBag"
				}]
			},
			"RectangleGeometryUpdater": {
				"name": "矩形几何更新类",
				"src": [
					"../docs/Documentation/RectangleGeometryUpdater.html"
				],
				"modules": [{
					"name": "RectangleGeometryUpdater",
					"des": "矩形几何更新类",
					"des_en": "RectangleGeometryUpdater"
				}]
			},
			"RectangleGraphics": {
				"name": "矩形类",
				"src": [
					"../docs/Documentation/RectangleGraphics.html"
				],
				"modules": [{
					"name": "RectangleGraphics",
					"des": "矩形类",
					"des_en": "RectangleGraphics"
				}]
			},
			"ReferenceProperty": {
				"name": "参考属性类",
				"src": [
					"../docs/Documentation/ReferenceProperty.html"
				],
				"modules": [{
					"name": "ReferenceProperty",
					"des": "参考属性类",
					"des_en": "ReferenceProperty"
				}]
			},
			"Rotation": {
				"name": "旋转类",
				"src": [
					"../docs/Documentation/Rotation.html"
				],
				"modules": [{
					"name": "Rotation",
					"des": "旋转类",
					"des_en": "Rotation"
				}]
			},
			"SampledPositionProperty": {
				"name": "采样位置属性类",
				"src": [
					"../docs/Documentation/SampledPositionProperty.html"
				],
				"modules": [{
					"name": "SampledPositionProperty",
					"des": "采样位置属性类",
					"des_en": "SampledPositionProperty"
				}]
			},
			"SampledProperty": {
				"name": "采样属性类",
				"src": [
					"../docs/Documentation/SampledProperty.html"
				],
				"modules": [{
					"name": "SampledProperty",
					"des": "采样属性类",
					"des_en": "SampledProperty"
				}]
			},
			"StripeMaterialProperty": {
				"name": "条纹材质属性类",
				"src": [
					"../docs/Documentation/StripeMaterialProperty.html"
				],
				"modules": [{
					"name": "StripeMaterialProperty",
					"des": "条纹材质属性类",
					"des_en": "StripeMaterialProperty"
				}]
			},
			"StripeOrientation": {
				"name": "条纹方向类",
				"src": [
					"../docs/Documentation/StripeOrientation.html"
				],
				"modules": [{
					"name": "StripeOrientation",
					"des": "条纹方向类",
					"des_en": "StripeOrientation"
				}]
			},
			"TimeIntervalCollectionPositionProperty": {
				"name": "时间间隔集合位置属性类",
				"src": [
					"../docs/Documentation/TimeIntervalCollectionPositionProperty.html"
				],
				"modules": [{
					"name": "TimeIntervalCollectionPositionProperty",
					"des": "时间间隔集合位置属性类",
					"des_en": "TimeIntervalCollectionPositionProperty"
				}]
			},
			"TimeIntervalCollectionProperty": {
				"name": "时间间隔集合属性类",
				"src": [
					"../docs/Documentation/TimeIntervalCollectionProperty.html"
				],
				"modules": [{
					"name": "TimeIntervalCollectionProperty",
					"des": "时间间隔集合属性类",
					"des_en": "TimeIntervalCollectionProperty"
				}]
			},
			"VelocityOrientationProperty": {
				"name": "速度方位属性类",
				"src": [
					"../docs/Documentation/VelocityOrientationProperty.html"
				],
				"modules": [{
					"name": "VelocityOrientationProperty",
					"des": "速度方位属性类",
					"des_en": "VelocityOrientationProperty"
				}]
			},
			"VelocityVectorProperty": {
				"name": "速度矢量属性类",
				"src": [
					"../docs/Documentation/VelocityVectorProperty.html"
				],
				"modules": [{
					"name": "VelocityVectorProperty",
					"des": "速度矢量属性类",
					"des_en": "VelocityVectorProperty"
				}]
			},
			"Visualizer": {
				"name": "可视化类",
				"src": [
					"../docs/Documentation/Visualizer.html"
				],
				"modules": [{
					"name": "Visualizer",
					"des": "可视化类",
					"des_en": "Visualizer"
				}]
			},
			"WallGeometryUpdater": {
				"name": "墙面几何更新类",
				"src": [
					"../docs/Documentation/WallGeometryUpdater.html"
				],
				"modules": [{
					"name": "WallGeometryUpdater",
					"des": "墙面几何更新类",
					"des_en": "WallGeometryUpdater"
				}]
			},
			"WallGraphics": {
				"name": "墙面图形类",
				"src": [
					"../docs/Documentation/WallGraphics.html"
				],
				"modules": [{
					"name": "WallGraphics",
					"des": "墙面图形类",
					"des_en": "WallGraphics"
				}]
			}
		},
		"Fly": {
			"title": "飞行管理",
			"description": "飞行管理",
			"description_en": "Fly",

			"FlyManager": {
				"name": "飞行管理类",
				"src": [
					"../docs/Documentation/FlyManager.html"
				],
				"modules": [{
					"name": "FlyManager",
					"des": "飞行管理类",
					"des_en": "FlyManager"
				}]
			},
			"FlyInterpolationMode": {
				"name": "相机飞行插值模式类",
				"src": [
					"../docs/Documentation/FlyInterpolationMode.html"
				],
				"modules": [{
					"name": "FlyInterpolationMode",
					"des": "相机飞行插值模式类",
					"des_en": "FlyInterpolationMode"
				}]
			},
			"StopPlayMode": {
				"name": "站点模式",
				"src": [
					"../docs/Documentation/StopPlayMode.html"
				],
				"modules": [{
					"name": "StopPlayMode",
					"des": "站点模式",
					"des_en": "StopPlayMode"
				}]
			},
			"Route": {
				"name": "飞行路线对象类",
				"src": [
					"../docs/Documentation/Route.html"
				],
				"modules": [{
					"name": "Route",
					"des": "飞行路线对象类",
					"des_en": "Route"
				}]
			},
			"RouteCollection": {
				"name": "飞行路线集合对象类",
				"src": [
					"../docs/Documentation/RouteCollection.html"
				],
				"modules": [{
					"name": "RouteCollection",
					"des": "飞行路线集合对象类",
					"des_en": "RouteCollection"
				}]
			},
			"RouteStop": {
				"name": "飞行站点对象类",
				"src": [
					"../docs/Documentation/RouteStop.html"
				],
				"modules": [{
					"name": "RouteStop",
					"des": "飞行站点对象类",
					"des_en": "RouteStop"
				}]
			}
		},
		"Geometry3D": {
			"title": "三维几何体",
			"description": "三维几何体",
			"description_en": "Geometry3D",
			"Point3D": {
				"name": "三维点对象类",
				"src": [
					"../docs/Documentation/Point3D.html"
				],
				"modules": [{
					"name": "Point3D",
					"des": "三维点对象类",
					"des_en": "Point3D"
				}]
			},
			"Point3Ds": {
				"name": "三维点集合对象类",
				"src": [
					"../docs/Documentation/SCTTerrainProvider.html"
				],
				"modules": [{
					"name": "Point3Ds",
					"des": "三维点集合对象类",
					"des_en": "Open file components"
				}]
			},
			"GeoBox": {
				"name": "三维长方体几何对象类",
				"src": [
					"../docs/Documentation/GeoBox.html"
				],
				"modules": [{
					"name": "GeoBox",
					"des": "三维长方体几何对象类",
					"des_en": "GeoBox"
				}]
			},
			"Catenaryline": {
				"name": "垂线类",
				"src": [
					"../docs/Documentation/Catenaryline.html"
				],
				"modules": [{
					"name": "Catenaryline",
					"des": "垂线类",
					"des_en": "Catenaryline"
				}]
			},
			"GeoLine3D": {
				"name": "三维线对象类",
				"src": [
					"../docs/Documentation/GeoLine3D.html"
				],
				"modules": [{
					"name": "GeoLine3D",
					"des": "三维线对象类",
					"des_en": "GeoLine3D"
				}]
			},
			"GeoBillboard": {
				"name": "三维布告板对象类",
				"src": ["../docs/Documentation/GeoBillboard.html"],
				"modules": [{
					"name": "GeoBillboard",
					"des": "三维布告板对象类",
					"des_en": "GeoBillboard"
				}]
			},
			"Geometry3D": {
				"name": "三维几何对象抽象类",
				"src": ["../docs/Documentation/Geometry3D.html"],
				"modules": [{
					"name": "Geometry3D",
					"des": "三维几何对象抽象类",
					"des_en": "Geometry3D"
				}]
			},
			"GeoPolyline": {
				"name": "垂线类",
				"src": ["../docs/Documentation/GeoPolyline.html"],
				"modules": [{
					"name": "GeoPolyline",
					"des": "垂线类",
					"des_en": "GeoPolyline"
				}]
			},
			"GeoPoint3D": {
				"name": "三维地理点几何对象类",
				"src": ["../docs/Documentation/GeoPoint3D.html"],
				"modules": [{
					"name": "GeoPoint3D",
					"des": "三维地理点几何对象类",
					"des_en": "GeoPoint3D"
				}]
			},
			"GeoCone": {
				"name": "三维椎体几何对象类",
				"src": ["../docs/Documentation/GeoCone.html"],
				"modules": [{
					"name": "GeoCone",
					"des": "三维椎体几何对象类",
					"des_en": "GeoCone"
				}]
			},
			"GeoRegion3D": {
				"name": "三维面对象类",
				"src": ["../docs/Documentation/GeoRegion3D.html"],
				"modules": [{
					"name": "GeoRegion3D",
					"des": "三维面对象类",
					"des_en": "GeoRegion3D"
				}]
			},
			"GeoEllipsoid": {
				"name": "三维椭球体几何对象类",
				"src": ["../docs/Documentation/GeoEllipsoid.html"],
				"modules": [{
					"name": "GeoEllipsoid",
					"des": "三维椭球体几何对象类",
					"des_en": "GeoEllipsoid"
				}]
			},
			"GeoBox": {
				"name": "三维长方体几何对象类",
				"src": ["../docs/Documentation/GeoBox.html"],
				"modules": [{
					"name": "GeoBox",
					"des": "三维长方体几何对象类",
					"des_en": "GeoBox"
				}]
			},
			"GeoSphere": {
				"name": "三维球体几何对象类",
				"src": ["../docs/Documentation/GeoSphere.html"],
				"modules": [{
					"name": "GeoSphere",
					"des": "三维球体几何对象类",
					"des_en": "GeoSphere"
				}]
			},
			"GeoCylinder": {
				"name": "三维圆柱体几何对象类",
				"src": ["../docs/Documentation/GeoCylinder.html"],
				"modules": [{
					"name": "GeoCylinder",
					"des": "三维圆柱体几何对象类",
					"des_en": "GeoCylinder"
				}]
			},
			"GeoModel3D": {
				"name": "三维模型对象类",
				"src": ["../docs/Documentation/GeoModel3D.html"],
				"modules": [{
					"name": "GeoModel3D",
					"des": "三维模型对象类",
					"des_en": "GeoModel3D"
				}]
			},
			"RotationOrigin": {
				"name": "模型旋转风格类",
				"src": ["../docs/Documentation/RotationOrigin.html"],
				"modules": [{
					"name": "RotationOrigin",
					"des": "模型旋转风格类",
					"des_en": "RotationOrigin"
				}]
			}
		},
		"Handler": {
			"title": "交互处理模块",
			"description": "交互处理模块",
			"description_en": "Handler",

			"BoxEditor": {
				"name": "Box编辑器类",
				"src": [
					"../docs/Documentation/BoxEditor.html"
				],
				"modules": [{
					"name": "BoxEditor",
					"des": "Box编辑器类",
					"des_en": "BoxEditor"
				}]
			},
			"ClampMode": {
				"name": "绘制、量算的几何对象风格类",
				"src": [
					"../docs/Documentation/ClampMode.html"
				],
				"modules": [{
					"name": "ClampMode",
					"des": "绘制、量算的几何对象风格类",
					"des_en": "ClampMode"
				}]
			},
			"DrawMode": {
				"name": "绘制模式类",
				"src": ["../docs/Documentation/DrawMode.html"],
				"modules": [{
					"name": "DrawMode",
					"des": "绘制模式类",
					"des_en": "DrawMode"
				}]
			},
			"DrawHandler": {
				"name": "绘制处理器对象类",
				"src": ["../docs/Documentation/DrawHandler.html"],
				"modules": [{
					"name": "DrawHandler",
					"des": "绘制处理器对象类",
					"des_en": "DrawHandler"
				}]
			},
			"EditHandler": {
				"name": "对象编辑类",
				"src": [
					"../docs/Documentation/EditHandler.html"
				],
				"modules": [{
					"name": "EditHandler",
					"des": "对象编辑类",
					"des_en": "EditHandler"
				}]
			},
			"LineDisplayType": {
				"name": "设置遮挡模式类",
				"src": ["../docs/Documentation/LineDisplayType.html"],
				"modules": [{
					"name": "LineDisplayType",
					"des": "设置遮挡模式类",
					"des_en": "LineDisplayType"
				}]
			},
			"ModelEditor": {
				"name": "编辑模型类",
				"src": ["../docs/Documentation/ModelEditor.html"],
				"modules": [{
					"name": "ModelEditor",
					"des": "编辑模型类",
					"des_en": "ModelEditor"
				}]
			},
			"MeasureMode": {
				"name": "量算模式类",
				"src": ["../docs/Documentation/MeasureMode.html"],
				"modules": [{
					"name": "MeasureMode",
					"des": "量算模式类",
					"des_en": "MeasureMode"
				}]
			},
			"MeasureHandler": {
				"name": "量测处理器类",
				"src": ["../docs/Documentation/SCTTerrainProvider.html"],
				"modules": [{
					"name": "MeasureHandler",
					"des": "量测处理器类",
					"des_en": "Open file components"
				}]
			},
			"ModelEditor": {
				"name": "编辑模型类",
				"src": ["../docs/Documentation/ModelEditor.html"],
				"modules": [{
					"name": "ModelEditor",
					"des": "编辑模型类",
					"des_en": "ModelEditor"
				}]
			}
		},
		"Light": {
			"title": "光源",
			"description": "光源",
			"description_en": "Renderer",

			"DirectionalLight": {
				"name": "平行光源类",
				"src": ["../docs/Documentation/DirectionalLight.html"],
				"modules": [{
					"name": "DirectionalLight",
					"des": "平行光源类",
					"des_en": "DirectionalLight"
				}]
			},
			"HemisphereLight": {
				"name": "半球光源类",
				"src": ["../docs/Documentation/HemisphereLight.html"],
				"modules": [{
					"name": "HemisphereLight",
					"des": "半球光源类",
					"des_en": "HemisphereLight"
				}]
			},
			"LightSource": {
				"name": "光源类",
				"src": ["../docs/Documentation/LightSource.html"],
				"modules": [{
					"name": "LightSource",
					"des": "光源类",
					"des_en": "LightSource"
				}]
			},
			"LightSourceType": {
				"name": "光源类型类",
				"src": ["../docs/Documentation/LightSourceType.html"],
				"modules": [{
					"name": "LightSourceType",
					"des": "光源类型类",
					"des_en": "LightSourceType"
				}]
			},
			"PointLight": {
				"name": "点光源类",
				"src": ["../docs/Documentation/PointLight.html"],
				"modules": [{
					"name": "PointLight",
					"des": "点光源类",
					"des_en": "PointLight"
				}]
			},
			"SpotLight": {
				"name": "聚光灯类",
				"src": ["../docs/Documentation/SpotLight.html"],
				"modules": [{
					"name": "SpotLight",
					"des": "聚光灯类",
					"des_en": "SpotLight"
				}]
			}
		},
		"ParticleSystem": {
			"title": "粒子系统",
			"description": "粒子系统",
			"description_en": "ParticleSystem",

			"BaseParticleSystem": {
				"name": "实现粒子系统类",
				"src": ["../docs/Documentation/BaseParticleSystem.html"],
				"modules": [{
					"name": "BaseParticleSystem",
					"des": "实现粒子系统类",
					"des_en": "BaseParticleSystem"
				}]
			},
			"ParticleHelper": {
				"name": "创建实例粒子系统类",
				"src": ["../docs/Documentation/ParticleHelper.html"],
				"modules": [{
					"name": "ParticleHelper",
					"des": "创建实例粒子系统类",
					"des_en": "ParticleHelper"
				}]
			},
			"ParticleSystem": {
				"name": "粒子系统类",
				"src": ["../docs/Documentation/ParticleSystem.html"],
				"modules": [{
					"name": "ParticleSystem",
					"des": "粒子系统类",
					"des_en": "ParticleSystem"
				}]
			}
		},
		"Provider": {
			"title": "服务提供",
			"description": "服务提供",
			"description_en": "Provider",

			"BingMapsImageryProvider": {
				"name": "Bing Maps影像服务提供类",
				"src": ["../docs/Documentation/BingMapsImageryProvider.html"],
				"modules": [{
					"name": "BingMapsImageryProvider",
					"des": "Bing Maps影像服务提供类",
					"des_en": "BingMapsImageryProvider"
				}]
			},
			"BingMapsStyle": {
				"name": "BingMap地图风格类",
				"src": ["../docs/Documentation/BingMapsStyle.html"],
				"modules": [{
					"name": "BingMapsStyle",
					"des": "BingMap地图风格类",
					"des_en": "BingMapsStyle"
				}]
			},
			"SuperMapImageryProvider": {
				"name": "提供影像切片类",
				"src": ["../docs/Documentation/SuperMapImageryProvider.html"],
				"modules": [{
					"name": "SuperMapImageryProvider",
					"des": "提供影像切片类",
					"des_en": "SuperMapImageryProvider"
				}]
			},
			"SuperMapTerrainProvider": {
				"name": "提供地形切片类",
				"src": ["../docs/Documentation/SuperMapTerrainProvider.html"],
				"modules": [{
					"name": "SuperMapTerrainProvider",
					"des": "提供地形切片类",
					"des_en": "SuperMapTerrainProvider"
				}]
			},
			"TiandituImageryProvider": {
				"name": "天地图影像服务提供类",
				"src": ["../docs/Documentation/TiandituImageryProvider.html"],
				"modules": [{
					"name": "TiandituImageryProvider",
					"des": "天地图影像服务提供类",
					"des_en": "TiandituImageryProvider"
				}]
			},
			"TiandituMapsStyle": {
				"name": "天地图服务类型类",
				"src": ["../docs/Documentation/TiandituMapsStyle.html"],
				"modules": [{
					"name": "TiandituMapsStyle",
					"des": "天地图服务类型类",
					"des_en": "TiandituMapsStyle"
				}]
			},
			"TiandituTerrainProvider": {
				"name": "天地图三维地形服务类",
				"src": ["../docs/Documentation/TiandituTerrainProvider.html"],
				"modules": [{
					"name": "TiandituTerrainProvider",
					"des": "天地图三维地形服务类",
					"des_en": "TiandituTerrainProvider"
				}]
			},
			"TileCoordinatesImageryProvider": {
				"name": "本地切片影像服务类",
				"src": ["../docs/Documentation/TileCoordinatesImageryProvider.html"],
				"modules": [{
					"name": "TileCoordinatesImageryProvider",
					"des": "本地切片影像服务类",
					"des_en": "TileCoordinatesImageryProvider"
				}]
			},
			"TimeDynamicImagery": {
				"name": "时间动态影像服务类",
				"src": ["../docs/Documentation/TimeDynamicImagery.html"],
				"modules": [{
					"name": "TimeDynamicImagery",
					"des": "时间动态影像服务类",
					"des_en": "TimeDynamicImagery"
				}]
			},
			"WebMapTileServiceImageryProvider": {
				"name": " WMTS影像服务类",
				"src": ["../docs/Documentation/WebMapTileServiceImageryProvider.html"],
				"modules": [{
					"name": "WebMapTileServiceImageryProvider",
					"des": "WMTS影像服务类",
					"des_en": "WebMapTileServiceImageryProvider"
				}]
			}
		},
		"Renderer": {
			"title": "渲染",
			"description": "渲染",
			"description_en": "Renderer",
			"Buffer": {
				"name": "渲染缓冲区类",
				"src": ["../docs/Documentation/Buffer.html"],
				"modules": [{
					"name": "Buffer",
					"des": "渲染缓冲区类",
					"des_en": "Buffer"
				}]
			},
			"BillboardMode": {
				"name": "布告板模式",
				"src": ["../docs/Documentation/BillboardMode.html"],
				"modules": [{
					"name": "BillboardMode",
					"des": "布告板模式",
					"des_en": "BillboardMode"
				}]
			},
			"ClearCommand": {
				"name": "清除命令类",
				"src": ["../docs/Documentation/ClearCommand.html"],
				"modules": [{
					"name": "ClearCommand",
					"des": "清除命令类",
					"des_en": "ClearCommand"
				}]
			},
			"ComputeCommand": {
				"name": "计算命令类",
				"src": ["../docs/Documentation/ComputeCommand.html"],
				"modules": [{
					"name": "ComputeCommand",
					"des": "计算命令类",
					"des_en": "ComputeCommand"
				}]
			},
			"Context": {
				"name": "上下文类",
				"src": ["../docs/Documentation/Context.html"],
				"modules": [{
					"name": "Context",
					"des": "上下文类",
					"des_en": "Context"
				}]
			},
			"ContextLimits": {
				"name": "上下文范围类",
				"src": ["../docs/Documentation/ContextLimits.html"],
				"modules": [{
					"name": "ContextLimits",
					"des": "上下文范围类",
					"des_en": "ContextLimits"
				}]
			},
			"CubeMap": {
				"name": "立方体贴图类",
				"src": ["../docs/Documentation/CubeMap.html"],
				"modules": [{
					"name": "CubeMap",
					"des": "立方体贴图类",
					"des_en": "CubeMap"
				}]
			},
			"CubeMapFace": {
				"name": "立方体的面类",
				"src": ["../docs/Documentation/CubeMapFace.html"],
				"modules": [{
					"name": "CubeMapFace",
					"des": "立方体的面类",
					"des_en": "CubeMapFace"
				}]
			},
			"CubeMapFace": {
				"name": "立方体的面类",
				"src": ["../docs/Documentation/CubeMapFace.html"],
				"modules": [{
					"name": "CubeMapFace",
					"des": "立方体的面类",
					"des_en": "CubeMapFace"
				}]
			},
			"Facade": {
				"name": "立面出图类",
				"src": ["../docs/Documentation/Facade.html"],
				"modules": [{
					"name": "Facade",
					"des": "立面出图类",
					"des_en": "Facade"
				}]
			},
			"Framebuffer": {
				"name": "帧缓冲类",
				"src": ["../docs/Documentation/Framebuffer.html"],
				"modules": [{
					"name": "Framebuffer",
					"des": "帧缓冲类",
					"des_en": "Framebuffer"
				}]
			},
			"freezeRenderState": {
				"name": "冻结状态类",
				"src": ["../docs/Documentation/freezeRenderState.html"],
				"modules": [{
					"name": "freezeRenderState",
					"des": "冻结状态类",
					"des_en": "freezeRenderState"
				}]
			},
			"loadCubeMap": {
				"name": "加载立方体贴图类",
				"src": ["../docs/Documentation/loadCubeMap.html"],
				"modules": [{
					"name": "loadCubeMap",
					"des": "加载立方体贴图类",
					"des_en": "loadCubeMap"
				}]
			},
			"PassState": {
				"name": "正在执行命令的状态类",
				"src": ["../docs/Documentation/PassState.html"],
				"modules": [{
					"name": "PassState",
					"des": "正在执行命令的状态类",
					"des_en": "PassState"
				}]
			},
			"PositionMode": {
				"name": "设置位置模式类型类",
				"src": ["../docs/Documentation/PositionMode.html"],
				"modules": [{
					"name": "PositionMode",
					"des": "设置位置模式类型类",
					"des_en": "PositionMode"
				}]
			},
			
			"ShaderCache": {
				"name": "着色器缓存类",
				"src": ["../docs/Documentation/ShaderCache.html"],
				"modules": [{
					"name": "ShaderCache",
					"des": "着色器缓存类",
					"des_en": "ShaderCache"
				}]
			},
			"ShaderProgram": {
				"name": "着色器程序类",
				"src": ["../docs/Documentation/ShaderProgram.html"],
				"modules": [{
					"name": "ShaderProgram",
					"des": "着色器程序类",
					"des_en": "ShaderProgram"
				}]
			},
			"ShaderSource": {
				"name": "着色器源文件类",
				"src": ["../docs/Documentation/ShaderSource.html"],
				"modules": [{
					"name": "ShaderSource",
					"des": "着色器源文件类",
					"des_en": "ShaderSource"
				}]
			},
			"Style3D": {
				"name": "3D风格类",
				"src": ["../docs/Documentation/Style3D.html"],
				"modules": [{
					"name": "Style3D",
					"des": "3D风格类",
					"des_en": "Style3D"
				}]
			},
			"Texture": {
				"name": "纹理类",
				"src": ["../docs/Documentation/Texture.html"],
				"modules": [{
					"name": "Texture",
					"des": "纹理类",
					"des_en": "Texture"
				}]
			},
			"TextureCache": {
				"name": "纹理缓存类",
				"src": ["../docs/Documentation/TextureCache.html"],
				"modules": [{
					"name": "TextureCache",
					"des": "纹理缓存类",
					"des_en": "TextureCache"
				}]
			},
			"TextureWrap": {
				"name": "纹理贴图方式类",
				"src": ["../docs/Documentation/TextureWrap.html"],
				"modules": [{
					"name": "TextureWrap",
					"des": "纹理贴图方式类",
					"des_en": "TextureWrap"
				}]
			},
			"UniformState": {
				"name": "统一值对象类",
				"src": ["../docs/Documentation/UniformState.html"],
				"modules": [{
					"name": "UniformState",
					"des": "统一值对象类",
					"des_en": "UniformState"
				}]
			},
			"VertexArray": {
				"name": "顶点数组类",
				"src": ["../docs/Documentation/VertexArray.html"],
				"modules": [{
					"name": "VertexArray",
					"des": "顶点数组类",
					"des_en": "VertexArray"
				}]
			},
			"VertexArrayFacade": {
				"name": "顶点数组面类",
				"src": ["../docs/Documentation/VertexArrayFacade.html"],
				"modules": [{
					"name": "VertexArrayFacade",
					"des": "顶点数组面类",
					"des_en": "VertexArrayFacade"
				}]
			}
		},
		"S3MTiles": {
			"title": "S3M瓦片",
			"description": "S3M瓦片",
			"description_en": "S3MTiles",

			"BufferManager": {
				"name": "缓存管理类",
				"src": ["../docs/Documentation/BufferManager.html"],
				"modules": [{
					"name": "BufferManager",
					"des": "缓存管理类",
					"des_en": "BufferManager"
				}]
			},
			"CategoryVisibleMode": {
				"name": "按特征值显隐类",
				"src": ["../docs/Documentation/CategoryVisibleMode.html"],
				"modules": [{
					"name": "CategoryVisibleMode",
					"des": "按特征值显隐类",
					"des_en": "CategoryVisibleMode"
				}]
			},
			"ClipPlaneMode": {
				"name": "裁剪面的截面模式类",
				"src": ["../docs/Documentation/ClipPlaneMode.html"],
				"modules": [{
					"name": "ClipPlaneMode",
					"des": "裁剪面的截面模式类",
					"des_en": "ClipPlaneMode"
				}]
			},
			"DynamicLayer3D": {
				"name": "三维动态图层类",
				"src": ["../docs/Documentation/DynamicLayer3D.html"],
				"modules": [{
					"name": "DynamicLayer3D",
					"des": "三维动态图层类",
					"des_en": "DynamicLayer3D"
				}]
			},
			"DDSTexture": {
				"name": "DDS纹理对象",
				"src": ["../docs/Documentation/SCTTerrainProvider.html"],
				"modules": [{
					"name": "DDSTexture",
					"des": "DDS纹理对象",
					"des_en": "Open file components"
				}]
			},
			"DDSTextureManager": {
				"name": "DDS纹理管理器类",
				"src": ["../docs/Documentation/DDSTextureManager.html"],
				"modules": [{
					"name": "DDSTextureManager",
					"des": "DDS纹理管理器类",
					"des_en": "DDSTextureManager"
				}]
			},
			"DynamicObjectState": {
				"name": "动态实例对象状态信息类",
				"src": ["../docs/Documentation/DynamicObjectState.html"],
				"modules": [{
					"name": "DynamicObjectState",
					"des": "动态实例对象状态信息类",
					"des_en": "DynamicObjectState"
				}]
			},
			"EmissionTextureUnit": {
				"name": "设置自发光纹理单元类",
				"src": ["../docs/Documentation/EmissionTextureUnit.html"],
				"modules": [{
					"name": "EmissionTextureUnit",
					"des": "设置自发光纹理单元类",
					"des_en": "EmissionTextureUnit"
				}]
			},
			"EmissionTextureUnit": {
				"name": "设置自发光纹理单元类",
				"src": ["../docs/Documentation/EmissionTextureUnit.html"],
				"modules": [{
					"name": "EmissionTextureUnit",
					"des": "设置自发光纹理单元类",
					"des_en": "EmissionTextureUnit"
				}]
			},
			"InstancedType": {
				"name": "实例化类型类",
				"src": ["../docs/Documentation/InstancedType.html"],
				"modules": [{
					"name": "InstancedType",
					"des": "实例化类型类",
					"des_en": "InstancedType"
				}]
			},
			"InstanceLayer": {
				"name": "实例化图层类",
				"src": ["../docs/Documentation/InstanceLayer.html"],
				"modules": [{
					"name": "InstanceLayer",
					"des": "实例化图层类",
					"des_en": "InstanceLayer"
				}]
			},
			"InterpolationType": {
				"name": "插值类型类",
				"src": ["../docs/Documentation/InterpolationType.html"],
				"modules": [{
					"name": "InterpolationType",
					"des": "插值类型类",
					"des_en": "InterpolationType"
				}]
			},
			"Layers": {
				"name": "图层集合类",
				"src": ["../docs/Documentation/Layers.html"],
				"modules": [{
					"name": "Layers",
					"des": "图层集合类",
					"des_en": "Layers"
				}]
			},
			"LightSourceType": {
				"name": "光源类型类",
				"src": ["../docs/Documentation/LightSourceType.html"],
				"modules": [{
					"name": "LightSourceType",
					"des": "光源类型类",
					"des_en": "LightSourceType"
				}]
			},
			"LoadingPriorityMode": {
				"name": "加载优先级类",
				"src": ["../docs/Documentation/LoadingPriorityMode.html"],
				"modules": [{
					"name": "LoadingPriorityMode",
					"des": "加载优先级类",
					"des_en": "LoadingPriorityMode"
				}]
			},
			"LoadingPriorityMode": {
				"name": "加载优先级类",
				"src": ["../docs/Documentation/LoadingPriorityMode.html"],
				"modules": [{
					"name": "LoadingPriorityMode",
					"des": "加载优先级类",
					"des_en": "LoadingPriorityMode"
				}]
			},
			"ModifyRegionMode": {
				"name": "多边形对象裁剪S3M图层的裁剪模式",
				"src": ["../docs/Documentation/ModifyRegionMode.html"],
				"modules": [{
					"name": "ModifyRegionMode",
					"des": "多边形对象裁剪S3M图层的裁剪模式",
					"des_en": "ModifyRegionMode"
				}]
			},
			"MixColorType": {
				"name": "图层颜色混合模式类",
				"src": ["../docs/Documentation/MixColorType.html"],
				"modules": [{
					"name": "MixColorType",
					"des": "图层颜色混合模式类",
					"des_en": "MixColorType"
				}]
			},
			"PointCloudClassificationInfo": {
				"name": "点云分类信息类",
				"src": ["../docs/Documentation/PointCloudClassificationInfo.html"],
				"modules": [{
					"name": "PointCloudClassificationInfo",
					"des": "点云分类信息类",
					"des_en": "PointCloudClassificationInfo"
				}]
			},
			"S3MBloomEffect": {
				"name": "S3M图层垂直方向泛光效果类",
				"src": ["../docs/Documentation/S3MBloomEffect.html"],
				"modules": [{
					"name": "S3MBloomEffect",
					"des": "S3M图层垂直方向泛光效果类",
					"des_en": "S3MBloomEffect"
				}]
			},
			"S3MGroupLayer": {
				"name": "S3M图层垂直方向泛光效果类",
				"src": ["../docs/Documentation/S3MGroupLayer.html"],
				"modules": [{
					"name": "S3MGroupLayer",
					"des": "S3M图层垂直方向泛光效果类",
					"des_en": "S3MGroupLayer"
				}]
			},
			"S3MInstance": {
				"name": "S3M模型实例对象类",
				"src": ["../docs/Documentation/S3MInstance.html"],
				"modules": [{
					"name": "S3MInstance",
					"des": "S3M模型实例对象类",
					"des_en": "S3MInstance"
				}]
			},
			"S3MInstanceCollection": {
				"name": "S3M实例化模型集合类",
				"src": ["../docs/Documentation/S3MInstanceCollection.html"],
				"modules": [{
					"name": "S3MInstanceCollection",
					"des": "S3M实例化模型集合类",
					"des_en": "S3MInstanceCollection"
				}]
			},
			"S3MInstanceCollection": {
				"name": "S3M实例化模型集合类",
				"src": ["../docs/Documentation/S3MInstanceCollection.html"],
				"modules": [{
					"name": "S3MInstanceCollection",
					"des": "S3M实例化模型集合类",
					"des_en": "S3MInstanceCollection"
				}]
			},
			"S3MPolylineEffect": {
				"name": "S3M特效线类",
				"src": ["../docs/Documentation/S3MPolylineEffect.html"],
				"modules": [{
					"name": "S3MPolylineEffect",
					"des": "S3M特效线类",
					"des_en": "S3MPolylineEffect"
				}]
			},
			"S3MTilesLabelStyle": {
				"name": "S3M标签风格类",
				"src": ["../docs/Documentation/S3MTilesLabelStyle.html"],
				"modules": [{
					"name": "S3MTilesLabelStyle",
					"des": "S3M标签风格类",
					"des_en": "S3MTilesLabelStyle"
				}]
			},
			"S3MTilesLayer": {
				"name": "S3M(Spatial 3D Model)图层类",
				"src": ["../docs/Documentation/SCTTerrainProvider.html"],
				"modules": [{
					"name": "S3MTilesLayer",
					"des": "S3M(Spatial 3D Model)图层类",
					"des_en": "Open file components"
				}]
			},
			"SplitDirection": {
				"name": "卷帘方向模式类",
				"src": ["../docs/Documentation/SplitDirection.html"],
				"modules": [{
					"name": "SplitDirection",
					"des": "卷帘方向模式类",
					"des_en": "SplitDirection"
				}]
			},
			"S3MPixelFormat": {
				"name": "S3M纹理像素格式",
				"src": ["../docs/Documentation/S3MPixelFormat.html"],
				"modules": [{
					"name": "S3MPixelFormat",
					"des": "S3M纹理像素格式",
					"des_en": "S3MPixelFormat"
				}]
			},
			"ObjsOperationType": {
				"name": "功能操作类型类",
				"src": ["../docs/Documentation/ObjsOperationType.html"],
				"modules": [{
					"name": "ObjsOperationType",
					"des": "功能操作类型类",
					"des_en": "ObjsOperationType"
				}]
			},
			"S3MCompressType": {
				"name": "S3M纹理压缩类型类",
				"src": ["../docs/Documentation/S3MCompressType.html"],
				"modules": [{
					"name": "S3MCompressType",
					"des": "S3M纹理压缩类型类",
					"des_en": "S3MCompressType"
				}]
			},
			"PBRMaterialType": {
				"name": "设置PBR材质类型类",
				"src": ["../docs/Documentation/PBRMaterialType.html"],
				"modules": [{
					"name": "PBRMaterialType",
					"des": "设置PBR材质类型类",
					"des_en": "PBRMaterialType"
				}]
			},
			"RANGEMODE": {
				"name": "子对象过滤模式类",
				"src": ["../docs/Documentation/RANGEMODE.html"],
				"modules": [{
					"name": "RANGEMODE",
					"des": "子对象过滤模式类",
					"des_en": "RANGEMODE"
				}]
			},
			"SelectColorType": {
				"name": "选取对象的显示风格类",
				"src": ["../docs/Documentation/SelectColorType.html"],
				"modules": [{
					"name": "SelectColorType",
					"des": "选取对象的显示风格类",
					"des_en": "SelectColorType"
				}]
			},
			"ShadowType": {
				"name": "阴影显示范围类型常量类",
				"src": ["../docs/Documentation/ShadowType.html"],
				"modules": [{
					"name": "ShadowType",
					"des": "阴影显示范围类型常量类",
					"des_en": "ShadowType"
				}]
			},
			"UrlType": {
				"name": "S3M图层数据请求形式",
				"src": ["../docs/Documentation/UrlType.html"],
				"modules": [{
					"name": "UrlType",
					"des": "S3M图层数据请求形式",
					"des_en": "UrlType"
				}]
			},

		},
		"Scene": {
			"title": "三维场景模块",
			"description": "三维场景模块",
			"description_en": "Scene ",
			"Appearance ": {
				"name": "外观类",
				"src": ["../docs/Documentation/Appearance.html"],
				"modules": [{
					"name": "Appearance",
					"des": "外观类",
					"des_en": "Appearance"
				}]
			},
			"ArcGisMapServerImageryProvider": {
				"name": "ArcGis影像服务缓存类",
				"src": ["../docs/Documentation/ArcGisMapServerImageryProvider.html"],
				"modules": [{
					"name": "ArcGisMapServerImageryProvider",
					"des": "ArcGis影像服务缓存类",
					"des_en": "ArcGisMapServerImageryProvider"
				}]
			},
			"Billboard": {
				"name": "布告板类",
				"src": ["../docs/Documentation/Billboard.html"],
				"modules": [{
					"name": "Billboard",
					"des": "布告板类",
					"des_en": "Billboard"
				}]
			},
			"BillboardCollection": {
				"name": "布告板集合类",
				"src": ["../docs/Documentation/BillboardCollection.html"],
				"modules": [{
					"name": "BillboardCollection",
					"des": "布告板集合类",
					"des_en": "BillboardCollection"
				}]
			},
			"BillboardCollection": {
				"name": "布告板集合类",
				"src": ["../docs/Documentation/BillboardCollection.html"],
				"modules": [{
					"name": "BillboardCollection",
					"des": "布告板集合类",
					"des_en": "BillboardCollection"
				}]
			},
			"BingMapsStyle": {
				"name": "BingMap地图风格类",
				"src": ["../docs/Documentation/BingMapsStyle.html"],
				"modules": [{
					"name": "BingMapsStyle",
					"des": "BingMap地图风格类",
					"des_en": "BingMapsStyle"
				}]
			},
			"BingMapsImageryProvider": {
				"name": "Bing Maps影像服务类",
				"src": ["../docs/Documentation/BingMapsImageryProvider.html"],
				"modules": [{
					"name": "BingMapsImageryProvider",
					"des": "Bing Maps影像服务提供类",
					"des_en": "BingMapsImageryProvider"
				}]
			},
			"BlendEquation": {
				"name": "混合方程类",
				"src": ["../docs/Documentation/BlendEquation.html"],
				"modules": [{
					"name": "BlendEquation",
					"des": "混合方程类",
					"des_en": "BlendEquation"
				}]
			},
			"BlendFunction": {
				"name": "混合函数类",
				"src": ["../docs/Documentation/BlendFunction.html"],
				"modules": [{
					"name": "BlendFunction",
					"des": "混合函数类",
					"des_en": "BlendFunction"
				}]
			},
			"BlendingState": {
				"name": "混合状态类",
				"src": ["../docs/Documentation/BlendingState.html"],
				"modules": [{
					"name": "BlendingState",
					"des": "混合状态类",
					"des_en": "BlendingState"
				}]
			},
			"BlendOption": {
				"name": "混合选项类",
				"src": ["../docs/Documentation/BlendOption.html"],
				"modules": [{
					"name": "BlendOption",
					"des": "混合选项类",
					"des_en": "BlendOption"
				}]
			},
			"BlendOption": {
				"name": "混合选项类",
				"src": ["../docs/Documentation/BlendOption.html"],
				"modules": [{
					"name": "BlendOption",
					"des": "混合选项类",
					"des_en": "BlendOption"
				}]
			},
			"BloomEffect": {
				"name": "泛光效果类",
				"src": ["../docs/Documentation/BloomEffect.html"],
				"modules": [{
					"name": "BloomEffect",
					"des": "泛光效果类",
					"des_en": "BloomEffect"
				}]
			},
			"Camera": {
				"name": "相机类",
				"src": ["../docs/Documentation/Camera.html"],
				"modules": [{
					"name": "Camera",
					"des": "相机类",
					"des_en": "Camera"
				}]
			},
			"CameraEventAggregator": {
				"name": "相机事件聚合类",
				"src": ["../docs/Documentation/CameraEventAggregator.html"],
				"modules": [{
					"name": "CameraEventAggregator",
					"des": "相机事件聚合类",
					"des_en": "CameraEventAggregator"
				}]
			},
			"CameraEventType": {
				"name": "相机事件类型类",
				"src": ["../docs/Documentation/CameraEventType.html"],
				"modules": [{
					"name": "CameraEventType",
					"des": "相机事件类型类",
					"des_en": "CameraEventType"
				}]
			},
			"Cesium3DTile": {
				"name": "Cesium三维瓦片类",
				"src": ["../docs/Documentation/Cesium3DTile.html"],
				"modules": [{
					"name": "Cesium3DTile",
					"des": "Cesium三维瓦片类",
					"des_en": "Cesium3DTile"
				}]
			},
			"Cesium3DTileColorBlendMode": {
				"name": "Cesium三维瓦片颜色混合模式类",
				"src": ["../docs/Documentation/Cesium3DTileColorBlendMode.html"],
				"modules": [{
					"name": "Cesium3DTileColorBlendMode",
					"des": "Cesium三维瓦片颜色混合模式类",
					"des_en": "Cesium3DTileColorBlendMode"
				}]
			},
			"Cesium3DTileContent": {
				"name": "Cesium三维瓦片内容类",
				"src": ["../docs/Documentation/Cesium3DTileContent.html"],
				"modules": [{
					"name": "Cesium3DTileContent",
					"des": "Cesium三维瓦片内容类",
					"des_en": "Cesium3DTileContent"
				}]
			},
			"Cesium3DTileFeature": {
				"name": "Cesium三维瓦片特性类",
				"src": ["../docs/Documentation/Cesium3DTileFeature.html"],
				"modules": [{
					"name": "Cesium3DTileFeature",
					"des": "Cesium三维瓦片特性类",
					"des_en": "Cesium3DTileFeature"
				}]
			},
			"Cesium3DTileset": {
				"name": "Cesium三维瓦片组类",
				"src": ["../docs/Documentation/Cesium3DTileset.html"],
				"modules": [{
					"name": "Cesium3DTileset",
					"des": "Cesium三维瓦片组类",
					"des_en": "Cesium3DTileset"
				}]
			},
			"Cesium3DTileStyle": {
				"name": "Cesium三维瓦片风格类",
				"src": ["../docs/Documentation/Cesium3DTileStyle.html"],
				"modules": [{
					"name": "Cesium3DTileStyle",
					"des": "Cesium三维瓦片风格类",
					"des_en": "Cesium3DTileStyle"
				}]
			},
			"CGCS2000MapServerImageryProvider": {
				"name": "CGCS2000地图服务影像提供类",
				"src": ["../docs/Documentation/CGCS2000MapServerImageryProvider.html"],
				"modules": [{
					"name": "CGCS2000MapServerImageryProvider",
					"des": "CGCS2000地图服务影像提供类",
					"des_en": "CGCS2000MapServerImageryProvider"
				}]
			},
			"ClassificationType": {
				"name": "分类类型类",
				"src": ["../docs/Documentation/ClassificationType.html"],
				"modules": [{
					"name": "ClassificationType",
					"des": "分类类型类",
					"des_en": "ClassificationType"
				}]
			},
			"ClippingType": {
				"name": "裁剪模式类",
				"src": ["../docs/Documentation/ClippingType.html"],
				"modules": [{
					"name": "ClippingType",
					"des": "裁剪模式类",
					"des_en": "ClippingType"
				}]
			},
			"CloudBox": {
				"name": "云层类",
				"src": ["../docs/Documentation/CloudBox.html"],
				"modules": [{
					"name": "CloudBox",
					"des": "云层类",
					"des_en": "CloudBox"
				}]
			},
			"ColorBlendMode": {
				"name": "颜色混合模式类",
				"src": ["../docs/Documentation/ColorBlendMode.html"],
				"modules": [{
					"name": "ColorBlendMode",
					"des": "颜色混合模式类",
					"des_en": "ColorBlendMode"
				}]
			},
			"ColorCorrection": {
				"name": "颜色校正类",
				"src": ["../docs/Documentation/ColorCorrection.html"],
				"modules": [{
					"name": "ColorCorrection",
					"des": "颜色校正类",
					"des_en": "ColorCorrection"
				}]
			},
			"ConditionsExpression": {
				"name": "条件表达式类",
				"src": ["../docs/Documentation/ConditionsExpression.html"],
				"modules": [{
					"name": "ConditionsExpression",
					"des": "条件表达式类",
					"des_en": "ConditionsExpression"
				}]
			},
			"ControlMode": {
				"name": "设置相机的操作模式类",
				"src": ["../docs/Documentation/ControlMode.html"],
				"modules": [{
					"name": "ControlMode",
					"des": "设置相机的操作模式类",
					"des_en": "ControlMode"
				}]
			},
			"createOpenStreetMapImageryProvider": {
				"name": "创建 OpenStreetMap影像提供类",
				"src": ["../docs/Documentation/createOpenStreetMapImageryProvider.html"],
				"modules": [{
					"name": "createOpenStreetMapImageryProvider",
					"des": "创建 OpenStreetMap影像提供类",
					"des_en": "createOpenStreetMapImageryProvider"
				}]
			},
			"createTangentSpaceDebugPrimitive": {
				"name": "创建切线空间调试原型类",
				"src": ["../docs/Documentation/createTangentSpaceDebugPrimitive.html"],
				"modules": [{
					"name": "createTangentSpaceDebugPrimitive",
					"des": "创建切线空间调试原型类",
					"des_en": "createTangentSpaceDebugPrimitive"
				}]
			},
			"createTileMapServiceImageryProvider": {
				"name": "创建 TileMap 影像服务提供类",
				"src": ["../docs/Documentation/createTileMapServiceImageryProvider.html"],
				"modules": [{
					"name": "createTileMapServiceImageryProvider",
					"des": "创建 TileMap 影像服务提供类",
					"des_en": "createTileMapServiceImageryProvider"
				}]
			},
			"CreditDisplay": {
				"name": "信息展示类",
				"src": ["../docs/Documentation/CreditDisplay.html"],
				"modules": [{
					"name": "CreditDisplay",
					"des": "信息展示类",
					"des_en": "CreditDisplay"
				}]
			},
			"CullFace": {
				"name": "剔除三角形类",
				"src": ["../docs/Documentation/CullFace.html"],
				"modules": [{
					"name": "CullFace",
					"des": "剔除三角形类",
					"des_en": "CullFace"
				}]
			},
			"CullingVolume": {
				"name": "剔除体积类",
				"src": ["../docs/Documentation/CullingVolume.html"],
				"modules": [{
					"name": "CullingVolume",
					"des": "剔除体积类",
					"des_en": "CullingVolume"
				}]
			},
			"DebugAppearance": {
				"name": "调试外观类",
				"src": ["../docs/Documentation/DebugAppearance.html"],
				"modules": [{
					"name": "DebugAppearance",
					"des": "调试外观类",
					"des_en": "DebugAppearance"
				}]
			},
			"DebugAppearance": {
				"name": "相机视锥体类",
				"src": ["../docs/Documentation/DebugAppearance.html"],
				"modules": [{
					"name": "DebugAppearance",
					"des": "相机视锥体类",
					"des_en": "DebugAppearance"
				}]
			},
			"DebugModelMatrixPrimitive": {
				"name": "创建坐标轴类",
				"src": ["../docs/Documentation/DebugModelMatrixPrimitive.html"],
				"modules": [{
					"name": "DebugModelMatrixPrimitive",
					"des": "创建坐标轴类",
					"des_en": "DebugModelMatrixPrimitive"
				}]
			},
			"DepthFunction": {
				"name": "深度函数类",
				"src": ["../docs/Documentation/DepthFunction.html"],
				"modules": [{
					"name": "DepthFunction",
					"des": "深度函数类",
					"des_en": "DepthFunction"
				}]
			},
			"DepthOfFieldEffect": {
				"name": "景深效果类",
				"src": ["../docs/Documentation/DepthOfFieldEffect.html"],
				"modules": [{
					"name": "DepthOfFieldEffect",
					"des": "景深效果类",
					"des_en": "DepthOfFieldEffect"
				}]
			},
			"DiscardColorTileImagePolicy": {
				"name": "丢弃影像切片颜色比例类",
				"src": ["../docs/Documentation/DiscardColorTileImagePolicy.html"],
				"modules": [{
					"name": "DiscardColorTileImagePolicy",
					"des": "丢弃影像切片颜色比例类",
					"des_en": "DiscardColorTileImagePolicy"
				}]
			},
			"DiscardMissingTileImagePolicy": {
				"name": "丢弃缺失的影像切片类",
				"src": ["../docs/Documentation/DiscardMissingTileImagePolicy.html"],
				"modules": [{
					"name": "DiscardMissingTileImagePolicy",
					"des": "丢弃缺失的影像切片类",
					"des_en": "DiscardMissingTileImagePolicy"
				}]
			},
			"EllipsoidSurfaceAppearance": {
				"name": "椭圆体表面的几何外观类",
				"src": ["../docs/Documentation/EllipsoidSurfaceAppearance.html"],
				"modules": [{
					"name": "EllipsoidSurfaceAppearance",
					"des": "椭圆体表面的几何外观类",
					"des_en": "EllipsoidSurfaceAppearance"
				}]
			},
			"Expression": {
				"name": "表达式类",
				"src": ["../docs/Documentation/Expression.html"],
				"modules": [{
					"name": "Expression",
					"des": "表达式类",
					"des_en": "Expression"
				}]
			},
			"FieldLayer3D": {
				"name": "场数据图层类",
				"src": ["../docs/Documentation/FieldLayer3D.html"],
				"modules": [{
					"name": "FieldLayer3D",
					"des": "场数据图层类",
					"des_en": "FieldLayer3D"
				}]
			},
			"FillStyle": {
				"name": "S3M图层填充风格类",
				"src": ["../docs/Documentation/FillStyle.html"],
				"modules": [{
					"name": "FillStyle",
					"des": "S3M图层填充风格类",
					"des_en": "FillStyle"
				}]
			},
			"FloodAnalysis3D": {
				"name": "淹没分析类",
				"src": ["../docs/Documentation/FloodAnalysis3D.html"],
				"modules": [{
					"name": "FloodAnalysis3D",
					"des": "淹没分析类",
					"des_en": "FloodAnalysis3D"
				}]
			},
			"FlyInterpolationMode": {
				"name": "相机飞行插值模式类",
				"src": [
					"../docs/Documentation/FlyInterpolationMode.html"
				],
				"modules": [{
					"name": "FlyInterpolationMode",
					"des": "相机飞行插值模式类",
					"des_en": "FlyInterpolationMode"
				}]
			},
			"Fog": {
				"name": "雾气类",
				"src": ["../docs/Documentation/Fog.html"],
				"modules": [{
					"name": "Fog",
					"des": "雾气类",
					"des_en": "Fog"
				}]
			},
			"FrameRateMonitor": {
				"name": "帧率监控类",
				"src": ["../docs/Documentation/FrameRateMonitor.html"],
				"modules": [{
					"name": "FrameRateMonitor",
					"des": "帧率监控类",
					"des_en": "FrameRateMonitor"
				}]
			},
			"GetFeatureInfoFormat": {
				"name": "获取WTS服务器特征信息类",
				"src": ["../docs/Documentation/GetFeatureInfoFormat.html"],
				"modules": [{
					"name": "GetFeatureInfoFormat",
					"des": "获取WTS服务器特征信息类",
					"des_en": "GetFeatureInfoFormat"
				}]
			},
			"Globe": {
				"name": "场景中的球体类",
				"src": ["../docs/Documentation/Globe.html"],
				"modules": [{
					"name": "Globe",
					"des": "场景中的球体类",
					"des_en": "Globe"
				}]
			},
			"GoogleEarthEnterpriseImageryProvider": {
				"name": "GoogleEarth影像服务提供类",
				"src": ["../docs/Documentation/GoogleEarthEnterpriseImageryProvider.html"],
				"modules": [{
					"name": "GoogleEarthEnterpriseImageryProvider",
					"des": "GoogleEarth影像服务提供类",
					"des_en": "GoogleEarthEnterpriseImageryProvider"
				}]
			},
			"GoogleEarthEnterpriseMapsProvider": {
				"name": "GoogleEarth地图服务提供类",
				"src": ["../docs/Documentation/GoogleEarthEnterpriseMapsProvider.html"],
				"modules": [{
					"name": "GoogleEarthEnterpriseMapsProvider",
					"des": "GoogleEarth地图服务提供类",
					"des_en": "GoogleEarthEnterpriseMapsProvider"
				}]
			},
			"GoogleEarthImageryProvider": {
				"name": "GoogleEarth影像提供类",
				"src": ["../docs/Documentation/GoogleEarthImageryProvider.html"],
				"modules": [{
					"name": "GoogleEarthImageryProvider",
					"des": "GoogleEarth影像提供类",
					"des_en": "GoogleEarthImageryProvider"
				}]
			},
			"GridImagery": {
				"name": "栅格影像类",
				"src": ["../docs/Documentation/GridImagery.html"],
				"modules": [{
					"name": "GridImagery",
					"des": "栅格影像类",
					"des_en": "GridImagery"
				}]
			},
			"GridImageryProvider": {
				"name": "栅格影像提供类",
				"src": ["../docs/Documentation/GridImageryProvider.html"],
				"modules": [{
					"name": "GridImageryProvider",
					"des": "栅格影像提供类",
					"des_en": "GridImageryProvider"
				}]
			},
			"GridLayer": {
				"name": "栅格图层类",
				"src": ["../docs/Documentation/GridLayer.html"],
				"modules": [{
					"name": "GridLayer",
					"des": "栅格图层类",
					"des_en": "GridLayer"
				}]
			},
			"GridProvider": {
				"name": "栅格切片服务提供类",
				"src": ["../docs/Documentation/GridProvider.html"],
				"modules": [{
					"name": "GridProvider",
					"des": "栅格切片服务提供类",
					"des_en": "GridProvider"
				}]
			},
			"GroundPrimitive": {
				"name": "几何图标贴地类",
				"src": ["../docs/Documentation/GroundPrimitive.html"],
				"modules": [{
					"name": "GroundPrimitive",
					"des": "几何图标贴地类",
					"des_en": "GroundPrimitive"
				}]
			},
			"HeatMap": {
				"name": "热力图类",
				"src": ["../docs/Documentation/HeatMap.html"],
				"modules": [{
					"name": "HeatMap",
					"des": "热力图类",
					"des_en": "HeatMap"
				}]
			},
			"HeightReference": {
				"name": "相对高度类",
				"src": ["../docs/Documentation/HeightReference.html"],
				"modules": [{
					"name": "HeightReference",
					"des": "相对高度类",
					"des_en": "HeightReference"
				}]
			},
			"HorizontalOrigin": {
				"name": "水平原点类",
				"src": ["../docs/Documentation/HorizontalOrigin.html"],
				"modules": [{
					"name": "HorizontalOrigin",
					"des": "水平原点类",
					"des_en": "HorizontalOrigin"
				}]
			},
			"ImageryLayer": {
				"name": "影像图层类",
				"src": ["../docs/Documentation/ImageryLayer.html"],
				"modules": [{
					"name": "ImageryLayer",
					"des": "影像图层类",
					"des_en": "ImageryLayer"
				}]
			},
			"ImageryLayerCollection": {
				"name": "影像图层集合类",
				"src": ["../docs/Documentation/ImageryLayer.html"],
				"modules": [{
					"name": "ImageryLayer",
					"des": "影像图层集合类",
					"des_en": "ImageryLayer"
				}]
			},
			"ImageryLayerFeatureInfo": {
				"name": "影像图层要素类",
				"src": ["../docs/Documentation/ImageryLayerFeatureInfo.html"],
				"modules": [{
					"name": "ImageryLayerFeatureInfo",
					"des": "影像图层要素类",
					"des_en": "ImageryLayerFeatureInfo"
				}]
			},
			"ImageryProvider": {
				"name": "影像图层提供类",
				"src": ["../docs/Documentation/ImageryProvider.html"],
				"modules": [{
					"name": "ImageryProvider",
					"des": "影像图层提供类",
					"des_en": "ImageryProvider"
				}]
			},
			"ImagerySplitDirection": {
				"name": "影像图层分区域显示类",
				"src": ["../docs/Documentation/ImagerySplitDirection.html"],
				"modules": [{
					"name": "ImagerySplitDirection",
					"des": "影像图层分区域显示类",
					"des_en": "ImagerySplitDirection"
				}]
			},
			"Label": {
				"name": "标签类",
				"src": ["../docs/Documentation/Label.html"],
				"modules": [{
					"name": "Label",
					"des": "标签类",
					"des_en": "Label"
				}]
			},
			"LabelCollection": {
				"name": "标签集合类",
				"src": ["../docs/Documentation/LabelCollection.html"],
				"modules": [{
					"name": "LabelCollection",
					"des": "标签集合类",
					"des_en": "LabelCollection"
				}]
			},
			"LabelStyle": {
				"name": "标签风格类",
				"src": ["../docs/Documentation/LabelStyle.html"],
				"modules": [{
					"name": "LabelStyle",
					"des": "标签风格类",
					"des_en": "LabelStyle"
				}]
			},
			"Layers": {
				"name": "图层集合类",
				"src": ["../docs/Documentation/Layers.html"],
				"modules": [{
					"name": "Layers",
					"des": "图层集合类",
					"des_en": "Layers"
				}]
			},
			"MapboxImageryProvider": {
				"name": "Mapbox影像提供类",
				"src": ["../docs/Documentation/MapboxImageryProvider.html"],
				"modules": [{
					"name": "MapboxImageryProvider",
					"des": "Mapbox影像提供类",
					"des_en": "MapboxImageryProvider"
				}]
			},
			"MapMode2D": {
				"name": "二维地图模式类",
				"src": ["../docs/Documentation/MapMode2D.html"],
				"modules": [{
					"name": "MapMode2D",
					"des": "二维地图模式类",
					"des_en": "MapMode2D"
				}]
			},
			"Material": {
				"name": "材质类",
				"src": ["../docs/Documentation/Material.html"],
				"modules": [{
					"name": "Material",
					"des": "材质类",
					"des_en": "Material"
				}]
			},
			"MaterialAppearance": {
				"name": "材质外观类",
				"src": ["../docs/Documentation/MaterialAppearance.html"],
				"modules": [{
					"name": "MaterialAppearance",
					"des": "材质外观类",
					"des_en": "MaterialAppearance"
				}]
			},
			"MemoryManager": {
				"name": "内存管理类",
				"src": ["../docs/Documentation/MemoryManager.html"],
				"modules": [{
					"name": "MemoryManager",
					"des": "内存管理类",
					"des_en": "MemoryManager"
				}]
			},
			"Model": {
				"name": "模型类",
				"src": ["../docs/Documentation/Model.html"],
				"modules": [{
					"name": "Model",
					"des": "模型类",
					"des_en": "Model"
				}]
			},
			"ModelAnimation": {
				"name": "模型动画类",
				"src": ["../docs/Documentation/ModelAnimation.html"],
				"modules": [{
					"name": "ModelAnimation",
					"des": "模型动画类",
					"des_en": "ModelAnimation"
				}]
			},
			"ModelAnimationCollection": {
				"name": "模型动画集合类",
				"src": ["../docs/Documentation/ModelAnimationCollection.html"],
				"modules": [{
					"name": "ModelAnimationCollection",
					"des": "模型动画集合类",
					"des_en": "ModelAnimationCollection"
				}]
			},
			"ModelAnimationLoop": {
				"name": "模型动画循环类",
				"src": ["../docs/Documentation/ModelAnimationLoop.html"],
				"modules": [{
					"name": "ModelAnimationLoop",
					"des": "模型动画循环类",
					"des_en": "ModelAnimationLoop"
				}]
			},
			"ModelMaterial": {
				"name": "模型材质类",
				"src": ["../docs/Documentation/ModelMaterial.html"],
				"modules": [{
					"name": "ModelMaterial",
					"des": "模型材质类",
					"des_en": "ModelMaterial"
				}]
			},
			"ModelMesh": {
				"name": "模型网格类",
				"src": ["../docs/Documentation/ModelMesh.html"],
				"modules": [{
					"name": "ModelMesh",
					"des": "模型网格类",
					"des_en": "ModelMesh"
				}]
			},
			"ModelNode": {
				"name": "模型节点类",
				"src": ["../docs/Documentation/ModelNode.html"],
				"modules": [{
					"name": "ModelNode",
					"des": "模型节点类",
					"des_en": "ModelNode"
				}]
			},
			"Moon": {
				"name": "月球",
				"src": ["../docs/Documentation/Moon.html"],
				"modules": [{
					"name": "Moon",
					"des": "月球",
					"des_en": "Moon"
				}]
			},
			"MultiViewportMode": {
				"name": "多视口模式类",
				"src": ["../docs/Documentation/MultiViewportMode.html"],
				"modules": [{
					"name": "MultiViewportMode",
					"des": "多视口模式类",
					"des_en": "MultiViewportMode"
				}]
			},
			"NeverTileDiscardPolicy": {
				"name": "不丢弃瓦片类",
				"src": ["../docs/Documentation/NeverTileDiscardPolicy.html"],
				"modules": [{
					"name": "NeverTileDiscardPolicy",
					"des": "不丢弃瓦片类",
					"des_en": "NeverTileDiscardPolicy"
				}]
			},
			"OrthographicOffCenterFrustum": {
				"name": "视椎体类",
				"src": [
					"../docs/Documentation/OrthographicOffCenterFrustum.html"
				],
				"modules": [{
					"name": "OrthographicOffCenterFrustum",
					"des": "视椎体类",
					"des_en": "OrthographicOffCenterFrustum"
				}]
			},
			"PerInstanceColorAppearance": {
				"name": "实例外观颜色类",
				"src": [
					"../docs/Documentation/PerInstanceColorAppearance.html"
				],
				"modules": [{
					"name": "PerInstanceColorAppearance",
					"des": "实例外观颜色类",
					"des_en": "PerInstanceColorAppearance"
				}]
			},
			"PerspectiveFrustum": {
				"name": "视椎类",
				"src": [
					"../docs/Documentation/PerspectiveFrustum.html"
				],
				"modules": [{
					"name": "PerspectiveFrustum",
					"des": "视椎类",
					"des_en": "PerspectiveFrustum"
				}]
			},
			"PerspectiveOffCenterFrustum": {
				"name": "视椎类",
				"src": [
					"../docs/Documentation/PerspectiveOffCenterFrustum.html"
				],
				"modules": [{
					"name": "PerspectiveOffCenterFrustum",
					"des": "视椎类",
					"des_en": "PerspectiveOffCenterFrustum"
				}]
			},
			"PointCloudShading": {
				"name": "点云渲染类",
				"src": [
					"../docs/Documentation/PointCloudShading.html"
				],
				"modules": [{
					"name": "PointCloudShading",
					"des": "点云渲染类",
					"des_en": "PointCloudShading"
				}]
			},
			"PointPrimitive": {
				"name": "点原始数据类",
				"src": [
					"../docs/Documentation/PointPrimitive.html"
				],
				"modules": [{
					"name": "PointPrimitive",
					"des": "点原始数据类",
					"des_en": "PointPrimitive"
				}]
			},
			"PointPrimitiveCollection": {
				"name": "点原始数据集合类",
				"src": [
					"../docs/Documentation/PointPrimitiveCollection.html"
				],
				"modules": [{
					"name": "PointPrimitiveCollection",
					"des": "点原始数据集合类",
					"des_en": "PointPrimitiveCollection"
				}]
			},
			"Polygon": {
				"name": "多边形类",
				"src": [
					"../docs/Documentation/Polygon.html"
				],
				"modules": [{
					"name": "Polygon",
					"des": "多边形类",
					"des_en": "Polygon"
				}]
			},
			"Polyline": {
				"name": "多段线类",
				"src": [
					"../docs/Documentation/Polyline.html"
				],
				"modules": [{
					"name": "Polyline",
					"des": "多段线类",
					"des_en": "Polyline"
				}]
			},
			"PolylineColorAppearance": {
				"name": "多段线颜色外观类",
				"src": [
					"../docs/Documentation/PolylineColorAppearance.html"
				],
				"modules": [{
					"name": "PolylineColorAppearance",
					"des": "多段线颜色外观类",
					"des_en": "PolylineColorAppearance"
				}]
			},
			"PolylineMaterialAppearance": {
				"name": "多段线材质外观类",
				"src": [
					"../docs/Documentation/PolylineMaterialAppearance.html"
				],
				"modules": [{
					"name": "PolylineMaterialAppearance",
					"des": "多段线材质外观类",
					"des_en": "PolylineMaterialAppearance"
				}]
			},
			"PostProcessStageCollection": {
				"name": "后处理集合类",
				"src": [
					"../docs/Documentation/PostProcessStageCollection.html"
				],
				"modules": [{
					"name": "PostProcessStageCollection",
					"des": "后处理集合类",
					"des_en": "PostProcessStageCollection"
				}]
			},
			"Primitive": {
				"name": "基本图元类",
				"src": [
					"../docs/Documentation/Primitive.html"
				],
				"modules": [{
					"name": "Primitive",
					"des": "基本图元类",
					"des_en": "Primitive"
				}]
			},
			"PrimitiveCollection": {
				"name": "基本图元集合类",
				"src": [
					"../docs/Documentation/PrimitiveCollection.html"
				],
				"modules": [{
					"name": "PrimitiveCollection",
					"des": "基本图元集合类",
					"des_en": "PrimitiveCollection"
				}]
			},
			"Quality": {
				"name": "热力图质量类",
				"src": [
					"../docs/Documentation/Quality.html"
				],
				"modules": [{
					"name": "Quality",
					"des": "热力图质量类",
					"des_en": "Quality"
				}]
			},
			"RasterGeometryType": {
				"name": "实时栅格化的几何对象类型",
				"src": ["../docs/Documentation/RasterGeometryType.html"],
				"modules": [{
					"name": "RasterGeometryType",
					"des": "实时栅格化的几何对象类型",
					"des_en": "RasterGeometryType"
				}]
			},
			"RasterVectorCollection": {
				"name": "实时栅格化类",
				"src": ["../docs/Documentation/RasterVectorCollection.html"],
				"modules": [{
					"name": "RasterVectorCollection",
					"des": "实时栅格化类",
					"des_en": "RasterVectorCollection"
				}]
			},			
			"ScanEffect": {
				"name": "扫描线效果类",
				"src": ["../docs/Documentation/ScanEffect.html"],
				"modules": [{
					"name": "ScanEffect",
					"des": "扫描线效果类",
					"des_en": "ScanEffect"
				}]
			},	
			"ScanEffectMode": {
				"name": "扫描线效果模式",
				"src": ["../docs/Documentation/ScanEffectMode.html"],
				"modules": [{
					"name": "ScanEffectMode",
					"des": "扫描线效果模式",
					"des_en": "ScanEffectMode"
				}]
			},
			"Scene": {
				"name": "三维场景类",
				"src": ["../docs/Documentation/Scene.html"],
				"modules": [{
					"name": "Scene",
					"des": "三维场景类",
					"des_en": "Scene"
				}]
			},
			"SceneMode": {
				"name": "视图模式类",
				"src": ["../docs/Documentation/SceneMode.html"],
				"modules": [{
					"name": "SceneMode",
					"des": "视图模式类",
					"des_en": "SceneMode"
				}]
			},
			"SceneTransforms": {
				"name": "场景转换类",
				"src": ["../docs/Documentation/SceneTransforms.html"],
				"modules": [{
					"name": "SceneTransforms",
					"des": "场景转换类",
					"des_en": "SceneTransforms"
				}]
			},
			"ScreenSpaceCameraController": {
				"name": "相机方位类",
				"src": ["../docs/Documentation/ScreenSpaceCameraController.html"],
				"modules": [{
					"name": "ScreenSpaceCameraController",
					"des": "相机方位类",
					"des_en": "ScreenSpaceCameraController"
				}]
			},
			"ShadowMap": {
				"name": "阴影贴图类",
				"src": ["../docs/Documentation/ShadowMap.html"],
				"modules": [{
					"name": "ShadowMap",
					"des": "阴影贴图类",
					"des_en": "ShadowMap"
				}]
			},
			"ShadowMode": {
				"name": "阴影模式类",
				"src": ["../docs/Documentation/ShadowMode.html"],
				"modules": [{
					"name": "ShadowMode",
					"des": "阴影模式类",
					"des_en": "ShadowMode"
				}]
			},
			"SingleTileImageryProvider": {
				"name": "单个影像瓦片服务提供类",
				"src": ["../docs/Documentation/SingleTileImageryProvider.html"],
				"modules": [{
					"name": "SingleTileImageryProvider",
					"des": "单个影像瓦片服务提供类",
					"des_en": "SingleTileImageryProvider"
				}]
			},
			"SkyAtmosphere": {
				"name": "球体边缘大气类",
				"src": ["../docs/Documentation/SkyAtmosphere.html"],
				"modules": [{
					"name": "SkyAtmosphere",
					"des": "球体边缘大气类",
					"des_en": "SkyAtmosphere"
				}]
			},
			"SkyBox": {
				"name": "天空盒类",
				"src": ["../docs/Documentation/SkyBox.html"],
				"modules": [{
					"name": "SkyBox",
					"des": "天空盒类",
					"des_en": "SkyBox"
				}]
			},
			"SMAA": {
				"name": "反走样类",
				"src": ["../docs/Documentation/SMAA.html"],
				"modules": [{
					"name": "SMAA",
					"des": "反走样类",
					"des_en": "SMAA"
				}]
			},
			"SolidModelsProfile": {
				"name": "实体模型剖面类",
				"src": ["../docs/Documentation/SolidModelsProfile.html"],
				"modules": [{
					"name": "SolidModelsProfile",
					"des": "实体模型剖面类",
					"des_en": "SolidModelsProfile"
				}]
			},
			"SpatialQuery3D": {
				"name": "GPU空间查询类",
				"src": ["../docs/Documentation/SpatialQuery3D.html"],
				"modules": [{
					"name": "SpatialQuery3D",
					"des": "GPU空间查询类",
					"des_en": "SpatialQuery3D"
				}]
			},
			"StencilFunction": {
				"name": "模板函数类",
				"src": ["../docs/Documentation/StencilFunction.html"],
				"modules": [{
					"name": "StencilFunction",
					"des": "模板函数类",
					"des_en": "StencilFunction"
				}]
			},
			"StencilOperation": {
				"name": "模板操作类",
				"src": ["../docs/Documentation/StencilOperation.html"],
				"modules": [{
					"name": "StencilOperation",
					"des": "模板操作类",
					"des_en": "StencilOperation"
				}]
			},
			"StyleExpression": {
				"name": "样式表达式类",
				"src": ["../docs/Documentation/StyleExpression.html"],
				"modules": [{
					"name": "StyleExpression",
					"des": "样式表达式类",
					"des_en": "StyleExpression"
				}]
			},
			"Sun": {
				"name": "太阳",
				"src": ["../docs/Documentation/Sun.html"],
				"modules": [{
					"name": "Sun",
					"des": "太阳",
					"des_en": "Sun"
				}]
			},
			"Sun": {
				"name": "太阳",
				"src": ["../docs/Documentation/Sun.html"],
				"modules": [{
					"name": "Sun",
					"des": "太阳",
					"des_en": "Sun"
				}]
			},
			"Sun": {
				"name": "太阳",
				"src": ["../docs/Documentation/Sun.html"],
				"modules": [{
					"name": "Sun",
					"des": "太阳",
					"des_en": "Sun"
				}]
			},
			"SuperMapImageryProvider": {
				"name": "影像切片提供者类",
				"src": ["../docs/Documentation/SuperMapImageryProvider.html"],
				"modules": [{
					"name": "SuperMapImageryProvider",
					"des": "影像切片提供者类",
					"des_en": "SuperMapImageryProvider"
				}]
			},
			"TiandituAnnotationProvider": {
				"name": "天地图三维注记类",
				"src": ["../docs/Documentation/TiandituAnnotationProvider.html"],
				"modules": [{
					"name": "TiandituAnnotationProvider",
					"des": "天地图三维注记类",
					"des_en": "TiandituAnnotationProvider"
				}]
			},
			"TiandituImageryProvider": {
				"name": "天地图影像服务提供者类",
				"src": ["../docs/Documentation/TiandituImageryProvider.html"],
				"modules": [{
					"name": "TiandituImageryProvider",
					"des": "天地图影像服务提供者类",
					"des_en": "SolidModelsProfile"
				}]
			},
			"TiandituMapsStyle": {
				"name": "天地图服务类型常量",
				"src": ["../docs/Documentation/TiandituMapsStyle.html"],
				"modules": [{
					"name": "TiandituMapsStyle",
					"des": "天地图服务类型常量",
					"des_en": "SolidModelsProfile"
				}]
			},
			"TiandituTerrainProvider": {
				"name": "天地图三维地形服务类",
				"src": ["../docs/Documentation/TiandituTerrainProvider.html"],
				"modules": [{
					"name": "TiandituTerrainProvider",
					"des": "天地图三维地形服务类",
					"des_en": "TiandituTerrainProvider"
				}]
			},
			"TileCoordinatesImageryProvider": {
				"name": "瓦片坐标影像提供类",
				"src": ["../docs/Documentation/TileCoordinatesImageryProvider.html"],
				"modules": [{
					"name": "TileCoordinatesImageryProvider",
					"des": "瓦片坐标影像提供类",
					"des_en": "TileCoordinatesImageryProvider"
				}]
			},
			"TileDiscardPolicy": {
				"name": "丢弃瓦片类",
				"src": ["../docs/Documentation/TileDiscardPolicy.html"],
				"modules": [{
					"name": "TileDiscardPolicy",
					"des": "丢弃瓦片类",
					"des_en": "TileDiscardPolicy"
				}]
			},
			"TimeDynamicImagery": {
				"name": "时间动态影像类",
				"src": ["../docs/Documentation/TimeDynamicImagery.html"],
				"modules": [{
					"name": "TimeDynamicImagery",
					"des": "时间动态影像类",
					"des_en": "TimeDynamicImagery"
				}]
			},
			"UnderGlobe": {
				"name": "地下球类",
				"src": ["../docs/Documentation/UnderGlobe.html"],
				"modules": [{
					"name": "UnderGlobe",
					"des": "地下球类",
					"des_en": "UnderGlobe"
				}]
			},
			"UrlTemplateImageryProvider": {
				"name": "URL模板影像提供类",
				"src": ["../docs/Documentation/UrlTemplateImageryProvider.html"],
				"modules": [{
					"name": "UrlTemplateImageryProvider",
					"des": "URL模板影像提供类",
					"des_en": "UrlTemplateImageryProvider"
				}]
			},
			"VectorTilesLayer": {
				"name": "矢量瓦片图层类",
				"src": ["../docs/Documentation/VectorTilesLayer.html"],
				"modules": [{
					"name": "VectorTilesLayer",
					"des": "矢量瓦片图层类",
					"des_en": "VectorTilesLayer"
				}]
			},
			"VectorTilesMap": {
				"name": "矢量瓦片地图类",
				"src": ["../docs/Documentation/VectorTilesMap.html"],
				"modules": [{
					"name": "VectorTilesMap",
					"des": "矢量瓦片地图类",
					"des_en": "VectorTilesMap"
				}]
			},
			"VerticalOrigin": {
				"name": "相对垂直原点类",
				"src": ["../docs/Documentation/VerticalOrigin.html"],
				"modules": [{
					"name": "VerticalOrigin",
					"des": "相对垂直原点类",
					"des_en": "VerticalOrigin"
				}]
			},
			"Volume": {
				"name": "体元栅格数据集缓存类",
				"src": ["../docs/Documentation/Volume.html"],
				"modules": [{
					"name": "Volume",
					"des": "体元栅格数据集缓存类",
					"des_en": "Volume"
				}]
			},
			"VolumeRenderMode": {
				"name": "体数据显示模式类",
				"src": ["../docs/Documentation/VolumeRenderMode.html"],
				"modules": [{
					"name": "VolumeRenderMode",
					"des": "体数据显示模式类",
					"des_en": "VolumeRenderMode"
				}]
			},
			"VoxelGridLayer3D": {
				"name": "场数据图层类",
				"src": ["../docs/Documentation/VoxelGridLayer3D.html"],
				"modules": [{
					"name": "VoxelGridLayer3D",
					"des": "场数据图层类",
					"des_en": "VoxelGridLayer3D"
				}]
			},
			"VoxelGridLayer3D": {
				"name": "场数据图层类",
				"src": ["../docs/Documentation/VoxelGridLayer3D.html"],
				"modules": [{
					"name": "VoxelGridLayer3D",
					"des": "场数据图层类",
					"des_en": "VoxelGridLayer3D"
				}]
			},
			"WalkingMode": {
				"name": "相机模式类",
				"src": ["../docs/Documentation/WalkingMode.html"],
				"modules": [{
					"name": "WalkingMode",
					"des": "相机模式类",
					"des_en": "WalkingMode"
				}]
			},
			"WaterMode": {
				"name": "设置淹没分析（连通性）类型类",
				"src": ["../docs/Documentation/WaterMode.html"],
				"modules": [{
					"name": "WaterMode",
					"des": "设置淹没分析（连通性）类型类",
					"des_en": "WaterMode"
				}]
			},
			"WebMapServiceImageryProvider": {
				"name": "WebMap影像服务提供类",
				"src": ["../docs/Documentation/WebMapServiceImageryProvider.html"],
				"modules": [{
					"name": "WebMapServiceImageryProvider",
					"des": "WebMap影像服务提供类",
					"des_en": "WebMapServiceImageryProvider"
				}]
			},
			"WebMapTileServiceImageryProvider": {
				"name": "WebMap瓦片影像服务提供类",
				"src": ["../docs/Documentation/WebMapTileServiceImageryProvider.html"],
				"modules": [{
					"name": "WebMapTileServiceImageryProvider",
					"des": "WebMap瓦片影像服务提供类",
					"des_en": "WebMapTileServiceImageryProvider"
				}]
			},
			"WireFrameType": {
				"name": "S3M图层模型线框模式",
				"src": ["../docs/Documentation/WireFrameType.html"],
				"modules": [{
					"name": "WireFrameType",
					"des": "S3M图层模型线框模式",
					"des_en": "WireFrameType"
				}]
			},
		},
		"TrackingLayer": {
			"title": "跟踪图层",
			"description": "跟踪图层",
			"description_en": "TrackingLayer",
			
			"CallbackProperty": {
				"name": "回调属性类",
				"src": ["../docs/Documentation/CallbackProperty.html"],
				"modules": [{
					"name": "CallbackProperty",
					"des": "回调属性类",
					"des_en": "CallbackProperty"
				}]
			},
			"ColorMaterialProperty": {
				"name": "颜色材质属性类",
				"src": ["../docs/Documentation/ColorMaterialProperty.html"],
				"modules": [{
					"name": "ColorMaterialProperty",
					"des": "颜色材质属性类",
					"des_en": "ColorMaterialProperty"
				}]
			},
			"ConstantPositionProperty": {
				"name": "常量位置属性类",
				"src": ["../docs/Documentation/ConstantPositionProperty.html"],
				"modules": [{
					"name": "ConstantPositionProperty",
					"des": "常量位置属性类",
					"des_en": "ConstantPositionProperty"
				}]
			},
			"ConstantProperty": {
				"name": "常量属性类",
				"src": ["../docs/Documentation/ConstantProperty.html"],
				"modules": [{
					"name": "ConstantProperty",
					"des": "常量属性类",
					"des_en": "ConstantProperty"
				}]
			},
			"DynamicGeometryUpdater": {
				"name": "动态几何更新类",
				"src": ["../docs/Documentation/DynamicGeometryUpdater.html"],
				"modules": [{
					"name": "DynamicGeometryUpdater",
					"des": "动态几何更新类",
					"des_en": "DynamicGeometryUpdater"
				}]
			},
			"DynamicGeometryUpdater": {
				"name": "实体集群类",
				"src": ["../docs/Documentation/DynamicGeometryUpdater.html"],
				"modules": [{
					"name": "DynamicGeometryUpdater",
					"des": "实体集群类",
					"des_en": "DynamicGeometryUpdater"
				}]
			},
			"GeometryUpdater": {
				"name": "几何更新类",
				"src": ["../docs/Documentation/GeometryUpdater.html"],
				"modules": [{
					"name": "GeometryUpdater",
					"des": "几何更新类",
					"des_en": "GeometryUpdater"
				}]
			},
			"GeometryVisualizer": {
				"name": "几何可视化类",
				"src": ["../docs/Documentation/GeometryVisualizer.html"],
				"modules": [{
					"name": "GeometryVisualizer",
					"des": "几何可视化类",
					"des_en": "GeometryVisualizer"
				}]
			},
			"ImageMaterialProperty": {
				"name": "影像材质属性类",
				"src": ["../docs/Documentation/ImageMaterialProperty.html"],
				"modules": [{
					"name": "ImageMaterialProperty",
					"des": "影像材质属性类",
					"des_en": "ImageMaterialProperty"
				}]
			},
			"MaterialProperty": {
				"name": "材质属性类",
				"src": ["../docs/Documentation/MaterialProperty.html"],
				"modules": [{
					"name": "MaterialProperty",
					"des": "材质属性类",
					"des_en": "MaterialProperty"
				}]
			},
			"PointGraphics": {
				"name": "点对象类",
				"src": ["../docs/Documentation/PointGraphics.html"],
				"modules": [{
					"name": "PointGraphics",
					"des": "点对象类",
					"des_en": "PointGraphics"
				}]
			},
			"PointVisualizer": {
				"name": "点可视化类",
				"src": ["../docs/Documentation/PointVisualizer.html"],
				"modules": [{
					"name": "PointVisualizer",
					"des": "点可视化类",
					"des_en": "PointVisualizer"
				}]
			},
			"PolygonGeometryUpdater": {
				"name": "多边形几何更新类",
				"src": ["../docs/Documentation/PolygonGeometryUpdater.html"],
				"modules": [{
					"name": "PolygonGeometryUpdater",
					"des": "多边形几何更新类",
					"des_en": "PolygonGeometryUpdater"
				}]
			},
			"PolygonGraphics": {
				"name": "多边形对象类",
				"src": ["../docs/Documentation/PolygonGraphics.html"],
				"modules": [{
					"name": "PolygonGraphics",
					"des": "多边形对象类",
					"des_en": "PolygonGraphics"
				}]
			},
			"PolylineArrowMaterialProperty": {
				"name": "带箭头的线材质属性类",
				"src": ["../docs/Documentation/PolylineArrowMaterialProperty.html"],
				"modules": [{
					"name": "PolylineArrowMaterialProperty",
					"des": "带箭头的线材质属性类",
					"des_en": "PolylineArrowMaterialProperty"
				}]
			},
			"PolylineDashMaterialProperty": {
				"name": "虚线材质属性类",
				"src": ["../docs/Documentation/PolylineDashMaterialProperty.html"],
				"modules": [{
					"name": "PolylineDashMaterialProperty",
					"des": "虚线材质属性类",
					"des_en": "PolylineDashMaterialProperty"
				}]
			},
			"PolylineDynamicMaterialProperty": {
				"name": "动态多段线材质属性类",
				"src": ["../docs/Documentation/PolylineDynamicMaterialProperty.html"],
				"modules": [{
					"name": "PolylineDynamicMaterialProperty",
					"des": "动态多段线材质属性类",
					"des_en": "PolylineDynamicMaterialProperty"
				}]
			},
			"PolylineGeometryUpdater": {
				"name": "多段线几何更新类",
				"src": ["../docs/Documentation/PolylineGeometryUpdater.html"],
				"modules": [{
					"name": "PolylineGeometryUpdater",
					"des": "多段线几何更新类",
					"des_en": "PolylineGeometryUpdater"
				}]
			},
			"PolylineGlowMaterialProperty": {
				"name": "光晕线材质属性类",
				"src": ["../docs/Documentation/PolylineGlowMaterialProperty.html"],
				"modules": [{
					"name": "PolylineGlowMaterialProperty",
					"des": "光晕线材质属性类",
					"des_en": "PolylineGlowMaterialProperty"
				}]
			},
			"PolylineGraphics": {
				"name": "多段线类",
				"src": ["../docs/Documentation/PolylineGraphics.html"],
				"modules": [{
					"name": "PolylineGraphics",
					"des": "多段线类",
					"des_en": "PolylineGraphics"
				}]
			},
			"PolylineOutlineMaterialProperty": {
				"name": "外轮廓线材质属性类",
				"src": ["../docs/Documentation/PolylineOutlineMaterialProperty.html"],
				"modules": [{
					"name": "PolylineOutlineMaterialProperty",
					"des": "外轮廓线材质属性类",
					"des_en": "PolylineOutlineMaterialProperty"
				}]
			},
			"PolylineTrailMaterialProperty": {
				"name": "尾迹线材质类",
				"src": ["../docs/Documentation/PolylineTrailMaterialProperty.html"],
				"modules": [{
					"name": "PolylineTrailMaterialProperty",
					"des": "尾迹线材质类",
					"des_en": "PolylineTrailMaterialProperty"
				}]
			},
			"PolylineVolumeGeometryUpdater": {
				"name": "多段线体积几何更新类",
				"src": ["../docs/Documentation/PolylineVolumeGeometryUpdater.html"],
				"modules": [{
					"name": "PolylineVolumeGeometryUpdater",
					"des": "多段线体积几何更新类",
					"des_en": "PolylineVolumeGeometryUpdater"
				}]
			},
			"PositionProperty": {
				"name": "位置属性类",
				"src": ["../docs/Documentation/PositionProperty.html"],
				"modules": [{
					"name": "PositionProperty",
					"des": "位置属性类",
					"des_en": "PositionProperty"
				}]
			},
			"Property": {
				"name": "属性类",
				"src": ["../docs/Documentation/Property.html"],
				"modules": [{
					"name": "Property",
					"des": "属性类",
					"des_en": "Property"
				}]
			},
			"PropertyBag": {
				"name": "属性存储管理器类",
				"src": ["../docs/Documentation/PropertyBag.html"],
				"modules": [{
					"name": "PropertyBag",
					"des": "属性存储管理器类",
					"des_en": "PropertyBag"
				}]
			},
			"TrackingLayer": {
				"name": "跟踪图层类",
				"src": ["../docs/Documentation/TrackingLayer.html"],
				"modules": [{
					"name": "TrackingLayer",
					"des": "跟踪图层类",
					"des_en": "TrackingLayer"
				}]
			},
		},
		"VolumeRendering": {
			"title": "体渲染",
			"description": "体渲染",
			"description_en": "VolumeRendering",
			
			"ColorTransferFunction": {
				"name": "分层设色函数类",
				"src": ["../docs/Documentation/ColorTransferFunction.html"],
				"modules": [{
					"name": "ColorTransferFunction",
					"des": "分层设色函数类",
					"des_en": "ColorTransferFunction"
				}]
			},
			"PiecewiseFunction": {
				"name": "一次分段函数类",
				"src": ["../docs/Documentation/PiecewiseFunction.html"],
				"modules": [{
					"name": "PiecewiseFunction",
					"des": "一次分段函数类",
					"des_en": "PiecewiseFunction"
				}]
			},
			"VolumeRenderMode": {
				"name": "体数据显示模式类",
				"src": ["../docs/Documentation/VolumeRenderMode.html"],
				"modules": [{
					"name": "VolumeRenderMode",
					"des": "体数据显示模式类",
					"des_en": "VolumeRenderMode"
				}]
			},
			"VoxelGridLayer3D": {
				"name": "场数据图层类",
				"src": ["../docs/Documentation/VoxelGridLayer3D.html"],
				"modules": [{
					"name": "VoxelGridLayer3D",
					"des": "场数据图层类",
					"des_en": "VoxelGridLayer3D"
				}]
			}			
		},	
		"Widgets": {
			"title": "部件",
			"description": "部件",
			"description_en": "Widgets",
			"Animation": {
				"name": "动画小部件类",
				"src": ["../docs/Documentation/Animation.html"],
				"modules": [{
					"name": "Animation",
					"des": "动画小部件类",
					"des_en": "Animation"
				}]
			},
			"AnimationViewModel": {
				"name": "动画视图模型类",
				"src": ["../docs/Documentation/AnimationViewModel.html"],
				"modules": [{
					"name": "AnimationViewModel",
					"des": "动画视图模型类",
					"des_en": "AnimationViewModel"
				}]
			},
			"BaseLayerPicker": {
				"name": "自定义图层选择器类",
				"src": [
					"../docs/Documentation/BaseLayerPicker.html"
				],
				"modules": [{
					"name": "BaseLayerPicker",
					"des": "自定义图层选择器类",
					"des_en": "BaseLayerPicker"
				}]
			},
			"BaseLayerPickerViewModel": {
				"name": "自定义图层选择器视图模型类",
				"src": [
					"../docs/Documentation/BaseLayerPickerViewModel.html"
				],
				"modules": [{
					"name": "BaseLayerPickerViewModel",
					"des": "自定义图层选择器视图模型类",
					"des_en": "BaseLayerPickerViewModel"
				}]
			},
			"ProviderViewModel": {
				"name": "获取视图模型类",
				"src": [
					"../docs/Documentation/ProviderViewModel.html"
				],
				"modules": [{
					"name": "ProviderViewModel",
					"des": "获取视图模型类",
					"des_en": "ProviderViewModel"
				}]
			},
			"Cesium3DTilesInspector": {
				"name": "Cesium瓦片检查类",
				"src": [
					"../docs/Documentation/Cesium3DTilesInspector.html"
				],
				"modules": [{
					"name": "Cesium3DTilesInspector",
					"des": "Cesium瓦片检查类",
					"des_en": "Cesium3DTilesInspector"
				}]
			},
			"Cesium3DTilesInspectorViewModel": {
				"name": "Cesium瓦片检查视图模型类",
				"src": [
					"../docs/Documentation/Cesium3DTilesInspectorViewModel.html"
				],
				"modules": [{
					"name": "Cesium3DTilesInspectorViewModel",
					"des": "Cesium瓦片检查视图模型类",
					"des_en": "Cesium3DTilesInspectorViewModel"
				}]
			},
			"FullscreenButton": {
				"name": "切换全屏模式的小部件类",
				"src": ["../docs/Documentation/FullscreenButton.html"],
				"modules": [{
					"name": "FullscreenButton",
					"des": "切换全屏模式的小部件类",
					"des_en": "FullscreenButton"
				}]
			},
			"FullscreenButtonViewModel": {
				"name": "切换全屏模式的视图模型类",
				"src": [
					"../docs/Documentation/FullscreenButtonViewModel.html"
				],
				"modules": [{
					"name": "FullscreenButtonViewModel",
					"des": "切换全屏模式的视图模型",
					"des_en": "FullscreenButtonViewModel"
				}]
			},
			"Geocoder": {
				"name": "查询地址和地标、相机飞行小部件类",
				"src": ["../docs/Documentation/Geocoder.html"],
				"modules": [{
					"name": "Geocoder",
					"des": "查询地址和地标、相机飞行小部件类",
					"des_en": "Geocoder"
				}]
			},
			"GeocoderViewModel": {
				"name": "查询地址和地标、相机飞行小部件视图模型类",
				"src": ["../docs/Documentation/GeocoderViewModel.html"],
				"modules": [{
					"name": "GeocoderViewModel",
					"des": "查询地址和地标、相机飞行小部件视图模型类",
					"des_en": "GeocoderViewModel"
				}]
			},
			"HomeButton": {
				"name": "返回当前场景默认相机视图的小部件类",
				"src": ["../docs/Documentation/HomeButton.html"],
				"modules": [{
					"name": "HomeButton",
					"des": "返回当前场景默认相机视图的小部件类",
					"des_en": "HomeButton"
				}]
			},
			"HomeButtonViewModel": {
				"name": "返回当前场景默认相机视图模型类",
				"src": ["../docs/Documentation/HomeButtonViewModel.html"],
				"modules": [{
					"name": "HomeButtonViewModel",
					"des": "返回当前场景默认相机视图模型类",
					"des_en": "HomeButtonViewModel"
				}]
			},
			"InfoBox": {
				"name": "显示信息或描述的小部件类",
				"src": ["../docs/Documentation/InfoBox.html"],
				"modules": [{
					"name": "InfoBox",
					"des": "显示信息或描述的小部件类",
					"des_en": "InfoBox"
				}]
			},
			"InfoBoxViewModel": {
				"name": "显示信息或描述的视图模型类",
				"src": ["../docs/Documentation/InfoBoxViewModel.html"],
				"modules": [{
					"name": "InfoBoxViewModel",
					"des": "显示信息或描述的视图模型类",
					"des_en": "InfoBoxViewModel"
				}]
			},
			"NavigationHelpButton": {
				"name": "使用鼠标导航的小部件类",
				"src": ["../docs/Documentation/NavigationHelpButton.html"],
				"modules": [{
					"name": "NavigationHelpButton",
					"des": "使用鼠标导航的小部件类",
					"des_en": "NavigationHelpButtonInfoBox"
				}]
			},
			"NavigationHelpButtonViewModel": {
				"name": "使用鼠标导航的视图模型类",
				"src": ["../docs/Documentation/NavigationHelpButtonViewModel.html"],
				"modules": [{
					"name": "NavigationHelpButtonViewModel",
					"des": "使用鼠标导航的视图模型类",
					"des_en": "NavigationHelpButtonViewModel"
				}]
			},
			"PerformanceWatchdog": {
				"name": "监控应用程序性能的小部件类",
				"src": ["../docs/Documentation/PerformanceWatchdog.html"],
				"modules": [{
					"name": "PerformanceWatchdog",
					"des": "监控应用程序性能的小部件类",
					"des_en": "PerformanceWatchdog"
				}]
			},
			"PerformanceWatchdogViewModel": {
				"name": "监控应用程序性能的视图模型类",
				"src": ["../docs/Documentation/PerformanceWatchdogViewModel.html"],
				"modules": [{
					"name": "PerformanceWatchdogViewModel",
					"des": "监控应用程序性能的视图模型类",
					"des_en": "PerformanceWatchdogViewModel"
				}]
			},
			"ProjectionPicker": {
				"name": "投影选择器小部件类",
				"src": ["../docs/Documentation/ProjectionPicker.html"],
				"modules": [{
					"name": "ProjectionPicker",
					"des": "投影选择器小部件类",
					"des_en": "ProjectionPicker"
				}]
			},
			"ProjectionPickerViewModel": {
				"name": "投影选择器视图模型类",
				"src": ["../docs/Documentation/ProjectionPickerViewModel.html"],
				"modules": [{
					"name": "ProjectionPickerViewModel",
					"des": "投影选择器视图模型类",
					"des_en": "ProjectionPickerViewModel"
				}]
			},
			"SceneModePicker": {
				"name": "场景模式选择器小部件类",
				"src": ["../docs/Documentation/SceneModePicker.html"],
				"modules": [{
					"name": "SceneModePicker",
					"des": "场景模式选择器小部件类",
					"des_en": "SceneModePicker"
				}]
			},
			"SceneModePickerViewModel": {
				"name": "场景模式选择器视图模型类",
				"src": ["../docs/Documentation/SceneModePickerViewModel.html"],
				"modules": [{
					"name": "SceneModePickerViewModel",
					"des": "场景模式选择器视图模型类",
					"des_en": "SceneModePickerViewModel"
				}]
			},
			"SelectionIndicator": {
				"name": "选择指标类",
				"src": ["../docs/Documentation/SelectionIndicator.html"],
				"modules": [{
					"name": "SelectionIndicator",
					"des": "选择指标类",
					"des_en": "SelectionIndicator"
				}]
			},
			"SelectionIndicatorViewModel": {
				"name": "选择指标视图模型类",
				"src": ["../docs/Documentation/SelectionIndicatorViewModel.html"],
				"modules": [{
					"name": "SelectionIndicatorViewModel",
					"des": "选择指标视图模型类",
					"des_en": "SelectionIndicatorViewModel"
				}]
			},
			"Timeline": {
				"name": "时间轴小部件类",
				"src": ["../docs/Documentation/Timeline.html"],
				"modules": [{
					"name": "Timeline",
					"des": "时间轴小部件类",
					"des_en": "Timeline"
				}]
			},
			"Timeline": {
				"name": "时间轴小部件类",
				"src": ["../docs/Documentation/Timeline.html"],
				"modules": [{
					"name": "Timeline",
					"des": "时间轴小部件类",
					"des_en": "Timeline"
				}]
			},
			"VRButton": {
				"name": "VR模式的小部件类",
				"src": ["../docs/Documentation/VRButton.html"],
				"modules": [{
					"name": "VRButton",
					"des": "VR模式的小部件类",
					"des_en": "VRButton"
				}]
			},
			"VRButtonViewModel": {
				"name": "VR视图模式类",
				"src": ["../docs/Documentation/VRButtonViewModel.html"],
				"modules": [{
					"name": "VRButtonViewModel",
					"des": "VR视图模式类",
					"des_en": "VRButtonViewModel"
				}]
			},
			"Widget": {
				"name": "场景小部件类。",
				"src": ["../docs/Documentation/Widget.html"],
				"modules": [{
					"name": "Widget",
					"des": "场景小部件类",
					"des_en": "Widget"
				}]
			},
			"Viewer": {
				"name": "查看器小部件类",
				"src": ["../docs/Documentation/Viewer.html"],
				"modules": [{
					"name": "Viewer",
					"des": "查看器小部件类",
					"des_en": "Viewer"
				}]
			},
			"viewerDragDropMixin": {
				"name": "查看器拖放混合类",
				"src": ["../docs/Documentation/viewerDragDropMixin.html"],
				"modules": [{
					"name": "viewerDragDropMixin",
					"des": "查看器拖放混合类",
					"des_en": "viewerDragDropMixin"
				}]
			},
			"viewerPerformanceWatchdogMixin": {
				"name": "查看器性能混合类",
				"src": ["../docs/Documentation/viewerPerformanceWatchdogMixin.html"],
				"modules": [{
					"name": "viewerPerformanceWatchdogMixin",
					"des": "查看器性能混合类",
					"des_en": "viewerPerformanceWatchdogMixin"
				}]
			}
		}
	}
};