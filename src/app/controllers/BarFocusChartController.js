(function() {
    angular
        .module('app')
        .controller('BarFocusChartController', ['sharedDataService', 'filterFilter',
            'tableService', '$rootScope', '$scope',
            BarFocusChartController
        ]);

    function BarFocusChartController(sharedDataService, filterFilter, tableService, $rootScope, $scope) {
        var vm = this;
        //  var Tenure_Range_less_10, Tenure_Range_less_10_15, Tenure_Range_less_15_20, Tenure_Range_less_20_25, Tenure_Range_Above25;

        vm.options = {
            chart: {
                type: 'linePlusBarChart',
                height: 500,
                margin: {
                    top: 30,
                    right: 75,
                    bottom: 50,
                    left: 75
                },
                bars: {
                    forceY: [0]
                },
                bars2: {
                    forceY: [0]
                },
                color: ['#2ca02c', 'darkred'],
                //   x: function(d) { return d.x; },
                // y: function(d) { return d.y; },
                x: function(d, i) { return i },
                xAxis: {
                    axisLabel: 'X Axis',
                    tickFormat: function(d) {

                        var dx = vm.data[0].values[d] && vm.data[0].values[d].x || 0;
                        if (dx > 0) {
                            return d3.time.format('%x')(new Date(dx))
                        }
                        return null;
                        // console.log("ddd ddd ddd " + d);
                        // return (d);
                    }
                },
                x2Axis: {
                    tickFormat: function(d) {
                        var dx = vm.data[0].values[d] && vm.data[0].values[d].x || 0;
                        return d3.time.format('%b-%Y')(new Date(dx))
                            //  return (d);
                    },
                    showMaxMin: false
                },
                y1Axis: {
                    axisLabel: 'Y1 Axis',
                    tickFormat: function(d) {
                        return d3.format(',f')(d);
                    },
                    axisLabelDistance: 12
                },
                y2Axis: {
                    axisLabel: 'Y2 Axis',
                    tickFormat: function(d) {
                        return d3.format(',.2f')(d)
                    }
                },
                y3Axis: {
                    tickFormat: function(d) {
                        return d3.format(',f')(d);
                    }
                },
                y4Axis: {
                    tickFormat: function(d) {
                        return '$' + d3.format(',.2f')(d)
                    }
                }
            }
        };


        // var sin = [];

        // //Data is represented as an array of {x,y} pairs.
        // for (var i = 0; i < 100; i++) {
        //     // var c = [];
        //     sin.push({ x: i, y: i % 10 ? i % 5 ? i / 9 : i / 7 : i / 10 });
        //     //   sin.push[c];
        //     console.log(sin);
        // }
        $scope.master = [{
                "key": "Quantity",
                "bar": true,
                "values": [
                    // {
                    //     "x": 1136005200000,
                    //     "y": 127
                    // },
                    // {
                    //     "x": 1143781200000,
                    //     "y": 450
                    // },
                    // {
                    //     "x": 1330491600000,
                    //     "y": 560
                    // },
                    // {
                    //     "x": 1333166400000,
                    //     "y": 608
                    // }
                ]
            },
            {
                "key": "advertisement",
                // "color": "#1f77b4",
                "values": [



                ]
            },
            // {
            //     "key": "Price3",
            //     // "color": "#1f77b4",
            //     "values": [

            //         {
            //             "x": 1136005260000,
            //             "y": 71.89
            //         },
            //         {
            //             "x": 1143771200000,
            //             "y": 0
            //         },
            //         {
            //             "x": 1330491600000,
            //             "y": 690033
            //         },
            //         {
            //             "x": 1393166400000,
            //             "y": 514733
            //         }

            //     ]
            // }
        ]

        vm.data = [{
                "key": "Quantity",
                "bar": true,
                "values": [
                    // {
                    //     "x": 1136005200000,
                    //     "y": 127
                    // },
                    // {
                    //     "x": 1143781200000,
                    //     "y": 450
                    // },
                    // {
                    //     "x": 1330491600000,
                    //     "y": 560
                    // },
                    // {
                    //     "x": 1333166400000,
                    //     "y": 608
                    // }
                ]
            },
            {
                "key": "Adertisement",
                // "color": "#1f77b4",
                "values": [
                    // {
                    //     "x": 1136005200000,
                    //     "y": 71.89
                    // },
                    // {
                    //     "x": 1143781200000,
                    //     "y": 0
                    // },
                    // {
                    //     "x": 1330491600000,
                    //     "y": 690033
                    // },
                    // {
                    //     "x": 1333166400000,
                    //     "y": 514733
                    // }

                ]
            }
        ]

        // vm.data = [{
        //         "key": "Quantity",
        //         "bar": true,
        //         "values": [
        //             [1136005200000, 1271000.0],
        //             [1143781200000, 0],
        //             [1330491600000, 690033.0],
        //             [1333166400000, 514733.0],
        //             [1335758400000, 514733.0]
        //         ]
        //     },
        //     {
        //         "key": "Price",
        //         "values": [
        //             [1136005200000, 71.89],
        //             [1327986000000, 456.48],
        //             [1330491600000, 542.44],
        //             [1333166400000, 599.55],
        //             [1335758400000, 583.98]
        //         ]
        //     }
        // ]

        // .map(function(series) {
        //         series.values = series.values.map(function(d) { return { x: d[0], y: d[1] } });
        //         return series;
        //     }
        // );


        //   var sin = [];
        // sharedDataService.loadABinBevAll()
        //     .then(function(chartData) {
        //         vm.chartData = chartData;
        //         //   console.log("Line chartGetting data --- ++ " + chartData.data.data.length);
        //         var data = chartData.data.data;
        //         var ABI = filterFilter(data, { 'Brewer_Value': "ABI" });
        //         console.log("BREVER DATA data --- ++ " + ABI.length);
        //         //  var d = [];
        //         vm.calculate = function(ABI) {
        //             var data = ABI;
        //             //data.length
        //             for (var i = 0; i < data.length; i++) {

        //                 var date = new Date(data[i].Date);
        //                 var Volume_Sales = data[i].Volume_Sales;

        //                 vm.data[0].values.push({ x: date.getTime(), y: Volume_Sales });
        //                 //    console.log("d" + d);


        //             }

        //         }
        //         vm.calculate(data);
        //         //  $scope.$apply();

        //         //    return [{ values: vm.sin, color: 'rgb(0, 150, 136)', area: true }];
        //     });





        $scope.reset = function() {
            vm.data = angular.copy($scope.master);
        };

        //   var chartData = sharedDataService.getData();

        $scope.chartData = "";



        $scope.getTotalTodos = function() {
            console.log(vm.data + "$scope.chartData.length" + $scope.chartData.length);
            //            vm.data = $scope.chartData;
            //vm.calculate($scope.chartData);
            return $scope.chartData;
        };
        var deregister = $rootScope.$on(
            "EmitingData",
            function() {
                //  console.log("datas" + datas);
                $scope.chartData = sharedDataService.getData().data;
                console.log("inside emit    " + $scope.chartData);
                //console.log(chartData.data + "Responding to event %s.", chartData);
                vm.data = "";
                //    vm.data = datas;
                $scope.reset = function() {
                    // Example with 1 argument
                    vm.data = angular.copy($scope.master);
                    return vm.data;
                };
                $scope.reset();
                // $scope.$watch(function() { chartData }, function(newValue, oldValue) {
                //     $scope.data = chartData;
                //     console.log("vimal" + newValue);
                //     //  vm.data = newValue;
                // });

                $scope.getTotalTodos();

                function calculating(chartData) {
                    //    vm.data = datas;
                    data = "";
                    $scope.reset();
                    data = $scope.chartData;
                    console.log(vm.data + " inside calculating " + $scope.chartData.length);

                    // var data = ABI;
                    //data.length
                    for (var i = 0; i < data.length; i++) {

                        var date = new Date(data[i].Date);
                        var Volume_Sales = data[i].Volume_Sales;

                        var Display_Count = Volume_Sales = data[i].Display_Count;

                        vm.data[0].values.push({ x: date.getTime(), y: Volume_Sales });

                        vm.data[1].values.push({ x: date.getTime(), y: Display_Count });
                        //    console.log("d" + d);


                    }
                    $scope.$apply();

                }


                calculating($scope.chartData);


                $scope.$apply();
                //$rootScope.$digest();

            }
        );










    }
})();