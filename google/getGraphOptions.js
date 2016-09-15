function getGraphOptions(){
    var options = 
    	{
            pointSize: 1,
            lineWidth: 2,
            series:{
                0:{pointShape: 'circle'}
            },
            vAxes:{
                0:{
                    title: 'Elevation (m)',
                }
            },
            explorer:{
                maxZoomIn: 0.1,
                maxZoomOut: 10,
                zoomDelta: 1.01,
                axis: 'vertical'
            },
            interpolateNulls: false,
            colors: ['blue', 'orange', 'red'],
        };
    return options;
}

 