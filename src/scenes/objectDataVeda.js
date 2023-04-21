const objectData = [
    {
        id: "Veda",
        url: "veda.glb",
        //objectPosition:{x:-15,y:-4.96,z:-4},
        objectPosition: { x: 0, y: 0.5, z: 0 },
        //objectPosition:{x:0,y:0,z:0},
        objectRotation: { x: 0, y: -1, z: 0 },
        meshes: [
            {
                meshName: "Cylinder",
                meshDesc: "Ahavaniya",
                type: "SU",
                period:{
                    begin:-500,
                    end:500,
                },
                textPlane: {},
                transcriptions: [],
                annotation: [
                    {
                        position: { x: -6.75, y: 6.5, z: 83 },
                        image: "./textures/comment.png",
                        note: "left wall of the gate",
                        page: "./htmls/Republic2Monarchy.html",
                        contentImage: [{item:"./textures/20140615_192225.png", note:"Hello!\nHello!"},{item:"./textures/20140615_192225.png", note:"Hello!\nHello!"},{item:"./textures/20140615_192225.png", note:"Hello!\nHello!"},{item:"./textures/20140615_192225.png", note:"Hello!\nHello!"}],
                        
                        scale: { x: 0.5, y: 0.5, z: 0.5 }
                    },
                ],
                //detailCardPosition:{x:-10,y:1.3,z:0.15},
                detailCardPosition: { x: -0.04, y: 6.1, z: 0.25 },
                metaData: {
                    buttonPosition: {},
                    items: [{
                        fontSize: 100,
                        item:
                        {
                            title: "Scanning process",
                            year: "2001",
                            author: "André Pelletier",
                        },
                        itemDetail:
                        {
                            findPlace: "Aoste, au château de Leyssins",
                            originalPlace: "Aoste",
                            findTime: "1619",
                            location: "Aoste, au musée",
                            dimension: "75 × 71 × 64",
                            note: "\tCe texte est l'une des deux inscriptions mentionnant explicitement le vicus d'Aoste et le nom de ses habitants, Augustani, d'où l'on peut déduire le nom du vicus, sans doute Augustum. On apprend aussi que les habitants du vicus possédaient une structure commune (assemblée?).\n\tL. Iulius Fronto a suivi une double carrière, équestre puis municipale, si l'on se fie à l'ordre direct <<direct>> du texte (mais on peut aussi envisager le contraire). Il a, en effet, exercé une milice équestre, la préfecture d'une aile de cavalerie, dont nous ignorons le nom. il fut ensuite, par deux fois, quattuorvir. Cette itération se rencontre une autre fois à Vienne (ILN, Vienne 78).\nIulius, le gentilice impérial, et Fronto, le surnom latin, de ce chevalier sont très fréquents en Narbonnaise; Fronto l'est moins dans la cité (sept autres occurrences). Compte tenu de l'ancienneté de l'inscription (l'exercise du quattuorvirirat est antérieur à la réforme des années 37-41), on peut penser que la famille de Fronto a obtenu la citoyenneté romaine de César ou d'Auguste, uiritim, ou par l'exercise des magistratures à époque où Vienne jouissait du droit latin. Sur les liens familiaux de ce chavalier, voir ILN, Vienne 522.",
                        },
                        //itemImage: ["/textures/20140615_192225.png", "/textures/20140615_192225.png"],
                        
                        itemImage: [{item:"./textures/20140615_192225.png", note:"Hello!\nHello!"},{item:"./textures/20140615_192225.png", note:"Hello!\nHello!"},{item:"./textures/20140615_192225.png", note:"Hello!\nHello!"},{item:"./textures/20140615_192225.png", note:"Hello!\nHello!"}],
                        
                        positionObject:
                        {
                            //x:-10.8,
                            x: -0.7,
                            //y: 0.5,
                            y: 5.91,
                            //z: -0.35
                            z: -0.3
                        }
                    },
                    {
                        item:
                        {
                            title: "ILN, V, n. 602.",
                            year: "19**",
                            author: "--- ---",
                        },
                        itemDetail:
                        {
                            findPlace: "AAA",
                            originalPlace: "BBB",
                            findTime: "16**",
                            //location: "CCC",
                            //dimension: "DDD",
                            note: "\tCe texte est l'une des deux inscriptions mentionnant explicitement le vicus d'Aoste et le nom de ses habitants, Augustani, d'où l'on peut déduire le nom du vicus, sans doute Augustum. On apprend aussi que les habitants du vicus possédaient une structure commune (assemblée?).\n\tL. Iulius Fronto a suivi une double carrière, équestre puis municipale, si l'on se fie à l'ordre direct <<direct>> du texte (mais on peut aussi envisager le contraire). Il a, en effet, exercé une milice équestre, la préfecture d'une aile de cavalerie, dont nous ignorons le nom. il fut ensuite, par deux fois, quattuorvir. Cette itération se rencontre une autre fois à Vienne (ILN, Vienne 78).\nIulius, le gentilice impérial, et Fronto, le surnom latin, de ce chevalier sont très fréquents en Narbonnaise; Fronto l'est moins dans la cité (sept autres occurrences). Compte tenu de l'ancienneté de l'inscription (l'exercise du quattuorvirirat est antérieur à la réforme des années 37-41), on peut penser que la famille de Fronto a obtenu la citoyenneté romaine de César ou d'Auguste, uiritim, ou par l'exercise des magistratures à époque où Vienne jouissait du droit latin. Sur les liens familiaux de ce chavalier, voir ILN, Vienne 522."
                        },
                        //itemImage: ["/textures/20140615_192225.png", "/textures/20140615_192225.png"],
                        
                        itemImage: [{item:"./textures/20140615_192225.png", note:"Hello!\nHello!"},{item:"./textures/20140615_192225.png", note:"Hello!\nHello!"},{item:"./textures/20140615_192225.png", note:"Hello!\nHello!"},{item:"./textures/20140615_192225.png", note:"Hello!\nHello!"}],
                        
                        positionObject:
                        {
                            //x:-10.8,
                            x: -0.7,
                            //y: 0.85,
                            y: 5.51,
                            //z: -0.35
                            z: -0.3
                        }
                    }
                    ]
                }
            }
        ],
    },
]

export default {
    objectData,
  };
