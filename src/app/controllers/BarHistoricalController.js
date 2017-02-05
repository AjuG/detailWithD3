// (function() {

//     angular
//         .module('app')
//         .controller('BarHistoricalController', ['sharedDataService', 'filterFilter',
//             'tableService', '$rootScope', '$scope',
//             BarHistoricalController
//         ]);


//     function BarHistoricalController(sharedDataService, filterFilter, tableService, $rootScope, $scope) {

//         var vm = this;


//         vm.options = {
//             chart: {
//                 type: 'historicalBarChart',
//                 height: 450,
//                 margin: {
//                     top: 20,
//                     right: 20,
//                     bottom: 65,
//                     left: 50
//                 },

//                 // x: function(d) { return d[0]; },
//                 // y: function(d) { return d[1] / 100000; },
//                 x: function(d) { return d.x; },
//                 y: function(d) { return d.y; },
//                 showValues: true,
//                 valueFormat: function(d) {
//                     return d3.format(',.1f')(d);
//                 },
//                 duration: 100,
//                 xAxis: {
//                     axisLabel: 'X Axis',
//                     tickFormat: function(d) {
//                         return d3.time.format('%x')(new Date(d))
//                     },
//                     rotateLabels: 30,
//                     showMaxMin: false
//                 },

//                 // xAxis: {
//                 //     axisLabel: 'X Axis',
//                 //     tickFormat: function(d) {

//                 //         var dx = vm.data[0].values[d] && vm.data[0].values[d].x || 0;
//                 //         if (dx > 0) {
//                 //             return d3.time.format('%x')(new Date(dx))
//                 //         }
//                 //         return null;
//                 //         // console.log("ddd ddd ddd " + d);
//                 //         // return (d);
//                 //     }
//                 // },
//                 yAxis: {
//                     axisLabel: 'Y Axis',
//                     tickFormat: function(d) {
//                         return d3.format(',f')(d);
//                     },
//                     axisLabelDistance: 12
//                 },
//                 // yAxis: {
//                 //     axisLabel: 'Y Axis',
//                 //     axisLabelDistance: -10,
//                 //     tickFormat: function(d) {
//                 //         return d3.format(',.1f')(d);
//                 //     }
//                 // },
//                 tooltip: {
//                     keyFormatter: function(d) {
//                         return d3.time.format('%x')(new Date(d));
//                     }
//                 },
//                 zoom: {
//                     enabled: true,
//                     scaleExtent: [1, 10],
//                     useFixedDomain: false,
//                     useNiceScale: false,
//                     horizontalOff: false,
//                     verticalOff: true,
//                     unzoomEventType: 'dblclick.zoom'
//                 }
//             }
//         };

//         // vm.data = [{
//         //     "key": "Quantity",
//         //     "bar": true,
//         //     "values": [

//         //     ]
//         // }];
//         vm.data = [{
//             "key": "Quantity",
//             "bar": true,
//             "values": [
//                 // {
//                 //     "x": 1136005200000,
//                 //     "y": 127
//                 // },
//                 // {
//                 //     "x": 1143781200000,
//                 //     "y": 450
//                 // },
//                 // {
//                 //     "x": 1330491600000,
//                 //     "y": 560
//                 // },
//                 // {
//                 //     "x": 1333166400000,
//                 //     "y": 608
//                 // }
//             ]
//         }];





//         $scope.master = [{
//             "key": "Quantity",
//             "bar": true,
//             "values": [
//                 // {
//                 //     "x": 1136005200000,
//                 //     "y": 127
//                 // },
//                 // {
//                 //     "x": 1143781200000,
//                 //     "y": 450
//                 // },
//                 // {
//                 //     "x": 1330491600000,
//                 //     "y": 560
//                 // },
//                 // {
//                 //     "x": 1333166400000,
//                 //     "y": 608
//                 // }
//             ]
//         }]

//         sharedDataService.loadABinBevAll()
//             .then(function(chartData) {
//                 vm.chartData = chartData;
//                 //   console.log("Line chartGetting data --- ++ " + chartData.data.data.length);
//                 var data = chartData.data.data;
//                 var ABI = filterFilter(data, { 'Brewer_Value': "ABI" });
//                 console.log("BREVER DATA data --- ++ " + ABI.length);
//                 //  var d = [];
//                 vm.calculate = function(ABI) {
//                     var data = ABI;
//                     //data.length
//                     for (var i = 0; i < data.length; i++) {

//                         var date = new Date(data[i].Date);
//                         var Volume_Sales = data[i].Volume_Sales;

//                         vm.data[0].values.push({ x: date.getTime(), y: Volume_Sales });
//                         //    console.log("d" + d);


//                     }

//                 }
//                 vm.calculate(data);
//                 //  $scope.$apply();

//                 //    return [{ values: vm.sin, color: 'rgb(0, 150, 136)', area: true }];
//             });





//         $scope.reset = function() {
//             vm.data = angular.copy($scope.master);
//         };

//         //   var chartData = sharedDataService.getData();

//         $scope.chartData = "";



//         $scope.getTotalTodos = function() {
//             console.log(vm.data + "$scope.chartData.length" + $scope.chartData.length);
//             //            vm.data = $scope.chartData;
//             //vm.calculate($scope.chartData);
//             return $scope.chartData;
//         };
//         var deregister = $rootScope.$on(
//             "EmitingData",
//             function() {
//                 //  console.log("datas" + datas);
//                 $scope.chartData = sharedDataService.getData().data;
//                 console.log("inside emit    " + $scope.chartData);
//                 //console.log(chartData.data + "Responding to event %s.", chartData);
//                 vm.data = "";
//                 //    vm.data = datas;
//                 $scope.reset = function() {
//                     // Example with 1 argument
//                     vm.data = angular.copy($scope.master);
//                     return vm.data;
//                 };
//                 $scope.reset();
//                 // $scope.$watch(function() { chartData }, function(newValue, oldValue) {
//                 //     $scope.data = chartData;
//                 //     console.log("vimal" + newValue);
//                 //     //  vm.data = newValue;
//                 // });

//                 $scope.getTotalTodos();

//                 function calculating(chartData) {
//                     //    vm.data = datas;
//                     data = "";
//                     $scope.reset();
//                     data = $scope.chartData;
//                     console.log(vm.data + " inside calculating " + $scope.chartData.length);

//                     // var data = ABI;
//                     //data.length
//                     for (var i = 0; i < data.length; i++) {

//                         var date = new Date(data[i].Date);
//                         var Volume_Sales = data[i].Volume_Sales;

//                         vm.data[0].values.push({ x: date.getTime(), y: Volume_Sales });
//                         //    console.log("d" + d);


//                     }
//                     $scope.$apply();

//                 }


//                 calculating($scope.chartData);


//                 $scope.$apply();
//                 //$rootScope.$digest();

//             }
//         );
















//     }


// })();