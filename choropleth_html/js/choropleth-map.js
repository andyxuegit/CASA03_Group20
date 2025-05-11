
async function initChoroplethDataWithLegend(data,legendInfo,type) {
    const attributesName={
        'population-density-layer':'population_density',
        'business-density-layer':'business_density',
        'trips-layer':'total_trips',
        'median-income-layer':'median_income',
        'white-proportion-layer':'proportion'
    }
    const choroplethData=[];
    const features=data.features;
    features.forEach(feature => {
        //根据legendInfo中的min和max，找到对应的color
        const colorInfo=legendInfo.find(item=>item.min<=feature.properties[attributesName[type]]&&item.max>=feature.properties[attributesName[type]]);
        // console.log(colorInfo)
        const d={
            id:feature.properties.id?feature.properties.id:null,
            name: feature.properties.name?feature.properties.name:null,
            geometry: feature.geometry,
            
            properties:{
                color:colorInfo?colorInfo.color:'#000',
                id:feature.properties.id?feature.properties.id:null,
                name: feature.properties.name?feature.properties.name:null,
                value:feature.properties[attributesName[type]],
            }
        }
        choroplethData.push(d);
    });
    return choroplethData;
}

