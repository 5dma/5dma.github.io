var map = L.map('map').setView([39.043586,-77.128857], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var eruvCoords=[
[39.022589,-77.103219], /*Grov-Pike NW corner */
[39.022641,-77.105271],
[39.022753,-77.105522],
[39.023074,-77.10652],
[39.023939,-77.107351],
[39.025041,-77.108365],
[39.025739,-77.109049],
[39.026325,-77.109714],
[39.026896,-77.110506],
[39.027267,-77.111034],
[39.027623,-77.111573],
[39.028115,-77.112646],
[39.028511,-77.113603],
[39.028865,-77.114719],
[39.029154,-77.115894],
[39.02939,-77.117157],
[39.029607,-77.118595],
[39.029811,-77.119992],
[39.030015,-77.12121],
[39.030015,-77.12121],
[39.030442,-77.123938],
[39.030684,-77.124745],
[39.031086,-77.125596],
[39.031242,-77.125782],
[39.031492,-77.125877],
/* [39.032008,-77.12575],
[39.03252,-77.125629], 
[39.032666,-77.126145],
[39.032225,-77.126328],*/
[39.031633,-77.126514], /* 270 OGR NW corner */
[39.031405,-77.1269],
[39.03132,-77.127586],
[39.031428,-77.128351],
[39.031761,-77.130079],
[39.031949,-77.131056],
[39.032026,-77.131616],
[39.032171,-77.13241],
[39.03226,-77.133048],
[39.032316,-77.133659],
[39.032345,-77.134165],
[39.032377,-77.134668],
[39.032421,-77.134964],
[39.032469,-77.135477],
[39.032469,-77.135477],
[39.032628,-77.137002],
[39.032678,-77.137392],
[39.032763,-77.137927],
[39.032881,-77.13852],
[39.033024,-77.139155],
[39.033151,-77.139605],
[39.033305,-77.140044],
[39.033516,-77.140543],
[39.033817,-77.141171],
[39.034074,-77.141584],
[39.03448,-77.141992],
[39.034986,-77.142673],
[39.035795,-77.143566],
[39.036405,-77.144103],
[39.037122,-77.144596],
[39.038022,-77.145272],
[39.051119,-77.151897],
[39.053239,-77.152686],
[39.053672,-77.152764], /* Start of offramp 270 N to Montrose. */
[39.054257,-77.152616],
[39.054789,-77.152359], 
[39.055255,-77.15209],
[39.055509,-77.151782],
[39.055603,-77.15149], /* Middle of offramp */
[39.055647,-77.15127],
[39.055636,-77.150795],
[39.055078,-77.147527], /* End of sound barrier, Montrose Rd. Exit */
[39.054866,-77.146884], /* Telephone pole, south side of Hitching Post */
[39.054825,-77.146218], /* Telephone pole, north side of Hitching post */
[39.054626,-77.145584],
[39.054397,-77.144908],
[39.054326,-77.144578],
[39.054255,-77.14399],
[39.05423,-77.143337],
[39.054254,-77.142972],
[39.054282,-77.142039],
[39.054278,-77.14204],
[39.054279,-77.141567],
[39.054303,-77.141229],
[39.054299,-77.140608],
[39.054227,-77.13996],
[39.054514,-77.139926],
[39.054187,-77.138178],
[39.055853,-77.136631],
[39.056237,-77.137317],
[39.05788,-77.1361],
[39.061603,-77.133374],
[39.063928,-77.130606],
[39.064948,-77.129512],
[39.06743,-77.131631],
[39.067709,-77.131234],
[39.06813,-77.131631],
[39.068408,-77.131396],
[39.068633,-77.13117],
[39.068882,-77.130769],
[39.069046,-77.130521],
[39.06733,-77.128898],
[39.067589,-77.128543],
[39.06817,-77.127599],
[39.06167,-77.120156],
/* Start of deleted area */
//[39.061149,-77.120937],
//[39.0602,-77.120164],
//[39.059483,-77.121688],
//[39.058723,-77.121041],
//[39.058733,-77.121602],
//[39.058268,-77.121147],
//[39.057322,-77.120353],
//[39.056204,-77.119405],
//[39.056377,-77.119068],
//[39.053785,-77.11686],
//[39.053316,-77.115502],/* Montrose / Pike */
/* End of deleted area */

[39.059603, -77.117731],
[39.058921, -77.118961], /* Tbrook Chapman NE */
[39.058593, -77.118640], /* Tbrook Chapman SE */
[39.058735, -77.118385], 
[39.059234, -77.117355], /* Guitar Center N corner */
[39.058350, -77.116288], /* HHS  */
[39.057948, -77.115922], /* Flagship corner  */
[39.057628, -77.115875], /* First lamp post on Bou */
[39.057490, -77.115303], /* Second lamp post on Bou */
[39.057241, -77.114934], /* Third lamp post on Bou */
[39.057285, -77.114797], /* Back to train fence */
[39.053664, -77.110643], /* Train fence and Randolph */
[39.053493, -77.110680], /* */
[39.053487, -77.110847], /* */
[39.053515, -77.110924], /* Randolph Nevel NE */
[39.053234, -77.110835], /* Randolph Nebel SE */
[39.053063, -77.110826], /* Proceed south on Nebel */
[39.052810, -77.110730], 
[39.052306, -77.110369], 
[39.051710, -77.109909], 
[39.050911, -77.109284], 
[39.050703, -77.109129], 
[39.050381, -77.108656], /* Nebel, just south of OGR */
[39.050241, -77.108317], /* Continue S on Nebel */
[39.050091, -77.107917],
[39.049949, -77.107662],
[39.049727, -77.107396],
[39.048039, -77.105402], /* Nebel Marinelli NE */
[39.048379, -77.104706], /* Turn into parking lot  */
[39.048012, -77.104313], 
[39.047777, -77.104606], /* Start Outline of MoCo building */
[39.047819, -77.104726], 
[39.047648, -77.104949], 
[39.047533, -77.104797], 
[39.047409, -77.105035], 
[39.047098, -77.105036], /* End outline of MoCo building, start outline of Biro Dominican Salon */
[39.047076, -77.104592],
[39.046631, -77.104529],
[39.046586, -77.104666],
[39.046278, -77.104751],
[39.046268, -77.105058], /* End of Biro Dominican, cross Nebel */
[39.045748, -77.105291],
[39.045204, -77.105115], /* Cross Nicholson */
[39.045031, -77.105462], /* Continue W on Nicholson */
[39.044921, -77.105961], 
[39.044872, -77.106768],
[39.044810, -77.108639],
[39.044780, -77.108914],
[39.044699, -77.109973], 
[39.044757, -77.110605], 
[39.044792, -77.110950], 
[39.044578, -77.111897],  /*Nicholson Rock Pike SE */
[39.037553, -77.108434], /* Bangore and Rock Pike, NE */
[39.037670, -77.108056], /* Bangore and Rock Pike, NW */


/* End of Eruv expansion to north east */
[39.035438,-77.106925], /*Strathmore + Pke */
[39.035138,-77.106812],/*Strathmore + Pke */
[39.034765,-77.106681],
[39.033615,-77.106252],
[39.033055,-77.10604],
[39.032482,-77.105817],
[39.03184,-77.105502],
/*[39.031743,-77.105911],
[39.030944,-77.105498],*/
[39.030911,-77.104994], /*Pike + Tuckerman */
[39.030465, -77.104791],
[39.030392,-77.105185],
[39.029649,-77.104796],
[39.029108,-77.104499],
[39.028162,-77.1041],
[39.0275,-77.103931],
[39.026275,-77.103683],
[39.025072,-77.103439],
[39.024299,-77.103275],
[39.023649,-77.103196]
];
var polygon = L.polygon(eruvCoords,{fill:false}).addTo(map);


const point = new L.Point(24,36);
const eiIcon = new L.Icon({iconUrl: 'yellow_marker.png', iconSize: point, className:'eimarker'});
const hotelIcon = new L.Icon({iconUrl: 'blue_marker.png', iconSize: point, className:'eimarker'});
const apartmentIcon = new L.Icon({iconUrl: 'green_marker.png', iconSize: point, className:'eimarker'});
const restaurantIcon = new L.Icon({iconUrl: 'brown_marker.png', iconSize: point, className:'eimarker'});
const superIcon = new L.Icon({iconUrl: 'red_marker.png', iconSize: point, className:'eimarker'});
const otherIcon = new L.Icon({iconUrl: 'pink_marker.png', iconSize: point, className:'eimarker'});
const metroIcon = new L.Icon({iconUrl: 'orange_marker.png', iconSize: point, className:'eimarker'});
var EICoords = L.marker([39.05345, -77.13236], {icon: eiIcon}).addTo(map);
var RHCoords = L.marker([39.05622, -77.12713], {icon: otherIcon}).addTo(map);
var JCCCoords = L.marker([39.0533, -77.12472], {icon: otherIcon}).addTo(map);
var HiltonCoords = L.marker([39.06102, -77.12265], {icon: hotelIcon}).addTo(map);
var MarriottCoords = L.marker([39.04715, -77.11571], {icon: hotelIcon}).addTo(map);
var EvenCoords = L.marker([39.060014, -77.12310], {icon: hotelIcon}).addTo(map);
var CanopyCoords = L.marker([39.05094, -77.11626], {icon: hotelIcon}).addTo(map);
/*var BlueStarCoords = L.marker([39.0440965, -77.1134442]).addTo(map);*/
var MotiCoords = L.marker([39.04637, -77.09931], {icon: superIcon}).addTo(map);
var SiennaCoords = L.marker([39.04617, -77.09924], {icon: restaurantIcon}).addTo(map);
var GoldbergCoords = L.marker([39.04623, -77.09870], {icon: restaurantIcon}).addTo(map);
var AlHaeshCoords = L.marker([39.046354, -77.099572], {icon: restaurantIcon}).addTo(map);
var SunflowerCoords= L.marker([39.04956, -77.12309], {icon: restaurantIcon}).addTo(map);
var OhMamaCoords= L.marker([39.058232, -77.126180], {icon: restaurantIcon}).addTo(map);
var CongressionalTowersCoords = L.marker([39.061617, -77.132339], {icon: apartmentIcon}).addTo(map);
var ArriveNorthBethesdaCoords = L.marker([39.05356, -77.11904], {icon: apartmentIcon}).addTo(map);
var RollinsParkApartmentsCoords = L.marker([39.060041, -77.12895], {icon: apartmentIcon}).addTo(map);
var TheStoriesApartmentsCoords = L.marker([39.06192, -77.12829], {icon: apartmentIcon}).addTo(map);
var TheResidencesAtCongressionalVillageCoords = L.marker([39.060320, -77.125703], {icon: apartmentIcon}).addTo(map);
var RollinsRidgeCoords = L.marker([39.05863, -77.12302], {icon: apartmentIcon}).addTo(map);
var MiramontCoords = L.marker([39.056079, -77.125483], {icon: apartmentIcon}).addTo(map);
var PallasCoords = L.marker([39.04937, -77.11881], {icon: apartmentIcon}).addTo(map);
var HenriCoords = L.marker([39.05036, -77.11748], {icon: apartmentIcon}).addTo(map);
var PerseiCoords = L.marker([39.04993, -77.11673], {icon: apartmentIcon}).addTo(map);
var NorthBethesdaCoords = L.marker([39.047621, -77.112338], {icon: metroIcon}).addTo(map);
var TwinbrookCoords = L.marker([39.062334, -77.121205], {icon: metroIcon}).addTo(map);
var GrosvenorStrathmoreCoords = L.marker([39.028996, -77.103476], {icon: metroIcon}).addTo(map);

EICoords.bindPopup("Ezras Israel");
RHCoords.bindPopup("Ring House");
JCCCoords.bindPopup("Jewish Community Center");
HiltonCoords.bindPopup("Hilton Rockville (1)");
MarriottCoords.bindPopup("Bethesda North Marriott (2)");
EvenCoords.bindPopup("Even Hotel (3)");
CanopyCoords.bindPopup("Canopy Hotel (4)");
MotiCoords.bindPopup("Moti's Market");
SiennaCoords.bindPopup("Siena's Vegetarian Pizza and Restaurant (1)");
AlHaeshCoords.bindPopup("Al Ha'esh Israeli Grill (2)");
GoldbergCoords.bindPopup("Goldberg's Bagels (3)");
SunflowerCoords.bindPopup("Café Sunflower (4)");
OhMamaCoords.bindPopup("Oh Mama Grill (5)");
CongressionalTowersCoords.bindPopup("Congressional Towers (1)");
ArriveNorthBethesdaCoords.bindPopup("Arrive North Bethesda (2)");
RollinsParkApartmentsCoords.bindPopup("Rollins Park (3)");
TheStoriesApartmentsCoords.bindPopup("The Stories (4)");
TheResidencesAtCongressionalVillageCoords.bindPopup("The Residences at Congressional Village (5)");
RollinsRidgeCoords.bindPopup("Rollins Ridge (6)");
MiramontCoords.bindPopup("Miramont (7)");
PallasCoords.bindPopup("Pallas (8)");
HenriCoords.bindPopup("The Henri (9)");
PerseiCoords.bindPopup("Persei (10)");
NorthBethesdaCoords.bindPopup("North Bethesda Metro");
TwinbrookCoords.bindPopup("Twinbrook Metro");
GrosvenorStrathmoreCoords.bindPopup("Grosvenor-Strathmore Metro");


var coord_objects = ['EICoords', 'RHCoords', 'JCCCoords', 'HiltonCoords', 'MarriottCoords', 'EvenCoords', 'CanopyCoords', 'MotiCoords', 'SiennaCoords', 'GoldbergCoords', 'AlHaeshCoords', 'SunflowerCoords', 'OhMamaCoords', 'CongressionalTowersCoords', 'ArriveNorthBethesdaCoords', 'RollinsParkApartmentsCoords', 'TheStoriesApartmentsCoords', 'TheResidencesAtCongressionalVillageCoords', 'RollinsRidgeCoords', 'MiramontCoords', 'PallasCoords', 'HenriCoords', 'PerseiCoords', 'NorthBethesdaCoords', 'TwinbrookCoords', 'GrosvenorStrathmoreCoords'];
var coord_objects_old = [EICoords, RHCoords, JCCCoords, HiltonCoords, MarriottCoords, EvenCoords, CanopyCoords, MotiCoords, SiennaCoords, GoldbergCoords, AlHaeshCoords, SunflowerCoords, OhMamaCoords, CongressionalTowersCoords, ArriveNorthBethesdaCoords, RollinsParkApartmentsCoords, TheStoriesApartmentsCoords, TheResidencesAtCongressionalVillageCoords, RollinsRidgeCoords, MiramontCoords, PallasCoords, HenriCoords, PerseiCoords, NorthBethesdaCoords, TwinbrookCoords, GrosvenorStrathmoreCoords];

object_length = coord_objects.length;
for (var i = 0; i < object_length; i++) {
	coordinate = window[coord_objects[i]]
	coordinate.on('mouseover', function(e) {this.openPopup()});
	coordinate.on('mouseout', function(e) {this.closePopup()});
}