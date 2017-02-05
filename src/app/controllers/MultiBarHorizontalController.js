(function() {
    angular
        .module('app')
        .controller('MultiBarHorizontalController', ['sharedDataService', 'filterFilter', '$rootScope', '$scope',
            MultiBarHorizontalController
        ]);

    function MultiBarHorizontalController(sharedDataService, filterFilter, $rootScope, $scope) {
        var vm = this;
        var _virginia, _texas, _pennslvania, _massachusetts, _ohio, _arkanas, _newYork, _washington;

        var HE_BEER, CORE, HE_NEAR_BEER, VALUE, NON_ALC = "";

        vm.options = {
            chart: {
                type: 'multiBarHorizontalChart',
                height: 300,
                x: function(d) { return d.label; },
                y: function(d) { return d.value; },
                //yErr: function(d){ return [-Math.abs(d.value * Math.random() * 0.3), Math.abs(d.value * Math.random() * 0.3)] },
                showControls: true,
                showValues: true,
                duration: 500,
                xAxis: {
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Values',
                    tickFormat: function(d) {
                        return d3.format(',.2f')(d);
                    }
                },

                multibar: {



                    dispatch: {
                        elementClick: function(e) {
                            var e = e;
                            console.log("! element Click !" + e); //e.data.label e.data.value
                            var _clickedElement = e.data.label;
                            if (_clickedElement == 'HE BEER') { sharedDataService.setData(HE_BEER) } else if (_clickedElement == 'CORE') { sharedDataService.setData(CORE) } else if (_clickedElement == 'HE NEAR BEER') { sharedDataService.setData(HE_NEAR_BEER) } else if (_clickedElement == 'VALUE') { sharedDataService.setData(VALUE) } else if (_clickedElement == 'NON ALC') { sharedDataService.setData(NON_ALC) } else {
                                console.log("error" + e);
                            }

                        },
                        elementDblClick: function(e) { console.log("! element Double Click !") }
                    }
                },


            }
        };

        vm.data = [{
                "key": "promoted",
                "color": "#d62728",
                values: [{
                        "label": "HE BEER",
                        "value": 0
                    },
                    {
                        "label": "CORE",
                        "value": 0
                    },
                    {
                        "label": "HE NEAR BEER",
                        "value": 0
                    },
                    {
                        "label": "VALUE",
                        "value": 0
                    },
                    {
                        "label": "NON ALC",
                        "value": 0
                    }
                ]
            },
            {
                "key": "non promoted",
                "color": "#1f77b4",
                values: [{
                        "label": "HE BEER",
                        "value": 0
                    },
                    {
                        "label": "CORE",
                        "value": 0
                    },
                    {
                        "label": "HE NEAR BEER",
                        "value": 0
                    },
                    {
                        "label": "VALUE",
                        "value": 0
                    },
                    {
                        "label": "NON ALC",
                        "value": 0
                    }
                ]
            }
        ]

        var datas = [{
                "key": "promoted",
                "color": "#d62728",
                values: [{
                        "label": "HE BEER",
                        "value": 0
                    },
                    {
                        "label": "CORE",
                        "value": 0
                    },
                    {
                        "label": "HE NEAR BEER",
                        "value": 0
                    },
                    {
                        "label": "VALUE",
                        "value": 0
                    },
                    {
                        "label": "NON ALC",
                        "value": 0
                    }
                ]
            },
            {
                "key": "non promoted",
                "color": "#1f77b4",
                values: [{
                        "label": "HE BEER",
                        "value": 0
                    },
                    {
                        "label": "CORE",
                        "value": 0
                    },
                    {
                        "label": "HE NEAR BEER",
                        "value": 0
                    },
                    {
                        "label": "VALUE",
                        "value": 0
                    },
                    {
                        "label": "NON ALC",
                        "value": 0
                    }
                ]
            }
        ]

        // master data
        $scope.master = [{
                    "key": "promoted",
                    "color": "#d62728",
                    values: [{
                            "label": "HE BEER",
                            "value": 0
                        },
                        {
                            "label": "CORE",
                            "value": 0
                        },
                        {
                            "label": "HE NEAR BEER",
                            "value": 0
                        },
                        {
                            "label": "VALUE",
                            "value": 0
                        },
                        {
                            "label": "NON ALC",
                            "value": 0
                        }
                    ]
                },
                {
                    "key": "non promoted",
                    "color": "#1f77b4",
                    values: [{
                            "label": "HE BEER",
                            "value": 0
                        },
                        {
                            "label": "CORE",
                            "value": 0
                        },
                        {
                            "label": "HE NEAR BEER",
                            "value": 0
                        },
                        {
                            "label": "VALUE",
                            "value": 0
                        },
                        {
                            "label": "NON ALC",
                            "value": 0
                        }
                    ]
                }
            ]
            /***  getting data from server/csv and manipulate with chart */
            //   vm.getChartData = function() {
            //var deferred = $q.defer();deferred.resolve({ data: data });

        $scope.reset = function() {
            vm.data = angular.copy($scope.master);
        };

        //   var chartData = sharedDataService.getData();

        $scope.chartData = "";
        // $scope.$watch(function() { vm.data }, function(newValue, oldValue) {

        //     console.log("vimal" + newValue);
        //     //  vm.data = newValue;
        // });



        //shared data service call
        sharedDataService.loadABinBevAll()
            .then(function(chartData) {
                vm.chartData = chartData;
                var data = chartData.data.data;
                $scope.chartData = data;
                //       console.log($scope.chartData.length + "--- Shared data ---" + chartData.length);
                vm.calculate = function(data) {
                    $scope.reset = function() {
                        vm.data = angular.copy($scope.master);
                    };
                    $scope.reset();
                    //  console.log("datas" + vm.data);
                    $scope.data1 = data;


                    for (var i = 0; i < data.length; i++) {

                        var AB_Segment_Value = data[i].AB_Segment_Value;

                        var Display_Count = data[i].Display_Count;
                        // console.log("Display_Count" + Display_Count + "Display_Count");
                        // if (Display_Count == "") { Display_Count = 0; } else {
                        //     Display_Count = parseInt(Display_Count);
                        //     console.log(Display_Count + Display_Count);
                        //     Display_Count = 1;
                        // }
                        // if (AB_Segment_Value == "HE BEER") {
                        //     //   console.log("HE BEER" + vm.data[0].values[0].value);
                        //     // (Display_Count > 0) ? vm.data[0].values[0].value = vm.data[0].values[0].value + Display_Count: vm.data[1].values[0].value = vm.data[1].values[0].value + Display_Count;
                        //     (Display_Count > 0) ? vm.data[0].values[0].value++: vm.data[1].values[0].value++;
                        // } //don't forget to add the base 
                        // else if (AB_Segment_Value == "CORE") {
                        //     //    (Display_Count > 0) ? vm.data[0].values[1].value = vm.data[0].values[1].value + Display_Count: vm.data[1].values[1].value++;
                        //     (Display_Count > 0) ? vm.data[0].values[1].value++: vm.data[1].values[1].value++;
                        // } else if (AB_Segment_Value == "HE NEAR BEER") {
                        //     (Display_Count > 0) ? vm.data[0].values[2].value++: vm.data[1].values[2].value++;
                        // } else if (AB_Segment_Value > "VALUE") {
                        //     (Display_Count == 0) ? vm.data[0].values[3].value++: vm.data[1].values[3].value++;
                        // } //don't forget to add the base 
                        // else if (AB_Segment_Value > "NON ALC") {
                        //     (Display_Count == 0) ? vm.data[0].values[4].value++: vm.data[1].values[4].value++;
                        // }
                        if (AB_Segment_Value == "HE BEER") {
                            (Display_Count > 0) ? vm.data[0].values[0].value++: vm.data[1].values[0].value++;
                        } //don't forget to add the base 
                        else if (AB_Segment_Value == "CORE") {
                            (Display_Count > 0) ? vm.data[0].values[1].value++: vm.data[1].values[1].value++;
                        } else if (AB_Segment_Value == "HE NEAR BEER") {
                            (Display_Count > 0) ? vm.data[0].values[2].value++: vm.data[1].values[2].value++;
                        } else if (AB_Segment_Value == "VALUE") {
                            (Display_Count > 0) ? vm.data[0].values[3].value++: vm.data[1].values[3].value++;
                        } //don't forget to add the base 
                        else if (AB_Segment_Value == "NON ALC") {
                            (Display_Count > 0) ? vm.data[0].values[4].value++: vm.data[1].values[4].value++;
                        }
                    }
                }
                var a = vm.calculate(data);

                HE_BEER = filterFilter(data, { 'AB_Segment_Value': 'HE BEER' });
                CORE = filterFilter(data, { 'AB_Segment_Value': 'CORE' });
                HE_NEAR_BEER = filterFilter(data, { 'AB_Segment_Value': 'HE NEAR BEER' });
                VALUE = filterFilter(data, { 'AB_Segment_Value': 'VALUE' });
                NON_ALC = filterFilter(data, { 'AB_Segment_Value': 'NON ALC' });
            });
        //   };




        $scope.getTotalTodos = function() {
            console.log(vm.data + "$scope.chartData.length" + $scope.chartData.length);
            //            vm.data = $scope.chartData;
            //vm.calculate($scope.chartData);
            return $scope.chartData;
        };
        var deregister = $rootScope.$on(
            "EmitingData",
            function() {
                console.log("datas" + datas);
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

                        var AB_Segment_Value = data[i].AB_Segment_Value;

                        var Display_Count = data[i].Display_Count;

                        // if (Display_Count == "" || Display_Count == "undefined") {
                        //     Display_Count = 0;
                        // } else {
                        //     Display_Count = parseInt(Display_Count);
                        //     console.log(Display_Count + Display_Count);
                        //     // Display_Count = 1;
                        // }
                        //     console.log("Display_Count" + Display_Count + "Display_Count");
                        if (AB_Segment_Value == "HE BEER") {
                            (Display_Count > 0) ? vm.data[0].values[0].value++: vm.data[1].values[0].value++;
                        } //don't forget to add the base 
                        else if (AB_Segment_Value == "CORE") {
                            (Display_Count > 0) ? vm.data[0].values[1].value++: vm.data[1].values[1].value++;
                        } else if (AB_Segment_Value == "HE NEAR BEER") {
                            (Display_Count > 0) ? vm.data[0].values[2].value++: vm.data[1].values[2].value++;
                        } else if (AB_Segment_Value == "VALUE") {
                            (Display_Count > 0) ? vm.data[0].values[3].value++: vm.data[1].values[3].value++;
                        } //don't forget to add the base 
                        else if (AB_Segment_Value == "NON ALC") {
                            (Display_Count > 0) ? vm.data[0].values[4].value++: vm.data[1].values[4].value++;
                        }

                    }
                    $scope.$apply();

                }


                calculating($scope.chartData);

                HE_BEER = filterFilter(data, { 'AB_Segment_Value': 'HE BEER' });
                CORE = filterFilter(data, { 'AB_Segment_Value': 'CORE' });
                HE_NEAR_BEER = filterFilter(data, { 'AB_Segment_Value': 'HE NEAR BEER ' });
                VALUE = filterFilter(data, { 'AB_Segment_Value': 'VALUE' });
                NON_ALC = filterFilter(data, { 'AB_Segment_Value': 'NON ALC' });

                $scope.$apply();
                //$rootScope.$digest();

            }
        );



    }

})();