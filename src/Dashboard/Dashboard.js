import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { fabric } from "fabric";
import bg from "../bg.jpg";
import picture from "../right-icons/picture.png";
import eye from "../right-icons/eye.png";
import block from "../right-icons/block.png";
import { useFabricJSEditor } from "fabricjs-react";
import useMousePosition from "../hooks/hooks";

export default function Dashboard() {
  const { editor, onReady } = useFabricJSEditor();
  const [canvas, setCanvas] = useState("");
  const [upload, setUpload] = useState(null);
  const [type, setType] = useState(null);
  const [choosenModel, setChoosenModel] = useState(null)
  const {left, top} = useMousePosition()
  const [office, selectOffice] = useState({dragg:false,text:''})
  const [draggImage, setDarggImage] = useState({dragg:false,image:''})
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);
  
  const initCanvas = () => {
    return new fabric.Canvas("canvas", {
      height: window.innerHeight,
      width: window.innerWidth - 17,
    });
  };

const dragOffice = () =>{
  const setCurrentOffice = () =>{
    selectOffice({dragg:false})
    addOffice(office.text,'rgba(0,0,0,0.3)')
  }
  return(
    <div onClick={setCurrentOffice} style={{zIndex:999,width:100,height:100, background:'rgba(0,0,0,0.3)', position:'absolute',top:top-20, left:left-20, display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center'}}>
      <p>{office.text}</p>
    </div>
  )
}

const setImageToCanvas = () => {
  const setCurrentImage = () =>{
    setDarggImage({dragg:false})
    addImage(draggImage.image)
  }
  return(
    <div onClick={setCurrentImage} style={{zIndex:999,width:100,height:100, background:'rgba(0,0,0,0.3)', position:'absolute',top:top-50, left:left-50, display:'flex', justifyContent:'center', alignItems:'center'}}>
      <img src={draggImage.image} />
    </div>
  )
}


  const addOffice = (text, color) => {
    let textbox = new fabric.Text(text, {
      top:top-20, 
      left:left-20,
      width: 300,
      maxWidth: 300,
      maxLines: 2,
      textAlign: "center",
      // backgroundColor: color,
      absolutePositioned: true,
    });
    canvas.add(textbox);
  };

  const addImage = (image) => {
    var real = fabric.util.createCanvasElement();
    real.height = 100;
    real.width = 100;
    let img = new Image();
    img.crossOrigin = "anonymous";
    img.src = image;
    img.onload = function () {
      var image = new fabric.Image(img);
      var scale = Math.min(
        real.width / image.width,
        real.height / image.height
      );
      image.set({
        originY: "top",
        originX: "left",
        scaleY: scale,
        scaleX: scale,
        top:top-50, 
        left:left-50,
      });
      canvas.add(image);
    };
  };

  const uploadImage = (canvi, image) => {
    const img = new fabric.Image.fromURL(
      URL.createObjectURL(image),
      (myImg) => {
        var img1 = myImg.set({
          left: window.innerWidth / 4,
          top: 100,
          width: 1200,
          height: 800,
          selectable: false,
          evented: false,
        });
        canvas.add(img1);
      }
    );
  };
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "repeat" }}>
      {office.dragg&&dragOffice()} 
      {draggImage.dragg&&setImageToCanvas()} 
      <Sidebar type={type} setType={addImage} addOffice={addOffice} selectOffice={selectOffice} draggImage={setDarggImage}/>
      <canvas id="canvas" />
      <div className="right_bar">
        <div>
          <label htmlFor="upload">
            <img src={picture} width={20} height={20} />
            <input
              id="upload"
              type="file"
              accept="image/png, image/jpeg"
              hidden
              onChange={(e) => uploadImage(canvas, e.target.files[0])}
            />
          </label>
          <div>
            <img src={block} width={20} height={20} />
          </div>
          <div>
            <img src={eye} />
          </div>
        </div>
      </div>
    </div>
  );
}
