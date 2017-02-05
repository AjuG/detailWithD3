(function() {
    angular
        .module('app')
        .controller('PieController', ['sharedDataService', 'filterFilter',
            PieController
        ]);

    function PieController(sharedDataService, filterFilter) {
        var vm = this;

        vm.data = [{
                key: "ABI",
                y: 0
            },
            {
                key: "COMPETITOR3",
                y: 0
            },
            {
                key: "COMPETITOR73",
                y: 0
            },
            {
                key: "COMPETITOR5",
                y: 0
            },
            {
                key: "COMPETITOR97",
                y: 0
            },
            {
                key: "COMPETITOR135",
                y: 0
            },
            {
                key: "COMPETITOR1",
                y: 0
            },
            {
                key: "COMPETITOR1769",
                y: 0
            },
            {
                key: "COMPETITOR2",
                y: 0
            },
            {
                key: "COMPETITOR4",
                y: 0
            },
            {
                key: "COMPETITOR589",
                y: 0
            },
            {
                key: "COMPETITOR667",
                y: 0
            },
            {
                key: "COMPETITOR8",
                y: 0
            },
            {
                key: "COMPETITOR721",
                y: 0
            },
            {
                key: "COMPETITOR152",
                y: 0
            },
            {
                key: "COMPETITOR847",
                y: 0
            },
            {
                key: "COMPETITOR435",
                y: 0
            },
            {
                key: "COMPETITOR1593",
                y: 0
            },
            {
                key: "COMPETITOR985",
                y: 0
            },
            {
                key: "COMPETITOR10",
                y: 0
            },
            {
                key: "COMPETITOR1379",
                y: 0
            },
            {
                key: "COMPETITOR6",
                y: 0
            },
            {
                key: "COMPETITOR9",
                y: 0
            },
            {
                key: "COMPETITOR1509",
                y: 0
            },
            {
                key: "COMPETITOR1698",
                y: 0
            }



















        ];
        var ABI, COMPETITOR3, COMPETITOR73, COMPETITOR5, COMPETITOR97, COMPETITOR135, COMPETITOR1 = "";
        var COMPETITOR1769, COMPETITOR2, COMPETITOR4, COMPETITOR589 = "";
        var COMPETITOR667, COMPETITOR8, COMPETITOR721, COMPETITOR152, COMPETITOR847, COMPETITOR435, COMPETITOR1593 = "";
        var COMPETITOR985, COMPETITOR10, COMPETITOR1379, COMPETITOR6, COMPETITOR9, COMPETITOR1509, COMPETITOR1698 = "";

        var FeMale = "";
        var Male = "";
        // vm.calculateX = function() {
        sharedDataService.loadABinBevAll()
            .then(function(chartData) {
                // var obj = JSON.parse(chartData);
                // vm.chartData = obj;
                vm.chartData = chartData.data;
                var data = chartData.data.data;

                vm.calculateSum = function(data) {
                        for (var i = 0; i < data.length; i++) {
                            var Brewer_Value = data[i].Brewer_Value;
                            if (Brewer_Value == "ABI") {
                                vm.data[0].y = vm.data[0].y + 1;
                            } //don't forget to add the base 
                            else if (Brewer_Value == "COMPETITOR3") {
                                vm.data[1].y = vm.data[1].y + 1;
                            } else if (Brewer_Value == "COMPETITOR73") {
                                vm.data[2].y = vm.data[2].y + 1;
                            } else if (Brewer_Value == "COMPETITOR5") {
                                vm.data[3].y = vm.data[3].y + 1;
                            } else if (Brewer_Value == "COMPETITOR97") {
                                vm.data[4].y = vm.data[4].y + 1;
                            } else if (Brewer_Value == "COMPETITOR135") {
                                vm.data[5].y = vm.data[5].y + 1;
                            } else if (Brewer_Value == "COMPETITOR1") {
                                vm.data[6].y = vm.data[6].y + 1;
                            } else if (Brewer_Value == "COMPETITOR1769") {
                                vm.data[7].y = vm.data[7].y + 1;
                            } else if (Brewer_Value == "COMPETITOR2") {
                                vm.data[8].y = vm.data[8].y + 1;
                            } else if (Brewer_Value == "COMPETITOR4") {
                                vm.data[9].y = vm.data[9].y + 1;
                            } else if (Brewer_Value == "COMPETITOR589") {
                                vm.data[10].y = vm.data[10].y + 1;
                            } else if (Brewer_Value == "COMPETITOR667") {
                                vm.data[11].y = vm.data[11].y + 1;
                            } else if (Brewer_Value == "COMPETITOR8") {
                                vm.data[12].y = vm.data[12].y + 1;
                            } else if (Brewer_Value == "COMPETITOR721") {
                                vm.data[13].y = vm.data[13].y + 1;
                            } else if (Brewer_Value == "COMPETITOR152") {
                                vm.data[14].y = vm.data[14].y + 1;
                            } else if (Brewer_Value == "COMPETITOR847") {
                                vm.data[15].y = vm.data[15].y + 1;
                            } else if (Brewer_Value == "COMPETITOR435") {
                                vm.data[16].y = vm.data[16].y + 1;
                            } else if (Brewer_Value == "COMPETITOR1593") {
                                vm.data[17].y = vm.data[17].y + 1;
                            } else if (Brewer_Value == "COMPETITOR985") {
                                vm.data[18].y = vm.data[18].y + 1;
                            } else if (Brewer_Value == "COMPETITOR10") {
                                vm.data[19].y = vm.data[19].y + 1;
                            } else if (Brewer_Value == "COMPETITOR1379") {
                                vm.data[20].y = vm.data[20].y + 1;
                            } else if (Brewer_Value == "COMPETITOR6") {
                                vm.data[21].y = vm.data[21].y + 1;
                            } else if (Brewer_Value == "COMPETITOR9") {
                                vm.data[22].y = vm.data[22].y + 1;
                            } else if (Brewer_Value == "COMPETITOR1509") {
                                vm.data[23].y = vm.data[23].y + 1;
                            } else if (Brewer_Value == "COMPETITOR1698") {
                                vm.data[24].y = vm.data[24].y + 1;
                            }


                        }
                    }
                    // console.log(count);
                    //   console.log("Getting chartData" + chartData.data.length);

                vm.calculateSum(data);

                ABI = filterFilter(data, { 'Brewer_Value': "ABI" });
                COMPETITOR3 = filterFilter(data, { 'Brewer_Value': "COMPETITOR3" });
                COMPETITOR73 = filterFilter(data, { 'Brewer_Value': "COMPETITOR73" });
                COMPETITOR5 = filterFilter(data, { 'Brewer_Value': "COMPETITOR5" });
                COMPETITOR97 = filterFilter(data, { 'Brewer_Value': "COMPETITOR97" });
                COMPETITOR135 = filterFilter(data, { 'Brewer_Value': "COMPETITOR135" });
                COMPETITOR1 = filterFilter(data, { 'Brewer_Value': "COMPETITOR1" });
                COMPETITOR1769 = filterFilter(data, { 'Brewer_Value': "COMPETITOR1769" });
                COMPETITOR2 = filterFilter(data, { 'Brewer_Value': "COMPETITOR2" });
                COMPETITOR4 = filterFilter(data, { 'Brewer_Value': "COMPETITOR4" });
                COMPETITOR589 = filterFilter(data, { 'Brewer_Value': "COMPETITOR589" });
                COMPETITOR667 = filterFilter(data, { 'Brewer_Value': "COMPETITOR667" });
                COMPETITOR8 = filterFilter(data, { 'Brewer_Value': "COMPETITOR8" });
                COMPETITOR721 = filterFilter(data, { 'Brewer_Value': "COMPETITOR721" });
                COMPETITOR152 = filterFilter(data, { 'Brewer_Value': "COMPETITOR152" });
                COMPETITOR847 = filterFilter(data, { 'Brewer_Value': "COMPETITOR847" });
                COMPETITOR435 = filterFilter(data, { 'Brewer_Value': "COMPETITOR435" });
                COMPETITOR1593 = filterFilter(data, { 'Brewer_Value': "COMPETITOR1593" });
                COMPETITOR985 = filterFilter(data, { 'Brewer_Value': "COMPETITOR985" });
                COMPETITOR10 = filterFilter(data, { 'Brewer_Value': "COMPETITOR10" });
                COMPETITOR1379 = filterFilter(data, { 'Brewer_Value': "COMPETITOR1379" });
                COMPETITOR6 = filterFilter(data, { 'Brewer_Value': "COMPETITOR6" });
                COMPETITOR9 = filterFilter(data, { 'Brewer_Value': "COMPETITOR9" });
                COMPETITOR1509 = filterFilter(data, { 'Brewer_Value': "COMPETITOR1509" });
                COMPETITOR1698 = filterFilter(data, { 'Brewer_Value': "COMPETITOR1698" });

                //console.log("male " + Male.length)
            });

        //   }



        vm.options = {
            chart: {
                type: 'pieChart',
                height: 400,
                x: function(d) { return d.key; },
                y: function(d) { return d.y; },
                showLabels: false,
                duration: 500,
                labelThreshold: 0.01,
                //  labelSunbeamLayout: true,
                legend: {
                    margin: {
                        top: 5,
                        right: 35,
                        bottom: 5,
                        left: 0
                    }
                },
                //chart events
                pie: {
                    dispatch: {
                        // chartClick: function(e) {
                        //     console.log("clicked");
                        // },
                        elementClick: function(e) {
                            var a = sharedDataService.getFullData();
                            console.log("clicked on ----" + e.data.key);
                            var Brewer_Value = e.data.key;

                            if (Brewer_Value == "ABI") {
                                sharedDataService.setData(ABI)
                            } //don't forget to add the base 
                            else if (Brewer_Value == "COMPETITOR3") {
                                sharedDataService.setData(COMPETITOR3)
                            } else if (Brewer_Value == "COMPETITOR73") {
                                sharedDataService.setData(COMPETITOR73)
                            } else if (Brewer_Value == "COMPETITOR5") {
                                sharedDataService.setData(COMPETITOR5)
                            } else if (Brewer_Value == "COMPETITOR97") {
                                sharedDataService.setData(COMPETITOR97)
                            } else if (Brewer_Value == "COMPETITOR135") {
                                sharedDataService.setData(COMPETITOR135)
                            } else if (Brewer_Value == "COMPETITOR1") {
                                sharedDataService.setData(COMPETITOR1)
                            } else if (Brewer_Value == "COMPETITOR1769") {
                                sharedDataService.setData(COMPETITOR1769)
                            } else if (Brewer_Value == "COMPETITOR2") {
                                sharedDataService.setData(COMPETITOR2)
                            } else if (Brewer_Value == "COMPETITOR4") {
                                sharedDataService.setData(COMPETITOR4)
                            } else if (Brewer_Value == "COMPETITOR589") {
                                sharedDataService.setData(COMPETITOR589)
                            } else if (Brewer_Value == "COMPETITOR667") {
                                sharedDataService.setData(COMPETITOR667)
                            } else if (Brewer_Value == "COMPETITOR8") {
                                sharedDataService.setData(COMPETITOR8)
                            } else if (Brewer_Value == "COMPETITOR721") {
                                sharedDataService.setData(COMPETITOR721)
                            } else if (Brewer_Value == "COMPETITOR152") {
                                sharedDataService.setData(COMPETITOR152)
                            } else if (Brewer_Value == "COMPETITOR847") {
                                sharedDataService.setData(COMPETITOR847)
                            } else if (Brewer_Value == "COMPETITOR435") {
                                sharedDataService.setData(COMPETITOR435)
                            } else if (Brewer_Value == "COMPETITOR1593") {
                                sharedDataService.setData(COMPETITOR1593)
                            } else if (Brewer_Value == "COMPETITOR985") {
                                sharedDataService.setData(COMPETITOR985)
                            } else if (Brewer_Value == "COMPETITOR10") {
                                sharedDataService.setData(COMPETITOR10)
                            } else if (Brewer_Value == "COMPETITOR1379") {
                                sharedDataService.setData(COMPETITOR1379)
                            } else if (Brewer_Value == "COMPETITOR6") {
                                sharedDataService.setData(COMPETITOR6)
                            } else if (Brewer_Value == "COMPETITOR9") {
                                sharedDataService.setData(COMPETITOR9)
                            } else if (Brewer_Value == "COMPETITOR1509") {
                                sharedDataService.setData(COMPETITOR1509)
                            } else if (Brewer_Value == "COMPETITOR1698") {
                                sharedDataService.setData(COMPETITOR1698)
                            }
                            //   console.log(Male + "+jjj" + FeMale);
                            //      sharedDataService.setData(Male);
                        }

                    }
                },
            }
        };














    }
})();