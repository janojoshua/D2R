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
    return(
        <>
            {/* ------ Header part ------ */}
            <div class="page-banner home-banner mb-5">
                <div class="slider-wrapper">
                    <div class="owl-carousel hero-carousel">
                        <div class="hero-carousel-item">
                            <img src={teaser_img.default} alt= "img"/>
                            <div class="img-caption">
                                <h1 class="mb-4">Holistic 3D Body Reconstruction from a Blurred Image </h1>
                                <div class="subhead">In CVPR 2022 Submission</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}