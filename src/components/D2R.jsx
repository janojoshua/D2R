import React from "react";
// , { useEffect, useState}
import '../App.css';
import '../css/theme.css'
import '../css/bootstrap.css'
import '../css/maicons.css'
import '../vendor/animate/animate.css'
import '../vendor/owl-carousel/css/owl.carousel.css'
import '../vendor/fancybox/css/jquery.fancybox.css'

//--Run method
function RunMethod(){
    const [item, setItem] = React.useState("")
    const [time, setTime] = React.useState({})
    const [ImgName, setImg] = React.useState("")
    //--Function to handle input from HTML
    const handleInput = event  => {
        var imageFile = event.target.files[0];
        // console.log(imageFile)
        setImg(imageFile['name'])
        
        var reader = new FileReader();
        //--Handle to show image  
        reader.onload = function (e) {
            var img = document.createElement("img");    
            img.onload = function (event) {
                //--Handle to resize the image
                var canvas = document.createElement("canvas");
                canvas.width = 256;
                canvas.height = 256;

                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, 256, 256);
                var dataurl = canvas.toDataURL(imageFile.type);

                document.getElementById("input-image").src = dataurl;
                console.log(dataurl)
            }
            img.src = e.target.result;
            console.log(e.target.result)
        }
        reader.readAsDataURL(imageFile)
        setItem(imageFile['name'])
    }
    const handleSubmit = async (event) => {
        const newTodo = {
            "path": item
        }
        const response = await fetch("/d2r", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTodo)
            })
        //--Get the response from FastAPI 
        const data = await response.json()
        setTime(data)
        console.log(data['js_mesh_only'])
        console.log(data['encoded_mesh_only'])
        Render_image("d2r-mesh-only", data['mesh_only'])
        Render_image("d2r-mesh-image", data['mesh_image'])
        
        }
    return (
        <>
            <input accept="image/*" type='file' onChange={handleInput} />
                <div class="row mt-3">
                    <div class="col-lg-4 py-3">
                        <img id="input-image" src="#" alt=""/>
                    </div> 
                    <div class="col-lg-4 py-3">
                        <img id="d2r-mesh-image" src="#" alt=""/>
                    </div>
                    <div class="col-lg-4 py-3">
                        <img id="d2r-mesh-only" src="#" alt=""/>
                    </div>
                </div>
                <div class="text-center">
                    <h5> Filename: {ImgName} </h5>
                    <h5> Prediction time: {time['pred_time']} </h5>
                    <button type="button" onClick={handleSubmit} class="btn btn-primary px-5"> Run method</button>
                    
                </div>
        </>
    )
}
function Render_image(var_name, encoded_img){
    var dataurl = "data:image/png;base64," + encoded_img
    console.log(encoded_img)
    document.getElementById(var_name).src = dataurl;
    // reader.readAsDataURL(imageFile)
}
export default function D2R(){
    // const [method, setMethod] = useState([])
    var teaser_img = require('./assets/teaser_2.png')
    var framework_img = require('./assets/framework_1.png')
    var gif_1 = require('./assets/gif/1.gif')
    var gif_2 = require('./assets/gif/2.gif')
    var gif_3 = require('./assets/gif/3.gif')

    var input_1 = require('./assets/1703.png')
    var gif_ex1 = require('./assets/gif/ex_1.gif')
    var gif_naive1 = require('./assets/gif/naive_1.gif')
    var gif_our1 = require('./assets/gif/ours_1.gif')
    return(
        <>
            {/* ------ Header part ------ */}
            <div class="page-banner home-banner mb-5">
                <div class="slider-wrapper">
                    <div class="owl-carousel hero-carousel">
                        <div class="hero-carousel-item">
                            <img src={teaser_img.default} alt= "gambar teaser"/>
                            <div class="img-caption">
                                <h1 class="mb-4">Holistic 3D Body Reconstruction from a Blurred Image </h1>
                                <div class="subhead">In CVPR 2022 Submission</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------ Abstract ------ */}
            <div class="page-section">
                <div class="container">
                    <div class="text-center">
                        <h2 class="title-section">Abstract</h2>
                        <div class="row mt-3">
                        <p>Holistic human pose and shape reconstruction receive huge 
                           interest since it restores detailed human pose and shape 
                           including facial expression and finger-level hand shape. 
                           Existing deep 3D holistic human pose and shape reconstruction methods 
                           utilize sharp images as their input which leads to inaccurate human mesh 
                           when given a blurred image. Although there exist lots of image deblurring methods, 
                           a simple cascaded approach could not produce satisfactory results. 
                           In this paper, we introduce D2R~(Deblurring-to-Reconstruction), 
                           a novel joint framework of human motion deblurring and 
                           3D holistic body reconstruction to solve both problems simultaneously. 
                           In addition, we generate a new large-scale dataset that contains 
                           sharp/blur image pairs and corresponding 3D body pose/shape. 
                           We train the proposed joint framework in an alternating scheme 
                           to refine each module's performance by utilizing an additional structure-aware module. 
                           Experimental results show that the proposed method achieves outperforming results 
                           3D holistic human reconstruction qualitatively as well as quantitatively 
                           while input image is deblurred. </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------ Framework part ------ */}
            <div class="page-section">
                <div class="container">
                    <div class="text-center">
                        <h2 class="title-section">Our framework</h2>
                        <div class="hero-carousel-item-framework">
                            <img src={framework_img.default} alt="gambar framework"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------ Live demo ------ */}
            <div class="page-section">
                <div class="container">
                    <div class="text-center">
                        <h2 class="title-section">Live demo</h2>
                        <RunMethod />
                    </div>
                </div>
            </div>
            
            {/* ------ Qualitative result------ */}
            <div class="page-section">
                <div class="container">
                    <div class="text-center">
                        <h2 class="title-section">Comparison result</h2>
                        {/* <div class="owl-carousel team-carousel mt-5"> */}
                            <div class="row mt-3">
                                <div class="col-lg-4 py-3">
                                </div> 
                                <div class="col-lg-4 py-3">
                                    <img src={input_1.default}  width="256" alt="gambar gif"/>
                                    <h5 class="title-section">Input</h5>
                                </div> 
                                <div class="col-lg-4 py-3">
                                </div> 
                                <div class="col-lg-4 py-3">
                                    <img src={gif_ex1.default}  width="256" alt="gambar gif"/>
                                    <h5 class="title-section">ExPose</h5>
                                </div> 
                                <div class="col-lg-4 py-3">
                                    <img src={gif_naive1.default}  width="256" alt="gambar gif"/>
                                    <h5 class="title-section">Deblur + ExPose</h5>
                                </div>
                                <div class="col-lg-4 py-3">
                                    <img src={gif_our1.default}  width="256" alt="gambar gif"/>
                                    <h5 class="title-section">Ours</h5>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>

            {/* ------ Qualitative result------ */}
            <div class="page-section">
                <div class="container">
                    <div class="text-center">
                        <h2 class="title-section">More Qualitative results</h2>
                        {/* <div class="owl-carousel team-carousel mt-5"> */}
                            <div class="row mt-3">
                                <div class="col-lg-4 py-3">
                                    <img src={gif_1.default}  width="256" alt="gambar gif"/>
                                </div> 
                                <div class="col-lg-4 py-3">
                                    <img src={gif_2.default}  width="256" alt="gambar gif"/>
                                </div>
                                <div class="col-lg-4 py-3">
                                    <img src={gif_3.default}  width="256" alt="gambar gif"/>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>

            {/* ------Footer------------- */}
            <footer class="page-footer">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-3 py-3">
                      {/* <h3>Rve<span class="fg-primary">Tive.</span></h3> */}
                    </div>
                    <div class="col-lg-3 py-3">
                      {/* <h5>Contact Information</h5> */}
                      {/* <p>301 The Greenhouse, Custard Factory, London, E2 8DY.</p> */}
                      {/* <p>Email: example@mail.com</p> */}
                      {/* <p>Phone: +00 112323980</p> */}
                    </div>
                    <div class="col-lg-3 py-3">
                      {/* <h5>Company</h5> */}
                      {/* <ul class="footer-menu"> */}
                        {/* <li><a href="#">Career</a></li> */}
                        {/* <li><a href="#">Resources</a></li> */}
                        {/* <li><a href="#">News & Feed</a></li> */}
                      {/* </ul> */}
                    </div>
                    <div class="col-lg-3 py-3">
                      {/* <h5>Newsletter</h5>
                      <form action="#">
                        <input type="text" class="form-control" placeholder="Enter your email" />
                        <button type="submit" class="btn btn-primary btn-sm mt-2">Submit</button>
                      </form> */}
                    </div>
                  </div>

                  {/* <hr /> */}

                  <div class="row mt-4">
                    <div class="col-md-6">
                      <p>Copyright 2020. This template designed by <a href="https://macodeid.com">MACode ID</a></p>
                    </div>
                    <div class="col-md-6 text-right">
                      <div class="sosmed-button">
                        {/* <a href="#"><span class="mai-logo-facebook-f"></span></a>
                        <a href="#"><span class="mai-logo-twitter"></span></a>
                        <a href="#"><span class="mai-logo-youtube"></span></a>
                        <a href="#"><span class="mai-logo-linkedin"></span></a> */}
                      </div>
                    </div>
                  </div>
                </div>
            </footer>
        </>
    )

}