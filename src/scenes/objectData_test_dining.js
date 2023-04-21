const objectData = [
    
    {
        id: "forum",
        url: "Dining.glb",
        image: [{item:"./textures/20140615_192225.png",caption:"image"},{item:"./textures/20140615_192225.png",caption:"image"},{item:"./textures/20140615_192225.png",caption:"image"}],
        annotation: [
            {
                position: { x: -6.75, y: 6.5, z: 83 },
                title:"annotation title 1",
                page: "./htmls/Republic2Monarchy.html",
                note: "entrance of the forum",
            },
        ],
        interpretation: [{
            period:{
                begin:-2,
                end:500,
            },
            type: "USVs",
            sourceInformations: [{
                item:
                {},
                itemDetail:
                {},
                itemImage: [],
                positionObject:{}
            }
            ]
        }],
        //objectPosition:{x:-15,y:-4.96,z:-4},
        objectPosition: { x: 0, y: 0.01, z: 0 },
        //objectPosition:{x:0,y:0,z:0},
        objectRotation: { x: 0, y: -1, z: 0 },
        meshes: [
            {
                meshName: "Dining_primitive130",
                meshDesc: "column of the temple facade",
                textPlane: {},
                transcriptions: [],
                image: [{item:"./textures/20140615_192225.png",caption:"image"},{item:"./textures/20140615_192225.png",caption:"image"},{item:"./textures/20140615_192225.png",caption:"image"}],
                annotation: [
                    {
                        position: { x: -6.75, y: 6.5, z: 83 },
                        title:"annotation title 1",
                        page: "./htmls/Republic2Monarchy.html",
                        note: "entrance of the forum",
                    },
                ],
                interpretation: [{
                    period:{
                        begin:-2,
                        end:500,
                    },
                    type: "USVs",
                    sourceInformations: [{
                        item:
                        {},
                        itemDetail:
                        {},
                        itemImage: [],
                        positionObject:{}
                    }
                    ]
                }]
            },
            ],
    },
]

export default {
    objectData,
  };
