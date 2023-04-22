import axios from 'axios'
//import CETEIcean from 'utils/cetei/CETEI';

//const CETEI = new CETEIcean();

const url = "https://dydra.com/junjun7613/3dplas/sparql"
const query =
`
prefix three: <https://junjun7613.github.io/MicroKnowledge/3dplas.owl#>
prefix threeEntity: <https://junjun7613.github.io/MicroKnowledge/3dplas/entity/>
prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
prefix dc: <http://purl.org/dc/elements/1.1/>
select distinct * where {
    ?objectGrp rdfs:label ?objectGrpName.
    ?objectGrp three:hasModelfile ?file.
    #FILTER (?file = <https://jo-fil-ho.com/MicroKnowledge/test_1.glb> || ?file = <https://jo-fil-ho.com/MicroKnowledge/graveStone.glb> || ?file = <https://jo-fil-ho.com/MicroKnowledge/inscription1.glb>)
    FILTER (?file = "test_1.glb" || ?file = "graveStone.glb" || ?file = "inscription1.glb")
    ?objectGrp three:consistsOf ?object.
    ?object rdfs:label ?objectName.
    ?object three:hasInterpretation ?interpretation.
    OPTIONAL{?object three:hasTextualData ?textualData}.
}
`

const res = await axios.get(`${url}?query=${encodeURIComponent(query)}`)

const data = res.data

const objectData = [];
const objectGrps = [];

//まずはobjextGrpに基づいて連想配列を作成する
for (const datum of data){
    const objectGrp = {};
    objectGrp["name"] = datum.objectGrp;
    objectGrp["url"] = datum.file;
    objectGrp["id"] = datum.objectGrpName;
    objectGrp["objectPosition"] = { x: 0, y: 0, z: 0 };
    objectGrp["objectRotation"] = { x: 0, y: 0, z: 0 };
    objectGrp["meshes"] = [];
    objectGrps.push(objectGrp);
};

const newObjectGrps = objectGrps.filter((item, index, self) => {
    // name だけをリスト化する
    const nameList = self.map(item => item['name']);
    // 重複を削除する
    if (nameList.indexOf(item.name) === index) {
      return item;
    }
  });

//再びobjectを回し、上で作成したnewObjectGrpsに追加していく
for (const datum of data){
    const objectDict = {};
    //meshNameを追加
    objectDict["meshName"] = datum.objectName;

    //annotationを追加
    const query4annotation =
    `
    prefix three: <https://junjun7613.github.io/MicroKnowledge/3dplas.owl#>
    prefix threeEntity: <https://junjun7613.github.io/MicroKnowledge/3dplas/entity/>
    prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    prefix dc: <http://purl.org/dc/elements/1.1/>
    select distinct * where {
        <${datum.object}> three:hasAnnotation ?annotation.
        ?annotation three:annotationTitle ?title; three:annotationPage ?page.
    }
    `
    const res4annotation = await axios.get(`${url}?query=${encodeURIComponent(query4annotation)}`)
    const data4annotation = res4annotation.data
    //console.log(data4annotation)
    objectDict["annotation"] = data4annotation;

    //interpretationを追加
    const query4interpretation =
    `
    prefix three: <https://junjun7613.github.io/MicroKnowledge/3dplas.owl#>
    prefix threeEntity: <https://junjun7613.github.io/MicroKnowledge/3dplas/entity/>
    prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    prefix dc: <http://purl.org/dc/elements/1.1/>
    select distinct * where {
        <${datum.object}> three:hasInterpretation ?interpretation.
        ?interpretation three:hasStratigraphicUnit ?type; three:hasPeriod[three:begin ?begin;three:end ?end].
        OPTIONAL{?interpretation three:hasSource ?source. ?source dc:creator ?author; dc:title ?title; dc:date ?year; three:hasSourceType ?sourceType; three:hasSourceMedia ?sourceMedia; three:hasSourceLink ?sourceLink}.
    }
    `
    const res4interpretation = await axios.get(`${url}?query=${encodeURIComponent(query4interpretation)}`)
    const data4interpretation = res4interpretation.data
    console.log(data4interpretation)

    const interpretationList = [];
    const interpretation = {};
    interpretation["begin"] = data4interpretation[0].begin;
    interpretation["end"] = data4interpretation[0].end;
    interpretation["type"] = data4interpretation[0].type.replace("https://junjun7613.github.io/MicroKnowledge/3dplas.owl#","");
    const sourceInformations = []
    for (const datum4interpretation of data4interpretation){
        if(datum4interpretation["source"]){
            const sourceInformation = {};
            sourceInformation["title"] = datum4interpretation["title"];
            sourceInformation["author"] = datum4interpretation["author"];
            sourceInformation["year"] = datum4interpretation["year"];
            sourceInformation["sourceType"] = datum4interpretation["sourceType"].replace("https://junjun7613.github.io/MicroKnowledge/3dplas.owl#","");
            sourceInformation["sourceMedia"] = datum4interpretation["sourceMedia"].replace("https://junjun7613.github.io/MicroKnowledge/3dplas.owl#","");
            sourceInformation["sourceLink"] = datum4interpretation["sourceLink"];
            sourceInformations.push(sourceInformation)
        };
    };
    interpretation["sourceInformations"] = sourceInformations;

    interpretationList.push(interpretation)
    objectDict["interpretation"] = interpretationList;

    //テキスト関連の情報を追加
    if (datum.textualData){
        /*
        CETEIcean.getHTML5("./xml/inscription1_test.xml", function(data) {
            //document.getElementById("TEI").appendChild(data)
            console.log(data)
          })
          */
    };


    //これまでの全ての情報をobjectGrpに追加
    for (const objectGrp of newObjectGrps){
        if (objectGrp["name"] == datum.objectGrp) {
            objectGrp["meshes"].push(objectDict);
        }else{
            ;
        };
    };
};

console.log(newObjectGrps)


export default newObjectGrps;