(function() {

    angular
        .module('app')
        .controller('CumulativeController', ['sharedDataService', 'filterFilter',
            'tableService', '$rootScope', '$scope',
            CumulativeController
        ]);


    function CumulativeController(sharedDataService, filterFilter, tableService, $rootScope, $scope) {

        var vm = this;











        vm.options = {
            chart: {
                type: 'cumulativeLineChart',
                height: 450,
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 65
                },
                // x: function(d) { return d[0]; },
                // y: function(d) { return d[1] / 100; },
                // average: function(d) { return d.mean / 100; },
                x: function(d) { return d.x; },
                y: function(d) { return d.y; },
                color: d3.scale.category10().range(),
                duration: 300,
                useInteractiveGuideline: true,
                clipVoronoi: false,

                xAxis: {
                    axisLabel: 'X Axis',
                    tickFormat: function(d) {
                        return d3.time.format('%x')(new Date(d))
                            // return d3.time.format('%m/%d/%y')(new Date(d))
                    },
                    showMaxMin: false,
                    staggerLabels: true
                },

                yAxis: {
                    axisLabel: 'Y Axis',
                    tickFormat: function(d) {
                        return d3.format(',f')(d);
                    },
                    axisLabelDistance: 20
                }
            }
        };

        vm.data = [{
            key: "Long",
            values: [

            ],
            mean: 250

        }];

        $scope.master = [{
            "key": "Long",
            // "bar": true,
            "values": [

            ],
            mean: 250
        }]













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

                        vm.data[0].values.push({ x: date.getTime(), y: Volume_Sales });
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