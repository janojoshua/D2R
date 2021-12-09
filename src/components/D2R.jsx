import React from "react";
// , { useEffect, useState}
import '../App.css';
import '../css/theme.css'
import '../css/bootstrap.css'
import '../css/maicons.css'
import '../vendor/animate/animate.css'
import '../vendor/owl-carousel/css/owl.carousel.css'
import '../vendor/fancybox/css/jquery.fancybox.css'

// const MethodContext = React.createContext({
//     Method_info: [], fetchMethod_info: () => {}
//   })

export default function D2R(){
    // const [method, setMethod] = useState([])
    var teaser_img = require('./assets/teaser_2.png')
    var framework_img = require('./assets/framework_1.png')
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
            {/* ------------------------- */}
        </>
    )

}