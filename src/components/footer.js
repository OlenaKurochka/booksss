import React from "react";

import '../styles/footer.css'

export default function Footer(props) {
    return(
        <section className="footer">
            <div className="footer_content">
                <h1 className="footer_title">Виконано в&nbsp;
                    <a className="footer_link" href="https://prometheus.org.ua/" target="_blank" rel="noopener noreferrer">
                    Prometheus</a>                    
                    &nbsp;&#169; 2022 
                </h1>
            </div>                
        </section>
    )
}