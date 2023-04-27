<template>
  <div class="container">
    <!--<div>{{textPlaneName}}</div>-->
    <div class="left-column">
      <div class="scene"><BabylonScene ref="bjsCanvas" @change="change" :textPlaneName="PlaneName"/></div>
    </div>

    <div class="right-column">
      <h1 className="text-1xl font-bold">INFORMATION</h1>
      <div class="shadow-lg">
        <h3 class="object-name">Object Name</h3>
        <p class="object-name-text">{{ pickedObject.id }}</p>
      </div>
      <!--
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myObjectTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li class="mr-2" role="presentation" target="object-research">
            <button
              class="inline-block p-4 border-b-2 rounded-t-lg"
              id="object-research-tab"
              value="#research"
              data-tabs-target="#research"
              type="button"
              role="tab"
              aria-controls="research"
              aria-selected="false"
            >
              Interpretation
            </button>
          </li>
          <li class="mr-2" role="presentation" target="object-annotation">
            <button
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="object-annotation-tab"
              data-tabs-target="#annotation"
              type="button"
              role="tab"
              aria-controls="annotation"
              aria-selected="false"
            >
              Annotation
            </button>
          </li>
          <li class="mr-2" role="presentation" target="object-image">
            <button
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="object-image-tab"
              data-tabs-target="#image"
              type="button"
              role="tab"
              aria-controls="image"
              aria-selected="false"
            >
              Image
            </button>
          </li>
        </ul>
      </div>
      --->
      <!--<div id="myObjectTabContent"></div>-->

      <div class="shadow-lg">
        <h3 class="mesh-name">Mesh Name</h3>
        <p class="mesh-name-text">{{ pickedMesh }}</p>
      </div>
      
      <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li class="mr-2" role="presentation" target="research">
            <button
              class="inline-block p-4 border-b-2 rounded-t-lg"
              id="research-tab"
              value="#research"
              data-tabs-target="#research"
              type="button"
              role="tab"
              aria-controls="research"
              aria-selected="false"
            >
              Interpretation
            </button>
          </li>
          <li class="mr-2" role="presentation" target="annotation">
            <button
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="annotation-tab"
              data-tabs-target="#annotation"
              type="button"
              role="tab"
              aria-controls="annotation"
              aria-selected="false"
            >
              Annotation
            </button>
          </li>
          <li class="mr-2" role="presentation" target="text">
            <button
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="text-tab"
              data-tabs-target="#text"
              type="button"
              role="tab"
              aria-controls="text"
              aria-selected="false"
            >
              Transcription
            </button>
          </li>
          <li class="mr-2" role="presentation" target="image">
            <button
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              id="image-tab"
              data-tabs-target="#image"
              type="button"
              role="tab"
              aria-controls="image"
              aria-selected="false"
            >
              Image
            </button>
          </li>
        </ul>
      </div>

      <div id="myTabContent" class="myTabContent overflow-auto">
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="research"
          role="tabpanel"
          aria-labelledby="research-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            <p v-for="info in pickedInterpretation" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
              <!--<p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><p class="font-bold">Period:</p> {{info.period.begin}}~{{info.period.end}}</p>-->
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><p class="font-bold">Period:</p> {{info.begin}}~{{info.end}}</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><p class="font-bold">Stratigraphy:</p> {{info.type}}</p>
              <a href="#" class="buttonResearch inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 pointer-events-auto" @click="showResearchContent(info)">
              Sources
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            </p>
          </p>
        </div>
        <div id="researchContent" class="myTabContent overflow-auto">
          <a href="#" class="buttonResearch inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 pointer-events-auto mb-5" @click="hideResearchContent()">
              Back
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="annotation"
          role="tabpanel"
          aria-labelledby="annotation-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            <p v-for="anno in pickedAnnotation" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
              <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{{anno.title}}</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{anno.note}}</p>
              <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="showAnnotationContent(anno)">
              Read more
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            </p>
          </p>
        </div>
        <div id="annotationContent" class="myTabContent overflow-auto">
          <a href="#" class="buttonResearch inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 pointer-events-auto mb-2" @click="hideAnnotationContent()">
              Back
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="text"
          role="tabpanel"
          aria-labelledby="text-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400">
            <p v-for="textLang in pickedText" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5">
              <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{{textLang.lang}}</h5>
              <button v-for="text in textLang.texts" class="bg-blue-700 text-white rounded px-2 py-1 mb-3 mr-3" @click="showTextContent(textLang,text)">
                {{text.author}} ({{text.year}})
              </button>
            </p>
          </p>
        </div>
        <div id="textContent" class="myTabContent overflow-auto">
            <a href="#" class="buttonResearch inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 pointer-events-auto mb-5" @click="hideTextContent()">
              Back
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <div
          class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
          id="image"
          role="tabpanel"
          aria-labelledby="image-tab"
        >
          <p class="text-sm text-gray-500 dark:text-gray-400 grid grid-cols-2 gap-1 mx-auto">
            <p v-for="image in pickedImage" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <h5 class="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">{{image.caption}}</h5>
              <!--<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Forum_of_Augustus_%2848486952057%29.jpg/640px-Forum_of_Augustus_%2848486952057%29.jpg" alt="image">-->
              <img v-bind:src="image.item" alt="image" @click="showImageModal(image)">
            </p>
          </p>
        </div>
      </div>
    </div>
    <div id="ImageModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div id="modalHeader" class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="ImageModal" @click="closeModal()">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div id="modalImage" class="p-6 space-y-6"></div>
        </div>
    </div>
</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BabylonScene from "./components/BabylonScene.vue";
//import objectDataOrig from "./scenes/objectData.js";
//import objectDataOrig from "./scenes/objectDataEdo.js";
//import objectDataOrig from './scenes/objectDataVeda.js';

//import objectDataOrig from './scenes/objectData_test.js';
import objectDataOrig from './scenes/QueryData.js';
import CETEI from 'CETEIcean';

const CETEIcean = new CETEI();


const pickedMesh = ref("");
const pickedData = ref("");
const pickedImage = ref("");
const pickedAnnotation = ref("");
const pickedText = ref("");
const pickedMeta = ref("");
const pickedInterpretation = ref("");
const pickedObject = ref("");

//var PlaneName = "";

const PlaneName = ref("");

const change = (val: string) => {
  console.log(val);
  pickedMesh.value = val;

  //const objectData = objectDataOrig.objectData;
  const objectData = objectDataOrig;

  //console.log(objectData)
  for (const object of objectData) {
    const meshes = object.meshes;
    for (const mesh of meshes) {
      if (pickedMesh.value == mesh.meshName) {
        pickedData.value = mesh;
        //console.log(pickedData.value)
        pickedImage.value = mesh.image;
        //console.log(pickedImage.value)
        pickedAnnotation.value = mesh.annotation;
        //console.log(pickedAnnotation.value)
        pickedText.value = mesh.transcriptions;
        //console.log(pickedText.value)
        pickedMeta.value = mesh.interpretation.sourceInformations;
        //console.log(pickedMeta.value)
        pickedInterpretation.value = mesh.interpretation;
        //console.log(pickedInterpretation.value)
        pickedObject.value = object;
        //console.log(pickedObject.value)
      }
    }
  }
  
  //タブごとの表示切り替え
  var tabs = document.getElementById('myTab').getElementsByTagName('li')
  var pages = document.getElementById('myTabContent').getElementsByTagName('div')
  console.log({tabs,pages})

  const changeTab = function(){
    var targetId = this.getAttribute('target')

    for(var i=0; i<pages.length; i++) {
      if( pages[i].id != targetId ) {
         pages[i].style.display = "none";
      }
      else {
         pages[i].style.display = "block";
      }
    }

    for(var i=0; i<tabs.length; i++) {
      tabs[i].style.zIndex = "0";
    }
    this.style.zIndex = "10";
    return false;
    
  }

  for(var i=0; i<tabs.length; i++) {
    console.log(typeof(tabs[i]))
    tabs[i].onclick = changeTab;
  }
  tabs[0].onclick();

};
//Research内容表示
const showResearchContent = function(info){
    const page = document.getElementById('research');
    const content = document.getElementById('researchContent')
    //alert(info.itemDetail.note)
    var newElement1=document.createElement('div');
    newElement1.setAttribute("id","researchShown")

    for (const source of info.sourceInformations){
      const card = document.createElement('p');
      card.classList.add("max-w-sm");
      card.classList.add("p-6");
      card.classList.add("bg-white");
      card.classList.add("border");
      card.classList.add("border-gray-200");
      card.classList.add("rounded-lg");
      card.classList.add("shadow");
      card.classList.add("dark:bg-gray-800");
      card.classList.add("dark:border-gray-700");
      card.classList.add("mb-5");
      card.classList.add("mr-5");
      card.classList.add("ml-5");

      var note_head=document.createElement('h5');
      note_head.textContent=source.title
      note_head.classList.add("text-center")
      note_head.classList.add("font-bold")
      card.appendChild(note_head);
      var year=document.createElement('p');
      year.textContent=source.year;
      year.classList.add("mr-5")
      year.classList.add("ml-5")
      card.appendChild(year);
      var author=document.createElement('p');
      author.textContent=source.author;
      author.classList.add("mr-5")
      author.classList.add("ml-5")
      card.appendChild(author);
      var type=document.createElement('p');
      type.textContent=source.sourceType;
      type.classList.add("mr-5")
      type.classList.add("ml-5")
      card.appendChild(type);
      var media=document.createElement('p');
      media.textContent=source.sourceMedia;
      media.classList.add("mr-5")
      media.classList.add("ml-5")
      card.appendChild(media);
      var link=document.createElement('a');
      link.setAttribute("href",source.sourceLink);
      link.setAttribute("target","_blank");
      link.setAttribute("rel","noopener");
      link.textContent="link";
      link.classList.add("mr-5")
      link.classList.add("ml-5")
      card.appendChild(link);
      //card.appendChild(note_head);
      //card.appendChild(year);
      //card.appendChild(author);
      //card.appendChild(type);
      //card.appendChild(media);
      //card.appendChild(link);
      
      newElement1.appendChild(card);
    }

    content.appendChild(newElement1);

    page.style.display="none";
    content.style.display="block";
  };
//Research Hide
const hideResearchContent = function(){
  const research = document.getElementById('researchShown');
  const page = document.getElementById('research');
  const content = document.getElementById('researchContent')

  research.remove()
  page.style.display="block";
  content.style.display="none";
}

//annotation内容表示
const showAnnotationContent = function(annotation){
    const page = document.getElementById('annotation');
    const content = document.getElementById('annotationContent')
    /*
    var newElement1=document.createElement('div');
    newElement1.setAttribute("id","annotationShown")
    newElement1.classList.add("overflow-auto")
    //newElement1.classList.add("mt-10")

    fetch(annotation.page).then((res) => res.text()).then((text) => {return new DOMParser().parseFromString(text,"text/html");}).then((dom) => newElement1.appendChild(dom.documentElement));
    */
    var newElement1=document.createElement('iframe');
    newElement1.setAttribute("id",'annotationShown');
    newElement1.setAttribute("src",annotation.page);
    newElement1.setAttribute("width","370px");
    newElement1.setAttribute("height","300px");
    content.appendChild(newElement1);

    page.style.display="none";
    content.style.display="block";
  };
//Annotation Hide
const hideAnnotationContent = function(){
  const anno = document.getElementById('annotationShown');
  const page = document.getElementById('annotation');
  const content = document.getElementById('annotationContent')

  anno.remove();
  page.style.display="block";
  content.style.display="none";
}

//text内容表示
let tei: any = null

//const textLines = [];
const showTextContent = function(textLang,text){
    /*
    var c = new CETEI();
    c.addBehaviors({"tei":{
        "ex": ["(",")"]
      }});

      c.getHTML5("./xml/inscription1_test.xml", function(data) {
      // const div = data.querySelector('tei-body').children[0]
      tei = data
      //console.log(div);
      // newElement1.append(div);
    });
    */

    //毎回読み込んでいるが、一度読み込んだら読み込まないようにしたい。その場合、2回目以降にnullになってしまった。
    CETEIcean.getHTML5("./xml/inscription1_test.xml", function(data) {
      // const div = data.querySelector('tei-body').children[0]
      tei = data
      //console.log(div);
      // newElement1.append(div);
    });    

    const page = document.getElementById('text');
    const content = document.getElementById('textContent')
    //alert(info.itemDetail.note)
    var newElement1=document.createElement('div');
    newElement1.setAttribute("id","textLines")

    //言語を指定して、divを取得する。
    const div = tei.querySelector(`[xml\\:lang="${textLang.lang}"]`)

    const wit = text.wit
    
    // wit attrを持つelmeentsを取得する
    const elements = div.querySelectorAll(`*[wit]`)
    for(const e of elements) {
      // witに含まれていない場合は削除する
      const wits = e.getAttribute('wit').split(' ').map(w => w.replace("#",""))
      if(!wits.includes(wit)) {
        e.remove()
      }
    }

    newElement1.append(div);

    var note_head=document.createElement('h5');
    // note_head.textContent="TEXT"
    note_head.classList.add("text-center")
    note_head.classList.add("font-bold")
    note_head.classList.add("mb-3")
    newElement1.appendChild(note_head);

    content.appendChild(newElement1);

    page.style.display="none";
    content.style.display="block";
  };

//Text Hide
const hideTextContent = function(){
  const text = document.getElementById('textLines');
  const page = document.getElementById('text');
  const content = document.getElementById('textContent')

  text.remove()
  PlaneName.value = "";
  page.style.display="block";
  content.style.display="none";
}

const showImageModal = function(image){
  const imageModal = document.getElementById('ImageModal');
  const modalHeader = document.getElementById('modalHeader');
  const modalImage = document.getElementById('modalImage');

  const title = document.createElement("h3")
  title.textContent=image.caption;
  title.setAttribute("id","titleOfModal")
  title.classList.add("text-xl")
  title.classList.add("text-center")
  title.classList.add("font-semibold")
  title.classList.add("text-gray-900")
  title.classList.add("dark:text-white")

  const imageContent = document.createElement("img")
  imageContent.setAttribute("id","imageOfModal")
  imageContent.setAttribute("src",image.item);
  imageContent.setAttribute("alt","image");

  modalHeader.prepend(title);
  modalImage.appendChild(imageContent);

  imageModal.style.display="block";
}

const closeModal = function(){
  const imageModal = document.getElementById('ImageModal');
  const title = document.getElementById('titleOfModal');
  const image = document.getElementById('imageOfModal');

  title.remove();
  image.remove()

  imageModal.style.display="none";
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.select-box {
  background: lightgrey;
  font-weight: bold;
  width: 350px;
  height: 75px;
  margin-bottom: 20px;
}
.card-group {
  margin-left: auto;
  margin-right: auto;
  max-width: 640px;
  width: 90%;
  height: auto;
  /* ポイント１ */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
/* ポイント２ */
.card-group > :nth-child(2n) {
  margin-left: 20px;
}
/* ポイント３ */
.card-group > :nth-child(n + 3) {
  margin-top: 20px;
}
.card {
  width: 288px;
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
}
.card__textbox {
  width: 100%;
  height: auto;
  padding: 20px 18px;
  background: #ffffff;
  box-sizing: border-box;
}
.card__textbox > * + * {
  margin-top: 10px;
}
.card__titletext {
  font-size: 15px;
  font-weight: bold;
  line-height: 125%;
}
.card-skin {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
.container {
  display: flex;
  flex-direction: row;
  width: 1400px;
  height: 500px;
}

.left-column {
  flex: 1;
  background: lightblue;
  width: 800px;
}

.right-column {
  flex: 1;
  background: white;
  width: 370px;
  height: 540px;
}

.annotation {
  background: lightskyblue;
  font-weight: bold;
  width: 350px;
  height: auto;
}
.object-name {
  background: orange;
  font-weight: bold;
  color: white;
}
.object-name-text {
  background: orange;
  font-weight: bold;
}
.mesh-name {
  background: lightpink;
  font-weight: bold;
  color: white;
}
.mesh-name-text {
  background: lightpink;
  font-weight: bold;
}
.info {
  background: lightgreen;
  font-weight: bold;
  width: 350px;
  height: auto;
}
.info-text {
  font-weight: bold;
}
#myTabContent{
  height: 300px;
}
#myObjectTabContent{
  height: 120px;
}
#research{
  display: block;
}
#annotation{
  display: block;
}
#text{
  display: block;
}
#researchContent{
  height: 300px;
  display: none;
}
#annotationContent{
  /*height: auto;*/
  width: 370px;
  display: none;
}
#textContent{
  height: 300px;
  display: none;
}
#ImageModal{
  display: none;
}
/*
#annotationShown{
  height:300px;
  width:330px;
  padding-top:50px;
}
*/
</style>