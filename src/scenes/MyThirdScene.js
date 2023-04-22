import { Engine, Scene, FreeCamera, ArcRotateCamera, Vector3, MeshBuilder, StandardMaterial, Color3, Color4, HemisphericLight, ActionManager, ExecuteCodeAction, DynamicTexture, SceneLoader, Axis, Space, Texture, Tools, HighlightLayer } from "@babylonjs/core";
import * as BABYLON from 'babylonjs';
import * as Materials from 'babylonjs-materials';
import { GUI } from "babylonjs-gui";
import { StackPanel, TextBlock, Button, ScrollViewer, Control, Grid, Image, SelectionPanel, CheckboxGroup, RadioGroup, Slider } from "@babylonjs/gui";
import { AdvancedDynamicTexture } from '@babylonjs/gui/2D';
import "@babylonjs/loaders";
//import objectDataOrig from './objectData.js';
//import objectDataOrig from './objectDataEdo.js';
//import objectDataOrig from './objectDataVeda.js';
//import objectDataOrig from './objectData_test.js';
import objectDataOrig from './QueryData.js';

//import objectDataOrig from './objectData_test_dining.js';

const myScene = {
    engine: null,
    scene: null,
    planeNameList: null,

    createScene: function (canvas, onPointerDownCallback) {
        const engine = new Engine(canvas, true, { stencil: true });
        const scene = new Scene(engine);
        myScene.engine = engine;
        myScene.scene = scene;
        //const objectData = objectDataOrig["objectData"]
        const objectData = objectDataOrig;

        console.log({objectDataOrig});

        //const camera = new ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 10, Vector3.Zero(), scene);
        const camera = new FreeCamera("camera", new BABYLON.Vector3(0, 2, -20));
        camera.attachControl(canvas, true);

        new HemisphericLight("light", Vector3.Up(), scene);

        //const box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
        //const material = new StandardMaterial("box-material", scene);
        //material.diffuseColor = Color3.Blue();
        //box.material = material;

        const listMeshes = [];
        const listPlaneName = [];
        const listButtons = [];
        const resolveArray = [];

        for (let i = 0; i < objectData.length; i++) {
            const resolve = SceneLoader.ImportMeshAsync("", "./models/", objectData[i].url).then(function (result) {
            //const resolve = SceneLoader.ImportMeshAsync("", "", objectData[i].url).then(function (result) {
                //object全体の位置を決定
                console.log(result)
                const object = result.meshes[0]
                //object.addBehavior(new BABYLON.PointerDragBehavior({dragAxis: new BABYLON.Vector3(1,1,0)}));
                //const object = result;
                console.log(object)
                object.position.y = objectData[i].objectPosition.y;
                object.position.x = objectData[i].objectPosition.x;
                object.position.z = objectData[i].objectPosition.z;
                if (objectData[i].objectRotation.x !== 0) {
                    object.rotate(Axis.X, Math.PI / objectData[i].objectRotation.x, Space.WORLD);
                }
                if (objectData[i].objectRotation.y !== 0) {
                    object.rotate(Axis.Y, Math.PI / objectData[i].objectRotation.y, Space.WORLD);
                }
                if (objectData[i].objectRotation.z !== 0) {
                    object.rotate(Axis.Z, Math.PI / objectData[i].objectRotation.z, Space.WORLD);
                }

                for (let k = 0; k < objectData[i].meshes.length; k++) {

                    const objectPosition = objectData[i].objectPosition

                    const meshData = objectData[i].meshes[k]
                    console.log(meshData)

                    const meshName = objectData[i].meshes[k].meshName

                    const meshType = objectData[i].meshes[k].type

                    //const planePositions = objectData[i].meshes[k].textPlane.textPlanePosition

                    //const textFont = objectData[i].meshes[k].textPlane.textFont

                    //const transcriptions = objectData[i].meshes[k].transcriptions

                    const annotation = objectData[i].meshes[k].annotation

                    //const detailCardPosition = objectData[i].meshes[k].detailCardPosition

                    const metaData = objectData[i].meshes[k].interpretation

                    const data = objectData[i].meshes[k].interpretation.sourceInformations

                    //sceneから、データのmeshNameに一致するメッシュデータを取得
                    const meshDict = {}

                    const mesh = scene.getMeshByName(meshName)
                    //mesh.addBehavior(new BABYLON.PointerDragBehavior({dragAxis: new BABYLON.Vector3(1,1,0)}));
                    console.log(mesh)
                    meshDict.meshOrig = meshData
                    meshDict.meshScene = mesh
                    //listMeshes.push(meshDict)
                    listMeshes.push(meshDict)

                    //メッシュの元のマテリアルを取得
                    const origMaterial = mesh.material
                    console.log(origMaterial)

                    /*
                    //transcription表示関係
                    for (const transcription of transcriptions) {
                        const texts = transcription.texts

                        for (const tx of texts) {
                            console.log(tx);
                            // inscription1.position.x -= 0.05;

                            // Set font type
                            var font_type = "Arial";

                            // Set width an height for plane
                            var planeWidth = 5;
                            //var planeWidth =15;
                            var planeHeight = 0.5;
                            //var planeHeight = 1.5;

                            for (let i = 0; i < tx.text.length; i++) {
                                console.log(tx.text[i]);

                                var planeName = (transcription.lang).replace(" ", "") + (tx.author).replace(" ", "") + tx.year + String(i);
                                listPlaneName.push(planeName)

                                //var plane = MeshBuilder.CreatePlane((transcription.lang).replace(" ","")+(tx.author).replace(" ","")+tx.year+String(i), { width: planeWidth, height: planeHeight }, scene);
                                var plane = MeshBuilder.CreatePlane(planeName, { width: planeWidth, height: planeHeight }, scene);
                                //plane.position.y = planePositions[i].y;
                                plane.position.y = objectPosition.y + planePositions[i].y;
                                //plane.position.x = planePositions[i].x;
                                plane.position.x = objectPosition.x + planePositions[i].x;
                                //plane.position.z = planePositions[i].z;
                                plane.position.z = objectPosition.z + planePositions[i].z;
                                //plane.scaling = new BABYLON.Vector3(0.1,0.1,0.1);
                                plane.scaling = new Vector3(0.1, 0.1, 0.1);
                                console.log(planePositions[i].rotation.y)
                                if (planePositions[i].rotation.y !== 0) {
                                    //plane.rotate(BABYLON.Axis.Y,Math.PI / planePositions[i].rotation.y, BABYLON.Space.WORLD)
                                    plane.rotate(Axis.Y, planePositions[i].rotation.y * Math.PI / 180, Space.WORLD)
                                }
                                plane.setParent(mesh);

                                var DTWidth = planeWidth * 60;
                                var DTHeight = planeHeight * 60;

                                var text = tx.text[i].t;

                                var dynamicTexture = new DynamicTexture("DynamicTexture", { width: DTWidth, height: DTHeight }, scene);

                                // Check width of text for given font type at any size of font
                                var ctx = dynamicTexture.getContext();
                                var size = 12; //any value will work
                                ctx.font = size + "px " + font_type;
                                var textWidth = ctx.measureText(text).width;

                                // Calculate ratio of text width to size of font used
                                var ratio = textWidth / size;

                                // set font to be actually used to write text on dynamic texture
                                // var font_size = Math.floor(DTWidth / (ratio * 1)); //size of multiplier (1) can be adjusted, increase for smaller text
                                //var font_size = 16
                                var font_size = textFont
                                var font = font_size + "px " + font_type;

                                // Draw text
                                dynamicTexture.drawText(text, null, null, font, "#000000", "transparent", true);

                                var mat = new StandardMaterial("mat", scene);
                                mat.diffuseTexture = dynamicTexture;
                                mat.diffuseTexture.hasAlpha = true;

                                // apply material
                                plane.material = mat;
                                plane.isVisible = false;
                                console.log(plane);

                            }
                        };
                    };

                    myScene.planeNameList = listPlaneName;
                    */

                }
            })
            resolveArray.push(resolve);
        };

        Promise.all(resolveArray).then(() => {

            //クリックしたら関連情報がHTMLに表示されるような処理（meshNameを取得してobjectDataから関連情報を取得）

            //信憑性に基づく色付けをセレクトボックスで行う！
            for (const mesh of listMeshes) {
                console.log(mesh)
                console.log(mesh.meshOrig)
                const meshMaterial = new StandardMaterial("material", scene);
                const origMaterial = mesh.meshScene.material;
                //console.log(origMaterial)

                const SU = function (isChecked) {
                    if (isChecked) {
                        if (mesh.meshOrig.interpretation[0].type === "SU") {
                            meshMaterial.diffuseColor = new Color3(255, 0, 0);
                            meshMaterial.alpha = 0.5;
                            mesh.meshScene.material = meshMaterial;
                        } else {
                            ;
                        };
                    }
                    else {
                        if (mesh.meshOrig.interpretation[0].type === "SU") {
                            mesh.meshScene.material = origMaterial;
                        };
                    }
                }

                const USVs = function (isChecked) {
                    if (isChecked) {
                        if (mesh.meshOrig.interpretation[0].type === "USVs") {
                            meshMaterial.diffuseColor = new Color3(0, 0, 255);
                            meshMaterial.alpha = 0.5;
                            mesh.meshScene.material = meshMaterial;
                        } else {
                            ;
                        };
                    }
                    else {
                        if (mesh.meshOrig.interpretation[0].type === "USVs") {
                            mesh.meshScene.material = origMaterial;
                        };
                    }
                }

                const USVn = function (isChecked) {
                    if (isChecked) {
                        if (mesh.meshOrig.interpretation[0].type === "USVn") {
                            meshMaterial.diffuseColor = new Color3(0, 255, 128);
                            meshMaterial.alpha = 0.5;
                            mesh.meshScene.material = meshMaterial;
                            //mesh.meshScene.isVisible = false;
                        } else {
                            ;
                        };
                    }
                    else {
                        if (mesh.meshOrig.interpretation[0].type === "USVn") {
                            mesh.meshScene.material = origMaterial;
                            //mesh.meshScene.isVisible = true;
                        };
                    }
                }

                const SF = function (isChecked) {
                    if (isChecked) {
                        if (mesh.meshOrig.interpretation[0].type === "SF") {
                            meshMaterial.diffuseColor = new Color3(0, 0, 255);
                            meshMaterial.alpha = 0.5;
                            mesh.meshScene.material = meshMaterial;
                        } else {
                            ;
                        };
                    }
                    else {
                        if (mesh.meshOrig.interpretation[0].type === "SF") {
                            mesh.meshScene.material = origMaterial;
                        };
                    }
                }

                const VSF = function (isChecked) {
                    if (isChecked) {
                        if (mesh.meshOrig.interpretation[0].type === "VSF") {
                            meshMaterial.diffuseColor = new Color3(0, 0, 255);
                            meshMaterial.alpha = 0.5;
                            mesh.meshScene.material = meshMaterial;
                        } else {
                            ;
                        };
                    }
                    else {
                        if (mesh.meshOrig.interpretation[0].type === "VSF") {
                            mesh.meshScene.material = origMaterial;
                        };
                    }
                }

                //チェックボックスの設置
                var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");

                var selectBox = new SelectionPanel("sp");
                selectBox.width = 0.2;
                selectBox.height = 0.4;
                selectBox.paddingLeft = "1%";
                selectBox.paddingTop = "1%";
                //selectBox.background = "#FFFF99";
                selectBox.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
                selectBox.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;

                advancedTexture.addControl(selectBox);

                var transformGroup = new CheckboxGroup("Stratigraphy");
                transformGroup.addCheckbox("SU", SU);
                transformGroup.addCheckbox("USVs", USVs);
                transformGroup.addCheckbox("USVn", USVn);
                transformGroup.addCheckbox("SF", SF);
                transformGroup.addCheckbox("VSF", VSF);

                selectBox.addGroup(transformGroup);

                //スライダーの設置
                var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");

                var grid = new Grid();
                advancedTexture.addControl(grid);

                grid.addColumnDefinition(0.25);
                grid.addColumnDefinition(0.25);
                grid.addColumnDefinition(0.25);
                grid.addColumnDefinition(0.25);
                grid.addRowDefinition(0.1);
                grid.addRowDefinition(0.1);
                grid.addRowDefinition(0.1);
                grid.addRowDefinition(0.1);
                grid.addRowDefinition(0.1);
                grid.addRowDefinition(0.1);
                grid.addRowDefinition(0.1);
                grid.addRowDefinition(0.1);
                grid.addRowDefinition(0.1);
                grid.addRowDefinition(0.1);

                var addSlider = function (isVertical, isClamped, displayThumb, row, col, text) {
                    var panel = new StackPanel();
                    panel.width = "300px";
                    grid.addControl(panel, row, col);

                    var header = new TextBlock();
                    //header.text = "Beginning Year: -500";
                    header.text = text;
                    header.height = "30px";
                    header.color = "white";
                    panel.addControl(header);

                    var slider = new Slider();
                    slider.minimum = -500;
                    slider.maximum = 2020;
                    slider.isThumbClamped = isClamped;
                    slider.isVertical = isVertical;
                    slider.displayThumb = displayThumb;
                    if (isVertical) {
                        slider.width = "20px";
                        slider.height = "200px";
                    } else {
                        slider.height = "20px";
                        slider.width = "150px";

                    }

                    slider.color = "blue";
                    slider.onValueChangedObservable.add(function (value) {
                        //header.text = "Beginning Year: " + (Tools.ToDegrees(value) | 0) + " deg";
                        header.text = text + Math.trunc(value);

                        //ここにモデルの出し消しを記述すればよいか？
                        if (mesh.meshOrig.interpretation[0].begin < Math.trunc(value) && Math.trunc(value) < mesh.meshOrig.interpretation[0].end) {
                            mesh.meshScene.isVisible = true;
                        } else {
                            mesh.meshScene.isVisible = false;
                        };

                    });

                    slider.value = Math.PI + Math.random() * Math.PI;
                    panel.addControl(slider);
                }
                /*
                var addBeginSlider = function(isVertical, isClamped, displayThumb, row, col, text) {
                    var panel = new StackPanel();
                    panel.width = "300px";
                    grid.addControl(panel, row, col);
            
                    var header = new TextBlock();
                    //header.text = "Beginning Year: -500";
                    header.text = text;
                    header.height = "30px";
                    header.color = "white";
                    panel.addControl(header);
            
                    var slider = new Slider();
                    slider.minimum = -500;
                    slider.maximum =2020;
                    slider.isThumbClamped = isClamped;
                    slider.isVertical = isVertical;
                    slider.displayThumb = displayThumb;
                    if (isVertical) {
                        slider.width = "20px";
                        slider.height = "200px";
                    } else {
                        slider.height = "20px";
                        slider.width = "150px";
            
                    }
            
                    slider.color = "blue";
                    slider.onValueChangedObservable.add(function(value) {
                        //header.text = "Beginning Year: " + (Tools.ToDegrees(value) | 0) + " deg";
                        header.text = text + Math.trunc(value);
                        
                        //ここにモデルの出し消しを記述すればよいか？
                        if (mesh.meshOrig.interpretation[0].period.end < Math.trunc(value)){
                            mesh.meshScene.isVisible = false;
                        } else {
                            mesh.meshScene.isVisible = true;
                        };
                    
                    });
                    
                    slider.value = Math.PI + Math.random() * Math.PI;
                    panel.addControl(slider);
                }
        
                //addBeginSlider(false, true, true, 0, 3, "Beginning Year: ");
        
                var addEndSlider = function(isVertical, isClamped, displayThumb, row, col, text) {
                    var panel = new StackPanel();
                    panel.width = "300px";
                    grid.addControl(panel, row, col);
            
                    var header = new TextBlock();
                    //header.text = "Beginning Year: -500";
                    header.text = text;
                    header.height = "30px";
                    header.color = "white";
                    panel.addControl(header);
            
                    var slider = new Slider();
                    slider.minimum = -500;
                    slider.maximum =2020;
                    slider.isThumbClamped = isClamped;
                    slider.isVertical = isVertical;
                    slider.displayThumb = displayThumb;
                    if (isVertical) {
                        slider.width = "20px";
                        slider.height = "200px";
                    } else {
                        slider.height = "20px";
                        slider.width = "150px";
            
                    }
            
                    slider.color = "blue";
                    slider.onValueChangedObservable.add(function(value) {
                        //header.text = "Beginning Year: " + (Tools.ToDegrees(value) | 0) + " deg";
                        header.text = text + Math.trunc(value);
                        //ここにモデルの出し消しを記述すればよいか？
                        
                        if (mesh.meshOrig.interpretation[0].period.begin > Math.trunc(value)){
                            mesh.meshScene.isVisible = false;
                        } else {
                            mesh.meshScene.isVisible = true;
                        };
                        
                    });
                    
                    slider.value = Math.PI + Math.random() * Math.PI;
                    panel.addControl(slider);
                }
                */
                addSlider(false, true, true, 0, 3, "Selected Year: ");
                //addBeginSlider(false, true, true, 0, 3, "Beginning Year: ");
                //addEndSlider(false, true, true, 1, 3, "Ending Year: ");
            };
            /*
            for (const button of listButtons) {
                console.log(button)
                //button.setEnabled(false)
        
                var setColor = function (but) {
                    switch (but) {
                        case 0:
                            console.log("show buttons");
                            button.setEnabled(true)
                            break
                        case 1:
                            console.log("hide buttons");
                            button.setEnabled(false)
                            break
                    }
                }
        
                var advancedTexture = AdvancedDynamicTexture.CreateFullscreenUI("UI");
        
                var selectBox = new SelectionPanel("sp");
                selectBox.width = 0.3;
                selectBox.height = 0.25;
                selectBox.paddingLeft = "15%";
                selectBox.paddingTop = "1%";
                //selectBox.background = "#FFFF99";
                selectBox.horizontalAlignment = Control.HORIZONTAL_ALIGNMENT_LEFT;
                selectBox.verticalAlignment = Control.VERTICAL_ALIGNMENT_TOP;
        
                advancedTexture.addControl(selectBox);
        
                var colorGroup = new RadioGroup("Buttons");
                colorGroup.addRadio("show", setColor, true);
                colorGroup.addRadio("hide", setColor);
        
                selectBox.addGroup(colorGroup);
            };
            */
            const showTextPlane = function (textPlaneName) {
                console.log(textPlaneName);
                const mesh = this.scene.getMeshByName(textPlaneName);
                if (mesh) {
                    mesh.isVisible = flase;
                }
            }

        }).catch((error) => {
            console.log("エラーが出ているようです：" + error);
        });

        let hl = new HighlightLayer("hl1", scene);

        engine.runRenderLoop(() => {
            scene.render();
            //When click event is raised
            scene.onPointerDown = function (evt, pickResult) {
                let pickedMeshName = "";
                hl.removeAllMeshes();

                if (pickResult.hit) {
                    //hl.removeAllMeshes();
                    /*
                    for (const mesh of meshes){
                        //console.log(mesh)
                        if (hl.hasMesh(mesh) == true){
                            hl.removeMesh(mesh);
                        }else{
                            ;
                        }
                    };
                    */
                    //console.log(pickResult.pickedMesh)
                    hl.addMesh(pickResult.pickedMesh, Color3.Green());
                    console.log(hl.hasMesh(pickResult.pickedMesh))
                    //hl.removeMesh(pickResult.pickedMesh);
                    //console.log(hl.hasMesh(pickResult.pickedMesh))

                    console.log(pickResult.pickedMesh)
                    pickedMeshName = pickResult.pickedMesh.name;
                }
                onPointerDownCallback(pickedMeshName);
            };

        });
    },

    showTextPlane: function (textPlaneName) {
        for (const meshName of myScene.planeNameList) {
            const displayed = this.scene.getMeshByName(meshName);
            displayed.isVisible = false;
        };
        //console.log(myScene.planeNameList)
        //console.log(textPlaneName);
        const mesh = this.scene.getMeshByName(textPlaneName);
        if (mesh) {
            mesh.isVisible = !mesh.isVisible;
        }
    },

};

export default myScene;