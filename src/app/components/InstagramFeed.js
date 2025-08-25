import React from "react";
import Link from "next/link";

// Helper function to split array into chunks
function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

export default function InstagramFeed() {
  const instagramImages = [
    "/images/the_salon_company/1.JPG",
    "/images/the_salon_company/2.JPG",
    "/images/the_salon_company/3.JPG",
    "/images/the_salon_company/4.JPG",
    "/images/the_salon_company/5.JPG",
    "/images/the_salon_company/6.JPG",
    "/images/the_salon_company/7.JPG",
    "/images/the_salon_company/8.JPG",
  ];


  // Split into two chunks of 4
  const imageChunks = chunkArray(instagramImages, 4);

  return (
    <section className="bg-light relative pt50 no-bottom">
      <div className="container relative z-2">
        <div className="row g-4">
          <div className="col-lg-8 offset-lg-2 mb-4 text-center">
            <div className="subtitle id-color wow fadeInUp mb-3">
              Our Instagram
            </div>
            <h2 className="wow fadeInUp">@the_salon_company</h2>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row g-0">
          {imageChunks.map((chunk, colIndex) => (
            <div className="col-md-6" key={colIndex}>
              <div className="row g-0">
                {chunk.map((src, index) => (
                  <div className="col-3" key={index}>
                    <a
                      href="#"
                      className="d-block hover relative overflow-hidden text-light h-100"
                    >
                      <img
                        src={src}
                        className="w-100 hover-scale-1-1 object-fit-cover h-100"
                        alt={`Instagram post ${colIndex * 4 + index + 1}`}
                      />
                      <div className="abs abs-centered fs-24 text-white hover-op-0">
                        <i className="fa-brands fa-instagram"></i>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// import React from "react";
// import Link from "next/link"; // Using Link in case these are internal pages in the future

// export default function InstagramFeed() {
//   // Array of image sources to keep the JSX clean
//   const instagramImages = [
//     "/images/gallery-square/1.webp",
//     "/images/gallery-square/2.webp",
//     "/images/gallery-square/3.webp",
//     "/images/gallery-square/4.webp",
//     "/images/gallery-square/5.webp",
//     "/images/gallery-square/6.webp",
//     "/images/gallery-square/7.webp",
//     "/images/gallery-square/8.webp",
//   ];

//   return (
//     <section className="bg-light relative pt50 no-bottom">
//       <div className="container relative z-2">
//         <div className="row g-4">
//           <div className="col-lg-8 offset-lg-2 mb-4 text-center">
//             <div className="subtitle id-color wow fadeInUp mb-3">
//               Our Instagram
//             </div>
//             <h2 className="wow fadeInUp">@the_salon_company</h2>
//           </div>
//         </div>
//       </div>

//       <div className="container-fluid">
//         <div className="row g-0">
//           <div className="col-md-6">
//             <div className="row g-0">
//               {instagramImages.map((src, index) => (
//                 <div className="col-3" key={index}>
//                   <a
//                     href="#"
//                     className="d-block hover relative overflow-hidden text-light"
//                   >
//                     <img
//                       src={src}
//                       className="w-100 hover-scale-1-1"
//                       alt={`Instagram post ${index + 1}`}
//                     />
//                     <div className="abs abs-centered fs-24 text-white hover-op-0">
//                       <i className="fa-brands fa-instagram"></i>
//                     </div>
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
