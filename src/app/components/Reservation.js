import Link from "next/link";

export default function Reservation() {
  return (
    <div className="bg-dark text-light pt30 pb30">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* Left Section: Title + Date Picker */}
          <div className="col-lg-9">
            <div className="row g-4 align-items-center">
              {/* Reservation Title */}
              <div className="col-md-4 text-md-start text-center">
                <h3 className="mb-0">Reservation</h3>
              </div>

              {/* Date Picker */}
              <div className="col-md-8">
                <div className="text-center">
                  <h6 className="id-color mb-1">Choose Date & Time</h6>
                  <input
                    type="text"
                    id="date-picker"
                    className="form-control no-border no-bg bg-focus-color text-white fs-20 text-center"
                    name="date"
                    defaultValue=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Button */}
          <div className="col-lg-3 text-lg-end text-center">
            <Link className="btn-main" href="/services">
              Check Availability
            </Link>
          </div>
        </div>
      </div>
    </div>

    // <div className="bg-dark text-light pt30 pb30">
    //   <div className="container">
    //     <div className="row g-4 align-items-center">
    //       <div className="col-lg-9">
    //         <div className="row g-4 align-items-center">
    //           <div className="col-md-3 text-lg-start text-center">
    //             <h3 className="mb-0">Reservation</h3>
    //           </div>

    //           <div className="col-md-3">
    //             <div className="text-center ">
    //               <h6 className="id-color mb-1">Choose Date</h6>
    //               <input type="text" id="date-picker" className="form-control no-border no-bg bg-focus-color text-white fs-20 text-right text-center" name="date" defaultValue="" />
    //             </div>
    //           </div>
    //           <div className="col-md-3">
    //             <div className="text-center ">
    //               <h6 className="id-color">Adult</h6>
    //               <div className="de-number">
    //                 <span className="d-minus">-</span>
    //                 <input type="text" className="no-border no-bg" defaultValue="1" />
    //                 <span className="d-plus">+</span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="col-md-3">
    //             <div className="text-center ">
    //               <h6 className="id-color">Children</h6>
    //               <div className="de-number">
    //                 <span className="d-minus">-</span>
    //                 <input type="text" className="no-border no-bg" defaultValue="0" />
    //                 <span className="d-plus">+</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="col-lg-3 text-lg-end text-center">
    //         <Link className="btn-main" href="/rooms">Check Availability</Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
