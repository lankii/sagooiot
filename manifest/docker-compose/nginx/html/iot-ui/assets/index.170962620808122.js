import{p as t,j as e,l as d,k as o,n as c}from"./index.1709626208081.js";var r={common:{singleImg:e=>(e.append("source","0"),t("/common/singleImg",e))},product:{propertySet:e=>t("/product/property/set",e),connect_intro:t=>e("/product/connect_intro",{productKey:t}),getList:t=>e("/product/page_list",t),getLists:t=>e("/product/list",t),add:e=>t("/product/add",e),"delete":t=>d("/product/del",{keys:t}),edit:t=>o("/product/edit",t),detail:t=>e("/product/detail",{productKey:t}),message_protocol_list:t=>e("/product/protocol/message_protocol_list",t),trunsport_protocol_list:t=>e("/product/protocol/trunsport_protocol_list",t),getDataType:t=>e("/product/tsl/data_type",t),deploy:e=>t("/product/deploy",{productKey:e}),undeploy:e=>t("/product/undeploy",{productKey:e}),event:t=>e("/product/tsl/event/all",t),getSubList:()=>e("/product/sub_list"),"export":t=>c("/product/tsl/export",t),deleteSubDevice:t=>d("/product/device/del_sub",{deviceKey:t}),getTypesAll:t=>e("/system/plugins/getTypesAll",t),script:t=>o("/product/script/update",t)},category:{getList:t=>e("/product/category/list",t),add:e=>t("/product/category/add",e),edit:t=>o("/product/category/edit",t),del:t=>d("/product/category/del",{id:t})},instance:{getList:t=>e("/product/device/page_list",t),add:e=>t("/product/device/add",e),edit:t=>o("/product/device/edit",t),del:t=>d("/product/device/del",{keys:t}),detail:t=>e("/product/device/detail",{deviceKey:t}),getLogList:t=>e("/product/log/search",t),getlogcate:t=>e("/product/log/type",t),getrun_status:t=>e("/product/device/run_status",t),getLogDetail:t=>e("/product/device/property/list",t),devonline:e=>t("/product/device/online",e),devoffline:e=>t("/product/device/offline",e),devdeploy:e=>t("/product/device/deploy",{deviceKey:e}),devundeploy:e=>t("/product/device/undeploy",{deviceKey:e})},dept:{getList:t=>e("/system/dept/tree",t)},tabDeviceFucntion:{getList:t=>e("/product/tsl/function/all",t),"do":e=>t("/product/function/do",e)},model:{property:t=>e("/product/tsl/property/list",t),propertyadd:e=>t("/product/tsl/property/add",e),propertyedit:t=>o("/product/tsl/property/edit",t),propertydel:(t,e)=>d("/product/tsl/property/del",{productKey:t,key:e}),"function":t=>e("/product/tsl/function/list",t),functionadd:e=>t("/product/tsl/function/add",e),functionedit:t=>o("/product/tsl/function/edit",t),functiondel:(t,e)=>d("/product/tsl/function/del",{productKey:t,key:e}),event:t=>e("/product/tsl/event/list",t),eventadd:e=>t("/product/tsl/event/add",e),eventedit:t=>o("/product/tsl/event/edit",t),eventdel:(t,e)=>d("/product/tsl/event/del",{productKey:t,key:e}),tag:t=>e("/product/tsl/tag/list",t),tagadd:e=>t("/product/tsl/tag/add",e),tagedit:t=>o("/product/tsl/tag/edit",t),tagdel:(t,e)=>d("/product/tsl/tag/del",{productKey:t,key:e})},tree:{getList:t=>e("/product/device_tree/list",t),add:e=>t("/product/device_tree/info/add",e),edit:t=>o("/product/device_tree/info/edit",t),detail:t=>e("/product/device_tree/info/detail",t),"delete":t=>d("/product/device_tree/info/del",t),statistic:t=>e("/envirotronics/device_tree/statistic",t),record:t=>e("/envirotronics/device_tree/record",t),param:t=>e("/envirotronics/device_tree/param",t)},device:{getList:t=>e("/product/device/bind_list",t),allList:t=>e("/product/device/list",t),getSubList:t=>e("/product/device/sub_list",t),mutipleBind:e=>t("/product/device/bind_sub",e),mutipleUnbind:e=>t("/product/device/unbind_sub",e),updateOnlineTimeout:t=>o("/product/device/extend/update",t),setDeviceStatus:e=>t("/product/device/setDeviceStatus",e),"import":e=>t("/product/device/import",e),"export":t=>c("/product/device/export",t)},dev_asset:{getList:t=>e("/product/dev_asset/list",t),add:e=>t("/product/dev_asset/add",e),edit:t=>o("/product/dev_asset/edit",t),detail:t=>e("/product/dev_asset/get",t),"delete":t=>d("/product/dev_asset/delete",t)},dev_asset_metadata:{getList:t=>e("/product/dev_asset_metadata/list",t),add:e=>t("/product/dev_asset_metadata/add",e),edit:t=>o("/product/dev_asset_metadata/edit",t),detail:t=>e("/product/dev_asset_metadata/key",t),"delete":t=>d("/product/dev_asset_metadata/delete",t)}};export{r as a};