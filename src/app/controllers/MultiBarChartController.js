(function() {
    angular
        .module('app')
        .controller('MultiBarChartController', ['sharedDataService', 'filterFilter', '$rootScope', '$scope', MultiBarChartController]);

    function MultiBarChartController(sharedDataService, filterFilter, $rootScope, $scope) {
        var vm = this;
        var _age_bucket_21_30, _age_bucket_31_40, _age_bucket_41_50, _age_bucket_Above50;
        vm.options = {
            chart: {
                type: 'multiBarChart',
                height: 250,
                x: function(d) { return d.label; },
                y: function(d) { return d.value; },
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 45,
                    left: 45
                },
                clipEdge: true,
                duration: 500,
                stacked: true,
                xAxis: {
                    axisLabel: 'Time (ms)',
                    // showMaxMin: false,
                    axisLabelDistance: -30,

                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 10,
                    tickFormat: function(d) {
                        return d3.format(',.1f')(d);
                    }
                },

                multibar: {


                    dispatch: {
                        elementClick: function(e) {
                            var e = e;
                            console.log("! element Click !" + e); //e.data.label e.data.value
                            var _clickedElement = e.data.label;
                            if (_clickedElement == '21-30') { sharedDataService.setData(_age_bucket_21_30) } else if (_clickedElement == '31-40') { sharedDataService.setData(_age_bucket_31_40) } else if (_clickedElement == '41-50') { sharedDataService.setData(_age_bucket_41_50) } else if (_clickedElement == 'Above 50') { sharedDataService.setData(_age_bucket_Above50) } else { console.log("error" + e); }

                        },
                        elementDblClick: function(e) { console.log("! element Double Click !") }
                    }
                },
            }
        };



        vm.data = [{
                "key": "Single",
                "color": "#d62728",
                "values": [{
                        "label": "21-30",
                        "value": 0
                    },
                    {
                        "label": "31-40",
                        "value": 0
                    },
                    {
                        "label": "41-50",
                        "value": 0
                    },
                    {
                        "label": "Above 50",
                        "value": 0
                    }
                ]
            },
            {
                "key": "Married",
                "color": "#1f77b4",
                "values": [{
                        "label": "21-30",
                        "value": 0
                    },
                    {
                        "label": "31-40",
                        "value": 0
                    },
                    {
                        "label": "41-50",
                        "value": 0
                    },
                    {
                        "label": "Above 50",
                        "value": 0
                    }
                ]
            },
            {
                "key": "Others",
                "color": 'green',
                "values": [{
                        "label": "21-30",
                        "value": 0
                    },
                    {
                        "label": "31-40",
                        "value": 0
                    },
                    {
                        "label": "41-50",
                        "value": 0
                    },
                    {
                        "label": "Above 50",
                        "value": 0
                    }
                ]
            }
        ];

        $scope.master = [{
                "key": "Single",
                "color": "#d62728",
                "values": [{
                        "label": "21-30",
                        "value": 0
                    },
                    {
                        "label": "31-40",
                        "value": 0
                    },
                    {
                        "label": "41-50",
                        "value": 0
                    },
                    {
                        "label": "Above 50",
                        "value": 0
                    }
                ]
            },
            {
                "key": "Married",
                "color": "#1f77b4",
                "values": [{
                        "label": "21-30",
                        "value": 0
                    },
                    {
                        "label": "31-40",
                        "value": 0
                    },
                    {
                        "label": "41-50",
                        "value": 0
                    },
                    {
                        "label": "Above 50",
                        "value": 0
                    }
                ]
            },
            {
                "key": "Others",
                "color": 'green',
                "values": [{
                        "label": "21-30",
                        "value": 0
                    },
                    {
                        "label": "31-40",
                        "value": 0
                    },
                    {
                        "label": "41-50",
                        "value": 0
                    },
                    {
                        "label": "Above 50",
                        "value": 0
                    }
                ]
            }
        ]

        //vm.data = generateData();
        //vm.data = vm.chartData;


        /* Random Data Generator (took from nvd3.org) */

        sharedDataService.loadAll()
            .then(function(chartData) {
                vm.chartData = chartData.data;
                var data = chartData.data.data;

                vm.calculate = function(data) {
                    for (var i = 0; i < data.length; i++) {
                        var Age_bucket = data[i].Age_bucket;

                        var marriage = data[i].MARRIAGE;

                        if (Age_bucket == "21-30") {
                            (marriage == 1) ? vm.data[0].values[0].value++: (marriage == 2) ? vm.data[1].values[0].value++ : vm.data[2].values[0].value++;
                            //   vm.data[0].values[0].value = vm.data[0].values[0].value + 2;
                        } //don't forget to add the base 
                        if (Age_bucket == "31-40") {
                            (marriage == 1) ? vm.data[0].values[1].value++: (marriage == 2) ? vm.data[1].values[1].value++ : vm.data[2].values[3].value++;
                        }
                        if (Age_bucket == "41-50") {
                            (marriage == 1) ? vm.data[0].values[2].value++: (marriage == 2) ? vm.data[1].values[2].value++ : vm.data[2].values[3].value++;
                        }
                        if (Age_bucket == "Above 50") {
                            (marriage == 1) ? vm.data[0].values[3].value++: (marriage == 2) ? vm.data[1].values[3].value++ : vm.data[2].values[3].value++;
                        } //don't forget to add the base 

                    }
                }
                vm.calculate(data);

                _age_bucket_21_30 = filterFilter(data, { 'Age_bucket': '21-30' });
                _age_bucket_31_40 = filterFilter(data, { 'Age_bucket': '31-40' });
                _age_bucket_41_50 = filterFilter(data, { 'Age_bucket': '41-50' });
                _age_bucket_Above50 = filterFilter(data, { 'Age_bucket': 'Above 50' });


            });

        //reset data
        $scope.reset = function() {
            vm.data = angular.copy($scope.master);
        };
        //reset end

        // cout no of items
        $scope.getTotalTodos = function() {
            console.log(vm.data + "$scope.chartData.length" + $scope.chartData.length);
            return $scope.chartData;
        };
        // cout no of items end

        //act on event triger
        var deregister = $rootScope.$on(
            "EmitingData",
            function() {

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
                    console.log(vm.data + " inside calculating " + $scope.chartData);

                    for (var i = 0; i < data.length; i++) {
                        var Age_bucket = data[i].Age_bucket;

                        var marriage = data[i].MARRIAGE;

                        if (Age_bucket == "21-30") {
                            (marriage == 1) ? vm.data[0].values[0].value++: (marriage == 2) ? vm.data[1].values[0].value++ : vm.data[2].values[0].value++;
                            //   vm.data[0].values[0].value = vm.data[0].values[0].value + 2;
                        } //don't forget to add the base 
                        if (Age_bucket == "31-40") {
                            (marriage == 1) ? vm.data[0].values[1].value++: (marriage == 2) ? vm.data[1].values[1].value++ : vm.data[2].values[3].value++;
                        }
                        if (Age_bucket == "41-50") {
                            (marriage == 1) ? vm.data[0].values[2].value++: (marriage == 2) ? vm.data[1].values[2].value++ : vm.data[2].values[3].value++;
                        }
                        if (Age_bucket == "Above 50") {
                            (marriage == 1) ? vm.data[0].values[3].value++: (marriage == 2) ? vm.data[1].values[3].value++ : vm.data[2].values[3].value++;
                        } //don't forget to add the base 

                    }
                    $scope.$apply();

                }


                calculating($scope.chartData);
                $scope.$apply();
                //$rootScope.$digest();

            }
        );

        //end on triger



















    }
})();