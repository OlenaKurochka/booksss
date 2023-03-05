import React from "react";

import '../styles/page404.css'

export default function Page404(props) {
    return(
        <section className="page404">
            <div className="page404_content">
                <h3 className="page404_title">Oops,something went wrong...</h3>
                <h1 className="page404_text">404 error</h1>
                <img className="img404" alt="PageNotFound" src="https://cdni.iconscout.com/illustration/premium/thumb/error-404-page-3100479-2583000.png"/>

            </div>

        </section>
    )
}