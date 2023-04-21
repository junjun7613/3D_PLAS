import axios from 'axios'

const url = "https://dydra.com/junjun7613/3dplas/sparql"
const query =
`
prefix three: <https://junjun7613.github.io/MicroKnowledge/3dplas.owl#>
prefix threeEntity: <https://junjun7613.github.io/MicroKnowledge/3dplas/entity/>
prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
prefix dc: <http://purl.org/dc/elements/1.1/>
select distinct * where {
?objectGrp three:hasModelfile ?file.
FILTER (?file = <https://jo-fil-ho.com/MicroKnowledge/test_1.glb> || ?file = <https://jo-fil-ho.com/MicroKnowledge/graveStone.glb> || ?file = <https://jo-fil-ho.com/MicroKnowledge/inscription1.glb>)
?objectGrp three:consistsOf ?object.
?object rdfs:label ?objectName.
OPTIONAL{?object three:hasTextualData ?textualData}.
}
`

const res = await axios.get(`${url}?query=${encodeURIComponent(query)}`)

const data = res.data

export default data;